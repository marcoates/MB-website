import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./AboutMeIntro.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

function AboutMeIntro() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <div className="aboutMeIntro-Wrapper">
      <div className="aboutMeIntro-Title">
        <h1>NICE TO MEET YOU!</h1>
        {isSmallScreen && <div className="cloudPointer"></div>}
      </div>
      <div className="aboutMeIntro-Container">
        <div className="aboutMeIntro-Box1">
          <img
            className="aboutMeIntroAnimation"
            alt="animation"
            src={require("../assets/About-Me.gif")}
          />
        </div>
        <div className="aboutMeIntro-Box2">
          <ul className="aboutMeIntro-Box2-List">
            <motion.li
              className="aboutMeIntro-Box2-ListItem"
              initial={isSmallScreen && { opacity: 0, x: 100 }}
              whileInView={
                isSmallScreen && { opacity: 1, x: 0 }
              }
              exit={isSmallScreen && { opacity: 0, x: 100 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                type: "spring",
                bounce: 0.5,
              }}
            >
              <div className="aboutMeIntro-Box2-ListItemIcon">👋</div>
              <div className="aboutMeIntro-Box2-ListItemText1">
                Hey, I'm Marco Braggion.
              </div>
            </motion.li>
            <motion.li
              className="aboutMeIntro-Box2-ListItem"
              initial={isSmallScreen && { opacity: 0, x: -100 }}
              whileInView={
                isSmallScreen && { opacity: 1, x: 0 }
              }
              exit={isSmallScreen && { opacity: 0, x: -100 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                type: "spring",
                bounce: 0.5,
              }}
            >
              <div className="aboutMeIntro-Box2-ListItemIcon">💻</div>
              <div className="aboutMeIntro-Box2-ListItemText2">
                I'm a Graphic Designer.
              </div>
            </motion.li>
            <motion.li
              className="aboutMeIntro-Box2-ListItem"
              initial={isSmallScreen && { opacity: 0, x: 100 }}
              whileInView={
                isSmallScreen && { opacity: 1, x: 0 }
              }
              exit={isSmallScreen && { opacity: 0, x: 100 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                type: "spring",
                bounce: 0.5,
              }}
            >
              <div className="aboutMeIntro-Box2-ListItemIcon">🔮</div>
              <div className="aboutMeIntro-Box2-ListItemText3">
                Now Software Developer!
              </div>
            </motion.li>
          </ul>
        </div>
        <motion.div
          className="downContainer"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2,
              type: "spring",
              bounce: 0.5,
            },
          }}
          exit={{ opacity: 1, y: 0 }}
        >
          <KeyboardDoubleArrowDownIcon
            fontSize="large"
            style={{ color: "var(--red)" }}
          />
          <h1>Just scroll down and discover more!</h1>
          <KeyboardDoubleArrowDownIcon
            fontSize="large"
            style={{ color: "var(--red)" }}
          />
        </motion.div>
      </div>
        <img alt="logo-bg" src={require("../assets/Stondato.png")} className="logoBG1" />
        <img alt="logo-bg" src={require("../assets/Stondato.png")} className="logoBG2" />
      </div>
  );
}

export default AboutMeIntro;
