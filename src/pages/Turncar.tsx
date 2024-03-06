// Turncar.tsx
import React, { useState } from 'react';
import styles from '../styles/TurnCar.module.css'; // Update with your actual path
import Header from '../components/Header';
import ContactEnd from '../components/ContactEnd';
const TurnCarPage = () => {
    const [formData, setFormData] = useState({
        model: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        // Add any additional fields specific to turning in a car
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission specific to turning in a car
        console.log(formData);
    };

    return (
        <div className={styles.container}>
                <Header />
        <div className={styles.turnCarFormContainer}>
            <img src="/images/turncar.jpg" alt="Turn Car" className={styles.topImage} />
            <form onSubmit={handleSubmit} className={styles.turnCarForm}>
                {/* Model Dropdown */}
                <label htmlFor="model">รุ่นรถที่ต้องการคืน</label>
                <select id="model" name="model" value={formData.model} onChange={handleInputChange} required>
                <option value="">เลือกซีรีย์รถ</option>
                                 
                                 <option value="Altis">Altis</option>
                                 <option value="Camry">Camry</option>
                                 <option value="Alphard">Alphard</option>
                               
                                 <option value="Hilux Revo Standard Cab">Hilux Revo Standard Cab</option>
                                 <option value="Hilux Revo Smart Cab">Hilux Revo Smart Cab</option>
                                 <option value="Hilux Revo Double Cab">Hilux Revo Double Cab</option>
                                 <option value="Commuter">Commuter</option>
                                 <option value="Hiace">Hiace</option>
                            
                                 <option value="Fortuner">Fortuner</option>
                                 <option value="Yaris Ativ">Yaris Ativ</option>
                                 <option value="Yaris">Yaris</option>
                </select>

                {/* Full Name Input */}
                <label htmlFor="fullName">ชื่อ-นามสกุล</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />

                {/* Email Input */}
                <label htmlFor="email">อีเมล</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

                {/* Phone Number Input */}
                <label htmlFor="phoneNumber">เบอร์โทรศัพท์</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />

                <label htmlFor="preferredDate">วันที่จะเข้ามา เทิร์นรถ</label>
                  <input 
                  type="date" 
                  id="preferredDate" 
                  name="preferredDate" 
                  value={formData.preferredDate} 
                  onChange={handleInputChange} 
                  required 
                />
           <input 
  type="time" 
  id="preferredTime" 
  name="preferredTime" 
  value={formData.preferredTime} 
  onChange={handleInputChange} 
  required 
  className={styles.timeInput} // Add this line
/>

                {/* Showroom Dropdown */}
                <label htmlFor="showroom">สาขาที่ต้องการทดลองขับ</label>
                <select id="showroom" name="showroom" value={formData.showroom} onChange={handleInputChange} required>
                <option value="">เลือกสาขา</option>
                                    <option value="สำนักงานใหญ่ ท่าพระ">สำนักงานใหญ่ ท่าพระ</option>
                                    <option value="จรัญสนิทวงศ์">สาขา จรัญสนิทวงศ์</option>
                                    <option value="พระราม 2">สาขา พระราม 2</option>
                                    <option value="เดอะมอลล์บางแค">สาขา เดอะมอลล์บางแค</option>
                                    <option value="เจริญนคร">สาขา เจริญนคร</option>
                                    <option value="วงศ์สว่าง">สาขา วงศ์สว่าง</option>
                                    <option value="เพชรบุรีตัดใหม่">สาขา เพชรบุรีตัดใหม่</option>
                                    <option value="ลาดพร้าว">สาขา ลาดพร้าว</option>
                                    <option value="รามคำแหง">สาขา รามคำแหง</option>
                                    <option value="อ่อนนุช">สาขา อ่อนนุช</option>
                                    <option value="ประดิษฐ์มนูธรรม">สาขา ประดิษฐ์มนูธรรม</option>
                                    <option value="สุขาภิบาล 3">สาขา สุขาภิบาล 3</option>
                                    <option value="ร่มเกล้า">สาขา ร่มเกล้า</option>
                </select>

                {/* Submit Button */}
                <button type="submit" className={styles.submitButton}>ส่งข้อมูล</button>
            </form>
        </div>
        <ContactEnd />
        </div>
    );
};

export default TurnCarPage;
