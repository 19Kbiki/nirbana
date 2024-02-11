import React, { useEffect, useState } from 'react'
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
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 15) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const myFunction = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("no-scroll");
  };

  const navmenu = [
    { url: "/business", name: "Business" },
    { url: "/", name: "Resources" },
    { url: "/", name: "Support" },
  ];

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
                    
                        <ul >
                            {navbarMenu.map((ele,index) => 
                              <li key={index}>
                                <NavHashLink 
                                  activeClassName="active"
                                  scroll={el => scrollWithOffset(el)}
                                  to={ele.url}
                                  isActive={(match, location) => {
                                    // Check if the current location matches the navigation item's URL
                                    if (match) {
                                      // Add your logic here, if needed
                                      return true; // Return true to add the "active" class
                                    }
                                    return false; // Return false otherwise
                                  }}
                                  > {ele.name} 
                                  
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
      <header
        className={`${style.mobile_nav} ${
          colorChange ? style.colorChange : ""
        }`}
      >
        <nav>
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
          <div className="container">
            <div className={style.nav_bar}>
              <div className={style.logo}>
                <Link to="/">
                <div className={style.logo}>
                      <img src='assets/logo.png' alt='logo' />
                  </div>
                </Link>
              </div>

              <div className={style.toggle_button}>
                <button
                  onClick={myFunction}
                  className={showMenu ? style.menuicons : ""}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`${style.toggle_menu} ${showMenu ? style.actives : ""}`}
      >
        <div className={style.menus}>
          <ul className={style.navbar_nav}>
            {navbarMenu.map((ele) => {
              return (
                <li className={style.nav_item}>
                  <NavHashLink
                    to={ele.url}
                    onClick={myFunction}
                    className={showMenu ? style.menuicons : "nav_a"}
                  >
                    {ele.name}
                  </NavHashLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
