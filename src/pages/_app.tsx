import React, { useEffect } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation'; // ตรวจสอบเส้นทางไฟล์ให้ถูกต้อง
import LocationList from '../components/LocationList'; // นำเข้า LocationList component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowroomPage from './ShowroomPage'; // Make sure to import your ShowroomPage component


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // กำหนดพื้นหลังสำหรับทั้งเว็บไซต์
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // ใช้สีที่คุณต้องการ
  }, []);

  return (
    <>
        <Header />
      <Component {...pageProps} />
   
      <BottomNavigation /> {/* นี่จะแสดง bottom navigation bar ในทุกหน้า */}
    </>
  );
}
// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={LocationList} />
//         <Route path="/showroom/:id" component={ShowroomPage} />
//         {/* Add other routes here */}
//       </Switch>
//     </Router>
//   );
// }