import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Redirigir al Home y luego desplazarte
      window.location.href = "/#contact";
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="src/assets/luciana-farina.webp" alt="logo" />
          </Link>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/bio" onClick={() => setIsOpen(false)}>
            Bío
          </Link>
          <Link to="/practice" onClick={() => setIsOpen(false)}>
            Áreas de Práctica
          </Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <button onClick={scrollToContact} className="contact-link">
            Contacto
          </button>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
