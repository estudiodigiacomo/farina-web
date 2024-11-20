import React from "react";
import Navbar from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import './utils/variables.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bio from './pages/Bio/Bio'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bio" element={<Bio/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

