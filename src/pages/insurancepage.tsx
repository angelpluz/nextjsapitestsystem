import React from 'react';
import styles from '../styles/InsurancePage.module.css'; // Make sure the path to your CSS file is correct
import ContactEnd from '../components/ContactEnd';

const InsurancePage = () => {
    return (
        <div className={styles.insuranceContainer}>
          <img src="/images/bsp.jpg" alt="BSP Insurance" className={styles.insuranceImage} />
          <div className={styles.insuranceContent}>
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
