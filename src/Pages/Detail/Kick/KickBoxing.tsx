import "./KickBoxing.css";
import CourseCard from "../../../Components/CourseCard/CourseCard";
import kickboxingClass from "../../../assets/KickBoxingDetail.jpeg";
import me from "../../../assets/kick.jpeg";
import kombatGroup from "../../../assets/kombat-group-logo.png";
import { Link } from "react-router-dom";
const KickBoxing = () => {
  return (
    <>
      <img className="mainKickBoxingImage" src={kickboxingClass} alt="" />
      <div className="kickboxing-container">
        <section className="kickboxing-hero">
          <div className="hero-content">
            <h1 className="hero-title">Kickboxing & Muay Thai</h1>
            <p className="hero-subtitle">
              Allenamenti per tecnica, condizione e pratica sul ring.
            </p>
            <p className="hero-lead">
              Offriamo percorsi specifici per Kickboxing e Muay Thai pensati per
              seguire l'atleta in ogni fase del percorso: dall'apprendimento delle
              basi tecniche al perfezionamento delle combinazioni più complesse.
              Gli allenamenti includono lavoro su jab, cross, low-kick, calci alti,
              ginocchiate e gomiti, oltre a drill sul clinch, controllo della
              distanza e difesa personale. Affianchiamo sessioni di pad work e
              sparring tecnico a programmi di conditioning mirati (resistenza,
              forza esplosiva e mobilità), così da sviluppare potenza, timing e
              resilienza. I programmi sono modulabili per chi cerca fitness,
              per chi vuole migliorare la propria tecnica o per chi si prepara ad
              affrontare competizioni ufficiali.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <div className="WTKA-logo-space"></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "2rem" }}>
                  Orari & Livelli
                </div>
                <div style={{ color: "#6b7280", fontSize: "1.2rem" }}>
                  Corsi per principianti, intermedi e avanzati. Lezioni serali e
                  mattutine, sessioni private e stage su richiesta.
                </div>
              </div>
            </div>
          </div>

          <div className="hero-images">
            <div>
              <img
                className="large"
                src={me}
                alt="Allenamento Kickboxing"
              />
            </div>
          </div>
        </section>
        <section className="sections">
          <CourseCard
            title="Kick / MuayThai Base"
            description={`Introduzione al Kickboxing: stance, jab/cross, low-kick, combinazioni e footwork. Perfetto per chi inizia e vuole imparare basi solide.`}
            highlight={`Ideale per principianti e chi cerca un allenamento tecnico.`}
            badge={`Base`}
          />

          <CourseCard
            title="Muay Thai & Clinch"
            description={`Percorso incentrato su Muay Thai: tecnica su gomiti e ginocchiate, clinch, pad work e controllo della distanza. Include drill e lavoro a coppie.`}
            highlight={`Adatto a chi vuole sviluppare potenza e abilità in corta distanza.`}
            badge={`Tecnica`}
          />

          <CourseCard
            title="Advanced Striking & Conditioning"
            description={`Programma avanzato che integra Kickboxing e Muay Thai: pad sequences complesse, sparring tattico e conditioning specifico per performance in allenamento e gara.`}
            highlight={`Per atleti che cercano preparazione mirata.`}
            badge={`Avanzato`}
          />
        </section>
        <div className="Associated">
          <h1>Associato con Kombat Group</h1>
          <Link target="_blank" className="kombatGroup" to ="https://www.kombatgroup.com/it/">
            <img src={kombatGroup} alt="" />
          </Link>
        </div>
         <div className="VideosThai">
        <h2 className="VideosTitleThai">Video allenamenti</h2>
        <div className="VideoContainer">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/2u6s_SwNHeM"
          ></iframe>
          <iframe
            width="360"
            height="640"
            src="https://www.youtube.com/embed/ySjeyFwO-jA"
            title="YouTube Shorts Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="video-iframe"
          ></iframe>
        </div>
      </div>
      </div>
    </>
  );
};

export default KickBoxing;
