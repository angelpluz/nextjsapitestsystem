import React, { useState, useEffect } from 'react';
import styles from '../styles/CarCategory.module.css';

const CategoryCar = () => {
  const [carTypes, setCarTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all'); // 'all' หรืออาจเริ่มต้นด้วยประเภทรถที่เฉพาะเจาะจง
  const [imageBasePath, setImageBasePath] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = selectedType === 'all'
          ? 'http://110.78.166.170/api/typescars'
          : `hhttp://110.78.166.170/api/typescars/${selectedType}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.success) {
          setCarTypes(data.data);
          setImageBasePath('http://110.78.166.170/webp/ismgType/');
        }
      } catch (error) {
        console.error('Error fetching car types:', error);
      }
    };

    fetchData();
  }, [selectedType]);

  return (
    <div className={styles.carCategoryContainer}>
  {carTypes.map((type) => (
    <div key={type.id} className={styles.carCategoryItem}>
      <img src={`${imageBasePath}${type.imgType}`} alt={type.name} className={styles.carImage} />
      <h3>{type.name}</h3>
      {/* Add other details as needed */}
    </div>
  ))}
</div>
    // <div className={styles.categoryContainer}>
    //   <div className={styles.selector}>
    //     <button onClick={() => setSelectedType('sedan')}>รถเก๋ง</button>
    //     <button onClick={() => setSelectedType('suv')}>รถ SUV & PPV</button>
    //     <button onClick={() => setSelectedType('mpv')}>รถ MPV</button>
    //     {/* ...other categories */}
    //   </div>
    //   {carTypes.map((type) => (
    //     <div key={type.id} className={styles.categoryItem}>
    //       <img src={`${imageBasePath}${type.imgType}`} alt={type.name} />
    //       <h3>{type.name}</h3>
    //       {/* ...other details */}
    //     </div>
    //   ))}
    // </div>
  );
};

export default CategoryCar;
