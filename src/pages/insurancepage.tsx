import React from 'react';
import { useState } from 'react';
import styles from '../styles/InsurancePage.module.css'; // Make sure the path to your CSS file is correct
import ContactEnd from '../components/ContactEnd';
import Header from '../components/Header';

const InsurancePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    // Add any other fields you need
});
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
      ...formData,
      [name]: value,
  });
};
const handleSubmit = (e) => {
  e.preventDefault();
  // Here you would handle the submission of the form data.
  console.log(formData);
};

    return (
        
        <div className={styles.insuranceContainer}>
              <Header />
          <img src="/images/bsp.png" alt="BSP Insurance" className={styles.insuranceImage} />
          <div className={styles.insuranceContent}>
          <h1 className={styles.heading1}>ต่ออายุประกันภัยรถยนต์</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                {/* Form fields */}
                <label htmlFor="name">ชื่อ - นามสกุล</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange} 
        />
        
        <label htmlFor="email">อีเมล</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange} 
        />




        <label htmlFor="phone">เบอร์โทรศัพท์</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange} 
        />
            <label htmlFor="car">รุ่นรถ</label>
        <input 
          type="text" 
          id="car" 
          name="car" 
          value={formData.car}
          onChange={handleChange} 
        />

<label htmlFor="lineid">LineID</label>
        <input 
          type="text" 
          id="lineid" 
          name="lineid" 
          value={formData.lineid}
          onChange={handleChange} 
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
  <div className={styles.required}>
  ข้อตกลงและนโยบายคุ้มครองข้อมูลส่วนบุคคล ของบริษัทโตโยต้าธนบุรี จำกัด
  </div>
</div>
                
                {/* ...other form fields... */}

                <button type="submit" className={styles.submitButton}>ส่งข้อมูล</button>
            </form>
            <h3 className={styles.insuranceTitle}>บริษัท บีเอสพี อินชัวร์ โบรคเกอร์ จำกัด</h3>
            <p className={styles.description}>
              เป็นบริการนายหน้าประกันภัยวินาศภัยผู้ให้บริการ แนะนำ ประสานงานด้านประกันภัยไม่ว่าจะเป็นการแจ้งเตือนและอำนวยความสะดวกในการทำประกันภัยรถยนต์ ต่ออายุประกันภัยรถยนต์ ประสานงานให้บริการด้านสินไหมทดแทนนอกจากนี้ยังมีบริการอื่นๆ ที่พร้อมช่วยอำนวยความสะดวกให้แก่คุณ
            </p>
            <p className={styles.description}>
              ด้วยทีมงานที่มีประสบการณ์ และระบบจัดการที่ทันสมัย ถูกต้อง แม่นยำ เรามุ่งมั่นตั้งใจ จะพัฒนาในทุกๆ ด้านเพื่อให้การประกันภัยรถยนต์เป็น ง่าย สะดวก สบาย ไว้ใจได้ เพื่อลูกค้าทุกท่าน ทุกวันจันทร์-ศุกร์ เวลา 08.00-18.00 น.
            </p>
            <a href="tel:024799079" className={styles.contactLink}>
              <i className="fa fa-phone"></i> 02 479 9079
            </a>
            <a href="https://www.bspbroker.com/" target="_blank" className={styles.contactLink}>
              <i className="glyphicon glyphicon-share"></i> www.bspbroker.com
            </a>
          </div>
        
          <ContactEnd />
        </div>
      );
};

export default InsurancePage;
