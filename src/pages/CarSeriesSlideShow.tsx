import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styles from '../styles/CarSeriesSlideShow.module.css';
import Link from 'next/link';

const CarSeriesSlideShow = () => {
  const [series, setSeries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Missing definition of currentIndex
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

  if (error) {
    return <p>Error loading car series: {error}</p>;
  }

  if (!series.length) {
    return <p>Loading car series...</p>;
  }

  return (
    <Splide
    onMoved={(splide, newIndex) => {
      setCurrentIndex(newIndex);
    }}
      options={{
        type: 'loop',
        perPage: 2,
        width: '100%',
        gap: '1rem',
        focus: 'center',
        pagination: false,
        classes: {
          slide: `${styles.splide__slide}`,
          page: `${styles.splide__pagination__page}`,
        },
      }}
      aria-label="Car Series"
    >
      {series.map((car, index) => ( // Added index parameter
        <SplideSlide key={car.id} className={currentIndex === index ? styles.activeSlide : styles.slide}>
          <Link href={`/carseries/${car.id}`} passHref>
          <img
  src={`http://toyotathonburi.co.th/webp/imgThumbnail/${car.imgThumbnail}`}
  alt={car.name}
  className={currentIndex === index ? `${styles.activeImage} ${styles.yourImageClass}` : styles.yourImageClass}
  style={{ width: '100%', display: 'block' }}
/>
          </Link>
          <div className={styles.slideDetails}>
            {/* <h2 className={styles.slideInfo}>{car.name}</h2>
            <p className={styles.slidePrice}>Price: {car.price.toLocaleString()} THB</p> */}
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CarSeriesSlideShow;
