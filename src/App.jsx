import { Routes, Route } from "react-router-dom";
import { Pool }    from "./pages/Pool";
import { Soccer }  from "./pages/Soccer";
import { PingPong } from "./pages/PingPong";
import { Cards }   from "./pages/Cards";
import { Carom }   from "./pages/Carom";
import { Hockey }  from "./pages/Hockey";
import { Extras }  from "./pages/Extras";
import { Home }    from "./pages/Home";
import { Navbar }  from "./components/Navbar/Navbar";
import { Footer }  from "./components/Footer/Footer";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/mesas-de-billar" element={<Pool />} />
          <Route path="/futbolitos"      element={<Soccer />} />
          <Route path="/ping-pong"       element={<PingPong />} />
          <Route path="/mesas-cartas"    element={<Cards />} />
          <Route path="/carambola"       element={<Carom />} />
          <Route path="/hockey"          element={<Hockey />} />
          <Route path="/extras"          element={<Extras />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
