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

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Billar />} />
          <Route path="/mesas-billar" element={<Billar />} />
          <Route path="/futbolitos" element={<Futbolitos />} />
          <Route path="/ping-pong" element={<PingPong />} />
          <Route path="/mesas-cartas" element={<Cartas />} />
          <Route path="/carambola" element={<Carambola />} />
          <Route path="/hockey" element={<Hockey />} />
          <Route path="/extras" element={<Extras />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}