// testdrive.tsx
import React, { useState } from 'react';
import styles from '../styles/TestDrive.module.css'; // Update with your actual path
import Header from '../components/Header';
import ContactEnd from '../components/ContactEnd';
import Link from 'next/link';
const TestDrivePage = () => {
  const currentDate = new Date().toISOString().split('T')[0];
    const [formData, setFormData] = useState({
        model: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        reservationDate: currentDate,
        showroom: '',
        
        // Add any other fields you need
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
        // Handle form submission here
        console.log(formData);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = e.target.type === 'checkbox' ? e.target.checked : value;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    return (
        <div className={styles.container}>
               <Header />
        <div className={styles.testDriveFormContainer}>
            <img src="/images/testdrive_0.png" alt="Test Drive" className={styles.topImage} />
            <form onSubmit={handleSubmit} className={styles.testDriveForm}>
                {/* Model Dropdown */}
                <label htmlFor="model">รุ่นรถที่สนใจ</label>
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

                {/* Preferred Date Input */}
                <label htmlFor="reservationDate"className={styles.label}>วันที่จะเข้าทดลองขับ</label>
        <input
  type="date"
  id="reservationDate"
  name="reservationDate"
  value={formData.reservationDate}
  onChange={handleInputChange}
  required
  className={styles.dateInput} // Make sure styles.dateInput matches your actual class name
/>
        
                <label htmlFor="preferredTime">เวลาที่ต้องการทดลองขับ</label>
<select
  id="preferredTime"
  name="preferredTime"
  value={formData.preferredTime}
  onChange={handleInputChange}
  required
  className={styles.timeInput}
>
  <option value="">เลือกเวลา</option>
  <option value="8.30">8.30</option>
  <option value="9.00">9.00</option>
  <option value="9.30">9.30</option>
  <option value="10.00">10.00</option>
  <option value="10.30">10.30</option>
  <option value="11.00">11.00</option>
  <option value="11.30">11.30</option>
  <option value="12.00">12.00</option>
  <option value="12.30">12.30</option>
  <option value="13.00">13.00</option>
  <option value="13.30">13.30</option>
  <option value="14.00">14.00</option>
  <option value="14.30">14.30</option>
  <option value="15.00">15.00</option>
  <option value="15.30">15.30</option>
  <option value="16.00">16.00</option>
  <option value="16.30">16.30</option>
  <option value="17.00">17.00</option>
  <option value="17.30">17.30</option>
  <option value="18.00">18.00</option>
  {/* Add additional options here */}
</select>
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
                {/* Submit Button */}
                <button type="submit" className={styles.submitButton}>ส่งข้อมูล</button>
            </form>
        </div>
        <ContactEnd />
        </div>
    );
};

export default TestDrivePage;
