import React from 'react'
import { EnquiryForm } from './form'
import styles from "./enquiry.module.scss"
export default function Enquiry() {
  return (
    <div>
        <section className={styles.enquiry}>
          <div className='container'>
          <EnquiryForm/>
          </div>
        </section>
    </div>
  )
}
