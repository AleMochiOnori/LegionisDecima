import { Link } from "react-router-dom";
import "./Detail.css";
import MainImage from "../../assets/ThaiImageMain.jpeg";
import atleticTrainingImg from "../../assets/SVG/weightlifting-svgrepo-com.png";
import boxeImg from "../../assets/SVG/boxing-fight-punch-boxer-svgrepo-com.png";
import kickMuayImg from "../../assets/SVG/kickboxing-svgrepo-com.png";
import kyokushinImg from "../../assets/kyokushin-budokai-all-round-fighting-logo-em.png";
const Detail = () => {
  return (
    <>
     
      <div className="DetailContainer">
        
        <section className="disciplines-section">
          <div className="disciplines-header">
            <h2 className="SelezionaDisciplina">Seleziona una disciplina per approfondire</h2>
            <p className="disciplines-subtitle">
              Scopri i nostri percorsi: tecnica, condizionamento e crescita personale in ogni disciplina.
            </p>
          </div>
          <div className="Riflessioni">
            <Link to="/atleticTraining" className="section-card-link">
              <div className="AtleticTraining section-card">
                <img className="svg" src={atleticTrainingImg} alt="" />
                <h2>Allenamento Atletico</h2>
                <p>Preparazione fisica, potenza e resistenza.</p>
                <span className="section-card-cta">
                  Scopri di più <span className="section-card-arrow">→</span>
                </span>
              </div>
            </Link>
            <Link to="/boxe" className="section-card-link">
              <div className="Boxe section-card">
                <img className="svg" src={boxeImg} alt="" />
                <h2>Boxe / Gym Boxe</h2>
                <p>Tecnica, velocità e strategia pugilistica.</p>
                <span className="section-card-cta">
                  Scopri di più <span className="section-card-arrow">→</span>
                </span>
              </div>
            </Link>
            <Link to={"/kick-muay-thai"} className="section-card-link">
              <div className="KickMuay section-card">
                <img className="svg" src={kickMuayImg} alt="" />
                <h2>Kick / Muay Thai</h2>
                <p>Disciplina, tecnica e spirito da combattente.</p>
                <span className="section-card-cta">
                  Scopri di più <span className="section-card-arrow">→</span>
                </span>
              </div>
            </Link>
            <Link to={"/kyokushin"} className="section-card-link">
              <div className="KyokushinBudokai section-card">
                <img className="svg" src={kyokushinImg} alt="" />
                <h2>Kyokushin Budokai</h2>
                <p>Condizionamento ai colpi, combattimento in piedi e a terra.</p>
                <span className="section-card-cta">
                  Scopri di più <span className="section-card-arrow">→</span>
                </span>
              </div>
            </Link>
          </div>
        </section>
        <div className="DiegoPromoSection">
          <div className="diego-promo-card">
            <div className="diego-promo-text">
              <p className="diego-promo-tag">🤝 Partner ufficiale TSC</p>
              <h3 className="diego-promo-title">Studio Russo – Osteopatia & Fisioterapia</h3>
              <p className="diego-promo-desc">
                Osteopatia · Fisioterapia · Kinesiologia · Rieducazione Posturale.<br />
                <strong>Sconto del 15%</strong> per tutti gli iscritti al Team Sport & Combat.
              </p>
              <Link to="/osteopata-diego-russo" className="red-button">
                <p className="LinkToThailand">Scopri lo Studio Russo</p>
              </Link>
            </div>
          </div>
        </div>
        <img
        className="immagineThai"
        src={MainImage}
        alt="Viaggio studio Thailandia"
      />
        <div className="Viaggi ">
          <h2 className="TITOLOTHAI">Viaggio Studio in Thailandia</h2>
          <p className="thaiDescription">
            Un’esperienza unica per scoprire le radici della Muay Thai, con
            allenamenti intensi, cerimonie tradizionali e momenti
            indimenticabili vissuti al Kombat Group di Pattaya.
          </p>
          <Link to="/viaggio-thailandia" className="red-button">
            <p className="LinkToThailand">Leggi il racconto completo</p>
          </Link>
        </div>
        <div className="ArticoliDetail">
          <h2 className="ArticoliTitleDetail">Articoli Recenti</h2>
          <div className="articles-list-detail">
            <Link to="/articoli/alimentazione-per-le-arti-marziali">
              <div className="article-card-detail">
                <h3 style={{fontSize: "1.4rem" , marginTop : "10px"}}>Alimentazione nelle Arti Marziali</h3>
                <p style={{fontSize: "1.1rem"}}>
                  Scopri come migliorare le tue performance con un'alimentazione
                  mirata e strategie di allenamento efficaci.
                </p>
              </div>
            </Link>
            <Link to="/articoli/allenamento-funzionale">
              <div className="article-card-detail">
                <h3 style={{fontSize: "1.4rem" , marginTop : "10px"}}>Allenamento Funzionale nelle Arti Marziali</h3>
                <p style={{fontSize: "1.1rem"}}>
                  Scopri i benefici dell'allenamento funzionale per migliorare
                  forza, resistenza e agilità nelle arti marziali.
                </p>
              </div>
            </Link>
             <Link to="/articoli/gym-boxe-per-donne">
              <div className="article-card-detail">
                <h3 style={{fontSize: "1.4rem" , marginTop : "10px"}}>Gym Boxe al femminile</h3>
                <p style={{fontSize: "1.1rem"}}>
                  Scopri i benefici della Gym Boxe per le donne: un allenamento
                  completo che unisce fitness, autodifesa e benessere mentale.
                </p>
              </div>
            </Link>
            <Link to="/articoli/sport-da-combattimento-per-giovani">
              <div className="article-card-detail">
                <h3 style={{fontSize: "1.4rem" , marginTop : "10px"}}>Sport da Combattimento per i Giovani</h3>
                <p style={{fontSize: "1.1rem"}}>
                  Scopri l'importanza degli sport da combattimento per lo sviluppo
                  psicofisico dei giovani: disciplina, autostima e valori.
                </p>
              </div>
            </Link>
            <Link to="/articoli/riflessi-condizionati">
              <div className="article-card-detail">
                <h3 style={{fontSize: "1.4rem" , marginTop : "10px"}}>Riflessi Condizionati negli Sport da Combattimento</h3>
                <p style={{fontSize: "1.1rem"}}>
                  Scopri come allenare i riflessi condizionati per migliorare velocità
                  di reazione e automatismi nel combattimento.
                </p>
              </div>
            </Link>
            <Link to="/articoli/esami-di-grado">
              <div className="article-card-detail">
                <h3 style={{fontSize: "1.4rem" , marginTop : "10px"}}>Esami di grado 13 dicembre 2025</h3>
                <p style={{fontSize: "1.1rem"}}>
                  Scopri come si sono svolti gli esami di grado per Japanese Kickboxing
                  e Muay Thai con circa 30 atleti impegnati in un allenamento intenso.
                </p>
              </div>
            </Link>
            <Link to="/articoli/japan-tour-2026">
              <div className="article-card-detail">
                <h3 style={{fontSize: "1.4rem" , marginTop : "10px"}}>Japan Tour 2026</h3>
                <p style={{fontSize: "1.1rem"}}>
                  Alla ricerca delle origini del Karate full-contact: un viaggio indimenticabile
                  tra i Dojo storici di Tokyo, i grandi campioni e il pellegrinaggio al Santuario Mitsumine.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
