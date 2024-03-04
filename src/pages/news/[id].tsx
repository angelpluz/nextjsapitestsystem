// pages/news/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import ContactEnd from '../../components/ContactEnd';
import styles from '../../styles/takeaticale.module.css';

const NewsArticle = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
 <div className={styles.articleContainer}>
      <h1 className={styles.articleTitle}>{article.title}</h1>
      <h1 className={styles.subtitle}>{article.subtitle}</h1>
      <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: article.description }} />
      {/* Render other article data as needed */}
     
    </div>
    <ContactEnd />
    </div>
    
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`http://toyotathonburi.co.th/api/news/${id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
    
  };
};

export default NewsArticle;
