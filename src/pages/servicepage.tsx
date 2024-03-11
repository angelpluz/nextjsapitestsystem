// service.tsx
import React, { useState } from 'react';
import styles from '../styles/Service.module.css'; // Adjust the path to your CSS module
import Header from '../components/Header';
import ContactEnd from '../components/ContactEnd';
const ServicePage = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    tel: '',
    email: '',
    model: '',
    kilometres: '',
    licensePlate: '',
    reservationDate: currentDate,
    
    // Other form fields as needed
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleButtonClick = () => {
    // Implement button click logic here
    console.log('Button clicked!');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form data:', formData);
    // Send formData to your backend/API
  };
  

  return (
    <div className={styles.container}>
        <Header />
    <div className={styles.serviceContainer}>
         <img src="/images/ToyotaT24650.jpg" alt="Service Center" className={styles.serviceImage} />
         <h1 className={styles.heading1}>นัดหมายล่วงหน้า</h1>
      {/* Include your image and other form elements here */}
      
      <form onSubmit={handleSubmit} className={styles.serviceForm}>
      <div className={styles.dropdownContainer}>
        <label htmlFor="serviceType" className={styles.label}>ประเภทการซ่อม | SERVICE TYPE</label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleInputChange}
          required
          className={styles.customSelect}
        >
          <option value="">เลือกประเภทการซ่อม</option>
          <option value="">เช็คระยะ</option>
          <option value="">ซ่อมทั่วไป</option>
          <option value="">ซ่อมสี</option>
          {/* Add more options here */}
        </select>
      </div>

        {/* Service Center */}
        <label htmlFor="serviceCenter"className={styles.label}>โชว์รูม | SERVICE CENTER</label>
        <select 
  id="serviceCenter" 
  name="serviceCenter" 
  value={formData.serviceCenter} 
  onChange={handleInputChange} 
  required
  className={styles.serviceCenterSelect}
>
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
  {/* Add additional options here */}
</select>

        {/* Reservation */}
        <label htmlFor="reservationDate"className={styles.label}>วัน-เดือน บำรุงรักษ์ | RESERVATION</label>
        <input
  type="date"
  id="reservationDate"
  name="reservationDate"
  value={formData.reservationDate}
  onChange={handleInputChange}
  required
  className={styles.dateInput} // Make sure styles.dateInput matches your actual class name
/>



<select
  id="reservationTime"
  name="reservationTime"
  value={formData.reservationTime}
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



        {/* <label htmlFor="reservationTime"></label>
        <input
  type="time"
  id="reservationTime"
  name="reservationTime"
  value={formData.reservationTime}
  onChange={handleInputChange}
  required
  className={styles.timeInput} // Make sure styles.timeInput matches your actual class name
/> */}




<label htmlFor="name" className={styles.label}>ชื่อ | NAME *</label>
<input
  type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleInputChange}
  required
  className={styles.inputField} // Use the CSS module class here
  placeholder="" // Optional placeholder text
/>

        {/* Surname Input */}
        <label htmlFor="surname" className={styles.surnameLabel}>นามสกุล | SURNAME *</label>
<input
  type="text"
  id="surname"
  name="surname"
  value={formData.surname}
  onChange={handleInputChange}
  required
  className={styles.surnameInput} // Use the CSS module class here
  placeholder="" // Optional placeholder text
/>

        {/* Telephone Input */}
        <label htmlFor="tel" className={styles.telLabel}>เบอร์โทรศัพท์ | TEL.*</label>
<input
  type="tel"
  id="tel"
  name="tel"
  value={formData.tel}
  onChange={handleInputChange}
  required
  className={styles.telInput} // Use the CSS module class here
  placeholder="" // Optional placeholder text
/>

        {/* Email Input */}
        <label htmlFor="email" className={styles.emailLabel}>อีเมล | EMAIL</label>
<input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleInputChange}
  className={styles.emailInput} // Use the CSS module class here
  placeholder="" // Optional placeholder text
/>

        {/* Model Input */}
        <label htmlFor="model" className={styles.modelLabel}>รุ่นรถ | MODEL *</label>
<input
  type="text"
  id="model"
  name="model"
  value={formData.model}
  onChange={handleInputChange}
  className={styles.modelInput} // Use the CSS module class here
  placeholder="" // Optional placeholder text
/>



<label htmlFor="serviceCenter" className={styles.label}>ระยะเข้าซ่อม | KILOMETRES </label>
<select
  id="kilometres"
  name="kilometres"
  value={formData.kilometres}
  onChange={handleInputChange}
  className={styles.serviceCenterSelect} // Use the CSS module class here
  onChange={handleInputChange}
  required

  
>
  
  <option value="1000">0-1000 กิโลเมตร</option>
  <option value="1001">1001-10000 กิโลเมตร</option>
  <option value="10001">10001-20000 กิโลเมตร</option>
  <option value="20001">20001-30000 กิโลเมตร</option>
  <option value="30001">30001-40000 กิโลเมตร</option>
  <option value="40001">40001-50000 กิโลเมตร</option>
  <option value="50001">50001-60000 กิโลเมตร</option>
  <option value="60001">60001-70000 กิโลเมตร</option>
  <option value="70001">70001-80000 กิโลเมตร</option>
  <option value="80001">80001-90000 กิโลเมตร</option>
  <option value="90001">90001-100000 กิโลเมตร</option>
  <option value="100001">มากกว่า 100000</option>

  {/* Add additional options here */}
</select>




        {/* Kilometres Input */}
        {/* <label htmlFor="kilometres" className={styles.kilometresLabel}>ระยะทางขับ | KILOMETRES *</label>
<input
  type="text"
  id="kilometres"
  name="kilometres"
  value={formData.kilometres}
  onChange={handleInputChange}
  className={styles.kilometresInput} // Use the CSS module class here
  placeholder="" // Optional placeholder text
/> */}

        {/* License Plate Input */}
        <label htmlFor="licensePlate" className={styles.licensePlateLabel}>ทะเบียนรถ | LICENSE PLATE *</label>
<input
  type="text"
  id="licensePlate"
  name="licensePlate"
  value={formData.licensePlate}
  onChange={handleInputChange}
  className={styles.licensePlateInput} // Apply the CSS module class
  required
/>
           <button onClick={handleButtonClick} className={styles.submitButton}>
        ส่งข้อมูล
      </button>
          <p className={styles.serviceText}>
          ตอนนี้เรามีบริการ Mobile Service เรามีศูนย์บริการ 12 ทั่วกทม. 
        เมื่อรถเกิดปัญหา โทรหาเรา 02-479-9009 แจ้งพิกัด สถานที่ อาการข้อมูลเบื้องต้น เรามีหน่วยช่างบริการ เคลื่อนที่ โดยช่างผู้เชี่ยวชาญไปดูแล มั่นใจในทุกการเดินทางได้
หรือ @ Line มาที่ @toyotathonburi เพื่อรับทราบข่าวสาร ข้อมูลโปรโมชั่นดีๆจากโตโยต้าธนบุรี
      </p>
        <img src="/images/MG4858mb.jpg" alt="Service" className={styles.serviceImage} />
        {/* Add your reservation inputs and submit button here */}
      </form>
    </div>
    <ContactEnd />
 </div>
  );
};

export default ServicePage;
