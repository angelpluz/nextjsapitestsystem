import React, { useState, useEffect } from 'react'; // Corrected import statement
import styles from '../styles/CarSeriesSlideShow.module.css';

// Add any additional imports you might need

const CarSeriesSlideShow = () => {
  const [series, setSeries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://toyotathonburi.co.th/api/series')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API response status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('API Response:', data);  // Log the response
        if (!data.success) {
          throw new Error('API call was not successful');
        }
        setSeries(data.data);
      })
      .catch((error) => {
        console.error('Error fetching car series:', error);
        setError(error.message);
      });
  }, []);

  const goToPrev = () => {
    // Update currentIndex to the previous item
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? series.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    // Update currentIndex to the next item
    const isLastSlide = currentIndex === series.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (error) {
    return <p>Error loading car series: {error}</p>;
  }

  if (!series || series.length === 0) {
    return <p>No car series available.</p>;
  }

  return (
<div className={styles.slideshowContainer}>
  {series.map((car, index) => (
    <div
      className={`${styles.slide} ${currentIndex === index ? styles.active : ''}`}
      key={car.id}
    >
          
          <img src={`http://toyotathonburi.co.th/webp/imgThumbnail/${car.imgThumbnail}`} alt={car.name} />
          <h2 className={styles.slideInfo}>{car.name}</h2>
    <p className={styles.slidePrice}>Price: {car.price.toLocaleString()} THB</p>
        </div>
      ))}
 <button className={styles.prev} onClick={goToPrev}>&lt;</button>
  <button className={styles.next} onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default CarSeriesSlideShow;
