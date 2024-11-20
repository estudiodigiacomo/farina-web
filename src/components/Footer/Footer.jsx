import React from 'react'
import './Footer.scss'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="image">
            <img src="src/assets/logo_footer.png" alt="logo footer"/>
        </div>
        <div className="description">
            <p className="description">Asesoramiento Jurídico de Empresas, Derecho Agrario, Agro Ambiental y Agro Alimentario </p>
        </div>
        <div className="legals">
            <p className="copyrigth">© 2024 Luciana Farina. Todos los derechos reservados.</p>
            <a href="#">Términos y Condiciones  </a>
            <a href="#">Politicas y privacidad</a>
        </div>
    </div>
    </>
  )
}

export default Footer