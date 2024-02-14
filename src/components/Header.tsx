import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css'; // Ensure the path to your CSS module is correct
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const threshold = 50;
        setIsScrolled(window.scrollY > threshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      <nav className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
            X
          </button>
        <Link href="/home" passHref>
          <span className={styles.menuItem}>Home</span>
        </Link>
        <Link href="/about" passHref>
          <span className={styles.menuItem}>About</span>
        </Link>
        <Link href="/services" passHref>
          <span className={styles.menuItem}>Services</span>
        </Link>
        <Link href="/contact" passHref>
          <span className={styles.menuItem}>Contact</span>
        </Link>
        
        {/* Add more menu items here */}
      </nav>
    </header>
  );
};

export default Header;
