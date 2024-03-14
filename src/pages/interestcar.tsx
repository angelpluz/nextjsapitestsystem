import React from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import styles from '../styles/InterestCar.module.css';
import ContactEnd from '../components/ContactEnd';
import Header from '../components/Header';

const InterestCar = () => {
  const router = useRouter(); // Initialize the useRouter hook

  // Handler to redirect to the CarShowAllPage
  const handleGoToCarShowAllPage = (seriesId) => {
    router.push(`/carseries/${seriesId}`);
  };

  // Handler to open LINE contact page
  const handleOpenLineContact = () => {
    window.location.href = 'https://page.line.me/plh9039k?openQrModal=true';
  };

  return (
    <div className={styles.insuranceContainer}>
      <Header />
      <div className={styles.insuranceContent}>
        <h1 className={styles.heading1}>สนใจซื้อรถกับเรา</h1>

        <h1>เลือกรุ่นที่ใช้ กับ ราคาที่ชอบ</h1>
        <button
          className={styles.detailButton}
          onClick={() => handleGoToCarShowAllPage(series.series_id)} // Assuming series is defined in your component state or props
        >
          สนใจคลิ๊ก
        </button>

        <h1>ขอใบเสนอราคา</h1>
        <button
          className={styles.detailButton}
          onClick={handleOpenLineContact}
        >
          ใบเสนอราคา
        </button>
      </div>
      <ContactEnd />
    </div>
  );
};

export default InterestCar;
