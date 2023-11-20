import React, { useEffect } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import BottomNavigation from '../components/BottomNavigation'; // ตรวจสอบเส้นทางไฟล์ให้ถูกต้อง

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // กำหนดพื้นหลังสำหรับทั้งเว็บไซต์
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // ใช้สีที่คุณต้องการ
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <BottomNavigation /> {/* นี่จะแสดง bottom navigation bar ในทุกหน้า */}
    </>
  );
}
