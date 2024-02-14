// src/components/BottomNavigation.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BottomNavigation.module.css';

const BottomNavigation = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      // Check if the scroll position is at the bottom of the page
      if (windowSize + scrollPosition >= bodyHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.bottomNav} ${isBottom ? styles.transparent : ''}`}>
      <Link href="/CarCategory" passHref>
        <div className={styles.navItem}>
        <p className={styles.navLabel}>สินเชื่อ</p>
          <Image src="/images/buy_2.png" alt="สินเชื่อ" width={84} height={24} />
     
        </div>
      </Link>
      <Link href="/service" passHref>
        <div className={styles.navItem}>
        <p className={styles.navLabel}>บริการ</p>
          <Image src="/images/service_bot_2.png" alt="บริการ" width={84} height={24} />
          {/* Icon and label */}
       
        </div>
      </Link>
      <Link href="/insurance" passHref>
        <div className={styles.navItem}>
        <p className={styles.navLabel}>ต่อประกัน</p>
          <Image src="/images/carinbot_2.png" alt="ต่อประกัน" width={84} height={24} />
          {/* Icon and label */}
         
        </div>
      </Link>
      <Link href="/CalculateCar" passHref>
        <div className={styles.navItem}>
        <p className={styles.navLabel}>คำนวนค่างวด</p>
          <Image src="/images/calinstall_2.png" alt="คำนวณค่างวด" width={84} height={24} />
          {/* Icon and label */}
   
        </div>
      </Link>
  
    </nav>
  );
};

export default BottomNavigation;
