import { useState } from 'react';
import styles from '../styles/ContactUs.module.css'; // Ensure the path to your CSS module is correct
import Header from '../components/Header';
import ContactEnd from '../components/ContactEnd';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    confirm: false,
    additionalConfirmation: false,
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
    // Here you would handle the submission of the form data.
    // This might include validating the input and sending it to a server.
    console.log(formData);
  };

  return (
    <div className={styles.container}>
         <Header />
         <div className={styles.container1}>  
    <h1 className={styles.title}>ติดต่อเรา</h1>
      <h2 className={styles.secondaryTitle}>สำนักงานใหญ่</h2>
      <p className={styles.address}>313/1 ถนนรัชดาภิเษก, แขวงบุคคโล เขตธนบุรี กรุงเทพมหานคร</p>
      <p className={styles.phone}>02 479 9000</p>

      <form className={styles.form} onSubmit={handleSubmit}>
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
            <label htmlFor="phone">หัวข้อ</label>
        <input 
          type="text" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange} 
        />
      
      <label htmlFor="branch" className={styles.formLabel}>สาขาที่ต้องการติดต่อ</label>
               
      <select 
  id="branch" 
  name="branch" 
  value={formData.branch}
  onChange={handleChange}
  className={styles.selectBranch}
>
<option value="สำนักงานใหญ่">สำนักงานใหญ่</option>
<option value="สำนักงานขายออนไลน์">สาขา สำนักงานขายออนไลน์</option>
<option value="จรัญสนิทวงศ์">สาขา จรัญสนิทวงศ์</option>
<option value="พระราม 2">สาขา พระราม 2</option>
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
  <div className={styles['checkbox-and-label']}>
    <input 
      type="checkbox" 
      id="confirm" 
      name="confirm" 
      checked={formData.confirm}
      onChange={handleChange} 
    />
    <label htmlFor="confirm">ต้องการนัดหมายล่วงหน้า</label>
  </div>
  <span className={styles.required}>
    (กรุณานัดล่วงหน้าอย่างน้อย 1 วัน)
  </span>
</div>




        <label htmlFor="message">ข้อความ</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange}
        ></textarea>

<div className={styles.confirmation}>
  <div className={styles.checkboxAndLabel}>
    <input 
      type="checkbox" 
      id="additionalConfirmation" 
      name="additionalConfirmation" 
      checked={formData.additionalConfirmation || false} 
      onChange={handleChange} 
    />
    <label htmlFor="additionalConfirmation">ยอมรับ</label>
  </div>
  <div className={styles.required}>
    นโยบายความเป็นส่วนตัว
  </div>
</div>


        <button type="submit" className={styles.submitButton}>ส่งข้อความ</button>
      </form>
    
    </div>
    <ContactEnd />
    </div>

  );
};

export default ContactUs;
