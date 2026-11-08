// Daftar lesson tiap modul diisi dari content/*.js (window.lessonTitles); metadata modul ada di js/modules.js.
modules.forEach(m => { m.lessons = window.lessonTitles[m.id] || []; });
const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
const storageKey = "grammarJourneyStateV1";
const defaultState = { name: "Havidz", dailyGoal: 1, beginnerMode: true, completed: [], mistakes: [], scores: [], lastLesson: null, streak: 0, lastStudyDate: null };
let state = loadState();
let currentView = "dashboard";
let activeModule = modules[0];
let activeLessonIndex = 0;
let practice = null;

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
function lessonQuestions(module, index) { return lessonInfo(module, index).quiz; }
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

function navigate(view) {
  currentView = view;
  document.querySelectorAll("[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  window.scrollTo(0, 0);
  if (view === "dashboard") renderDashboard();
  if (view === "learn") renderLearn();
  if (view === "practice") renderPractice();
  if (view === "review") renderReview();
  if (view === "progress") renderProgress();
  if (view === "module") renderModule(activeModule);
  if (view === "lesson") renderLesson(activeModule,activeLessonIndex);
}

function renderDashboard() {
  const recent = state.lastLesson ? findLesson(state.lastLesson) : { module: modules[0], index: 0 };
  app.innerHTML = heroSection(recent) + statsSection() + continueSection(recent) + pathSection();
}

function heroSection(recent) {
  const doneToday = todayDone();
  return `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">BOOK 1 · FOUNDATION</span>
        <h1>${greeting()}, ${escapeHtml(state.name)}.</h1>
        <p>One focused lesson today brings your global career one step closer. Learn the rule, use it in context, and make it yours.</p>
        <div class="hero-actions">
          <button class="button secondary" data-open-lesson="${recent.module.id}" data-lesson-index="${recent.index}">Continue learning <span>→</span></button>
          <button class="button ghost" data-view="practice">Quick practice</button>
          <button class="button ghost help-status" data-toggle-help>🇮🇩 Beginner Assist: ${state.beginnerMode ? "On" : "Off"}</button>
        </div>
      </div>
      <div class="hero-goal">
        <div class="goal-top"><span class="eyebrow">TODAY'S GOAL</span><span>${doneToday >= state.dailyGoal ? "Completed!" : "Keep going"}</span></div>
        <div class="goal-number"><strong>${Math.min(doneToday, state.dailyGoal)}</strong><span>of ${state.dailyGoal} lesson${state.dailyGoal > 1 ? "s" : ""}</span></div>
        <div class="progress-track"><span style="width:${pct(Math.min(doneToday,state.dailyGoal),state.dailyGoal)}%"></span></div>
      </div>
    </section>`;
}

function statsSection() {
  return `
    <section class="stats-grid">
      <article class="stat-card"><span class="stat-icon">↗</span><strong>${overallPercent()}%</strong><small>Book progress</small></article>
      <article class="stat-card"><span class="stat-icon">◇</span><strong>${state.completed.length}</strong><small>Lessons mastered</small></article>
      <article class="stat-card"><span class="stat-icon">✓</span><strong>${averageScore()}%</strong><small>Average accuracy</small></article>
      <article class="stat-card"><span class="stat-icon">↻</span><strong>${state.mistakes.length}</strong><small>Items to review</small></article>
    </section>`;
}

function continueSection(recent) {
  return `
    <section class="section">
      <div class="section-head"><div><span class="eyebrow">PICK UP WHERE YOU LEFT OFF</span><h2>Your next lesson</h2></div></div>
      <div class="continue-card">
        <div class="continue-icon">${recent.module.icon}</div>
        <div><h3>${recent.module.lessons[recent.index]}</h3><p>Unit ${String(recent.module.number).padStart(2,"0")} · ${recent.module.title} · 10–15 min</p></div>
        <button class="button primary" data-open-lesson="${recent.module.id}" data-lesson-index="${recent.index}">Start lesson</button>
      </div>
    </section>`;
}

function pathSection() {
  return `
    <section class="section">
      <div class="section-head"><div><span class="eyebrow">YOUR LEARNING PATH</span><h2>Book 1 curriculum</h2></div><button class="button text" data-view="learn">View all units →</button></div>
      <div class="module-grid">${modules.slice(0,6).map(moduleCard).join("")}</div>
    </section>`;
}

function moduleCard(module) {
  const done = completedCount(module);
  const progress = pct(done, module.lessons.length);
  return `<article class="module-card" data-open-module="${module.id}">
    <div class="module-number"><span>UNIT ${String(module.number).padStart(2,"0")}</span><span>${module.pages}</span></div>
    <div class="module-icon">${module.icon}</div>
    <h3>${module.title}</h3><p>${module.description}</p>
    <div class="module-footer"><div class="progress-track"><span style="width:${progress}%"></span></div><small>${done}/${module.lessons.length}</small></div>
  </article>`;
}

function renderLearn() {
  app.innerHTML = `
    <header class="page-head"><div><span class="eyebrow">BOOK 1 · FOUNDATION</span><h1>Learn grammar,<br>one step at a time.</h1><p>Eleven units adapted from your original school book into ${totalLessons} focused micro-lessons.</p></div></header>
    <div class="filter-row"><button class="chip active">All units</button><button class="chip">In progress</button><button class="chip">Completed</button></div>
    <div class="module-grid">${modules.map(moduleCard).join("")}</div>`;
}

function renderModule(module) {
  currentView = "module";
  activeModule = module;
  app.innerHTML = `
    <header class="page-head"><div><button class="button text" data-view="learn">← All units</button><span class="eyebrow">UNIT ${String(module.number).padStart(2,"0")} · BOOK PAGES ${module.pages}</span><h1>${module.title}</h1><p>${module.description}</p></div><div class="module-icon">${module.icon}</div></header>
    <section class="content-card">
      <div class="section-head"><div><span class="eyebrow">UNIT ROADMAP</span><h2>${module.lessons.length} short lessons</h2></div><strong>${completedCount(module)}/${module.lessons.length}</strong></div>
      <div class="progress-track"><span style="width:${pct(completedCount(module),module.lessons.length)}%"></span></div>
      <div class="lesson-list">${module.lessons.map((title,index) => {
        const done = state.completed.includes(lessonId(module,index));
        return `<article class="lesson-row ${done ? "done" : ""}" data-open-lesson="${module.id}" data-lesson-index="${index}"><span class="lesson-status">${done ? "✓" : index+1}</span><div><h4>${title}</h4><p>${index === module.lessons.length-1 ? "Review and apply the whole unit" : "Learn the rule and use it in context"}</p></div><span class="lesson-time">${index === module.lessons.length-1 ? "8" : "12"} min →</span></article>`;
      }).join("")}</div>
    </section>`;
}

function renderLesson(module, index) {
  currentView = "lesson";
  activeModule = module;
  activeLessonIndex = Number(index);
  lessonAnswers = {};
  state.lastLesson = lessonId(module, activeLessonIndex);
  saveState();
  const title = module.lessons[activeLessonIndex];
  const questions = lessonQuestions(module, activeLessonIndex);
  const info = lessonInfo(module, activeLessonIndex);
  const guide = info.guide;
  const done = state.completed.includes(lessonId(module,activeLessonIndex));
  app.innerHTML = `
    <div class="lesson-layout">
      ${lessonSidebar(module)}
      <div class="lesson-content">
        ${lessonHero(module, title)}
        ${state.beginnerMode ? assistSection(guide) : ""}
${lessonCards(info, guide)}
${quizSection(questions, guide, done)}
      </div>
    </div>`;
}

function lessonSidebar(module) {
  return `
    <aside class="lesson-sidebar">
        <button class="button text" data-open-module="${module.id}">← Unit overview</button>
        <span class="eyebrow">UNIT ${String(module.number).padStart(2,"0")}</span><h3>${module.title}</h3><p>Original reference: Book 1, pages ${module.pages}</p>
        <div class="lesson-steps"><div class="step-pill active"><span class="step-dot">1</span>Understand</div><div class="step-pill"><span class="step-dot">2</span>Pattern</div><div class="step-pill"><span class="step-dot">3</span>Apply</div><div class="step-pill"><span class="step-dot">4</span>Check</div></div>
    </aside>`;
}

function lessonHero(module, title) {
  return `<header class="lesson-hero"><div class="lesson-hero-top"><span class="eyebrow">LESSON ${activeLessonIndex + 1} OF ${module.lessons.length}</span><button class="assist-toggle ${state.beginnerMode ? "on" : ""}" data-toggle-help>🇮🇩 Bantuan ${state.beginnerMode ? "aktif" : "nonaktif"}</button></div><h1>${title}</h1><p>By the end of this lesson, you will understand this grammar point and use it in a sentence connected to real life or work.</p></header>`;
}

function assistSection(guide) {
  return `<section class="beginner-assist"><div class="assist-heading"><span class="assist-icon">🇮🇩</span><div><span class="eyebrow">BEGINNER ASSIST</span><h2>Tenang, kita pahami pelan-pelan.</h2></div></div><p>${guide.summary}</p><div class="simple-tip"><strong>💡 Cara mudah memahaminya</strong><span>${guide.pattern}</span></div><div class="vocab-list">${guide.vocab.map(([word,meaning]) => `<span><strong>${word}</strong> = ${meaning}</span>`).join("")}</div></section>`;
}

function lessonCards(info, guide) {
  return `
        <section class="content-card"><span class="eyebrow">01 · UNDERSTAND</span><h2>The core idea</h2><div class="definition">${info.definition}</div></section>
        <section class="content-card"><span class="eyebrow">02 · SEE THE PATTERN</span><h2>Keep this structure in mind</h2><div class="pattern-box">${info.pattern.replaceAll("\n","<br>")}</div></section>
        <section class="content-card"><span class="eyebrow">03 · USE IT</span><h2>Examples for your global journey</h2><div class="example-grid">${info.examples.map((item,i) => `<div class="example"><strong>${item[0]}</strong>${state.beginnerMode ? `<span class="translation">🇮🇩 ${guide.translations[i]}</span>` : ""}<small>${item[1]}</small></div>`).join("")}</div></section>
        <section class="content-card"><span class="eyebrow">COMMON MISTAKE</span><h2>Notice the difference</h2><div class="mistake"><div class="wrong">✕ ${info.wrong}</div><div class="right">✓ ${info.right}</div></div></section>
        <section class="content-card"><div class="challenge"><span>CAREER ENGLISH CHALLENGE</span><p>${info.challenge}</p>${state.beginnerMode ? `<small class="challenge-help">Maksud tugas: ${guide.challenge}</small>` : ""}</div></section>`;
}

function quizSection(questions, guide, done) {
  return `
        <section class="quiz-card" id="lessonQuiz">
          <div class="quiz-progress"><span class="question-label">KNOWLEDGE CHECK · <span id="quizTally">0</span>/${questions.length} answered</span><div class="progress-track"><span id="quizBar" style="width:0%"></span></div></div>
          ${questions.map((question, qi) => `<div class="quiz-q" data-qi="${qi}">
            <h3>${qi + 1}. ${question.q}</h3>
            <div class="answers">${question.a.map((answer,i) => `<button class="answer" data-answer="${i}" data-correct="${question.c}" data-qi="${qi}">${String.fromCharCode(65+i)}. ${answer}</button>`).join("")}</div>
            <div class="feedback">${question.x}${state.beginnerMode ? `<span class="feedback-id">🇮🇩 Kuncinya: ${guide.pattern}</span>` : ""}</div>
          </div>`).join("")}
          <div class="quiz-actions"><button class="button ${done ? "ghost" : "primary"}" id="completeLesson">${done ? "✓ Lesson completed" : "Complete lesson"}</button></div>
        </section>`;
}

// Jawaban kuis lesson yang sedang dibuka: { nomorSoal: benar? }. Direset tiap lesson dirender.
let lessonAnswers = {};

function answerLesson(button) {
  const block = button.closest(".quiz-q");
  if (block.dataset.answered) return;
  block.dataset.answered = "true";
  const qi = Number(block.dataset.qi);
  const chosen = Number(button.dataset.answer);
  const correct = Number(button.dataset.correct);
  block.querySelectorAll(".answer").forEach((answer,i) => {
    if (i === correct) answer.classList.add("correct");
    if (i === chosen && chosen !== correct) answer.classList.add("wrong");
  });
  block.querySelector(".feedback").classList.add("show");
  const questions = lessonQuestions(activeModule, activeLessonIndex);
  lessonAnswers[qi] = chosen === correct;
  if (chosen !== correct) addMistake(activeModule, activeLessonIndex, questions[qi]);
  const answered = Object.keys(lessonAnswers).length;
  document.getElementById("quizTally").textContent = answered;
  document.getElementById("quizBar").style.width = `${pct(answered, questions.length)}%`;
  saveState();
}

function completeLesson() {
  const id = lessonId(activeModule,activeLessonIndex);
  if (!state.completed.includes(id)) {
    state.completed.push(id);
    const results = Object.values(lessonAnswers);
    const score = results.length ? Math.round(results.filter(Boolean).length / results.length * 100) : 100;
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

function renderPractice() {
  if (!practice || practice.finished) startPractice();
  renderPracticeQuestion();
}

function startPractice() {
  const all = modules.flatMap(module => window.lessonData[module.id].flatMap((lesson, li) => lesson.quiz.map(q => ({...q, module, lessonIndex: li}))));
  practice = { questions:all.sort(() => Math.random()-.5).slice(0,10), index:0, score:0, answered:false, finished:false };
}

function renderPracticeQuestion() {
  if (practice.index >= practice.questions.length) return renderPracticeResult();
  const question = practice.questions[practice.index];
  app.innerHTML = `<div class="practice-wrap"><header class="page-head"><div><span class="eyebrow">MIXED PRACTICE</span><h1>Train your accuracy.</h1><p>Ten questions across all Book 1 units. Every mistake will be saved for review.</p></div></header>
    <section class="quiz-card" id="practiceQuiz"><div class="quiz-progress"><span class="question-label">QUESTION ${practice.index+1} OF ${practice.questions.length}</span><div class="progress-track"><span style="width:${pct(practice.index+1,practice.questions.length)}%"></span></div></div><span class="eyebrow">${question.module.title}</span><h2>${question.q}</h2><div class="answers">${question.a.map((a,i)=>`<button class="answer" data-practice-answer="${i}">${String.fromCharCode(65+i)}. ${a}</button>`).join("")}</div><div class="feedback" id="practiceFeedback">${question.x}</div><div class="quiz-actions"><button class="button primary" id="nextPractice" disabled>${practice.index === practice.questions.length-1 ? "See results" : "Next question"} →</button></div></section></div>`;
}

function answerPractice(button) {
  if (practice.answered) return;
  practice.answered = true;
  const q = practice.questions[practice.index];
  const chosen = Number(button.dataset.practiceAnswer);
  document.querySelectorAll("[data-practice-answer]").forEach((answer,i) => {
    if (i === q.c) answer.classList.add("correct");
    if (i === chosen && chosen !== q.c) answer.classList.add("wrong");
  });
  if (chosen === q.c) practice.score++;
  else addMistake(q.module,q.lessonIndex || 0,q);
  document.getElementById("practiceFeedback").classList.add("show");
  document.getElementById("nextPractice").disabled = false;
  saveState();
}

function nextPractice() {
  practice.index++;
  practice.answered = false;
  renderPracticeQuestion();
}

function renderPracticeResult() {
  practice.finished = true;
  const score = Math.round(practice.score/practice.questions.length*100);
  state.scores.push({ module:"mixed", lesson:0, score, date:todayKey(), completed:true });
  saveState();
  app.innerHTML = `<div class="practice-wrap"><section class="score-card"><div class="score-ring" style="--score:${score}%"><strong>${score}%</strong></div><span class="eyebrow" style="color:#9fddd5">PRACTICE COMPLETE</span><h1 style="font:500 37px Georgia,serif;margin:9px 0">${score >= 80 ? "Strong work!" : score >= 60 ? "Good progress." : "Keep building."}</h1><p style="color:#c6d5df">You answered ${practice.score} of ${practice.questions.length} questions correctly.</p><div class="hero-actions" style="justify-content:center"><button class="button secondary" id="restartPractice">Practise again</button><button class="button ghost" data-view="review">Review mistakes</button></div></section></div>`;
}

function renderReview() {
  app.innerHTML = `<header class="page-head"><div><span class="eyebrow">PERSONAL REVIEW</span><h1>Turn mistakes<br>into progress.</h1><p>Your incorrect answers stay here until you feel confident enough to clear them.</p></div></header>
    ${state.mistakes.length ? `<div class="review-list">${state.mistakes.map((item,index) => { const module=modules.find(x=>x.id===item.module)||modules[0]; return `<article class="review-item"><span class="marker">${module.icon}</span><div><h4>${item.q}</h4><p>${item.explanation}</p></div><button class="button ghost" data-review-index="${index}" data-open-lesson="${module.id}" data-lesson-index="${item.index || 0}">Review lesson</button></article>`}).join("")}</div><div style="margin-top:16px;text-align:right"><button class="button text" id="clearMistakes">Clear reviewed items</button></div>` : `<section class="empty-state"><div class="empty-icon">✓</div><h3>Your review list is clear</h3><p>When you answer a question incorrectly, it will appear here with an explanation and a link back to the lesson.</p><button class="button primary" data-view="practice">Start mixed practice</button></section>`}`;
}

function renderProgress() {
  const best = [...modules].sort((a,b)=>pct(completedCount(b),b.lessons.length)-pct(completedCount(a),a.lessons.length))[0];
  app.innerHTML = `<header class="page-head"><div><span class="eyebrow">YOUR PROGRESS</span><h1>Small steps,<br>visible growth.</h1><p>Track consistency and see which grammar areas are becoming part of your active English.</p></div></header>
    <section class="progress-summary"><div class="big-progress"><span class="eyebrow" style="color:#a9e2da">BOOK 1 COMPLETION</span><strong>${overallPercent()}%</strong><p>${state.completed.length} of ${totalLessons} lessons completed</p><div class="progress-track" style="margin-top:24px;background:rgba(255,255,255,.18)"><span style="width:${overallPercent()}%;background:var(--gold)"></span></div></div><div class="insight-card"><span class="eyebrow">LEARNING INSIGHTS</span><h3>Your current picture</h3><div class="insight-list"><div class="insight"><i>✓</i><span><strong>${averageScore()}% average accuracy.</strong> Aim for 80% or higher before calling a unit mastered.</span></div><div class="insight"><i>↗</i><span><strong>${state.streak}-day streak.</strong> Consistency matters more than one long study session.</span></div><div class="insight"><i>◇</i><span><strong>${best.title}</strong> is currently your strongest unit by completion.</span></div><div class="insight"><i>↻</i><span><strong>${state.mistakes.length} review items.</strong> Revisit them while the correction is still fresh.</span></div></div></div></section>
    <section class="section"><div class="section-head"><div><span class="eyebrow">UNIT BREAKDOWN</span><h2>Book 1 roadmap</h2></div></div><div class="unit-progress-list">${modules.map(module=>{const progress=pct(completedCount(module),module.lessons.length);return `<article class="unit-progress-row" data-open-module="${module.id}"><span class="unit-label">${String(module.number).padStart(2,"0")}</span><div><h4>${module.title}</h4><div class="progress-track"><span style="width:${progress}%"></span></div></div><strong>${progress}%</strong></article>`}).join("")}</div></section>`;
}

function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }

document.addEventListener("click", event => {
  const view = event.target.closest("[data-view]");
  if (view) { navigate(view.dataset.view); return; }
  const moduleButton = event.target.closest("[data-open-module]");
  if (moduleButton) { renderModule(modules.find(x => x.id === moduleButton.dataset.openModule)); return; }
  const lessonButton = event.target.closest("[data-open-lesson]");
  if (lessonButton) { renderLesson(modules.find(x => x.id === lessonButton.dataset.openLesson), Number(lessonButton.dataset.lessonIndex)); return; }
  const lessonAnswer = event.target.closest("[data-answer]");
  if (lessonAnswer) { answerLesson(lessonAnswer); return; }
  const practiceAnswer = event.target.closest("[data-practice-answer]");
  if (practiceAnswer) { answerPractice(practiceAnswer); return; }
  if (event.target.closest("#completeLesson")) { completeLesson(); return; }
  if (event.target.closest("#nextPractice")) { nextPractice(); return; }
  if (event.target.closest("#restartPractice")) { startPractice(); renderPracticeQuestion(); return; }
  if (event.target.closest("[data-toggle-help]")) { state.beginnerMode = !state.beginnerMode; saveState(); if (currentView === "dashboard") renderDashboard(); else renderLesson(activeModule,activeLessonIndex); showToast(state.beginnerMode ? "Bantuan Bahasa Indonesia diaktifkan" : "English-only mode diaktifkan"); return; }
  if (event.target.closest("#clearMistakes")) { state.mistakes=[]; saveState(); renderReview(); showToast("Review list cleared"); }
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
