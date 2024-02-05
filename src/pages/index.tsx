import React from 'react';
import Header from '../components/Header';
import ShowRoom from '../components/ShowRoom';
import styles from '../styles/Home.module.css';
import LocationList from '../components/LocationList';
import Slideindex from '../components/SlideIndex';
import CarSeriesSlideShow from './CarSeriesSlideShow';
import PromotionComponent from '../components/PromotionComponent';
import NewArticle from '../components/NewsArticle';

const Home = () => {
  return (
    <div className={styles.container}>
      <Slideindex />
      <CarSeriesSlideShow />
      <LocationList />
      <PromotionComponent />
      <NewArticle />
    </div>
  );
};

export default Home;
