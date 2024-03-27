import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/LocationList.module.css';

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('http://110.78.166.170/api/locations')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data); // Log fetched data
        setLocations(data.data);
      })
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  const displayedLocations = showAll ? locations : locations.slice(0, 4);
  const toggleShowAll = () => {
    console.log('Toggle show all. Previous state:', showAll);
    setShowAll(!showAll);
  };
  useEffect(() => {
    console.log('Displayed locations updated:', displayedLocations);
    // Reset animation
    displayedLocations.forEach((_, index) => {
      const element = document.getElementById(`location-item-${index}`);
      if (element) {
        console.log('Animating element:', element);
        element.style.animation = 'none';
        setTimeout(() => {
          element.style.animation = '';
        }, 10); // Trigger reflow to restart animation
      }
    });
  }, [displayedLocations]);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>โชว์รูม</h2>
      <ul>
        {displayedLocations.map((location, index) => (
        <li 
        key={location.website_seq} 
        id={`location-item-${index}`}
        className={styles.listItem}
      >
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
                <FontAwesomeIcon icon={faPhone} color="black" />
                &nbsp;&nbsp; <span className={styles.phoneNumber}>{location.tel}</span>
              </a>
              <a href={location.website_link} 
                 className={styles.mapButton} 
                 target="_blank"
                 rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLocationArrow} />&nbsp;&nbsp; Google Map
              </a>
            </div>
          </li>
        ))}
      </ul>
      {locations.length > 4 && (
       <button onClick={toggleShowAll} className={`${styles.showMoreButton} ${showAll ? styles.active : ''}`}>
          {showAll ? 'แสดงลดลง' : 'แสดงเพิ่มเติม'}
        </button>
      )}
    </div>
  );
  
};

export default LocationList;
