import React from 'react'
import { EnquiryForm } from '../form/form'
import styles from "./Qurry.module.scss"
export default function Qurry() {
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
