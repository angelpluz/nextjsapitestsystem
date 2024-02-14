import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(); // Reference to the menu for detecting outside clicks

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu when clicking outside
      }
    };

    // Listen for clicks outside the menu
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      // Clean up the listener when the component unmounts
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open state
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <Link href="/" passHref>
        <img src="/images/logott.png" alt="Logo" className={styles.logo} />
      </Link>
      <div className={styles.iconContainer}>
        <img src="/images/searchlogo.png" alt="Search" className={styles.searchIcon} />
        <img src="/images/newcar.png" alt="New Car" className={styles.newcarIcon} />
        <img src="/images/location.png" alt="Location" className={styles.locationIcon} />
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
      </div>
      <nav ref={menuRef} className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
          X
        </button>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>โปรโมชั่น</span>
        </Link>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>ราคารถ</span>
        </Link>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>บริการ</span>
        </Link>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>ต่อประกัน</span>
        </Link>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>องค์กร</span>
        </Link>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>ที่ตั้งโชว์รูม</span>
        </Link>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>ทดลองขับ</span>
        </Link>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>เทิร์นรถ</span>
        </Link>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>ร่วมงานกับเรา</span>
        </Link>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>ข่าวสารและกิจกรรม</span>
        </Link>
        <Link href="/#" passHref>
          <span className={styles.menuItem}>ติดต่อ</span>
        </Link>
        {/* Add more menu items here */}
      </nav>
    </header>
  );
};

export default Header;
