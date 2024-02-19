// pages/carseries/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/CarSeriesPage.module.css'; // ตรวจสอบ path ให้ถูกต้อง

const CarSeriesDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [carSeries, setCarSeries] = useState(null);
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [modelDetails, setModelDetails] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    fetch(`http://toyotathonburi.co.th/api/series/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.success) {
          setCarSeries(data);
          // ตั้งค่า selectedModelId ด้วย ID ของรุ่นรถแรกที่ได้รับ
          setSelectedModelId(data.model[0].id);
          // ดึงข้อมูลรุ่นรถแรกมาแสดง
          setModelDetails({
            modelName: data.model[0].name,
            price: data.model[0].price
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
  const handleSelectModel = (modelId) => {
    setSelectedModelId(modelId);
    setDropdownOpen(false);
  };
  // โค้ดสำหรับ renderGallery และ handleSelectModel ที่คุณมีอยู่แล้ว

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{carSeries?.series}</h1>

      <div className={styles.dropdown}>
        <button className={styles.dropdownButton} onClick={() => setDropdownOpen(!dropdownOpen)}>
          {modelDetails ? modelDetails.modelName : 'Select Model'}
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

      {modelDetails && (
        <>
          <h2>Model: {modelDetails.modelName}</h2>
          <p>Price: {modelDetails.price}</p>
        </>
      )}

      {/* ส่วนของ renderGallery ที่คุณจะใช้เพื่อแสดงภาพถ่ายของรถ */}
      {carSeries?.gallery && (
        <div className={styles.galleryContainer}>
          {renderGallery(carSeries.gallery)}
        </div>
      )}

      {/* ตรวจสอบการโหลดข้อมูลและการแสดงข้อผิดพลาด */}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

    </div>
  );
};

export default CarSeriesDetailPage;
