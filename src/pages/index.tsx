import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [showroomData, setShowroomData] = useState(null);

  useEffect(() => {
    fetch('https://4ec2-184-82-232-37.ngrok-free.app/api/showrooms/show',{ mode: 'no-cors' })
      .then(response => response.json())
      .then(data => {
        setShowroomData(data);
        // ตัวอย่าง: แสดงข้อมูล showroom ที่ได้รับ
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {showroomData ? (
        <div>
          {/* แสดงข้อมูล showroom ที่นี่ */}
          <h1>Showroom Information</h1>
          {/* ตัวอย่างการแสดงข้อมูล */}
          <h1>test GIT AND API</h1>
          {/* แสดงข้อมูลอื่นๆ ตามที่ต้องการ */}
        </div>
      ) : (
        <p>กำลังโหลดข้อมูล...</p>
      )}
    </div>
  );
};

export default Home;
