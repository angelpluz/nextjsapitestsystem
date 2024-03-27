import React, { useEffect, useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from '../styles/PromotionComponent.module.css'; // Update this path as necessary
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Promotion {
  id?: number;
  description?: string;
  srcImg?: string;
  thumbnail?: string;
  title?: string;
  subtitle?: string;
}

const PromotionComponent = () => {
  const [promotion, setPromotion] = useState<Promotion | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  useEffect(() => {
    const fetchPromotion = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://110.78.166.170/api/promotion/1');
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

  const truncateText = (text = '', length: number) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  if (!promotion) {
    return <div className={styles.error}>No promotion data available.</div>;
  }

  const shortDescription = truncateText(promotion.description, 100);

  // Animation variant for slide fade in
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1 } // Adjust duration for slower animation
    },
  };

  return (
    <motion.div 
    className={styles.promotionContainer}
      variants={containerVariants}
      initial="hidden"
      animate={controls} // Use the animation controls
      ref={ref} // Attach the ref from useInVie
    >
      <h2 className={styles.header}>ข้อเสนอพิเศษ</h2>
      {promotion.srcImg && promotion.thumbnail && (
        <img
          className={styles.image}
          src={`http://110.78.166.170/${promotion.srcImg}${promotion.thumbnail}`}
          alt={promotion.title || 'Promotion image'}
        />
      )}
      <h2 className={styles.title}>{promotion.title}</h2>
      <h3 className={styles.subtitle}>{promotion.subtitle}</h3>
      <p>{shortDescription}</p>
      <div className={styles.footer}>
        <Link href={`/promotiondetail/${promotion.id}`} key={promotion.id}>
          <span className={styles.button}>
            ดูรายละเอียด <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default PromotionComponent;
