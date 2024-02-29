import React from 'react';
import styles from '../styles/GalleryModal.module.css'; // Path to your CSS module for styling

const GalleryModal = ({ src, alt, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className={styles.modalImage} />
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default GalleryModal;