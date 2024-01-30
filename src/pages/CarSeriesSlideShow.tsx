import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/CarSeriesSlideShow.module.css';

const CarSeriesSlideShow = () => {
  const [series, setSeries] = useState([]);
  // Initially set the currentIndex in the middle of the series array
  const [currentIndex, setCurrentIndex] = useState(Math.floor(series.length / 2));
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
        if (!data.success) {
          throw new Error('API call was not successful');
        }
        setSeries(data.data);
        // Center the middle item if it's the first load
        if (series.length === 0) {
          setCurrentIndex(Math.floor(data.data.length / 2));
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const goToSlide = (index) => {
    const validIndex = ((index % series.length) + series.length) % series.length;
    setCurrentIndex(validIndex);
  };

  if (error) {
    return <p>Error loading car series: {error}</p>;
  }

  if (!series.length) {
    return <p>Loading car series...</p>;
  }

  const offset = -((currentIndex - 1) * (100 / 3)); // for 3 slides, adjust the denominator as needed

  return (
    <div className={styles.slideshowContainer}>
      <button className={styles.prev} onClick={() => goToSlide(currentIndex - 1)}>&lt;</button>
      <div className={styles.slidesWindow} style={{ transform: `translateX(${offset}%)` }}>
        {series.map((car, index) => {
          const isActive = index === currentIndex;
          const slideClass = isActive ? `${styles.slide} ${styles.active}` : styles.slide;

          return (
            <div key={car.id} className={slideClass}>
              <Link href={`/carseries/${car.id}`}>
                <img
                  src={`http://toyotathonburi.co.th/webp/imgThumbnail/${car.imgThumbnail}`}
                  alt={car.name}
                  className={isActive ? styles.activeImage : ''}
                />
              </Link>
              <div className={styles.slideDetails}>
                <h2 className={styles.slideInfo}>{car.name}</h2>
                <p className={styles.slidePrice}>Price: {car.price.toLocaleString()} THB</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className={styles.next} onClick={() => goToSlide(currentIndex + 1)}>&gt;</button>
    </div>
  );
};

export default CarSeriesSlideShow;
