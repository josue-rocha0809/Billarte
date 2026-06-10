import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cardsTables } from "../constants/cardsTables";
import { ImageModal } from "../components/Modal/Modal";
import { PageHero } from "../components/PageHero/PageHero";
import { SEO } from "../components/SEO/SEO";
import "../styles/Gallery.css";

export const Cards = () => {
  const [selected, setSelected] = useState(null);
  const open = (item) => item && setSelected(item);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.openItem) {
      setSelected(location.state.openItem);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="gallery-page">
      <SEO
        title="Mesas de Cartas Premium en México | Billarte"
        description="Mesas de cartas octagonales y diagonales, elegantes y a medida, con tapete premium. Envíos a toda la República Mexicana."
        path="/mesas-cartas"
      />
      <PageHero
        title="Mesas de Cartas"
        subtitle="Diseños octagonales y diagonales para veladas inolvidables."
        image="/images/cards/mesaOctagonal.png"
        label="Colección Premium"
      />

      <div className="gallery-intro">
        <p className="gallery-section-label">Todos los Modelos</p>
        <h2>Mesas de cartas exclusivas</h2>
        <p>Tapete premium, patas de madera y diseño pensado para jugar con estilo.</p>
        <div className="gallery-intro-divider" />
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {cardsTables.map((item, i) => (
            <div
              key={item.id}
              className="gallery-item"
              role="button"
              tabIndex={0}
              onClick={() => open(item)}
              onKeyDown={(e) => e.key === "Enter" && open(item)}
              data-aos="fade-up"
              data-aos-delay={`${(i % 4) * 80}`}
            >
              <div className="gallery-image-container">
                <img
                  src={item?.images ? item.images[0].image : item.image}
                  alt={`Mesa de cartas ${item.title} — Billarte`}
                  className="gallery-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-overlay-text">Ver Modelo</span>
                </div>
              </div>
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal isOpen={!!selected} item={selected} onClose={() => setSelected(null)} />
    </div>
  );
};
