import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [salesmanData, setSalesmanData] = useState(null);

  useEffect(() => {
    fetch('http://toyotathonburi.co.th/api/salesmandata/search/109A1M/')
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setSalesmanData(data.data[0]);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {salesmanData ? (
        <div>
          <h1>{salesmanData.name} ({salesmanData.nickname})</h1>
          <p>รหัสขาย: {salesmanData.sale_code}</p>
          <p>คำขวัญส่วนตัว: {salesmanData.personal_motto}</p>
          <p>เริ่มงาน: {salesmanData.start_date}</p>
          <p>สโมสรขาย: {salesmanData.salesman_club}</p>
          <p>โทรศัพท์: {salesmanData.phone}</p>
          <p>Facebook: {salesmanData.facebook}</p>
          <p>Line: {salesmanData.line}</p>
          <img src={`http://toyotathonburi.co.th/images/${salesmanData.image}`} alt={salesmanData.name} />
          <p>ประสบการณ์การทำงาน: {salesmanData.work_exp} ปี</p>
          <p>โชว์รูม: {salesmanData.showroom}</p>
          <p>คะแนนเฉลี่ย: {salesmanData.avg_rating}</p>
          <img src={`http://toyotathonburi.co.th/images/${salesmanData.qrcode}`} alt="QR Code" />
        </div>
      ) : (
        <p>กำลังโหลดข้อมูล...</p>
      )}
    </div>
  );
};

export default Home;
