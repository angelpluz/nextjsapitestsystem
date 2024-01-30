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
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const getValidIndex = (index, length) => {
    return ((index % length) + length) % length; // Correct for negative values
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => getValidIndex(prevIndex - 1, series.length));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => getValidIndex(prevIndex + 1, series.length));
  };

  if (error) {
    return <p>Error loading car series: {error}</p>;
  }

  if (!series || series.length === 0) {
    return <p>No car series available.</p>;
  }

  // Determine the previous and next slide indices
  const prevIndex = getValidIndex(currentIndex - 1, series.length);
  const nextIndex = getValidIndex(currentIndex + 1, series.length);

  return (
    <div className={styles.slideshowContainer}>
      <button className={styles.prev} onClick={goToPrev}>&lt;</button>
      <div className={styles.slidesWindow}>
        {series.map((car, index) => {
          let slideClass = `${styles.slide} `;
          if (index === currentIndex) {
            slideClass += `${styles.active}`;
          } else if (index === prevIndex || index === nextIndex) {
            slideClass += `${styles.dim}`;
          }

          return (
            <div key={`slide-${car.id}`} className={slideClass}>
              <Link href={`/carseries/${car.id}`}>
                <img src={`http://toyotathonburi.co.th/webp/imgThumbnail/${car.imgThumbnail}`} alt={car.name} className={styles.image} />
              </Link>
              {index === currentIndex && (
                <div className={styles.slideDetails}>
                  <h2 className={styles.slideInfo}>{car.name}</h2>
                  <p className={styles.slidePrice}>Price: {car.price.toLocaleString()} THB</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button className={styles.next} onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default CarSeriesSlideShow;
