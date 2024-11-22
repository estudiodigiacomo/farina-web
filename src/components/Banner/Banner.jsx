import React from 'react'
import "./Banner.scss";

const Banner = () => {
  return (
    <div className='banner-home'>
        <img src="src\assets\banner-home.webp" className='banner-image' alt="banner"/>
        <div className='banner-content'>
            <p> Asesoramiento Jurídico de Empresas</p>
            <p>Derecho Agrario, Agro Ambiental y Agro Alimentario </p>
            <div className='btn-more'>
                <a href='/bio'>conocer más</a>
            </div>
        </div>
    </div>
  )
}

export default Banner