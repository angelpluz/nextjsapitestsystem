import React from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import styles from '../styles/InterestCar.module.css';
import ContactEnd from '../components/ContactEnd';
import Header from '../components/Header';
import Link from 'next/link';


const InterestCar = () => {
  const router = useRouter(); // Initialize the useRouter hook

  // Handler to redirect to the CarShowAllPage


  // Handler to open LINE contact page
  const handleOpenLineContact = () => {
    window.location.href = 'https://page.line.me/plh9039k?openQrModal=true';
  };

  return (
    <div className={styles.insuranceContainer}>
    <Header />
    <div className={styles.insuranceContent}>
      <h1 className={styles.heading1}>สนใจซื้อรถกับเรา</h1>



      <h1 className={styles.tittle1}>เลือกรุ่นที่ใช้ กับ ราคาที่ชอบ</h1>
<Link href="/CarShowAllPage">
  <button className={styles.detailButton1}>
    สนใจคลิ๊ก
  </button>
</Link>

      <h1 className={styles.tittle1}>ขอใบเสนอราคา</h1>
      <button
  className={styles.detailButton}
  onClick={() => window.open('https://page.line.me/plh9039k?openQrModal=true', '_blank', 'noopener,noreferrer')}
>
  ใบเสนอราคา
</button>


<h1 className={styles.tittle1}>ค้นหา สาขาใกล้บ้าน</h1>
<Link href="/LocationAll">
  <button className={styles.detailButton1}>
    สนใจคลิ๊ก
  </button>
</Link>
    </div>
    <ContactEnd />
  </div>
  );
};

export default InterestCar;
