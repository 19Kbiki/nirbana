import React, { useState } from 'react'
import style from "../Home/Home.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import { admissionNotices, bannerInfo, classic, courseItem, group, ourProgram, pop, whyChooseUS } from '../../config/config'
import Slider from "react-slick";
import SampleNextArrow from "./widgets/samplenextarow"
import SamplePrevArrow from "./widgets/sampleprevarrow"

// import drums from "../../../public/assets/icons/drums.svg"
export default function Home() {
  const navigate = useNavigate();
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

  const contactNav = () => {
    navigate("/contact")
  }
  return (
    <div>
      <section className={style.banner}>
        <div className='container'>
            <div className={style.wrp}>
              <div className={style.info}>
                  <h1>{bannerInfo.heading}</h1>
                  <h5>{bannerInfo.subHeading}</h5>
                  <button onClick={contactNav}>{bannerInfo.button}</button>
                  {/* <button onClick={contact}>{bannerInfo.buttonTwo}</button> */}

              </div>

            </div>
        </div>
      </section>



      {/* Banner End */}

      <NoticeBord/>

      {/* download end */}

      <section className={style.our_program} >
        <div className='container'>
            <div className={style.__wrap}>
                <div className={style.imges}>
                  <img className={style.img_1} src='assets/piona_abut_.webp' alt=''/>
                
                </div>
                <div className={style.program_info}>
                  <div className={style.mobile_view_heading}>
                  <div >
                    <h2>{ourProgram.heading}</h2>
                    <img src='assets/all_heading.webp' alt=''/>
                  </div>
                  <img className={style.img_1} src='assets/about.webp' alt=''/>

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
            <img src='assets/all_heading.webp' alt=''/>
          </div>
          <div className={style.wrap}>
            {courseItem.map((ele)=>{
              return(
                <div className={style.item}>
                  <div className={style.img}>
                  <img src={ele.img} alt=''/>
                  {/* <drums/> */}

                  </div>
                  <h2>{ele.name}</h2>
                  <div className={style.pera}>
                  <p>{ele.peragaraph}</p>
                  </div>
                 
                </div>
              )
            })}
          </div>

          <div className={style.mobile_wrp}>
          <Slider {...settings} className={style.slider}>
          {courseItem.map((ele)=>{
              return(
                <div className={style.item}>
                  <div className={style.img}>
                    <img src={ele.img} alt=''/>
                  </div>
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
            <img src='assets/image 1.webp'/>
            <div  className={style.hero_info}>
              <h2>Choose the BestTime for Lessons</h2>
              <p>Our students can select any time for their lessons that fits their timetable, whether it’s a weekday evening or weekend morning.</p>
              {/* <Link to="">Book a slot</Link> */}
            </div>
            <img className={style.img2} src='assets/image 2.webp'/>

          </div>
        </div>
      </section>

      <section className={style.groups}>
        <div className='container'>
          <div className={style.heading}>
            <h1>Guitar Groups</h1>
            <img src="assets/all_heading.webp" alt='' />
          </div>
          <div className={style.wrp}>
            {group.map((ele)=>{
              return (
                <div className={style.item}>
                  <div className={style.img}>
                  <img src={ele.img} alt=''/>
                  </div> 
                  <h5>{ele.name}</h5>
                  <p>{ele.pera}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className={style.certificate}>
        <div className='container'>
          <div className={style.heading}>
            <h1>Certification</h1>
            
              <img src="assets/all_heading.webp" alt='' />
           
          </div>
          <div className={style.classic_row}>
            <div className={style.img}>
             <img src='assets/bannr/banner_2.webp' alt='' />
            </div>
            <div>
              <h1>Diploma in Classical Music</h1>
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
              <h1>Diploma in Rock & Pop</h1>
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
            <div className={style.img}>
              <img src='assets/bannr/banner_1.webp' alt='' />
            </div>
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


 function NoticeBord() {
  const [animationPaused, setAnimationPaused] = useState(false);

  const handleLinkClick = () => {
    setAnimationPaused(true);
  };

  const handleLinkHover = () => {
    setAnimationPaused(true);
  };

  const handleLinkLeave = () => {
    setAnimationPaused(false);
  };
  return (
    <div className={style.notice}>
    <div className='container'>
      <div className={style.notice_list}>
        {admissionNotices.map((ele)=>{
          return(
            <Link to="/notice" onClick={handleLinkClick} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave} className={`${style.notice_item} ${style.link} ${style.blink}`} style={{ animationPlayState: animationPaused ? 'paused' : 'running' }}>
              Admission open 20224-25
            </Link>

          )
        })}
        
      </div>
    </div>

  </div>

  );
}