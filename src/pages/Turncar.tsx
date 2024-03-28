// TurnCarPage.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/TurnCar.module.css'; // Update with your actual path
import Header from '../components/Header';
import ContactEnd from '../components/ContactEnd';
import Link from 'next/link';

const TurnCarPage = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    model: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    reservationDate: currentDate,
    // Add any additional fields specific to turning in a car
  });

  const [fileSets, setFileSets] = useState<File[][]>([[]]);
  const [fileNames, setFileNames] = useState<string[][]>([[]]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = e.target.type === 'checkbox' ? e.target.checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleFileChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setFileSets(prevFileSets => {
      const newFileSets = [...prevFileSets];
      newFileSets[index] = files;
      return newFileSets;
    });
    setFileNames(prevFileNames => {
      const newFileNames = [...prevFileNames];
      newFileNames[index] = files.map(file => file.name);
      return newFileNames;
    });
  };

  const addImageSet = () => {
    setFileSets(prevFileSets => [...prevFileSets, []]);
    setFileNames(prevFileNames => [...prevFileNames, []]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();
    // Append text fields to FormData
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Append files to FormData
    fileSets.forEach((fileSet) => {
      fileSet.forEach((file) => {
        data.append('images', file); // Ensure your backend expects 'images' as the key
      });
    });

    try {
      // Send the form data with the POST request
      const response = await fetch('http://110.78.166.170/api/turn-car', { // Update the URL to your endpoint
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        // Handle the response if needed
        console.log('Success:', response);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

    return (
        <div className={styles.container}>
                <Header />
        <div className={styles.turnCarFormContainer}>
            <img src="/images/sure.png" alt="Turn Car" className={styles.topImage} />
            <form onSubmit={handleSubmit} className={styles.turnCarForm}>
                {/* Model Dropdown */}
                <label htmlFor="model">รุ่นรถที่จะนำมา เทิร์น</label>
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

                <label htmlFor="reservationDate"className={styles.label}>วันที่จะเข้ามาเทิร์นรถ</label>
        <input
  type="date"
  id="reservationDate"
  name="reservationDate"
  value={formData.reservationDate}
  onChange={handleInputChange}
  required
  className={styles.dateInput} // Make sure styles.dateInput matches your actual class name
/>

<label htmlFor="preferredTime">เวลาที่จะเข้ามาเทิร์นรถ</label>
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

<label htmlFor="preferredDate">รูปรถที่จะนำมา เทิร์น</label>
                {/* Showroom Dropdown */}
              {fileSets.map((fileSet, index) => (
        <div key={index} className={styles.fileInputContainer}>
          <input
            type="file"
            name={`images[]`}
            onChange={handleFileChange(index)}
            accept="image/*"
            multiple
            className={styles.formField}
          />
          <div className={styles.fileNameDisplay}>
            {fileNames[index] && fileNames[index].map((name, fileIndex) => (
              <span key={fileIndex} className={styles.fileName}>{name}</span>
            ))}
          </div>
        </div>
      ))}

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
      <button type="button" onClick={addImageSet} className={styles.addButton}>
        เพิ่มรูปภาพ
      </button>

                {/* Submit Button */}
                <button type="submit" className={styles.submitButton}>ส่งข้อมูล</button>
            </form>
            
            </div>
            
        <ContactEnd />
        </div>
    );
};

export default TurnCarPage;
