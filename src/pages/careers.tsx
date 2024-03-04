// pages/careers.tsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/Careers.module.css'; // The path to your CSS module.
import ContactEnd from '../components/ContactEnd';
const CareersPage = () => {
  const [careers, setCareers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://toyotathonburi.co.th/api/career');
        const data = await response.json();
        if (data && data.success) {
          setJobs(data.data);
          console.log(data.data);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);



  return (
    <div className={styles.container}>
          <h1>ร่วมงานกับเรา</h1>
      <div className={styles.jobListing}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <div className={styles.jobTitle}>{job.position}</div>
            <div className={styles.jobDescription}>{job.description}</div>
            <a href={`/career/${job.id}`} className={styles.applyButton}>ดูรายละเอียด</a>
            {/* <a href="/apply" className={styles.applyButton}>สมัครเลย</a> */}
          </div>
        ))}
      </div>
      <ContactEnd />
    </div>
  );
};

export default CareersPage;
