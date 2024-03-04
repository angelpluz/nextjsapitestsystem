// pages/showroom/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/ShowroomPage.module.css';
import ContactEnd from '../../components/ContactEnd';
const ShowroomPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [showroomData, setShowroomData] = useState(null);
  
  useEffect(() => {
    if (id) {
      fetch(`http://toyotathonburi.co.th/api/locations/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setShowroomData(data);
          }
        })
        .catch((error) => {
          console.error('Error fetching showroom data:', error);
        });
    }
  }, [id]);

  if (!showroomData) {
    return <div>Loading...</div>;
  }


  const bannerUrl = `http://toyotathonburi.co.th/${showroomData.bannerShowroom}${showroomData.banner}`;
  
  return (
    <div className={styles.container}>
      {bannerUrl && <img src={bannerUrl} alt={`Showroom at ${showroomData.address}`} className={styles.image} />}
      <h1 className={styles.title}>{showroomData.name}</h1>
      <p className={styles.detail}>{showroomData.address}</p>
    
      <p className={styles.locationTypes}>{showroomData.type.split(',').join(' / ')}</p>
    
      
      {/* Map and phone buttons, similar to before */}
      <div className={styles.buttonContainer}>
        <a href={`tel:${showroomData.tel}`} className={styles.callButton}>
          <span className={styles.icon}>📞</span>
          <span className={styles.phoneNumber}>{showroomData.tel}</span>
        </a>
        <a 
  href={showroomData.link} // Use the 'link' property directly from the API response
  className={styles.mapButton} 
  target="_blank"
  rel="noopener noreferrer"
>
  Google Map
</a>
        <p className={styles.detailTypes}>{showroomData.detail}</p>
      </div>

      {/* Render the additional images */}
      {showroomData.cardImage && showroomData.cardImage.map((card) => (
        <div key={card.id}>
          <img src={`http://toyotathonburi.co.th/${showroomData.cardShowroom}${card.filename}`} 
               alt={card.description} 
               className={styles.cardImage} />
          <p className={styles.cardDescription}>{card.description}</p>
        </div>
      ))}
      
 
      <ContactEnd />
    </div>
    
  );
};

export default ShowroomPage;
