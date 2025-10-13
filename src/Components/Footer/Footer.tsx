import "./Footer.css";
import logo from "../../assets/Logo_Combat.jpg"
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* LOGO */}
        <div className="footer-logo">
          <img src={logo} alt="Torrino Muay Thai" />
          <h2 className="textSize">Legionis Decima Torrino</h2>
          <p className="textSize">Passione, Disciplina, Rispetto</p>
        </div>

        {/* CONTATTI */}
        <div className="footer-section">
          <h3 className="textSize">Contatti</h3>

          <p className="textSize">📞 Torrino Sporting Center: 534345345345</p>
          <p className="textSize">📞 Maestro Alessio Marabucci: 2342342345</p>
          <p className="textSize">📞 Maestro Matteo Chiavolini: 234234253452</p>
        </div>

        {/* LINK UTILI */}
        <div className="footer-section">
          <h3 className="textSize">Link Utili</h3>
          <ul >
            <li><a className="textSize" href="#">Home</a></li>
            <li><a className="textSize" href="#">Corsi</a></li>
            <li><a className="textSize" href="#">Staff</a></li>
            <li><a className="textSize" href="#">Contatti</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-section">
          <h3 className="textSize">Seguici</h3>
          <div className="social-icons">
            <a  href="#" className="instagram textSize">Instagram</a>
            <a href="#" className="facebook textSize">Facebook</a>
            <a href="#" className="youtube textSize">YouTube</a>
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
