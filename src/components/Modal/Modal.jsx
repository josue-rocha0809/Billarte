import React from 'react';
import Modal from 'react-modal';
import './ImageModal.css'; // Estilos personalizados

// Configuración inicial para accesibilidad (en tu archivo main.jsx o App.jsx)
// Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false} // Solo si no configuraste setAppElement
    >
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <img src={imageUrl} alt="Vista previa" className="modal-image" />
    </Modal>
  );
};