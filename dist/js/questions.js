// ── Mesin soal (dipakai oleh Practice DAN kuis di Lesson) ────────────────────
// Jenis soal: pilihan ganda, cocokkan arti, isi kosong (seret/ketuk), ketik, susun kata, benar/salah.
// Semua dibuat otomatis dari konten yang sudah ada (quiz, examples, translations, wrong/right di content/*.js).
//
// Satu "run" = { questions, index, score, answered, draft }.
//   - Practice  -> variabel global `practice`   (dibuat di practice.js)
//   - Lesson    -> variabel global `lessonRun`  (dibuat di app.js)
// run() memilih yang sedang aktif berdasarkan `currentView`.

const KIND_INFO = {
  mc:      { label: "Multiple choice",   hint: "" },
  meaning: { label: "Match the meaning", hint: "Choose the English sentence that means the same." },
  blank:   { label: "Fill in the blank", hint: "Drag a word into the blank, or tap it." },
  type:    { label: "Type the answer",   hint: "Type the missing word." },
  order:   { label: "Word order",        hint: "Tap or drag the words to build the sentence." },
  judge:   { label: "Spot the mistake",  hint: "Is this sentence correct?" }
};

const LESSON_QUIZ_MIN = 15;
const LESSON_QUIZ_MAX = 20;

