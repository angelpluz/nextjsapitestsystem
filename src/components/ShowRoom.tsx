import React, { useState, useEffect } from 'react';
import styles from '../styles/Showroom.module.css';  // Make sure this path is correct

const ShowRoom = () => {
  const [showrooms, setShowrooms] = useState([]);

  useEffect(() => {
    const fetchShowrooms = async () => {
      try {
        const response = await fetch('http://110.78.166.170/api/showrooms/show');
        const data = await response.json();
        if (data && data.status) {
          // Assuming the API returns an object with a property 'zone1' that is an array of showrooms
          setShowrooms(data.zone1);
        }
      } catch (error) {
        console.error('Error fetching showrooms:', error);
      }
    };

    fetchShowrooms();
  }, []); // Ensure this closing bracket is correctly paired with the opening bracket of useEffect

  return (
    <div className={styles.showroomList}>
      <h2 className={styles.title}>โชว์รูม</h2>
      {showrooms.map((showroom, index) => (
        <div key={index} className={styles.showroomItem}>
          <h3>{showroom.name_th}</h3>
          {/* Add other details here */}
        </div>
      ))}
    </div>
  );
};

export default ShowRoom;
