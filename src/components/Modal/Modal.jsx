import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './ImageModal.css';

export const ImageModal = ({ isOpen, item, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const nextImage = () => {
    if (item?.images) {
      setCurrentIndex((prevIndex) => 
        prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (item?.images) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
      );
    }
  };

  if (!isOpen || !item) {
    return null;
  }

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
      
      {item.images && item.images.length > 0 ? (
        <div className="carousel-container">
          <img 
            src={item.images[currentIndex]?.image} 
            alt={item.title} 
            className="modal-image"
          />
          <p className="image-description">
            {item.images[currentIndex]?.description || item.description}
          </p>
          
          {item.images.length > 1 && (
            <div className="carousel-controls">
              <button onClick={prevImage} className="carousel-button">❮</button>
              <span>{currentIndex + 1}/{item.images.length}</span>
              <button onClick={nextImage} className="carousel-button">❯</button>
            </div>
          )}
        </div>
      ) : (
        <>
          <img src={item.image} alt={item.title} className="modal-image" />
          <p className="image-description">{item.description}</p>
        </>
      )}
    </Modal>
  );
};