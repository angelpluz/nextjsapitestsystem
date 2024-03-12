import React from 'react';
import CalculateCar from '../components/CalculateCar'; // Adjust the import path according to your project structure
import styles from '../styles/CalculateCar.module.css'; // Adjust the import path according to your project structure
import Header from '../components/Header';
import ContactEnd from  '../components/ContactEnd';
const CalculatePage = () => {
  return (
    <div className={styles.container}>
       <Header />
      <h1>Calculate Your Car</h1>
      <CalculateCar />
      <ContactEnd />
    </div>
  );
};

export default CalculatePage;
