// components/SlideComponent.tsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/SlideIndex.module.css';
const SlideComponent = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch slides data
    fetch(`http://toyotathonburi.co.th/api/slides`)
      .then((response) => response.json())
      .then((data) => {
        setSlides(data.data); // set the data array to the slides state
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error);
      });
  }, []);

  const goToPrev = () => {
    setCurrentIndex((oldIndex) => {
      if (oldIndex === 0) {
        return slides.length - 1;
      }
      return oldIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((oldIndex) => (oldIndex + 1) % slides.length);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.slideshowContainer}>
      <button className={styles.prev} onClick={goToPrev}>&lt;</button>
      <button className={styles.next} onClick={goToNext}>&gt;</button>
      {slides.map((slide, index) => (
  <div key={index} className={`${styles.slide} ${currentIndex === index ? styles.active : ''}`}>
    <h2 className={styles.slideInfo}></h2>
    <img src={`http://toyotathonburi.co.th/${slide.srcImgColor}${slide.desktop}`} alt={slide.description} />
  </div>
))}
    </div>
  );
};

export default SlideComponent;