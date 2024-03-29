import React from 'react';
import styles from '../styles/PolicyPage.module.css'; // Update the path to your CSS module
import ContactEnd from '../components/ContactEnd';
import Header from '../components/Header';
import Link from 'next/link';

const PolicyPage = () => {
  return (
    <div className={styles.container}>
          <Header />
    <div className={styles.policyContainer}>

      <h1 className={styles.header3}>นโยบายความเป็นส่วนตัวสำหรับผู้แทนจำหน่ายรถยน์[โตโยต้าธนบุรี]</h1>
      <div className={styles.textContent}>
      <p className={styles.header1}>บริษัท โตโยต้าธนบุรี จำกัด  เล็งเห็นถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลของท่าน 
      (ตามที่นิยามไว้ด้านล่างนี้) ในนโยบายความเป็นส่วนตัวนี้ ("นโยบายฯ") 
      จะอธิบายการเก็บ ใช้ เปิดเผย และ/หรือโอนไปต่างประเทศของข้อมูลส่วนบุคคลของท่านที่ได้รับจากแหล่งต่าง ๆ
       ตลอดจนสิทธิของท่านและแนวทางปฏิบัติเกี่ยวกับข้อมูลดังกล่าว
                               </p>
                               <h2 className={styles.header2}>
                               1. เกี่ยวกับเรา
                               </h2>
                                <p className={styles.paragraph}>บริษัทฯ เป็นผู้ควบคุมข้อมูลที่เก็บ ใช้ เปิดเผย 
                                และโอนไปต่างประเทศซึ่งข้อมูลส่วนบุคคลของท่าน บริษัทฯเป็นนิติบุคคลที่จัดตั้งขึ้นภายใต้กฎหมายของประเทศไทย
                                 มีสำนักงานใหญ่ตั้งอยู่ที่ 313/1 ถนนรัชดาภิเษก แขวงบุคคโล  เขตธนบุรี  กรุงเทพมหานคร
  บริษัทฯ ได้รับแต่งตั้งเป็นผู้แทนจำหน่ายรถยนต์[โตโยต้าธนบุรี]  จากบริษัท โตโยต้า 
 มอเตอร์ ประเทศไทย จำกัด</p>
    
 <p className={styles.paragraph}>บริษัทฯ เป็นผู้ควบคุมข้อมูลที่เก็บ ใช้ เปิดเผย 
                                และโอนไปต่างประเทศซึ่งข้อมูลส่วนบุคคลของท่าน บริษัทฯเป็นนิติบุคคลที่จัดตั้งขึ้นภายใต้กฎหมายของประเทศไทย มีสำนักงานใหญ่ตั้งอยู่ที่ 313/1 ถนนรัชดาภิเษก แขวงบุคคโล  เขตธนบุรี  กรุงเทพมหานคร
  บริษัทฯ ได้รับแต่งตั้งเป็นผู้แทนจำหน่ายรถยนต์[โตโยต้าธนบุรี]  จากบริษัท โตโยต้า 
 มอเตอร์ ประเทศไทย จำกัด</p>
 <p className={styles.paragraph}>มีวัตถุประสงค์ในการดำเนินกิจการเพื่อการจัดจำหน่ายรถยนต์นั่งส่วนบุคคลและรถยนต์เพื่อการพาณิชย์ภายในประเทศไทยรวมถึงการให้บริการหลังการจำหน่ายเช่นการซ่อมบำรุงรถยนต์การให้สิทธิประโยชน์พิเศษและการให้บริการอื่นๆ 
  ที่เกี่ยวข้องเพื่อประโยชน์และความพึงพอใจสูงสุดของลูกค้าและบุคคลทั่วไป </p>
  <h2 className={styles.header2}>
  2. วิธีการติดต่อเรา
                               </h2>
                               <p className={styles.paragraph}>
                               หากท่านต้องการสอบถามเพิ่มเติมหรือต้องการใช้สิทธิของท่านตามนโยบายฯ นี้ ท่านสามารถติดต่อเราได้ทางเว็บไซต์  
                               หรือตามข้อมูลการติดต่อที่ระบุไว้ด้านล่าง
                               </p>
                               <p className={styles.paragraph}>

                               2.1 ส่งอีเมลถึงเราได้ที่ :{' '}
      <Link href="http://toyotathonburi.com">
        <span>http://toyotathonburi.com</span>
      </Link>
    
                               </p>
                               <p className={styles.paragraph}>2.2โทรศัพท์ติดต่อเราได้ที่หมายเลข:ศูนย์บริการข้อมูลลูกค้า 024799000  </p>
                               <p className={styles.header2}>3.ข้อมูลส่วนบุคคลคืออะไร</p>
                               <p className={styles.paragraph}> “ข้อมูลส่วนบุคคล” หมายถึง ข้อมูลใดก็ตามเกี่ยวกับบุคคล 
                                 ซึ่งทำให้สามารถระบุตัวบุคคลนั้นได้ ไม่ว่าทางตรงหรือทางอ้อม 
                                 แต่ไม่รวมถึงข้อมูลของผู้ถึงแก่กรรมโดยเฉพาะ</p>
                                 <p className={styles.header2}>4. ข้อมูลส่วนบุคคลใดที่เก็บรวบรวม</p>  
                                 <p className={styles.paragraph}> 4.1 ข้อมูลส่วนบุคคลที่เราเก็บรวบรวมขึ้นอยู่กับความสัมพันธ์ของท่านกับเรา และบริการหรือผลิตภัณฑ์ที่ท่านต้องการจากเรา ข้อมูลส่วนบุคคลเกี่ยวกับท่านที่เราอาจเก็บรวมรวม ใช้ เปิดเผย และ/หรือโอนไปยังต่างประเทศ รวมถึงแต่ไม่จำกัดเพียงข้อมูลส่วนบุคคลประเภทดังต่อไปนี้
                                 </p>
                                 <p className={styles.paragraph1}>(ก) รายละเอียดส่วนตัว เช่น คำนำหน้าชื่อ ชื่อ นามสกุล เพศ อายุ อาชีพ ตำแหน่งงาน ที่ทำงาน ตำแหน่ง การศึกษา สัญชาติ วันเกิด สถานภาพทางการสมรส ข้อมูลบนบัตรที่ออกโดยรัฐบาล (เช่น เลขที่บัตรประจำตัวประชาชน เลขหนังสือเดินทาง เลขประจำตัวผู้เสียภาษีอากร ข้อมูลใบอนุญาตขับขี่รถยนต์ เป็นต้น)
                                  ลายมือชื่อ การบันทึกเสียง การบันทึกการสนทนาทางโทรศัพท์ รูปถ่าย การบันทึกภาพจากกล้องวงจรปิด ทะเบียนบ้าน และข้อมูลประจำตัวอื่น ๆ
                             </p>
                             <p className={styles.paragraph1}> (ข) รายละเอียดที่ใช้ติดต่อ เช่น ที่อยู่
                              หมายเลขโทรศัพท์ หมายเลขโทรสาร ข้อมูลตำแหน่งที่ตั้ง ที่อยู่อีเมล LINE ID 
                              บัญชี Facebook Instagram ID และ ID อื่น ๆ จากเว็บไซต์เครือข่ายสังคมออนไลน์
                           </p>
                             <p className={styles.paragraph1}>(ค) รายละเอียดรถยนต์ 
                             เช่น หมายเลขประจำรถยนต์ หมายเลขป้ายทะเบียนรถยนต์ ยี่ห้อ รุ่น ปี สี 
                             หมายเลขเครื่องยนต์หมายเลขตัวถังรถ ประเภทรถยนต์ ระยะทางเป็นไมล์ แบตเตอรี่ แรงดันไฟฟ้า
                              ระดับน้ำมัน การสึกหรอของเบรก ข้อมูลตำแหน่งและการเคลื่อน (เช่น เวลา ตำแหน่ง ความเร็ว)
                               รายละเอียดการประกันภัยรถยนต์ ชุดแต่ง/อุปกรณ์ตกแต่ง รายละเอียดของอุปกรณ์เสริมสำหรับ Connected Service
                                (เช่น อุปกรณ์รับส่งสัญญาณ ซิมการ์ด)สมุดคู่มือทะเบียนรถยนต์เอกสารการตรวจรถยนต์รายละเอียดข้อมูลที่ได้รับจากการใช้ConnectedServicesข้อมูลGPSและตำแหน่งของรถยนต์รายงานประวัติรถยนต์และข้อมูลที่เกี่ยวข้องกับรถยนต์อื่น ๆ
                                   </p>
                             <p className={styles.paragraph1}> (ง) รายละเอียดทางการเงิน เช่น 
                                 ข้อมูลบัตรเครดิตและบัตรเดบิต 
                                 หมายเลขบัญชีและประเภทของบัญชี ข้อมูลพร้อมเพย์
                                  สินทรัพย์หมุนเวียน รายได้และค่าใช้จ่าย และข้อมูลด้านการเงินอื่น ๆ
                                    </p>
                             <p className={styles.paragraph1}>(จ) รายละเอียดธุรกรรม เช่น รายละเอียดการชำระเงิน วันที่และ/หรือเวลาที่ชำระเงิน จำนวนเงินที่ชำระ วิธีการชำระ รายละเอียดเกี่ยวกับการขอเงินคืน การลงทะเบียน ดอกเบี้ย เงินดาวน์ ค่างวดและจำนวนงวด วันที่และสถานที่ซื้อผลิตภัณฑ์หรือบริการ ที่อยู่/วันที่และเวลารับมอบรถ แบบฟอร์มขอใช้บริการ ใบจองซื้อ ใบตอบรับ ลายมือชื่อผู้รับ ใบเสร็จรับเงิน ใบแจ้งหนี้ ธุรกรรม ประวัติธุรกรรม สถานะธุรกรรม และรายละเอียดอื่น ๆ ของบริการหรือผลิตภัณฑ์ที่ท่านซื้อ 
                              </p>
                             <p className={styles.paragraph1}>(ฉ) รายละเอียดด้านการตลาดและการสื่อสาร เช่น ตัวเลือกของท่านในการรับข้อมูลทางการตลาดจากเรา บริษัทในเครือ บริษัทคู่ค้า และตัวเลือกในการติดต่อสื่อสารของท่าน 
                             </p>
                             <p className={styles.paragraph1}>(ช) รายละเอียดลูกค้าเป้าหมาย เช่น รหัสลูกค้าเป้าหมาย รถยนต์และสีรถยนต์ที่ใช้อยู่ในปัจจุบัน ข้อมูลการทดลองขับ แผนการซื้อ รถยนต์ที่ท่านสนใจ รุ่นที่ท่านสนใจ บันทึกข้อมูลการติดตาม (เช่น ข้อมูลการเยี่ยมชมศูนย์บริการรถยนต์ ข้อมูลการจอง) แหล่งที่มา (เช่น จากการมาเยี่ยมชมศูนย์บริการรถยนต์ มีผู้แนะนำมา มอเตอร์โชว์ จากลูกค้าปัจจุบัน เว็บไซต์เครือข่ายสังคมออนไลน์) เหตุผลที่ไม่สามารถปิดการขาย ความสนใจของท่านในกิจกรรมของ TMT 
                              </p>
                             <p className={styles.paragraph1}>(ซ) รายละเอียดประวัติ เช่น บัญชีผู้ใช้ Connected Services ชื่อลงทะเบียนเข้าใช้หรือชื่อผู้ใช้ Application (เช่น T-Connect Application) รายละเอียดประวัติการใช้บริการและผลิตภัณฑ์ของเรา ภาพถ่าย ประวัติการติดต่อ ประวัติการร้องเรียน ความสนใจของท่าน ความต้องการ คำติชม และคำตอบในแบบสอบถามความพึงพอใจ 
                                 </p>
                             <p className={styles.paragraph1}>(ฌ) รายละเอียดทางเทคนิค เช่น ที่อยู่อินเทอร์เน็ตโพรโทคอล (Internet Protocol : IP) ประเภทและเวอร์ชั่นของเบราว์เซอร์ พฤติกรรมและรูปแบบการสืบค้นของท่าน คุกกี้ รหัสอุปกรณ์ (Device ID) รุ่นอุปกรณ์และประเภทของอุปกรณ์ ระยะเวลาและสถานที่ที่เข้าถึง 
                                    </p>
                                    <p className={styles.header2}>5.วิธีการรับและเก็บรวบรวมข้อมูลส่วนบุคคล</p>
                                    <p className={styles.paragraph}>เราอาจได้รับและเก็บรวบรวมข้อมูลส่วนบุคคลของท่านด้วยวิธีการต่าง ๆ ดังนี้</p>
                                    <p className={styles.paragraph1}> (ก) ข้อมูลส่วนบุคคลที่ท่านให้แก่เรา: ท่านอาจให้ข้อมูลส่วนบุคคลของท่านแก่เราโดยตรง มักจะมีขึ้นเมื่อท่านติดต่อเราเมื่อต้องการสอบถามข้อมูล กรอกข้อมูลในแบบฟอร์มออนไลน์หรือกรอกเอกสาร การสมัครสมาชิกหรือลงทะเบียนเพื่อการรับหรือขอทราบข้อมูลผลิตภัณฑ์ บริการ หรือสิทธิประโยชน์ต่าง ๆ จากเรา หรือเมื่อท่านแสดงความคิดเห็นกลับมายังเรา
                               </p>
                                    <p className={styles.paragraph1}>(ข) ข้อมูลส่วนบุคคลที่เราเก็บรวบรวมจากท่านโดยอัตโนมัติ: เราอาจเก็บรวบรวมข้อมูลทางเทคนิคบางประการเกี่ยวกับอุปกรณ์ของท่าน พฤติกรรมและรูปแบบการสืบค้นของท่าน ซึ่งเป็นข้อมูลส่วนบุคคลที่จัดเก็บโดยคุกกี้ (Cookies) และเทคโนโลยีอื่น ๆ ที่คล้ายกัน โดยเราจะแจ้งให้ท่านทราบก่อนการใช้งาน
                                 </p>
                                    <p className={styles.paragraph1}>(ค) ข้อมูลส่วนบุคคลที่ได้รับจากบุคคลภายนอก: บางครั้งเราจะได้รับข้อมูลส่วนบุคคลเกี่ยวกับท่านจากผู้อื่น เช่น บริษัทในเครือ ผู้แทนจำหน่ายรถยนต์โตโยต้า เลกซัส และโตโยต้าชัวร์ ผู้ให้บริการของเรา หรือบริษัทคู่ค้าของเรา หากบริษัทเหล่านั้นได้รับอนุญาตให้เปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่เราตามนโยบายความเป็นส่วนตัวของข้อมูลส่วนบุคคลของบุคคลดังกล่าว และ/หรือซึ่งท่านได้เคยให้ความยินยอมในการเปิดเผยข้อมูลไว้กับบุคคลดังกล่าวแล้วแต่กรณี
                               </p>
                               <p className={styles.header2}>6.วัตถุประสงค์และฐานกฎหมายในการรวบรวมใช้และเปิดเผยข้อมูลส่วนบุคคล</p>
                               <p className={styles.paragraph}>6.1 เราเก็บรวบรวมใช้และเปิดเผยข้อมูลส่วนบุคคลเพื่อวัตถุประสงค์ต่อไปนี้(เรียกรวมกันว่า"วัตถุประสงค์")
                               </p>
                               <p className={styles.paragraph1}>(ก) เพื่อจัดหาผลิตภัณฑ์และบริการให้แก่ท่าน: เพื่อบริหารจัดการ เข้าทำสัญญาและปฏิบัติหน้าที่ของเราตามสัญญา หรือข้อผูกพันใด ๆ ก็ตามที่เรามีร่วมกับท่าน หรือองค์กรที่ท่านเป็นตัวแทน เช่น การจองการทดลองขับ การส่งมอบรถยนต์ การปฏิบัติตามสัญญาซื้อขายผลิตภัณฑ์ บริการที่เกี่ยวข้องกับการชำระเงิน ซึ่งรวมถึงการตรวจสอบ การยืนยัน และการยกเลิกธุรกรรม การรับประกันผลิตภัณฑ์ การเจรจาประกันภัยและบริการอื่น ๆ ที่เกี่ยวข้องกับประกันภัย การลงทะเบียนให้บริการที่เกี่ยวกับรถยนต์และบริการอื่น ๆ การส่งมอบแพคเกจต้อนรับ การให้บริการหลังการขาย เช่นการบำรุงรักษาและการจองการซ่อมรถยนต์ เพื่อระบุตำแหน่งรถยนต์ของท่าน การให้บริการ Connected Services แก่ท่าน เช่น ระบบนำทางเนวิเกเตอร์ บริการช่วยเหลือฉุกเฉิน บริการอำนวยความสะดวกและแก้ปัญหาต่าง ๆ นัดหมายศูนย์บริการ พร้อมตรวจสอบประวัติการซ่อมและข้อมูลรถยนต์ เพื่อพิจารณาการนำเสนอเงินกู้และคะแนนเครดิต เพื่อประมวลผลการจ่ายเงิน ออกใบเสร็จ จำนวนเงินที่ค้างชำระ ใบแจ้งหนี้ และหลักฐานการซื้อ เพื่อซื้อหรือขายรถยนต์มือสองหรือเสนอการประมูล เพื่อทำการประมูลรถยนต์ เพื่อแจ้งให้ท่านทราบเกี่ยวกับการเรียกคืนรถ การให้สิทธิประโยชน์ รวมถึงการให้บริการอื่น ๆ ตามที่เรา และผู้แทนจำหน่ายรถยนต์โตโยต้า เลกซัส และโตโยต้าชัวร์ หรือผู้แทนจำหน่ายรถยนต์โตโยต้าอื่นๆที่เกี่ยวข้องทั่วประเทศ 
                                   มีฐานะเป็นผู้ให้บริการ หรือได้รับการร้องขอจากท่าน เป็นต้น</p>
                               <p className={styles.paragraph1}>(ข) การลงทะเบียนและการยืนยันตัวตน: เพื่อดำเนินการตรวจสอบและยืนยันตัวของท่าน ในการลงทะเบียนและเข้ารับบริการต่าง ๆ จากเรา
                                 </p>
                               <p className={styles.paragraph1}> (ค) เพื่อปรับปรุงการดำเนินธุรกิจ ผลิตภัณฑ์และบริการ: เพื่อการประเมิน วิเคราะห์ จัดการ ปรับปรุง ดำเนินการวิจัย วางแผน ทำแบบสำรวจและวิเคราะห์เชิงสถิติ เพื่อนำไปพัฒนาระบบ คุณภาพและความปลอดภัยของผลิตภัณฑ์และการให้บริการของเรา เช่น ความพึงพอใจเกี่ยวกับผลิตภัณฑ์ ความพึงพอใจเกี่ยวกับการขายผลิตภัณฑ์หรือการให้บริการของผู้แทนจำหน่ายรถยนต์โตโยต้า เลกซัส และโตโยต้าชัวร์ หรือผู้แทนจำหน่ายรถยนต์โตโยต้าอื่นๆที่เกี่ยวข้องทั่วประเทศ
                                    เพื่อประเมินประสิทธิภาพในเรื่องผลิตภัณฑ์ สื่อดิจิทัล และแคมเปญทางการตลาดของเรา รูปแบบและกระแสความนิยมด้านการบริโภค พฤติกรรม เป็นต้น รวมถึงข้อมูลเกี่ยวกับความชอบและความสนใจของท่านในผลิตภัณฑ์หรือการบริการของเรา หรือเพื่อสร้างรายงานแบบรวมและเป็นนิรนาม เพื่อทราบถึงปัญหาและวิธีการแก้ไข หรือเพื่อการฝึกอบรมพนักงาน และการประเมินผลงานของพนักงาน เพื่อปรับปรุงธุรกิจ ผลิตภัณฑ์และบริการ
                                </p>
                               <p className={styles.paragraph1}> (ง) เพื่อจัดการความสัมพันธ์กับท่าน: เพื่อติดต่อสื่อสารกับท่านเกี่ยวกับผลิตภัณฑ์และบริการที่ท่านได้รับจากเรา บริษัทในเครือ ผู้แทนจำหน่ายรถยนต์โตโยต้า เลกซัส และโตโยต้าชัวร์  หรือผู้แทนจำหน่ายรถยนต์โตโยต้าอื่นๆที่เกี่ยวข้องทั่วประเทศ  ผู้ให้บริการของเรา หรือจากบริษัทคู่ค้าของเรา เพื่อแจ้งเตือนท่านรวมไปถึงแจ้งเตือนการต่ออายุทะเบียนรถหรือประกัน เพื่อประมวลผลและอัปเดตข้อมูลของท่านในฐานะสมาชิกของเรา เพื่อให้ข้อมูลเกี่ยวกับรถยนต์ของท่าน จัดเตรียมรายงานการเดินทางและตรวจสอบสถานะและข้อมูลรถยนต์ เพื่อรักษาความสัมพันธ์กับลูกค้าของเรา เพื่ออำนวยความสะดวกให้แก่ท่านในการใช้ผลิตภัณฑ์และบริการ เพื่อการดำเนินการให้ความช่วยเหลือ ประสานงาน รับฟังความคิดเห็น หรือการตอบข้อซักถามที่เกี่ยวข้องกับผลิตภัณฑ์และบริการของเรา
                                   </p>
                               <p className={styles.paragraph1}>(จ) การตลาดและการสื่อสาร: เพื่อการวิเคราะห์ทางการตลาด การแจ้งข้อมูลข่าวสาร การประชาสัมพันธ์ การสื่อสาร การมอบสิทธิพิเศษที่เป็นประโยชน์แก่ท่าน การเชิญให้ท่านเข้าร่วมกิจกรรม และการจัดกิจกรรมส่งเสริมการขายผลิตภัณฑ์หรือการให้บริการของเราและ/หรือ ผู้แทนจำหน่ายรถยนต์โตโยต้า เลกซัส และโตโยต้าชัวร์ บริษัทในเครือของโตโยต้า
                                   หรือผู้แทนจำหน่ายรถยนต์โตโยต้าอื่นๆที่เกี่ยวข้องทั่วประเทศ ผู้ให้บริการของเราที่ได้รับการมอบหมายจากเรา ผ่านช่องทางการติดต่อที่ท่านให้ไว้กับเรา ได้แก่ เว็บไซต์ อีเมล โทรศัพท์ โทรสาร ไปรษณีย์ SMS MMS หรือสื่อสังคมออนไลน์ต่าง ๆ เป็นต้น
                             </p>
                             <p className={styles.paragraph1}>(ฉ) การจัดการด้านเทคโนโลยีสารสนเทศ: เพื่อดูแลจัดการการดำเนินงานด้านเทคโนโลยีสารสนเทศ การจัดการระบบการสื่อสาร การรักษาและตรวจสอบความปลอดภัยด้านเทคโนโลยีสารสนเทศ และการตรวจสอบความปลอดภัยด้านเทคโนโลยีสารสนเทศ การจัดการธุรกิจเพื่อการปฏิบัติตามข้อกำหนด นโยบาย และกระบวนการภายใน
                                 </p>
                             <p className={styles.paragraph1}> (ช) การปฏิบัติตามกฎหมาย: เพื่อปฏิบัติตามกฎหมาย กฎระเบียบ กฎเกณฑ์ คำสั่ง ข้อกำหนดและหน้าที่ตามกฎหมายของเรา
                                </p>
                             <p className={styles.paragraph1}>(ซ) ความเสี่ยง: เพื่อการจัดการความเสี่ยงตรวจสอบประสิทธิภาพ และประเมินความเสี่ยง
                               </p>
                             <p className={styles.paragraph1}>(ฌ) การปกป้องผลประโยชน์ของเรา: เพื่อวัตถุประสงค์ด้านความมั่นคงปลอดภัย เช่น การถ่ายภาพ และ บันทึกวิดิทัศน์ เพื่อใช้สิทธิของเราและปกป้องผลประโยชน์ของเราเมื่อจำเป็นและชอบด้วยกฎหมาย ตัวอย่างเช่น เพื่อตรวจจับ ป้องกัน และตอบสนองต่อข้อร้องเรียน เพื่อจัดการและป้องกันการสูญเสียทรัพย์สิน เพื่อตรวจจับและป้องกันการกระทำผิดภายในสถานที่หรือระบบคอมพิวเตอร์ของเรา
                               </p>
                             <p className={styles.paragraph1}>(ญ) การตรวจจับการทุจริต: เพื่อพิสูจน์ตัวตนของท่าน เพื่อตรวจสอบว่ามีการปฏิบัติตามกฎหมายและกฎระเบียบอื่น ๆ (เช่น เพื่อปฏิบัติตามกฎด้านการป้องกันและปราบปรามการฟอกเงิน และป้องกันการทุจริต) รวมถึงการทำการตรวจสอบและบันทึกเป็นการภายใน การจัดการทรัพย์สิน ฐานข้อมูลด้านการทุจริต ระบบ และการควบคุมธุรกิจอื่น ๆ
                               </p>
                             <p className={styles.paragraph1}>(ฎ) ธุรกรรมองค์กร: ในกรณีของการขาย การโอน การควบรวม การฟื้นฟูกิจการ หรือกรณีอื่นที่คล้ายกัน เราอาจส่งหรือโอนข้อมูลของท่านให้กับบุคคลที่สามหนึ่งฝ่ายหรือมากกว่าในฐานะที่เป็นส่วนหนึ่งของการดำเนินการดังกล่าว
                               </p>
                             <p className={styles.paragraph1}>(ฏ) ชีวิต: เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของบุคคล</p>
                             <p className={styles.paragraph}>6.2 เราเก็บรวบรวม ใช้ เปิดเผย และ/หรือโอนข้อมูลส่วนบุคคลของท่านภายใต้หลักเกณฑ์หรือฐานทางกฎหมาย ประการใดประการหนึ่งต่อไปนี้
                                </p>
                                <p className={styles.paragraph1}> (ก) เพื่อปฏิบัติตามกฎหมายที่เราอยู่ภายใต้บังคับ</p>
                                <p className={styles.paragraph1}>(ข) เพื่อปฏิบัติตามสัญญาที่ท่าน หรือองค์กรที่ท่านเป็นตัวแทน เป็นคู่สัญญากับเราหรือเพื่อใช้ในการดำเนินการตามคำขอของท่านก่อนเข้าทำสัญญานั้น
                                  </p>
                                <p className={styles.paragraph1}> (ค) เป็นการจำเป็นเพื่อประโยชน์โดยชอบตามกฎหมายของเราและของบุคคลภายนอก
                               </p>
                                <p className={styles.paragraph1}>(ง) เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของบุคคล
                                </p>
                                <p className={styles.paragraph1}>(จ) เพื่อประโยชน์สาธารณะ สำหรับการดำเนินภารกิจเพื่อประโยชน์สาธารณะ หรือการใช้สิทธิของเจ้าหน้าที่ของรัฐ
                              </p>
                                <p className={styles.paragraph1}>(ฉ) ในกรณีที่จำเป็นต้องอาศัยความยินยอมจากท่านสำหรับกิจกรรมบางประเภทซึ่งเกี่ยวข้องกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของท่าน เราจะขอความยินยอมจากท่านก่อนการใช้ข้อมูลส่วนบุคคลของท่าน
                                </p>

                                <p className={styles.header2}>7.การเปิดเผยข้อมูลส่วนบุคคล </p>  
                                <p className={styles.paragraph}>7.1 เราอาจเปิดเผยข้อมูลส่วนบุคคลของท่านไปยังบุคคลภายนอกซึ่งเก็บรวบรวม ใช้หรือเปิดเผยข้อมูลส่วนบุคคล เพื่อวัตถุประสงค์ตามนโยบายฯ ฉบับนี้ โดยท่านสามารถอ่านนโยบายส่วนบุคคลของบุคคลภายนอกเหล่านั้นเพื่อศึกษาข้อมูลเพิ่มเติมเกี่ยวกับวิธีการที่บุคคลภายนอกดังกล่าวเก็บรวบรวม ใช้หรือเปิดเผยข้อมูลส่วนบุคคลของท่านได้ ซึ่งท่านเองก็ตกอยู่ภายใต้นโยบายความเป็นส่วนตัวเหล่านั้นแยกต่างหากด้วยเช่นกัน
   </p>
   <p className={styles.paragraph}>7.2 เราอาจเปิดเผยข้อมูลส่วนบุคคลของท่านภายใต้วัตถุประสงค์ ให้แก่บุคคลที่สามดังต่อไปนี้</p>
   <p className={styles.paragraph1}>(ก)	บริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด: เนื่องจากเราเป็นผู้แทนจำหน่ายรถยนต์[โตโยต้าธนบุรี]  ซึ่งได้รับการแต่งตั้งจาก บริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด
                              </p>
   <p className={styles.paragraph1}>(ข)	บริษัทในเครือของบริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัดเนื่องจากบริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด เป็นส่วนหนึ่งของบริษัทในกลุ่มโตโยต้า ซึ่งร่วมมือกันในการให้บริการลูกค้าและให้บริการระบบต่างๆ เราอาจมีความจำเป็นต้องโอนข้อมูลส่วนบุคคลของท่านไปยังบริษัทในเครือของบริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด ดังต่อไปนี้ หรืออนุญาตให้บริษัทในเครือของบริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด เข้าถึงข้อมูลส่วนบุคคลของท่าน เพื่อวัตถุประสงค์ที่ระบุไว้ข้างต้น 
                                    </p>
                                    <p className={styles.paragraph2}>1) บริษัท โตโยต้า ไดฮัทสุ เอ็นจิเนียริ่ง แอนด์ แมนูแฟคเจอริ่ง จำกัด</p>
                                    <p className={styles.paragraph2}>2) บริษัทสยามโตโยต้าอุตสาหกรรม จำกัด</p>
                                    <p className={styles.paragraph2}>3) บริษัท โตโยต้า ออโต้ เวิคส จำกัด</p>
                                    <p className={styles.paragraph2}>4) บริษัท โตโยต้า ออโต้ บอดี้ ประเทศไทย จำกัด</p>
                                    <p className={styles.paragraph2}>5) บริษัท โตโยต้า บอดี้ เซอร์วิส จำกัด</p>
                                    <p className={styles.paragraph2}>6) บริษัท เทคโนโลยียานยนต์โตโยต้า จำกัด</p>
                                    <p className={styles.paragraph2}>7) บริษัท โตโยต้า ลีสซิ่ง (ประเทศไทย) จำกัด</p>
                                    <p className={styles.paragraph2}>8) บริษัท ข้าวรัชมงคล จำกัด</p>
                                    <p className={styles.paragraph2}>9) บริษัท อ็อคชั่น เอ็กซ์เพรส จำกัด</p>
                                    <p className={styles.paragraph2}>10) บริษัท ฮีโน่ แมนูแฟคเจอริ่ง (ประเทศไทย) จำกัด</p>
                                    <p className={styles.paragraph2}>11) บริษัท โตโยต้า มอเตอร์ คอร์ปอเรชัน (ญี่ปุ่น)</p>
                                    <p className={styles.paragraph2}>12) บริษัท โตโยต้า มอเตอร์ เอเชีย แปซิฟิค (สิงคโปร์)</p>
                                    <p className={styles.paragraph}>เราอาจแบ่งปันและรับข้อมูลส่วนบุคคลของท่านจากผู้แทนจำหน่ายและศูนย์บริการรถยนต์ที่ท่านเลือกหรือที่อยู่ใกล้ท่านเพื่อให้บริการแก่ท่าน ท่านสามารถดูข้อมูลเพิ่มเติมได้ที่
                               </p>
                               <p className={styles.paragraph1}>(ค)	ผู้แทนจำหน่ายรถยนต์โตโยต้า เลกซัส และโตโยต้าชัวร์อื่นๆ: เราอาจแบ่งปันและรับข้อมูลส่วนบุคคลของท่านจากผู้แทนจำหน่ายและศูนย์บริการรถยนต์ที่อยู่ใกล้ท่านเพื่อให้บริการแก่ท่าน  
                                    </p>
                               <p className={styles.paragraph1}>(ง) ผู้ให้บริการของเรา: เราอาจแบ่งปันข้อมูลส่วนบุคคลของท่านให้แก่ผู้ให้บริการหรือผู้จัดหาผลิตภัณฑ์บริการจากภายนอกเพื่อให้บริการต่าง ๆ แทนเราหรือเพื่อช่วยในการจัดหาผลิตภัณฑ์และบริการให้แก่ท่าน ซึ่งรวมถึง แต่ไม่จำกัดเพียง
                                 </p>
                                 <p className={styles.paragraph2}>1) ผู้ให้บริการด้านโลจิสติกส์และการขนส่ง</p>
                                 <p className={styles.paragraph2}>2) ผู้ให้บริการช่วยเหลือฉุกเฉิน</p>
                                 <p className={styles.paragraph2}>3) บริษัทที่ให้บริการด้านการวิจัยและสำรวจตลาด</p>
                                 <p className={styles.paragraph2}>4) บริษัทที่ให้บริการด้านการวิเคราะห์</p>
                                 <p className={styles.paragraph2}>5) บริษัทที่ให้บริการด้านการตลาด สื่อโฆษณา การออกแบบ การสร้างสรรค์ และการสื่อสาร</p>
                                 <p className={styles.paragraph2}>6) ผู้ให้บริการด้านโทรคมนาคมและการสื่อสาร</p>
                                 <p className={styles.paragraph2}>7) ผู้ให้บริการด้านการจัดเก็บข้อมูลและบริการคลาวด์</p>

                                 <p className={styles.paragraph1}>(จ)	บริษัทคู่ค้าของเรา: ทั้งในประเทศและต่างประเทศ เช่น ศูนย์บริการซ่อมเร่งด่วน Fix Fit ธุรกิจผลิตและจำหน่ายชิ้นส่วนอะไหล่รถยนต์ (Supplier) ธุรกิจรถเช่า ธุรกิจประกันภัย ธุรกิจสถาบันการเงิน ธุรกิจค้าปลีก ธุรกิจโทรคมนาคม ธุรกิจร้านอาหาร เป็นต้น ที่เราอาจร่วมเสนอหรือเสนอผลิตภัณฑ์หรือบริการให้แก่ท่าน
