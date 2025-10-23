import React, { useState } from 'react';
import './Rating.css';

// Interfacce TypeScript
interface Recensione {
  id: number;
  nome: string;
  voto: number;
  testo: string;
  data: string;
}

interface NuovaRecensione {
  nome: string;
  voto: number;
  testo: string;
}

// Props per il componente Stelle
interface StelleProps {
  voto: number;
}

const Recensioni: React.FC = () => {
  const [recensioni, setRecensioni] = useState<Recensione[]>([
    { id: 1, nome: "Mario Rossi", voto: 5, testo: "Ottimo prodotto, lo consiglio!", data: "2024-01-15" },
    { id: 2, nome: "Laura Bianchi", voto: 4, testo: "Buona qualità, spedizione veloce", data: "2024-01-10" },
    { id: 3, nome: "Giuseppe Verdi", voto: 3, testo: "Discreto, ma ci sono prodotti migliori", data: "2024-01-05" }
  ]);

  const [nuovaRecensione, setNuovaRecensione] = useState<NuovaRecensione>({
    nome: "",
    voto: 5,
    testo: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNuovaRecensione({
      ...nuovaRecensione,
      [name]: name === 'voto' ? parseInt(value) : value
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuovaRecensione({
      ...nuovaRecensione,
      [name]: parseInt(value)
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nuovaRecensione.nome.trim() && nuovaRecensione.testo.trim()) {
      const recensione: Recensione = {
        id: Date.now(),
        nome: nuovaRecensione.nome,
        voto: nuovaRecensione.voto,
        testo: nuovaRecensione.testo,
        data: new Date().toISOString().split('T')[0]
      };
      
      setRecensioni([recensione, ...recensioni]);
      setNuovaRecensione({ nome: "", voto: 5, testo: "" });
    }
  };

  const Stelle: React.FC<StelleProps> = ({ voto }) => {
    return (
      <div className="stelle">
        {[1, 2, 3, 4, 5].map((stella) => (
          <span
            key={stella}
            className={`stella ${stella <= voto ? 'piena' : 'vuota'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const votoMedio = recensioni.length > 0 
    ? (recensioni.reduce((acc, rec) => acc + rec.voto, 0) / recensioni.length).toFixed(1)
    : "0.0";

  return (
    <div className="recensioni-container">
      <header className="header">
        <h1>Recensioni</h1>
      </header>

      <main className="main-content">
        {/* Riepilogo */}
        <section className="riepilogo">
          <h2>Riepilogo Recensioni</h2>
          <div className="stats">
            <div className="voto-medio">
              <span className="numero">{votoMedio}</span>
              <Stelle voto={Math.round(parseFloat(votoMedio))} />
              <span className="totale">({recensioni.length} recensioni)</span>
            </div>
          </div>
        </section>

        {/* Form nuova recensione */}
        <section className="nuova-recensione">
          <h2>Scrivi una Recensione</h2>
          <form onSubmit={handleSubmit} className="recensione-form">
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={nuovaRecensione.nome}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Voto:</label>
              <div className="selezione-voto">
                {[1, 2, 3, 4, 5].map((voto) => (
                  <label key={voto} className="voto-option">
                    <input
                      type="radio"
                      name="voto"
                      value={voto}
                      checked={nuovaRecensione.voto === voto}
                      onChange={handleRadioChange}
                    />
                    <span className="stella-radio">
                      {voto} ★
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="testo">Recensione:</label>
              <textarea
                id="testo"
                name="testo"
                value={nuovaRecensione.testo}
                onChange={handleInputChange}
                rows={4}
                required
              />
            </div>

            <button type="submit" className="btn-invia">
              Invia Recensione
            </button>
          </form>
        </section>

        {/* Lista recensioni */}
        <section className="lista-recensioni">
          <h2>Recensioni degli Utenti</h2>
          {recensioni.length === 0 ? (
            <p className="nessuna-recensione">Ancora nessuna recensione. Sii il primo a scrivere!</p>
          ) : (
            <div className="recensioni-grid">
              {recensioni.map((recensione) => (
                <div key={recensione.id} className="recensione-card">
                  <div className="recensione-header">
                    <h3 className="nome-utente">{recensione.nome}</h3>
                    <span className="data">{recensione.data}</span>
                  </div>
                  <Stelle voto={recensione.voto} />
                  <p className="testo-recensione">{recensione.testo}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Recensioni;