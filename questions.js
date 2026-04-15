// Database lezioni + domande
// Ogni elemento: prima una LEZIONE, poi un'INTERROGAZIONE sullo stesso concetto
const QUESTIONS = [
  // === SISTEMA FINANZIARIO ===
  {
    category: "finanza",
    topic: "Il sistema finanziario",
    lesson: "Il <strong>sistema finanziario</strong> è l'insieme di mercati, intermediari e strumenti che mettono in contatto chi ha <em>risparmio</em> (soggetti in surplus) con chi ha <em>bisogno di finanziamenti</em> (soggetti in deficit). Senza di esso, il risparmio resterebbe inutilizzato e le imprese non potrebbero crescere.",
    question: "Qual è la funzione principale del sistema finanziario?",
    answers: [
      "Trasferire risorse da chi ha risparmio a chi ha bisogno di finanziamenti",
      "Stampare moneta per lo Stato",
      "Regolare i prezzi al consumo",
      "Produrre beni e servizi"
    ],
    correct: 0,
    explain: "Esatto: il sistema finanziario collega risparmiatori e richiedenti credito."
  },
  {
    category: "finanza",
    topic: "Gli intermediari finanziari",
    lesson: "Un <strong>intermediario finanziario</strong> è un soggetto (banca, SIM, SGR, assicurazione) che facilita lo scambio di risorse tra risparmiatori e richiedenti. Raccoglie fondi, li impiega, gestisce il rischio e offre servizi specializzati.",
    question: "Cosa si intende per 'intermediario finanziario'?",
    answers: [
      "Un soggetto che facilita lo scambio di risorse tra risparmiatori e richiedenti",
      "Un consulente fiscale",
      "Un dipendente pubblico",
      "Un commerciante"
    ],
    correct: 0,
    explain: "Corretto: banche, SIM, SGR e assicurazioni sono intermediari finanziari."
  },
  {
    category: "finanza",
    topic: "La vigilanza bancaria",
    lesson: "In Italia le banche sono vigilate dalla <strong>Banca d'Italia</strong>. Dal 2014, le banche 'significative' dell'area euro sono vigilate direttamente dalla <strong>BCE</strong> (Banca Centrale Europea) nell'ambito del Meccanismo di Vigilanza Unico.",
    question: "Quale istituzione vigila sulle banche in Italia?",
    answers: [
      "Banca d'Italia (e BCE per le grandi banche)",
      "Agenzia delle Entrate",
      "INPS",
      "Ministero del Lavoro"
    ],
    correct: 0,
    explain: "Giusto: Banca d'Italia a livello nazionale, BCE per le banche sistemiche."
  },
  {
    category: "finanza",
    topic: "Le obbligazioni",
    lesson: "Un'<strong>obbligazione</strong> è un titolo di debito: chi la compra <em>presta</em> denaro all'emittente (Stato o azienda) e in cambio riceve <em>interessi</em> periodici (cedole) più il rimborso del capitale a scadenza. È generalmente meno rischiosa di un'azione.",
    question: "Cos'è un titolo obbligazionario?",
    answers: [
      "Un prestito concesso all'emittente che paga interessi",
      "Una quota di proprietà di un'azienda",
      "Un contratto assicurativo",
      "Una valuta digitale"
    ],
    correct: 0,
    explain: "Perfetto: l'obbligazione è un prestito con interessi e scadenza."
  },
  {
    category: "finanza",
    topic: "Le azioni",
    lesson: "Un'<strong>azione</strong> rappresenta una <em>quota del capitale sociale</em> di una società per azioni. Chi la possiede diventa socio: partecipa agli utili (dividendi), ha diritto di voto in assemblea e sopporta il rischio d'impresa.",
    question: "Cosa rappresenta un'azione?",
    answers: [
      "Una quota del capitale sociale di una società",
      "Un prestito a breve termine",
      "Una polizza assicurativa",
      "Un contratto di lavoro"
    ],
    correct: 0,
    explain: "Esatto: l'azionista è un socio, non un creditore."
  },
  {
    category: "finanza",
    topic: "Lo spread",
    lesson: "Lo <strong>spread</strong> è la <em>differenza di rendimento</em> tra due titoli di Stato — tipicamente BTP italiano vs Bund tedesco a 10 anni. Misura il 'premio di rischio' richiesto dagli investitori: più alto lo spread, meno il mercato si fida dell'emittente.",
    question: "Cos'è lo 'spread' di cui si parla spesso in finanza?",
    answers: [
      "La differenza di rendimento tra due titoli (es. BTP-Bund)",
      "Il tasso di inflazione",
      "La commissione bancaria",
      "Il PIL nazionale"
    ],
    correct: 0,
    explain: "Giusto: è il premio di rischio richiesto dai mercati."
  },
  {
    category: "finanza",
    topic: "La Borsa Valori",
    lesson: "La <strong>Borsa Valori</strong> è un <em>mercato regolamentato</em> dove si scambiano titoli finanziari (azioni, obbligazioni, ETF, derivati). Permette alle imprese di raccogliere capitali e agli investitori di comprare/vendere con trasparenza e prezzi pubblici.",
    question: "Qual è la funzione della Borsa Valori?",
    answers: [
      "Mercato regolamentato dove si scambiano titoli (azioni, obbligazioni, ETF...)",
      "Una banca centrale",
      "Un ufficio governativo",
      "Un sistema di tassazione"
    ],
    correct: 0,
    explain: "Corretto: è il luogo regolamentato degli scambi di titoli."
  },

  // === CARTE DI CREDITO E DEBITO ===
  {
    category: "carte",
    topic: "Debito vs Credito",
    lesson: "La <strong>carta di debito</strong> addebita la spesa <em>immediatamente</em> sul conto corrente (es. Bancomat). La <strong>carta di credito</strong> permette di pagare in <em>differita</em>: l'importo si scala a fine mese (saldo) o a rate (revolving).",
    question: "Qual è la differenza principale tra carta di debito e carta di credito?",
    answers: [
      "La debito addebita subito, la credito a fine mese o rateale",
      "La debito è di plastica, la credito è virtuale",
      "La credito funziona solo online",
      "Non c'è differenza"
    ],
    correct: 0,
    explain: "Esatto: è una questione di tempistica dell'addebito."
  },
  {
    category: "carte",
    topic: "Il PIN",
    lesson: "Il <strong>PIN</strong> sta per <em>Personal Identification Number</em>: è un codice segreto (tipicamente 4-6 cifre) che autentica il titolare al momento del pagamento o del prelievo. Va memorizzato e <em>mai</em> scritto sulla carta.",
    question: "Cosa significa 'PIN' su una carta?",
    answers: [
      "Personal Identification Number",
      "Payment Identification Network",
      "Private Internet Node",
      "Purchase Item Number"
    ],
    correct: 0,
    explain: "Corretto: è il codice personale di identificazione."
  },
  {
    category: "carte",
    topic: "Carte prepagate",
    lesson: "La <strong>carta prepagata</strong> si <em>ricarica in anticipo</em> con una somma: puoi spendere solo quel saldo. È utile per controllare le spese, per minori, acquisti online sicuri, viaggi. Non è legata al conto corrente.",
    question: "Cos'è la carta prepagata?",
    answers: [
      "Una carta su cui si caricano fondi in anticipo e si spende fino al saldo",
      "Una carta con fido illimitato",
      "Una carta che paga solo all'estero",
      "Una carta gratuita senza limiti"
    ],
    correct: 0,
    explain: "Perfetto: si spende solo il saldo caricato, niente debiti."
  },
  {
    category: "carte",
    topic: "Il codice CVV",
    lesson: "Il <strong>CVV</strong> (Card Verification Value) è il codice a 3 cifre stampato sul <em>retro</em> della carta (4 davanti per Amex). Serve per i pagamenti online: dimostra che chi paga ha la carta <em>fisicamente</em> in mano.",
    question: "Cosa indica il codice CVV sul retro della carta?",
    answers: [
      "Un codice di sicurezza per le transazioni online",
      "Il numero di conto corrente",
      "Il saldo disponibile",
      "La data di emissione"
    ],
    correct: 0,
    explain: "Corretto: è la prova del possesso fisico della carta."
  },
  {
    category: "carte",
    topic: "Pagamenti contactless",
    lesson: "Il <strong>contactless</strong> sfrutta la tecnologia <em>NFC</em> (Near Field Communication): basta avvicinare la carta (o lo smartphone) al POS per pagare. Per importi piccoli (es. fino a 50€) spesso non serve nemmeno il PIN.",
    question: "Cos'è il 'contactless' nelle carte di pagamento?",
    answers: [
      "Tecnologia NFC che permette pagamenti appoggiando la carta al POS",
      "Un servizio clienti online",
      "Una carta senza PIN",
      "Un tipo di carta di credito revolving"
    ],
    correct: 0,
    explain: "Esatto: NFC + POS = pagamento veloce senza strisciare."
  },
  {
    category: "carte",
    topic: "Carta revolving",
    lesson: "La <strong>carta revolving</strong> è una carta di credito dove il saldo viene rimborsato <em>a rate</em>, con applicazione di <em>interessi elevati</em> (spesso 15-20% TAEG). Comoda ma costosa: va usata con attenzione.",
    question: "Cosa significa 'carta revolving'?",
    answers: [
      "Carta di credito dove si rimborsa a rate con interessi",
      "Una carta prepagata ricaricabile",
      "Carta usa e getta",
      "Carta valida solo in un paese"
    ],
    correct: 0,
    explain: "Giusto: rate + interessi alti = attenzione al costo totale."
  },

  // === ORGANIZZAZIONE DEL LAVORO ===
  {
    category: "lavoro",
    topic: "Il taylorismo",
    lesson: "<strong>Frederick Taylor</strong> (fine '800) è il padre dell'<em>organizzazione scientifica del lavoro</em>. Studiò tempi e metodi per ottimizzare ogni operazione: divisione del lavoro, specializzazione, cronometraggio. Base del lavoro industriale moderno.",
    question: "Chi è stato il pioniere dell'organizzazione scientifica del lavoro?",
    answers: [
      "Frederick Taylor",
      "Henry Ford",
      "Adam Smith",
      "Max Weber"
    ],
    correct: 0,
    explain: "Corretto: Taylor = taylorismo = studio scientifico del lavoro."
  },
  {
    category: "lavoro",
    topic: "La catena di montaggio",
    lesson: "La <strong>catena di montaggio</strong>, introdotta da <em>Henry Ford</em> nel 1913, è un sistema produttivo dove il prodotto <em>si muove</em> tra postazioni fisse: ogni operaio esegue un compito semplice e ripetitivo. Permise la produzione di massa (Ford Model T).",
    question: "Cosa si intende per 'catena di montaggio'?",
    answers: [
      "Sistema produttivo dove il prodotto si sposta tra postazioni con compiti specializzati",
      "Un sindacato dei lavoratori",
      "Un contratto collettivo",
      "Un magazzino automatizzato"
    ],
    correct: 0,
    explain: "Esatto: Ford + catena = produzione di massa a basso costo."
  },
  {
    category: "lavoro",
    topic: "L'organigramma",
    lesson: "L'<strong>organigramma</strong> è la <em>rappresentazione grafica</em> della struttura aziendale: mostra ruoli, funzioni, rapporti gerarchici e linee di dipendenza. Aiuta a capire chi risponde a chi e come sono distribuite le responsabilità.",
    question: "Cos'è un organigramma aziendale?",
    answers: [
      "La rappresentazione grafica della struttura gerarchica dell'azienda",
      "Un elenco di prodotti",
      "Il bilancio d'esercizio",
      "Un contratto di fornitura"
    ],
    correct: 0,
    explain: "Giusto: è la 'mappa' dei ruoli aziendali."
  },
  {
    category: "lavoro",
    topic: "Il team working",
    lesson: "Il <strong>team working</strong> (lavoro di squadra) è la collaborazione tra persone con <em>competenze diverse</em> verso un obiettivo comune. Favorisce scambio di idee, problem solving, motivazione e innovazione. Oggi è centrale nelle aziende moderne.",
    question: "Cosa significa 'lavoro in team' o team working?",
    answers: [
      "Collaborazione tra persone con competenze diverse verso un obiettivo comune",
      "Lavorare da soli in ufficio",
      "Un sistema di controllo gerarchico",
      "Il lavoro notturno"
    ],
    correct: 0,
    explain: "Perfetto: competenze diverse + obiettivo condiviso = team."
  },
  {
    category: "lavoro",
    topic: "Lo smart working",
    lesson: "Lo <strong>smart working</strong> (L. 81/2017) è il <em>lavoro agile</em>: flessibilità di luogo e orario, orientato agli <em>obiettivi</em> e non al controllo in presenza. Richiede un accordo individuale tra azienda e lavoratore.",
    question: "Cos'è lo 'smart working'?",
    answers: [
      "Lavoro agile con flessibilità di luogo e orario, orientato agli obiettivi",
      "Un tipo di contratto a tempo determinato",
      "Il lavoro in fabbrica con macchinari automatici",
      "Lavoro obbligatoriamente da casa"
    ],
    correct: 0,
    explain: "Corretto: flessibilità + obiettivi, non telelavoro obbligato."
  },
  {
    category: "lavoro",
    topic: "Organizzazione per processi",
    lesson: "L'<strong>organizzazione per processi</strong> supera i classici 'silos' funzionali (commerciale, produzione, amministrazione separati) e si organizza intorno ai <em>flussi di valore</em> per il cliente. Più agile, più orientata al risultato finale.",
    question: "Quale modello organizzativo si basa su processi e non su funzioni?",
    answers: [
      "L'organizzazione per processi (o matrix/flow)",
      "L'organizzazione gerarchica classica",
      "L'organizzazione militare",
      "Il taylorismo puro"
    ],
    correct: 0,
    explain: "Giusto: processi = focus sul cliente, non sui reparti."
  },
  {
    category: "lavoro",
    topic: "La job rotation",
    lesson: "La <strong>job rotation</strong> è la <em>rotazione pianificata</em> dei dipendenti su mansioni diverse. Obiettivi: ridurre monotonia, formare persone polivalenti, aumentare resilienza e flessibilità dell'organizzazione.",
    question: "Cos'è la 'job rotation'?",
    answers: [
      "Rotazione dei dipendenti su mansioni diverse per ampliare competenze",
      "Licenziare e riassumere dipendenti",
      "Un contratto a chiamata",
      "Straordinari obbligatori"
    ],
    correct: 0,
    explain: "Esatto: ruotare sui ruoli = persone più complete."
  }
];
