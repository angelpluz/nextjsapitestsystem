import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';


interface Show {
  name: string;
  type: string;
  language: string;
  genres: string[];
  // ระบุคุณสมบัติอื่นๆ ที่มีใน API
}
const Home = () => {
  const [show, setShow] = useState<Show | null>(null);
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=golden')
      .then(response => response.json())
      .then(data => {
        // สมมติว่าเราสนใจเฉพาะผลลัพธ์แรก
        setShow(data[0].show);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {show ? (
        <div>
          <h1>{show.name}</h1>
          <p>Type: {show.type}</p>
          <p>Language: {show.language}</p>
          <p>Genres: {show.genres.join(', ')}</p>
          <p>Status: {show.status}</p>
          <p>Runtime: {show.runtime} minutes</p>
          <p>Premiered: {show.premiered}</p>
          <p>Ended: {show.ended}</p>
          <p>Network: {show.network.name}</p>
          <p>Country: {show.network.country.name}</p>
          <p><a href={show.url}>Official Site</a></p>
          <img src={show.image.medium} alt={`Cover for ${show.name}`} />
          <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
