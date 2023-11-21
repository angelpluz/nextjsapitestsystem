// ShowRoom.tsx
import React from 'react';
import styles from '../styles/Showroom.module.css'; // Adjust the import path as necessary

const ShowRoom = () => {
  return (
    <div className={styles.showroomContainer}>
      {/* Repeat showroomItem for each showroom */}
      <div className={styles.showroomItem}>
        <div className={styles.showroomDetails}>
          <h2 className={styles.locationTitle}>สำนักงานใหญ่</h2>
          <p className={styles.locationAddress}>313/1 ถนนรัชดาภิเษก, แขวงพญาไท เขตพญาไท กรุงเทพมหานคร</p>
          {/* Other details */}
        </div>
        <div className={styles.contactInfo}>
          {/* Icons and phone number */}
          <img className={styles.phoneIcon} src="/path-to-phone-icon.png" alt="Phone" />
          <span>02-479-9000</span>
        </div>
      </div>
      {/* Additional showroom items */}
    </div>
  );
};

export default ShowRoom;
