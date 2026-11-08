// Daftar lesson tiap modul diisi dari content/*.js (window.lessonTitles); metadata modul ada di js/modules.js.
modules.forEach(m => { m.lessons = window.lessonTitles[m.id] || []; });
const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
const storageKey = "grammarJourneyStateV1";
const defaultState = { name: "Havidz", dailyGoal: 1, beginnerMode: true, completed: [], mistakes: [], scores: [], lastLesson: null, streak: 0, lastStudyDate: null, practiceBest: {} };
let state = loadState();
let currentView = "dashboard";
let activeModule = modules[0];
let activeLessonIndex = 0;
let practice = null;      // sesi Practice (js/practice.js)
let lessonRun = null;     // sesi kuis di Lesson (mesin soal: js/questions.js)

const app = document.getElementById("app");
const settingsDialog = document.getElementById("settingsDialog");

function loadState() {
  try { return { ...defaultState, ...JSON.parse(localStorage.getItem(storageKey) || "{}") }; }
  catch { return { ...defaultState }; }
}

function saveState() {
  // localStorage bisa melempar error (mode private, kuota penuh); app tetap jalan tanpa menyimpan.
  try { localStorage.setItem(storageKey, JSON.stringify(state)); }
  catch { if (!saveState.warned) { saveState.warned = true; showToast("Progress tidak bisa disimpan di browser ini"); } }
  updateChrome();
}

function lessonId(module, index) { return `${module.id}-${index}`; }
// Konten satu lesson (definition, pattern, examples, wrong, right, challenge, quiz, guide) dari content/*.js.
function lessonInfo(module, index) { return window.lessonData[module.id][index]; }
// Kuis lesson: 15–20 soal bervariasi yang dibuat dari isi lesson (lihat buildLessonQuiz di js/questions.js).
function lessonQuestions(module, index) { return buildLessonQuiz(module, index); }
function completedCount(module) { return module.lessons.filter((_, i) => state.completed.includes(lessonId(module, i))).length; }
function pct(done, total) { return total ? Math.round((done / total) * 100) : 0; }
function overallPercent() { return pct(state.completed.length, totalLessons); }
function greeting() {
  const hour = new Date().getHours();
  if (hour < 11) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}
function dateKey(d) { return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; }
function todayKey() { return dateKey(new Date()); }
function todayDone() { return state.scores.filter(score => score.date === todayKey() && score.completed).length; }
function averageScore() { return state.scores.length ? Math.round(state.scores.reduce((s, x) => s + x.score, 0) / state.scores.length) : 0; }

function updateChrome() {
  const progress = overallPercent();
  const bar = document.getElementById("sideProgress");
  const text = document.getElementById("sideProgressText");
  const badge = document.getElementById("reviewBadge");
  if (bar) bar.style.width = `${progress}%`;
  if (text) text.textContent = `${state.completed.length} of ${totalLessons} lessons`;
  if (badge) badge.textContent = state.mistakes.length;
  document.querySelectorAll(".profile-card strong").forEach(el => el.textContent = state.name);
  document.querySelectorAll(".avatar,.icon-button").forEach(el => el.textContent = initials(state.name));
}

function initials(name) { return name.trim().split(/\s+/).slice(0,2).map(x => x[0]).join("").toUpperCase() || "HI"; }
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

// ── Helper tampilan ─────────────────────────────────────
const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
// Emoji bendera tidak tampil di Windows (muncul sebagai teks "ID"), jadi pakai lencana sendiri.
const ID_BADGE = '<span class="id-badge" aria-label="Bahasa Indonesia">ID</span>';
const unitNo = module => String(module.number).padStart(2, "0");
const STEP_LABELS = ["Understand", "Pattern", "Apply", "Check"];
let learnFilter = "all";
let lessonStep = 1;

function setActiveNav(view) {
  document.querySelectorAll("[data-view]").forEach(button => {
    const on = button.dataset.view === view;
    button.classList.toggle("active", on);
    if (!button.classList.contains("nav-item")) return;
    if (on) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
  });
}

function navigate(view) {
  currentView = view;
  setActiveNav(view);
  window.scrollTo(0, 0);
  if (view === "dashboard") renderDashboard();
  if (view === "learn") renderLearn();
  if (view === "practice") renderPractice();
  if (view === "review") renderReview();
  if (view === "progress") renderProgress();
  if (view === "module") renderModule(activeModule);
  if (view === "lesson") renderLesson(activeModule,activeLessonIndex);
}

