import { useRef } from 'react';
import CombatCard from "../../Components/Card/CombatCard";
import "./AboutUs.css"
import Alessio from "../../assets/Alessio.jpg"
import Giacomo from "../../assets/Giacomo.png"
import Matteo from "../../assets/matteo.jpg"

const AboutUs = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="Container">
                <div className="testoPrincipale">
                    Legionis Decima Torrino è molto più di una palestra: è un luogo dove corpo, mente e spirito si forgiano ogni giorno. Situata nei pressi del Torrino Sporting Center, nel cuore di Roma Sud, la scuola si dedica all'insegnamento del pugilato, della kickboxing/K-1 e della muay thai con passione, rigore e attenzione verso ogni studente.
                    Ogni lezione è strutturata per migliorare tecnica, resistenza e strategia, ma senza dimenticare il rispetto reciproco e la disciplina, pilastri fondamentali nella nostra pratica. Legionis Decima Torrino accoglie principianti e atleti esperti, offrendo un ambiente inclusivo che spinge ciascuno a superare i propri limiti, migliorarsi, e crescere anche dentro e fuori dal ring.
                </div>
                
                <div className="slider-section">
                    <h2 className="slider-title">I Nostri Istruttori</h2>
                    
                    <div className="slider-container">
                        <button className="slider-arrow slider-arrow-left" onClick={scrollLeft}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        
                        <div className="cards-slider" ref={sliderRef}>
                            <div className="slider-track">
                                <CombatCard 
                                    image={Alessio} 
                                    title="Alessio Marabucci" 
                                    text="Alessio Marabucci è un insegnante di Muay Thai con oltre trent'anni di esperienza, una figura di riferimento per chi vuole apprendere davvero quest'arte. Ha vissuto e respirato ogni aspetto della disciplina: dalla tecnica dei colpi agli allenamenti duri, dal rispetto per la tradizione al continuo affinamento personale." 
                                />
                                <CombatCard 
                                    image={Giacomo}
                                    title="Giacomo Ratti"
                                    text="Giacomo Ratti è un maestro della Kickboxing e dello stile K-1 con vent'anni di esperienza nel mondo delle arti marziali. Con lui impari non solo a dare pugni e calci, ma a capire quando attaccare, quando difendere, come muoversi con fluidità e controllo."
                                />
                                <CombatCard
                                    image={Matteo}
                                    title="Matteo Chiavolini"
                                    text="Matteo Chiavolini è un istruttore le cui doti mescolano tecnica, passione e dedizione, sempre con l'obiettivo di far emergere il meglio in ogni allievo."
                                />
                                {/* Puoi aggiungere altre card qui se necessario */}
                            </div>
                        </div>
                        
                        <button className="slider-arrow slider-arrow-right" onClick={scrollRight}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;