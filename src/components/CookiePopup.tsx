import React, { useState } from 'react';
import styles from '../styles/CookiePopup.module.css'; // Adjust the path to your CSS file accordingly

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    // Additional logic to set a cookie or manage state to not show the popup again
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookiePopup}>
      <p className={styles.message}>
      เราใช้คุกกี้เพื่อประสบการณ์ใช้งานที่ดีและตรงตามความต้องการของลูกค้า โดยการใช้เว็บไซต์ของเราคุณยินยอมให้เราใช้คุกกี้ตามนโยบายความเป็นส่วนตัวของเรา
      </p>
      <p className={styles.message}>
      ข้อมูลเพิ่มเติม
      </p>
      <button onClick={handleClose} className={styles.closeButton}>
        ยอมรับคุกกี้
      </button>
    </div>
  );
};

export default CookiePopup;
