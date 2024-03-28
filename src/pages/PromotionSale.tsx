import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/PromotionSale.module.css'; // Path to your CSS module
import ContactEnd from '../components/ContactEnd';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PromotionSale = () => {
  const [promotions, setPromotions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPromotions = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://110.78.166.170/api/promotions/1');
        const data = await response.json();
        if (data.success) {
          setPromotions(data.data);
        } else {
          setError('Promotions data could not be fetched.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPromotions();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading promotions: {error}</p>;

  return (
<div className={styles.container}>
  <Header />
  <h1 className={styles.promotionSaleTitle}>โปรโมชั่นการขาย</h1>
  <div className={styles.promotionContainer}>
    {promotions.map(promo => (
      <div className={styles.promotionItem} key={promo.id}>
        <img
          src={`http://110.78.166.170/webp/imgPromotion/${promo.thumbnail}`}
          alt={promo.title}
          className={styles.promotionImage}
        />
        <div className={styles.promotionDetails}>
          <h2 className={styles.promotionTitle}>{promo.title}</h2>
          <p className={styles.promotionSubtitle}>{promo.subtitle}</p>
          {/* Additional content can be added here if needed */}
        </div>
        <div className={styles.footer}>
          <Link href={`/promotiondetail/${promo.id}`}>
          <span className={styles.button}>
            ดูรายละเอียด <FontAwesomeIcon icon={faChevronRight} />
          </span>
          </Link>
        </div>
      </div>
    ))}
  </div>
  <ContactEnd />
</div>
  );
};

export default PromotionSale;
