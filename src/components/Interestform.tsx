import React, { useState } from 'react';
import styles from '../styles/Interestfrom.module.css'; // Make sure the path matches where your CSS module is located
import Link from 'next/link';
const Interestform = () => {
  const [formData, setFormData] = useState({
    name: '',
    lname: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = e.target.type === 'checkbox' ? e.target.checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.container}>
      
      <h1 className={styles.tittle1}>กรอกข้อมูล</h1>
      <div className={styles.container1}>
      <form onSubmit={handleSubmit} className={styles.serviceForm}>
        
        <label htmlFor="name" className={styles.label}>ชื่อ*</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={styles.inputField}
        />

<label htmlFor="lname" className={styles.label}>นามสกุล*</label>
        <input
          type="text"
          id="lname"
          name="lname"
          required
          value={formData.lname}
          onChange={handleChange}
          className={styles.inputField}
        />
     <label htmlFor="phoneNumber" className={styles.telLabel}>เบอร์โทรศัพท์มือถือ*</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          className={styles.telInput}
        />
        <label htmlFor="email" className={styles.emailLabel}>อีเมล*</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={styles.emailInput}
        />

   

        <label htmlFor="message" className={styles.label}>วันที่สะดวกให้ติดต่อกลับ</label>
        <input
  type="date"
  id="reservationDate"
  name="reservationDate"
  value={formData.reservationDate}
  onChange={handleInputChange}
  required
  className={styles.dateInput} // Make sure styles.dateInput matches your actual class name
/>
<div className={styles.confirmation}>
  <div className={styles.checkboxAndLabel}>
    <input 
      type="checkbox" 
      id="additionalConfirmation" 
      name="additionalConfirmation" 
      checked={formData.additionalConfirmation || false} 
      onChange={handleChange} 
    />
    <label htmlFor="additionalConfirmation">ข้าพเจ้ายอมรับ</label>
  </div>
  <Link href="/PolicyPage" passHref>
  <div className={styles.required}>
  ข้อตกลงและนโยบายคุ้มครองข้อมูลส่วนบุคคล ของบริษัทโตโยต้าธนบุรี จำกัด
  </div>
  </Link>
</div>
        <button type="submit" className={styles.submitButton}>ส่งข้อความ</button>
      </form>
    </div>
    </div>
  );
};

export default Interestform;
