// pages/ArticlePage.tsx
import React from 'react';
import Article from '../components/Article'; // Adjust the import path according to your project structure
import styles from '../styles/Article.module.css'; // Adjust the import path according to your project structure
import Header from '../components/Header';
import ContactEnd from '../components/ContactEnd';

// Example article data - in a real app, this might come from an API
const articleData = {
  title: 'Example Article Title',
  content: 'Here is some example content for an interesting article. Imagine this is fetched from your CMS or API.',
  // Add more fields as needed
};

const ArticlePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h2 className={styles.typeHeader}></h2>

      <Article article={articleData} />
      <ContactEnd />
    </div>
  );
};

export default ArticlePage;
