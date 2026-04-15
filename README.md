# 🎓 QuizFinanza — Gioco Didattico

Mini-gioco educativo in due fasi: **prima ti insegna, poi ti interroga**.

## 📚 Argomenti

- 💰 **Sistema finanziario** (intermediari, azioni, obbligazioni, spread, Borsa)
- 💳 **Carte di credito e debito** (PIN, CVV, contactless, prepagate, revolving)
- 🏢 **Organizzazione del lavoro** (taylorismo, catena di montaggio, smart working, team working)

## 🎮 Come si gioca

1. Scegli una categoria (o "Tutti gli argomenti")
2. Per ogni concetto: **leggi la lezione** → clicca "Ho capito, interrogami"
3. Rispondi alla **domanda** a risposta multipla
4. Ricevi feedback immediato con spiegazione
5. A fine partita vedi punteggio, record personale, statistiche

Ogni risposta corretta = **10 punti**. 10 domande per partita.

## 🗂️ Struttura

```
gioco/
├── index.html       # Struttura e schermate
├── style.css        # Stile (dark mode, responsive)
├── script.js        # Logica di gioco (stato, flusso, punteggio)
├── questions.js     # Database domande + lezioni (facile da estendere)
└── README.md        # Questo file
```

## 🚀 Esecuzione locale

Apri semplicemente `index.html` nel browser. Nessuna installazione richiesta.

## 🌐 Pubblicazione su GitHub Pages

```bash
cd gioco
git init
git add .
git commit -m "Initial commit: QuizFinanza"
git branch -M main
git remote add origin https://github.com/TUO_USERNAME/quiz-finanza.git
git push -u origin main
```

Poi su GitHub: **Settings → Pages → Source: main / root → Save**.
Il sito sarà online a `https://TUO_USERNAME.github.io/quiz-finanza/`.

## ➕ Aggiungere nuove domande

Apri `questions.js` e aggiungi un oggetto al vettore `QUESTIONS`:

```js
{
  category: "finanza",   // "finanza" | "carte" | "lavoro"
  topic: "Titolo breve",
  lesson: "Testo della <strong>lezione</strong> con HTML permesso.",
  question: "La domanda da porre?",
  answers: ["Risposta giusta", "Distrattore 1", "Distrattore 2", "Distrattore 3"],
  correct: 0,  // indice della risposta giusta (verrà mischiata a runtime)
  explain: "Spiegazione mostrata nel feedback."
}
```

## 🧱 Come è strutturato il codice (per imparare)

- **Separazione dati/logica/vista**: le domande vivono in `questions.js`, la logica in `script.js`, la vista in `index.html` + `style.css`.
- **Stato centralizzato**: un oggetto `state` tiene deck, indice, punteggio.
- **Funzioni piccole**: `startGame`, `showLesson`, `showQuestion`, `handleAnswer`, `nextCard`, `endGame`.
- **Persistenza**: il miglior punteggio è salvato in `localStorage`.
- **Accessibilità/UX**: feedback immediato, progress bar, risposte mischiate per evitare pattern.

Buono studio! 📖
