import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  // สร้าง state สำหรับการติดตามการแสดงเมนู
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ฟังก์ชันที่จะถูกเรียกเมื่อปุ่มเมนูถูกคลิก
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <img src="/images/logott.png" alt="Logo" className={styles.logo} /> {/* Logo */}
      </Link>
      {/* Icon container to wrap icons and menu button */}
      <div className={styles.iconContainer}>
        <img src="/images/searchlogo.png" alt="search" className={styles.searchIcon} /> {/* Search icon */}
        <img src="/images/newcar.png" alt="newcar" className={styles.newcarIcon} /> {/* Car icon */}
        <img src="/images/location.png" alt="Location" className={styles.locationIcon} /> {/* Location icon */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
      </div>
      {/* ... existing code */}
    </header>
  );
};

export default Header;
