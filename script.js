// === QuizFinanza — logica di gioco ===
// Flusso: LEZIONE -> INTERROGAZIONE -> feedback -> prossima lezione
// Con supporto "Indietro" e modalità review (risposte già date restano visibili).

const QUESTIONS_PER_GAME = 10;
const POINTS_PER_CORRECT = 10;
const COMBO_BONUS_THRESHOLD = 4; // da 5ª corretta consecutiva in poi
const COMBO_BONUS_PER_HIT = 5;   // +5 pt extra
const BIG_BURST_THRESHOLD = 5;   // streak >=5 => burst grande

const state = {
  deck: [],
  currentIndex: 0,
  score: 0,
  correct: 0,
  wrong: 0,
  streak: 0,
  // answers[i] = {
  //   answered: bool,
  //   correctPicked: bool,
  //   pickedText: string,
  //   shuffledAnswers: [{text, isCorrect}]  // ordine stabile per la carta
  // }
  answers: [],
};

// --- Preferenze utente: motion ---
const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// --- Cap globale particelle in DOM (performance) ---
const PARTICLE_CAP = 60;
let activeParticles = 0;

// Elementi DOM
const $ = (id) => document.getElementById(id);
const screens = {
  start: $("screen-start"),
  lesson: $("screen-lesson"),
  quiz: $("screen-quiz"),
  end: $("screen-end"),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
  $("bestScore").textContent = localStorage.getItem("quiz_best") || 0;

  document.querySelectorAll(".btn--cat").forEach((btn) => {
    btn.addEventListener("click", () => startGame(btn.dataset.category));
  });

  $("readyBtn").addEventListener("click", () => showQuestion());
  $("nextBtn").addEventListener("click", nextCard);
  $("restartBtn").addEventListener("click", () => showScreen("start"));
  $("backBtnLesson").addEventListener("click", goBackFromLesson);
  $("backBtnQuiz").addEventListener("click", goBackFromQuiz);
  $("reviewBtn").addEventListener("click", goReviewLastCard);
});

// --- Mischia array (Fisher-Yates) ---
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Avvio partita ---
function startGame(category) {
  const pool = category === "all" ? QUESTIONS : QUESTIONS.filter((q) => q.category === category);
  state.deck = shuffle(pool).slice(0, QUESTIONS_PER_GAME);
  state.currentIndex = 0;
  state.score = 0;
  state.correct = 0;
  state.wrong = 0;
  state.streak = 0;
  // Inizializza lo stato per-carta + ordine risposte stabile
  state.answers = state.deck.map((card) => ({
    answered: false,
    correctPicked: false,
    pickedText: null,
    shuffledAnswers: shuffle(
      card.answers.map((text, i) => ({ text, isCorrect: i === card.correct }))
    ),
  }));

  $("qTotal").textContent = state.deck.length;
  $("lTotal").textContent = state.deck.length;
  showLesson();
}

// --- Fase LEZIONE ---
function showLesson() {
  const card = state.deck[state.currentIndex];
  $("lIndex").textContent = state.currentIndex + 1;
  $("scoreLesson").textContent = state.score;
  $("lessonTopic").textContent = card.topic;
  $("lessonContent").innerHTML = card.lesson;
  $("progressBarLesson").style.width = `${(state.currentIndex / state.deck.length) * 100}%`;

  // Il back dalla lezione è sempre disponibile:
  // - se index 0 torna allo start
  // - altrimenti torna alla domanda precedente in review
  $("backBtnLesson").textContent = state.currentIndex === 0 ? "← Torna all'inizio" : "← Indietro";

  showScreen("lesson");
}

// --- Fase INTERROGAZIONE ---
// Se la carta è già stata risposta, viene mostrata in modalità review.
function showQuestion() {
  const card = state.deck[state.currentIndex];
  const ans = state.answers[state.currentIndex];

  $("qIndex").textContent = state.currentIndex + 1;
  $("score").textContent = state.score;
  $("questionBox").textContent = card.question;
  $("progressBar").style.width = `${((state.currentIndex + 0.5) / state.deck.length) * 100}%`;
  $("feedback").className = "feedback";
  $("feedback").innerHTML = "";
  $("nextBtn").classList.add("hidden");

  const answersBox = $("answers");
  answersBox.innerHTML = "";

  ans.shuffledAnswers.forEach((a) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = a.text;
    btn.addEventListener("click", () => handleAnswer(btn, a.isCorrect, card));
    answersBox.appendChild(btn);
  });

  if (ans.answered) {
    // Modalità review: mostra stato finale senza toccare il punteggio
    renderAnsweredState(card, ans);
  }

  showScreen("quiz");
}

