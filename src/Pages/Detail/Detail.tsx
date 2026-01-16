import { Link } from "react-router-dom";
import "./Detail.css";
import MainImage from "../../assets/ThaiImageMain.jpeg";
import atleticTrainingImg from "../../assets/SVG/weightlifting-svgrepo-com.png";
import boxeImg from "../../assets/SVG/boxing-fight-punch-boxer-svgrepo-com.png";
import kickMuayImg from "../../assets/SVG/kickboxing-svgrepo-com.png";
const Detail = () => {
  return (
    <>
      <img
        className="immagineThai"
        src={MainImage}
        alt="Viaggio studio Thailandia"
      />
      <div className="DetailContainer">
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
        <h2 className="SelezionaDisciplina">Seleziona una disciplina per approfondire</h2>
        <div className="Riflessioni">
          <Link to="/atleticTraining">
            <div className="AtleticTraining section-card">
              <h2>Allenamento Atletico</h2>
              <img className="svg" src={atleticTrainingImg} alt="" />
              <p>Preparazione fisica, potenza e resistenza.</p>
            </div>
          </Link>
          <Link to="/boxe">
            <div className="Boxe section-card">
              <h2>Boxe / Gym Boxe</h2>
              <img className="svg" src={boxeImg} alt="" />
              <p>Tecnica, velocità e strategia pugilistica.</p>
            </div>
          </Link>
          <Link to={"/kick-muay-thai"}>
            <div className="KickMuay section-card">
              <h2>Kick / Muay Thai</h2>
              <img className="svg" src={kickMuayImg} alt="" />
              <p>Disciplina, tecnica e spirito da combattente.</p>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