</p>
                                 <p className={styles.paragraph1}>(ฉ) บุคคลภายนอกตามที่กฎหมายกำหนด: ในบางกรณี เราอาจต้องเปิดเผยหรือแบ่งปันข้อมูลส่วนบุคคลของท่านเพื่อปฏิบัติตามกฎหมาย หรือกฎข้อบังคับ ซึ่งรวมถึง การปฏิบัติตามหน่วยงานที่บังคับใช้กฎหมาย ศาล เจ้าพนักงาน หน่วยงานรัฐ หรือบุคคลภายนอกอื่น ๆ ในกรณีที่เราเชื่อว่าจำเป็นจะต้องปฏิบัติตามหน้าที่ตามกฎหมายหรือกฎข้อบังคับทางกฎหมาย หรือเพื่อการปกป้องสิทธิของเรา สิทธิของบุคคลอื่น หรือเพื่อความปลอดภัยของบุคคล หรือเพื่อตรวจสอบ ป้องกัน หรือจัดการเกี่ยวกับปัญหาการทุจริต หรือด้านความมั่นคงหรือความปลอดภัย
                               </p>
                                 <p className={styles.paragraph1}>(ช) ที่ปรึกษา: ซึ่งรวมถึงทนาย เจ้าหน้าที่เทคนิค และผู้ตรวจสอบบัญชีที่ช่วยเหลือในการดำเนินธุรกิจของเรา และใช้สิทธิเรียกร้องตามกฎหมายและต่อสู้สิทธิเรียกร้องในทางกฎหมาย
                                </p>
                                 <p className={styles.paragraph1}>(ซ) ผู้รับโอนสิทธิและ/หรือหน้าที่: ในกรณีของการฟื้นฟูกิจการ การควบรวมกิจการ การโอนธุรกิจไม่ว่าทั้งหมดหรือส่วนหนึ่ง การขาย การซื้อ การดำเนินกิจการร่วมค้า การมอบ การโอน หรือการจำหน่วยส่วนหนึ่งหรือทั้งหมดของธุรกิจ ทรัพย์สิน หรือหุ้น หรือธุรกรรมอื่นที่คล้ายกัน
                                </p>
                                <p className={styles.paragraph}>7.3 เราอาจเปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่บุคคลภายนอกในกรณีที่กฎหมายกำหนดหรืออนุญาต ดังนั้นหากกฎหมายกำหนดว่าต้องได้รับความยินยอมจากท่าน เราจะขอความยินยอมจากท่านก่อน
                                </p>
                                <p className={styles.header2}>8. การโอนและคุ้มครองข้อมูลส่วนบุคคล</p>
                                <p className={styles.paragraph}>8.1 เนื่องจากเราเป็นผู้แทนจำหน่ายรถยนต์[โตโยต้าธนบุรี]  ซึ่งได้รับการแต่งตั้งจาก บริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด จึงอาจมีการโอนหรือส่งต่อข้อมูลส่วนบุคคลของท่านระหว่างกัน เพื่อการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลภายใต้วัตถุประสงค์ข้างต้น เพื่อให้ท่านสามารถเข้าถึงบริการของเรา เพื่อให้การดูแลลูกค้า เพื่อตัดสินใจเกี่ยวกับการปรับปรุงบริการ เพื่อการพัฒนาเนื้อหา หรือเพื่อวัตถุประสงค์อื่น ที่ระบุในนโยบายฯ นี้
                          </p>
                                <p className={styles.paragraph}>8.2 มีการโอนข้อมูลส่วนบุคคลของท่านไปยังบริษัทในเครือของโตโยต้าในต่างประเทศ เราจะปฏิบัติตามกฎหมายที่เกี่ยวข้องกับข้อมูลส่วนบุคคลของท่าน รวมถึงเราจะปฏิบัติตามมาตรการความปลอดภัยเพื่อให้แน่ใจว่ามีการคุ้มครองข้อมูลส่วนบุคคลของท่านในระดับที่เพียงพอ และเราจะตรวจสอบให้แน่ใจด้วยว่า ผู้รับโอนข้อมูลในต่างประเทศจะให้ความคุ้มครองข้อมูลส่วนบุคคลของท่านด้วยมาตรฐานการคุ้มครองที่เทียบเท่ากับการคุ้มครองภายใต้กฎหมายของประเทศไทยเช่นเดียวกัน หากจำเป็น
                              </p>
                                <p className={styles.paragraph}> 8.3 ในกรณีที่เรามีความจำเป็นในการโอนข้อมูลส่วนบุคคลของท่านไปยังต่างประเทศ หากเราพบว่ามาตรฐานการคุ้มครองข้อมูลส่วนบุคคลในต่างประเทศนั้นไม่เพียงพอตามหลักเกณฑ์การให้ความคุ้มครองข้อมูลส่วนบุคคลที่คณะกรรมการประกาศกำหนด เราจะขอความยินยอมจากท่านหรืออาศัยฐานทางกฎหมายอื่น ๆ ที่เกี่ยวข้องซึ่งอนุญาตให้กระทำได้เพื่อโอนข้อมูลส่วนบุคคลของท่านออกนอกประเทศไทย
                              </p>

                              <p className={styles.header2}>9.ระยะเวลาในการเก็บข้อมูล</p>
                              <p className={styles.paragraph}>9.1 จะเก็บข้อมูลส่วนบุคคลเป็นระยะเวลาเท่าที่จำเป็น เพื่อดำเนินการตามวัตถุประสงค์ที่กำหนดไว้ในนโยบายนี้ และตามหน้าที่ของเราภายใต้กฎหมาย โดยหลังจากข้อมูลส่วนบุคคลของท่านไม่มีความจำเป็นหรือไม่มีกฎหมายให้สามารถเก็บได้อีกต่อไป เราจะลบหรือทำลายข้อมูลส่วนบุคคลนั้น โดยไม่ต้องแจ้งให้ท่านทราบ 
                          </p>
                              <p className={styles.paragraph}>9.2 ระยะเวลาในการเก็บข้อมูลอาจแตกต่างกันขึ้นอยู่กับวัตถุประสงค์ในการเก็บรวบรวมข้อมูลส่วนบุคคล ในกรณีที่จะนำข้อมูลส่วนบุคคลมาใช้เป็นระยะเวลาสั้น ๆ เช่น เพื่องานใดงานหนึ่งเป็นการเฉพาะ กิจกรรมทางการตลาด หรือเพื่อวัตถุประสงค์ในการสรรหาบุคลากร เราอาจลบหรือทำลายข้อมูลนั้นหลังสิ้นสุดระยะเวลาดังกล่าว
                              </p>
                              <p className={styles.paragraph}>9.3 ท่านมีสิทธิที่จะให้เราลบ ทำลาย หรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวท่านได้ในบางกรณี เว้นแต่เรามีความจำเป็นที่จะต้องเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้ตามกฎหมายกำหนด
                                </p>
                                <p className={styles.header2}>10. นโยบายความเป็นส่วนตัวของผู้เยาว์</p>
                                <p className={styles.paragraph}>ผลิตภัณฑ์ บริการและเว็บไซต์ของเราไม่ได้มีเป้าหมายหรือเจตนาที่จะเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์ที่อายุต่ำกว่า 20 ปี บุคคลเสมือนไร้ความสามารถ และบุคคลไร้ความสามารถ หากท่านเป็นผู้เยาว์ บุคคลเสมือนไร้ความสามารถ หรือบุคคลไร้ความสามารถซึ่งต้องการจะติดต่อดำเนินการกับเรา ท่านต้องได้รับความยินยอมจากผู้ปกครองตามที่กฎหมายกำหนด ผู้พิทักษ์ตามกฎหมายหรือผู้อนุบาลก่อนที่จะติดต่อเราหรือให้ข้อมูลส่วนบุคคลของท่านแก่เรา
                               </p>
                               <p className={styles.header2}>11.บริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัดหรือผู้แทนจำหน่ายรถยนต์โตโยต้าอื่นๆที่เกี่ยวข้องทั่วประเทศ
                                </p>
                                <p className={styles.paragraph}> TMT และผู้แทนจำหน่ายรถยนต์โตโยต้าอื่นๆที่เกี่ยวข้องทั่วประเทศ  อื่นๆ ที่เกี่ยวข้องเพื่อประโยชน์ของท่าน เราจะมีการเปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่บริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด เนื่องจากเราเป็นผู้แทนจำหน่ายรถยนต์[โตโยต้าธนบุรี] 
                                 ซึ่งได้รับการแต่งตั้งจาก บริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด อย่างไรก็ตามเรา และ บริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด เป็นนิติบุคคลแยกจากกันและต่างมีนโยบายความเป็นส่วนตัวของตนเอง หากท่านมีข้อสงสัยเกี่ยวกับแนวทางปฎิบัติในการคุ้มครองข้อมูลส่วนบุคคลของบริษัท
                                  โตโยต้า มอเตอร์ ประเทศไทย จำกัด กรุณาติดต่อไปที่บริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด โดยตรง 
                                  เพื่อให้มั่นใจว่าท่านเข้าใจแนวทางและวิธีปฎิบัติในการคุ้มครองข้อมูลส่วนบุคคลของบริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด โดยเราจะไม่มีส่วนรับผิดชอบในการปฎิบัติตามกฎหมายที่เกี่ยวข้องของบริษัท โตโยต้า มอเตอร์ ประเทศไทย จำกัด  
                                </p>
                                <p className={styles.header2}>12.สิทธิในข้อมูลส่วนบุคคลของท่าน</p>
                                <p className={styles.paragraph}>ท่านมีสิทธิต่อไปนี้เกี่ยวกับข้อมูลส่วนบุคคลของท่านที่อยู่ในความครอบครองของเรา หากท่านประสงค์จะขอใช้สิทธิ ท่านสามารถติดต่อเราได้ตามรายละเอียดในหัวข้อ "วิธีการติดต่อเรา" ข้างต้น 
                                </p>
                                <p className={styles.paragraph}> 12.1 สิทธิในการเข้าถึง 
                                    ท่านอาจขอเข้าถึงหรือขอทราบรายละเอียดของข้อมูลส่วนบุคคลที่ท่านให้ไว้แก่เราได้ เว้นแต่ เป็นการปฏิเสธตามกฎหมายหรือคำสั่งศาล หรือ การเข้าถึงหรือขอทราบรายละเอียดนั้นจะส่งผลกระทบที่อาจก่อให้เกิดความเสียหายต่อสิทธิและเสรีภาพของผู้อื่น
                                </p>
                                <p className={styles.paragraph}>12.2  สิทธิในการแก้ไขข้อมูลให้ถูกต้อง
                                    ท่านมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลของท่านหากข้อมูลส่วนบุคคลเกี่ยวกับท่านที่อยู่ในความครอบครองของเรานั้นไม่ถูกต้องหรือไม่สมบูรณ์
                                </p>
                                <p className={styles.paragraph}>12.3 สิทธิในการขอให้ลบหรือทำลายข้อมูล
                                    ท่านมีสิทธิขอให้เราลบหรือทำลาย หรือทำให้ข้อมูลส่วนบุคคลของท่านเป็นข้อมูลที่ไม่สามารถระบุตัวท่านได้ ในกรณีดังต่อไปนี้
                                </p>
                                <p className={styles.paragraph1}>(ก) ข้อมูลส่วนบุคคลที่ไม่มีความจำเป็นที่จะต้องดำเนินการตามวัตถุประสงค์ในการเก็บรวบรวมหรือใช้อีกต่อไป
                                </p>
                                <p className={styles.paragraph1}>(ข) ข้อมูลส่วนบุคคลที่ท่านได้เพิกถอนความยินยอมให้เราทำการเก็บรักษา ใช้ และเปิดเผย และเราได้ทำการตรวจสอบแล้ว ไม่มีเหตุตามกฎหมายที่เราจะสามารถเก็บรวบรวมหรือใช้อีกต่อไป
                                    </p>
                                <p className={styles.paragraph1}>(ค) ข้อมูลส่วนบุคคลที่ท่านได้ทำการคัดค้านมิให้เราทำเก็บรวบรวมหรือใช้อีกต่อไป และเราไม่สามารถปฏิเสธคำขอคัดค้านโดยอาศัยข้อยกเว้นทางกฎหมายที่มีผลใช้บังคับ
                                    </p>
                                <p className={styles.paragraph1}>(ง) ข้อมูลส่วนบุคคลที่ท่านขอคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของท่านเพื่อวัตถุประสงค์เกี่ยวกับการตลาดแบบตรง
                                    </p>
                                <p className={styles.paragraph1}>(จ) ข้อมูลส่วนบุคคลนั้นมีการเก็บรวบรวม ใช้ และเปิดเผยโดยมิชอบด้วยกฎหมาย
                                    ท่านมีสิทธิขอให้ลบหรือทำลายข้อมูลส่วนบุคคลที่ท่านให้ไว้ข้างต้น เว้นแต่เข้าข้อยกเว้นตามกฎหมาย เช่น การเก็บข้อมูลส่วนบุคคลนั้นมีความจำเป็นตามวัตถุประสงค์เพื่อการปฏิบัติตามสัญญา หรือเพื่อวัตถุประสงค์ในการก่อตั้งสิทธิเรียกร้องตามกฎหมาย ปฏิบัติตาม ใช้สิทธิเรียกร้องตามกฎหมาย หรือยกขึ้นต่อสู้ข้อสิทธิเรียกร้องตามกฎหมาย หรือวัตถุประสงค์อื่นที่กฎหมายกำหนดไว้
                                </p>
                                <p className={styles.paragraph}> 12.4 สิทธิในการจำกัดการใช้
                                    ท่านมีสิทธิขอให้เราระงับการใช้ข้อมูลส่วนบุคคลของท่านได้ในกรณีดังต่อไปนี้</p>
                                    <p className={styles.paragraph1}>(ก) ท่านได้ขอให้เราแก้ไขข้อมูลส่วนบุคคลของท่านให้ถูกต้อง เป็นปัจจุบัน สมบูรณ์ และเราอยู่ในขั้นตอนการตรวจสอบคำขอของท่าน
                                </p>
                                    <p className={styles.paragraph1}>(ข) ท่านได้ขอให้ระงับการใช้ข้อมูลที่เราอาจเก็บรวบรวม ใช้ หรือเปิดเผยโดยมิชอบ แทนการลบหรือทำลายข้อมูลส่วนบุคคลดังกล่าว
                                    </p>
                                    <p className={styles.paragraph1}>(ค) เราหมดความจำเป็นในการเก็บข้อมูลส่วนบุคคลของท่านตามวัตถุประสงค์ในการเก็บรวบรวม แต่ท่านมีความจำเป็นต้องขอให้เราเก็บรักษาไว้เพื่อใช้ในการก่อตั้งสิทธิเรียกร้องตามกฎหมาย การปฏิบัติตามหรือการใช้สิทธิเรียกร้องตามกฎหมาย หรือการยกขึ้นต่อสู้สิทธิเรียกร้องตามกฎหมาย เพื่อประโยชน์ของท่าน
                                    </p>
                                    <p className={styles.paragraph1}>(ง) ท่านได้คัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของท่านโดยอาศัยหรืออ้างประโยชน์สาธารณะ หรือการใช้อำนาจรัฐ หรือประโยชน์โดยชอบด้วยกฎหมาย และเราอยู่ในขั้นตอนการตรวจสอบคำขอของท่าน
                                    </p>
                                    <p className={styles.paragraph1}>(จ) ท่านได้คัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของท่านโดยอาศัยหรืออ้างการศึกษาวิจัยทางวิทยาศาสตร์ ประวัติศาสตร์ หรือสถิติ (หากมี) และเราอยู่ในขั้นตอนการตรวจสอบคำขอของท่าน
                                   </p>

                                   <p className={styles.paragraph}> 12.5 สิทธิในการคัดค้าน
                                    ท่านมีสิทธิคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลได้ ในกรณีดังต่อไปนี้</p>
                                    <p className={styles.paragraph1}>(ก) เป็นการดำเนินการเพื่อประโยชน์โดยชอบด้วยกฎหมายของเราหรือของบุคคลอื่น</p>
                                    <p className={styles.paragraph1}>(ข) เป็นการดำเนินการเพื่อประโยชน์สาธารณะ หรือการใช้อำนาจรัฐที่ได้มอบให้แก่เรา</p>
                                    <p className={styles.paragraph1}>(ค) กรณีที่เราเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของท่านเพื่อวัตถุประสงค์ทางการตลาดแบบตรง
                                    </p>
                                    <p className={styles.paragraph1}>(ง) เป็นการดำเนินการเพื่อวัตถุประสงค์เกี่ยวกับการศึกษาวิจัยทางวิทยาศาสตร์ ประวัติศาสตร์ หรือสถิติ (หากมี)
                                    หากท่านใช้สิทธิในการคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลดังกล่าว ท่านมีสิทธิแจ้งความประสงค์ว่าจะให้เราลบหรือจำกัดการใช้ข้อมูลส่วนบุคคลของท่านเพิ่มเติมได้
                                </p>

                                <p className={styles.paragraph}> 12.6 สิทธิในการโอนย้าย
                                    ท่านมีสิทธิขอรับข้อมูลส่วนบุคคลของท่านที่เราเก็บรวบรวมไว้ โดยขอให้เราส่งข้อมูลดังกล่าวให้ท่านในรูปแบบเอกสาร
                                    หรือข้อมูลอิเล็กทรอนิกส์โดยวิธีการอัตโนมัติได้ เว้นแต่ การขอโอนย้ายข้อมูลดังกล่าวไม่สามารถดำเนินการได้ภายใต้
                                    ข้อจำกัดของวิธีการของเรา</p>
                                    <p className={styles.paragraph}>12.7 สิทธิในการเพิกถอนความยินยอม
                                    ท่านมีสิทธิถอนความยินยอมในการเก็บรวบรวม ใช้ หรือเปิดเผยได้ หากเป็นกรณีที่ท่านได้เคยให้ความยินยอมไว้กับเรา เว้นแต่มีข้อจำกัดสิทธิในการถอนความยินยอมโดยกฎหมาย หรือการปฏิบัติหน้าที่ตามสัญญาของเราที่เป็นประโยชน์แก่ท่าน ทั้งนี้ การถอนความยินยอมของท่านจะไม่ส่งผลกระทบต่อ การเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลที่ท่านได้ให้ความยินยอมไปแล้ว
                                </p>
                                    <p className={styles.paragraph}>12.8 สิทธิในการร้องเรียน
                                    ท่านมีสิทธิร้องเรียนเกี่ยวกับการเก็บรวบรวม ใช้ เปิดเผยข้อมูลส่วนบุคคลได้ ในกรณีที่พบว่าเราฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมาย โดยท่านสามารถร้องเรียนได้ผ่านช่องทางการติดต่อของเรา และท่านอาจร้องเรียนกรณีดังกล่าวไปยังคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลได้
                                </p>
                                <p className={styles.header2}> 13. การแก้ไขนโยบายฯ นี้</p>
                                <p className={styles.paragraph}>13.1 เราอาจแก้ไขนโยบายฯ นี้เป็นครั้งคราวเพื่อให้สอดคล้องกับการใช้ข้อมูลส่วนบุคคลของท่านที่เปลี่ยนแปลงไป และเพื่อให้สอดคล้องกับกฎหมายที่บังคับใช้ โดยเราจะแจ้งนโยบายที่เปลี่ยนแปลงให้ท่านทราบผ่านช่องทางการติดต่อของเรา
                                  </p>
                                <p className={styles.paragraph}>13.2 เราจะใช้นโยบายฯ ฉบับล่าสุด สำหรับอ้างอิงวิธีการในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของท่าน
                                </p>
                                <p className={styles.header2}>นโยบายฯนี้มีผลบังคับวันที่ 27 พฤษภาคม 2563และให้ใช้แทนนโยบายความเป็นส่วนตัวต่าง ๆ ที่เรากำหนดมาก่อนหน้านี้ทั้งหมด
                                </p>


        {/* The text from the image would go here as paragraph <p> elements */}
      </div>
    </div>
    <ContactEnd />
    </div>
  );
};

export default PolicyPage;
