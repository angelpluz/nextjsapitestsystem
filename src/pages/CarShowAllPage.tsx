// CarShowAllPage.tsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/CarShowAllPage.module.css';

const CarShowAllPage = () => {
    const [carData, setCarData] = useState(null);

    useEffect(() => {
        fetch('http://toyotathonburi.co.th/api/typecars_all')
            .then(response => response.json())
            .then(data => setCarData(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);

    if (!carData) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.carContainer}>
            {carData.success && (
                <div>
                    {Object.entries(carData.data).map(([key, type]) => (
                        <div key={key}>
                            <h2 className={styles.typeHeader}>{type.type_name}</h2>
                            <img 
                                className={styles.seriesImage} 
                                src={`http://toyotathonburi.co.th/${type.imgSrc}${type.imgType}`} 
                                alt={type.type_name} 
                            />
                            <div className={styles.seriesContainer}>
                                {Object.entries(type).filter(([subKey]) => !isNaN(parseInt(subKey))).map(([subKey, series]) => (
                                    <div key={subKey} className={styles.seriesItem}>
                                        <h3 className={styles.seriesName}>{series.series_name}</h3>
                                        <img 
                                            className={styles.seriesImage} 
                                            src={`http://toyotathonburi.co.th/${series.imgSrc}${series.imgSeries}`} 
                                            alt={series.series_name} 
                                        />
                                        <p className={styles.seriesPrice}>Price: {series.series_price.toLocaleString()} THB</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CarShowAllPage;
