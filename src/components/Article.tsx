import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Article.module.css';
import Link from 'next/link';

const ArticlePage = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://110.78.166.170/api/article');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.success) {
          setArticle(data);
        } else {
          throw new Error('Failed to load the article data');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  if (!article) {
    return <div className={styles.error}>No article data available.</div>;
  }

  return (
    <article className={styles.article}> 
     <h2 className={styles.header}>บทความ</h2> 
      {article.thumbnail && (
        <img
          className={styles.image}
          src={`http://110.78.166.170/${article.srcImg}${article.thumbnail}`}
          alt={article.title}
        />
      )}
         <h2 className={styles.title}>{article.title}</h2>
      
      <h3 className={styles.subtitle}>{article.subtitle}</h3>
      {/* Additional content can be added here */}
      <div className={styles.footer}>
        <Link href={`/article/${article.id}`} key={article.id}>
          <span className={styles.button}>
            ดูรายละเอียด <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </Link>
      </div>
    </article>
  );
};

export default ArticlePage;
