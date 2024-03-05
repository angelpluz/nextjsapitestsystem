import React from 'react';
import styles from '../styles/Organization.module.css'; // Make sure to create this CSS module
import Image from 'next/image';
import Header from '../components/Header';
import ContactEnd from '../components/ContactEnd';
const Organization = () => {
  return (
    <div className={styles.organizationContainer}>
            <Header />
      <img src="/images/company1.jpg" alt="Company History" className={styles.companyImage} />
      <div className={styles.historyContainer}>
      <h1>ประวัติบริษัท</h1>
                    <h2>Toyota Thonburi Co., Ltd.</h2>
                    <p className={styles.historyDescription}> สำนักงานใหญ่แห่งแรกที่ สาขาปิ่นเกล้าตั้งอยู่บริเวณ ถนนอรุณอัมรินทร์ 
                        และมีศูนย์บริการแห่งแรกที่ สาขาเพชรบุรีตัดใหม่  โตโยต้าธนบุรี
                            เป็นที่ยอมรับโดยทั่วกันว่าเป็นดีลเลอร์ 1 ใน 3 อันดับแรกของ ผู้แทน
                            จำหน่ายโตโยต้าชั้นแนวหน้าของประเทศไทย
                            ตั้งแต่ปี 2522 จนถึงปัจจุบัน                            
                    </p>
                  
      </div>
      
      <div className={styles.affiliatesContainer}>
      <div className={styles.affiliateItem}>
        <Image 
          src="/images/logo1.png"
          alt="Toyota Thonburi Used Car"
          width={200} // Replace with the actual width of your image
          height={100} // Replace with the actual height of your image
          className={styles.affiliateImage}
        />
        <div className={styles.affiliateText}>
        <h2 className={styles.redHeading}>บริษัท โตโยต้า ธนบุรี ยูสคาร์ จำกัด</h2>
          <p>ธุรกิจรถใช้แล้วเพื่อการบริการ ซื้อ ขาย แลกเปลี่ยนรถใช้แล้วอย่างมีมาตรฐาน พร้อมบริการ อย่างครบวงจรมาตรฐานโตโยต้าฯ</p>
        </div>
      </div> 
    </div>
    <div className={styles.affiliatesContainer}>
      <div className={styles.affiliateItem}>
        <Image 
          src="/images/logo-bsp.png"
          alt="Toyota Thonburi Used Car"
          width={260} // Replace with the actual width of your image
          height={100} // Replace with the actual height of your image
        
          className={styles.affiliateImage}
        />
        <div className={styles.affiliateText}>
        <h2 className={styles.redHeading}>บริษัท บีเอสพี อินชัวรันส์ โบรคเกอร์ จำกัด</h2>
          <p>นายหน้าประกันภัยวินาศภัย อาทิเช่น ประกันรถยนต์ อัคคีภัย อุบัติเหตุส่วนบุคคล
                                        การเสี่ยงภัยทุกชนิด </p>
        </div>
      </div> 
    </div>


    <div className={styles.affiliatesContainer}>
      <div className={styles.affiliateItem}>
        <Image 
          src="/images/logo3.png"
          alt="Toyota Thonburi Used Car"
          width={200} // Replace with the actual width of your image
          height={100} // Replace with the actual height of your image
          className={styles.affiliateImage}
        />
        <div className={styles.affiliateText}>
        <h2 className={styles.redHeading}>บริษัท บีเอสพี โกลบอล คอร์ปอเรชั่น จำกัด</h2>
          <p>ธุอุปกรณ์ทุกชิ้นคือ "นวัตกรรม" ที่ยกระดับความสวยงาน ควบคู่กับความปลอดภัย</p>
        </div>
      </div> 
    </div>
    <div className={styles.affiliatesContainer}>
      <div className={styles.affiliateItem}>
        <Image 
          src="/images/logo4.png"
          alt="Toyota Thonburi Used Car"
          width={200} // Replace with the actual width of your image
          height={100} // Replace with the actual height of your image
          className={styles.affiliateImage}
        />
        <div className={styles.affiliateText}>
        <h2 className={styles.redHeading}>บริษัท บีเอสพี ลีสซิ่ง จำกัด</h2>
          <p>บริการสินเชื่อรถยนต์ทั่วไปและรถยนต์รับจ้าง สาธารณะ ให้บริการอย่างคุณภาพ ราคาเป็นธรรม</p>
        </div>
      </div> 
    </div>

    <div className={styles.affiliatesContainer}>
      <div className={styles.affiliateItem}>
        <Image 
          src="/images/logo5.png"
          alt="Toyota Thonburi Used Car"
          width={200} // Replace with the actual width of your image
          height={100} // Replace with the actual height of your image
          className={styles.affiliateImage}
        />
        <div className={styles.affiliateText}>
        <h2 className={styles.redHeading}>บริษัท ประภาวดี จำกัด</h2>
          <p>บริการจัดสรรที่ดินให้เช่าแก่บริษัทในเครือทั้งหมด  </p>
        </div>
      </div> 
    </div>


    <div className={styles.affiliatesContainer}>
      <div className={styles.affiliateItem}>
        <Image 
          src="/images/logo6.png"
          alt="Toyota Thonburi Used Car"
          width={200} // Replace with the actual width of your image
          height={100} // Replace with the actual height of your image
          className={styles.affiliateImage}
        />
        <div className={styles.affiliateText}>
        <h2 className={styles.redHeading}>ห้างหุ้นส่วนจำกัด ภัทรนิธิ</h2>
          <p>บริการรับพ่นสีกันสนิมแก่รถยนต์ทั่วไป โดยใช้น้ำยาพ่นที่มีคุณภาพสูง</p>
        </div>
      </div> 
    </div>


    <div className={styles.affiliatesContainer}>
      <div className={styles.affiliateItem}>
        <Image 
          src="/images/logo7.png"
          alt="Toyota Thonburi Used Car"
          width={200} // Replace with the actual width of your image
          height={100} // Replace with the actual height of your image
          className={styles.affiliateImage}
        />
        <div className={styles.affiliateText}>
        <h2 className={styles.redHeading}>บริษัท บีเอสพี ลีสซิ่ง จำกัด</h2>
          <p>บริการสินเชื่อรถยนต์ทั่วไปและรถยนต์รับจ้าง สาธารณะ ให้บริการอย่างคุณภาพ ราคาเป็นธรรม</p>
        </div>
      </div> 
      
    </div>
        <img src="/images/toyotathon2.jpg" alt="Company History" className={styles.companyImage} />
        <div className={styles.historyContainer}>
  <h1>รางวัลและเกียรติยศ</h1>
  <h2>Toyota Thonburi Co., Ltd.</h2>
  <ul>
    <li>Champion Skill Contest</li>
    <li>Saleman Award</li>
    <li>Trainer Award</li>
    <li>TOYOTA President's Award</li>
    <li>Best Sale Award</li>
    <li>Best Sale & Service CS Dealer Award</li>
    <li>KAIZEN Award</li>
    <li>Sales Growth Rate</li>
    <li>Continuous Achievement</li>
    <li>TOYOTA Honor Club 5000</li>
    <li>Excellent Salesman</li>
  </ul>
</div>
    <ContactEnd />
    </div>
  );
};

export default Organization;
