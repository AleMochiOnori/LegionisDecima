import Mary from "../../assets/Mary.jpg"
import Leandro from "../../assets/leandro.jpg"
import GiacomoPrivateLesson from "../../assets/Giacomo2.jpg"
import "./PrivateLesson.css"

const PrivateLesson = () => {
  return (
    <>
      <div className="mainWrapper">
        <div className="private-lesson-swipe-container">
          <div className="private-lesson-swipe-element">
            <div className="private-lesson-swipe-content">
              <div className="private-lesson-swipe-icon">🥊</div>
              <div className="private-lesson-swipe-text">
                <h3>Istruttori Specializzati</h3>
                <p>Scopri le lezioni private con i nostri esperti di arti marziali</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-container">
          <div className="private-lesson-container">
            <div className="private-lesson-card">
              <div className="private-lesson-content">
                <h1 className="private-lesson-title">Giacomo Ratti</h1>
                <p className="private-lesson-text private-lesson-intro">
                  Ciao sono Giacomo maestro di MuayThai, kickboxing e boxe. Ti guiderò passo dopo passo nel tuo percorso di apprendimento.
                </p>
                
                <div className="private-lesson-badges">
                  <span className="private-lesson-badge">Muay Thai</span>
                  <span className="private-lesson-badge">Kick Boxing</span>
                  <span className="private-lesson-badge">Boxe</span>
                </div>
                
                <p className="private-lesson-text private-lesson-contact">
                  📞 Telefono: <strong>+39 380 425 1705</strong>
                </p>
              </div>
              
              <div className="private-lesson-image">
                <img 
                  className="private-lesson-img" 
                  src={ GiacomoPrivateLesson} 
                  alt="Giacomo Ratti - Istruttore di Muay Thai, Kick Boxing e Boxe" 
                  id="imageGiacomo"
                />
              </div>
            </div>
          </div>
          <div className="private-lesson-container">
            <div className="private-lesson-card">
              <div className="private-lesson-content">
                <h1 className="private-lesson-title">Maria Chiara Capizzi</h1>
                <p className="private-lesson-text private-lesson-intro">
                  Ciao sono Maria Chiara Capizzi e ti guiderò nell'apprendimento della boxe 
                </p>
                
                <div className="private-lesson-badges">
                  <span className="private-lesson-badge">Boxe</span>
                </div>
                
                <p className="private-lesson-text private-lesson-contact">
                  📞 Telefono: <strong>+39 345 889 7770</strong>
                </p>
              </div>
              
              <div className="private-lesson-image">
                <img 
                  className="private-lesson-img" 
                  src={Mary} 
                  alt="Maria Chiara Capizzi - Istruttrice di Boxe" 
                />
              </div>
            </div>
          </div>
          <div className="private-lesson-container">
            <div className="private-lesson-card">
              <div className="private-lesson-content">
                <h1 className="private-lesson-title">Leandro Cosentino</h1>
                <p className="private-lesson-text private-lesson-intro">
                  Leandro Cosentino è un insegnante di Muay Thai preparato e appassionato, che offre lezioni private su misura per ogni livello. Con grande attenzione alla tecnica e alla crescita personale, aiuta i suoi allievi a migliorare forza, coordinazione e mentalità da combattente.
                </p>
                
                <div className="private-lesson-badges">
                  <span className="private-lesson-badge">Muay Thai</span>
                  <span className="private-lesson-badge">Kick Boxing</span>
                  <span className="private-lesson-badge">Boxe</span>
                </div>
                
                <p className="private-lesson-text private-lesson-contact">
                  📞 Telefono: <strong>+39 334 732 7952</strong>
                </p>
              </div>
              
              <div className="private-lesson-image">
                <img 
                  className="private-lesson-img2 LeandroIamgeFix" 
                  src={Leandro} 
                  alt="Giacomo Ratti - Istruttore di Muay Thai, Kick Boxing e Boxe" 
                  id="imageLeandro"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivateLesson