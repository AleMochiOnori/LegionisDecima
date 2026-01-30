import "./PassaggiDiGrado.css";
import image1 from "../../../assets/Articolo PassaggiDiGrado/image1.jpeg";
import image2 from "../../../assets/Articolo PassaggiDiGrado/image2.png";
import image3 from "../../../assets/Articolo PassaggiDiGrado/image3.jpg";
import image4 from "../../../assets/Articolo PassaggiDiGrado/image4.jpg";
import image5 from "../../../assets/Articolo PassaggiDiGrado/image5.jpg";
import image6 from "../../../assets/Articolo PassaggiDiGrado/image6.jpg";
import image7 from "../../../assets/Articolo PassaggiDiGrado/image7.jpg";
import image8 from "../../../assets/Articolo PassaggiDiGrado/image8.jpg";
import image9 from "../../../assets/Articolo PassaggiDiGrado/image9.jpg";
import image10 from "../../../assets/Articolo PassaggiDiGrado/image10.jpeg";

const PassaggiDiGrado = () => {
  return (
    <section className="passaggi-wrapper">
      <h1 className="title">
        Esami di grado 13 dicembre 2025
      </h1>
      <p className="byline">Di Alessio Marabucci</p>

      <p>
        Come di consueto nel mese di dicembre teniamo i nostri passaggi di grado per la Japanese Kickboxing e per la Muay Thai 
        (l'altro esame dell'anno sportivo in genere lo teniamo entro il mese di maggio).
      </p>

      <p>
        Sono sempre stato un convinto sostenitore dell'importanza dei passaggi di grado per queste discipline, sia per non 
        dimenticare le origini "marziali" (il Karate Kyokushinkai per la Japanese Kickboxing e quella che è meglio nota come 
        Muay Boran per la Muay Thai sportiva), sia perché la progressione didattica fornisce uno stimolo ad allenarsi e a 
        migliorarsi costantemente, anche per chi per vari motivi (età, problemi fisici, altri fattori) è meno attratto dalla 
        pratica agonistica, per cui nell'esame di grado riesce a trovare una sua propria "dimensione".
      </p>

      <img className="article-image" src={image1} alt="Esami di grado Legionis X" />

      <p>
        Ad oggi non c'è più l'abitudine di indossare la cintura colorata sopra agli short da kickboxing, così come durante 
        gli allenamenti non si indossano i Prajead per la Muay Thai, per cui noi della Legionis X Roma Sud ci limitiamo a 
        dare dei diplomi WTKA (la nostra federazione di riferimento) che attestano il grado raggiunto (cinture colorate per 
        la Japanese Kickboxing e Khan per la Muay Thai).
      </p>

      <img className="article-image" src={image2} alt="Allenamento esami di grado" />

      <p>
        L'esame ha coinvolto circa 30 atleti, impegnati in un allenamento molto intenso di circa 2 ore che ha visto, oltre 
        ad una fase iniziale di riscaldamento e stretching (indispensabili per una pratica sicura, senza infortuni), una 
        parte orientata al pugilato, con delle combinazioni molti efficaci, seguite da rapidi spostamenti dei piedi, 
        preparate dalla nostra istruttrice di Gym Boxe Caterina Lanza (che è titolare del corso di gym boxe femminile presso 
        il TSC), per poi procedere con una parte di preparazione atletica, molto importante negli sport da combattimento.
      </p>

      <img className="article-image" src={image3} alt="Preparazione atletica" />

      <h2 className="subtitle">Circuito progressivo e preparazione atletica</h2>

      <p>
        Questa sezione è consistita in un circuito progressivo, in cui vari esercizi si sono alternati tra loro in modo 
        piramidale (1 ripetizione di ciascun esercizio al primo giro, poi 2 ripetizioni, poi 3 fino a 10 ripetizioni, a 
        simulare uno sforzo crescente, come il gesto di gara), preparato dal Maestro Giacomo Ratti.
      </p>

      <img className="article-image" src={image4} alt="Circuito progressivo" />

      <p>
        Successivamente io e Giacomo abbiamo predisposto un lavoro tecnico che ha visto un'alternanza tra combinazioni 
        attacco-risposta, tipiche della Muay Thai, ma anche della Japanese Kickboxing, per poi passare a lavori specifici 
        per la Muay Thai, come le prese al collo e le proiezioni, e per la Kickboxing (calci in rotazione ed in salto).
      </p>

      <img className="article-image" src={image5} alt="Lavoro tecnico Muay Thai" />

      <img className="article-image" src={image6} alt="Tecniche di Kickboxing" />

      <h2 className="subtitle">Sparring tecnico e confronto tra atleti</h2>

      <p>
        La parte finale ha previsto diversi round di sparring, molto tecnico e volto ad enfatizzare tutti i lavori studiati 
        durante la sessione di esame, dove i ragazzi e le ragazze (molto numerose) si sono confrontati tra loro, in un'ottica 
        di crescita tecnica senza inutili (e dannose) manie di protagonismo e/o di supremazia sul compagno/a di allenamento.
      </p>

      <img className="article-image" src={image7} alt="Sparring tecnico" />

      <img className="article-image" src={image8} alt="Atleti durante sparring" />

      <h2 className="subtitle">Consegna attestati</h2>

      <p>
        Al termine della sessione di esame sono stati consegnati gli attestati a tutti i partecipanti, in particolare a 
        Marco Spadolini e Silvia Santarelli, allievi di vecchia data che hanno raggiunto il X khan di Muay Thai.
      </p>

      <img className="article-image" src={image9} alt="Consegna attestati" />

      <img className="article-image" src={image10} alt="Gruppo esami di grado" />

      <p>
        Che dire, fiero dei ragazzi e delle ragazze che si sono impegnate in questa prova, con l'intento di andare sempre 
        avanti.
      </p>

      <p className="footer-text">
        Al prossimo esame di grado
      </p>

      <p className="footer-text">
        Alessio
      </p>
    </section>
  );
};

export default PassaggiDiGrado;
