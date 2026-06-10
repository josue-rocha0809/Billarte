import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { soccerTables } from "../constants/soccerTables";
import { ImageModal } from "../components/Modal/Modal";
import { PageHero } from "../components/PageHero/PageHero";
import { SEO } from "../components/SEO/SEO";
import "../styles/Gallery.css";

export const Soccer = () => {
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
        title="Futbolitos de Lujo en México | Billarte"
        description="Futbolitos clásicos y de lujo fabricados a medida con materiales de primera calidad. Envíos a toda la República Mexicana. Cotiza el tuyo por WhatsApp."
        path="/futbolitos"
      />
      <PageHero
        title="Futbolitos"
        subtitle="Desde modelos clásicos hasta piezas de lujo con acabados exclusivos."
        image="/images/soccer/futbolitoDeLujo.png"
        label="Colección Premium"
      />

      <div className="gallery-intro">
        <p className="gallery-section-label">Todos los Modelos</p>
        <h2>Futbolitos para cada espacio</h2>
        <p>Fabricación artesanal con materiales de primera calidad. Personalización total.</p>
        <div className="gallery-intro-divider" />
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {soccerTables.map((item, i) => (
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
                  alt={`Futbolito ${item.title} — Billarte`}
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
