import React, { useEffect, useState } from 'react';
import styles from '../styles/PromotionComponent.module.css'; // Make sure this path is correct

// Assuming this is the structure of your promotion data
interface Promotion {
  description?: string;
  srcImg?: string;
  thumbnail?: string;
  title?: string;
}

const PromotionComponent = () => {
  const [promotion, setPromotion] = useState<Promotion | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Function to truncate the description
  const truncateText = (text = '', length: number): string => {
    // Provide a default value for text and check for length
    return text.length > length ? text.slice(0, length) + '...' : text;
  };

  useEffect(() => {
    const fetchPromotion = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://toyotathonburi.co.th/api/promotion/1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPromotion(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPromotion();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  if (!promotion) {
    return <div className={styles.error}>No promotion data available.</div>;
  }

  // Using the truncateText function with optional chaining to prevent errors
  const shortDescription = truncateText(promotion.description, 100); // Truncate to 100 characters

  return (
    <div className={styles.promotionContainer}>
      {promotion.srcImg && promotion.thumbnail && (
        <img
          className={styles.image}
          src={`http://toyotathonburi.co.th/${promotion.srcImg}${promotion.thumbnail}`}
          alt={promotion.title || 'Promotion image'}
        />
      )}
      
      <p>{shortDescription}</p>
      
      {/* Implement the button functionality */}
      <div className={styles.footer}>
        <button className={styles.button}>อ่านเพิ่มเติม</button>
      </div>
    </div>
  );
};

export default PromotionComponent;
