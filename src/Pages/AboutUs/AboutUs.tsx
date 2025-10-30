import { useRef } from 'react';
import CombatCard from "../../Components/Card/CombatCard";
import "./AboutUs.css"
import Alessio from "../../assets/Alessio.jpg"
import Giacomo from "../../assets/Giacomo.png"
import Matteo from "../../assets/matteo.jpg"
import Giuseppe from "../../assets/Giuseppe.png"
import Leandro from "../../assets/leandro.jpg"
import Caterina from "../../assets/Caterina.png"
import Francesco from "../../assets/Francesco.jpg"
import Mary from "../../assets/Mary.jpg"

const AboutUs = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
   
    const scrollLeft = () => {
        const width = window.innerWidth
        if (sliderRef.current) {
            if ( width <= 1130) {
                sliderRef.current.scrollBy({ left: -850, behavior: 'smooth' });
            }
            else if (width > 1130) {
                sliderRef.current.scrollBy({ left: -1570, behavior: 'smooth' });
            }
           
            
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            const width = window.innerWidth
            if ( width <= 1130) {
                sliderRef.current.scrollBy({ left: 850, behavior: 'smooth' });
            }
            else if (width > 1130) {
                sliderRef.current.scrollBy({ left: 1570, behavior: 'smooth' });
               
            }
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
                                    text="Leandro Cosentino, laureato in Scienze Motorie e attualmente iscritto alla magistrale in AMPA (Attività Motorie Preventive e Adattate), è un insegnante di Muay Thai che unisce competenza tecnica e conoscenza scientifica del movimento, rendendo accessibile anche ai principianti una disciplina complessa e affascinante. "
                                />
                                <CombatCard
                                    image={Caterina}
                                    title="Caterina Lanza"
                                    subtitle='Gym Boxe Femminile'
                                    text="Caterina è un’allenatrice di Gym boxe che ha scelto di promuovere corsi esclusivamente al femminile, con l’obiettivo di offrire alle donne uno spazio in cui esprimere forza, determinazione e consapevolezza di sé. Con passione, dedizione e competenza tecnica, accompagna ogni atleta in un percorso di crescita personale e sportiva."
                                />
                                <CombatCard
                                    image={Francesco}
                                    title="Francesco Loreti"
                                    subtitle='Avvio Combat'
                                    text="Francesco è un istruttore specializzato nell’avvio al combat e al pugilato. Insegna le basi indispensabili: la postura, il footwork, la guardia, il corretto uso del jab e del direct, oltre ai movimenti difensivi fondamentali."
                                />
                                
                                
                                <CombatCard
                                    title="Alessandro Mastrelli"
                                    subtitle='Gym boxe'
                                    text="Alessandro è un tecnico della boxe , grazie a lui imparerai le tecniche della nobile arte."
                                />
                                 <CombatCard
                                    image={Mary}
                                    title="Maria Chiara Capizzi"
                                    subtitle='Gym boxe / Private Lesson'
                                    text="Mary è una giovane istruttrice capace e appassionata, che trasmette con energia le basi del pugilato e della kickboxing. Nonostante la sua giovane età, unisce competenza e entusiasmo."
                                />
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