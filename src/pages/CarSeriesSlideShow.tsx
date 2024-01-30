import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/CarSeriesSlideShow.module.css';

const CarSeriesSlideShow = () => {
  const [series, setSeries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the car series data from the API
    fetch('http://toyotathonburi.co.th/api/series')
      .then(response => {
        if (!response.ok) {
          throw new Error(`API response status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (!data.success) {
          throw new Error('API call was not successful');
        }
        setSeries(data.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  // Function to get a valid index within the bounds of the series array
  const getValidIndex = (index, length) => {
    return ((index % length) + length) % length; // Correct for negative values
  };

  // Event handlers to navigate to the previous and next slides
  const goToPrev = () => {
    setCurrentIndex(prevIndex => getValidIndex(prevIndex - 1, series.length));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => getValidIndex(prevIndex + 1, series.length));
  };

  // Display an error message if the API call failed
  if (error) {
    return <p>Error loading car series: {error}</p>;
  }

  // Display a message if no car series are available
  if (!series || series.length === 0) {
    return <p>No car series available.</p>;
  }

  return (
    <div className={styles.slideshowContainer}>
      <button className={styles.prev} onClick={goToPrev}>&lt;</button>
      <div className={styles.slidesWindow}>
        {series.map((car, index) => {
          const isPrev = index === getValidIndex(currentIndex - 1, series.length);
          const isNext = index === getValidIndex(currentIndex + 1, series.length);
          let slideClass = `${styles.slide} ${index === currentIndex ? styles.active : ''} ${isPrev ? styles.prevSlide : ''} ${isNext ? styles.nextSlide : ''}`;

          return (
            <div key={car.id} className={slideClass}>
              <Link href={`/carseries/${car.id}`}>
                <img src={`http://toyotathonburi.co.th/webp/imgThumbnail/${car.imgThumbnail}`} alt={car.name} className={styles.image} />
              </Link>
              <div className={styles.slideDetails}>
                <h2 className={styles.slideInfo}>{car.name}</h2>
                <p className={styles.slidePrice}>Price: {car.price.toLocaleString()} THB</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className={styles.next} onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default CarSeriesSlideShow;
