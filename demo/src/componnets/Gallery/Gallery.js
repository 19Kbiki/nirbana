import React from 'react'
import styles from "../Gallery/Gallery.module.scss"
import { Link } from 'react-router-dom'
export default function Gallery() {
  return (
    <div>
      <section>
        <div className={styles.glry_nav}>
            <ul >
                <li><Link>All ctagories</Link></li>
                <li><Link>Instruments</Link></li>
                <li><Link>Classes</Link></li>
            </ul>
        </div>
      </section>
    </div>
  )
}
