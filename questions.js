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
      "Stampare moneta legale per conto dello Stato e del Tesoro pubblico",
      "Stabilire e regolare i prezzi al consumo dei beni di prima necessità",
      "Produrre beni e servizi reali destinati al mercato interno ed estero"
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
      "Un consulente fiscale che assiste i contribuenti nella dichiarazione dei redditi",
      "Un dipendente pubblico incaricato di gestire pratiche amministrative di sportello",
      "Un commerciante che acquista e rivende merci applicando un margine di profitto"
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
      "Banca d'Italia a livello nazionale e BCE per le banche di rilevanza sistemica",
      "Agenzia delle Entrate tramite i propri nuclei ispettivi per il settore bancario",
      "INPS tramite una divisione dedicata alla vigilanza sulle banche commerciali",
      "Ministero del Lavoro mediante ispettorati territoriali sul credito ordinario"
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
      "Un prestito concesso all'emittente che paga interessi periodici e rimborsa il capitale",
      "Una quota di proprietà di un'azienda che dà diritto ai dividendi e al voto assembleare",
      "Un contratto assicurativo che garantisce indennizzi al verificarsi di eventi dannosi",
      "Una valuta digitale decentralizzata emessa tramite registri distribuiti blockchain"
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
      "Una quota del capitale sociale di una società con diritto a utili e voto",
      "Un prestito a breve termine concesso dall'investitore all'impresa emittente",
      "Una polizza assicurativa che copre i rischi operativi dell'azienda emittente",
      "Un contratto di lavoro subordinato stipulato tra società e i propri dipendenti"
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
      "La differenza di rendimento tra due titoli di Stato, tipicamente BTP e Bund",
      "Il tasso di inflazione annuo misurato sul paniere dei prezzi al consumo",
      "La commissione bancaria applicata ai bonifici e ai pagamenti internazionali",
      "Il prodotto interno lordo nazionale calcolato dall'Istat su base trimestrale"
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
      "Mercato regolamentato dove si scambiano titoli come azioni, obbligazioni ed ETF",
      "Banca centrale incaricata di gestire la politica monetaria e i tassi ufficiali",
      "Ufficio governativo che autorizza le emissioni di titoli pubblici dello Stato",
      "Sistema nazionale di tassazione delle plusvalenze sulle rendite finanziarie"
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
      "La debito addebita subito sul conto, la credito a fine mese o a rate",
      "La debito è sempre di plastica fisica mentre la credito è solo virtuale",
      "La carta di credito funziona esclusivamente per gli acquisti online sicuri",
      "Non c'è alcuna differenza operativa: sono due nomi per lo stesso strumento"
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
      "Personal Identification Number, codice personale di identificazione",
      "Payment Identification Network, rete di identificazione dei pagamenti",
      "Private Internet Node, nodo privato di connessione online sicura",
      "Purchase Item Number, numero identificativo del singolo acquisto"
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
      "Una carta su cui si caricano fondi in anticipo e si spende fino al saldo disponibile",
      "Una carta con fido illimitato che permette acquisti senza alcun vincolo di importo",
      "Una carta utilizzabile solo all'estero per pagamenti in valuta diversa dall'euro",
      "Una carta gratuita senza commissioni né limiti operativi di prelievo o spesa"
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
      "Un codice di sicurezza usato per autorizzare le transazioni online",
      "Il numero identificativo del conto corrente collegato alla carta",
      "Il saldo residuo disponibile sulla carta al momento del pagamento",
      "La data di emissione iniziale da parte dell'istituto bancario"
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
      "Tecnologia NFC che permette pagamenti appoggiando la carta al terminale POS",
      "Servizio clienti online che consente di gestire la carta senza recarsi in banca",
      "Tipologia di carta priva di codice PIN utilizzabile solo con firma autografa",
      "Variante della carta di credito revolving con rimborso a rate e interessi"
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
      "Carta di credito il cui saldo viene rimborsato a rate con interessi elevati",
      "Carta prepagata ricaricabile periodicamente tramite bonifico o contanti",
      "Carta usa e getta valida per un solo acquisto online e poi disattivata",
      "Carta di pagamento valida esclusivamente nel territorio di un singolo paese"
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
      "Frederick Taylor, studioso di tempi e metodi produttivi industriali",
      "Henry Ford, industriale noto per l'introduzione della catena di montaggio",
      "Adam Smith, economista teorico della divisione del lavoro nelle manifatture",
      "Max Weber, sociologo studioso della burocrazia e dell'azione razionale"
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
      "Sistema produttivo in cui il prodotto si sposta tra postazioni con compiti specializzati",
      "Organizzazione sindacale dei lavoratori dell'industria metalmeccanica moderna",
      "Contratto collettivo nazionale che disciplina il lavoro nell'industria manifatturiera",
      "Magazzino automatizzato dove i prodotti finiti vengono stoccati e spediti al cliente"
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
      "La rappresentazione grafica della struttura gerarchica e dei ruoli aziendali",
      "Un elenco dettagliato dei prodotti offerti dall'azienda con relativi prezzi",
      "Il documento di bilancio d'esercizio con stato patrimoniale e conto economico",
      "Un contratto di fornitura stipulato tra l'azienda e i suoi principali partner"
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
      "Modalità di lavoro individuale in ufficio senza contatti con altri colleghi",
      "Sistema rigido di controllo gerarchico con supervisione diretta dei capi",
      "Turno di lavoro notturno svolto da gruppi ristretti di lavoratori dipendenti"
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
      "Lavoro agile con flessibilità di luogo e orario orientato al raggiungimento di obiettivi",
      "Tipologia particolare di contratto a tempo determinato con clausole di flessibilità",
      "Lavoro in stabilimento industriale svolto con macchinari automatici e robotizzati",
      "Modalità lavorativa che impone obbligatoriamente la prestazione dal domicilio privato"
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
      "L'organizzazione per processi, centrata sui flussi di valore per il cliente",
      "L'organizzazione gerarchica classica, basata su funzioni e livelli di comando",
      "L'organizzazione militare, fondata sulla catena rigida di comando verticale",
      "Il taylorismo puro, centrato sulla specializzazione estrema delle singole mansioni"
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
      "Rotazione pianificata dei dipendenti su mansioni diverse per sviluppare polivalenza",
      "Pratica di licenziamento e riassunzione ciclica dei dipendenti per ridurre costi",
      "Contratto flessibile che prevede chiamate del dipendente nei picchi di lavoro",
      "Schema gestionale che impone straordinari obbligatori in base agli obiettivi mensili"
    ],
    correct: 0,
    explain: "Esatto: ruotare sui ruoli = persone più complete."
  },

  // ====== DOMANDE DALLA VERIFICA SCOLASTICA ======
  // ---- TUTELA BANCARIA ----
  {
    category: "finanza",
    topic: "Arbitro Bancario Finanziario (ABF)",
    lesson: "L'<strong>ABF</strong> (Arbitro Bancario Finanziario) è un sistema di <em>risoluzione alternativa delle controversie</em> (ADR) tra banche e clienti. È rapido, economico (20€ per ricorso) e indipendente, gestito dalla Banca d'Italia. Evita di dover andare in tribunale.",
    question: "Quale organismo rappresenta un sistema di risoluzione alternativa delle controversie tra banca e cliente, rapido ed economico?",
    answers: [
      "L'Arbitro Bancario Finanziario (ABF), gestito dalla Banca d'Italia",
      "Il Testo Unico Bancario (TUB), legge quadro del settore del credito",
      "La Commissione Istruttoria Veloce (CIV), organo interno delle banche",
      "Il Business Plan, documento di pianificazione strategica delle imprese"
    ],
    correct: 0,
    explain: "Corretto: l'ABF è l'ADR bancario, rapido ed economico."
  },
  {
    category: "finanza",
    topic: "Trasparenza bancaria",
    lesson: "La <strong>trasparenza bancaria</strong> impone alle banche di fornire <em>informazioni chiare, comprensibili e complete</em>: costi, rischi, condizioni contrattuali devono essere esplicitati prima della firma. Il cliente deve poter confrontare le offerte e decidere consapevolmente.",
    question: "Secondo i principi della tutela, cosa deve garantire la trasparenza bancaria?",
    answers: [
      "Informazioni chiare e comprensibili sui costi e rischi dei prodotti offerti",
      "Possibilità di modificare unilateralmente le condizioni senza alcun preavviso",
      "Assenza totale di costi e commissioni per qualsiasi servizio bancario offerto",
      "Accesso ai contratti consentito solo tramite assistenza di un legale abilitato"
    ],
    correct: 0,
    explain: "Esatto: chiarezza e completezza delle informazioni al cliente."
  },
  {
    category: "finanza",
    topic: "Gestione dei reclami",
    lesson: "Le banche hanno l'<strong>obbligo</strong> di rispondere ai reclami dei clienti <em>entro tempi stabiliti</em> (tipicamente 60 giorni) tramite <em>procedure interne</em> dedicate (Ufficio Reclami). Se la risposta non soddisfa, il cliente può rivolgersi all'ABF.",
    question: "Qual è un obbligo delle banche nella gestione dei reclami?",
    answers: [
      "Rispondere entro tempi stabiliti tramite procedure interne dedicate e documentate",
      "Ignorare le segnalazioni verbali considerandole non vincolanti ai fini normativi",
      "Applicare una penale pecuniaria al cliente che presenta reclami ripetuti o infondati",
      "Cancellare la cronologia delle segnalazioni ricevute dopo trenta giorni dall'inoltro"
    ],
    correct: 0,
    explain: "Giusto: risposta tempestiva tramite ufficio reclami dedicato."
  },
  {
    category: "finanza",
    topic: "Testo Unico Bancario (TUB)",
    lesson: "Il <strong>TUB</strong> (D.Lgs. 385/1993) è la <em>legge quadro</em> che disciplina l'intera attività bancaria in Italia: autorizzazioni, vigilanza, trasparenza, tutela del cliente, sanzioni. È il riferimento normativo principale per banche e intermediari finanziari.",
    question: "Quale legge costituisce il quadro normativo principale per la tutela bancaria?",
    answers: [
      "Testo Unico Bancario (TUB), decreto legislativo quadro del settore",
      "Codice della Strada, normativa in materia di circolazione veicolare",
      "Statuto dei Lavoratori, legge sui diritti dei dipendenti in azienda",
      "Regolamento condominiale, norme sulla gestione degli edifici comuni"
    ],
    correct: 0,
    explain: "Corretto: il TUB è la 'costituzione' del sistema bancario italiano."
  },
  {
    category: "finanza",
    topic: "Correttezza banca-cliente",
    lesson: "La <strong>correttezza nei rapporti banca-cliente</strong> significa adottare <em>comportamenti leali</em> e <em>rispettare gli interessi del cliente</em>: proporre prodotti adeguati al profilo, evitare conflitti di interesse, informare su costi e rischi. Principio cardine della tutela MiFID II.",
    question: "Qual è l'obiettivo della 'Correttezza nei rapporti banca-cliente'?",
    answers: [
      "Comportamenti leali e rispetto degli interessi del cliente prima del profitto",
      "Massimizzare esclusivamente il profitto della banca ignorando le esigenze altrui",
      "Limitare il numero massimo di conti correnti intestabili a ciascuna singola persona",
      "Evitare l'uso di documenti in formato digitale preferendo la sola carta cartacea"
    ],
    correct: 0,
    explain: "Esatto: lealtà e tutela del cliente prima del profitto."
  },

  // ---- GESTIONE FINANZIARIA / CASH FLOW ----
  {
    category: "finanza",
    topic: "Utile contabile vs liquidità",
    lesson: "L'<strong>utile contabile</strong> è la differenza tra ricavi e costi (registro di competenza). La <strong>liquidità</strong> sono i <em>soldi realmente disponibili</em> in cassa/conto. Un'azienda può avere utile ma essere illiquida (clienti che non pagano) o liquida ma in perdita.",
    question: "Qual è la differenza fondamentale tra l'utile contabile e la liquidità?",
    answers: [
      "L'utile è la differenza tra ricavi e costi; la liquidità è la cassa effettivamente disponibile",
      "Nessuna differenza: sono sinonimi che indicano lo stesso concetto con terminologia diversa",
      "La liquidità si calcola una sola volta a fine anno in sede di chiusura del bilancio",
      "L'utile contabile è un valore che non tiene mai conto dell'incidenza fiscale dell'impresa"
    ],
    correct: 0,
    explain: "Corretto: utile = concetto contabile; liquidità = cassa reale."
  },
  {
    category: "finanza",
    topic: "Inflow nel cash flow",
    lesson: "Nel <strong>cash flow</strong>, gli <em>inflow</em> sono tutte le <em>entrate di denaro</em>: incassi da vendite, nuovi finanziamenti ricevuti, disinvestimenti. Gli <em>outflow</em> sono le uscite (stipendi, fornitori, imposte). Il saldo dice se l'azienda sta generando o bruciando cassa.",
    question: "Cosa si intende per 'inflow' nella gestione del cash flow?",
    answers: [
      "Entrate di denaro come incassi da vendite o nuovi finanziamenti ricevuti",
      "Pagamento di stipendi ai dipendenti e versamento delle imposte dovute",
      "Acquisto di nuovi macchinari e investimenti in immobilizzazioni tecniche",
      "Operazione di riduzione del capitale sociale sottoscritto dalla società"
    ],
    correct: 0,
    explain: "Esatto: inflow = entrate di cassa."
  },
  {
    category: "finanza",
    topic: "Tasso Interno di Rendimento (TIR)",
    lesson: "Il <strong>TIR</strong> (Tasso Interno di Rendimento, o IRR) è il <em>tasso percentuale</em> che rende il Valore Attuale Netto (VAN) uguale a zero. Misura la <em>redditività percentuale</em> di un progetto: se TIR > costo del capitale, il progetto conviene.",
    question: "Quale strumento valuta la redditività percentuale di un progetto?",
    answers: [
      "TIR, Tasso Interno di Rendimento che esprime la redditività in termini percentuali",
      "VAN, Valore Attuale Netto che misura il valore del progetto in euro assoluti",
      "Payback Period, indicatore che calcola il tempo di recupero dell'investimento",
      "Budget di Tesoreria, documento di previsione delle entrate e uscite di cassa"
    ],
    correct: 0,
    explain: "Giusto: il TIR esprime il rendimento in %, il VAN in euro."
  },
  {
    category: "finanza",
    topic: "Capitale Proprio (Equity)",
    lesson: "Il <strong>Capitale Proprio</strong> (o Equity) deriva dai <em>conferimenti dei soci</em> o da <em>utili non distribuiti</em> (autofinanziamento). Non ha <em>scadenza di rimborso</em> né obbligo di remunerazione fissa: è il capitale di rischio dell'impresa.",
    question: "Qual è la caratteristica del Capitale Proprio (Equity)?",
    answers: [
      "Deriva da conferimenti dei soci o utili non distribuiti e non ha scadenza di rimborso",
      "Ha sempre una scadenza di rimborso fissa stabilita contrattualmente con i creditori",
      "È composto esclusivamente da mutui bancari concessi da istituti di credito primari",
      "Ha sempre un costo inferiore rispetto al capitale di terzi raccolto tramite debito"
    ],
    correct: 0,
    explain: "Esatto: capitale di rischio, nessuna scadenza obbligatoria."
  },
  {
    category: "finanza",
    topic: "Budget di Tesoreria",
    lesson: "Il <strong>Budget di Tesoreria</strong> è uno strumento di <em>previsione a breve termine</em> (mensile/settimanale) delle entrate e uscite di cassa. Serve a <em>prevenire crisi di liquidità</em>: se prevede un saldo negativo, l'impresa può attivare per tempo linee di credito.",
    question: "A cosa serve il Budget di Tesoreria?",
    answers: [
      "Previsione a breve termine di entrate e uscite per prevenire crisi di liquidità",
      "Analisi della strategia aziendale di lungo periodo su orizzonte temporale decennale",
      "Calcolo puntuale delle imposte sul reddito d'impresa dovute al termine dell'esercizio",
      "Analisi comparativa della concorrenza internazionale sui mercati di riferimento"
    ],
    correct: 0,
    explain: "Corretto: strumento di tesoreria per evitare tensioni di cassa."
  },

  // ---- CCNL ESTETISTA ----
  {
    category: "lavoro",
    topic: "CCNL estetista — disciplina",
    lesson: "Il <strong>CCNL</strong> (Contratto Collettivo Nazionale di Lavoro) per il settore estetico disciplina i <em>rapporti tra datore di lavoro e lavoratori</em>: inquadramento, retribuzione, orari, ferie, periodo di prova, licenziamento. È il riferimento obbligatorio per tutte le aziende del settore.",
    question: "Il CCNL per estetista disciplina:",
    answers: [
      "I rapporti tra datore di lavoro e lavoratori in tutti i loro aspetti contrattuali",
      "Soltanto gli stipendi minimi mensili e le relative maggiorazioni per anzianità",
      "Soltanto gli orari di lavoro giornalieri e settimanali dei dipendenti assunti",
      "Soltanto i giorni di ferie annuali e i permessi retribuiti per eventi familiari"
    ],
    correct: 0,
    explain: "Giusto: il CCNL copre tutto il rapporto di lavoro."
  },
  {
    category: "lavoro",
    topic: "Periodo di prova",
    lesson: "Il <strong>periodo di prova</strong> per un'estetista <em>varia in base al livello di inquadramento</em> (1°, 2°, 3° livello ecc.). Livelli più alti = periodo di prova più lungo. Durante la prova, entrambe le parti possono recedere senza preavviso.",
    question: "Il periodo di prova per un'estetista:",
    answers: [
      "Può variare in base al livello di inquadramento contrattuale attribuito",
      "Non è previsto dal contratto collettivo nazionale di lavoro del settore",
      "È uguale per tutti i livelli senza distinzioni di mansione o qualifica",
      "Ha sempre durata fissa di sei mesi indipendentemente dall'inquadramento"
    ],
    correct: 0,
    explain: "Esatto: la durata dipende dal livello contrattuale."
  },
  {
    category: "lavoro",
    topic: "Ferie annuali CCNL estetista",
    lesson: "Le <strong>ferie annuali</strong> nel CCNL estetista sono <em>obbligatorie e retribuite</em>: tipicamente <em>4 settimane</em> all'anno (26 giorni lavorativi). Sono un diritto irrinunciabile garantito anche dalla Costituzione (art. 36) e dal D.Lgs. 66/2003.",
    question: "Le ferie annuali nel CCNL estetista sono:",
    answers: [
      "Obbligatorie e retribuite, pari a circa quattro settimane all'anno",
      "Facoltative e lasciate alla libera decisione del singolo dipendente",
      "Non retribuite e godute come semplice sospensione dal servizio",
      "Previste unicamente per i lavoratori assunti con contratto full-time"
    ],
    correct: 0,
    explain: "Corretto: diritto obbligatorio e retribuito, circa 4 settimane."
  },
  {
    category: "lavoro",
    topic: "Lavoro straordinario",
    lesson: "Il <strong>lavoro straordinario</strong> è quello svolto <em>oltre l'orario normale</em>. Deve essere <em>retribuito con una maggiorazione</em> rispetto alla paga ordinaria (tipicamente +15% / +30% / +50% a seconda se diurno, notturno o festivo). Ha limiti annui fissati dal CCNL.",
    question: "Il lavoro straordinario:",
    answers: [
      "Deve essere retribuito con una maggiorazione rispetto alla paga ordinaria",
      "Non è mai consentito dal contratto collettivo nazionale del settore",
      "È sempre prestato a titolo gratuito senza alcun compenso aggiuntivo",
      "È obbligatorio per il lavoratore senza limiti massimi annui prefissati"
    ],
    correct: 0,
    explain: "Giusto: lo straordinario si paga di più dell'ordinario."
  },
  {
    category: "lavoro",
    topic: "CCNL estetista — applicazione",
    lesson: "Il <strong>CCNL estetista</strong> si applica a <em>tutte le attività del settore estetico</em>: centri estetici, SPA, saloni, attività di trattamenti del corpo e del viso. Non si applica a parrucchieri (hanno un CCNL proprio) né ad altri settori merceologici.",
    question: "Il CCNL estetista si applica:",
    answers: [
      "A tutte le attività del settore estetico, inclusi centri, SPA e saloni",
      "Soltanto ai centri benessere con piscina e trattamenti termali interni",
      "Soltanto ai parrucchieri e agli operatori del settore acconciatura",
      "Soltanto alle aziende pubbliche e alle strutture sanitarie regionali"
    ],
    correct: 0,
    explain: "Esatto: copre tutto il settore estetico professionale."
  },

  // ---- INPS / INAIL / PREVIDENZA ----
  {
    category: "lavoro",
    topic: "INPS — previdenza sociale",
    lesson: "L'<strong>INPS</strong> (Istituto Nazionale della Previdenza Sociale) si occupa principalmente di <em>previdenza sociale</em>: eroga pensioni (vecchiaia, invalidità, superstiti), gestisce i contributi previdenziali, paga indennità come NASpI (disoccupazione), malattia, maternità.",
    question: "L'INPS si occupa principalmente di:",
    answers: [
      "Previdenza sociale, con erogazione di pensioni e gestione dei contributi",
      "Assicurazione obbligatoria contro gli infortuni occorsi durante il lavoro",
      "Controllo sanitario dei lavoratori tramite visite periodiche di idoneità",
      "Sicurezza sul lavoro con ispezioni dirette nelle aziende e nei cantieri"
    ],
    correct: 0,
    explain: "Corretto: INPS = pensioni e previdenza."
  },
  {
    category: "lavoro",
    topic: "INAIL — infortuni e malattie professionali",
    lesson: "L'<strong>INAIL</strong> (Istituto Nazionale Assicurazione Infortuni sul Lavoro) ha il compito di <em>assicurare i lavoratori contro infortuni sul lavoro e malattie professionali</em>. Eroga indennità, cure e rendite in caso di danno. È diverso dall'INPS che si occupa di pensioni.",
    question: "L'INAIL ha il compito di:",
    answers: [
      "Assicurare i lavoratori contro infortuni sul lavoro e malattie professionali",
      "Erogare le pensioni di vecchiaia, invalidità e superstiti ai lavoratori",
      "Gestire i contratti di lavoro individuali e le trattative sindacali nazionali",
      "Stabilire gli stipendi minimi e le retribuzioni dei lavoratori del settore"
    ],
    correct: 0,
    explain: "Giusto: INAIL = assicurazione infortuni/malattie professionali."
  },
  {
    category: "lavoro",
    topic: "Contributi previdenziali",
    lesson: "I <strong>contributi previdenziali</strong> vengono versati all'<strong>INPS</strong> e servono a finanziare le <em>future pensioni</em> del lavoratore. Sono pagati in parte dal datore di lavoro (quota maggiore) e in parte dal lavoratore (trattenuta in busta paga, circa 9,19%).",
    question: "I contributi previdenziali vengono versati a:",
    answers: [
      "INPS, ente nazionale di previdenza che finanzia le pensioni future",
      "INAIL, ente assicurativo contro gli infortuni sul luogo di lavoro",
      "Comune di residenza del lavoratore tramite versamento sul bilancio locale",
      "Regione competente che destina le somme a spese sanitarie territoriali"
    ],
    correct: 0,
    explain: "Corretto: i contributi per la pensione vanno all'INPS."
  },
  {
    category: "lavoro",
    topic: "Assicurazione INAIL",
    lesson: "L'<strong>assicurazione INAIL</strong> è <em>obbligatoria per la maggior parte dei lavoratori</em> dipendenti (e per alcuni autonomi in settori a rischio). Il premio è a carico <em>esclusivo del datore di lavoro</em>: il lavoratore non paga nulla, ma è protetto in caso di infortunio.",
    question: "L'assicurazione INAIL è:",
    answers: [
      "Obbligatoria per la maggior parte dei lavoratori dipendenti e alcuni autonomi",
      "Facoltativa e attivabile solo su richiesta esplicita del singolo lavoratore",
      "Prevista unicamente per i liberi professionisti iscritti a casse autonome",
      "Prevista unicamente per i disoccupati in cerca di nuova occupazione stabile"
    ],
    correct: 0,
    explain: "Giusto: obbligatoria, pagata dal datore di lavoro."
  },
  {
    category: "lavoro",
    topic: "Infortunio sul lavoro",
    lesson: "In caso di <strong>infortunio sul lavoro</strong>, il lavoratore ha l'obbligo di <em>avvisare immediatamente il datore di lavoro</em>. Il datore deve poi fare denuncia all'INAIL (entro 2 giorni se prognosi >3 giorni). Senza avviso tempestivo si perde il diritto all'indennità.",
    question: "In caso di infortunio sul lavoro, il lavoratore deve:",
    answers: [
      "Avvisare immediatamente il datore di lavoro per attivare la denuncia INAIL",
      "Non comunicare nulla all'azienda per evitare ripercussioni disciplinari interne",
      "Presentare subito domanda di pensione anticipata all'ente previdenziale INPS",
      "Dimettersi volontariamente e cercare un'altra occupazione in settore diverso"
    ],
    correct: 0,
    explain: "Corretto: comunicazione immediata al datore di lavoro."
  }
];
