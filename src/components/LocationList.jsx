import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles//LocationList.module.css';
import { FaPhone } from 'react-icons/fa';

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
    <h2 className={styles.header}>โชว์รูม</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.website_seq} className={styles.listItem}>
            <div className={styles.locationInfo}>
            <a href={`/showroom/${location.id}`} className={styles.locationTitle}>
  {location.website_name}
</a>
              <p className={styles.locationDetails}> {location.address}</p>
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
  <span className={styles.icon}><FaPhone color="black" /></span>
  <span className={styles.phoneNumber}>{location.tel}</span>
</a>
              <a href={location.website_link} // Use the 'link' property directly from the API response
   className={styles.mapButton} 
   target="_blank"
   rel="noopener noreferrer">
   <FontAwesomeIcon icon={faLocationArrow} /> Google Map
</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
