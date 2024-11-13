import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
          <img src="src\assets\luciana farina.png" alt="logo"/></Link>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/section1" onClick={() => setIsOpen(false)}>Bío</Link>
          <Link to="/section2" onClick={() => setIsOpen(false)}>Áreas de Práctica</Link>
          <Link to="/section3" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/section4" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
