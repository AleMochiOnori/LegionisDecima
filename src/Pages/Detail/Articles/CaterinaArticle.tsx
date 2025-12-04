import "./CaterinaArticle.css";
import image1 from "../../../assets/Articolo Gym boxe/image1.jpeg";
import image2 from "../../../assets/Articolo Gym boxe/image2.jpg";
import image3 from "../../../assets/Articolo Gym boxe/image3.png";

const CaterinaArticle = () => {
  return (
    <section className="caterina-wrapper">
      <h1 className="title">
        SFATIAMO IL MITO: LA BOXE NON È PER LE DONNE…
      </h1>
      <p className="byline">Di Caterina Lanza</p>

      <p className="intro">
        Ma chi lo ha detto? Evidentemente qualcuno con un retaggio culturale forse un po' troppo old style, 
        con lo stereotipo del pugilato come sport violento, dove al primo giorno di lezione ti spaccano il naso…
      </p>

      <p>
        Niente di più sbagliato, nessuno spacca nasi (a meno che non si decida di cimentarsi nella carriera agonistica, 
        allora in un incontro di boxe a contatto pieno può capitare l'incidente), nessuna donna con la Gym boxe "diventa" 
        un uomo coi capelli lunghi e con il bicipite da scaricatore di porto.
      </p>

      <p>
        Al contrario, la <strong>Gym Boxe</strong>, che di fatto si basa sul pugilato "tradizionale", ma è concepita con 
        un approccio più soft, in cui le competizioni non prevedono il KO, ma si premia la tecnica, la velocità e la 
        capacità di combinare colpi e schivate, è perfetta per <strong>TUTTE le donne</strong>, indipendentemente dall'età 
        o da eventuali aspirazioni agonistiche.
      </p>

      <h2 className="subtitle">La mia esperienza personale</h2>
      
      <img className="article-image" src={image1} alt="Allenamento Gym Boxe" />
      
      <p>
        Nel corso della mia esperienza, dapprima come atleta e poi come istruttrice, ho avuto modo di sperimentare su 
        me stessa l'efficacia della Gym Boxe: questa disciplina mi ha infuso sicurezza, mi ha permesso di scaricare lo 
        stress e la tensione quotidiana, mi ha permesso di guardarmi dentro e di spingermi a superare i miei limiti.
      </p>

      <p>
        Al giorno d'oggi, soprattutto per le nuove generazioni di adolescenti, ci si basa molto sull'immagine virtuale 
        di una vita riprodotta sui social media, per cui è anche molto più facile diventare bersaglio di critiche, 
        body shaming e altro. Uno sport completo come la Gym Boxe può dare quello stimolo a non farsi assoggettare a 
        simili comportamenti o a prepotenze.
      </p>

      <p>
        D'altro canto anche chi, come donna, deve gestire una casa, conciliare gli impegni domestici, prendersi cura dei 
        figli, lavorare, tralasciando magari se stesse… col risultato che molte donne sperimentano, ovvero perdere la 
        forma fisica, sentirsi sempre stanche e stressate ecc.
      </p>

      <p>
        Anche in questi casi la Gym Boxe può offrire davvero uno stimolo in più, con un impegno settimanale in termini 
        di allenamento davvero contenuto. <strong>Bastano due lezioni a settimana</strong>, della durata di un'ora di 
        allenamento continuativo e costante, per vedere grandi risultati già nel giro di poco tempo. Poi chiaramente chi 
        volesse rivolgersi all'agonismo dovrebbe allenarsi di più, ma fondamentalmente per chi fosse interessata ad una 
        pratica amatoriale l'allenamento così come l'ho strutturato al Torrino Sporting Center è perfetto per questi scopi.
      </p>

      <h2 className="subtitle">Più di un semplice allenamento</h2>
      
      <img className="article-image" src={image2} alt="Allenamento donne boxe" />
      
      <p>
        La Gym Boxe infatti è molto più di un semplice allenamento: per noi donne può diventare una vera fonte di forza, 
        sicurezza e autostima. Questo sport ci permette di scoprire capacità che spesso non sappiamo nemmeno di avere. 
        Con un lavoro costante, il corpo diventa più forte, più tonico e più reattivo, ma il cambiamento più grande 
        avviene dentro.
      </p>

      <p>
        L'allenamento aiuta a scaricare lo stress, a liberarci dalle tensioni accumulate durante la giornata e a trovare 
        un equilibrio mentale che ci accompagna anche fuori dalla palestra. Allo stesso tempo la boxe ci insegna 
        <strong> consapevolezza, controllo e prontezza</strong>, qualità preziose anche in ottica di difesa personale, 
        soprattutto in un momento sociale così delicato, in cui sentirsi sicure è un requisito fondamentale.
      </p>

      <p>
        Le lezioni che propongo non sono finalizzate per forza al combattimento, ma diventano uno spazio in cui ci si 
        sostiene a vicenda, ci si motiva a migliorare e si scopre quanto possa essere bello allenarsi divertendosi. 
        Ed è proprio questo il valore più grande della Gym Boxe: trasformare il nostro corpo, sì, ma soprattutto farci 
        sentire più fiduciose, determinate e capaci di affrontare la vita con una marcia in più.
      </p>

      <h2 className="subtitle">Struttura di una lezione tipo</h2>
      
      <img className="article-image" src={image3} alt="Lezione Gym Boxe" />
      
      <p>
        Per capire davvero cosa significa una lezione di Gym Boxe, basta dare uno sguardo alla struttura di un allenamento 
        tipo. Ogni sessione è pensata per essere completa, stimolante e accessibile a tutte, indipendentemente dal livello 
        di partenza.
      </p>

      <div className="card">
        <h3>🔸 Riscaldamento dinamico</h3>
        <p>
          La lezione inizia con un riscaldamento attivo volto a risvegliare il corpo e prepararlo al lavoro successivo: 
          mobilità articolare, attivazione del core, skip, jumping jacks e movimenti specifici per spalle, anche e dorso. 
          Questa fase è fondamentale per prevenire infortuni e portare la mente dentro l'allenamento, lasciando fuori lo 
          stress e la stanchezza della giornata.
        </p>
      </div>

      <div className="card">
        <h3>🔸 Lavoro di footwork</h3>
        <p>
          Lavoro sui movimenti di gambe che costituisce la base della boxe. Ci si allena a spostarsi in avanti, indietro 
          e lateralmente, mantenendo equilibrio e controllo. Il footwork migliora coordinazione, agilità e reattività.
        </p>
      </div>

      <div className="card">
        <h3>🔸 Circuiti funzionali</h3>
        <p>
          Poi arriva una delle parti più stimolanti: i circuiti funzionali. Qui si alternano esercizi per gambe, glutei, 
          core, resistenza e potenza, sempre con un occhio alla tecnica. Squat, affondi, plank, balzi… tutto pensato per 
          rendere il corpo più forte e reattivo. Non si tratta soltanto di "fare fatica": ogni movimento ha un obiettivo 
          preciso che poi ritroviamo nelle tecniche della boxe, rendendo il percorso completo e armonioso.
        </p>
      </div>

      <div className="card">
        <h3>🔸 Lavoro al sacco</h3>
        <p>
          Qui si scaricano tensioni e pensieri negativi, trasformandoli in colpi precisi e controllati. Jab, diretto, 
          ganci e montanti: colpire il sacco permette di migliorare la tecnica, la potenza e il ritmo cardiaco. È una 
          fase liberatoria, che fa sentire forti e presenti.
        </p>
      </div>

      <div className="card">
        <h3>🔸 Colpitori a coppia</h3>
        <p>
          Infine, c'è uno dei momenti più coinvolgenti: il lavoro con i colpitori in coppia. Si impara a coordinarsi con 
          un'altra persona, a leggere il suo ritmo, a rispettare tempo e distanza, il tutto in un clima di collaborazione 
          e divertimento. Questo tipo di esercizio sviluppa prontezza mentale, concentrazione e fiducia, e allo stesso tempo 
          rafforza lo spirito di gruppo che rende ogni lezione speciale.
        </p>
      </div>

      <h2 className="subtitle">In conclusione</h2>
      <p>
        La Gym Boxe è, in fondo, un percorso che cambia dentro e fuori. Un allenamento completo che migliora la forma fisica 
        ma, soprattutto, aiuta a riscoprire il proprio valore, la propria determinazione e quella forza interiore capace di 
        fare la differenza nella vita di ogni giorno.
      </p>

      <p>
        È un modo per volersi bene, per ritrovare energia e sicurezza, per sentirsi più presenti, più forti e più libere.
      </p>

      <p className="author">Caterina Lanza</p>
    </section>
  );
};

export default CaterinaArticle;
