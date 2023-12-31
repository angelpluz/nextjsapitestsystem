import React from 'react';
import CalculateCar from '../components/CalculateCar'; // Adjust the import path according to your project structure
import styles from '../styles/CalculateCar.module.css'; // Adjust the import path according to your project structure

const CalculatePage = () => {
  return (
    <div className={styles.calculateCarContainer}>
      <h1>Calculate Your Car</h1>
      <CalculateCar />
    </div>
  );
};

export default CalculatePage;
