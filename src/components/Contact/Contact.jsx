import React from "react";
import "./Contact.scss";

// Importar íconos desde React Icons
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
return (
    <>
    <h3 className="title-contact">Contacto</h3>
    <div id="contact" className="contact-page">
        <div className="contact-section">
        <p className="title">
            Teléfonos <FaPhone className="icon" />
        </p>
        <a
            href="https://wa.me/541159378799"
            className="number-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            + 54 11 5937-8799
        </a>
        <a href="tel:+1234567890" className="number-link">
            + 54 2983 60-1386
        </a>
        </div>
        <div className="contact-section">
        <p className="title">e-mail <FaEnvelope className="icon" /></p>
        <a href="mailto:example@example.com" className="email_link">
            estudio@lucianafarina.com
        </a>
        </div>
        <div className="contact-section">
        <p className="title">Horarios <FaClock className="icon" /> </p>
        <p className="data-days">Lunes a Viernes</p>
        <p className="data-days">de 09:00 a 12:00 y 14:30 a 18:30</p>
        </div>
        <div className="contact-section">
        <p className="title">Oficina <FaMapMarkerAlt className="icon" /></p>
        <a
            href="https://www.google.com/maps?q=-38.37626121962469,-60.266417090762"
            className="data-location"
            target="_blank"
            rel="noopener noreferrer"
        >
            Tres Arroyos, Provincia de Buenos Aires, Humberto 1º 460
        </a>
        <a
            href="https://www.google.com/maps?q=-38.37626121962469,-60.266417090762"
            className="data-location"
            target="_blank"
            rel="noopener noreferrer"
        >
            Ciudad Autónoma de Buenos Aires, José Andrés Pacheco de Melo 2870 - Piso 3B
        </a>
        </div>
    </div>
    </>
);
};

export default Contact;
