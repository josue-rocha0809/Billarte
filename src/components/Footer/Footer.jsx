import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Footer.css";

const navLinks = [
  { to: "/mesas-de-billar", label: "Mesas de Billar" },
  { to: "/futbolitos",      label: "Futbolitos" },
  { to: "/ping-pong",       label: "Ping Pong" },
  { to: "/mesas-cartas",    label: "Mesas de Cartas" },
  { to: "/carambola",       label: "Carambola" },
  { to: "/hockey",          label: "Hockey de Aire" },
  { to: "/extras",          label: "Accesorios" },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">BILLARTE</span>
          <span className="footer-tagline">El arte del juego, a tu medida</span>
        </div>

        <nav className="footer-links">
          <h4>Colecciones</h4>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </nav>

        <div className="footer-contact">
          <h4>Contáctanos</h4>
          <div className="footer-icons">
            <a href="https://wa.me/523329833915" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon" />
              <span>33 2983 3915</span>
            </a>
            <a href="https://wa.me/523314507923" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon" />
              <span>33 1450 7923</span>
            </a>
            <a href="https://www.instagram.com/billartegdl" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
              <span>@billartegdl</span>
            </a>
            <a href="https://www.tiktok.com/@billartegdl" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="icon" />
              <span>@billartegdl</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © 2025 <span>Billarte</span> — Todos los derechos reservados · Zapopan, Jalisco, México
        </p>
        <p className="footer-copy">Fabricación artesanal · Envíos a todo México</p>
      </div>
    </footer>
  );
};