// ── Home ────────────────────────────────────────────────
function renderDashboard() {
  const recent = state.lastLesson ? findLesson(state.lastLesson) : { module: modules[0], index: 0 };
  app.innerHTML = heroSection(recent) + statsSection() + pathSection();
}

function heroSection(recent) {
  const goal = state.dailyGoal;
  const shown = Math.min(todayDone(), goal);
  const fresh = !state.completed.length && !state.lastLesson;
  const target = `data-open-lesson="${recent.module.id}" data-lesson-index="${recent.index}"`;
  return `
    <section class="hero">
      <div class="hero-main">
        <span class="eyebrow">Book 1 · Foundation</span>
        <h1>${greeting()}, ${escapeHtml(state.name)}.</h1>
        <div class="next-up">
          <span class="next-label">${fresh ? "Start here" : "Continue where you left off"}</span>
          <strong>${recent.module.lessons[recent.index]}</strong>
          <small>Unit ${unitNo(recent.module)} · ${recent.module.title}</small>
        </div>
        <div class="hero-actions">
          <button class="button light" ${target}>${fresh ? "Start lesson" : "Continue learning"} ${icon("arrow")}</button>
          <button class="button ghost-dark" data-start-practice="mixed">Quick practice</button>
        </div>
      </div>
      <div class="hero-goal">
        <span class="eyebrow">Today's goal</span>
        <div class="goal-number"><strong>${shown}/${goal}</strong><span>lesson${goal > 1 ? "s" : ""} done today</span></div>
        <div class="progress-track"><span style="width:${pct(shown, goal)}%"></span></div>
        <p class="goal-note">${shown >= goal ? "Goal reached. Nice work!" : "Finish a lesson to reach today's goal."} ${state.streak ? `${state.streak}-day streak.` : ""}</p>
      </div>
    </section>`;
}

function statsSection() {
  const stat = (name, value, label) => `<article class="stat-card"><span class="stat-icon">${icon(name)}</span><span class="stat-value">${value}</span><span class="stat-label">${label}</span></article>`;
  return `
    <section class="stats-grid" aria-label="Your stats">
      ${stat("progress", `${overallPercent()}%`, "Book progress")}
      ${stat("learn", state.completed.length, "Lessons completed")}
      ${stat("practice", `${averageScore()}%`, "Average accuracy")}
      ${stat("review", state.mistakes.length, "Items to review")}
    </section>`;
}

function pathSection() {
  return `
    <section class="section">
      <div class="section-head"><div><span class="eyebrow">Your learning path</span><h2>Book 1 curriculum</h2></div><button class="button text" data-view="learn">View all units ${icon("arrow")}</button></div>
      <div class="module-grid">${modules.slice(0,6).map(moduleCard).join("")}</div>
    </section>`;
}

function moduleCard(module) {
  const done = completedCount(module);
  const progress = pct(done, module.lessons.length);
  return `<article class="module-card" data-open-module="${module.id}" tabindex="0" role="button" aria-label="Unit ${unitNo(module)}: ${module.title}">
    <div class="module-number"><span>UNIT ${unitNo(module)}</span><span>${module.pages}</span></div>
    <div class="module-icon">${module.icon}</div>
    <h3>${module.title}</h3><p>${module.description}</p>
    <div class="module-footer"><div class="progress-track"><span style="width:${progress}%"></span></div><small>${done}/${module.lessons.length}</small></div>
  </article>`;
}

// ── Learn & Unit ────────────────────────────────────────
function filteredModules() {
  return modules.filter(module => {
    const done = completedCount(module);
    if (learnFilter === "progress") return done > 0 && done < module.lessons.length;
    if (learnFilter === "done") return module.lessons.length > 0 && done === module.lessons.length;
    return true;
  });
}

function renderLearn() {
  const filters = [["all", "All units"], ["progress", "In progress"], ["done", "Completed"]];
  const list = filteredModules();
  app.innerHTML = `
    <header class="page-head"><div><span class="eyebrow">Book 1 · Foundation</span><h1>Learn grammar, one step at a time.</h1><p>Eleven units adapted from your original school book into ${totalLessons} focused micro-lessons.</p></div></header>
    <div class="filter-row" role="group" aria-label="Filter units">${filters.map(([key, label]) => `<button class="chip ${learnFilter === key ? "active" : ""}" data-filter="${key}" aria-pressed="${learnFilter === key}">${label}</button>`).join("")}</div>
    ${list.length ? `<div class="module-grid">${list.map(moduleCard).join("")}</div>` : `<section class="empty-state"><div class="empty-icon">${icon("learn")}</div><h3>No units here yet</h3><p>${learnFilter === "done" ? "Finish every lesson in a unit and it will show up here." : "Open any unit and complete a lesson to see it here."}</p><button class="button primary" data-filter="all">Show all units</button></section>`}`;
}

