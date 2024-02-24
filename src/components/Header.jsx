import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// STILL TO DO
// - Make list items in responsive menu animate consequentially

function Header() {

  const [click, clickSet] = useState(false);
  
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const menuItems = [
    {
      id: 1,
      title: "HOME",
      href: "/",
    },
    {
      id: 2,
      title: "ABOUT ME",
      href: "/about-me",
    },
  ];

  const containerAnimation = {
    hidden: {
      y: -150,
      opacity: 0,
      transition: { ease: "easeIn" }
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.3,
        delayChildren: 0.8
      },
    },
  };

  function clickUpdate() {
    clickSet(click ? false : true);
  }

  const scroll = () => {
    const section = document.querySelector( '#portfolio' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  useEffect(() => {

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (lastScrollY < 0) {
        setShow(true);
      } else if (lastScrollY > window.innerHeight) {
        setShow(true);
      }else if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false);
        clickSet(false);
      }else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <header className={ show ? "headerShow" : "headerHide"}>
      <div className="headerContentContainer">
        <img alt="logo" src={require("../assets/Stondato.png")}></img>

        <ul>
          {menuItems.map((items, index) => (
            <li key={index} className="menuItem">
              <Link to={items.href} >{items.title}</Link>
            </li>
          ))}
          <li className="menuItemPortfolio"  onClick={scroll}>
              <KeyboardDoubleArrowDownIcon fontSize="small" className="menuItemPortfolioIcon"/>
              <span >PORTFOLIO</span>
          </li>
        </ul>
        
        {isSmallScreen ? null : <Modal/>} 

        {/*         RESPONSIVE          */}

        {isSmallScreen && <Modal/>} 

        <button className="hamburgerButton" onClick={() => clickUpdate()}>
          <MenuIcon />
        </button>
        </div>
      </header>

      <div className="menuResponsive">
        <AnimatePresence>
          <motion.ul
            layout
            variants={containerAnimation}
            animate={show && click ? "show" : "hidden"}
            style={{
              backgroundColor: "#3C3C3C"
            }}
          >
            {menuItems.map((items, index) => (
              <motion.li
                layout
                key={items.id}
                className="menuItemResponsive"
              >
                <Link
                  to={items.href}
                  onClick={() => clickUpdate()}
                  className="menuItemLink"
                >
                  {items.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </>
  );
}


export default Header;
