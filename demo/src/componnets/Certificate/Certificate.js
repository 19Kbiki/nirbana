import React from 'react'
import styles from "../Certificate/Certificate.module.scss"
export default function Certificate() {

    const certify = [
        {name:"A.T.C.L (Music Performance) ", pera:"  Trinity’s performance diplomas open a window for you to pursue professional musicianship. Focusing exclusively on the planning and performance of a recital, these courses will help you learn to play the instruments in a correct manner and perform confidently with grace. The A.T.C.L  is equivalent in standard to the first year recital of an undergraduate degree. Learn the basics of playing classical instruments like violin, piano and classical guitar. "},
        {name:"LTCL ( Music Performance)  ", pera:" Work towards your goal of achieving a professional musicianship, with LTCL which is  equivalent in standard to the first year recital of an undergraduate degree. Build a programme you can be confident in with the knowledge of classical music you have gained and create a programme that reflects the musician in you. Our marking scheme is heavily weighted towards performance, you must make sure your exam performance holds value and gains a respected qualification that genuinely reflects the standard of your performance "},
        {name:"AMusTCL (Music theory) ", pera:"The course of  study in Music Theory includes the areas of form, analysis, counterpoint and compositional techniques with opportunities for research in Framework. Since LMusTCL is equivalent to the final year of an undergraduate degree the candidates are supposed to show their understanding through a mix of research, documented experience, case studies and critical reflection. "},
        {name:"LMusTCL (Music Theory) ", pera:"ATCL is equivalent in difficulty to the first year of an undergraduate degree. Here, the candidates will be equipped with the playing techniques of various musical instruments that make the backbone of rock and pop, like keyboard, drums and plectrum guitar. Enjoy the freedom of choosing pieces you are curious about from our newly expanded and regularly updated repertoire lists curated by our trusted teachers and candidates over the years. Furthermore, you can submit your own-choice pieces (or a mixture of both)"},

    ]

    const pop = [
        {name:"A.T.C.L  (Music Performance)", pera:"ATCL is equivalent in difficulty to the first year of an undergraduate degree. Here, the candidates will be equipped with the playing techniques of various musical instruments that make the backbone of rock and pop, like keyboard, drums and plectrum guitar. Enjoy the freedom of choosing pieces you are curious about from our newly expanded and regularly updated repertoire lists curated by our trusted teachers and candidates over the years. Furthermore, you can submit your own-choice pieces (or a mixture of both). "},
        {name:"L.T.C.L (Music Performance) ", pera:"As the  L.T.C.L is  equivalent to the final year of an undergraduate degree, the candidates have a professional sense of performance and musical understanding. This degree leads them to become true musicians, one that can compose, arrange and perform their recital like an artist."},
    ]
  return (
    <div>
        <div className={styles.heading}>
            <h1>Certification</h1>
            {/* <img src='assets/banner/banner.jpg' alt=''/> */}

        </div>
        <section className={styles.Certificate}>
            <div className='container'>
                <div className={styles.wrp}>
                    <div className={styles.clasic}>
                        <h2>DIPLOMA IN CLASSICAL MUSIC </h2>
                        <div className={styles.cls_wrp}>
                            {certify.map((ele, index)=>{
                                return (
                                <>
                                    <div  className={styles.items}>
                                    <img src='assets/bannr/banner_2.webp' alt=''/>
                                    <div className={styles.info}>
                                        <div className={styles.head}>
                                            <h1>0{index + 1}</h1>
                                            <h3>{ele.name}</h3>

                                        </div>
                                        <p>{ele.pera}</p>
                                    </div>
                                    </div>
                                </>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.clasic}>
                        <h2>DIPLOMA IN ROCK AND POP </h2>
                        <div className={styles.cls_wrp}>
                            {pop.map((ele, index)=>{
                                return (
                                <>
                                    <div  className={styles.items}>
                                    <img src='assets/bannr/banner_1.webp' alt=''/>
                                    <div className={styles.info}>
                                        <div className={styles.head}>
                                            <h1>0{index + 1}</h1>
                                            <h3>{ele.name}</h3>

                                        </div>
                                        <p>{ele.pera}</p>
                                    </div>
                                    </div>
                                </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
