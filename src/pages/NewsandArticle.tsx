// pages/news.tsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/Newaaa.module.css'; // The path to your CSS module.
import ContactEnd from '../components/ContactEnd';
import Link from 'next/link';
import Header from '../components/Header';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://110.78.166.170/api/newsall')
      .then(response => response.json())
      .then(data => {
        if (data && data.success) {
          console.log(data.success);
          // Set the srcImg prefix for each item
          const updatedNews = data.data.map(item => {
            return { ...item, srcImg: data.srcImg };
          });
          setNews(updatedNews);
        } else {
          setError('Failed to load news');
        }
      })
      .catch(error => {
        setError(error.toString());
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
       <Header />
       <h1 className={styles.title}>ข่าวสารและกิจกรรม</h1>
      <div className={styles['news-container']}>
        {news.map(item => (
          <Link href={`/news/${item.id}`} key={item.id}>
            <div className={styles['news-item']}>
              <img src={`http://110.78.166.170/${item.srcImg}${item.thumbnail}`} alt={item.title} className={styles['news-image']}/>
              <h2 className={styles['news-title']}>{item.title}</h2>
              <p className={styles['news-subtitle']}>{item.subtitle}</p>
              {/* Add more content as needed */}
            </div>
          </Link>
        ))}
      </div>
      <ContactEnd />
    </div>
  );
  
}

export default NewsPage;
