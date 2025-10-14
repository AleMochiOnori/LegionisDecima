import { useRef } from 'react';
import CombatCard from "../../Components/Card/CombatCard";
import "./AboutUs.css"
import Alessio from "../../assets/Alessio.jpg"
import Giacomo from "../../assets/Giacomo.png"
import Matteo from "../../assets/matteo.jpg"
import Giuseppe from "../../assets/Giuseppe.png"
import Leandro from "../../assets/leandro.jpg"
import Caterina from "../../assets/Caterina.png"

const AboutUs = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -600, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 600, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="ContainerAbout">
              
                
                <div className="slider-section">
                    <h2 style={{marginBottom : "5rem"}} className="slider-title">I Nostri Istruttori</h2>
                    
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
                                    subtitle='MuayThai/Kickboxing'
                                    text="Alessio Marabucci è un maestro di Muay Thai con oltre trent'anni di esperienza, una figura di riferimento per chi vuole apprendere davvero quest'arte. Ha vissuto e respirato ogni aspetto della disciplina." 
                                />
                                <CombatCard 
                                    image={Giacomo}
                                    title="Giacomo Ratti"
                                    subtitle='Kickboxing/Muaythai'
                                    text="Giacomo Ratti è un maestro della Kickboxing e dello stile K-1 con vent'anni di esperienza nel mondo delle arti marziali. Con lui impari non solo a dare pugni e calci, ma a capire quando attaccare, quando difendere, come muoversi con fluidità e controllo."
                                />
                                <CombatCard
                                    image={Matteo}
                                    title="Matteo Chiavolini"
                                    subtitle='Boxe'
                                    text="Matteo Chiavolini è un istruttore le cui doti mescolano tecnica, passione e dedizione, sempre con l'obiettivo di far emergere il meglio in ogni allievo."
                                />
                                <CombatCard
                                    image={Giuseppe}
                                    title="Giuseppe Pannella"
                                    subtitle='Functional Training'
                                    text="Giuseppe è un allenatore di preparazione funzionale specializzato per gli sport da combattimento. Ha una profonda conoscenza del corpo umano: sa come potenziare forza, resistenza, velocità, mobilità in modo che ogni atleta possa muoversi al meglio sul ring. "
                                />
                                <CombatCard
                                    image={Leandro}
                                    title="Leandro Cosentino"
                                    subtitle='MuayThai Corso base'
                                    text="Leandro Cosentino è un insegnante specializzato nelle basi della Muay Thai, conosciuto per la chiarezza pedagogica e per il modo in cui rende accessibile anche ai principianti una disciplina complessa. "
                                />
                                 <CombatCard
                                    image={Caterina}
                                    title="Caterina Lanza"
                                    subtitle='Gym Boxe Femminile'
                                    text="Caterina Lanza è allenatrice di boxe dedicata al femminile, con la capacità di comprendere non solo la tecnica, ma anche le esigenze specifiche di chi si approccia alla boxe in un contesto tutto al femminile."
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