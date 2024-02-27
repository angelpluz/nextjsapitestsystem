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
    engine_type: '',
    engine_size: '',
    horsepower: '',
    engine_oil: '',
    srcImgColor: '',
    philosophy: '',
  });
  const [logoUrl, setLogoUrl] = useState(''); // Add state for the logo URL
  const [activeTab, setActiveTab] = useState('Exterior');
  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };
  const [logo, setLogo] = useState('');
  const renderContent = () => {
    switch (activeTab) {
      case 'Exterior':
        return <div>{/* Content for Exterior */}</div>;
      case 'Interior':
        return <div>{/* Content for Interior */}</div>;
      case 'Performance':
        return <div>{/* Content for Performance */}</div>;
      // Add cases for other tabs...
      default:
        return <div>{/* Default content if needed */}</div>;
    }
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [philosophy, setPhilosophy] = useState('');
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
        if (data && data.success && data.model && data.model.length > 0) {
          setCarSeries(data);
          setSelectedModelId(data.model[0].id);
          
          // Decode philosophy if it exists
          let decodedPhilosophy = '';
          if (data.philosophy) {
         
            try {
              // Parse JSON string
              decodedPhilosophy = JSON.parse(data.philosophy);
              console.log('อันที่ได้:', decodedPhilosophy);
            } catch (error) {
              // If JSON parsing fails, log the error and attempt manual replacement
              console.error('JSON parsing error:', error);
              // Attempt manual replacement on the original data
              try {
                decodedPhilosophy = JSON.parse(data.philosophy.replace(/\\r\\n/g, '<br>').replace(/\\r/g, '<br>').replace(/\\n/g, '<br>').replace(/\\"/g, '"').replace(/\\'/g, "'"));

                console.log('Decoded Philosophy after replacement:', decodedPhilosophy);
              } catch (error) {
                // If the second parsing attempt fails, log the error
                console.error('JSON parsing error after replacement:', error);
              }
            }
          }
          setPhilosophy(decodedPhilosophy);
          // Set the model details with the latest state
          setModelDetails({
            modelName: data.model[0].name,
            price: data.model[0].price,
            colors: data.model[0].colors || [],
            engine_type: data.engine_type,
            engine_size: data.engine_size,
            horsepower: data.horsepower,
            engine_oil: data.engine_oil,
            srcImgColor: data.model[0].srcImgColor,
            philosophy: decodedPhilosophy
          });

          setLogoUrl(`http://toyotathonburi.co.th/${data.srcLogo}${data.logo}`);
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
            engine_type: data.engine_type,
            engine_size: data.engine_size,
            horsepower: data.horsepower,
            engine_oil: data.engine_oil,
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
    return gallery[activeTab].map((image, index) => (
      <img
        key={index}
        src={`http://toyotathonburi.co.th/${carSeries.srcGallery}${image.filename}`}
        alt={`${activeTab} image ${index + 1}`}
        className={styles.galleryImage}
      />
    ));
  };
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
    
    <div className={styles.container}>



      <h1 className={styles.title}>{carSeries?.series}</h1>
      <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={() => setDropdownOpen(!dropdownOpen)}>
  <span className={styles.leftAlignText}>เลือกรุ่นย่อย :</span>
  <span className={styles.centerAlignText}>
  {modelDetails?.modelName || 'Select Model'}
</span>
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
     {carSeries && (
        <img
          src={`http://toyotathonburi.co.th/${carSeries.srcLogo}${carSeries.logo}`}
          alt="Car Series Logo"
          className={styles.logo}
        />
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
 <div className={styles.price}>
   <p>ราคา {modelDetails.price?.toLocaleString('en-US')} บาท</p>
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
  </div>
<div className={styles.engineSpecs}>
  <div className={styles.specItem}>
    <img src="/images/car-engine_1.png" alt="Engine" className={styles.specImage} />
    <p>เครื่องยนต์: {modelDetails.engine_size} CC</p>
  </div>
  <div className={styles.specItem}>
    <img src="/images/gauge_0.png" alt="Horsepower" className={styles.specImage} />
    <p>แรงม้า: {modelDetails.horsepower} แรงม้า</p>
  </div>
  <div className={styles.specItem}>
    <img src="/images/oil_0.png" alt="Oil" className={styles.specImage} />
    <p> {modelDetails.engine_oil} KM</p>
  </div>

</div>
<div dangerouslySetInnerHTML={{ __html: philosophy }} />

  
        {carSeries?.gallery && (
  <div className={styles.galleryContainer}>
    <div className={styles.tabs}>
      {['Exterior', 'Interior', 'Performance', 'Safety', 'Utility'].map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
    {carSeries.gallery[activeTab] && carSeries.gallery[activeTab].length > 0 && (
      <img
        src={`http://toyotathonburi.co.th/${carSeries.srcGallery}${carSeries.gallery[activeTab][0].filename}`}
        alt={`${activeTab} image 1`}
        className={styles.fullWidthImage} // Ensure this class is defined in your CSS
      />
    )}
    <div className={styles.galleryGrid}>
      {carSeries.gallery[activeTab]?.slice(1).map((image, index) => ( // Use slice to skip the first image
        <img
          key={index}
          src={`http://toyotathonburi.co.th/${carSeries.srcGallery}${image.filename}`}
          alt={`${activeTab} image ${index + 2}`} // Start from image 2
          className={styles.galleryImage}
        />
      ))}
    </div>
  </div>
)}
  
      </div>
      
    );
  };
  // Adjust the export statement according to your project structure
  
  export default CarSeriesDetailPage;