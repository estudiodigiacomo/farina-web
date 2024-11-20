import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Dropdowns.scss";

const ProfessionalDropdown = ({ title, items }) => {
const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
    setIsOpen(!isOpen);
};

return (
    <div className="dropdown-list">
    <div
        className={`dropdown-header ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
    >
        <span className="dropdown-title">{title}</span>
        <span className="dropdown-icon">
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
    </div>

    {/* Contenido del Dropdown */}
    <ul className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {items.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </ul>
    </div>
);
};

export default ProfessionalDropdown;
