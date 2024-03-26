import React, { useState } from 'react';
import styles from '../styles/interestfrom.module.css'; // Make sure the path matches where your CSS module is located

const Interestform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>ติดต่อเรา</h1>
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

        <label htmlFor="message" className={styles.label}>ข้อความ</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.inputField}
        />

        <button type="submit" className={styles.submitButton}>ส่งข้อความ</button>
      </form>
    </div>
  );
};

export default Interestform;
