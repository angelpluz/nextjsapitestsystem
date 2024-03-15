// pages/carseries/[id].tsx
import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRouter } from 'next/router';
import styles from '../../styles/CarSeriesPage.module.css'; // Verify this path is correct
import ContactEnd from '../../components/ContactEnd';
import GalleryModal from '../../components/GalleryModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import Header from '../../components/Header';
import Link from 'next/link';
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
    engine_size2: '',
    horsepower2: '',
    engine_oil2: '',
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


  const [slidesData, setSlidesData] = useState([]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [philosophy, setPhilosophy] = useState('');
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageClick = (src) => {
    setSelectedImageSrc(src);
    setIsModalOpen(true);
  };
  const [isAdditionalDropdownOpen, setIsAdditionalDropdownOpen] = useState(false);   
  const toggleAdditionalDropdown = () => {
    setIsAdditionalDropdownOpen(!isAdditionalDropdownOpen);
  };
  const handleCloseModal = () => {
    setSelectedImageSrc(null);
    // You would also need to set some state to hide the modal
  };
  const [carSeriesData, setCarSeriesData] = useState([]);
const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const handleColorSelect = (color) => {
    const GalleryModal = ({ src, alt, onClose, carSeries, activeTab }) => {
      if (!src || !carSeries.gallery) return null;
    
      return (
        <div className={styles.modalOverlay} onClick={onClose}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Splide
               options={{
                type: 'loop',
                perPage: 1,
                autoplay: true,
                pauseOnHover: false,
                resetProgress: false,
                arrows: true,
                pagination: false,
                accessibility: true,
                keyboard: true,
              }}
            >
              {carSeries.gallery[activeTab].map((image, index) => (
                <SplideSlide key={index}>
                  <img
                    src={`http://toyotathonburi.co.th/${carSeries.srcGallery}${image.filename}`}
                    alt={`${activeTab} image ${index + 1}`}
                    className={styles.fullWidthImage}
                  />
                </SplideSlide>
              ))}
            </Splide>
            <button className={styles.modalCloseButton} onClick={onClose}>X</button>
          </div>
        </div>
      );
    };
    


    // console.log(color); // Log the selected color to debug
  setSelectedColor(color);
  setModelDetails(prevDetails => ({
    ...prevDetails,
    price: color.colorprice // Update the price based on the selected color
  }));
  };
 
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
  
      setIsLoading(true);
  
      try {
        const response = await fetch(`http://toyotathonburi.co.th/api/series/${id}`);
        const data = await response.json();
  
        if (data && data.success && data.model && data.model.length > 0) {
          setCarSeries(data);
          setSelectedModelId(data.model[0].id);
  
          let decodedPhilosophy = '';
          if (data.philosophy) {
          
            // Log the string after unescaping common escape sequences
            const unescapedString = data.philosophy
            .replace(/\\r\\n/g, '<br>')
            .replace(/\\r/g, '<br>')
            .replace(/\\n/g, '<br>')
            .replace(/\\"/g, '"')
            .replace(/\\'/g, "'");
        
  
            try {
              // Try to parse the unescaped string as JSON
              decodedPhilosophy = JSON.parse(unescapedString);
           
            } catch (error) {
         
            }
          }
  
          setPhilosophy(decodedPhilosophy);
          // Set the model details with the latest state
          // ...
        } else {
          setError('Car series data not found');
        }
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [id]);
  const [pdfUrl, setPdfUrl] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
  
      setIsLoading(true);
  
      try {
        const response = await fetch(`http://toyotathonburi.co.th/api/series/${id}`);
        const data = await response.json();
  
        if (data && data.success && data.model && data.model.length > 0) {
          setCarSeries(data);
          setSelectedModelId(data.model[0].id);
  
          // ... other code to handle the fetched data
  
          // Set the PDF URL
          if (data.pdf) {
            setPdfUrl(data.pdf);
          }
  
        } else {
          setError('Car series data not found');
        }
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [id]);
  const [allSeries, setAllSeries] = useState([]);
  
  useEffect(() => {
    const fetchAllSeries = async () => {
      try {
        const response = await fetch('http://toyotathonburi.co.th/api/series'); // Use the correct endpoint to fetch all series
        const data = await response.json();
        if (data && Array.isArray(data.data)) {
          setAllSeries(data.data); // Assuming 'data.data' is the array with your series
          console.log(data.data);
        } else {
          // Handle the case where data.data is not in the expected format
          setError('Unexpected format for series data');
        }
      } catch (error) {
        console.error("Failed to fetch series:", error);
        setError(error.toString()); // Set error state
      }
    };
      const toggleAdditionalDropdown = () => {
      setIsAdditionalDropdownOpen(!isAdditionalDropdownOpen);
    };
    fetchAllSeries();
  }, []);

  useEffect(() => {
    if (!selectedModelId) return;
    setIsLoading(true);
    fetch(`http://toyotathonburi.co.th/api/model/${selectedModelId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.success) {
          const firstColor = data.Color && data.Color.length > 0 ? data.Color[0] : null;
          setModelDetails({
            modelName: data.modelName,
            price: firstColor ? firstColor.colorprice : data.price, // Use colorprice if available
            colors: data.Color || [], // Provide an empty array as a fallback
            engine_type: data.engine_type,
            engine_size: data.engine_size,
            horsepower: data.horsepower,
            engine_oil: data.engine_oil,
            engine_size2: data.engine_size2,
            horsepower2: data.horsepower2,
            engine_oil2: data.engine_oil2,  
            srcImgColor: data.srcImgColor
          
          });
          setSelectedColor(firstColor);
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
  const availableTabs = carSeries?.gallery ? Object.keys(carSeries.gallery).filter(key => carSeries.gallery[key].length > 0) : [];
 
 
  const renderGallery = (gallery) => {
    return gallery[activeTab].map((image, index) => (
<img
  key={index}
  src={`http://toyotathonburi.co.th/${carSeries.srcGallery}${image.filename}`}
  alt={`${activeTab} image ${index + 1}`}
  className={styles.galleryImage}
  onClick={() => handleImageClick(`http://toyotathonburi.co.th/${carSeries.srcGallery}${image.filename}`)}
/>
    ));
  };

  return (
    
    <div className={styles.container}>
  <Header />
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
        style={{ background: color.colorcode }}
        onClick={() => handleColorSelect(color)}
      >
        {/* Color circle button */}
      </button>
    ))}
  </div>
)}
<div className={styles.price}>
  <p>
    <span className={styles.priceText}>ราคา </span>
    <span className={styles.priceValue}>
      {Number(modelDetails.price)?.toLocaleString('en-US')}
    </span>
    <span className={styles.priceText}> บาท</span>
  </p>
