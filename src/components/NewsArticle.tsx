import React, { useState, useEffect } from 'react';
import styles from '../styles/NewArticle.module.css'; // Update the import path if necessary

const NewsArticle = () => {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://toyotathonburi.co.th/api/news');
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
    <article className={styles.article}>
     <h2 className={styles.header}>ข่าวสารและกิจกรรม</h2> 
      {news.thumbnail && (
        <img
          className={styles.image}
          src={`http://toyotathonburi.co.th/${news.srcImg}${news.thumbnail}`}
          alt={news.title}
        />
      )}
         <h2 className={styles.title}>{news.title}</h2>
      <h3 className={styles.subtitle}>{news.subtitle}</h3>
      {/* Additional content can be added here */}
      <div className={styles.footer}>
        <button className={styles.button}>อ่านเพิ่มเติม</button>
      </div>
    </article>
  );
};

export default NewsArticle;
