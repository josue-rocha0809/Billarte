import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo">
  <span className="logo-main">BILLARTE</span>
  <span className="logo-sub">EL ARTE DEL BILLAR</span>
</Link>


        {/* Menú Hamburguesa (solo en móviles) */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Menú Principal */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/mesas-billar" onClick={toggleMenu}>Mesas de Billar</Link>
          </li>
          <li>
            <Link to="/futbolitos" onClick={toggleMenu}>Futbolitos</Link>
          </li>
          <li>
            <Link to="/ping-pong" onClick={toggleMenu}>Ping Pong</Link>
          </li>
          <li>
            <Link to="/mesas-cartas" onClick={toggleMenu}>Mesas de Cartas</Link>
          </li>
          <li>
            <Link to="/carambola" onClick={toggleMenu}>Carambola</Link>
          </li>
          <li>
            <Link to="/hockey" onClick={toggleMenu}>Hockey</Link>
          </li>
          <li>
            <Link to="/extras" onClick={toggleMenu}>Extras</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};