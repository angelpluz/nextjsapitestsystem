// pages/articles/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Article.module.css'; // Adjust the path to your CSS module
import ContactEnd from '../../components/ContactEnd';
import Header from '../../components/Header';

const ArticleDetail = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { id } = router.query; // Get the dynamic part of the URL

  useEffect(() => {
    if (id) { // Only proceed if id is available
      setIsLoading(true);
      fetch(`http://110.78.166.170/api/article/${id}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setArticle(data);
          } else {
            setError('Article details could not be fetched.');
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
  if (error) return <p>Error loading article details: {error}</p>;
  if (!article) return <p>No article data available.</p>;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.articleDetailContainer}>
      <img 
          src={`http://110.78.166.170/${article.srcImg}${article.thumbnail}`} 
          alt={article.title} 
          className={styles.image}
        />
        <h1 className={styles.title}>{article.title}</h1>
        <h2 className={styles.subtitle}>{article.subtitle}</h2>
        <div 
          className={styles.description} 
          dangerouslySetInnerHTML={{ __html: article.description }} 
        />
        {/* If the description is available and confirmed by backend, you can display it. */}
        {/* If not, this part can remain commented out or deleted.
    
        */}
        {/* Render other article details */}
      </div>
      <ContactEnd />
    </div>
  );
};

export default ArticleDetail;
