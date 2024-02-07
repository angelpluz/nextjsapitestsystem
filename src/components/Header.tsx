import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make sure to use window inside a browser environment
      if (typeof window !== 'undefined') {
        const threshold = 50;
        setIsScrolled(window.scrollY > threshold);
      }
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Ensure that all classNames are defined in your CSS module
  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
  <Link href="/" passHref>
  <img src="/images/logott.png" alt="Logo" className={styles.logo} />
</Link>
      <div className={styles.iconContainer}>
        {/* Make sure these images exist and the paths are correct */}
        <img src="/images/searchlogo.png" alt="Search" className={styles.searchIcon} />
        <img src="/images/newcar.png" alt="New Car" className={styles.newcarIcon} />
        <img src="/images/location.png" alt="Location" className={styles.locationIcon} />
        <button className={styles.menuButton} onClick={toggleMenu}>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
      </div>
      {/* Conditional rendering for the menu */}
      {isMenuOpen && (
        <div>
          {/* Menu JSX goes here */}
        </div>
      )}
    </header>
  );
};

export default Header;
