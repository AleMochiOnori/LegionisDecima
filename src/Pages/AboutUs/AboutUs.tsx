import { useState, useRef } from 'react';
import CombatCard from "../../Components/Card/CombatCard";
import "./AboutUs.css"
import Alessio from "../../assets/Alessio.jpg"
import Giacomo from "../../assets/Giacomo.jpg"
import Matteo from "../../assets/matteo.jpg"
import Giuseppe from "../../assets/Giuseppe.png"
import Leandro from "../../assets/leandro.jpg"
import Caterina from "../../assets/Caterina.png"
import Francesco from "../../assets/Francesco.jpg"
import Mary from "../../assets/Mary.jpg"
import Mastrelli2 from "../../assets/Mastrelli2.jpg"
import Cerqua from "../../assets/Cerqua.jpg"

const AboutUs = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const sliderSectionRef = useRef<HTMLDivElement>(null);
    
    const instructors = [
        {
            image: Alessio,
            title: "Alessio Marabucci",
            subtitle: 'MuayThai/Kickboxing',
            text: "Alessio Marabucci è un maestro di Muay Thai con oltre trent'anni di esperienza, una figura di riferimento per chi vuole apprendere davvero quest'arte. Ha vissuto e respirato ogni aspetto della disciplina."
        },
        {
            image: Giacomo,
            title: "Giacomo Ratti",
            subtitle: 'Kickboxing/Muaythai',
            text: "Giacomo Ratti è un maestro della Kickboxing e dello stile K-1 con vent'anni di esperienza nel mondo delle arti marziali. Con lui impari non solo a dare pugni e calci, ma a capire quando attaccare, quando difendere, come muoversi con fluidità e controllo."
        },
        {
            image: Matteo,
            title: "Matteo Chiavolini",
            subtitle: 'Boxe',
            text: "Matteo Chiavolini è un maestro le cui doti mescolano tecnica, passione e dedizione, con un passato da agonista nella Kickboxing (Cintura Nera) e come tecnico di pugilato della FPI, sempre con l'obiettivo di far emergere il meglio in ogni allievo.",
            imageClassName: 'matteo-image'
        },
        {
            image: Giuseppe,
            title: "Giuseppe Pannella",
            subtitle: 'Functional Training',
            text: "Giuseppe è un allenatore di preparazione funzionale specializzato per gli sport da combattimento. Ha una profonda conoscenza del corpo umano: sa come potenziare forza, resistenza, velocità, mobilità in modo che ogni atleta possa muoversi al meglio sul ring.",
            imageClassName: 'giuseppe-image'
        },
        {
            image: Leandro,
            title: "Leandro Cosentino",
            subtitle: 'MuayThai Corso base',
            text: "Leandro Cosentino, laureato in Scienze Motorie e attualmente iscritto alla magistrale AMPA, è un insegnante di Muay Thai che insegna le basi della disciplina in modo coinvolgente e accattivante."
        },
        {
            image: Caterina,
            title: "Caterina Lanza",
            subtitle: 'Gym Boxe Femminile',
            text: "Caterina è un'allenatrice di Gym boxe che ha scelto di promuovere corsi esclusivamente al femminile, con l'obiettivo di offrire alle donne uno spazio in cui esprimere forza, determinazione e consapevolezza di sé."
        },
        {
            image: Francesco,
            title: "Francesco Loreti",
            subtitle: 'Aiuto Boxe',
            text: "Francesco è un istruttore specializzato nel pugilato. Insegna, come assistente al maestro Matteo Chiavolini, le basi indispensabili: la postura, il footwork, la guardia, il corretto uso del jab e del direct, oltre ai movimenti difensivi fondamentali."
        },
        {
            image: Cerqua,
            title: "Francesco Cerqua",
            subtitle: 'Avvio Combat',
            text: "Francesco Cerqua è un giovane e appassionato insegnante di boxe. Con un approccio dinamico e motivante, Francesco trasmette tecnica, disciplina e fiducia, creando un ambiente ideale per imparare divertendosi."
        },
        {
            image: Mastrelli2,
            title: "Alessandro Mastrelli",
            subtitle: 'Gym boxe',
            text: "Alessandro è un tecnico della boxe, grazie a lui imparerai le tecniche della nobile arte."
        },
        {
            image: Mary,
            title: "Maria Chiara Capizzi",
            subtitle: 'Gym boxe / Private Lesson',
            text: "Mary è una giovane istruttrice capace e appassionata, che trasmette con energia le basi del pugilato e della kickboxing. Nonostante la sua giovane età, unisce competenza e entusiasmo."
        }
    ];
    
    const cardsPerPage = 4;
    const totalPages = Math.ceil(instructors.length / cardsPerPage);
    
    const scrollLeft = () => {
        if (currentPage > 0) {
            setDirection('left');
            setCurrentPage(currentPage - 1);
        }
    };

    const scrollRight = () => {
        if (currentPage < totalPages - 1) {
            setDirection('right');
            setCurrentPage(currentPage + 1);
        }
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        setCurrentX(clientX);
        setIsDragging(false); // Reset per iniziare
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (startX === 0) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setCurrentX(clientX);
        
        // Se si è mosso abbastanza, consideralo come dragging
        if (Math.abs(clientX - startX) > 5) {
            setIsDragging(true);
        }
    };

    const handleDragEnd = () => {
        if (startX === 0) return;
        
        const diffX = startX - currentX;
        const threshold = 50; // Soglia minima per considerare uno swipe
        
        if (isDragging && Math.abs(diffX) > threshold) {
            if (diffX > 0 && currentPage < totalPages - 1) {
                // Swipe verso sinistra - mostra pagina successiva
                setDirection('right');
                setCurrentPage(currentPage + 1);
            } else if (diffX < 0 && currentPage > 0) {
                // Swipe verso destra - mostra pagina precedente
                setDirection('left');
                setCurrentPage(currentPage - 1);
            }
        }
        
        setIsDragging(false);
        setStartX(0);
        setCurrentX(0);
    };

    const scrollToTop = () => {
        sliderSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentInstructors = instructors.slice(startIndex, endIndex);

    return (
        <>
            <div className="ContainerAbout">
                <div className="slider-section" ref={sliderSectionRef}>
                    <h2 style={{marginBottom : "5rem"}} className="slider-title">I Nostri Istruttori</h2>
                    
                    <div className="slider-container">
                        <button className="slider-arrow slider-arrow-left" onClick={scrollLeft}>
                            <svg className='arrow' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        
                        <div 
                            className={`cards-grid slide-${direction}`} 
                            key={currentPage}
                            onMouseDown={handleDragStart}
                            onMouseMove={handleDragMove}
                            onMouseUp={handleDragEnd}
                            onMouseLeave={handleDragEnd}
                            onTouchStart={handleDragStart}
                            onTouchMove={handleDragMove}
                            onTouchEnd={handleDragEnd}
                            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                        >
                            {currentInstructors.map((instructor, index) => (
                                <CombatCard 
                                    key={startIndex + index} 
                                    image={instructor.image} 
                                    title={instructor.title} 
                                    subtitle={instructor.subtitle} 
                                    text={instructor.text} 
                                    imageClassName={instructor.imageClassName} 
                                />
                            ))}
                        </div>
                        
                        <button 
                            className="slider-arrow slider-arrow-right" 
                            onClick={scrollRight}
                            disabled={currentPage === totalPages - 1}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    
                    <div className="pagination-dots">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                className={`pagination-dot ${index === currentPage ? 'active' : ''}`}
                                onClick={() => {
                                    setDirection(index > currentPage ? 'right' : 'left');
                                    setCurrentPage(index);
                                    scrollToTop();
                                }}
                                aria-label={`Vai alla pagina ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
