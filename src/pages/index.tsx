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

        </div>
      ) : (
        <p>กำลังโหลดข้อมูล...</p>
      )}
    </div>
  );
};

export default Home;
