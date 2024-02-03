import React, { useState } from 'react'
import { navbarMenu } from '../../config/config'
import style from "./Navvar.module.scss"
import { NavHashLink } from 'react-router-hash-link';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Navbar() {

  const [colorChange, setColorChange] = useState(false)

   const colorchnages = ()  => {
    if(window.scrollY >= 60){
      setColorChange(true)
    }else{
      setColorChange(false)
    }
  }
  window.addEventListener('scroll', colorchnages)

  // scroll to top for Hashlink
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Active  menu current url 
  let location = useLocation();

  const navigater = useNavigate();

  const clickHendal = () => {
    navigater("/login")
  }

  return (
    <div>
      <header className={colorChange ? style.header_bg : style.header}>
        <div className={style.top_nav}>
          <div className='container'>
            <div className={style.wrp}>
              <div className={style.left}>
                <h6>Quick talk with our team : </h6>
                <h6>
                  <i class="fa-solid fa-phone"></i> 
                  6294467292
                </h6>
              </div>
              <div className={style.right}>
                <button onClick={clickHendal}><i class="fa-solid fa-user"></i> login</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.nav}>
          <div className='container'>
              <nav className={style.nav_bar}>
                  <div className={style.logo}>
                      <img src='assets/logo.png' alt='logo' />
                  </div>
                  <div className={style.menu}>
                        {/* <div className={style.menuIcon} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <img src='assets/menu-icon.png' alt='menu' />
                        </div> */}
                    
                        <ul className={mobileMenuOpen ? style.mobileMenu : style.desktopMenu}>
                            {navbarMenu.map((ele,index) => 
                              <li key={index}>
                                <NavHashLink 
                                  activeClassName="active"
                                  scroll={el => scrollWithOffset(el)}
                                  className={`${location.pathname}${location.hash}` === ele.url ? style.active : ""}
                                  to={ele.url}> {ele.name} 
                                </NavHashLink>
                              </li>
                            )}
                            <Link className={style.btn} ><i class="fa-regular fa-comments"></i> Get in Touch</Link>
                        </ul>
                  </div>
              </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
