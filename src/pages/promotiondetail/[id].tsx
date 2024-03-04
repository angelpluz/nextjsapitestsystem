import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/PromotionDetail.module.css'; // Ensure the path is correct
import ContactEnd from '../../components/ContactEnd';

const PromotionDetail = () => {
  const [promotion, setPromotion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { id } = router.query; // Assuming you're using Next.js dynamic routing

  useEffect(() => {
    if (!id) return; // Ensure we have an ID before fetching

    fetch(`http://toyotathonburi.co.th/api/promotiondetail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPromotion(data);
        } else {
          setError('Promotion details could not be fetched.');
        }
      })
      .catch((err) => setError(err.toString()))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      {promotion && (
        <div>
          <h1 className={styles.title}>{promotion.title}</h1>
          <img 
            src={`http://toyotathonburi.co.th/${promotion.srcImg}${promotion.thumbnail}`} 
            alt={promotion.title} 
            className={styles.promotionImage}
          />
          <div 
            className={styles.description} 
            dangerouslySetInnerHTML={{ __html: promotion.description }} 
          />
          {/* More content here if needed */}
        </div>
      )}
      <ContactEnd />
    </div>
  );
  
};

export default PromotionDetail;
