import "./ThailandTrip.css";

const ViaggioThailandia = () => {
  return (
    <div className="ViaggioPage">
      <header className="ViaggioHeader">
        <h1>Viaggio Studio in Thailandia</h1>
        <p className="author">di Alessio Marabucci</p>
      </header>

      <img className="main-img" src="/images/kombat-group.jpg" alt="Kombat Group Pattaya" />

      <section className="ViaggioContent">
        <p>
          Viaggiare apre la mente, soprattutto quando si entra in contatto con culture distanti
          dalla nostra, come quella thailandese. Da praticante di Muay Thai di lunga data, non
          potevo non esplorare il Paese che ha dato vita a questa splendida disciplina.
        </p>

        <p>
          Il primo viaggio risale al 2009, ma l’ultimo — a marzo 2025 — ha visto la partecipazione
          di un gruppo di allievi Legionis Decima Torrino. Questa volta ci siamo allenati al
          <strong> Kombat Group di Pattaya</strong>, storico camp fondato da Christian Daghio,
          un grande campione e uomo di valore.
        </p>

        <img src="/images/thai-ring.jpg" alt="Allenamento al Kombat Group" className="inline-img" />

        <p>
          Una settimana intensa, con allenamenti due volte al giorno sotto il sole thailandese.
          Oltre alla pratica, abbiamo assistito al <strong>Campionato Mondiale MTBSA</strong>,
          organizzato da Kru Enzo Di Staso, nella splendida cornice della spiaggia di Pattaya.
        </p>

        <p>
          Durante il viaggio ho ricevuto il mio <strong>Mongkol rosso</strong>, simbolo del legame
          tra allievo, Maestro e Camp. La cerimonia di benedizione si è tenuta al tempio
          <em> Wat Huay Yia</em>, con preghiere di protezione recitate da un monaco buddhista.
        </p>

        <img src="/images/monk-ceremony.jpg" alt="Cerimonia Mongkol" className="inline-img" />

        <p>
          I giorni sono proseguiti tra allenamenti e visite culturali, fino alla consegna dei
          certificati tecnici. Emozionante ricevere il grado di Kru, assieme ai miei allievi
          Valerio, Giorgio e Francesco.
        </p>

        <p>
          Nonostante non siamo riusciti ad assistere alla finale del Campionato, porto nel cuore
          la promessa di tornare presto, anche per la <strong>Wai Kru Ceremony</strong> di
          Ayutthaya, in onore di Nai Khanom Thom.
        </p>

        <p className="closing">Al prossimo viaggio,<br />Kru Alessio</p>
      </section>
    </div>
  );
};

export default ViaggioThailandia;