function renderModule(module) {
  currentView = "module";
  activeModule = module;
  setActiveNav("learn");
  const done = completedCount(module);
  app.innerHTML = `
    <header class="page-head"><div><button class="button text" data-view="learn">${icon("back")} All units</button><span class="eyebrow">Unit ${unitNo(module)} · Book pages ${module.pages}</span><h1>${module.title}</h1><p>${module.description}</p></div><div class="module-icon">${module.icon}</div></header>
    <section class="content-card">
      <div class="section-head"><div><span class="eyebrow">Unit roadmap</span><h2>${module.lessons.length} short lessons</h2></div><strong>${done}/${module.lessons.length}</strong></div>
      <div class="progress-track"><span style="width:${pct(done,module.lessons.length)}%"></span></div>
      <div class="lesson-list">${module.lessons.map((title,index) => {
        const isDone = state.completed.includes(lessonId(module,index));
        const questions = lessonQuestions(module, index).length;
        return `<article class="lesson-row ${isDone ? "done" : ""}" data-open-lesson="${module.id}" data-lesson-index="${index}" tabindex="0" role="button"><span class="lesson-status">${isDone ? icon("check") : index+1}</span><div><h4>${title}</h4><p>${questions} practice questions</p></div><span class="lesson-time">${isDone ? "Done" : "Start"} ${icon("arrow")}</span></article>`;
      }).join("")}</div>
    </section>`;
}

// ── Lesson (bertahap: Understand → Pattern → Apply → Check) ──
function renderLesson(module, index, keepProgress = false) {
  const resumeStep = keepProgress ? lessonStep : 1;
  currentView = "lesson";
  activeModule = module;
  activeLessonIndex = Number(index);
  if (!keepProgress || !lessonRun) lessonRun = newRun(lessonQuestions(module, activeLessonIndex));
  lessonStep = 1;
  setActiveNav("learn");
  state.lastLesson = lessonId(module, activeLessonIndex);
  saveState();
  const title = module.lessons[activeLessonIndex];
  const info = lessonInfo(module, activeLessonIndex);
  const done = state.completed.includes(lessonId(module,activeLessonIndex));
  app.innerHTML = `
    <div class="lesson-layout">
      ${lessonSidebar(module)}
      <div class="lesson-content">
        ${lessonHero(module, title)}
        ${lessonPanels(info, done)}
      </div>
    </div>`;
  renderLessonQuiz();
  if (resumeStep > 1) showStep(resumeStep);
}

function lessonSidebar(module) {
  return `
    <aside class="lesson-sidebar">
      <button class="button text" data-open-module="${module.id}">${icon("back")} Unit overview</button>
      <span class="eyebrow">Unit ${unitNo(module)}</span><h3>${module.title}</h3><p>Book 1, pages ${module.pages}</p>
      <div class="lesson-steps" role="group" aria-label="Lesson steps">${STEP_LABELS.map((label, i) => `<button class="step-pill ${i === 0 ? "active" : ""}" data-step-go-to="${i + 1}" ${i === 0 ? 'aria-current="step"' : ""}><span class="step-dot">${i + 1}</span>${label}</button>`).join("")}</div>
    </aside>`;
}

function lessonHero(module, title) {
  return `<header class="lesson-hero"><div class="lesson-hero-top"><span class="eyebrow">Lesson ${activeLessonIndex + 1} of ${module.lessons.length}</span><button class="assist-toggle ${state.beginnerMode ? "on" : ""}" data-toggle-help aria-pressed="${state.beginnerMode}">${ID_BADGE} Bantuan ${state.beginnerMode ? "aktif" : "nonaktif"}</button></div><h1>${title}</h1></header>`;
}

function stepNav(step) {
  const back = step > 1 ? `<button class="button ghost" data-step-go="prev">${icon("back")} Back</button>` : "<span></span>";
  const next = step < 4 ? `<button class="button primary" data-step-go="next">Next: ${STEP_LABELS[step]} ${icon("arrow")}</button>` : "<span></span>";
  return `<div class="step-nav">${back}<span class="step-count">Step ${step} of 4</span>${next}</div>`;
}

