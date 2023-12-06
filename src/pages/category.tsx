// src/pages/category.tsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CarTypeSelector from '../components/CarTypeSelector'; // ใช้ component ที่คุณสร้างขึ้นมาสำหรับการเลือกประเภทรถ
import CarCategory from '../components/CategoryCar'; // ใช้ component ที่แสดงรถตามประเภทที่เลือก
import BottomNavigation from '../components/BottomNavigation';
import styles from '../styles/CarCategory.module.css'; // ปรับเส้นทางไฟล์ตามที่ต้องการ

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // เริ่มต้นด้วยการแสดงทุกประเภท

  // ฟังก์ชันที่จะถูกเรียกเมื่อประเภทรถเปลี่ยนไป
  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // อัปเดต state ด้วยประเภทรถที่เลือก
  };

  return (
    <div className={styles.categoryPage}>
      <Header />
      <CarTypeSelector onCategoryChange={handleCategoryChange} />
      <CarCategory selectedCategory={selectedCategory} /> {/* ส่งประเภทรถที่เลือกไปยัง component */}
      <BottomNavigation />
    </div>
  );
};

export default CategoryPage;
