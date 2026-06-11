import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiPhone } from "react-icons/fi";
import { Search } from "../Search/Search";
import "./Navbar.css";

const links = [
  { to: "/",                label: "Inicio"   },
  { to: "/mesas-de-billar", label: "Billar"   },
  { to: "/futbolitos",      label: "Futbolitos" },
  { to: "/ping-pong",       label: "Ping Pong"  },
  { to: "/mesas-cartas",    label: "Cartas"   },
  { to: "/carambola",       label: "Carambola" },
  { to: "/hockey",          label: "Hockey"   },
  { to: "/extras",          label: "Accesorios" },
];

const WA_URL = "https://wa.me/523329833915?text=Hola, quiero cotizar una mesa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      document.body.classList.toggle("no-scroll", !prev);
      return !prev;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      {searchOpen && <Search onClose={() => setSearchOpen(false)} />}

      <div className={`menu-overlay ${isOpen ? "active" : ""}`} onClick={closeMenu} />

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* TOPBAR */}
        <div className="navbar-topbar">
          <div className="navbar-topbar-inner">
            <a href="https://wa.me/523329833915" target="_blank" rel="noopener noreferrer" className="topbar-phone">
              <FiPhone /> 33 2983 3915
            </a>
            <span className="topbar-sep">|</span>
            <a href="https://wa.me/523314507923" target="_blank" rel="noopener noreferrer" className="topbar-phone">
              <FiPhone /> 33 1450 7923
            </a>
          </div>
        </div>

        {/* TOP GOLD LINE */}
        <div className="navbar-gold-line" />

        <div className="navbar-container">
          {/* LOGO */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-main">BILLARTE</span>
            <span className="logo-sub">EL ARTE DEL BILLAR</span>
          </Link>

          {/* NAV LINKS */}
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={closeMenu}
                  className={location.pathname === to ? "active-link" : ""}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* CTA inside mobile drawer */}
            <li className="nav-cta-mobile-item">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="nav-cta-mobile">
                Cotizar Ahora
              </a>
            </li>
          </ul>

          {/* RIGHT: Search + CTA + Hamburger */}
          <div className="navbar-right">
            <button
              className="nav-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Buscar productos"
            >
              <FiSearch />
            </button>

            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
              Cotizar Ahora
            </a>

            <button
              className={`menu-icon ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label="Abrir menú"
              aria-expanded={isOpen}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