function lessonPanels(info, done) {
  const guide = info.guide;
  const panel = (n, body) => `<div class="step-panel" data-step-panel="${n}" ${n === 1 ? "" : "hidden"}>${body}${stepNav(n)}</div>`;
  return [
    panel(1, `${state.beginnerMode ? assistSection(guide) : ""}<section class="content-card"><h2>The core idea</h2><div class="definition">${info.definition}</div></section>`),
    panel(2, `<section class="content-card"><h2>Keep this structure in mind</h2>${patternHtml(info.pattern)}</section>${examplesCard(info, guide)}`),
    panel(3, `<section class="content-card"><h2>Notice the difference</h2><div class="mistake"><div class="wrong">${icon("x")}<span>${info.wrong}</span></div><div class="right">${icon("check")}<span>${info.right}</span></div></div></section>${challengeCard(info, guide)}`),
    panel(4, `<section class="quiz-card" id="lessonQuiz"></section>`)
  ].join("");
}

// Pola dari buku: "Label: isi" jadi baris berlabel; baris lain tampil apa adanya (bukan monospace).
function patternHtml(pattern) {
  const rows = pattern.split("\n").map(line => {
    const m = line.match(/^([^:]{1,34}):\s+(.+)$/);
    return m ? `<div class="pattern-row"><span class="pattern-label">${m[1]}</span><span>${m[2]}</span></div>` : `<div class="pattern-row plain"><span>${line}</span></div>`;
  });
  return `<div class="pattern-box">${rows.join("")}</div>`;
}

function assistSection(guide) {
  return `<section class="beginner-assist"><div class="assist-heading">${ID_BADGE}<h2>Tenang, kita pahami pelan-pelan.</h2></div><p>${guide.summary}</p><div class="simple-tip"><strong>Cara mudah memahaminya</strong><span>${guide.pattern}</span></div><div class="vocab-list">${guide.vocab.map(([word,meaning]) => `<span><strong>${word}</strong> = ${meaning}</span>`).join("")}</div></section>`;
}

function examplesCard(info, guide) {
  return `<section class="content-card"><h2>Examples for your global journey</h2><div class="example-grid">${info.examples.map((item,i) => `<div class="example"><strong>${item[0]}</strong>${state.beginnerMode ? `<span class="translation">${ID_BADGE}${guide.translations[i]}</span>` : ""}<small>${item[1]}</small></div>`).join("")}</div></section>`;
}

function challengeCard(info, guide) {
  return `<section class="content-card"><div class="challenge"><span>CAREER ENGLISH CHALLENGE</span><p>${info.challenge}</p>${state.beginnerMode ? `<small class="challenge-help">Maksud tugas: ${guide.challenge}</small>` : ""}</div></section>`;
}

// Kuis lesson: satu soal per layar, jenis soal bervariasi (mesin soal bersama dengan Practice).
function renderLessonQuiz() {
  const box = document.getElementById("lessonQuiz");
  if (!box) return;
  const r = lessonRun, q = r.questions[r.index], total = r.questions.length, info = KIND_INFO[q.kind];
  box.innerHTML = `
    <div class="quiz-progress"><span class="question-label">Question ${r.index + 1} of ${total}</span><div class="progress-track" aria-hidden="true"><span style="width:${pct(r.index + (r.answered ? 1 : 0), total)}%"></span></div></div>
    <span class="eyebrow">${info.label}</span>
    ${info.hint ? `<p class="q-hint">${info.hint}</p>` : ""}
    ${practiceBody(q)}
    <div class="feedback ${r.answered ? "show" : ""}" id="practiceFeedback" role="status">${practiceFeedback(q)}</div>
    <div class="quiz-actions">${practiceActions(q)}</div>`;
}

function showStep(step) {
  lessonStep = Math.max(1, Math.min(4, step));
  document.querySelectorAll("[data-step-panel]").forEach(panel => { panel.hidden = Number(panel.dataset.stepPanel) !== lessonStep; });
  document.querySelectorAll("[data-step-go-to]").forEach(pill => {
    const n = Number(pill.dataset.stepGoTo);
    pill.classList.toggle("active", n === lessonStep);
    pill.classList.toggle("done", n < lessonStep);
    if (n === lessonStep) pill.setAttribute("aria-current", "step"); else pill.removeAttribute("aria-current");
    pill.querySelector(".step-dot").innerHTML = n < lessonStep ? icon("check") : String(n);
  });
  window.scrollTo(0, 0);
}

