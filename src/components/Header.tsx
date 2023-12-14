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
        <img src="/images/logott.png" alt="Logo" className={styles.logo} /> {/* โลโก้ */}
      </Link>
  <img src="/images/searchlogo.png" alt="search" className={styles.searchIcon} /> {/* ไอคอน location */}
  <img src="/images/newcar.png" alt="newcar" className={styles.newcarIcon} /> {/* ไอคอน location */}

      <img src="/images/location.png" alt="Location" className={styles.locationIcon} /> {/* ไอคอน location */}

      <button className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.menuLine}></span>
        <span className={styles.menuLine}></span>
        <span className={styles.menuLine}></span>
      </button>
      {/* เงื่อนไขที่จะแสดงเมนูตามสถานะของ isMenuOpen */}
      {isMenuOpen && (
        <nav className={isMenuOpen ? styles.navOpen : styles.nav}>
  <a href="/about">About</a>
  <a href="/services">Services</a>
  <a href="/contact">Contact</a>
</nav>

      )}
    </header>
  );
};

export default Header;