// --- Render stato "risposto" (usato sia dopo click sia in review) ---
function renderAnsweredState(card, ans) {
  const allBtns = document.querySelectorAll(".answer");
  const correctText = card.answers[card.correct];
  allBtns.forEach((b) => {
    b.disabled = true;
    if (b.textContent === correctText) b.classList.add("correct");
    if (b.textContent === ans.pickedText && !ans.correctPicked) b.classList.add("wrong");
  });

  const feedback = $("feedback");
  if (ans.correctPicked) {
    feedback.className = "feedback show correct";
    feedback.innerHTML = `✅ <strong>Giusto!</strong> ${card.explain}`;
  } else {
    feedback.className = "feedback show wrong";
    feedback.innerHTML = `❌ <strong>Sbagliato.</strong> ${card.explain}`;
  }

  $("nextBtn").classList.remove("hidden");
}

// --- Gestione risposta (solo prima volta) ---
function handleAnswer(clickedBtn, isCorrect, card) {
  const ans = state.answers[state.currentIndex];
  if (ans.answered) return; // safety: già risposto, niente doppio punteggio

  ans.answered = true;
  ans.correctPicked = isCorrect;
  ans.pickedText = clickedBtn.textContent;

  const prevScore = state.score;

  if (isCorrect) {
    // Streak + bonus: da 5ª corretta consecutiva in poi +5 pt extra
    state.streak++;
    let gained = POINTS_PER_CORRECT;
    if (state.streak > COMBO_BONUS_THRESHOLD) {
      gained += COMBO_BONUS_PER_HIT; // combo bonus esplicito
    }
    state.score += gained;
    state.correct++;
  } else {
    // Sbaglio azzera streak
    state.streak = 0;
    state.wrong++;
  }

  renderAnsweredState(card, ans);

  // --- Animazioni (side-effect puri, non alterano stato) ---
  const rect = clickedBtn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  if (isCorrect) {
    // Emoji floater allegro
    const correctEmojis = ["✨", "🎉", "⭐"];
    spawnFloater(cx, cy, correctEmojis[Math.floor(Math.random() * correctEmojis.length)], "up");
    // Confetti: piccolo di base, grande da streak >= 5
    if (state.streak >= BIG_BURST_THRESHOLD) {
      spawnConfetti(cx, cy, 40, { spread: 220, colorful: true, duration: 1800 });
    } else {
      spawnConfetti(cx, cy, 12, { spread: 140, duration: 1200 });
    }
    // Combo badge da streak >= 2
    if (state.streak >= 2) {
      showComboBadge(state.streak);
    }
  } else {
    const wrongEmojis = ["😅", "📚"];
    spawnFloater(cx, cy, wrongEmojis[Math.floor(Math.random() * wrongEmojis.length)], "down");
    shakeApp();
  }

  // Odometer sul punteggio HUD
  animateScore(prevScore, state.score, $("score"));
}

// --- Anima punteggio (odometer) ---
function animateScore(from, to, el) {
  if (!el) return;
  if (from === to) { el.textContent = to; return; }
  if (prefersReducedMotion()) { el.textContent = to; return; }

  const duration = 500;
  const start = performance.now();
  const delta = to - from;
  // Easing: easeOutCubic
  const ease = (t) => 1 - Math.pow(1 - t, 3);

  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    const value = Math.round(from + delta * ease(t));
    el.textContent = value;
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = to;
  }
  requestAnimationFrame(step);
}

// --- Combo badge ---
let comboTimer = null;
function showComboBadge(streak) {
  if (prefersReducedMotion()) return;
  const el = $("comboBadge");
  if (!el) return;
  el.textContent = `🔥 Combo x${streak}!`;
  // Scala in base alla streak (cap a 1.35)
  const scale = Math.min(1.35, 1 + (streak - 2) * 0.07);
  el.style.fontSize = `${0.95 * scale}rem`;
  el.classList.remove("hide");
  // Re-trigger animation
  el.classList.remove("show");
  void el.offsetWidth;
  el.classList.add("show");

  if (comboTimer) clearTimeout(comboTimer);
  comboTimer = setTimeout(() => {
    el.classList.remove("show");
    el.classList.add("hide");
  }, 2000);
}

// --- Confetti burst (vanilla, position:fixed) ---
function spawnConfetti(x, y, count, options = {}) {
  if (prefersReducedMotion()) return;
  const {
    spread = 160,
    duration = 1500,
    colorful = false,
  } = options;

  const palette = colorful
    ? ["#4CAF50", "#5FD16A", "#60a5fa", "#fbbf24", "#ff3d7f", "#ff8a00", "#a78bfa"]
    : ["#4CAF50", "#5FD16A", "#fbbf24", "#60a5fa"];

  const available = Math.max(0, PARTICLE_CAP - activeParticles);
  const n = Math.min(count, available);

  for (let i = 0; i < n; i++) {
    const p = document.createElement("div");
    p.className = "confetti";
    const dx = (Math.random() - 0.5) * spread * 2;
    const dy = -Math.random() * spread - 40 + (Math.random() * spread); // parte su poi ricade
    const rot = `${(Math.random() - 0.5) * 720}deg`;
    const dur = duration + Math.floor(Math.random() * 400);
    p.style.setProperty("--x", `${x}px`);
    p.style.setProperty("--y", `${y}px`);
    p.style.setProperty("--dx", `${dx}px`);
    p.style.setProperty("--dy", `${dy + 220}px`); // gravità simulata: cade
    p.style.setProperty("--rot", rot);
    p.style.setProperty("--dur", `${dur}ms`);
    p.style.background = palette[Math.floor(Math.random() * palette.length)];
    // Forma random (rettangolo sottile o quadrato)
    if (Math.random() < 0.4) { p.style.width = "6px"; p.style.height = "6px"; p.style.borderRadius = "50%"; }
    document.body.appendChild(p);
    activeParticles++;
    const cleanup = () => {
      if (p.parentNode) p.parentNode.removeChild(p);
      activeParticles = Math.max(0, activeParticles - 1);
    };
    p.addEventListener("animationend", cleanup, { once: true });
    // safety fallback
    setTimeout(cleanup, dur + 400);
  }
}

