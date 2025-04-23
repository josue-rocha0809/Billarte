
import { useState } from "react";
import { karamboleTables } from "../Constants/karamboleTables";
import "../styles/Gallery.css"; 
import { ImageModal } from "../components/Modal/Modal";

export const Carambola = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    if (item) {
      setSelectedItem(item);
    }
  };
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="gallery-container">
      <h1 style={{margin:"10px"}}>Mesas de carambola</h1>
      <div className="gallery-grid">
        {karamboleTables.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item" 
            onClick={() => openModal(item)}
          >
            <div className="gallery-image-container">
              <img 
                src={item?.images ? item?.images[0].image : item.image} 
                alt={item.title} 
                className="gallery-image"
              />
              {item.images && (
                <div className="gallery-badge">+{item.images.length}</div>
              )}
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