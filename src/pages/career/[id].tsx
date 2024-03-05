import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/CareerDetailPage.module.css'; // Adjust the path to your actual CSS file
import ContactEnd from '../../components/ContactEnd';
import Header from '../../components/Header';
const CareerDetailPage = () => {
  const [jobDetail, setJobDetail] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return; // if the id is not yet available, exit early
    }

    const fetchJobDetail = async () => {
      try {
        const response = await fetch(`http://toyotathonburi.co.th/api/career/${id}`);
        const data = await response.json();
        if (data && data.success) {
          setJobDetail(data);
        } else {
          setError('Job details not found');
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
        setError(error);
      }
    };

    fetchJobDetail();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!jobDetail) {
    return <div>Loading...</div>;
  }

  // Render job details using jobDetail data
  return (
    
    <div className={styles.container}>
        <Header />
    <div className={styles.jobDetailContainer}>
      <h1>{jobDetail.position}</h1>
      <div className={styles.jobDescriptionContainer}>
        <div dangerouslySetInnerHTML={{ __html: jobDetail.jobdescription }} />
      </div>
      <p className={styles.bigFont}>
        <span className={styles.redText}>หมายเหตุ: </span> 
        สามารถกรอกใบสมัคร Online ได้ หรือ ส่งใบสมัครได้ที่ 
        <span className={styles.blackText}>Thonburi.fin@gmail.com</span>
      </p>
      <a href={`/#`} className={styles.applyButton}>สมัครเลย</a>
 
    </div>
    <ContactEnd />
    </div>
  );
};


export default CareerDetailPage;
