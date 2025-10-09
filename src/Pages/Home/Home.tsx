// Pages/Home/Home.tsx
import HeroText from "../../Components/Hero&Text/Hero&Text";
import "./Home.css"
import BoxeImage from "../../assets/pugilato.jpeg"
import Thai from "../../assets/thai.jpg"
import Kick from "../../assets/kick.jpeg"

const Home: React.FC = () => {
    return (
        <div className="Wrapper-Home">
            <div className="Section1">
                <div className="fotoPrincipale">
                    <div className="containerTitle">
                        <h1 className="Title">LEGIONIS DECIMA TORRINO</h1>              
                    </div>
                </div>
            </div>
        
            <div className="Section2Boxe">
                <HeroText 
                    image={BoxeImage}
                    title="Pugilato"
                    text="Il pugilato è molto più di uno sport: è una disciplina di forza, controllo e rispetto. Nella sua essenza, rappresenta il confronto diretto tra due persone, ma anche la lotta interiore contro i propri limiti. Ogni colpo, ogni schivata, ogni respiro racconta la ricerca dell’equilibrio tra potenza e lucidità.
                    Dietro ai guantoni e ai colpi, c’è una profonda etica fatta di sacrificio, disciplina e autocontrollo."
                />
            </div>
            <div className="Section3">
                <HeroText 
                    image={Thai}
                    title="Muay Thai"
                    text="La Muay Thai è l’arte dei quattro arti: pugni, gomiti, ginocchia e calci si fondono in un linguaggio di potenza e rispetto. Non è solo combattimento, ma una via di autodisciplina, equilibrio e forza interiore, dove ogni colpo racconta la storia di chi non smette mai di migliorarsi."
                    reverse={true}
                />
            </div>
            <div className="Section4">
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