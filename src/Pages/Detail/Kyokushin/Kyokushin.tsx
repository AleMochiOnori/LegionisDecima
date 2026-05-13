import "./Kyokushin.css";
import CourseCard from "../../../Components/CourseCard/CourseCard";
import me from "../../../assets/Kyokushin.jpeg";
import kyokushinClass from "../../../assets/KyokushinDetail.jpeg";
const Kyokushin = () => {
  return (
    <>
      <img className="mainKyokushinImage" src={kyokushinClass} alt="" />
      <div className="kyokushin-container">
        <section className="kyokushin-hero">
          <div className="hero-content">
            <h1 className="hero-title">Kyokushin Budokai</h1>
            <p className="hero-subtitle">
              Allenamenti per condizionamento, resistenza e pratica sul ring.
            </p>
            <p className="hero-lead">
              Il Kyokushin Budokai IBK è un sistema che combina la potenza del
              Kyokushinkai Karate con tecniche di Judo e allenamento coi
              guantoni (Kickboxing). È uno stile orientato al combattimento
              reale e all&#39;efficacia, si focalizza sulla forza fisica e sulla
              tecnica, alternando tra lotta in piedi (striking) e
              proiezioni/lotta a terra (Judo/grappling) rendendolo più simile a
              una forma di arti marziali miste (MMA). In sintesi, il Kyokushin
              Budokai IBK è un sistema di combattimento completo e intenso,
              ideato per l&#39;autodifesa e il combattimento a contatto pieno,
              che integra percussioni potenti, tecniche di proiezione e lotta.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <div className="kyokushin-logo-space"></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "2rem" }}>
                  Orari & Livelli
                </div>
                <div style={{ color: "#6b7280", fontSize: "1.2rem" }}>
                  Corsi per principianti, intermedi e avanzati.
                </div>
              </div>
            </div>
          </div>

          <div className="hero-images">
            <div>
              <img className="large" src={me} alt="Allenamento Kickboxing" />
            </div>
          </div>
        </section>
        <section className="sections">
          <CourseCard
            title="Kyokushin Base"
            description={`Introduzione al Kyokushin Karate: stance, tecniche di pugno e calcio, condizionamento di base e kata fondamentali. Perfetto per chi inizia e vuole costruire basi solide nel karate a contatto pieno.`}
            highlight={`Ideale per principianti e chi vuole approcciarsi alle arti marziali tradizionali.`}
            badge={`Base`}
          />

          <CourseCard
            title="Tecniche di Proiezione & Judo"
            description={`Percorso incentrato sulle proiezioni e la lotta: tecniche di Judo, takedown, controllo a terra e transizioni. Include drill a coppie e randori controllato.`}
            highlight={`Adatto a chi vuole integrare il grappling allo striking del Karate.`}
            badge={`Intermedio`}
          />

          <CourseCard
            title="Combattimento Completo & Sparring"
            description={`Programma avanzato che integra striking, proiezioni e lotta: kumite a contatto pieno, allenamento con guantoni, sparring MMA-style e conditioning intensivo per autodifesa e competizioni.`}
            highlight={`Per atleti che cercano un sistema di combattimento completo e reale.`}
            badge={`Avanzato`}
          />
        </section>
        {/* <div className="VideosThai">
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
        </div> */}
      </div>
    </>
  );
};

export default Kyokushin;
