import "./AtleticTraining.css";
import atleticMain from "../../../assets/main.jpeg";
import atleticHero from "../../../assets/pugilatoDetail.jpeg";
import CourseCard from "../../../Components/CourseCard/CourseCard";

const AtleticTraining = () => {
  return (
    <>
      <img className="mainAtleticImage" src={atleticMain} alt="" />
      <div className="atletic-container">
        <section className="atletic-hero">
          <div className="hero-content">
            <h1 className="hero-title">Allenamento Atletico</h1>
            <p className="hero-subtitle">
              Forza, resistenza e preparazione specifica.
            </p>
            <p className="hero-lead">
              Programmi di preparazione atletica avanzata, studiati
              appositamente per atleti e praticanti di sport da combattimento,
              con l’obiettivo di migliorare le prestazioni in gara e l’efficacia
              durante gli allenamenti. Il percorso include lo sviluppo della
              forza esplosiva, della resistenza anaerobica e della velocità di
              recupero, elementi fondamentali per chi pratica discipline come
              Muay Thai, MMA, Boxe, Kickboxing e arti marziali in generale.
              Attraverso esercizi mirati di potenziamento muscolare, lavori
              metabolici ad alta intensità (HIIT), sessioni tecniche dedicate al
              miglioramento della biomeccanica dei movimenti e protocolli di
              prevenzione infortuni, portiamo l’atleta a un livello superiore di
              performance. Ogni programma è personalizzato in base al livello,
              agli obiettivi e al calendario agonistico, con monitoraggi
              periodici e adattamenti progressivi.
            </p>
          </div>

          <div className="hero-images">
            <div>
              <img
                className="large"
                src={atleticHero}
                alt="Allenamento Atletico"
              />
            </div>
          </div>
        </section>
        <section className="sections">
          <CourseCard
            title="Forza & Potenza"
            description={`Programma mirato allo sviluppo della forza esplosiva, con esercizi in palestra, plyometrics e lavoro con sovraccarichi.`}
            highlight={`Per aumentare la potenza nei colpi e la performance atletica.`}
            badge={`Forza`}
          />
          <CourseCard
            title="Conditioning Metabolico"
            description={`Circuiti ad alta intensità, interval training e lavoro specifico per migliorare resistenza e recupero tra gli scambi.`}
            highlight={`Migliora resistenza e capacità di sostenere round intensi.`}
            badge={`Conditioning`}
          />
          <CourseCard
            title="Mobilità & Prevenzione"
            description={`Sessioni dedicate a mobilità articolare, stabilità e prevenzione infortuni integrate nei piani settimanali.`}
            highlight={`Riduci il rischio di infortuni e migliora l'efficienza del movimento.`}
            badge={`Salute`}
          />
        </section>
        <div className="VideosAtletic">
          <h2 className="VideosTitleAtletic">Video allenamenti</h2>
          <div className="VideoContainer">
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/L7FxaQrNClQ"
            ></iframe>
            <iframe
              width="360"
              height="640"
              src="https://www.youtube.com/embed/Hcrjr5-ii9E"
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

export default AtleticTraining;
