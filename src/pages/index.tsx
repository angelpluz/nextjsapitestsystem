import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ShowRoom from '../components/ShowRoom'; // Import ShowRoom component
import styles from '../styles/Home.module.css';


const Home = () => {
  const [salesmanData, setSalesmanData] = useState(null);

  useEffect(() => {
    fetch('http://toyotathonburi.co.th/api/salesmandata/search/109A1M')
      .then(response => response.json())
      .then(data => {
        if (data && data.status) {
          setSalesmanData(data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const imageURL = salesmanData ? `http://toyotathonburi.co.th/storage/profile/${salesmanData.data[0].image}` : '';

  return (
    <div className={styles.container}>
    
      {salesmanData ? (
        <div>
          <h1>Salesman Information</h1>
          <img src={imageURL} alt="Salesman" />
          <p>Name: {salesmanData.data[0].name}</p>
          <p>Nickname: {salesmanData.data[0].nickname}</p>
          <p>Sale Code: {salesmanData.data[0].sale_code}</p>
          <p>Personal Motto: {salesmanData.data[0].personal_motto}</p>
          <p>Start Date: {salesmanData.data[0].start_date}</p>
          <p>Salesman Club: {salesmanData.data[0].salesman_club}</p>
          <p>Phone: {salesmanData.data[0].phone}</p>
          <p>Facebook: {salesmanData.data[0].facebook}</p>
          <p>Line: {salesmanData.data[0].line}</p>
          <p>Awards: {salesmanData.data[0].awards}</p>
          <p>Date Now: {salesmanData.dateNow}</p>
          {/* Add additional details as needed */}
        </div>
      ) : (
        <p>Loading salesman data...</p>
      )}
      <ShowRoom /> {/* ShowRoom component is now below the salesman data */}

    </div>
  );
};

export default Home;
