// ── Practice: layar kartu + sesi 15 soal ────────────────────────────────────
// Mesin soal (pembuat soal, tampilan, penilaian, seret-lepas) ada di js/questions.js dan dipakai bersama kuis Lesson.

// Tiap set = 15 soal. Kartu "mixed" mencampur semua jenis; kartu lain berisi satu jenis soal saja.
const PRACTICE_SIZE = 15;
const MIXED_PLAN = [["mc", 4], ["blank", 3], ["type", 3], ["order", 3], ["judge", 2]];
const SET_INFO = {
  mixed: { tag: "ALL TYPES", title: "Mixed practice",    icon: "mixed",  desc: "A bit of everything: all five question types in one session." },
  mc:    { tag: "SET 1",     title: "Multiple choice",   icon: "choice", desc: "Pick the right answer from four options." },
  blank: { tag: "SET 2",     title: "Fill in the blank", icon: "blank",  desc: "Drag a word into the blank to complete the sentence." },
  type:  { tag: "SET 3",     title: "Type the answer",   icon: "type",   desc: "Type the missing word. Great for pronouns, prepositions, and connectors." },
  order: { tag: "SET 4",     title: "Word order",        icon: "order",  desc: "Put the scrambled words into the correct sentence order." },
  judge: { tag: "SET 5",     title: "Spot the mistake",  icon: "judge",  desc: "Decide whether a sentence is correct or has a mistake." }
};

// Layar pembuka Practice: kartu pilihan set (seperti kartu unit di Learn).
function renderPractice() {
  const inProgress = practice && !practice.finished && practice.index < practice.questions.length && (practice.index > 0 || practice.answered);
  const resume = inProgress
    ? `<div class="resume-card"><div><strong>Session in progress</strong><span>${SET_INFO[practice.kind].title} · question ${practice.index + 1} of ${practice.questions.length}</span></div><button class="button primary" data-resume-practice>Resume ${icon("arrow")}</button></div>`
    : "";
  app.innerHTML = `<header class="page-head"><div><span class="eyebrow">Practice</span><h1>Pick a practice set.</h1><p>Each set has ${PRACTICE_SIZE} questions. Every mistake is saved to Review.</p></div></header>
    ${resume}
    <div class="module-grid">${Object.entries(SET_INFO).map(([kind, info]) => setCard(kind, info)).join("")}</div>`;
}

function setCard(kind, info) {
  const best = (state.practiceBest || {})[kind];
  return `<article class="module-card practice-card" data-start-practice="${kind}" tabindex="0" role="button" aria-label="${info.title}: ${PRACTICE_SIZE} questions">
    <div class="module-number"><span>${info.tag}</span><span>${PRACTICE_SIZE} questions</span></div>
    <div class="module-icon">${icon(info.icon)}</div>
    <h3>${info.title}</h3><p>${info.desc}</p>
    <div class="module-footer"><div class="progress-track"><span style="width:${best || 0}%"></span></div><small>${best != null ? "Best " + best + "%" : "New"}</small></div>
  </article>`;
}

// kind: "mixed" atau salah satu jenis soal. plan/size hanya untuk pengujian.
function startPractice(kind = "mixed", plan, size = PRACTICE_SIZE) {
  const useKind = plan || (kind === "mixed" ? MIXED_PLAN : [[kind, size]]);
  practice = newRun(buildPracticeSession(useKind, size, kind === "mixed"));
  practice.kind = kind;
}

function renderPracticeQuestion() {
  if (practice.index >= practice.questions.length) return renderPracticeResult();
  const q = currentQuestion();
  const total = practice.questions.length;
  const info = KIND_INFO[q.kind];
  app.innerHTML = `<div class="practice-wrap">
    <div class="practice-bar"><div><span class="eyebrow">${SET_INFO[practice.kind].title}</span><strong>Question ${practice.index + 1} of ${total}</strong></div><span class="practice-score">Score <strong id="practiceScore">${practice.score}</strong></span><button class="button text" data-view="practice">Exit</button></div>
    <section class="quiz-card" id="practiceQuiz">
      <div class="quiz-progress"><div class="progress-track" aria-hidden="true"><span style="width:${pct(practice.index, total)}%"></span></div></div>
      <span class="eyebrow">${info.label} · ${q.module.title}</span>
      ${info.hint ? `<p class="q-hint">${info.hint}</p>` : ""}
      ${practiceBody(q)}
      <div class="feedback ${practice.answered ? "show" : ""}" id="practiceFeedback" role="status">${practiceFeedback(q)}</div>
      <div class="quiz-actions">${practiceActions(q)}</div>
    </section></div>`;
}

function renderPracticeResult() {
  practice.finished = true;
  const score = Math.round(practice.score / practice.questions.length * 100);
  state.scores.push({ module: "mixed", lesson: 0, score, date: todayKey(), completed: true });
  const previous = (state.practiceBest || {})[practice.kind];
  if (previous == null || score > previous) state.practiceBest = { ...(state.practiceBest || {}), [practice.kind]: score };
  saveState();
  app.innerHTML = `<div class="practice-wrap"><section class="score-card"><div class="score-ring" style="--score:${score}%"><strong>${score}%</strong></div><span class="eyebrow">Practice complete</span><h1>${score >= 80 ? "Strong work!" : score >= 60 ? "Good progress." : "Keep building."}</h1><p>You answered ${practice.score} of ${practice.questions.length} questions correctly.</p><div class="hero-actions"><button class="button light" id="restartPractice">Practise again</button><button class="button ghost-dark" data-view="practice">Other sets</button><button class="button ghost-dark" data-view="review">Review mistakes</button></div></section></div>`;
}

// Klik khusus layar Practice: mulai set, lanjutkan sesi, ulangi set yang sama.
document.addEventListener("click", event => {
  const startSet = event.target.closest("[data-start-practice]");
  if (startSet) {
    currentView = "practice"; setActiveNav("practice");
    startPractice(startSet.dataset.startPractice); renderPracticeQuestion(); window.scrollTo(0, 0);
    return;
  }
  if (event.target.closest("[data-resume-practice]")) { currentView = "practice"; renderPracticeQuestion(); return; }
  if (event.target.closest("#restartPractice")) { startPractice(practice.kind); renderPracticeQuestion(); window.scrollTo(0, 0); }
});
