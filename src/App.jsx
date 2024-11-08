import React from "react";
import Navbar from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import './utils/variables.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

