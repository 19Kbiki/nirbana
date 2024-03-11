import React from 'react';
import { useName } from '../../nameContext';// Import the useName hook
import styles from "./successful.module.scss"
import { Link } from 'react-router-dom';
const Successfull = () => {
  const { name } = useName(); // Access the name from the context

  return (
    <div className={styles.thanx}>
      <div className={styles.box}>
      <div className={styles.checkIcon}>
          {/* Replace the SVG code with your SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="#4CAF50">
            <path d="M3.707 10.293a1 1 0 0 1 1.414-1.414l5.293 5.293 9.586-9.586a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1-0.001-1.414z"/>
          </svg>
        </div>

        <h1>Thank You {name || 'Guest'} for your enquiry !</h1>
        <p>Our team will contact you shortly.</p>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default Successfull;