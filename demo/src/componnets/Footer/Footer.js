import React from 'react'
import styles from "../Footer/Footer.module.scss"
import { footer } from '../../config/config'
import { Link } from '@mui/material';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer >
        <div className='container'>
          <div className={styles.logo}>
            <img src='assets/logo.png' alt=''/>
          </div>

          <div className={styles.wrp}>
            {footer.map((ele)=>{
              return (
                <div className={styles.items}> 
                <h2>{ele.head}</h2>
                <ul>
                {ele.list.map((item, index) => (
                    <li key={index}>
                      {item.url ? (
                        <a href={item.url}>{item.listItem}</a> 
                      ) : (
                        item.listItem
                      )}
                    </li>
                  ))}
                </ul>
                </div>
              )
            })}
          </div>
        </div>
      </footer>
        <div className={styles.footer_btm}>
          <div className='container'>
              <div className={styles.wrp}>
                        <p>&copy; {currentYear} All right Reserve</p>
                        <p> Designed with 💕 by <a href="https://www.linkedin.com/in/linktoavijit/" target='_blank' >Madiocre</a> </p>

              </div>

          </div>
        </div>
    </div>
  )
}
