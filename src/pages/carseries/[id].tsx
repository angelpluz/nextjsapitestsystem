// pages/carseries/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/CarSeriesPage.module.css'; // Make sure you have this CSS module

const CarSeriesDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [carSeries, setCarSeries] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (id) {
      fetch(`http://toyotathonburi.co.th/api/series/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.success) {
            setCarSeries(data);
          } else {
            setError('Data not found');
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching car series data:', error);
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading car series: {error}</div>;
  }

  if (!carSeries) {
    return <div>No car series data available.</div>;
  }

  // Function to render gallery images
  const renderGallery = (gallery) => {
    return Object.entries(gallery).map(([sectionTitle, images]) => (
      <div key={sectionTitle}>
        <h3>{sectionTitle}</h3>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`http://toyotathonburi.co.th/${carSeries.srcGallery}${image.filename}`}
              alt={`${sectionTitle} ${index}`}
              className={styles.galleryImage}
            />
            <p>{`${sectionTitle} image ${index + 1}`}</p>
          </div>
        ))}
      </div>
    ));
  };

  // Render car series data
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{carSeries.series}</h1>
      <img src={`http://toyotathonburi.co.th/${carSeries.srcLogo}${carSeries.logo}`} alt="Logo" className={styles.logo} />
      <div className={styles.modelList}>
        {carSeries.model.map((model) => (
          <p key={model.id} className={styles.model}>{model.name}</p>
        ))}
      </div>
      {carSeries.philosophy ? <p>{carSeries.philosophy}</p> : null}
      <div className={styles.galleryContainer}>
        {carSeries.gallery ? renderGallery(carSeries.gallery) : null}
      </div>
    </div>
  );

};

export default CarSeriesDetailPage;