// Kata fungsi: jawabannya hampir selalu tunggal, jadi aman dinilai dari ketikan.
// Kata isi (difficult/hard, slowly/gradually) dikecualikan karena sinonim yang benar akan ikut disalahkan.
const CLOSED_CLASS = new Set(("i me my mine myself you your yours yourself he him his himself she her hers herself it its itself we us our ours ourselves they them their theirs themselves " +
  "who whom whose which that this these those what everyone everybody everything someone somebody something anyone anybody anything nobody nothing " +
  "a an the some any every each much many few little more less most all both either neither another other several " +
  "at on in to for from with by of about during since until under over through between among into onto off up down before after " +
  "and but or so nor yet because although though if unless when while whether than as " +
  "is are was were am be been do does did has have had will would can could shall should may might must").split(" "));

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const normAnswer = text => String(text).toLowerCase().replace(/[^a-z0-9'’\- ]/g, "").replace(/\s+/g, " ").trim();
const newDraft = () => ({ chip: null, placed: [], typed: "", correct: null });
const newRun = questions => ({ questions, index: 0, score: 0, answered: false, finished: false, draft: newDraft() });

const run = () => (currentView === "lesson" ? lessonRun : practice);
const rerenderQuestion = () => (currentView === "lesson" ? renderLessonQuiz() : renderPracticeQuestion());
const currentQuestion = () => { const r = run(); return r.questions[r.index]; };

// ── Pembuat soal dari konten ────────────────────────────
// Ubah soal pilihan ganda ber-"___" menjadi soal isi kosong. Hanya untuk satu blank dan jawaban pendek.
function blankFrom(q) {
  const quoted = q.q.match(/[“"]([^”"]*_{2,}[^”"]*)[”"]/);
  let text = quoted ? quoted[1] : q.q;
  if (!quoted) text = text.replace(/^[^:]{0,48}:\s*/, "");
  if (/[“”"]/.test(text)) return null;   // soal meta seperti: In "These are..." the word these is a ___
  const parts = text.split(/_{2,}/);
  if (parts.length !== 2) return null;
  if (text.replace(/_{2,}/g, "").trim().split(/\s+/).length < 3) return null;
  if (q.a.some(option => option.length > 20 || option.split(" ").length > 3)) return null;
  return { before: parts[0], after: parts[1], answer: q.a[q.c] };
}

// Kalimat contoh -> soal susun kata. Kalimat berkoma / berkata -ly dibuang karena urutan lain bisa sama-sama benar.
function orderItems(lesson, where, key, loose = false) {
  const out = [];
  lesson.examples.forEach(([sentence, note], i) => {
    const tokens = sentence.trim().split(/\s+/);
    if (tokens.length < 4 || tokens.length > 10) return;
    if (tokens.some(word => /[,;]/.test(word) || (!loose && /ly[.!?]*$/i.test(word)))) return;   // loose = cadangan terakhir
    out.push({ ...where, kind: "order", src: `${key}:e${i}`, sentence: tokens.join(" "), tokens, hint: lesson.guide.translations[i], note, q: `Put the words in order: “${tokens.join(" ")}”` });
  });
  return out;
}

// Pasangan wrong/right -> dua soal benar/salah.
function judgeItems(lesson, where, key) {
  return [[lesson.wrong, false], [lesson.right, true]].map(([sentence, ok], k) => ({
    ...where, kind: "judge", src: `${key}:j${k}`, sentence, a: ["Correct", "Has a mistake"], c: ok ? 0 : 1,
    q: `Is this sentence correct? “${sentence}”`, x: ok ? `Yes. “${lesson.right}” is the correct form.` : `Correct form: “${lesson.right}”`
  }));
}

// Terjemahan Indonesia -> pilih kalimat Inggris yang artinya sama. Pengecoh: contoh lain (lesson sama dulu, lalu unit sama).
function meaningItems(module, li, lesson, where, key) {
  const out = [];
  const same = lesson.examples.map(e => e[0]);
  const others = window.lessonData[module.id].flatMap((l, j) => (j === li ? [] : l.examples.map(e => e[0])));
  lesson.examples.forEach(([sentence, note], i) => {
    const target = lesson.guide.translations[i];
    if (!target) return;
    const pool = [...shuffle(same.filter(s => s !== sentence)), ...shuffle(others.filter(s => s !== sentence && !same.includes(s)))];
    const distractors = [...new Set(pool)].slice(0, 3);
    if (distractors.length < 3) return;
    const options = shuffle([sentence, ...distractors]);
    out.push({ ...where, kind: "meaning", src: `${key}:m${i}`, q: `Which sentence means: “${target}”?`, a: options, c: options.indexOf(sentence), x: `“${sentence}” — ${note}` });
  });
  return out;
}

function prepareQuestion(q) {
  const copy = { ...q };
  if (q.kind === "blank") copy.bank = shuffle(q.a.map((_, i) => i));
  if (q.kind === "order") {
    let bank, tries = 0;
    do { bank = shuffle(q.tokens.map((_, i) => i)); } while (++tries < 6 && bank.map(i => q.tokens[i]).join(" ") === q.sentence);
    copy.bank = bank;
  }
  return copy;
}

// ── Kumpulan soal untuk Practice ────────────────────────
let practicePoolCache = null;
function practicePool() {
  if (practicePoolCache) return practicePoolCache;
  const pool = { mc: [], blank: [], type: [], order: [], judge: [] };
  modules.forEach(module => (window.lessonData[module.id] || []).forEach((lesson, li) => {
    const key = `${module.id}:${li}`, where = { module, lessonIndex: li };
    lesson.quiz.forEach((q, qi) => {
      const src = `${key}:q${qi}`;
      pool.mc.push({ ...q, ...where, kind: "mc", src });
      const blank = blankFrom(q);
      if (!blank) return;
      pool.blank.push({ ...q, ...where, ...blank, kind: "blank", src });
      if (CLOSED_CLASS.has(normAnswer(blank.answer))) pool.type.push({ ...q, ...where, ...blank, kind: "type", src });
    });
    pool.order.push(...orderItems(lesson, where, key));
    pool.judge.push(...judgeItems(lesson, where, key));
  }));
  return (practicePoolCache = pool);
}

function buildPracticeSession(plan, size, fillWithMc = false) {
  const pool = practicePool(), used = new Set(), picked = [];
  const take = (kind, n) => {   // satu soal sumber tidak dipakai dua kali dalam satu sesi
    for (const q of shuffle(pool[kind])) {
      if (n <= 0) break;
      if (used.has(q.src)) continue;
      used.add(q.src); picked.push(q); n--;
    }
    return n;
  };
  let shortfall = 0;
  plan.forEach(([kind, n]) => { shortfall += take(kind, n); });
  if (shortfall && fillWithMc) take("mc", shortfall);
  return shuffle(picked).slice(0, size).map(prepareQuestion);
}

// ── Kuis satu lesson: 15–20 soal bervariasi ─────────────
// Urutan dibuat tetap (tidak diacak) agar hitungan & nomor soal stabil; di-cache selama halaman terbuka.
const lessonQuizCache = new Map();

function interleaveByKind(items) {
  const groups = {};
  items.forEach(q => (groups[q.kind] = groups[q.kind] || []).push(q));
  const lists = Object.values(groups);
  const out = []; let last = null;
  while (lists.some(l => l.length)) {
    const candidates = lists.filter(l => l.length).sort((a, b) => b.length - a.length);
    const pick = candidates.find(l => l[0].kind !== last) || candidates[0];   // hindari jenis sama berturut-turut
    const q = pick.shift(); out.push(q); last = q.kind;
  }
  return out;
}

function buildLessonQuiz(module, li) {
  const key = `${module.id}:${li}`;
  if (lessonQuizCache.has(key)) return lessonQuizCache.get(key);
  const lesson = window.lessonData[module.id][li];
  const where = { module, lessonIndex: li };

  // 1) Soal pilihan ganda buatan sendiri; sebagian diubah jadi isi kosong / ketik (variasi, bukan soal baru).
  const base = lesson.quiz.map((q, qi) => {
    const item = { ...q, ...where, kind: "mc", src: `${key}:q${qi}` };
    const blank = blankFrom(q);
    if (!blank) return item;
    if (qi % 3 === 0 && CLOSED_CLASS.has(normAnswer(blank.answer))) return { ...item, ...blank, kind: "type" };
    if (qi % 3 === 1) return { ...item, ...blank, kind: "blank" };
    return item;
  });

  // 2) Soal tambahan dari isi lesson: benar/salah, cocokkan arti, susun kata (bergiliran sampai penuh).
  const extras = [judgeItems(lesson, where, key), meaningItems(module, li, lesson, where, key), orderItems(lesson, where, key)];
  const items = [...base];
  for (let round = 0; items.length < LESSON_QUIZ_MAX && extras.some(e => e.length); round++) {
    for (const list of extras) { if (list.length && items.length < LESSON_QUIZ_MAX) items.push(list.shift()); }
  }

  // 3) Masih kurang dari minimum: tambahkan versi isi-kosong dari soal pilihan ganda yang belum diubah.
  for (const item of base) {
    if (items.length >= LESSON_QUIZ_MIN) break;
    if (item.kind !== "mc") continue;
    const blank = blankFrom(item);
    if (blank) items.push({ ...item, ...blank, kind: "blank", src: item.src + ":b" });
  }

  // 4) Masih kurang (mis. lesson Adverbs yang semua contohnya berkata -ly): longgarkan filter susun kata.
  if (items.length < LESSON_QUIZ_MIN) {
    const have = new Set(items.map(q => q.src));
    for (const q of orderItems(lesson, where, key, true)) { if (items.length >= LESSON_QUIZ_MIN) break; if (!have.has(q.src)) items.push(q); }
  }

  const quiz = interleaveByKind(items).slice(0, LESSON_QUIZ_MAX).map(prepareQuestion);
  lessonQuizCache.set(key, quiz);
  return quiz;
}

// ── Tampilan satu soal (dipakai Practice & Lesson) ──────
function chipHtml(q, i, placed) {
  const label = q.kind === "order" ? q.tokens[i] : q.a[i];
  const locked = run().answered ? "disabled" : "";
  return placed
    ? `<button class="chip placed" data-placed-chip="${i}" ${locked}>${label}</button>`
    : `<button class="chip" draggable="true" data-chip="${i}" data-bank-chip="${i}" ${locked}>${label}</button>`;
}

function practiceBody(q) {
  const r = run(), d = r.draft, done = r.answered;
  const verdict = done ? (d.correct ? "correct" : "wrong") : "";
  if (q.kind === "mc" || q.kind === "meaning") {
    return `<h2>${q.q}</h2><div class="answers">${q.a.map((a, i) => `<button class="answer" data-practice-answer="${i}"><span>${String.fromCharCode(65 + i)}. ${a}</span></button>`).join("")}</div>`;
  }
  if (q.kind === "judge") {
    return `<div class="judge-card">“${q.sentence}”</div><div class="answers">${q.a.map((a, i) => `<button class="answer" data-practice-answer="${i}"><span>${a}</span></button>`).join("")}</div>`;
  }
  if (q.kind === "blank") {
    const slot = `<span class="blank-slot ${verdict || (d.chip != null ? "filled" : "")}" data-drop>${d.chip != null ? chipHtml(q, d.chip, true) : ""}</span>`;
    return `<p class="blank-sentence">${q.before}${slot}${q.after}</p><div class="chip-bank">${q.bank.filter(i => i !== d.chip).map(i => chipHtml(q, i, false)).join("")}</div>`;
  }
  if (q.kind === "type") {
    return `<p class="blank-sentence">${q.before}<input id="blankInput" class="blank-input ${verdict}" value="${escapeHtml(d.typed)}" ${done ? "disabled" : ""} autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Missing word">${q.after}</p>`;
  }
  // order
  const hint = state.beginnerMode && q.hint ? `<p class="order-hint">${ID_BADGE} ${q.hint}</p>` : "";
  const zone = d.placed.length ? d.placed.map(i => chipHtml(q, i, true)).join("") : `<span class="order-empty">Tap or drag the words here</span>`;
  return `${hint}<div class="order-zone ${verdict}" data-drop aria-label="Your sentence">${zone}</div><div class="chip-bank">${q.bank.filter(i => !d.placed.includes(i)).map(i => chipHtml(q, i, false)).join("")}</div>`;
}

function practiceFeedback(q) {
  let text;
  if (q.kind === "blank" || q.kind === "type") text = `${q.x} <span class="fb-answer">Correct answer: <strong>${q.answer}</strong></span>`;
  else if (q.kind === "order") text = `Correct sentence: <strong>${q.sentence}</strong>${q.note ? `<br>${q.note}` : ""}`;
  else text = q.x;
  // Di Lesson, pengguna pemula juga mendapat "kuncinya" dalam Bahasa Indonesia.
  if (currentView === "lesson" && state.beginnerMode) {
    const guide = lessonInfo(q.module, q.lessonIndex).guide;
    text += `<span class="feedback-id">${ID_BADGE} Kuncinya: ${guide.pattern}</span>`;
  }
  return text;
}

// Versi teks polos untuk daftar Review.
function practiceMistakeEntry(q) {
  if (q.kind === "order") return { q: q.q, x: `Correct sentence: ${q.sentence}` };
  if (q.kind === "blank" || q.kind === "type") return { q: q.q, x: `${q.x} Correct answer: ${q.answer}` };
  return q;
}

function practiceReady(q) {
  const d = run().draft;
  if (q.kind === "blank") return d.chip != null;
  if (q.kind === "type") return d.typed.trim().length > 0;
  if (q.kind === "order") return d.placed.length === q.tokens.length;
  return true;
}

function practiceActions(q) {
  const r = run(), lesson = currentView === "lesson";
  const needsCheck = q.kind === "blank" || q.kind === "type" || q.kind === "order";
  if (needsCheck && !r.answered) return `<button class="button primary" id="checkPractice" ${practiceReady(q) ? "" : "disabled"}>Check</button>`;
  const last = r.index === r.questions.length - 1;
  if (lesson && last) {
    const done = state.completed.includes(lessonId(activeModule, activeLessonIndex));
    return `<button class="button ${done ? "ghost" : "primary"}" id="completeLesson" ${r.answered ? "" : "disabled"}>${done ? `${icon("check")} Lesson completed` : "Complete lesson"}</button>`;
  }
  return `<button class="button primary" id="nextPractice" ${r.answered ? "" : "disabled"}>${last ? "See results" : "Next question"} ${icon("arrow")}</button>`;
}

function refreshActions(q) {
  const box = document.querySelector("#practiceQuiz .quiz-actions, #lessonQuiz .quiz-actions");
  if (box) box.innerHTML = practiceActions(q);
}

// ── Jawaban ─────────────────────────────────────────────
function recordResult(q, correct) {
  const r = run();
  if (correct) r.score++;
  else addMistake(q.module, q.lessonIndex || 0, practiceMistakeEntry(q));
  const label = document.getElementById("practiceScore");
  if (label) label.textContent = r.score;
  saveState();
}

// Pilihan ganda, cocokkan arti & benar/salah: langsung dinilai saat dipilih.
function answerPractice(button) {
  const r = run();
  if (r.answered) return;
  r.answered = true;
  const q = currentQuestion();
  const chosen = Number(button.dataset.practiceAnswer);
  markAnswers(document.querySelectorAll("[data-practice-answer]"), chosen, q.c);
  const fb = document.getElementById("practiceFeedback");
  fb.innerHTML = practiceFeedback(q); fb.classList.add("show");
  recordResult(q, chosen === q.c);
  refreshActions(q);
}

// Isi kosong, ketik, dan susun kata: dinilai setelah menekan Check.
function checkPractice() {
  const r = run();
  if (r.answered) return;
  const q = currentQuestion(), d = r.draft;
  if (!practiceReady(q)) return;
  let correct = false;
  if (q.kind === "blank") correct = d.chip === q.c;
  else if (q.kind === "type") correct = normAnswer(d.typed) === normAnswer(q.answer);
  else if (q.kind === "order") correct = d.placed.map(i => q.tokens[i]).join(" ") === q.tokens.join(" ");
  r.answered = true;
  d.correct = correct;
  recordResult(q, correct);
  rerenderQuestion();
  const next = document.getElementById("nextPractice") || document.getElementById("completeLesson");
  if (next) next.focus({ preventScroll: true });
}

// Tempatkan/lepas kata (dipakai oleh ketuk maupun seret).
function placeChip(i) {
  const r = run();
  if (!r || r.answered) return;
  const q = currentQuestion(), d = r.draft;
  if (q.kind === "blank") d.chip = i;
  else if (q.kind === "order" && !d.placed.includes(i)) d.placed.push(i);
  else return;
  rerenderQuestion();
  const target = document.querySelector("[data-bank-chip]") || document.getElementById("checkPractice");
  if (target) target.focus({ preventScroll: true });
}

function unplaceChip(i) {
  const r = run();
  if (!r || r.answered) return;
  const q = currentQuestion(), d = r.draft;
  if (q.kind === "blank") d.chip = null;
  else if (q.kind === "order") d.placed = d.placed.filter(x => x !== i);
  rerenderQuestion();
}

function nextPractice() {
  const r = run();
  r.index++;
  r.answered = false;
  r.draft = newDraft();
  rerenderQuestion();
}

// ── Event ───────────────────────────────────────────────
document.addEventListener("click", event => {
  if (!run()) return;
  const answer = event.target.closest("[data-practice-answer]");
  if (answer) { answerPractice(answer); return; }
  const bankChip = event.target.closest("[data-bank-chip]");
  if (bankChip) { placeChip(Number(bankChip.dataset.bankChip)); return; }
  const placedChip = event.target.closest("[data-placed-chip]");
  if (placedChip) { unplaceChip(Number(placedChip.dataset.placedChip)); return; }
  if (event.target.closest("#checkPractice")) { checkPractice(); return; }
  if (event.target.closest("#nextPractice")) { nextPractice(); }
});

document.addEventListener("input", event => {
  const r = run();
  if (!r || event.target.id !== "blankInput") return;
  r.draft.typed = event.target.value;
  const check = document.getElementById("checkPractice");
  if (check) check.disabled = !event.target.value.trim();
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter" && event.target.id === "blankInput") { event.preventDefault(); checkPractice(); }
});

// Seret & lepas (desktop). Di layar sentuh cukup ketuk kata, hasilnya sama.
document.addEventListener("dragstart", event => {
  const chip = event.target.closest && event.target.closest("[data-chip]");
  const r = run();
  if (!chip || !r || r.answered) return;
  event.dataTransfer.setData("text/plain", chip.dataset.chip);
  event.dataTransfer.effectAllowed = "move";
  chip.classList.add("dragging");
});
document.addEventListener("dragend", event => {
  const chip = event.target.closest && event.target.closest("[data-chip]");
  if (chip) chip.classList.remove("dragging");
  document.querySelectorAll(".drop-hover").forEach(zone => zone.classList.remove("drop-hover"));
});
document.addEventListener("dragover", event => {
  const zone = event.target.closest && event.target.closest("[data-drop]");
  const r = run();
  if (!zone || !r || r.answered) return;
  event.preventDefault();
  zone.classList.add("drop-hover");
});
document.addEventListener("dragleave", event => {
  const zone = event.target.closest && event.target.closest("[data-drop]");
  if (zone && !zone.contains(event.relatedTarget)) zone.classList.remove("drop-hover");
});
document.addEventListener("drop", event => {
  const zone = event.target.closest && event.target.closest("[data-drop]");
  const r = run();
  if (!zone || !r || r.answered) return;
  event.preventDefault();
  zone.classList.remove("drop-hover");
  const id = event.dataTransfer.getData("text/plain");
  if (id !== "") placeChip(Number(id));
});
