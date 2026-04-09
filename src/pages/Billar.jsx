import { useState } from "react";
import { poolTables } from "../Constants/poolTables";
import "../styles/Gallery.css";
import { ImageModal } from "../components/Modal/Modal";

export const Billar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    if (item) {
      setSelectedItem(item);
    }
  };
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="gallery-container">
      <h1 style={{ margin: "10px" }}>Mesas de billar </h1>
      <p style={{ margin: "10px" }}>
        En Billarte fabricamos mesas de billar en México con diseños
        personalizados para hogar, negocios y salas de juego. Ofrecemos mesas de
        alta calidad, acabados premium y envíos a todo el país.
      </p>

      <p style={{ margin: "10px" }}>
        Si buscas comprar mesas de billar modernas, clásicas o a medida, aquí
        encontrarás opciones únicas hechas por expertos.
      </p>
      <div className="gallery-grid">
        {poolTables.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
             role="button"
            onClick={() => openModal(item)}
            alt={`Mesa de billar ${item.title} en México`}
          >
            <div className="gallery-image-container">
              <img
                src={item?.images ? item?.images[0].image : item.image}
                alt={item.title}
                className="gallery-image"
              />
            </div>
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ImageModal
        isOpen={!!selectedItem}
        item={selectedItem}
        onClose={closeModal}
      />
    </div>
  );
};
