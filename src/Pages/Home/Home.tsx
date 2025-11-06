// Pages/Home/Home.tsx
import HeroText from "../../Components/Hero&Text/Hero&Text";
import "./Home.css"
import BoxeImage from "../../assets/pugilato.jpeg"
import Thai from "../../assets/thai.jpg"
import Kick from "../../assets/kick.jpeg"
import Main from "./../../assets/ChatGPT Image 13 ott 2025, 14_46_50.png"
import tsc from "../../assets/tsc-logo_ok2.png"

const Home: React.FC = () => {
    return (
        <div className="Wrapper-Home">
            <div className="Section1">
                <div className="fotoPrincipale">
                    <div className="containerTitle">
                        <img className="PrimaryImage" src={Main} alt="" />
                    </div>
                </div>
            </div>
            <div className="testoPrincipale">
                Legionis Decima Torrino è molto più di una palestra: è un luogo dove corpo, mente e spirito si forgiano ogni giorno. Situata nei pressi del Torrino Sporting Center, nel cuore di Roma Sud, la scuola si dedica all'insegnamento del pugilato, della kickboxing/K-1 e della muay thai con passione, rigore e attenzione verso ogni studente.
                Ogni lezione è strutturata per migliorare tecnica, resistenza e strategia, ma senza dimenticare il rispetto reciproco e la disciplina, pilastri fondamentali nella nostra pratica. Legionis Decima Torrino accoglie principianti e atleti esperti, offrendo un ambiente inclusivo che spinge ciascuno a superare i propri limiti, migliorarsi, e crescere anche dentro e fuori dal ring.
            </div>
            <div className="TorrinoSportingCenterInfo ">
                <h2 className="tscTitle">In collabborazione con Torrino Sporting Center</h2>
                <a href="https://www.torrinosportingcenter.it/"><img className="logoTsc" src={tsc} alt="" /></a>
                
            </div>
            <div style={{marginTop : "10rem"}} className="Section2Boxe marging">
                <HeroText 
                    image={BoxeImage}
                    title="Pugilato"
                    text="Il pugilato è molto più di uno sport: è una disciplina di forza, controllo e rispetto. Nella sua essenza, rappresenta il confronto diretto tra due persone, ma anche la lotta interiore contro i propri limiti. Ogni colpo, ogni schivata, ogni respiro racconta la ricerca dell’equilibrio tra potenza e lucidità.
                    Dietro ai guantoni e ai colpi, c’è una profonda etica fatta di sacrificio, disciplina e autocontrollo."
                />
            </div>
            <div className="Section3 marging">
                <HeroText 
                    image={Thai}
                    title="Muay Thai"
                    text="La Muay Thai è l’arte dei quattro arti: pugni, gomiti, ginocchia e calci si fondono in un linguaggio di potenza e rispetto. Non è solo combattimento, ma una via di autodisciplina, equilibrio e forza interiore, dove ogni colpo racconta la storia di chi non smette mai di migliorarsi."
                    reverse={true}
                />
            </div>
            <div className="Section4 marging">
                <HeroText 
                    image={Kick}
                    title="Kick Boxing - K1"
                    text="La kickboxing K1 è potenza, ritmo e precisione. Unisce la tecnica dei calci e dei pugni in uno stile esplosivo, dove velocità e strategia contano quanto la forza. Ogni round è una danza controllata tra attacco e difesa, simbolo di determinazione e spirito competitivo."
                    reverse={false}
                />
            </div>
            

        </div>
    );
};

export default Home;