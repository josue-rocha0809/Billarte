import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./ImageModal.css";

export const ImageModal = ({ isOpen, item, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  // 🔥 NORMALIZACIÓN (CLAVE)
  const images = item?.images?.length
    ? item.images
    : item?.image
    ? [{ image: item.image, description: item.description }]
    : [];

  // 👉 navegación segura
  const nextImage = () => {
    if (!images.length) return;
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!images.length) return;
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <button className="close-button" onClick={onClose}>
        ×
      </button>

      {/* IMAGEN */}
      <div className="modal-image-container">
        <img
          src={images[currentIndex]?.image}
          alt={item.title}
          className="modal-image"
        />
      </div>

      {/* INFO */}
      <div className="modal-info">
        <h2>{item.title}</h2>

        <p>
          {images[currentIndex]?.description || item.description}
        </p>

        {/* BOTÓN WHATSAPP */}
        <a
          href={`https://wa.me/523332560059?text=Hola, me interesa ${item.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="modal-button">
            Cotizar por WhatsApp
          </button>
        </a>

        {/* CONTROLES */}
        {images.length > 1 && (
          <div className="carousel-controls">
            <button onClick={prevImage} className="carousel-button">
              ❮
            </button>

            <span>
              {currentIndex + 1} / {images.length}
            </span>

            <button onClick={nextImage} className="carousel-button">
              ❯
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};