
import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from '../styles/ContactPage.module.css'; // Adjust the path to your CSS module

export default function ContactPage() {
  return (
<div className={styles.pageContainer}>
      {/* <h1>Contact Us</h1> */}
      <ContactForm />
    </div>
  );
}
