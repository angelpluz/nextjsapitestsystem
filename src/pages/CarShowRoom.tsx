import React from 'react';
import styles from '../styles/CarOverview.module.css'; // Replace with your actual CSS module path

const CarShowroom = () => {
  // Placeholder for where you'll eventually set your fetched data
  // const [carSeries, setCarSeries] = useState([]);

  // Temporary static data for layout purposes
  const carSeriesPlaceholder = [
    { id: 1, name: "Car Model 1", imageUrl: "path/to/image1.jpg" },
    { id: 2, name: "Car Model 2", imageUrl: "path/to/image2.jpg" },
    // ...more cars
  ];

  return (
    <div className={styles.carShowroom}>
      {carSeriesPlaceholder.map((car, index) => (
        <div key={car.id} className={styles.carCard}>
          {/* Assuming car has an imageUrl property */}
          <img src={car.imageUrl} alt={car.name} className={styles.carImage} />
          <div className={styles.carInfo}>
            <h2 className={styles.carName}>{car.name}</h2>
            {/* Additional car info here */}
          </div>
          <button className={styles.detailsButton}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default CarShowroom;
