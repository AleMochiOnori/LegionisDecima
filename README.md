# 🥊 Legionis Decima Torrino — Frontend

Benvenuto nel repository **Legionis Decima Torrino (Frontend)**, l’interfaccia web ufficiale della scuola di **Muay Thai e Kickboxing “Legionis Decima Torrino”**.  
Il progetto è sviluppato in **React + TypeScript**, con gestione dello stato e connessione ad un **backend REST API** per recensioni, prenotazioni e gestione dei contenuti.

---

## 🚀 Tecnologie principali

- ⚛️ **React 18 + TypeScript**
- 💄 **CSS Modules / Custom CSS**
- 📦 **Vite** – per sviluppo rapido e build ottimizzata
- 🔐 **Axios** – per chiamate API
- 🌙 **React-Bootstrap** – per modali e componenti UI selezionati
- 💬 **JWT Auth** – autenticazione utenti
- 🌍 **REST API** – integrazione con backend Node.js / Express

---

## 📁 Struttura del progetto

```
src/
├── assets/          # Immagini e loghi
├── components/      # Componenti riutilizzabili (Navbar, Footer, Modali, ecc.)
├── Pages/           # Pagine principali (Home, Ratings, Prenotazioni, ecc.)
├── styles/          # File CSS globali o moduli
├── App.tsx          # Entry point principale
└── main.tsx         # Montaggio React root
```

---

## ⚙️ Installazione e avvio

### 1️⃣ Clona il repository

```bash
git clone https://github.com/AleMochiOnori/LegionisDecima.git

cd LegionisDecima
```

---

### 2️⃣ Installa le dipendenze

Assicurati di avere **Node.js ≥ 18** installato, poi esegui:

```bash
npm install
```

---

### 3️⃣ Configura le variabili d’ambiente

Crea un file `.env` nella root del progetto e aggiungi:

```
VITE_API_URL=http://localhost:5000/api
```

> ⚠️ Sostituisci l’URL con quello del backend in produzione se necessario.

---

### 4️⃣ Avvia il server di sviluppo

```bash
npm run dev
```

Il sito sarà disponibile su:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Script disponibili

| Comando | Descrizione |
|----------|-------------|
| `npm run dev` | Avvia il server di sviluppo Vite |
| `npm run build` | Compila il progetto per la produzione |
| `npm run preview` | Avvia un’anteprima locale della build |
| `npm run lint` | Esegue il linter per TypeScript/JS |

---

## 🔗 Collegamento al Backend

Il frontend comunica con l’API **Node.js / Express** (progetto “Legionis Decima Backend”) per:

- Creazione e modifica recensioni  
- Autenticazione utente  
- Gestione prenotazioni  

Assicurati che il backend sia in esecuzione su `http://localhost:5000` o sull’URL specificato nel file `.env`.

---

## 🧠 Note per lo sviluppo

- Le chiamate **Axios** includono automaticamente il token JWT salvato nel `localStorage`.  
- In caso di errori come `ERR_NETWORK` o problemi di **CORS**, verifica:
  - che il backend permetta richieste dal dominio del frontend  
  - che la variabile `VITE_API_URL` sia corretta  

---

## 👨‍💻 Autore

**Alessandro Mochi Onori**
  
Frontend sviluppato per la palestra **Legionis Decima Torrino**.

---

🖤 *Progetto creato con passione per la Muay Thai e la community Legionis Decima.*
