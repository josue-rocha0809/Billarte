import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll", !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };
  return (
    <>
      <div
        className={`menu-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-main">BILLARTE</span>
            <span className="logo-sub">EL ARTE DEL BILLAR</span>
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
          </div>

          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <Link to="/mesas-de-billar" onClick={toggleMenu}>
                Mesas de Billar
              </Link>
            </li>
            <li>
              <Link to="/futbolitos" onClick={toggleMenu}>
                Futbolitos
              </Link>
            </li>
            <li>
              <Link to="/ping-pong" onClick={toggleMenu}>
                Mesas de Ping Pong
              </Link>
            </li>
            <li>
              <Link to="/mesas-cartas" onClick={toggleMenu}>
                Mesas de Cartas
              </Link>
            </li>
            <li>
              <Link to="/carambola" onClick={toggleMenu}>
                Carambola
              </Link>
            </li>
            <li>
              <Link to="/hockey" onClick={toggleMenu}>
                Mesas de Hockey
              </Link>
            </li>
            <li>
              <Link to="/extras" onClick={toggleMenu}>
                Accesorios
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