// --- Emoji floater ---
function spawnFloater(x, y, emoji, direction = "up") {
  if (prefersReducedMotion()) return;
  if (activeParticles >= PARTICLE_CAP) return;
  const f = document.createElement("div");
  f.className = "floater" + (direction === "down" ? " down" : "");
  f.textContent = emoji;
  f.style.setProperty("--x", `${x - 14}px`);
  f.style.setProperty("--y", `${y - 14}px`);
  document.body.appendChild(f);
  activeParticles++;
  const cleanup = () => {
    if (f.parentNode) f.parentNode.removeChild(f);
    activeParticles = Math.max(0, activeParticles - 1);
  };
  f.addEventListener("animationend", cleanup, { once: true });
  setTimeout(cleanup, 2400);
}

// --- Screen shake leggero ---
function shakeApp() {
  if (prefersReducedMotion()) return;
  const app = document.querySelector(".app");
  if (!app) return;
  app.classList.remove("shake");
  void app.offsetWidth;
  app.classList.add("shake");
  setTimeout(() => app.classList.remove("shake"), 350);
}

// --- Confetti "pioggia dall'alto" (celebrazione finale) ---
function rainConfetti(durationMs = 3000) {
  if (prefersReducedMotion()) return;
  const start = performance.now();
  const w = window.innerWidth;
  function tick() {
    const elapsed = performance.now() - start;
    if (elapsed > durationMs) return;
    // Piccole rafate
    const batch = 6;
    for (let i = 0; i < batch; i++) {
      const x = Math.random() * w;
      spawnConfetti(x, -10, 1, { spread: 40, duration: 2200, colorful: true });
    }
    setTimeout(tick, 140);
  }
  tick();
}

// --- Prossima carta o fine ---
function nextCard() {
  state.currentIndex++;
  if (state.currentIndex >= state.deck.length) {
    endGame();
  } else {
    showLesson();
  }
}

// --- Navigazione INDIETRO ---
function goBackFromLesson() {
  if (state.currentIndex === 0) {
    showScreen("start");
    return;
  }
  // Torna alla domanda della carta precedente (in review se risposta)
  state.currentIndex--;
  showQuestion();
}

function goBackFromQuiz() {
  // Torna alla lezione della stessa carta (per rileggere)
  showLesson();
}

function goReviewLastCard() {
  state.currentIndex = state.deck.length - 1;
  showQuestion();
}

// --- Fine partita ---
function endGame() {
  const max = state.deck.length * POINTS_PER_CORRECT;
  $("finalScore").textContent = `${state.score} / ${max}`;
  $("correctCount").textContent = state.correct;
  $("wrongCount").textContent = state.wrong;

  const pct = state.score / max;
  let msg;
  if (pct === 1) msg = "🏆 Perfetto! Hai imparato tutto.";
  else if (pct >= 0.8) msg = "🌟 Ottimo lavoro! Preparazione solida.";
  else if (pct >= 0.6) msg = "👍 Bene, ma ripassa i concetti sbagliati.";
  else if (pct >= 0.4) msg = "📖 Serve più studio. Rigioca e rileggi le lezioni.";
  else msg = "💪 Non mollare! Riprova con calma.";
  $("finalMessage").textContent = msg;

  const best = parseInt(localStorage.getItem("quiz_best") || "0", 10);
  const isNewRecord = state.score > best;
  if (isNewRecord) {
    localStorage.setItem("quiz_best", state.score);
    $("finalMessage").textContent += " 🎉 Nuovo record!";
  }
  $("bestScore").textContent = localStorage.getItem("quiz_best");

  // Celebrazioni finali
  const finalScoreEl = $("finalScore");
  if (finalScoreEl) {
    finalScoreEl.classList.remove("celebrate", "record-glow");
    void finalScoreEl.offsetWidth;
    finalScoreEl.classList.add("celebrate");
    if (isNewRecord) finalScoreEl.classList.add("record-glow");
  }
  if (pct === 1) {
    rainConfetti(3000);
  }

  showScreen("end");
}
