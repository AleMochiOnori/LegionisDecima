# 🥊 Legionis Decima Torrino — Frontend

Benvenuto nel repository **Legionis Decima Torrino (Frontend)**, l’interfaccia web ufficiale della scuola di Muay Thai e Kickboxing “Legionis Decima Torrino”.  
Il progetto è sviluppato in **React + TypeScript**, con gestione dello stato e connessione ad un backend REST API per recensioni, prenotazioni e gestione contenuti.

---

## 🚀 Tecnologie principali

- ⚛️ **React 18 + TypeScript**
- 💄 **CSS Modules / Custom CSS**
- 📦 **Vite** (per sviluppo rapido e build ottimizzata)
- 🔐 **Axios** (per chiamate API)
- 🌙 **React-Bootstrap** (modali e componenti UI selezionati)
- 💬 **JWT Auth** (per autenticazione)
- 🌍 **REST API** (collegamento al backend Node.js/Express)

---

## 📁 Struttura del progetto

src/
├── assets/ # Immagini e loghi
├── components/ # Componenti riutilizzabili (Navbar, Footer, Modali, ecc.)
├── Pages/ # Pagine principali (Home, Ratings, Prenotazioni, ecc.)
├── styles/ # File CSS globali o moduli
├── App.tsx # Entry point dell'app
└── main.tsx # Montaggio React root




---

## ⚙️ Installazione e avvio

### 1️⃣ Clona il repository

```bash
git clone https://github.com/<tuo-username>/LegionisDecima-Frontend.git

cd LegionisDecima-Frontend




2️⃣ Installa le dipendenze

Assicurati di avere Node.js ≥ 18 installato, poi esegui:

npm install




3️⃣ Configura le variabili d’ambiente

Crea un file .env nella root del progetto con:

VITE_API_URL=http://localhost:5000/api




4️⃣ Avvia il server di sviluppo

Il sito sarà disponibile su:

👉 http://localhost:5173




🛠️ Script disponibili

-npm run dev	Avvia il server di sviluppo Vite

-npm run build	Compila il progetto per la produzione

-npm run preview	Avvia un’anteprima locale della build

-npm run lint	Esegue il linter per TypeScript/JS




🔗 Collegamento al Backend

Il frontend comunica con l’API Node.js / Express (progetto “Legionis Decima Backend”) per:

Creazione e modifica recensioni

Autenticazione utente

Gestione prenotazioni

Assicurati che il backend sia in esecuzione su http://localhost:5000 o sull’URL specificato in .env.




🧠 Note per lo sviluppo

Le chiamate Axios includono il token JWT salvato nel localStorage.

In caso di errori ERR_NETWORK o CORS, verifica la configurazione del backend e l’origine consentita.



👨‍💻 Autore

Alessandro Mochi Onori

---

Progetto sviluppato come frontend per la palestra Legionis Decima Torrino.

---
