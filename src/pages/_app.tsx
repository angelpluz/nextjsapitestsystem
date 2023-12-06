import React, { useEffect } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation'; // ตรวจสอบเส้นทางไฟล์ให้ถูกต้อง
import LocationList from '../components/LocationList'; // นำเข้า LocationList component

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // กำหนดพื้นหลังสำหรับทั้งเว็บไซต์
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // ใช้สีที่คุณต้องการ
  }, []);

  return (
    <>
        <Header />
      <Component {...pageProps} />
      <LocationList />
      <BottomNavigation /> {/* นี่จะแสดง bottom navigation bar ในทุกหน้า */}
    </>
  );
}
