import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    fetch('https://toyotathailand4u.com/salemaninformation/109A1',{ mode: 'no-cors' })
      .then(response => response.json())
      .then(data => {
        setApiResponse(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {apiResponse ? (
        <div>
          <h1>API Response</h1>
          <h1>API Response</h1>
        </div>
      ) : (
        <p>กำลังโหลดข้อมูล...</p>
      )}
    </div>
  );
};

export default Home;
