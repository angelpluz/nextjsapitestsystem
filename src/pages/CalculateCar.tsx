import React from 'react';
import CalculateCar from '../components/CalculateCar'; // Adjust the import path according to your project structure
import styles from '../styles/CalculateCar.module.css'; // Adjust the import path according to your project structure
import Header from '../components/Header';
import ContactEnd from  '../components/ContactEnd';
const CalculatePage = () => {
  return (
    <div className={styles.container}>
       <Header />
       <h2 className={styles.typeHeader}>คำนวนค่างวด</h2>
     
      <CalculateCar />
      <ContactEnd />
    </div>
  );
};

export default CalculatePage;
