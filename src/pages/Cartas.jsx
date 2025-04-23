
import { useState } from "react";
import { cardsTables } from "../Constants/cardsTables";
import "../styles/Gallery.css"; 
import { ImageModal } from "../components/Modal/Modal";

export const Cartas = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => setSelectedImage(imageUrl);
  const closeModal = () => setSelectedImage(null);
  return (
    <div className="gallery-container">
      <h1
      style={{margin:"10px"}}
      >Mesas de Cartas</h1>
      <div className="gallery-grid">
        {cardsTables.map((table) => (
        <div 
        key={table.id} 
        className="gallery-item" 
        onClick={() => openModal(table.image)}
      >
        <div className="gallery-image-container">
          <img 
            src={table.image} 
            alt={`Mesa ${table.title}`} 
            className="gallery-image"
          />
        </div>
        <div className="gallery-info">
          <h3>{table.title}</h3>
          <p>{table.description}</p>
        </div>
        
      </div>
        ))}
      </div>
      <ImageModal
        isOpen={!!selectedImage}
        imageUrl={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
};