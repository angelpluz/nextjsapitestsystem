import React from 'react';
import styles from '../styles/ModelDetail.module.css';

const ColorSelector = ({ colors, handleColorSelect }) => {
  return (
    <div className={styles.colorSelector}>
      {colors.map((color, index) => (
        <button
          key={index}
          className={styles.colorOption}
          style={{ backgroundColor: color.colorcode }}
          onClick={() => handleColorSelect(color)}
        >
          {/* Color circle button */}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;