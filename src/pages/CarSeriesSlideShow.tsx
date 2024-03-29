import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styles from '../styles/CarSeriesSlideShow.module.css';
import Link from 'next/link';
import Header from '../components/Header';
const CarSeriesSlideShow = () => {
  const [series, setSeries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://110.78.166.170/api/series')
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

  if (error) {
    return <p>Error loading car series: {error}</p>;
  }

  if (!series.length) {
    return <p>Loading car series...</p>;
  }

  return (
    <div className={styles.header_}>
       <Header />
      <h2 className={styles.header}>รุ่นรถยนต์โตโยต้า</h2> {/* Header added here */}
      <Splide
        onMoved={(splide, newIndex) => {
          setCurrentIndex(newIndex);
        }}
        options={{
          type: 'loop',
          perMove: 1,
          perPage: 2,
          height: '15rem',
          focus: 'center',
          gap: '1rem',
          pagination: false,
          classes: {
            slide: `${styles.splide__slide}`,
            page: `${styles.splide__pagination__page}`,
          },
        }}
        aria-label="Car Series"
      >
        {series.map((car, index) => (
          <SplideSlide key={car.id} className={currentIndex === index ? styles.activeSlide : styles.slide}>
            <Link href={`/carseries/${car.id}`} passHref>
              <img
                src={`http://110.78.166.170/webp/imgThumbnail/${car.imgThumbnail}`}
                alt={car.name}
                className={currentIndex === index ? `${styles.activeImage} ${styles.yourImageClass}` : styles.yourImageClass}
              />
            </Link>
            <div className={styles.slideDetails}>
            <h2 className={styles.slidePrice}><b>{car.name}</b></h2>
       
            <h3 className={styles.slideDetail}>เริ่มต้น {car.price.toLocaleString()} บาท</h3>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CarSeriesSlideShow;
