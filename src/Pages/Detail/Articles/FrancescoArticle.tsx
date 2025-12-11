import "./FrancescoArticle.css";
import image1 from "../../../assets/Articolo Francesco/image1.jpg";
import image2 from "../../../assets/Articolo Francesco/image2.png";
import image3 from "../../../assets/Articolo Francesco/image3.jpeg";

const FrancescoArticle = () => {
  return (
    <section className="francesco-wrapper">
      <h1 className="title">
        L'IMPORTANZA DEGLI SPORT DA COMBATTIMENTO PER I GIOVANISSIMI
      </h1>
      <p className="byline">Di Francesco Cerqua</p>

      <p className="intro">
        Ciao a tutti, mi chiamo Francesco, sono uno psicologo dello sviluppo e collaboro con Legionis X TSC per allenare 
        bambini e adolescenti e accompagnarli nel loro percorso di crescita personale attraverso lo sport.
      </p>

      <p>
        Nel mio lavoro quotidiano osservo come le discipline da combattimento possano offrire ai ragazzi non solo un'attività 
        fisica completa, ma soprattutto un ambiente educativo capace di favorire autostima, equilibrio emotivo, senso di 
        responsabilità e rispetto verso sé stessi e gli altri.
      </p>

      <p>
        Gli sport da combattimento rappresentano oggi una delle opportunità più complete per accompagnare gli adolescenti in 
        un percorso di crescita personale, psicologica e fisica. Per molti ragazzi questa pratica diventa un riferimento 
        stabile, un luogo in cui trovare disciplina, autostima, equilibrio e la possibilità concreta di esprimere il proprio 
        potenziale.
      </p>

      <p>
        Spesso si pensa alle arti marziali o agli sport di contatto come attività riservate a persone già sicure di sé, ma 
        accade esattamente il contrario: sono sport formativi, capaci di offrire ai giovani strumenti utili per affrontare 
        la vita quotidiana con maggiore consapevolezza e fiducia.
      </p>

      <h2 className="subtitle">L'adolescenza e la costruzione dell'identità</h2>
      
      <img className="article-image" src={image1} alt="Allenamento giovani sport da combattimento" />
      
      <p>
        L'adolescenza è un periodo ricco di trasformazioni, in cui il corpo cambia e le relazioni diventano più complesse; 
        è anche un momento in cui molti ragazzi vivono incertezza o confusione. Gli sport da combattimento forniscono 
        strutture e routine che aiutano a costruire un'identità più solida.
      </p>

      <p>
        Ogni piccolo progresso, come apprendere una nuova tecnica o riuscire a gestire la fatica, alimenta un senso reale 
        di autostima. Non è una questione di vincere o dimostrare qualcosa agli altri, ma di imparare a superare sé stessi 
        e riconoscere il proprio valore. Ne deriva una maggiore fiducia nelle proprie capacità, un'immagine corporea più 
        positiva e un atteggiamento più responsabile verso il proprio comportamento.
      </p>

      <h2 className="subtitle">Sviluppo dell'autocontrollo</h2>
      
      <p>
        Uno degli aspetti più significativi delle discipline da combattimento è lo sviluppo dell'autocontrollo. La forza e 
        la reattività vengono integrate con precisione, calma e rispetto delle regole, portando i ragazzi a gestire meglio 
        emozioni come impulsività, ansia o frustrazione: imparano a trasformare l'energia in concentrazione e a dare ordine 
        al caos interiore tipico della loro età.
      </p>

      <h2 className="subtitle">Il valore sociale della palestra</h2>
      
      <img className="article-image" src={image2} alt="Gruppo allenamento giovani" />
      
      <p>
        Anche dal punto di vista sociale, la palestra diventa un ambiente ricco di valore educativo: il rispetto reciproco, 
        la collaborazione e il senso di appartenenza sono parte essenziale dell'allenamento. I compagni non sono avversari 
        da "battere", ma persone grazie alle quali si cresce; far parte di un gruppo significa condividere obiettivi, 
        sostenersi e contribuire al benessere di tutti.
      </p>

      <p>
        Per molti adolescenti, questo diventa uno spazio sicuro e accogliente, dove esprimere sé stessi in modo autentico.
      </p>

      <h2 className="subtitle">Benefici fisici</h2>
      
      <p>
        Sul piano fisico, gli sport da combattimento sono tra le attività più complete: migliorano forza, mobilità, 
        coordinazione, postura e resistenza, contribuendo a ridurre sedentarietà e rischio di problematiche legate allo 
        stile di vita moderno.
      </p>

      <p>
        Tali sport non richiedono abilità particolari per iniziare: ogni ragazzo può partire dal proprio livello e migliorare 
        gradualmente, scoprendo i benefici di uno stile di vita più sano e attivo.
      </p>

      <h2 className="subtitle">Sicurezza personale e consapevolezza</h2>
      
      <p>
        Un ulteriore punto di forza è la sensazione di sicurezza personale che si sviluppa attraverso allenamenti controllati 
        e progressivi: non si tratta di incentivare il conflitto, ma di aiutare i ragazzi a sentirsi più consapevoli del 
        proprio corpo, più capaci di valutare situazioni e più responsabili nelle interazioni con gli altri.
      </p>

      <p>
        La vera sicurezza nasce dalla capacità di sapere che si potrebbe reagire, pur scegliendo di non farlo, e questa 
        consapevolezza spesso porta a comportamenti più maturi e preventivi.
      </p>

      <h2 className="subtitle">Educazione alla costanza</h2>
      
      <img className="article-image" src={image3} alt="Allenamento costanza disciplina" />
      
      <p>
        Infine, gli sport da combattimento educano alla costanza: ogni allenamento richiede impegno, attenzione e volontà. 
        I ragazzi imparano a fissare obiettivi realistici, seguire un percorso strutturato, accettare che i risultati 
        richiedano tempo e dedizione, e riconoscere il valore del lavoro quotidiano.
      </p>

      <p>
        Queste competenze risultano utili non solo nello sport, ma anche nello studio, nelle relazioni e nella vita adulta.
      </p>

      <h2 className="subtitle">In conclusione</h2>
      
      <p>
        Praticare sport da combattimento in età adolescenziale significa offrire ai giovani un'occasione di crescita completa: 
        fisica, mentale, emotiva e sociale. Non è solo imparare tecniche o movimenti, ma costruire basi solide per diventare 
        adulti più sicuri, equilibrati e capaci di affrontare la vita con determinazione.
      </p>

      <p>
        Per tanti ragazzi, la palestra rappresenta molto più di un luogo di allenamento: è una vera scuola di vita, dove si 
        impara a conoscere sé stessi e a diventare la versione migliore di ciò che si può essere.
      </p>

      <p className="author">Francesco Cerqua</p>
    </section>
  );
};

export default FrancescoArticle;
