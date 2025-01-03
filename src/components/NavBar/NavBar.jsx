import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
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
      window.location.href = "/#contact";
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src="https://storage.googleapis.com/farina_img/luciana-farina.webp" alt="logo" />
          </Link>
        </div>

        {/* Links */}
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
          {/* Ícono de Instagram */}
          <a
            href="https://www.instagram.com/farina_luciana/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <FaInstagram className="instagram-icon" />
          </a>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <HiMenu/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
