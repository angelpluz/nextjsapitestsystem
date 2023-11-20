import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; // Make sure this path is correct
import styles from '../styles/Home.module.css'; // Make sure this path is correct


interface SalesmanData {
  name: string;
  nickname: string;
  sale_code: string;
  // ระบุคุณสมบัติอื่นๆ ตามที่อยู่ในข้อมูลของคุณ
}
const Home = () => {
  const [salesmanData, setSalesmanData] = useState<SalesmanData | null>(null);

  useEffect(() => {
    const fetchSalesmanData = async () => {
      try {
        const response = await fetch('http://toyotathonburi.co.th/api/salesmandata/search/109A1M');
        const data = await response.json();
        if (data.status) {
          console.log('Data fetched successfully:', data.data);
          setSalesmanData(data.data);
        } else {
          console.log('Data fetch status was false');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSalesmanData();
  }, []);

  return (
    <>
      <Header /> {/* Header is now outside of the main container */}
      <div className={styles.container}>
        <h1 className={styles.title}>ยินดีต้อนรับสู่เว็บไซต์ของฉัน</h1>
        {salesmanData.length > 0 ? (
          <div>
            {salesmanData.map((item, index) => (
              <div key={index}>
                <h2>{item.name} ({item.nickname})</h2>
                <p>Code: {item.sale_code}</p>
                {/* Include additional data display here */}
              </div>
            ))}
          </div>
        ) : (
          <p>กำลังโหลดข้อมูล...</p>
        )}
        {/* More content here */}
      </div>
    </>
  );
};

export default Home;
