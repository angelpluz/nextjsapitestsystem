// pages/Promotions2.tsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/Promotions2.module.css'; // Adjust the path to your CSS module
import { useRouter } from 'next/router';
import ContactEnd from '../components/ContactEnd';
import Header from '../components/Header';
const Promotions2 = () => {
  const [promotions, setPromotions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter(); // using useRouter hook for navigation

  useEffect(() => {
    setIsLoading(true);
    fetch('http://110.78.166.170/api/promotions/2')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setPromotions(data.data);
        } else {
          setError('Promotions data could not be fetched.');
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleMoreDetailsClick = (id) => {
    // Navigate to /promotion2/[id]
    router.push(`/promotion2/${id}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading promotions: {error}</p>;

  return (
    <div className={styles.container}>
          <Header />
          <h2 className={styles.promotionSaleTitle}>โปรโมชั่น โชว์รูม</h2>
      <div className={styles.promotionsContainer}>
        {promotions.map((promo) => (
          <div key={promo.id} className={styles.promotionItem}>
            <img
              src={`http://110.78.166.170/webp/imgPromotion/${promo.thumbnail}`}
              alt={promo.title}
              className={styles.promotionImage}
            />
            <div className={styles.promotionDetails}>
              <h2 className={styles.promotionTitle}>{promo.title}</h2>
              <p className={styles.promotionSubtitle}>{promo.subtitle}</p>
              <p className={styles.moreDetails} onClick={() => handleMoreDetailsClick(promo.id)}>
                รายละเอียดเพิ่มเติม
              </p>
            </div>
          </div>
        ))}
      </div>
      <ContactEnd />
    </div>
  );
};

export default Promotions2;
