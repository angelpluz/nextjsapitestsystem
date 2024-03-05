
import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from '../styles/ContactPage.module.css'; // Adjust the path to your CSS module

import Header from '../components/Header';
export default function ContactPage() {
  return (
<div className={styles.pageContainer}>
<Header />
      {/* <h1>Contact Us</h1> */}
      <ContactForm />
    </div>
  );
}
