import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Header.module.css'; // Ensure the path to your CSS module is correct
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Correctly named state variable and setter
  const menuRef = useRef(); // Reference to the menu for detecting outside clicks
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
    
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Use the correct setter function 
  };
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
        <div className={styles.menuItem} onClick={toggleDropdown} >
      โปรโมชั่น
      <span className={`${styles.dropdownToggle} ${dropdownOpen ? styles.dropdownToggle : ''}`}></span>
      {isDropdownOpen &&  ( // Use the correct state variable
      
      <div className={`${styles.dropdown} ${isDropdownOpen ? styles.dropdownOpen : ''}`}>
          <Link href="/#" passHref><span>ประจำเดือน</span></Link>
          <Link href="/PromotionSale" passHref><span>ฝ่ายขาย</span></Link>
          <Link href="/#" passHref><span>ศูนย์บริการ</span></Link>
          {/* ... more dropdown items */}
        </div>
      )}
    </div>
      <Link href="/carseries/2" passHref>
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
      <Link href="/careers" passHref>
        <span className={styles.menuItem}>ร่วมงานกับเรา</span>
      </Link>
      <Link href="/NewsandArticle" passHref>
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
