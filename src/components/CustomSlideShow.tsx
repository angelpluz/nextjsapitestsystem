import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styles from '../styles/CarsSlideShowCustom.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

const CarSeriesSlideShow = () => {
  const [series, setSeries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const [activeSeriesId, setActiveSeriesId] = useState(null);
  const [seriesDetails, setSeriesDetails] = useState(null);
  const [selectedModelId, setSelectedModelId] = useState("");
  const [price, setPrice] = useState(null);
  const [promotion, setPromotion] = useState(null);
  const [isPromotionSelected, setIsPromotionSelected] = useState(false);
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
        // If the series data is not empty, set the active series to the first one
        if (data.data.length > 0) {
          setCurrentIndex(0); // Since array is 0 indexed, first element is at index 0
          fetchSeriesDetails(data.data[0].id); // Fetch details for the first series
        }
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  // Function to fetch additional details for the active car series
  const fetchSeriesDetails = (activeId) => {
    fetch(`http://110.78.166.170/api/series_2/${activeId}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setSeriesDetails(data.model);
          if (data.model && data.model.length > 0) {
            // Assuming the first model is the default selected
            setSelectedModelId(data.model[0].id.toString());
            // If the price is at the same level as model, use the following line
            setPrice(data.model[0].price); // Update the price for the first model
            fetchPromotionData(activeId);
          }
        } else {
          throw new Error('Failed to fetch series details');
        }
      })
      .catch(error => {
        setError(error.message);
      });
  };
  useEffect(() => {
    if (activeSeriesId) {
      fetchSeriesDetails(activeSeriesId);
    }
  }, [activeSeriesId]); 
  // Call fetchSeriesDetails when the active slide changes
  const handleSlideChange = (splide, newIndex) => {
    setCurrentIndex(newIndex);
    const activeId = series[newIndex]?.id; // Use optional chaining in case series is empty
    setActiveSeriesId(activeId); // Update activeSeriesId
    if (activeId) {
      fetchSeriesDetails(activeId); // Fetch additional details for the active slide
    }
  };
  const handleModelChange = (event) => {
    const modelId = event.target.value;
    setSelectedModelId(modelId);
    const selected = seriesDetails.find(model => model.id.toString() === modelId);
    if (selected) {
      setPrice(selected.price); // Set the selected model's price
    }
  };


  const fetchPromotionData = async (seriesId) => {
    try {
      const promoResponse = await fetch(`http://110.78.166.170/api/pro_series/${seriesId}`);
      const promoData = await promoResponse.json();
      if (promoData.success && promoData.data.length > 0) {
        setPromotion(promoData.data[0]);
      } else {
        setPromotion(null); // No promotion found for this series
      }
    } catch (promoError) {
      // Handle errors for promotion fetch here
      console.error(promoError);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsPromotionSelected(event.target.checked);
    // Perform other actions here if necessary, such as sending data to the backend
  };
  if (error) {
    return <p>Error loading car series: {error}</p>;
  }

  if (!series.length) {
    return <p>Loading car series...</p>;
  }

  return (
    <div className={styles.header_}>
  
   
      <h2 className={styles.header}>เลือกรุ่นที่คุณสนใจ</h2> {/* Header added here */}
      <Splide
        onMoved={handleSlideChange}
        options={{
          type: 'loop',
          perMove: 1,
          perPage: 2,
          height: '10rem',
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
         
              <img
                src={`http://110.78.166.170/webp/imgThumbnail/${car.imgThumbnail}`}
                alt={car.name}
                className={currentIndex === index ? `${styles.activeImage} ${styles.yourImageClass}` : styles.yourImageClass}
                onClick={() => fetchSeriesDetails(car.id)} // Fetch additional details on image click as well
              />
         
            <div className={styles.slideDetails}>
              <h2 className={styles.slidePrice}><b>{car.name}</b></h2>
              {/* <h3 className={styles.slideDetail}>เริ่มต้น {car.price.toLocaleString()} บาท</h3> */}
            </div>
          </SplideSlide>
        ))}
      </Splide>
     
      <div className={styles.customDropdownWrapper10}>
  {seriesDetails && (
    <select 
      className={styles.customDropdownWrapper}
      value={selectedModelId} 
      onChange={handleModelChange}
    >
      <option value="">เลือกรุ่นรถ</option>
      {seriesDetails.map((model) => (
        <option key={model.id} value={model.id}>
          {model.name}
        </option>
      ))}
    </select>
  )}
 <div>
  {selectedModelId && seriesDetails && (
    <>
    
      <p className={styles.price2}>ราคาเริ่มต้นที่: {price?.toLocaleString()} บาท</p>
    </>
  )}
</div>
{promotion && (
        <div className={styles.promotionContainer}>
          <h2 className={styles.trapezoidButton}>โปรโมชั่นประจำเดือน</h2>
          <label className={styles.customCheckboxLabel}>
        <input
          type="checkbox"
          checked={isPromotionSelected}
          onChange={handleCheckboxChange}
          className={styles.customCheckbox}
        />
        สนใจโปรโมชั่นนี้
      </label>
      {isPromotionSelected && <p>คุณได้เลือกโปรโมชั่นนี้</p>}
<h2 className={styles.title}>{promotion.title}</h2>
<p className={styles.subtitle}>{promotion.subtitle}</p>
          <img
            src={`http://110.78.166.170/${promotion.srcImg}${promotion.thumbnail}`}
            alt="Promotion"
          />
                <div className={styles.footer}>
        <Link href={`/promotiondetail/${promotion.id}`} key={promotion.id}>
          <span className={styles.button}>
            ดูรายละเอียด <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </Link>
      </div>
          {/* You can add a link or button to the promotion details page if necessary */}
        </div>
        
      )}
</div>
</div>
 
    
  );
};

export default CarSeriesSlideShow;
