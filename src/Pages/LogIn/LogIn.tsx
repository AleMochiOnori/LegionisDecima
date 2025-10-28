import React, { useState } from "react";
import "../Register/Register.css"; // Usa lo stesso file CSS della Register

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // salva token e mostra messaggio
        localStorage.setItem("token", data.token);
        setMessage("✅ Accesso effettuato con successo!");
        setFormData({ email: "", password: "" });
      } else {
        setMessage(`❌ ${data.error || "Credenziali non valide"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Errore di connessione al server");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Accedi al tuo account</h1>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Inserisci la tua email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Inserisci la tua password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Accedi
          </button>

          {message && <p className="message">{message}</p>}
        </form>

        <p style={{ textAlign: "center", marginTop: "1rem", color: "#000" }}>
          Non hai un account?{" "}
          <a href="/register" style={{ color: "#ff2a2a", fontWeight: 600 }}>
            Registrati
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
