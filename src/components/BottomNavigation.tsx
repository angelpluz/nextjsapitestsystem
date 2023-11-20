// src/components/BottomNavigation.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BottomNavigation.module.css';

const BottomNavigation = () => {
  return (
    <nav className={styles.bottomNav}>
      <Link href="/buy" passHref>
        <div className={styles.navItem}>
          <Image src="/images/buy_1.png" alt="สินเชื่อ" width={84} height={24} />
          
        </div>
      </Link>
      <Link href="/service" passHref>
        <div className={styles.navItem}>
          <Image src="/images/service_bot.png" alt="บริการ" width={84} height={24} />
       
        </div>
      </Link>
      <Link href="/insurance" passHref>
        <div className={styles.navItem}>
          <Image src="/images/carinbot.png" alt="ต่อประกัน" width={84} height={24} />
         
        </div>
      </Link>
      <Link href="/calculator" passHref>
        <div className={styles.navItem}>
          <Image src="/images/calinstall.png" alt="คำนวณค่างวด" width={84} height={24} />
          
        </div>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
