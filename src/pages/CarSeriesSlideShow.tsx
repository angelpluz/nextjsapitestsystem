import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/CarSeriesSlideShow.module.css';

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
        if (!data.success) {
          throw new Error('API call was not successful');
        }
        setSeries(data.data);
        setCurrentIndex(Math.floor(data.data.length / 2)); // Re-center after data is fetched
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const goToSlide = (index) => {
    let newCurrentIndex = index % series.length;
    if (newCurrentIndex < 0) {
      newCurrentIndex += series.length; // wrap to the end if index is negative
    }
    setCurrentIndex(newCurrentIndex);
  };

  if (error) {
    return <p>Error loading car series: {error}</p>;
  }

  if (!series.length) {
    return <p>No car series available.</p>;
  }

  // Calculate the offset to show the current slide in the center
  const offset = -(currentIndex * (100 / series.length));

  return (
    <div className={styles.slideshowContainer}>
      <button className={styles.prev} onClick={() => goToSlide(currentIndex - 1)}>
        &lt;
      </button>

      <div className={styles.slidesWindow} style={{ transform: `translateX(${offset}%)` }}>
        {series.map((car, index) => {
              const isActive = index === currentIndex;
              let slideClass = isActive ? `${styles.slide} ${styles.active}` : styles.slide;

          return (
            <div key={car.id} className={slideClass}>
              <Link href={`/carseries/${car.id}`}>
                  <img
                    src={`http://toyotathonburi.co.th/webp/imgThumbnail/${car.imgThumbnail}`}
                    alt={car.name}
                    className={isActive ? styles.activeImage : ''}
                  />
              </Link>
              {isActive && (
                <div className={styles.slideDetails}>
                  <h2 className={styles.slideInfo}>{car.name}</h2>
                  <p className={styles.slidePrice}>
                    Price: {car.price.toLocaleString()} THB
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button className={styles.next} onClick={() => goToSlide(currentIndex + 1)}>
        &gt;
      </button>
    </div>
  );
};

export default CarSeriesSlideShow;
