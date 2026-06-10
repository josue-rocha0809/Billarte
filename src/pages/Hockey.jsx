import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { hockeyTables } from "../constants/hockeyTables";
import { ImageModal } from "../components/Modal/Modal";
import { PageHero } from "../components/PageHero/PageHero";
import { SEO } from "../components/SEO/SEO";
import "../styles/Gallery.css";

export const Hockey = () => {
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
        title="Mesas de Hockey de Aire en México | Billarte"
        description="Mesas de hockey de aire premium con motor de alta potencia y acabados de lujo. Envíos a toda la República Mexicana."
        path="/hockey"
      />
      <PageHero
        title="Hockey de Aire"
        subtitle="Velocidad, adrenalina y diseño premium en un solo producto."
        image="/images/hockey/residencialDeLujo.png"
        label="Colección Premium"
      />

      <div className="gallery-intro">
        <p className="gallery-section-label">Todos los Modelos</p>
        <h2>Mesas de hockey de primera</h2>
        <p>Motor de alta potencia, superficie de deslizamiento premium y acabados de lujo.</p>
        <div className="gallery-intro-divider" />
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {hockeyTables.map((item, i) => (
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
                  alt={`Mesa de hockey ${item.title} — Billarte`}
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