</div>
   <div className={styles.buttonContainer}>
   <Link href="/CalculateCar">
        <button className={`${styles.button} ${styles.buttonIcon}`}>
          คำนวณเงินดาวน์
        </button>
        </Link>
        <button className={styles.button}
          onClick={() => window.open('https://page.line.me/plh9039k?openQrModal=true', '_blank', 'noopener,noreferrer')}
        >
          สนใจติดต่อที่ปรึกษา
        </button>
        
      </div>
      <div className={styles.performanceprice}>
  <h1 className={styles.performanceHeading}>PERFORMANCE</h1>
  </div>
<div className={styles.engineSpecs}>
  <div className={styles.specItem}>
    <img src="/images/car-engine_1.png" alt="Engine" className={styles.specImage} />
    <p className={styles.torqueSpec}>
    <span className={styles.horsepowerUnit}> เครื่องยนต์ : </span>
  <span className={styles.horsepowerValue}>{modelDetails.engine_size}</span>
  <span className={styles.horsepowerUnit}> CC </span>
</p>
    <p className={styles.torqueSpec1}>{modelDetails.engine_size2}</p> {/* Apply the new style here */}
  
  </div>
  <div className={styles.specItem}>
    <img src="/images/gauge_0.png" alt="Horsepower" className={styles.specImage} />
    <p className={styles.torqueSpec}>
  <span className={styles.horsepowerValue}>{modelDetails.horsepower}</span>
  <span className={styles.horsepowerUnit}> แรงม้า</span>
</p>
    <p className={styles.torqueSpec1}>{modelDetails.horsepower2}</p> {/* Apply the new style here */}
  </div>
  <div className={styles.specItem}>
    <img src="/images/oil_0.png" alt="Oil" className={styles.specImage} />
    <p className={styles.torqueSpec}>
  <span className={styles.horsepowerValue}>{modelDetails.engine_oil}</span>
  <span className={styles.horsepowerUnit}> KM</span>
</p>
     <p className={styles.torqueSpec1}>{modelDetails.engine_oil2}</p> {/* Apply the new style here */}
   
  </div>

</div>

<div>


<div className={styles['stylish-text']} dangerouslySetInnerHTML={{ __html: philosophy }} />
  </div>

<div>


<div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.buttonIcon}`}>
        {pdfUrl && (
  <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="pdfButton">
    <FontAwesomeIcon icon={faFilePdf} /> Download PDF
  </a>
)}
        </button>
        <div className={styles.dropdown1}>
  <button className={styles.dropdown1Button} onClick={toggleAdditionalDropdown}>
    Seriesอื่นๆ
  </button>
  {isAdditionalDropdownOpen && (
    <div className={styles.dropdown1Content}>
      {allSeries.map((series) => (
        <a key={series.id} href={`/carseries/${series.id}`}>{series.name}</a>
      ))}
    </div>
  )}
</div>
</div>
      </div>

  <div className={styles.performanceprice}>
  <h1 className={styles.galleryHeading}>GALLERY</h1>
  </div>

  <h1 className={styles.cardDescriptionz}>{carSeries?.series}</h1>
  {availableTabs.length > 0 && (
  <div className={styles.galleryContainer}>
    <div className={styles.tabs}>
      {availableTabs.map((tab) => (
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
              onClick={() => handleImageClick(`http://toyotathonburi.co.th/${carSeries.srcGallery}${carSeries.gallery[activeTab][0].filename}`)}
            />
          )}
    <div className={styles.galleryGrid}>
            {carSeries.gallery[activeTab]?.slice(1).map((image, index) => ( // Use slice to skip the first image
              <img
                key={index}
                src={`http://toyotathonburi.co.th/${carSeries.srcGallery}${image.filename}`}
                alt={`${activeTab} image ${index + 2}`} // Start from image 2
                className={styles.galleryImage}
                onClick={() => handleImageClick(`http://toyotathonburi.co.th/${carSeries.srcGallery}${image.filename}`)}
              />
            ))}
          </div>
        </div>
      )}
 {selectedImageSrc && (
        <GalleryModal src={selectedImageSrc} alt="Selected Image" onClose={handleCloseModal} />
      )}
      <ContactEnd />
      </div>
      
    );
  };
  // Adjust the export statement according to your project structure
  
  export default CarSeriesDetailPage;