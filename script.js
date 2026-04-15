// === QuizFinanza — logica di gioco ===
// Flusso: LEZIONE -> INTERROGAZIONE -> feedback -> prossima lezione
// Con supporto "Indietro" e modalità review (risposte già date restano visibili).

const QUESTIONS_PER_GAME = 10;
const POINTS_PER_CORRECT = 10;

const state = {
  deck: [],
  currentIndex: 0,
  score: 0,
  correct: 0,
  wrong: 0,
  // answers[i] = {
  //   answered: bool,
  //   correctPicked: bool,
  //   pickedText: string,
  //   shuffledAnswers: [{text, isCorrect}]  // ordine stabile per la carta
  // }
  answers: [],
};

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

  if (isCorrect) {
    state.score += POINTS_PER_CORRECT;
    state.correct++;
  } else {
    state.wrong++;
  }

  renderAnsweredState(card, ans);
  $("score").textContent = state.score;
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
  if (state.score > best) {
    localStorage.setItem("quiz_best", state.score);
    $("finalMessage").textContent += " 🎉 Nuovo record!";
  }
  $("bestScore").textContent = localStorage.getItem("quiz_best");

  showScreen("end");
}
