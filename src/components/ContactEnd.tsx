import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faLine, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/ContactEnd.module.css'; // Update this path to the actual location of your CSS module

const ContactEnd = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.callCenter}>
        <h2>CALL CENTER</h2>
        <p className={styles.number}>02-479-9009</p>
      </div>
      
      <div className={styles.socialMedia}>
  <a href="https://www.facebook.com/YourPage" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="https://www.tiktok.com/@YourProfile" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faTiktok} />
  </a>
  <a href="https://line.me/R/ti/p/@YourProfile" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faLine} />
  </a>
  <a href="https://www.youtube.com/c/YourChannel" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faYoutube} />
  </a>
  <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
</div>

      <div className={styles.contactInfo}>
        <p>ที่อยู่: 313/1 ถนนเศรษฐกิจ แขวงบางนา เขตบางนา กรุงเทพมหานคร 10600</p>
        <p>เบอร์: 02-479-9000</p>
        <p>อีเมล: info@toyotathonburi.com</p>
      </div>

      <div className={styles.copyRight}>
        <p>COPYRIGHT © 2023 TOYOTA THONBURI CO., LTD.</p>
      </div>
    </div>
  );
};

export default ContactEnd;
