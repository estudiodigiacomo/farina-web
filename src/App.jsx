import React from "react";
import Navbar from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import './utils/variables.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bio from './pages/Bio/Bio';
import WhatsAppButton from "./components/WhatsAppBtn/WhatsAppBtn";
import Practice from "./pages/Practice/Practice";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import FormNotice from "./pages/FormNotice/FormNotice";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import LogoutButton from "./components/LogoutButon/LogoutButon";
import DetailNew from "./pages/DetailNews/DetailNew";

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Navbar />
        <LogoutButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/blog" element={<News />} />
          <Route path="/noticia/:id" element={<DetailNew />} />


          <Route
            path="/new-post"
            element={
              <PrivateRoute>
                <FormNotice/>
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-post/:id"
            element={
              <PrivateRoute>
                <FormNotice/>
              </PrivateRoute>
            }
          />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
