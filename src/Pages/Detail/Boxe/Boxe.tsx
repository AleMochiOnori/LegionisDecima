import "./Boxe.css";
import boxingClass from "../../../assets/boxingClass.jpeg";
import pugilatoHero from "../../../assets/pugilatoDetail.jpeg";
const Boxe = () => {
  return (<>
    <img className="mainBoxingImage" src={boxingClass} alt="" />
    <div className="boxe-container">
      <section className="boxe-hero">
        <div className="hero-content">
          <h1 className="hero-title">Boxe - Pugilato Olimpico & Gym Boxe</h1>
          <p className="hero-subtitle">
            Allenamenti dedicati a tecnica, condizione e preparazione
            agonistica.
          </p>
          <p className="hero-lead">
            La nostra scuola offre percorsi pensati sia per chi aspira alla
            competizione nel pugilato olimpico, sia per chi desidera migliorare
            forma fisica e tecnica nella Gym Boxe. La struttura TSC, affiliata
            alla Federazione Pugilistica Italiana da 5 anni, garantisce un
            ambiente professionale e riconosciuto, ideale per crescere in
            sicurezza e con metodo. Gli allenamenti combinano lavoro al sacco,
            sparring controllato, esercizi di mobilità e conditioning specifico
            per aumentare resistenza, velocità e potenza.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <div className="fpi-logo-space"></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "2rem" }}>
                Orari & Livelli
              </div>
              <div style={{ color: "#6b7280", fontSize: "1.2rem" }}>
                Corsi per principianti, intermedi e avanzati. Lezioni serali e
                mattutine, sessioni private su richiesta.
              </div>
            </div>
          </div>
        </div>
        <div className="hero-images">
          <div>
            <img
              className="large"
              src={pugilatoHero}
              alt="Allenamento Pugilato"
            />
          </div>
        </div>
      </section>
      <section className="sections">
        <article className="course">
          <h3>Pugilato Olimpico</h3>
          <p className="decriptionBoxeDetail">
            Il percorso agonistico mira a sviluppare le qualità tecniche e
            tattiche necessarie per la competizione: lavoro specifico con coach
            certificati, sessioni di sparring e preparazione atletica mirata. I
            nostri allenatori hanno esperienza in palestre e nei circuiti
            federali.
          </p>
          <p className="highlight">
            Ideale per atleti che vogliono partecipare a competizioni e
            migliorare la propria performance.
          </p>
        </article>
        <article className="course">
          <h3>Gym Boxe</h3>
          <p>
            La Gym Boxe è pensata per chi cerca un allenamento completo:
            combinazione di tecniche di pugilato, interval training e lavoro al
            sacco per migliorare tono muscolare e resistenza cardiovascolare, sparring leggero e controllato,in
            un ambiente inclusivo e motivante.
          </p>
          <p className="highlight">
            Perfetto per chi vuole tonificarsi, imparare la tecnica e divertirsi
            allenandosi.
          </p>
        </article>
        <article className="course">
          <h3>Boxe al femminile</h3>
          <p>
            La Gym Box al femminile, guidata da Caterina Lanza, offre un
            allenamento dinamico e coinvolgente: tecniche di pugilato, esercizi
            funzionali e lavoro al sacco per migliorare forza, coordinazione e
            fiducia in sé, in un ambiente accogliente e motivante pensato per
            ogni livello.
          </p>
          <p className="highlight">
            Perfetto per chi vuole tonificarsi, imparare la tecnica e divertirsi
            allenandosi.
          </p>
        </article>
      </section>
    </div>
  </>
    
  );
};

export default Boxe;
