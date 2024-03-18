// CarTypeSelector.tsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/CarTypeSelector.module.css'; // Ensure the path is correct

const CarTypeSelector = ({ onCategoryChange }) => {
  const [carTypes, setCarTypes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCarTypes = async () => {
      try {
        const response = await fetch('http://110.78.166.170/api/typecars');
        const data = await response.json();
        if (data.success) {
          setCarTypes(data.data); // Assuming your API response has a 'data' field with the car types
        }
      } catch (error) {
        console.error('Error fetching car types:', error);
      }
    };

    fetchCarTypes();
  }, []);

  const handleArrowClick = (direction) => {
    let newIndex = currentIndex; // Start with the current index
    if (direction === 'left') {
      newIndex = Math.max(currentIndex - 1, 0); // Decrement index but don't go below 0
    } else if (direction === 'right') {
      newIndex = Math.min(currentIndex + 1, carTypes.length - 3); // Increment index but don't go beyond the length of the array
    }
    console.log(`New index after clicking ${direction} arrow: ${newIndex}`);
    setCurrentIndex(newIndex); // Update state to the new index
  };

  return (
    <div className={styles.carTypeSelector}>
      {currentIndex > 0 && (
        <button className={`${styles.navArrow} ${styles.left}`} onClick={() => handleArrowClick('left')}>
          <img src="/images/left-arrow.webp" alt="Left Arrow" />
        </button>
      )}

      <div className={styles.carTypeSelectorInner} style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
        {carTypes.map((type, index) => (
          <div key={type.id} className={styles.carTypeButton} onClick={() => onCategoryChange(type.name)}>
            <img src={`http://110.78.166.170/webp/imgType/${type.imgType}`} alt={type.name} />
            <span>{type.name}</span>
          </div>
        ))}
      </div>

      {currentIndex < carTypes.length - 3 && (
        <button className={`${styles.navArrow} ${styles.right}`} onClick={() => handleArrowClick('right')}>
          <img src="/images/right-arrow.webp" alt="Right Arrow" />
        </button>
      )}
    </div>
  );
};

export default CarTypeSelector;
