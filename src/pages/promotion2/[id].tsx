// pages/promotions/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/PromotionDetail2.module.css'; // Adjust the path to your CSS module
import ContactEnd from '../../components/ContactEnd';
import Header from '../../components/Header';
const PromotionDetail = () => {
  const [promotion, setPromotion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { id } = router.query; // Get the dynamic part of the URL

  useEffect(() => {
    if (id) { // Only proceed if id is available
      setIsLoading(true);
      fetch(`http://110.78.166.170/api/promotiondetail/${id}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setPromotion(data);
          } else {
            setError('Promotion detail could not be fetched.');
          }
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]); // Dependency array includes id to refetch when it changes

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading promotion details: {error}</p>;
  if (!promotion) return <p>No promotion data available.</p>;

  return (
    <div className={styles.container}>
         <Header />
        
      <div className={styles.promotionDetailContainer}>
  
        <h1 className={styles.title}>{promotion.title}</h1>
        <h2 className={styles.subtitle}>{promotion.subtitle}</h2>
        <img 
          src={`http://110.78.166.170/${promotion.srcImg}${promotion.thumbnail}`} 
          alt={promotion.title} 
          className={styles.image}
        />
        <div 
          className={styles.description} 
          dangerouslySetInnerHTML={{ __html: promotion.description }} 
        />
        {/* Render other details */}
      </div>
      <ContactEnd />
    </div>
  );
};

export default PromotionDetail;
