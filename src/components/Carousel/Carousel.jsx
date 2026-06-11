import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";

const slides = [
  {
    image: "/images/pool/ginevra.png",
    title: "Mesa Ginevra",
    subtitle: "Lujo suizo con madera tallada a mano",
    route: "/mesas-de-billar",
  },
  {
    image: "/images/pool/venecia.png",
    title: "Mesa Venecia",
    subtitle: "Elegancia italiana en cada detalle",
    route: "/mesas-de-billar",
  },
  {
    image: "/images/pool/olimpia.png",
    title: "Mesa Olimpia",
    subtitle: "Inspirada en la grandeza del olimpo",
    route: "/mesas-de-billar",
  },
  {
    image: "/images/pool/urus.png",
    title: "Mesa Urus",
    subtitle: "Diseño moderno con inspiración automotriz",
    route: "/mesas-de-billar",
  },
  {
    image: "/images/pool/grecia.png",
    title: "Mesa Grecia",
    subtitle: "Influencia mediterránea en cada línea",
    route: "/mesas-de-billar",
  },
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((newIndex) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setIndex(newIndex);
      setFading(false);
    }, 350);
  }, [fading]);

  const next = useCallback(() => {
    goTo((index + 1) % slides.length);
  }, [index, goTo]);

  const prev = () => goTo((index - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[index];

  return (
    <section className="carousel" aria-label="Productos destacados">
      <div className={`carousel-img-wrapper ${fading ? "fade-out" : "fade-in"}`}>
        <img
          src={slide.image}
          alt={slide.title}
          className="carousel-img"
          loading="eager"
          fetchpriority="high"
        />
        <div className="carousel-overlay" />
      </div>

      <div className="carousel-content">
        <p className="carousel-label">Billarte — El arte del juego, a tu medida</p>
        <h2 className="carousel-title">{slide.title}</h2>
        <p className="carousel-subtitle">{slide.subtitle}</p>
        <div className="carousel-actions">
          <Link to={slide.route} className="btn-primary">
            Ver colección
          </Link>
          <a
            href="https://wa.me/523329833915?text=Hola, me interesa conocer sus productos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>

      <button className="carousel-btn carousel-btn-left" onClick={prev} aria-label="Anterior">
        &#10094;
      </button>
      <button className="carousel-btn carousel-btn-right" onClick={next} aria-label="Siguiente">
        &#10095;
      </button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
