import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import styles from "../Admission/contact.module.scss"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { courseItem } from '../../config/config';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [value, setValue] = React.useState(null);
    // const top100Films = [
    //     { label: 'The Shawshank Redemption', year: 1994 },
    //     { label: 'The Godfather', year: 1972 },
    //     { label: 'The Godfather: Part II', year: 1974 },
    //     { label: 'The Dark Knight', year: 2008 },
    //     { label: '12 Angry Men', year: 1957 },
    //     { label: "Schindler's List", year: 1993 },
    //     { label: 'Pulp Fiction', year: 1994 },
    // ]
  return (
    <div>
        <section className={styles.admission_bnnr}>
           <img src='assets/bannr/banner.jpg' />
        </section>

        
      <section className={styles.admission}>
        <div className='container'>
            <div className={styles.wrp}>
                <div>

                <ContactDetails/>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14251.970981270217!2d88.3941083!3d26.7446076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4473a004a412b%3A0xe727b271ae1570e5!2sNirvana%20School%20of%20Music!5e0!3m2!1sen!2sin!4v1708194242585!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </section>
    </div>
  )
}


function ContactDetails() {
    return(
            <>
            <div className={styles.contactDetails}>
                <h1>Nirvana School of Music</h1>
                <p><i class="fa-solid fa-phone"></i><span> 62960-71630</span></p>
                <p><i class="fa-regular fa-envelope"></i><span> nirvanaschoolofmusic1@gmail.com</span></p>
                <p><i class="fa-solid fa-location-dot"></i><span>Nirvana School of Music, Lane-4, Pintail Village, Dagapur, Siliguri - 734003</span> </p>
                
                <ul className={styles.social_mdia}>
                    <li><Link to="https://www.facebook.com/NSMsiliguri" target='blanck' ><i class="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link ><i class="fa-brands fa-instagram"></i></Link></li>

                </ul>
            </div>

            </>
    )
}