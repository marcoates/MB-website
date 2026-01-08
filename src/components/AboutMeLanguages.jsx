import React, { useState } from "react";
import "./AboutMeLanguages.css";
import TranslateIcon from "@mui/icons-material/Translate";
import StarIcon from "@mui/icons-material/Star";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function AboutMeLanguages() {
  let [languageVisible, setLanguageVisible] = useState(0);
  let [isLess, setIsLess] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  const languages = [
    {
      id: 1,
      icon: require("../assets/Italian.gif"),
      title: [
        <StarIcon key={0} style={{ color: "var(--red)" }} />,
        <StarIcon key={1} style={{ color: "var(--red)" }} />,
        <img
          key={2}
          className="LanguageFlag"
          src={require("../assets/italyFlag.png")}
          alt="Italian flag"
        />,
        <StarIcon key={3} style={{ color: "var(--red)" }} />,
        <StarIcon key={4} style={{ color: "var(--red)" }} />,
      ],
      level: "Native Language",
    },
    {
      id: 2,
      icon: require("../assets/English.gif"),
      title: [
        <StarIcon key={0} style={{ color: "var(--red)" }} />,
        <StarIcon key={1} style={{ color: "var(--red)" }} />,
        <img
          key={2}
          className="LanguageFlag"
          src={require("../assets/engFlag.png")}
          alt="UK flag"
        />,
        <StarIcon key={3} style={{ color: "var(--red)" }} />,
        <StarIcon key={4} style={{ color: "var(--lightRed)" }} />,
      ],
      level: "Professional Level",
    },
    {
      id: 3,
      icon: require("../assets/Spanish.gif"),
      title: [
        <StarIcon key={0} style={{ color: "var(--red)" }} />,
        <StarIcon key={1} style={{ color: "var(--lightRed)" }} />,
        <img
          key={2}
          className="LanguageFlag"
          src={require("../assets/spainFlag.png")}
          alt="Spanish flag"
        />,
        <StarIcon key={3} style={{ color: "var(--lightRed)" }} />,
        <StarIcon key={4} style={{ color: "var(--lightRed)" }} />,
      ],
      level: "Basic Level",
    },
  ];

  const langVariants = {
    lessExit: {
      opacity: 0,
      x: [0, -50],
    },

    lessShow: {
      opacity: 1,
      x: [50, 0],
    },

    lessHide: {
      opacity: 0,
      x: 10,
    },

    moreExit: {
      opacity: 0,
      x: [0, 50],
    },

    moreShow: {
      opacity: 1,
      x: [-50, 0],
    },

    moreHide: {
      opacity: 0,
      x: -10,
    },
  };

  function handleNext(direction) {
    direction === "right" ? setIsLess(false) : setIsLess(true);
    setLanguageVisible((prevVisible) => {
      const newValue =
        direction === "right" ? prevVisible + 1 : prevVisible - 1;
      return newValue > 2 ? 0 : newValue < 0 ? 2 : newValue;
    });
  }

  return (
    <div className="LanguagesContainer">
      <motion.div
        className="arrowRight"
        value="right"
        onClick={() => handleNext("right")}
        whileTap={{
          backgroundColor: ["#ffffff59", "#ff0000", "#ffffff59"],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 0.3, times: [0, 0.3, 0.6, 1] }}
      >
        <ArrowForwardIosIcon
          style={{ color: "var(--gray)" }}
          fontSize="small"
        />
      </motion.div>
      <motion.div
        className="arrowLeft"
        value="left"
        onClick={() => handleNext("left")}
        whileTap={{
          backgroundColor: ["#ffffff59", "#ff0000", "#ffffff59"],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 0.3, times: [0, 0.3, 0.6, 1] }}
      >
        <ArrowForwardIosIcon
          style={{ color: "var(--gray)" }}
          fontSize="small"
        />
      </motion.div>
      <h1 className="LanguagesTitle">
        <TranslateIcon
          style={{
            fontSize: isSmallScreen ? "2rem" : "4rem",
            color: "var(--red)",
          }}
        />
        LANGUAGES
      </h1>
      <ul className="LanguagesList">
        {isSmallScreen ? null : (languages.map((item, index) => (
              <motion.li
                key={item.id}
                variants={langVariants}
                initial={isLess ? "lessHide" : "moreHide"}
                animate={isLess ? "lessShow" : "moreShow"}
                exit={isLess ? "lessExit" : "moreExit"}
                transition={{
                  opacity: {
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                  x: {
                    duration: 0.75,
                    type: "spring",
                    bounce: 0.5,
                  },
                }}
                className="LanguagesItem"
                // style={
                //   isSmallScreen
                //     ? languageVisible === index
                //       ? { display: "flex" }
                //       : { display: "none" }
                //     : null
                // }
              >
                <motion.img
                  alt="language-icon"
                  className="LanguageIcon"
                  src={item.icon}
                  animate={{
                    rotate: [-5, 5, -5],
                    x: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1],
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="LanguageScore"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                      staggerChildren: 0.1,
                      delayChildren: 0.3,
                    },
                  }}
                >
                  {item.title}
                </motion.div>
                <p className="LanguageContent">{item.level}</p>
              </motion.li>
            ))
        )}

        {isSmallScreen ? (
          <AnimatePresence mode="wait">
                  <motion.li
                    key={languages[languageVisible].id}
                    variants={langVariants}
                    initial={isLess ? "lessHide" : "moreHide"}
                    animate={isLess ? "lessShow" : "moreShow"}
                    exit={isLess ? "lessExit" : "moreExit"}
                    transition={{
                      opacity: {
                        duration: 0.2,
                        ease: "easeInOut",
                      },
                      x: {
                        duration: 0.75,
                        type: "spring",
                        bounce: 0.5,
                      },
                    }}
                    className="LanguagesItem"
                    // style={
                    //   isSmallScreen
                    //     ? languageVisible === index
                    //       ? { display: "flex" }
                    //       : { display: "none" }
                    //     : null
                    // }
                  >
                    <motion.img
                      alt="language-icon"
                      className="LanguageIcon"
                      src={languages[languageVisible].icon}
                      animate={{
                        rotate: [-5, 5, -5],
                        x: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1],
                        repeat: Infinity,
                      }}
                    />
                    <motion.div
                      className="LanguageScore"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.3,
                          staggerChildren: 0.1,
                          delayChildren: 0.3,
                        },
                      }}
                    >
                      {languages[languageVisible].title}
                    </motion.div>
                    <p className="LanguageContent">{languages[languageVisible].level}</p>
                  </motion.li>
                </AnimatePresence>) : null}
      </ul>
    </div>
  );
}

export default AboutMeLanguages;
