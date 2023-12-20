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
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (data.success && data.Color && data.Color.length > 0) {
            setModelDetails(data);
            setSelectedColor(data.Color[0]); // Set the default selected color
          } else {
            setError('Data not found');
          }
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          setError(error.toString());
        })
        .finally(() => {
          setIsLoading(false); // Set loading to false when fetch is complete or fails
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
  const { modelName, price, srcImgColor } = modelDetails;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1>{modelName}</h1>
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
        <p>Price: {price.toLocaleString()} THB</p>
      </div>
      {/* ... performance and specs buttons ... */}
    </div>
  );
};

export default ModelDetailPage;
