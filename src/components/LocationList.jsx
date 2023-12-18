import React, { useEffect, useState } from 'react';
import styles from '../styles//LocationList.module.css';

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://toyotathonburi.co.th/api/locations')
      .then((response) => response.json())
      .then((data) => {
        setLocations(data.data); // เนื่องจากข้อมูลอยู่ใน property "data"
      })
      .catch((error) => console.error('เกิดข้อผิดพลาด:', error));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>รายการสถานที่</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.website_seq} className={styles.listItem}>
            <div className={styles.locationInfo}>
            <a href={`/showroom/${location.id}`} className={styles.locationTitle}>
  {location.website_name}
</a>
              <p className={styles.locationDetails}>ที่อยู่: {location.address}</p>
                    <div className={styles.typeContainer}>
                {location.type.split(',').map((type, index) => (
                  <span key={index} className={styles.locationTypes}>
                    {type.trim()}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <a href={`tel:${location.tel}`} className={styles.callButton}>
                <span className={styles.icon}>📞</span>
                <span className={styles.phoneNumber}>{location.tel}</span>
              </a>
              <a 
  href={location.website_link} // Use the 'link' property directly from the API response
  className={styles.mapButton} 
  target="_blank"
  rel="noopener noreferrer"
>
  Google Map
</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
