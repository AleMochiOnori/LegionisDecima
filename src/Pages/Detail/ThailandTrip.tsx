import "./ThailandTrip.css";
import thaiTraning from "../../assets/ThaiTrip/ThaiLandTraining.jpeg";
import thaiImage2 from "../../assets/ThaiTrip/Thaitrip.jpeg";
import thaiImage3 from "../../assets/ThaiTrip/thaiTraning2.jpeg";
import thaiImage4 from "../../assets/ThaiTrip/thaiCeremony.jpeg";
import thaiImage5 from "../../assets/ThaiTrip/thaiCertificate.jpeg";

const ViaggioThailandia = () => {
  return (
    <div className="ViaggioPage">
      <header className="ViaggioHeader">
        <h1>Viaggio Studio in Thailandia</h1>
        <p className="author">di Alessio Marabucci</p>
      </header>

      <img className="main-img" src={thaiImage2} alt="Allenamento in Thailandia" />

      <section className="ViaggioContent">
        <p>
          Viaggiare apre la mente, soprattutto quando si entra in contatto con popoli e culture
          molto distanti dalla nostra, come quella thailandese. Da praticante di Muay Thai di lunga
          data, non potevo non esplorare il Paese che ha dato vita a questa splendida disciplina.
        </p>

        <p>
          Il mio primo viaggio risale al <strong>2009</strong>, ma nel tempo ne sono seguiti altri,
          sempre più focalizzati sull’apprendimento di nuove metodiche di allenamento e principi
          marziali. L’ultimo viaggio, a <strong>marzo 2025</strong>, ha visto la partecipazione di un
          gruppo di allievi della <strong>Legionis Decima Torrino</strong>, con i quali ho condiviso
          un’esperienza indimenticabile.
        </p>

        <p>
          Questa volta abbiamo deciso di allenarci esclusivamente al <strong>Kombat Group di Pattaya</strong>,
          storico camp fondato dal compianto <strong>Christian Daghio</strong>, grande campione e uomo
          di valore. Una settimana intensa, con due sessioni di allenamento al giorno, sotto il sole
          thailandese e con l’incitamento dei Maestri Thai.
        </p>

        <img src={thaiTraning} alt="Allenamento al Kombat Group" className="inline-img" />

        <p>
          Oltre agli allenamenti, abbiamo avuto l’occasione di assistere al{" "}
          <strong>Campionato Mondiale MTBSA</strong>, organizzato da <strong>Kru Enzo Di Staso</strong>
          e dal <strong>Gran Maestro Prasalsit Srisak</strong>, nella splendida cornice della spiaggia
          di Pattaya. Incontri emozionanti, combattuti con rispetto e spirito Thai, tra atleti provenienti
          da ogni parte del mondo.
        </p>

        <p>
          Durante il viaggio ho ricevuto il mio <strong>Mongkol rosso</strong>, simbolo del legame
          tra allievo, Maestro e Camp. La cerimonia di benedizione si è svolta al{" "}
          <em>Wat Huay Yia</em>, all’interno della dimora di un monaco buddhista che ha apposto
          piccoli adesivi dorati sul Mongkol e recitato preghiere di protezione.
        </p>

        <img src={thaiImage3} alt="Cerimonia di benedizione del Mongkol" className="inline-img " />

        <p>
          Grazie a <strong>Kru Enzo</strong>, anche i miei allievi — <strong>Valerio, Giorgio e
          Francesco</strong> — hanno potuto ricevere il loro Mongkol bianco, simbolo del loro impegno
          e della crescita nel percorso marziale.
        </p>

        <img src={thaiImage4} alt="Allenamenti al Kombat Group" className="inline-img kongol" />

        <p>
          Nei giorni successivi abbiamo alternato allenamenti, visite ai templi e momenti di relax
          in spiaggia. Il <strong>15 marzo</strong> si è tenuta la cerimonia di consegna dei certificati
          tecnici: un momento solenne, alla presenza di Maestri e Gran Maestri, durante il quale ho
          ricevuto ufficialmente il grado di <strong>Kru</strong>.
        </p>

        <img src={thaiImage5} alt="Consegna dei certificati tecnici" className="inline-img" />

        <p>
          Purtroppo non abbiamo potuto assistere alla finale del Campionato, tenutasi il giorno del
          nostro rientro in Italia. Tuttavia, porto con me la promessa di tornare presto, anche per
          partecipare nuovamente alla <strong>Wai Kru Ceremony</strong> di Ayutthaya, in onore di{" "}
          <strong>Nai Khanom Thom</strong>, eroe leggendario della Muay Thai.
        </p>

        <p className="closing">
          Al prossimo viaggio,<br />
          <strong>Kru Alessio</strong>
        </p>
      </section>
    </div>
  );
};

export default ViaggioThailandia;
