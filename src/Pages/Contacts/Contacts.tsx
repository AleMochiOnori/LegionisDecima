import { useState } from "react";
import EmailForm from "../../Components/EmailForm/EmailForm";
import "./Contacts.css";
import Instagram from "../../assets/instagram-svgrepo-com.svg";
import Youtube from "../../assets/youtube-svgrepo-com.png";
import Facebook from "../../assets/facebook-svgrepo-com.png";
import MapSection from "../../Components/MapSection/MapSection";

const Contacts = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Serve prenotare per una lezione di prova?",
      answer: "Sì, puoi prenotare chiamando il Torrino Sporting Center."
    },
    {
      question: "Accettate principianti?",
      answer: "Assolutamente sì! Abbiamo corsi base per tutte le età e livelli."
    },
    {
      question: "Quali sono gli orari delle lezioni?",
      answer: "Le lezioni si svolgono dal lunedì al sabato, dalle 9:00 alle 21:00, per ulteriori dettaggli visualizzare la sezione 'Orari corsi' "
    },
    {
      question: "Offrite corsi per bambini?",
      answer: "Sì, abbiamo corsi specifici per bambini a partire dai 6 anni."
    }
  ];

  const socialLinks = [
    { icon: Instagram, alt: "Instagram", url: "#" },
    { icon: Youtube, alt: "YouTube", url: "#" },
    { icon: Facebook, alt: "Facebook", url: "#" }
  ];

  const teachers = [
    { name: "Maestro Alessio Marabucci", phone: "+39 333 564 7574" },
    { name: "Maestro Giacomo Ratti", phone: "+39 324 234 234" },
    { name: "Maestro Matteo Chiavolini", phone: "+39 343 564 6465" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="contacts-page">
      <MapSection />

      {/* Main Content */}
      <div className="contacts-container">
        {/* Form e Info Section */}
        <div className="content-grid">
          {/* Form Section */}
          <section className="form-section">
            <div className="section-header">
              <h2>Scrivici</h2>
              <p>Compila il form e ti risponderemo entro 24 ore</p>
            </div>
            <div className="form-card">
              <EmailForm />
            </div>
          </section>

          {/* Info Section */}
          <section className="info-section">
            {/* FAQ Section */}
            <div className="faq-card">
              <div className="section-header">
                <h2>Domande Frequenti</h2>
                <p>Tutto quello che devi sapere</p>
              </div>
              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`faq-item ${openFaqIndex === index ? 'active' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="faq-question">
                      <span>{item.question}</span>
                      <div className="faq-icon">
                        {openFaqIndex === index ? '−' : '+'}
                      </div>
                    </div>
                    {openFaqIndex === index && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info-card">
              <div className="section-header">
                <h2>Contatti Diretti</h2>
                <p>Chiamaci per informazioni immediate</p>
              </div>
              <div className="teachers-list">
                {teachers.map((teacher, index) => (
                  <div key={index} className="teacher-card">
                    <div className="teacher-avatar">
                      {teacher.name.split(' ')[1].charAt(0)}
                    </div>
                    <div className="teacher-info">
                      <h4>{teacher.name}</h4>
                      <a href={`tel:${teacher.phone}`} className="phone-link">
                        {teacher.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Social Section */}
        <section className="social-section">
          <div className="social-content">
            <div className="section-header">
              <h2>Seguici sui Social</h2>
              <p>Resta aggiornato sulle nostre attività</p>
            </div>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="social-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-icon">
                    <img src={social.icon} alt={social.alt} />
                  </div>
                  <span className="social-name">{social.alt}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;