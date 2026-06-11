import { Link } from "react-router-dom";
import { Carousel } from "../components/Carousel/Carousel";
import { SEO } from "../components/SEO/SEO";
import "./Home.css";

const categories = [
  {
    title: "Mesas de Billar",
    description: "Diseños exclusivos fabricados a medida",
    image: "/images/pool/olimpia.png",
    route: "/mesas-de-billar",
    alt: "Mesa de billar Olimpia premium — Billarte Guadalajara",
  },
  {
    title: "Futbolitos",
    description: "Desde clásicos hasta modelos de lujo",
    image: "/images/soccer/futbolitoDeLujo.png",
    route: "/futbolitos",
    alt: "Futbolito de lujo — Billarte México",
  },
  {
    title: "Ping Pong",
    description: "Para interiores y exteriores",
    image: "/images/pingpong/pingPongNacional.png",
    route: "/ping-pong",
    alt: "Mesa de ping pong — Billarte",
  },
  {
    title: "Mesas de Cartas",
    description: "Elegantes y funcionales para cada ocasión",
    image: "/images/cards/mesaOctagonal.png",
    route: "/mesas-cartas",
    alt: "Mesa de cartas octagonal — Billarte",
  },
  {
    title: "Carambola",
    description: "Precisión y estilo en cada partida",
    image: "/images/carom/italiana.png",
    route: "/carambola",
    alt: "Mesa de carambola italiana — Billarte",
  },
  {
    title: "Hockey de Aire",
    description: "Velocidad y diversión garantizadas",
    image: "/images/hockey/residencialDeLujo.png",
    route: "/hockey",
    alt: "Mesa de hockey de aire de lujo — Billarte",
  },
];

const reasons = [
  {
    icon: "◆",
    title: "Fabricación",
    text: "No fabricamos mesas de juego, esculpimos piezas de arte únicas. Cada diseño es una declaración de estatus y exclusividad, pensado minuciosamente para integrarse en los espacios más sofisticados.",
  },
  {
    icon: "◆",
    title: "Calidad",
    text: "Combinamos los diseños más exclusivos con materiales de alta gama: maderas texturizadas, diseños personalizados y finas aplicaciones de oro y otros materiales premium.",
  },
  {
    icon: "◆",
    title: "Envío",
    text: "Protección absoluta hasta su espacio, sin importar fronteras. Desplegamos un sistema de traslado especializado y de alta seguridad para garantizar que su pieza llegue impecable a cualquier rincón del país o del extranjero.",
  },
  {
    icon: "◆",
    title: "Instalación",
    text: "Montaje experto por los mejores instaladores de México. Una obra de arte exige una instalación perfecta: nuestro equipo se traslada hasta su ubicación para realizar la instalación, nivelación milimétrica y la entrega final.",
  },
  {
    icon: "◆",
    title: "Atención",
    text: "Acompañamiento en cada decisión. Desde el primer boceto de su pieza personalizada hasta el cuidado años después de su compra, cuenta con atención directa y especializada en todo momento, guiando cada detalle para que su pieza sea un reflejo exacto de su estilo.",
  },
  {
    icon: "◆",
    title: "Diseño a la Medida y Personalización",
    text: "Su visión protegida por expertos. Crear una pieza única requiere precisión y confianza: cuidamos cada paso de la selección de materiales y acabados para que su proyecto esté respaldado por los mejores profesionales en alta gama y exclusividad del mercado.",
  },
];

export const Home = () => {
  return (
    <main className="home-wrapper">
      <SEO
        title="Mesas de Billar en Guadalajara y México | Billarte"
        description="Fabricamos mesas de billar, futbolitos, ping pong, carambola y hockey de aire a la medida en Guadalajara, Zapopan y toda México. Diseños premium. Cotiza por WhatsApp."
        path="/"
      />
      <Carousel />

      {/* CATEGORIES */}
      <section className="home-categories">
        <div className="home-section-header" data-aos="fade-up">
          <span className="home-section-label">Nuestra Colección</span>
          <h2>Todos los Productos</h2>
          <p>Explora cada categoría y encuentra la mesa perfecta para tu espacio</p>
        </div>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <Link
              key={cat.route}
              to={cat.route}
              className="category-card"
              aria-label={`Ver ${cat.title}`}
              data-aos="fade-up"
              data-aos-delay={`${(i % 3) * 100}`}
            >
              <div className="category-img-wrapper">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="category-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="category-overlay" />
              </div>
              <div className="category-info">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <span className="category-link">Ver colección →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="home-reasons">
        <div className="home-section-header light" data-aos="fade-up">
          <span className="home-section-label">Nuestra Promesa</span>
          <h2>¿Por qué elegir Billarte?</h2>
          <p>Más de una razón para confiar en nosotros</p>
        </div>
        <div className="reasons-grid">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reason-card"
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
            >
              <span className="reason-icon">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="cta-content" data-aos="fade-up">
          <h2>¿Listo para tu mesa ideal?</h2>
          <p>Contáctanos por WhatsApp — asesoría sin costo y cotización en minutos</p>
          <a
            href="https://wa.me/523329833915?text=Hola, me gustaría información sobre sus mesas"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};
