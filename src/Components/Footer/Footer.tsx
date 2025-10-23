import "./Footer.css";
import logo from "../../assets/Logo_Combat.jpg"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Torrino Muay Thai" />
          <h2 className="textSize">Legionis Decima Torrino</h2>
          <p className="textSize">Passione, Disciplina, Rispetto</p>
        </div>
        <div className="footer-section">
          <h3 className="textSize">Contatti</h3>
          <p className="textSize">📞 Torrino Sporting Center: 065295884</p>
          <p className="textSize">📞 Maestro Alessio Marabucci: +39 328 925 3150</p>
          <p className="textSize">📞 Istruttore Matteo Chiavolini: 234234253452</p>
        </div>
        <div className="footer-section">
          <h3 className="textSize">Link Utili</h3>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/courses"}>Corsi</Link></li>
            <li><Link to={"/aboutUs"}>Staff</Link></li>
            <li><Link to={"/contacts"}>Contatti</Link></li>
            <li><Link to={"/privateLesson"}>Lezione Privata</Link></li>
            <li><Link to={"/rating"}>Recensioni</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="textSize">Seguici</h3>
          <div className="social-icons">
            <a  href="https://www.instagram.com/legionis_decima_torrino/" target="_blank" className="instagram textSize">Instagram</a>
            <a href="#" target="_blank" className="facebook textSize">Facebook</a>
            <a href="#" target="_blank" className="youtube textSize">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Legionis Decima Torrino| Tutti i diritti riservati</p>
      </div>
    </footer>
  );
};

export default Footer;
