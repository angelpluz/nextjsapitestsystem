import React, { useState, useEffect } from 'react';
import styles from '../styles/CarShowAllPage.module.css';
import Header from '../components/Header';
import ContactEnd from  '../components/ContactEnd';
import { useRouter } from 'next/router';

const CarShowAllPage = () => {
    const [carData, setCarData] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();
    useEffect(() => {
        fetch('http://toyotathonburi.co.th/api/typecars_all')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setCarData(data))
            .catch(error => {
                console.error('Fetch error:', error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!carData) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.carContainer}>
                {carData.success && Object.entries(carData.data).map(([key, type], index) => (
                    <React.Fragment key={key}>
                        <h2 className={styles.typeHeader}>{type.type_name}</h2>
                        <div className={styles.seriesContainer}>
                            {Object.entries(type).filter(([subKey]) => !isNaN(parseInt(subKey)))
                                .map(([subKey, series], seriesIndex) => {
                                    // Apply fullWidth class only to the first item
                                    const itemClass = seriesIndex === 0 ? styles.fullWidth : styles.seriesItem;
                                    return (
                                        <div 
                                            key={subKey} 
                                            className={itemClass}
                                        >
                                            <h3 className={styles.seriesName}>{series.series_name}</h3>
                                            <img 
                                                className={styles.seriesImage} 
                                                src={`http://toyotathonburi.co.th/${series.imgSrc}${series.imgSeries}`} 
                                                alt={series.series_name} 
                                            />
                                            <p className={styles.seriesPrice}>ราคาเริ่มต้น {series.series_price.toLocaleString()} </p>
                                            <button
      className={styles.detailButton}
      onClick={() => router.push(`/carseries/${series.series_id}`)}
    >
      รายละเอียด
    </button>
                                        </div>
                                    );
                            })}
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <ContactEnd />
        </div>
    );
};

export default CarShowAllPage;
