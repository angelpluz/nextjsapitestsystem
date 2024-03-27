import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/NewArticle.module.css'; // Update the import path if necessary
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NewsArticle = () => {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1, // 10% must be visible
    triggerOnce: true, // Only trigger this animation once
  });
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://110.78.166.170/api/news');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.success) {
       
          setNews(data);
          
        } else {
          throw new Error('Failed to load the news data');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  
  }, []);
// Animation variants
const articleVariants = {
  hidden: { x: -300, opacity: 0 }, // Start from the left
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 }
  },
};
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  if (!news) {
    return <div className={styles.error}>No news data available.</div>;
  }

  return (
    <motion.article 
      className={styles.article}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={articleVariants}
    > 
    <article className={styles.article}> 
     <h2 className={styles.header}>ข่าวสารและกิจกรรม</h2> 
      {news.thumbnail && (
        <img
          className={styles.image}
          src={`http://110.78.166.170/${news.srcImg}${news.thumbnail}`}
          alt={news.title}
        />
      )}
         <h2 className={styles.title}>{news.title}</h2>
      
      <h3 className={styles.subtitle}>{news.subtitle}</h3>
      {/* Additional content can be added here */}
      <div className={styles.footer}>
      <Link href={`/news/${news.id}`} key={news.id}>
  <span className={styles.button}>
    ดูรายละเอียด <FontAwesomeIcon icon={faChevronRight} />
  </span>
</Link>
      </div>
    </article>
    </motion.article>
  );
};

export default NewsArticle;