// Tandai jawaban: warna + ikon + teks, supaya benar/salah tidak hanya dibedakan lewat warna.
function markAnswers(buttons, chosen, correct) {
  buttons.forEach((button, i) => {
    if (i === correct) { button.classList.add("correct"); button.insertAdjacentHTML("beforeend", `<span class="answer-mark">${icon("check")} Correct</span>`); }
    else if (i === chosen) { button.classList.add("wrong"); button.insertAdjacentHTML("beforeend", `<span class="answer-mark">${icon("x")} Your answer</span>`); }
  });
}

function completeLesson() {
  const id = lessonId(activeModule,activeLessonIndex);
  if (!state.completed.includes(id)) {
    state.completed.push(id);
    const answered = lessonRun.index + (lessonRun.answered ? 1 : 0);
    const score = answered ? Math.round(lessonRun.score / answered * 100) : 100;
    state.scores.push({ module:activeModule.id, lesson:activeLessonIndex, score, date:todayKey(), completed:true });
    updateStreak();
    saveState();
    showToast("Lesson completed — great work!");
  }
  const next = nextLesson(activeModule, activeLessonIndex);
  if (next) setTimeout(() => renderLesson(next.module,next.index), 450);
  else { showToast("Book 1 completed. That is a serious milestone!"); renderProgress(); }
}

function updateStreak() {
  const today = todayKey();
  if (state.lastStudyDate === today) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  state.streak = state.lastStudyDate === dateKey(yesterday) ? state.streak + 1 : 1;
  state.lastStudyDate = today;
}

function addMistake(module,index,question) {
  const key = `${module.id}-${question.q}`;
  if (!state.mistakes.some(x => x.key === key)) state.mistakes.push({ key,module:module.id,index,q:question.q,explanation:question.x });
}

function nextLesson(module,index) {
  if (index < module.lessons.length-1) return { module,index:index+1 };
  const moduleIndex = modules.findIndex(x => x.id === module.id);
  return moduleIndex < modules.length-1 ? { module:modules[moduleIndex+1],index:0 } : null;
}

function findLesson(id) {
  for (const module of modules) for (let index=0; index<module.lessons.length; index++) if (lessonId(module,index) === id) return {module,index};
  return {module:modules[0],index:0};
}

// ── Review ──────────────────────────────────────────────
function renderReview() {
  const items = state.mistakes.map((item,index) => {
    const module = modules.find(x => x.id === item.module) || modules[0];
    return `<article class="review-item"><span class="marker">${module.icon}</span><div><h4>${item.q}</h4><p>${item.explanation}</p></div><div class="review-actions"><button class="button ghost" data-open-lesson="${module.id}" data-lesson-index="${item.index || 0}">Review lesson</button><button class="button text" data-remove-mistake="${index}" aria-label="Mark as learned and remove">${icon("check")} Got it</button></div></article>`;
  }).join("");
  app.innerHTML = `<header class="page-head"><div><span class="eyebrow">Personal review</span><h1>Turn mistakes into progress.</h1><p>Questions you missed stay here until you mark them as learned.</p></div></header>
    ${state.mistakes.length
      ? `<div class="review-list">${items}</div><div class="review-foot"><button class="button text" id="clearMistakes">Clear all ${state.mistakes.length} items</button></div>`
      : `<section class="empty-state"><div class="empty-icon">${icon("check")}</div><h3>Your review list is clear</h3><p>When you answer a question incorrectly, it will appear here with an explanation and a link back to the lesson.</p><button class="button primary" data-view="practice">Start mixed practice</button></section>`}`;
}

