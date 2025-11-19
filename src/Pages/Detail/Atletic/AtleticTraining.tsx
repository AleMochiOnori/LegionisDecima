import "./AtleticTraining.css";
import atleticMain from "../../../assets/main.jpeg";
import atleticHero from "../../../assets/pugilatoDetail.jpeg";
import CourseCard from '../../../Components/CourseCard/CourseCard';

const AtleticTraining = () => {
  return (
    <>
      <img className="mainAtleticImage" src={atleticMain} alt="" />
      <div className="atletic-container">
        <section className="atletic-hero">
          <div className="hero-content">
            <h1 className="hero-title">Allenamento Atletico</h1>
            <p className="hero-subtitle">Forza, resistenza e preparazione specifica.</p>
            <p className="hero-lead">
              Programmi di allenamento atletico pensati per atleti e praticanti di
              sport da combattimento: sviluppo della forza esplosiva, resistenza
              anaerobica e capacità di recupero. Lavoriamo su esercizi di
              potenziamento, circuiti metabolici, tecnica di movimento e
              prevenzione infortuni, integrando sessioni con coach specializzati
              e piani personalizzati.
            </p>

            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem'}}>
              <div className="atletic-logo-space"></div>
              <div>
                <div style={{fontWeight:700, fontSize: '2rem'}}>Orari & Livelli</div>
                <div style={{color: '#6b7280', fontSize: '1.2rem'}}>Programmi per principianti, avanzati e atleti da competizione. Sessioni individuali e gruppi tecnici disponibili.</div>
              </div>
            </div>
          </div>

          <div className="hero-images">
            <div>
              <img className="large" src={atleticHero} alt="Allenamento Atletico" />
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
            <h2 className="VideosTitleAtletic">Video di Esempio</h2>
            
        </div>
      </div>
    </>
  );
};

export default AtleticTraining;
