import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styles from '../styles/SlideIndex.module.css';

const SlideComponent = () => {
  const [slides, setSlides] = useState([]);
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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.slideshowContainer_}>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          arrows: true,
          pagination: false,
          accessibility: true, // เพิ่ม option สำหรับการเข้าถึง
          keyboard: true, // เพิ่ม option สำหรับการใช้งานคีย์บอร์ด
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index} role="tabpanel">
             <div className={styles.slideContent}>
              <img src={`http://toyotathonburi.co.th/${slide.srcImgColor}${slide.mobile}`} alt={slide.description} />
              <button className={styles.detailButton}>รายละเอียด</button>
            </div>
          </SplideSlide>
        ))}
      </Splide>

    </div>
  );
};

export default SlideComponent;
