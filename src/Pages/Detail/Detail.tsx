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
            <Link to="/articoli/allenamento-funzionale-per-le-arti-marziali">
              <div className="article-card-detail">
                <h3 style={{fontSize: "1.2rem" , marginTop : "10px" , color :"#333131"}}>Allenamento Funzionale per le Arti Marziali</h3>
                <p style={{fontSize: "1.1rem"}}>
                  Scopri come migliorare le tue performance con esercizi
                  mirati e strategie di allenamento efficaci.
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
