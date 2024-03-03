import { useEffect, useState } from "react";
import style from "./Navbar.module.scss"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { navbarMenu } from "../../config/config";
import { NavHashLink } from "react-router-hash-link";

export const NavbarMobile = ( ) => {
  const [showMenu, setShowMenu] = useState(false);
  const [colorChange, setColorChange] = useState(false)
  const navigater = useNavigate ();

  const clickHendal = () => {
    navigater("/login")
  }

   const colorchnages = ()  => {
    if(window.scrollY >= 60){
      setColorChange(true)
    }else{
      setColorChange(false)
    }
  }
  window.addEventListener('scroll', colorchnages)

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
return(
    <>
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
                    62960-71630
                  </h6>
                </div>
                <div className={style.right}>
                  {/* <button onClick={clickHendal}><i class="fa-solid fa-user"></i> login</button> */}
                </div>
              </div>
            </div>
          </div>
            <div className="container">
              <div className={style.nav_bar}>
                <div className={style.logo}>
                  <Link to="/">
                  <div className={style.logo}>
                        <img src='assets/logo.webp' alt='logo' />
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

    </>
)
}