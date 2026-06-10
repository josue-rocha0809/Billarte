import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { extrasTables } from "../constants/extrasTables";
import { ImageModal } from "../components/Modal/Modal";
import { PageHero } from "../components/PageHero/PageHero";
import { SEO } from "../components/SEO/SEO";
import "../styles/Gallery.css";

export const Extras = () => {
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
        title="Accesorios para Mesas de Billar en México | Billarte"
        description="Tacos, paños, taqueras, triángulos y más accesorios premium para tu mesa de billar. Envíos a toda la República Mexicana."
        path="/extras"
      />
      <PageHero
        title="Accesorios"
        subtitle="Complementa tu mesa con accesorios de la más alta calidad."
        image="/images/extras/taquerasPersonalizadas.png"
        label="Accesorios Billarte"
      />

      <div className="gallery-intro">
        <p className="gallery-section-label">Todos los Accesorios</p>
        <h2>Detalles que marcan la diferencia</h2>
        <p>Tacos, paños, taqueras, triángulos y más — todos personalizables con tu estilo.</p>
        <div className="gallery-intro-divider" />
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {extrasTables.map((item, i) => (
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
                  alt={`${item.title} — Billarte`}
                  className="gallery-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-overlay-text">Ver Detalle</span>
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
