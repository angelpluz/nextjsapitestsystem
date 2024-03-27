import React, { useState, useEffect } from 'react';
import styles from '../styles/LocationAll.module.css'; // Make sure to create and link the corresponding CSS module
import Link from 'next/link';
import Header from '../components/Header';
import ContactEnd from '../components/ContactEnd';
import MapComponent from '../components/MapComponent';
interface Location {
    id: number;
    website_name: string;
    address: string;
    type: string;
    tel: string;
    location: string;
    website_seq: number;
    website_link: string;
}

const LocationAllPage = () => {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        fetch('http://110.78.166.170/api/locations')
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setLocations(data.data);
                }
            })
            .catch((error) => console.error('Error fetching locations:', error));
    }, []);

    return (
        <div className={styles.container}>
               <Header />
               <img src="/images/aw_map.png" alt="Company History" className={styles.companyImage} />
               <h1 className={styles.title}>โชว์รูมทั้งหมดของโตโยต้า ธนบุรี</h1>
               <MapComponent  />
        <div className={styles.locationsGrid}>
          {locations.map((location) => (
            <div key={location.id} className={styles.locationCard}>
              {/* Wrap the clickable area with Link and use a div instead of an a tag */}
              <Link href={`/showroom/${location.id}`}>
                <div className={styles.websiteNameContainer}>
                  <h2 className={styles.websiteName}>{location.website_name}</h2>
                </div>
              </Link>
      
              {/* Telephone number with its own style */}
              <div className={styles.telephoneContainer}>
                <Link href={`tel:${location.tel}`}>
                  <p className={styles.telephoneNumber}>{location.tel}</p>
                </Link>
              </div>
      
              {/* Separate button for map */}
              <button
                onClick={() => window.open(location.website_link, '_blank', 'noopener,noreferrer')}
                className={styles.mapButton}
              >
                {/* SVG or Icon for the map button */}
                ดูแผนที่
              </button>
            </div>
          ))}
        </div>
        <ContactEnd />
        </div>
        
      );
      
      
};

export default LocationAllPage;
