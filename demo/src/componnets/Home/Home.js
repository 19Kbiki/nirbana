import React from 'react'
import style from "../Home/Home.module.scss"
import { Link } from 'react-router-dom'
import { bannerInfo, classic, courseItem, group, ourProgram, pop, whyChooseUS } from '../../config/config'
import Slider from "react-slick";
export default function Home() {
  function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div>
        <div className={`${style.arrow} ${style.next}`} onClick={onClick}>
          <span>&#x2192;</span> {/* Unicode right arrow character */}
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div>
        <div onClick={onClick} className={`${style.arrow} ${style.prev}`}>
          <span>&#x2190;</span> {/* Unicode left arrow character */}
        </div>
      </div>
    );
  }

  const settings = {
    // dots: fals,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "60px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <section className={style.banner}>
        <div className='container'>
            <div className={style.wrp}>
              <div className={style.info}>
                  <h1>{bannerInfo.heading}</h1>
                  <h5>{bannerInfo.subHeading}</h5>
                  <button>{bannerInfo.button}</button>
              </div>

              <form>
                <div className={style.form_heading}>
                  <h2>SCHEDULE A FREE TRIAL</h2>
                </div>
                <div className={style.formControl}>
                  <input src=''placeholder='Full Name'/>
                </div>
                <div className={style.formControl}>
                  <input src='' placeholder='Email Address'/>
                </div>
                <div className={style.formControl}>
                  <input src=''placeholder='Phone No'/>
                </div>
                <div className={style.formControl}>
                  <input src=''placeholder='Address'/>
                </div>
                <div className={style.formControl}>
                  <input src='' placeholder='Course'/>
                </div>
                  <button className={style.btn}>Submit</button>
              </form>

            </div>
        </div>
      </section>
      <div className={style.mobile_view_form}>
        <div className='container'>
            <form>
              <div className={style.form_heading}>
              <h2>SCHEDULE A FREE TRIAL</h2>
              </div>
              <div className={style.box}>
              <div className={style.formControl}>
                <input src=''placeholder='Full Name'/>
              </div>
              <div className={style.formControl}>
                <input src='' placeholder='Email Address'/>
              </div>

              </div>
              <div className={style.box}>
              <div className={style.formControl}>
                <input src=''placeholder='Phone No'/>
              </div>
              <div className={style.formControl}>
                <input src=''placeholder='Address'/>
              </div>

              </div>
              <div className={style.formControl}>
              <input src='' placeholder='Course'/>
              </div>
              <button className={style.btn}>Submit</button>
            </form>
        </div>
      </div>

      {/* Banner End */}

      {/* download end */}

      <section className={style.our_program} >
        <div className='container'>
            <div className={style.__wrap}>
                <div className={style.imges}>
                  <img className={style.img_1} src='assets/about.png' alt=''/>
                
                </div>
                <div className={style.program_info}>
                  <div className={style.mobile_view_heading}>
                  <div >
                    <h2>{ourProgram.heading}</h2>
                    <img src='assets/all_heading.png' alt=''/>
                  </div>
                  <img className={style.img_1} src='assets/about.png' alt=''/>

                  </div>
                  <p>{ourProgram.peragraph}</p>
                </div>
            </div>
        </div>
      </section>

      {/* Our Programs End */}

      <section className={style.our_course} id='programs'>
        <div className='container'>
          <div className={style.heading}>
            <h1>Music class</h1>
            <img src='assets/all_heading.png' alt=''/>
          </div>
          <div className={style.wrap}>
            {courseItem.map((ele)=>{
              return(
                <div className={style.item}>
                  <div className={style.img}></div>
                  <h2>{ele.name}</h2>
                  <p>{ele.peragaraph}</p>
                </div>
              )
            })}
          </div>

          <div className={style.mobile_wrp}>
          <Slider {...settings} className={style.slider}>
            

          {courseItem.map((ele)=>{
              return(
                <div className={style.item}>
                  <div className={style.img}></div>
                  <h2>{ele.name}</h2>
                  <p>{ele.peragaraph}</p>
                </div>
              )
            })}
          
          </Slider>
          </div>
        </div>
      </section>

      <section className={style.hero}>
        <div className='container'>
          <div className={style.wrp}>
            <img src='assets/image 1.png'/>
            <div  className={style.hero_info}>
              <h2>Choose the BestTime for Lessons</h2>
              <p>Our students can select any time for their lessons that fits their timetable, whether it’s a weekday evening or weekend morning.</p>
              <Link to="">Learn More</Link>
            </div>
            <img className={style.img2} src='assets/image 2.png'/>

          </div>
        </div>
      </section>

      <section className={style.groups}>
        <div className='container'>
          <div className={style.heading}>
            <h1>Guitar Groups</h1>
            <img src="assets/all_heading.png" alt='' />
          </div>
          <div className={style.wrp}>
            {group.map((ele)=>{
              return (
                <div className={style.item}> 
                  <img src={ele.img} alt=''/>
                  <h5>{ele.name}</h5>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className={style.certificate}>
        <div className='container'>
          <div className={style.heading}>
            <h1>Diploma Certificate</h1>
            <img src="assets/all_heading.png" alt='' />
          </div>
          <div className={style.classic_row}>
            <img src='assets/bannr/banner1.jpg' alt='' />
            <div>
              <h1>Diploma  Classical Music</h1>
              <div className={style.info} >
                {classic.map((ele, index)=>{
                  return (
                    <div>
                        <div key={index}>
                          <div className={style.head}>
                            <h1>0{index + 1}</h1>
                            <h3>{ele.name}</h3>
                          </div>
                          <p>{ele.pera}</p>
                        </div>
                      </div> )
                })}
            </div>
            </div>
            
          </div>
          <div className={style.pop_row}>
            <div>
              <h1>Diploma  Rock & Pop</h1>
              <div className={style.info} >
                {pop.map((ele, index)=>{
                  return (
                    <div>
                        <div key={index}>
                          <div className={style.head}>
                            <h1>0{index + 1}</h1>
                            <h3>{ele.name}</h3>
                          </div>
                          <p>{ele.pera}</p>
                        </div>
                      </div>

                    )
                })}
            </div>
            </div>
            <img src='assets/bannr/banner1.jpg' alt='' />
          </div>
        </div>
      </section>
{/* 
      <section className={style.why_Choose} id='notic'>
        <div className='container'>
            <div className={style.info}>
              <h1>{whyChooseUS.heading} <span>Nirvana</span>  ?</h1>
              <p>{whyChooseUS.peragaraph}</p>
              <Link>{whyChooseUS.button}</Link>
            </div>
        </div>
      </section> */}
   
      
    </div>
  )
}
