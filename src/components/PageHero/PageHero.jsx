import "./PageHero.css";

export const PageHero = ({ title, subtitle, image, label = "Billarte Collection" }) => {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${image})` }}
      aria-label={title}
    >
      <div className="page-hero-overlay">
        <div className="page-hero-content" data-aos="fade-up" data-aos-duration="900">
          <p className="page-hero-label">{label}</p>
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
          <div className="page-hero-divider" />
        </div>
      </div>
    </section>
  );
};
