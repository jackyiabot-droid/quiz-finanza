// === QuizFinanza — logica di gioco ===
// Flusso: LEZIONE -> INTERROGAZIONE -> feedback -> prossima lezione

const QUESTIONS_PER_GAME = 10;
const POINTS_PER_CORRECT = 10;

const state = {
  deck: [],
  currentIndex: 0,
  score: 0,
  correct: 0,
  wrong: 0,
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

  $("readyBtn").addEventListener("click", showQuestion);
  $("nextBtn").addEventListener("click", nextCard);
  $("restartBtn").addEventListener("click", () => showScreen("start"));
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
  showScreen("lesson");
}

// --- Fase INTERROGAZIONE ---
function showQuestion() {
  const card = state.deck[state.currentIndex];
  $("qIndex").textContent = state.currentIndex + 1;
  $("score").textContent = state.score;
  $("questionBox").textContent = card.question;
  $("progressBar").style.width = `${((state.currentIndex + 0.5) / state.deck.length) * 100}%`;
  $("feedback").className = "feedback";
  $("feedback").innerHTML = "";
  $("nextBtn").classList.add("hidden");

  // Mischia le risposte mantenendo traccia dell'indice corretto
  const answersWithIndex = card.answers.map((text, i) => ({ text, isCorrect: i === card.correct }));
  const shuffled = shuffle(answersWithIndex);

  const answersBox = $("answers");
  answersBox.innerHTML = "";
  shuffled.forEach((ans) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = ans.text;
    btn.addEventListener("click", () => handleAnswer(btn, ans.isCorrect, card));
    answersBox.appendChild(btn);
  });

  showScreen("quiz");
}

// --- Gestione risposta ---
function handleAnswer(clickedBtn, isCorrect, card) {
  const allBtns = document.querySelectorAll(".answer");
  allBtns.forEach((b) => {
    b.disabled = true;
    if (b.textContent === card.answers[card.correct]) b.classList.add("correct");
  });

  const feedback = $("feedback");
  if (isCorrect) {
    clickedBtn.classList.add("correct");
    state.score += POINTS_PER_CORRECT;
    state.correct++;
    feedback.className = "feedback show correct";
    feedback.innerHTML = `✅ <strong>Giusto!</strong> ${card.explain}`;
  } else {
    clickedBtn.classList.add("wrong");
    state.wrong++;
    feedback.className = "feedback show wrong";
    feedback.innerHTML = `❌ <strong>Sbagliato.</strong> ${card.explain}`;
  }

  $("score").textContent = state.score;
  $("nextBtn").classList.remove("hidden");
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
