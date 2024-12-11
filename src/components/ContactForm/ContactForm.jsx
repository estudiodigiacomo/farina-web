import React, { useState } from "react";
import './ContactForm.scss'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://us-central1-tu-proyecto.cloudfunctions.net/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Correo enviado con éxito");
      } else {
        setStatus("Error enviando el correo");
      }
    } catch (error) {
      console.error("Error enviando correo:", error);
      setStatus("Error enviando el correo");
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      {status && <p className={status === "Error enviando el correo" ? "error" : ""}>{status}</p>}
    </div>

  );
}

export default ContactForm;
