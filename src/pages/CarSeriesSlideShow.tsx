import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/CarSeriesSlideShow.module.css';

const CarSeriesSlideShow = () => {
  const [series, setSeries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Start from the first item
  const [offset, setOffset] = useState(0); // The offset for the translateX
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
        // Initial offset to center the first item (assuming it's the middle of three)
        setOffset(-33.3333); // This would be adjusted if you have different starting conditions
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const getValidIndex = (index, length) => {
    if (index < 0) {
      return length - 1;
    } else if (index >= length) {
      return 0;
    }
    return index;
  };

  const goToSlide = (index) => {
    const newIndex = getValidIndex(index, series.length);
    setCurrentIndex(newIndex);

    // Update the offset to center the new index
    const newOffset = newIndex * 33.3333;
    setOffset(newOffset);
  };

  if (error) {
    return <p>Error loading car series: {error}</p>;
  }

  if (!series.length) {
    return <p>No car series available.</p>;
  }

  return (
    <div className={styles.slideshowContainer}>
      <button className={styles.prev} onClick={() => goToSlide(currentIndex - 1)}>&lt;</button>
      <div className={styles.slidesWindow} style={{ transform: `translateX(-${offset}%)` }}>
        {series.map((car, index) => {
          let slideClass = styles.slide;
          if (index === currentIndex) {
            slideClass += ` ${styles.active}`;
          }
          return (
            <div key={car.id} className={slideClass}>
              <Link href={`/carseries/${car.id}`}>
                <img src={`http://toyotathonburi.co.th/webp/imgThumbnail/${car.imgThumbnail}`} alt={car.name} />
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
