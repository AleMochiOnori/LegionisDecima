import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rating.css';
import CustomModal from '../../Components/Modal/CustomModal';

interface Recensione {
  _id?: string;
  userId?: { username: string };
  nome?: string;
  rating: number;
  text: string;
  data: string;
}

interface NuovaRecensione {
  rating : number;
  text: string;
}

const Recensioni: React.FC = () => {
  const [recensioni, setRecensioni] = useState<Recensione[]>([]);
  const [nuovaRecensione, setNuovaRecensione] = useState<NuovaRecensione>({ rating : 5, text: "" });
  const [showModal, setShowModal] = useState(false);
  const [recensioneSelezionata, setRecensioneSelezionata] = useState<Recensione | null>(null);
  const [textModificato, settextModificato] = useState("");
  const [ratingModificato, setRatingModificato] = useState(5);

  // 🔹 Carica recensioni dal backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/reviews');
        setRecensioni(res.data);
      } catch (err) {
        console.error("Errore caricamento recensioni:", err);
      }
    };
    fetchReviews();
  }, []);


    // 🔹 Invia nuova recensione
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) return alert("Devi essere loggato per lasciare una recensione");

    try {
      const res = await axios.post(
        'http://localhost:5000/api/reviews',
        { text : nuovaRecensione.text, rating: nuovaRecensione.rating },
        { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'} }
      );
      setRecensioni([res.data, ...recensioni]);
      setNuovaRecensione({ text: "", rating: 5 });
    } catch (err) {
      console.error("Errore invio recensione:", err);
    }
  };

  // 🔹 Gestione input nuova recensione
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNuovaRecensione({ ...nuovaRecensione, text: e.target.value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuovaRecensione({ ...nuovaRecensione, rating: parseInt(e.target.value) });
  };

  // 🔹 Modifica recensione
  const handleModifica = (id: string | undefined) => {
    if (!id) return;
    const recensione = recensioni.find(r => r._id === id);
    if (recensione) {
      setRecensioneSelezionata(recensione);
      settextModificato(recensione.text);
      setRatingModificato(recensione.rating);
      setShowModal(true);
}
  };

  // 🔹 Salva recensione modificata
  const handleSalvaModifica = async () => {
    if (!recensioneSelezionata?._id) return;
    try { 
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `http://localhost:5000/api/reviews/${recensioneSelezionata._id}`,
        { testo : textModificato, voto : ratingModificato },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setRecensioni(prev =>
        prev.map(r => (r._id === recensioneSelezionata._id ? res.data : r))
      );

      setShowModal(false);
      setRecensioneSelezionata(null);
    } catch (err) {
      console.error("Errore aggiornamento recensione:", err);
    }
  };

  // 🔹 Elimina recensione
  const handleElimina = async (id: string | undefined) => {
    if (!id) return;
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setRecensioni(recensioni.filter(r => r._id !== id));
    } catch (err) {
      console.error("Errore eliminazione recensione:", err);
    }
  };



  const ratingMedio = recensioni.length
    ? (recensioni.reduce((acc, rec) => acc + (rec.rating || 0), 0) / recensioni.length).toFixed(1)
    : "0.0";

  const Stelle: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="stelle">
      {[1, 2, 3, 4, 5].map(s => (
        <span key={s} className={`stella ${s <= rating ? 'piena' : 'vuota'}`}>★</span>
      ))}
    </div>
  );

  return (
    <div className="recensioni-container">
      <header className="header">
        <h1>Recensioni</h1>
      </header>

      <main className="main-content">
        <section className="riepilogo">
          <h2>Riepilogo Recensioni</h2>
          <div className="stats">
            <div className="voto-medio">
              <span className="numero">{ratingMedio}</span>
              <Stelle rating={Math.round(parseFloat(ratingMedio))} />
              <span className="totale">({recensioni.length} recensioni)</span>
            </div>
          </div>
        </section>

        <section className="nuova-recensione">
          <h2>Scrivi una Recensione</h2>
          <form onSubmit={handleSubmit} className="recensione-form">
            <textarea
              id="text"
              name="text"
              value={nuovaRecensione.text}
              onChange={handleInputChange}
              rows={4}
              required
              className='text-area-recensione'
            />
            <div className="form-group">
              <label>Rating:</label>
              <div className="selezione-rating">
                {[1, 2, 3, 4, 5].map(rating => (
                  <label key={rating}>
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={nuovaRecensione.rating === rating}
                      onChange={handleRadioChange}
                    />
                    {rating} ★
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="btn-invia">Invia Recensione</button>
          </form>
        </section>

        <section className="lista-recensioni">
          <h2>Recensioni Utenti</h2>
          {recensioni.length === 0 ? (
            <p>Nessuna recensione presente</p>
          ) : (
            <div className="recensioni-grid">
              {recensioni.map(r => (
                <div key={r._id} className="recensione-card">
                  <h3 className="colorText">{r.userId?.username || "Anonimo"}</h3>
                  <Stelle rating={r.rating || 0} />
                  <p className="colorText">{r.text}</p>
                  <small className="colorText">{new Date(r.data).toLocaleDateString()}</small>
                  <div className="ModElimContainer">
                    <button className="Modifca" onClick={() => handleModifica(r._id)}>Modifica</button>
                    <button className="Elimina" onClick={() => handleElimina(r._id)}>Elimina</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      {recensioneSelezionata && (
  <CustomModal show={showModal} onClose={() => setShowModal(false)} title="Modifica recensione">
    <textarea
      value={textModificato}
      onChange={e => settextModificato(e.target.value)}
      placeholder="Modifica la tua recensione..."
      className='text-area-modifica'
    />
    <div className="selezione-rating">
      {[1, 2, 3, 4, 5].map(r => (
        <label key={r}>
          <input
            type="radio"
            name="rating"
            value={r}
            checked={ratingModificato === r}
            onChange={e => setRatingModificato(parseInt(e.target.value))}
            className='radio-modifica'
           
          />
          {r} ★
        </label>
      ))}
    </div>
    <div style={{ textAlign: "right", marginTop: "1rem" }}>
      <button
        onClick={handleSalvaModifica}
        className="btn-salva"
      >
        Salva
      </button>
    </div>
  </CustomModal>
)}
    </div>
  );
};

export default Recensioni;
