// Pages/Home/Home.tsx
import HeroText from "../../Components/Hero&Text/Hero&Text";
import "./Home.css"
import BoxeImage from "../../assets/pugilato.jpeg"
import Thai from "../../assets/thai.jpg"
import Kick from "../../assets/kick.jpeg"
import Main from "./../../assets/ChatGPT Image 13 ott 2025, 14_46_50.png"
import tsc from "../../assets/tsc-logo_ok2.png"
import Kyoukushin from "../../assets/Kyokushin.jpeg"

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
            <div className="regolamento-section">
                <h2 className="regolamento-title">Regolamento Sala Combat</h2>
                <ul className="regolamento-list">
                    <li>È <strong>OBBLIGATORIO</strong> l&apos;uso di scarpe da ginnastica pulite, da indossare direttamente in sala</li>
                    <li>È <strong>OBBLIGATORIO</strong> l&apos;uso di un asciugamano personale durante le lezioni</li>
                    <li>È <strong>OBBLIGATORIO</strong> lasciare negli appositi armadietti degli spogliatoi del circolo (con lucchetto personale) tutti i capi di abbigliamento (giacche e giacconi, pantaloni ecc)</li>
                    <li>È <strong>OBBLIGATORIO</strong> accedere in sala solo con attrezzature tecniche (guantoni, caschetto, paratibie ed altre protezioni personali)</li>
                    <li>È <strong>OBBLIGATORIO</strong> procurarsi un certificato medico agonistico per iscriversi ai corsi Combat, con ECG sotto sforzo</li>
                    <li>È <strong>DOVEROSO</strong>, in caso di problematiche fisiche pregresse, avvisare gli istruttori di turno a lezione</li>
                    <li>È <strong>OBBLIGATORIO</strong> essere in regola con l&apos;abbonamento sottoscritto, previa l&apos;interdizione ad accedere ai locali del circolo sportivo</li>
                    <li>È <strong>DOVEROSO</strong> arrivare a lezione 5 minuti prima dell&apos;inizio della lezione stessa. Sarà tollerato un ritardo massimo di 10 minuti rispetto all&apos;orario previsto di inizio; in caso di ritardo ulteriore non si potrà partecipare alla lezione e si dovrà venire a quella successiva</li>
                    <li>È <strong>DOVEROSO</strong> mantenere un comportamento corretto sia in sala Combat che in tutti i locali del circolo sportivo. Non saranno tollerati atteggiamenti maleducati e irrispettosi</li>
                </ul>
            </div>
            <div className="TorrinoSportingCenterInfo ">
                <h2 className="tscTitle">In collabborazione con Torrino Sporting Center</h2>
                <a href="https://www.torrinosportingcenter.it/"><img className="logoTsc" src={tsc} alt="" /></a>
                
            </div>
            <div className="Section2Boxe marging">
                <HeroText
                    image={BoxeImage}
                    title="Pugilato"
                    text="Il pugilato è una disciplina completa che unisce tecnica, preparazione atletica, velocità, coordinazione e strategia. Attraverso un percorso progressivo, gli atleti imparano i fondamentali della boxe, il movimento, la gestione della distanza, la difesa e le tecniche di attacco, sviluppando al tempo stesso forza, resistenza e disciplina mentale. Un allenamento dinamico e coinvolgente, adatto sia a chi vuole avvicinarsi per la prima volta al pugilato sia a chi desidera migliorare la propria preparazione e praticare attività agonistica."
                />
            </div>
            <div className="Section3 marging">
                <HeroText
                    image={Thai}
                    title="Muay Thai"
                    text="La Muay Thai è l'Arte marziale thailandese e sport nazionale. Prevede l'uso di pugni, gomiti, ginocchia, calci e lotta in piedi/proiezioni (thai grappling), che si fondono armoniosamente in un perfetto connubio di modernità e tradizione. Non è solo combattimento, ma è una via di autodisciplina, equilibrio e forza interiore, dove ogni tecnica racchiude la ricerca costante del miglioramento continuo."
                    reverse={true}
                />
            </div>
            <div className="Section4 marging">
                <HeroText
                    image={Kick}
                    title="Kick Boxing - K1"
                    text="La Japanese kickboxing/K1 è una sintesi di potenza, ritmo e precisione. Unisce la tecnica dei calci, delle ginocchiate e dei pugni in uno stile esplosivo, dove velocità e strategia contano quanto la forza. Ogni round è una danza controllata tra attacco e difesa, simbolo di determinazione e spirito competitivo."
                    reverse={false}
                />
            </div>
            <div className="Section5 marging">
                <HeroText
                    image={Kyoukushin}
                    title="Kyokushin Budokai"
                    text="Il Kyokushin Budokai è un'arte marziale che combina colpi (pugni, calci, ginocchiate ecc) a proiezioni e tecniche di lotta a terra, rendendolo simile ad un sistema di Arti Marziali Miste (MMA), molto efficace anche per la difesa personale. L'allenamento enfatizza il condizionamento e la resistenza ed ogni lezione diventa un viaggio verso la perfezione tecnica e la crescita personale, dove il rispetto dell'avversario e l'autocontrollo sono fondamentali."
                    reverse={true}
                />
            </div>
            

        </div>
    );
};

export default Home;