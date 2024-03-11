import React from 'react'
import styles from "./contact.module.scss"
import { companyDetails } from '../../config/config';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <section className={styles.admission_bnnr}>
        <img src='assets/bannr/banner_1.webp' />
      </section>
      <section className={styles.admission}>
        <div className='container'>
          <div className={styles.wrp}>
            <div>
              <ContactDetails />
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14251.970981270217!2d88.3941083!3d26.7446076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4473a004a412b%3A0xe727b271ae1570e5!2sNirvana%20School%20of%20Music!5e0!3m2!1sen!2sin!4v1708194242585!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}


function ContactDetails() {
  return (
    <>
      <div className={styles.contactDetails}>
        <h1>Nirvana School of Music</h1>
        <p><i class="fa-solid fa-phone"></i><span> {companyDetails.phoneNo}</span></p>
        <p><i class="fa-regular fa-envelope"></i><span> {companyDetails.email}</span></p>
        <p><i class="fa-solid fa-location-dot"></i><span>{companyDetails.address1}</span> </p>
        <ul className={styles.social_mdia}>
          <li><Link to="https://www.facebook.com/NSMsiliguri" target='blanck' ><i class="fa-brands fa-facebook-f"></i></Link></li>
          <li><Link ><i class="fa-brands fa-instagram"></i></Link></li>
        </ul>
      </div>
    </>
  )
}