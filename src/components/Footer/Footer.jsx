import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">BILLARTE</div>
      <div className="footer-icons">
        <a
          href="https://wa.me/523338720017"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon" />
          <span>333 872 0017</span>
        </a>
        <a
          href="https://www.instagram.com/billartegdl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
          <span>BILLARTE GDL</span>
        </a>
        <a
          href="https://www.tiktok.com/@billartegdl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="icon" />
          <span>BILLARTEGDL</span>
        </a>
      </div>
    </footer>
  );
};
