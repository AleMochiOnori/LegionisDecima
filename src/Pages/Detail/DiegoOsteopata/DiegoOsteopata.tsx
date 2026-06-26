import "./DiegoOsteopata.css";
import locandinaImg from "../../../assets/locandinaDiego.jpeg";

const services = [
  {
    icon: "🦴",
    title: "Osteopatia",
    desc: "Trattamento manuale per riequilibrare il corpo, ridurre dolori e migliorare mobilità e benessere generale.",
  },
  {
    icon: "💪",
    title: "Fisioterapia",
    desc: "Riabilitazione e recupero funzionale con tecniche mirate per ogni tipo di infortunio o patologia.",
  },
  {
    icon: "⚖️",
    title: "Kinesiologia Applicata",
    desc: "Valutazione del movimento e della postura per individuare squilibri muscolari e ottimizzare le performance.",
  },
  {
    icon: "🧍",
    title: "Rieducazione Posturale",
    desc: "Percorso personalizzato per correggere la postura, prevenire dolori cronici e migliorare l'allineamento corporeo.",
  },
];

const team = [
  { name: "Dott. Diego Russo", role: "Osteopata & Fisioterapista" },
  { name: "Dott.ssa Alessia Lanni", role: "Fisioterapista" },
  { name: "Dott. Federico Galdi", role: "Kinesiologo" },
];

const DiegoOsteopata = () => {
  return (
    <div className="diego-page">

      {/* Hero */}
      <div className="diego-hero">
        <div className="diego-hero-overlay" />
        <div className="diego-hero-content">
          <p className="diego-hero-label">Partner ufficiale TSC</p>
          <h1 className="diego-hero-title">Studio Russo</h1>
          <p className="diego-hero-subtitle">
            Osteopatia · Fisioterapia · Kinesiologia · Rieducazione Posturale
          </p>
          <a
            href="https://wa.me/393924182307"
            target="_blank"
            rel="noopener noreferrer"
            className="diego-cta-btn"
          >
            📞 Prenota una visita
          </a>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="diego-promo-banner">
        <span className="diego-promo-icon">🎖️</span>
        <p>
          <strong>SCONTO DEL 15%</strong> su tutte le prestazioni per gli iscritti del{" "}
          <strong>TSC – Team Sport & Combat</strong>
        </p>
        <span className="diego-promo-icon">🎖️</span>
      </div>

      <div className="diego-container">

        {/* Intro + locandina */}
        <div className="diego-intro-section">
          <div className="diego-intro-text">
            <h2 className="diego-section-title">Chi siamo</h2>
            <p>
              Lo <strong>Studio Russo</strong> nasce dalla passione per la salute e il benessere della persona.
              Il nostro team di professionisti altamente qualificati offre trattamenti personalizzati per
              atleti e non, con un approccio integrato che unisce osteopatia, fisioterapia e kinesiologia.
            </p>
            <p>
              Grazie alla nostra collaborazione con il <strong>Team Sport & Combat</strong>, offriamo
              condizioni esclusive a tutti gli atleti iscritti: uno sconto del <strong>15%</strong> su ogni
              prestazione, perché crediamo che la cura del corpo sia parte integrante di ogni percorso sportivo.
            </p>
          </div>
          <div className="diego-locandina-wrap">
            <img
              src={locandinaImg}
              alt="Locandina Studio Russo – Dott. Diego Russo Osteopata"
              className="diego-locandina"
            />
          </div>
        </div>

        {/* Servizi */}
        <div className="diego-services-section">
          <h2 className="diego-section-title centered">I Nostri Servizi</h2>
          <div className="diego-services-grid">
            {services.map((s) => (
              <div key={s.title} className="diego-service-card">
                <span className="diego-service-icon">{s.icon}</span>
                <h3 className="diego-service-title">{s.title}</h3>
                <p className="diego-service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="diego-team-section">
          <h2 className="diego-section-title centered">Il Team</h2>
          <div className="diego-team-grid">
            {team.map((m) => (
              <div key={m.name} className="diego-team-card">
                <div className="diego-team-avatar">
                  {m.name.charAt(m.name.indexOf(" ") + 1)}
                </div>
                <h3 className="diego-team-name">{m.name}</h3>
                <p className="diego-team-role">{m.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contatti */}
        <div className="diego-contact-section">
          <h2 className="diego-section-title centered">Contatti</h2>
          <div className="diego-contact-grid">
            <a
              href="https://wa.me/393924182307"
              target="_blank"
              rel="noopener noreferrer"
              className="diego-contact-card"
            >
              <span className="diego-contact-icon">💬</span>
              <div>
                <p className="diego-contact-label">WhatsApp</p>
                <p className="diego-contact-value">392 418 23 07</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/dottdiegorusso_osteopata"
              target="_blank"
              rel="noopener noreferrer"
              className="diego-contact-card"
            >
              <span className="diego-contact-icon">📸</span>
              <div>
                <p className="diego-contact-label">Instagram</p>
                <p className="diego-contact-value">@dottdiegorusso_osteopata</p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/search/via+Caffaro+13+Garbatella+Roma"
              target="_blank"
              rel="noopener noreferrer"
              className="diego-contact-card"
            >
              <span className="diego-contact-icon">📍</span>
              <div>
                <p className="diego-contact-label">Indirizzo</p>
                <p className="diego-contact-value">Via Caffaro 13, Garbatella</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DiegoOsteopata;
