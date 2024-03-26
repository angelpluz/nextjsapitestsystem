// pages/MultiStepFormPage.tsx
import React, { useState, useEffect } from 'react';
import CustomSlideShow from '../components/CustomSlideShow';
import MapComponent from '../components/MapComponent';
import Interestform from '../components/Interestform';
import styles from '../styles/MultiStepFormPage.module.css'; 
import Header from '../components/Header';
import ContactEnd from '../components/ContactEnd';

const MultiStepFormPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [mapKey, setMapKey] = useState(Date.now()); // Unique key for the MapComponent

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  // Whenever the currentStep changes to 2 (the step with the map), update the key
  useEffect(() => {
    if (currentStep === 2) {
      setMapKey(Date.now());
    }
  }, [currentStep]);
  const getStepClass = (step) => {
    if (currentStep > step) return "completed";
    if (currentStep === step) return "active";
    return "";
  };
  return (
    <div className={styles.multiStepFormContainer}>
      <Header />
    {/* Step indicators */}
    {/* เดียวสร้าง container ใหญ่ ครอบ ให้ใส Header กับ contarct End ได้ ตอนนี้ ถูกครอบโดย Contrainer หลัก ของ muliplyslide  */}
    <div className={styles.stepIndicatorContainer}>
      {[1, 2, 3].map((step) => (
           <div
           key={step}
           className={`${styles.step} ${currentStep === step ? styles.active : ''} 
                       ${currentStep > step ? styles.completed : ''}`}
         >
          {step}
        </div>
      ))}
    </div>

      {currentStep === 1 && <CustomSlideShow />}
      {currentStep === 2 && <MapComponent key={mapKey} />} 
      {currentStep === 3 && <Interestform />}
      
      <div className={styles.buttonContainer}>
        {currentStep !== 1 && (
          <button className={styles.stepButtonb} onClick={prevStep}>
            ย้อนกลับ
          </button>
        )}
        {currentStep < 3 && (
          <button className={styles.stepButton} onClick={nextStep}>
            ถัดไป
          </button>
        )}
        {/* Include any additional buttons or content here */}
      </div>
      <ContactEnd />
    </div>
    
  );
};

export default MultiStepFormPage;
