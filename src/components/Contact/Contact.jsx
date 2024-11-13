import React from 'react'

const Contact = () => {
  return (
    <>
        <h3 className="title-content">Contacto</h3>
        <div className='contact-page'>
            <div className="contact-section">
                <p className="title">Teléfonos</p>
                <a href="https://wa.me/541159378799" class="whatsapp-link" target="_blank" rel="noopener">+ 54 11 5937-8799</a>
                <a href="tel:+1234567890" className="link">+ 54 2983 60-1386</a>
            </div>
            <div className="contact-section">
                <p className="title">e-mail</p>
                <a href="mailto:example@example.com" className="link">luciana@estudiofarina.com</a>
            </div>
            <div className="contact-section">
                <p className="title">Horarios</p>
                <p className="data">Lunes a Viernes</p>
                <p className="data">de 09:00 a 12:00 y 14:30 a 18:30</p>
            </div>
            <div className="contact-section">
                <p className="title">Oficina</p>
                <a href="https://www.google.com/maps?q=-38.37626121962469, -60.266417090762" class="location-link" target="_blank" rel="noopener">Ver ubicación</a>
            </div>
        </div>
    </>
  )
}

export default Contact