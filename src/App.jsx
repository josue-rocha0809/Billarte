import { Routes, Route } from "react-router-dom";
import { Billar } from "./pages/Billar";
import { Carambola } from "./pages/Carambola";
import { Futbolitos } from "./pages/Futbolitos";
import { Hockey } from "./pages/Hockey";
import { Cartas } from "./pages/Cartas";
import { PingPong } from "./pages/PingPong";
import { Navbar } from "./components/Navbar/Navbar";
import { Extras } from "./pages/Extras";
import { Footer } from "./components/Footer/Footer";
import "./App.css"; // Asegúrate de crear este archivo

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Billar />} />
          <Route path="/mesas-de-billar" element={<Billar />} />
          <Route path="/futbolitos" element={<Futbolitos />} />
          <Route path="/mesas-de-ping-pong" element={<PingPong />} />
          <Route path="/mesas-de-cartas" element={<Cartas />} />
          <Route path="/carambola" element={<Carambola />} />
          <Route path="/mesas-de-hockey" element={<Hockey />} />
          <Route path="/accesorios" element={<Extras />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
