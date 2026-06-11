import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { poolTables } from "../constants/poolTables";
import { ImageModal } from "../components/Modal/Modal";
import { PageHero } from "../components/PageHero/PageHero";
import { SEO } from "../components/SEO/SEO";
import "../styles/Gallery.css";

const featured = [
  { title: "Ginevra", image: "/images/pool/ginevra.png" },
  { title: "Venecia", image: "/images/pool/venecia.png" },
  { title: "Olimpia", image: "/images/pool/olimpia.png" },
  { title: "Urus",    image: "/images/pool/urus.png"    },
  { title: "Emily",   image: "/images/pool/emily.png"   },
  { title: "Grecia",  image: "/images/pool/grecia.png"  },
];

export const Pool = () => {
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
        title="Mesas de Billar en Guadalajara, Zapopan y México | Billarte"
        description="Mesas de billar a medida en Guadalajara, Zapopan y toda México. Diseños profesionales y residenciales, maderas finas y paños premium. Cotiza por WhatsApp."
        path="/mesas-de-billar"
      />
      <PageHero
        title="Mesas de Billar"
        subtitle="Fabricadas a mano en Guadalajara y Zapopan, con envíos a toda México — diseños únicos para quienes exigen lo mejor."
        image="/images/pool/ginevra.png"
        label="Colección Premium"
      />

      <div className="gallery-intro">
        <p className="gallery-section-label">Modelos Destacados</p>
        <h2>Lo mejor de nuestra colección</h2>
        <div className="gallery-intro-divider" />
      </div>

      <div className="featured-strip">
        <div className="featured-strip-inner">
          {featured.map((f, i) => (
            <div
              key={i}
              className="featured-card"
              onClick={() => open(poolTables.find(t => t.title === f.title) || poolTables[i])}
              role="button"
              tabIndex={0}
            >
              <img src={f.image} alt={f.title} loading="lazy" decoding="async" />
              <span className="featured-card-label">{f.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-intro">
        <p className="gallery-section-label">Catálogo Completo</p>
        <h2>Todos los modelos disponibles</h2>
        <p>Cada diseño es personalizable: paño, madera, acabado y dimensiones a tu medida.</p>
        <div className="gallery-intro-divider" />
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {poolTables.map((item, i) => (
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
                  alt={`Mesa de billar ${item.title} — Billarte`}
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
