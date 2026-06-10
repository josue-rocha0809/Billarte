import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { karamboleTables } from "../constants/caromTables";
import { ImageModal } from "../components/Modal/Modal";
import { PageHero } from "../components/PageHero/PageHero";
import { SEO } from "../components/SEO/SEO";
import "../styles/Gallery.css";

export const Carom = () => {
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
        title="Mesas de Carambola en México | Billarte"
        description="Mesas de carambola de alta precisión, fabricación artesanal con paños de calidad europea. Envíos a toda la República Mexicana."
        path="/carambola"
      />
      <PageHero
        title="Carambola"
        subtitle="Mesas de alta precisión para el juego de carambola más exigente."
        image="/images/carom/italiana.png"
        label="Colección Premium"
      />

      <div className="gallery-intro">
        <p className="gallery-section-label">Todos los Modelos</p>
        <h2>Mesas de carambola artesanales</h2>
        <p>Paños de precisión europea, bandas perfectas y estructura de madera maciza.</p>
        <div className="gallery-intro-divider" />
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {karamboleTables.map((item, i) => (
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
                  alt={`Mesa de carambola ${item.title} — Billarte`}
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
