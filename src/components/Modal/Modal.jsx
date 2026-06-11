import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./ImageModal.css";

export const ImageModal = ({ isOpen, item, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) setCurrentIndex(0);
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const images = item?.images?.length
    ? item.images
    : item?.image
    ? [{ image: item.image, description: item.description }]
    : [];

  const next = () => setCurrentIndex((p) => (p === images.length - 1 ? 0 : p + 1));
  const prev = () => setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <button className="close-button" onClick={onClose} aria-label="Cerrar">
        ✕
      </button>

      {/* IMAGE */}
      <div className="modal-image-container">
        <img
          src={images[currentIndex]?.image}
          alt={item.title}
          className="modal-image"
          loading="eager"
        />
      </div>

      {/* INFO */}
      <div className="modal-info">
        <p className="modal-collection-label">Billarte — Colección Premium</p>

        <h2>{item.title}</h2>

        <div className="modal-divider" />

        <p>{images[currentIndex]?.description || item.description}</p>

        <a
          href={`https://wa.me/523329833915?text=Hola, me interesa la ${item.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="modal-button">Cotizar por WhatsApp</button>
        </a>

        {images.length > 1 && (
          <div className="carousel-controls">
            <button onClick={prev} className="carousel-button" aria-label="Anterior">&#10094;</button>
            <span>{currentIndex + 1} / {images.length}</span>
            <button onClick={next} className="carousel-button" aria-label="Siguiente">&#10095;</button>
          </div>
        )}
      </div>
    </Modal>
  );
};
