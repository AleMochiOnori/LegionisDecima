import React, { useState, type ChangeEvent, type FormEvent } from "react";
import "./EmailForm.css";

interface EmailFormData {
  to: string;
  subject: string;
  message: string;
}

const EmailForm: React.FC = () => {
  const [formData, setFormData] = useState<EmailFormData>({
    to: "robertafalchettino@gmail.com",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Invio in corso...");

    try {
      const response = await fetch("http://localhost:8080/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Errore nell'invio della mail");

      const result = await response.text();
      setStatus(result);
      setFormData({ to: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Errore nell'invio della mail");
    }
  };

  return (
    <div className="email-form-wrapper">
      <h2 style={{color :"black"}}>Contattaci Via Email</h2>
      <form className="email-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="subject"
          placeholder="Oggetto"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Messaggio"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
        />
        <button type="submit">Invia</button>
      </form>
      <p className="status">{status}</p>
    </div>
  );
};

export default EmailForm;
