import { Link } from "react-router-dom";
import "./Detail.css";
import MainImage from "../../assets/ThaiImageMain.jpeg"
const Detail = () => {
  return (
    <div className="DetailContainer">
      <div className="Viaggi section-card">
        <img className="immagineThai" src={MainImage} alt="Viaggio studio Thailandia" />
        <h2 className="TITOLOTHAI">Viaggio Studio in Thailandia</h2>
        <p className="thaiDescription">
          Un’esperienza unica per scoprire le radici della Muay Thai, con allenamenti intensi,
          cerimonie tradizionali e momenti indimenticabili vissuti al Kombat Group di Pattaya.
        </p>
        <Link to="/viaggio-thailandia" className="red-button">
         <p className="LinkToThailand">Leggi il racconto completo</p> 
        </Link>
      </div>

      <div className="Riflessioni">
        <div className="AtleticTraining section-card">
          <h2>Allenamento Atletico</h2>
          <p>Preparazione fisica, potenza e resistenza.</p>
        </div>
        <div className="Boxe section-card">
          <h2>Boxe</h2>
          <p>Tecnica, velocità e strategia pugilistica.</p>
        </div>
        <div className="KickMuay section-card">
          <h2>Kick / Muay Thai</h2>
          <p>Disciplina, tecnica e spirito da combattente.</p>
        </div>
      </div>

      <div className="Allenamenti">
        <p className="introAllenamenti">INTRO ALLENAMENTI</p>
        <video className="trainingVideo" src="/videos/training.mp4" controls aria-label="Video allenamento Legionis"></video>
      </div>
    </div>
  );
};

export default Detail;
