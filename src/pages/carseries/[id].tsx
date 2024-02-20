// pages/carseries/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/CarSeriesPage.module.css'; // Verify this path is correct

const CarSeriesDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [carSeries, setCarSeries] = useState(null);
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [modelDetails, setModelDetails] = useState({
    modelName: '',
    price: 0,
    colors: [],
    srcImgColor: ''
  });
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorSelect = (color) => {
    console.log(color); // Log the selected color to debug
    setSelectedColor(color);
  };

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    fetch(`http://toyotathonburi.co.th/api/series/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.success) {
          setCarSeries(data);
          setSelectedModelId(data.model[0].id);
          // Assuming the first model's data is available and includes a price
          setModelDetails({
            ...modelDetails,
            modelName: data.model[0].name,
            price: data.model[0].price,
            colors: data.model[0].colors || [], // Provide an empty array as a fallback
            srcImgColor: data.model[0].srcImgColor
          });
        } else {
          setError('Car series data not found');
        }
      })
      .catch((error) => {
        setError(`Error fetching car series data: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!selectedModelId) return;

    setIsLoading(true);
    fetch(`http://toyotathonburi.co.th/api/model/${selectedModelId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.success) {
          setModelDetails({
            modelName: data.modelName,
            price: data.price,
            colors: data.Color || [], // Provide an empty array as a fallback
            srcImgColor: data.srcImgColor
          });
          setSelectedColor(data.Color && data.Color.length > 0 ? data.Color[0] : null);
        } else {
          setError('Model data not found');
        }
      })
      .catch((error) => {
        setError(`Error fetching model details: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedModelId]);

  const handleSelectModel = (modelId) => {
    setSelectedModelId(modelId);
    setDropdownOpen(false);
  };

  const renderGallery = (gallery) => {
    return Object.entries(gallery).map(([sectionTitle, images]) => (
      <div key={sectionTitle}>
        <h3>{sectionTitle}</h3>
        {images.map((image, index) => (
          <img
            key={index}
            src={`http://toyotathonburi.co.th/${carSeries.srcGallery}${image.filename}`}
            alt={`${sectionTitle} ${index}`}
            className={styles.galleryImage}
          />
        ))}
      </div>
    ));
  };

  return (
    
    <div className={styles.container}>
      <h1 className={styles.title}>{carSeries?.series}</h1>
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton} onClick={() => setDropdownOpen(!dropdownOpen)}>
          {modelDetails?.modelName || 'Select Model'}
          <span className={styles.dropdownArrow}>{dropdownOpen ? '▲' : '▼'}</span>
        </button>
        {dropdownOpen && (
          <div className={styles.dropdownContent}>
            {carSeries?.model.map((model) => (
              <div
                key={model.id}
                onClick={() => handleSelectModel(model.id)}
                className={styles.dropdownItem}
              >
                {model.name}
              </div>
            ))}
          </div>
        )}
      </div>
 
      
      {selectedColor && (
    <div className={styles.carImageContainer}>
      <img
        src={`http://toyotathonburi.co.th/${modelDetails.srcImgColor}${selectedColor.filename}`}
        alt={selectedColor.colorname}
        className={styles.carImage}
      />
    </div>
  )}
       {modelDetails.colors && modelDetails.colors.length > 0 && (
  <div className={styles.colorSelector}>
    {modelDetails.colors.map((color, index) => (
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
)}
  {modelDetails && (
  <div className={styles.modelDetails}>
    <h2>{modelDetails.modelName}</h2>
    {/* Use optional chaining to safely access modelDetails.price */}
    <p>Price: {modelDetails.price?.toLocaleString('en-US')} THB</p>
    {/* Include other details you want to display about the model here */}
  </div>
)}
  
        {/* ... rest of the component ... */}
  
        {carSeries?.gallery && (
          <div className={styles.galleryContainer}>
            {renderGallery(carSeries.gallery)}
          </div>
        )}
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </div>
    );
  };
  // Adjust the export statement according to your project structure
  
  export default CarSeriesDetailPage;
