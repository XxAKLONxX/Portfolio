import React, { useState, useEffect, useRef } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    const location = useLocation();
    const scrollRef = useRef(null);


    useEffect(() => {
        if (location.hash) {
             const targetId = location.hash.substring(1);
             const targetElement = document.getElementById(targetId);

            if (targetElement) {
                  if (scrollRef.current) {
                    scrollRef.current.removeEventListener('scroll',handleScroll);
                  }
                  scrollRef.current = window;
                  
                   scrollRef.current.addEventListener('scroll', handleScroll)
                  setTimeout(()=>{
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                  },0)

                  return () =>{
                       scrollRef.current.removeEventListener('scroll',handleScroll)
                        scrollRef.current = null
                   };
            }
        }
        function handleScroll() {
            // Do nothing
        };
    }, [location]);



    return (
        <div>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <Link to="/" className="nav__logo">
                    <img src={Logo} alt="Logo"/>
                </Link>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                           <li className="nav__item">
                              <Link to="/#home" className="nav__link">
                                  <i className="icon-home"></i>
                                </Link>
                            </li>
                           <li className="nav__item">
                             <Link to="/#about" className="nav__link">
                                  <i className="icon-user-following"></i>
                             </Link>
                            </li>
                           <li className="nav__item">
                              <Link to="/#services" className="nav__link">
                                  <i className="icon-briefcase"></i>
                              </Link>
                            </li>
                            <li className="nav__item">
                               <Link to="/#resume" className="nav__link">
                                  <i className="icon-graduation"></i>
                                </Link>
                            </li>
                           <li className="nav__item">
                              <Link to="/#work" className="nav__link">
                                  <i className="icon-layers"></i>
                              </Link>
                            </li>
                            <li className="nav__item">
                               <Link to="/#blog" className="nav__link">
                                 <i className="icon-note"></i>
                                </Link>
                            </li>
                            <li className="nav__item">
                               <Link to="/#contact" className="nav__link">
                                 <i className="icon-bubble"></i>
                               </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="nav__footer">
                    <span className="copyright">© 2024 - 2025.</span>
                </div>
            </aside>

            <div
                className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
                onClick={() => showMenu(!toggle)}
            >
                <i className="icon-menu"></i>
            </div>
        </div>
    );
};

export default Sidebar;