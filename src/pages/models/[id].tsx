// pages/models/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/ModelDetail.module.css';

const ModelDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [modelDetails, setModelDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetch(`http://toyotathonburi.co.th/api/model/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          if (data.success) {
            setModelDetails(data);
            setSelectedColor(data.Color[0]); // Set the default selected color
          } else {
            setError('Data not found');
          }
        })
        .catch((error) => {
          setIsLoading(false);
          console.error('Fetch error:', error);
          setError(error.toString());
        });
    }
  }, [id]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!modelDetails || !modelDetails.Color) {
    return <div>No model data available.</div>;
  }

  // Now we're sure that modelDetails and modelDetails.Color are available
  const {
    modelName,
    price,
    engine_type,
    engine_size,
    horsepower,
    engine_oil,
    Color,
    srcImgColor
  } = modelDetails;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        {/* <h1>{modelName}</h1> */}
        {/* Add any additional header content */}
      </div>
      <div className={styles.colorSelector}>
        {modelDetails.Color.map((color, index) => (
          <button
            key={index}
            className={styles.colorOption}
            style={{ backgroundColor: color.colorcode }}
            onClick={() => handleColorSelect(color)}
          >
            {/* Color circle button */}
          </button>
        ))}
      </div>
      <div className={styles.carImageContainer}>
        <img
          src={`http://toyotathonburi.co.th/${srcImgColor}${selectedColor?.filename}`}
          alt={selectedColor?.colorname || 'Car image'}
        />
      </div>
      <div className={styles.price}>
        <p>ราคา: {price.toLocaleString()} THB</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.buttonIcon}`}>
          คำนวณเงินดาวน์
        </button>
        <button className={styles.button}>
          สนใจติดต่อที่ปรึกษา
        </button>
      </div>

      <div className={styles.performanceprice}>
  <h1 className={styles.performanceHeading}>PERFORMANCE</h1>

  
  <div className={styles.performanceContainer}></div>
  <div className={styles.engineSpecs}>
  <div className={styles.specItem}>
    <img src="/images/car-engine_1.png" alt="Engine" className={styles.specImage} />
    <p>เครื่องยนต์: {engine_size} L</p>
  </div>
  <div className={styles.specItem}>
    <img src="/images/gauge_0.png" alt="Horsepower" className={styles.specImage} />
    <p>แรงม้า: {horsepower} HP</p>
  </div>
  <div className={styles.specItem}>
    <img src="/images/oil_0.png" alt="Oil" className={styles.specImage} />
    <p> {engine_oil} กม.ต่อลิตร</p>
  </div>
</div>

</div>
    </div>
  );
};


export default ModelDetailPage;
