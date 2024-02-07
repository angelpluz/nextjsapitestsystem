import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTiktok, faLine, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/ContactEnd.module.css'; // Update this path to the actual location of your CSS module

const ContactEnd = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.callCenter}>
        <h2 className={styles.callCenter_}>CALL CENTER</h2>
        <p className={styles.number}><a href="tel:024799009"> 02-479-9009</a></p>
      </div>
      
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/toyotathonburiofficial/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.tiktok.com/@toyota_thonburi" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="https://line.me/R/ti/p/%40plh9039k" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLine} />
        </a>
        <a href="https://www.youtube.com/channel/UC_zSX5q_plVy8Kjvo_tCREA/featured" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.instagram.com/toyotathonburi_official/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <br />
      <hr /> 
      <h2 className={styles.contact_}>CONTACT</h2>

      <div className={styles.contactInfo}>
        <p className={styles.contactInfo_}><b>ที่อยู่ : </b> 313/1 ถนนเศรษฐกิจ แขวงบางนา เขตบางนา กรุงเทพมหานคร 10600</p>
        <p className={styles.contactInfo_}><b>เบอร์ : </b><a href="tel:024799009"> 02-479-9009</a></p>
        <p className={styles.contactInfo_}><b>อีเมล : </b> info@toyotathonburi.com</p>
      </div>
      
      <hr />
      <div className={styles.copyRight}>
        <p>COPYRIGHT © 2023 TOYOTA THONBURI CO., LTD.</p>
      </div>
    </div>
  );
};

export default ContactEnd;
