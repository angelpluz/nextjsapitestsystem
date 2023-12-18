import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ShowRoom from '../components/ShowRoom'; // Import ShowRoom component
import styles from '../styles/Home.module.css';
import LocationList from '../components/LocationList'; // นำเข้า LocationList component
import CarSeriesSlideShow from './CarSeriesSlideShow'; // Corrected import statement


const Home = () => {
  const [salesmanData, setSalesmanData] = useState(null);

  useEffect(() => {
    fetch('http://toyotathonburi.co.th/api/salesmandata/search/')
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
        
    
          {/* Add additional details as needed */}
        </div>
      ) : (
        <p>Loading salesman data...</p>
      )}
<CarSeriesSlideShow /> 
<LocationList />
    </div>
  );
};

export default Home;
