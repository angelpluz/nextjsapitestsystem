import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=golden');
      const data = await response.json();
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>TV Shows</h1>
        {shows.map((show, index) => (
          <div key={index}>
            <h2>{show.show.name}</h2>
            {/* แสดงข้อมูลอื่นๆ ของรายการทีวีที่นี่ */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
