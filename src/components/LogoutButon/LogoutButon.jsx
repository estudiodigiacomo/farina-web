import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authServices.js";
import { useAuth } from "../../context/AuthContext.jsx";
import './LogoutButon.scss'

const LogoutButton = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();n
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };


  return (
    user && (
      <button className="logout-button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    )
  );
};

export default LogoutButton;
