import React from 'react';
import styles from '../styles/CarCard.module.css'; // ต้องสร้างไฟล์ CSS นี้

const CarCard = ({ featured, name, price, image }) => {
  const cardStyles = featured ? styles.featuredCard : styles.card;

  return (
    <div className={cardStyles}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price} บาท</p>
      {/* แสดงข้อมูลอื่นๆ ตามที่มี */}
    </div>
  );
};

export default CarCard;
