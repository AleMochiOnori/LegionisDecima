import "./GiuseppeArticle.css";
import palla from "../../../assets/pallaMedica.jpg"
const GiuseppeArticle = () => {
  return (
    <section className="allenamento-wrapper">
      <h1 className="title">
        L’importanza della preparazione atletica negli sport da combattimento
      </h1>
      <p className="byline">Di Giuseppe Panella</p>

      <p>
        Gli sport da combattimento, sebbene molto diversi tra loro e con
        specificità proprie, richiedono alcune qualità fondamentali che ogni
        combattente deve sviluppare. Per questo motivo la preparazione atletica
        diventa cruciale: permette di migliorare abilità fisiche come forza
        massimale, forza esplosiva, velocità, rapidità e potenza. Queste qualità
        devono essere mantenute e messe in pratica continuamente durante
        l’intero combattimento.
      </p>

      <p>
        Sebbene tecnica e strategia siano aspetti imprescindibili, spesso si
        tende a sottovalutare l’importanza di allenare la forza. La forza è la
        madre di tutte le qualità: aumentarla è fondamentale in ogni disciplina
        sportiva e gli sport da combattimento non fanno eccezione.
        Trascurarla è un errore grave. I benefici sono evidenti: riduzione del
        rischio di infortuni (muscoli più forti proteggono le articolazioni),
        minor affaticamento (la fatica arriva più tardi) e base solida per lo
        sviluppo di esplosività e velocità.
      </p>

      <img className="palla" src={palla} alt="" />

      <p>
        A seconda della disciplina la declinazione della forza varia. Un atleta
        di MMA avrà bisogno di sviluppare forza massima e forza–velocità in
        misura maggiore rispetto a un pugile o un fighter di Muay Thai, dove
        l’accento è più sulla velocità. Ma in ogni caso nessun combattente può
        permettersi di trascurare la forza.
      </p>

      <p>
        Parlando di forza esplosiva è centrale l’allenamento del core e della
        parte inferiore del corpo. Un pugno potente nasce dalla trasmissione
        della forza dal terreno attraverso la catena cinetica: gambe, anca, core
        e infine arto superiore. Core e glutei (estensione e rotazione
        dell’anca) sono quindi decisivi.
      </p>

      <h2 className="subtitle">Esercizi fondamentali per la forza</h2>
      <p>
        Esercizi come squat e stacchi, e complementari come good morning e hip
        thrust, sono essenziali per costruire forza e trasferirla poi in gesti
        esplosivi. Anche il lavoro con manubri e bilancieri è irrinunciabile:
        panca piana, military press, trazioni alla sbarra e varianti mirate
        completano lo sviluppo globale.
      </p>
      <p>
        Va compreso però che la forza massimale è per definizione un’azione
        lenta: un tentativo di squat o stacco al carico massimo produce un
        movimento inevitabilmente lento perché forza e velocità sono
        inversamente proporzionali.
      </p>

      <h2 className="subtitle">Dalla forza alla potenza (forza esplosiva)</h2>
      <p>
        Un fighter deve saper esprimere forza in tempi rapidi: questo è il
        concetto di potenza. Per svilupparla servono esercizi che combinano
        forza e velocità: salti, slanci, alzate esplosive (derivate dal
        weightlifting olimpico) e varianti dinamiche dei fondamentali.
      </p>
      <p>
        Agli esercizi di base (squat, stacchi) si aggiungono box squat, squat
        jump, push press, power clean, kettlebell swing, thrust(er) e movimenti
        pliometrici. Con intensità e volumi calibrati sull’atleta si ottiene un
        incremento rilevante della potenza.
      </p>

      <h2 className="subtitle">Velocità e metodi di sviluppo</h2>
      <p>
        Per aumentare l’esplosività è necessario lavorare sulla velocità di
        movimento. Due pilastri: pliometria (sfrutta il ciclo allungamento–
        accorciamento migliorando la forza reattiva) e sprint training. Lo sprint
        alla massima intensità è tra gli strumenti più efficaci per sviluppare
        velocità.
      </p>

      <h2 className="subtitle">Esempio di circuito (3 round)</h2>
      <p>
        Esempio eseguibile anche in spazio ridotto dopo adeguato riscaldamento.
        30–40 secondi di lavoro per esercizio, 10–15 secondi per transizione; 1
        minuto di recupero tra i round.
      </p>
      <div>
        <p>Stacco da terra con bilanciere</p>
        <p>Squat jump a corpo libero</p>
        <p>Girata con bilanciere (power clean)</p>
        <p>Kettlebell swing</p>
        <p>Piegamenti pliometrici</p>
        <p>Thruster con bilanciere o kettlebell</p>
        <p>Recupero 1 minuto e ripetere</p>
      </div>

      <h2 className="subtitle">Conclusione</h2>
      <p>
        Il corso di preparazione atletica della Scuola Combat del Torrino
        Sporting Center offre un programma strutturato e approfondito volto a
        sviluppare in modo completo tutte le capacità e qualità descritte. Una
        solida base di forza supporta esplosività, velocità e resistenza,
        riducendo al contempo il rischio di infortuni.
      </p>

      <p className="author">Giuseppe Panella</p>
    </section>
  );
};

export default GiuseppeArticle;