// ── Progress ────────────────────────────────────────────
function renderProgress() {
  const started = state.completed.length > 0;
  const best = [...modules].sort((a,b)=>pct(completedCount(b),b.lessons.length)-pct(completedCount(a),a.lessons.length))[0];
  const insight = (name, html) => `<div class="insight"><i>${icon(name)}</i><span>${html}</span></div>`;
  app.innerHTML = `<header class="page-head"><div><span class="eyebrow">Your progress</span><h1>Small steps, visible growth.</h1><p>Track consistency and see which grammar areas are becoming part of your active English.</p></div></header>
    <section class="progress-summary">
      <div class="big-progress"><span class="eyebrow">Book 1 completion</span><strong>${overallPercent()}%</strong><p>${state.completed.length} of ${totalLessons} lessons completed</p><div class="progress-track"><span style="width:${overallPercent()}%"></span></div></div>
      <div class="insight-card"><span class="eyebrow">Learning insights</span><h3>Your current picture</h3><div class="insight-list">
        ${insight("practice", `<strong>${averageScore()}% average accuracy.</strong> Aim for 80% or higher before calling a unit mastered.`)}
        ${insight("flame", `<strong>${state.streak}-day streak.</strong> Consistency matters more than one long study session.`)}
        ${insight("learn", started ? `<strong>${best.title}</strong> is currently your strongest unit by completion.` : `<strong>No strongest unit yet.</strong> Complete your first lesson to start tracking.`)}
        ${insight("review", `<strong>${state.mistakes.length} review items.</strong> Revisit them while the correction is still fresh.`)}
      </div></div>
    </section>
    <section class="section"><div class="section-head"><div><span class="eyebrow">Unit breakdown</span><h2>Book 1 roadmap</h2></div></div><div class="unit-progress-list">${modules.map(module=>{const progress=pct(completedCount(module),module.lessons.length);return `<article class="unit-progress-row" data-open-module="${module.id}" tabindex="0" role="button"><span class="unit-label">${unitNo(module)}</span><div><h4>${module.title}</h4><div class="progress-track"><span style="width:${progress}%"></span></div></div><strong>${progress}%</strong></article>`}).join("")}</div></section>`;
}

function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }

// ── Event ───────────────────────────────────────────────
document.addEventListener("click", event => {
  const view = event.target.closest("[data-view]");
  if (view) { navigate(view.dataset.view); return; }
  const filter = event.target.closest("[data-filter]");
  if (filter) { learnFilter = filter.dataset.filter; renderLearn(); return; }
  const moduleButton = event.target.closest("[data-open-module]");
  if (moduleButton) { renderModule(modules.find(x => x.id === moduleButton.dataset.openModule)); window.scrollTo(0, 0); return; }
  const lessonButton = event.target.closest("[data-open-lesson]");
  if (lessonButton) { renderLesson(modules.find(x => x.id === lessonButton.dataset.openLesson), Number(lessonButton.dataset.lessonIndex)); window.scrollTo(0, 0); return; }
  const stepTo = event.target.closest("[data-step-go-to]");
  if (stepTo) { showStep(Number(stepTo.dataset.stepGoTo)); return; }
  const stepMove = event.target.closest("[data-step-go]");
  if (stepMove) { showStep(lessonStep + (stepMove.dataset.stepGo === "next" ? 1 : -1)); return; }
  const removeMistake = event.target.closest("[data-remove-mistake]");
  if (removeMistake) { state.mistakes.splice(Number(removeMistake.dataset.removeMistake), 1); saveState(); renderReview(); return; }
  if (event.target.closest("#completeLesson")) { completeLesson(); return; }
  if (event.target.closest("[data-toggle-help]")) { state.beginnerMode = !state.beginnerMode; saveState(); if (currentView === "dashboard") renderDashboard(); else renderLesson(activeModule,activeLessonIndex,true); showToast(state.beginnerMode ? "Bantuan Bahasa Indonesia diaktifkan" : "English-only mode diaktifkan"); return; }
  if (event.target.closest("#clearMistakes")) { state.mistakes=[]; saveState(); renderReview(); showToast("Review list cleared"); }
});

// Kartu yang bisa diklik juga bisa dibuka dengan keyboard (Enter / Spasi).
document.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest && event.target.closest('[role="button"][tabindex]');
  if (card && card === event.target) { event.preventDefault(); card.click(); }
});

document.querySelectorAll(".profile-card,#mobileProfile").forEach(button => button.addEventListener("click", () => {
  document.getElementById("nameInput").value = state.name;
  document.getElementById("goalInput").value = state.dailyGoal;
  document.getElementById("beginnerInput").value = String(state.beginnerMode);
  settingsDialog.showModal();
}));

document.getElementById("saveSettings").addEventListener("click", event => {
  event.preventDefault();
  state.name = document.getElementById("nameInput").value.trim() || "Havidz";
  state.dailyGoal = Number(document.getElementById("goalInput").value);
  state.beginnerMode = document.getElementById("beginnerInput").value === "true";
  saveState(); settingsDialog.close(); navigate(currentView); showToast("Settings saved");
});

document.getElementById("resetButton").addEventListener("click", () => {
  if (!confirm("Reset every completed lesson, score, and review item?")) return;
  state = { ...defaultState, name:state.name, dailyGoal:state.dailyGoal, beginnerMode:state.beginnerMode, completed:[], mistakes:[], scores:[] };
  saveState(); settingsDialog.close(); navigate("dashboard"); showToast("Progress reset");
});

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js"));
updateChrome();
renderDashboard();
