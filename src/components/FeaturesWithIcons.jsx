import React, { useState } from "react";
import "./FeaturesWithIcons.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DiamondIcon from "@mui/icons-material/Diamond";
import CreateIcon from '@mui/icons-material/Create';
import WebIcon from '@mui/icons-material/Web';

function FeaturesWithIcons() {
  let [featureVisible, setFeatureVisible] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  const features = [
    {
      id: "features0",
      icon: "🔮",
      title: "CODING",
      content: [
        "I'm a Software Developer",
        <br />,
        "Working mainly on front-end development, while contributing to back-end features. Learn more in the About Me section.",
      ],
    },
    {
      id: "features1",
      // icon: "👔",
      icon: <DiamondIcon fontSize="medium" sx={{ color: "var(--red)" }} />,
      title: "BRANDING",
      content: [
        "I can also design your logo!",
        <br />,
        "We can figure out together how to boost up your brand image creating a sign that people will remember!",
      ],
    },
    {
      id: "features2",
      // icon: "✏️",
      icon: <CreateIcon fontSize="medium" sx={{ color: "var(--red)" }} />,
      title: "ILLUSTRATION",
      content: [
        "What about an illustration?",
        <br />,
        "Have a look on my style of drawing and just let me turn your ideas into pixels or even vectors!",
      ],
    },
    { 
      id: "features3",
      // icon: "📱",
      icon: <WebIcon fontSize="medium" sx={{ color: "var(--red)" }} />,
      title: "WEB DESIGN",
      content: [
        "Your new e-commerce?",
        <br />,
        "From blogs, portfolios and corporate to e-commerce, let me know how you want me to help you!",
      ],
    },
  ];

  function handleNext(direction) {
    setFeatureVisible((prevVisible) => {
      const newValue =
        direction === "right" ? prevVisible + 1 : prevVisible - 1;
      return newValue > 3 ? 0 : newValue < 0 ? 3 : newValue;
    });
  }

  return (
    <motion.div className="FeaturesWithIconsContainer">
      <motion.div
        className="FeaturesWithIconsArrowRight"
        value="right"
        onClick={() => handleNext("right")}
        whileTap={{
          color: ["#ffffff", "#3c3c3c", "#ffffff"],
          backgroundColor: ["#ff0000", "#ffe8e8", "#ff0000"],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 0.3, times: [0, 0.3, 0.6, 1] }}
      >
        <ArrowForwardIosIcon
          style={{ color: "white" }}
          fontSize="small"
        />
      </motion.div>
      <motion.div
        className="FeaturesWithIconsArrowLeft"
        value="left"
        onClick={() => handleNext("left")}
        whileTap={{
          color: ["#ffffff", "#3c3c3c", "#ffffff"],
          backgroundColor: ["#ff0000", "#ffe8e8", "#ff0000"],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 0.3, times: [0, 0.3, 0.6, 1] }}
      >
        <ArrowForwardIosIcon
          style={{ color: "white" }}
          fontSize="small"
        />
      </motion.div>
      {/* {isSmallScreen && (
          <h1 className="FeaturesWithIconsTitle">What can I do for you?</h1>
        )} */}
      <motion.ul
        className="servicesContainer">
        {features.map((item, index) => (
          <motion.li
            key={item.id}
            className="titleContainer"
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={
              isSmallScreen
                ? { opacity: 1, x: [-10, 10, 0] }
                : index === 0
                ? {
                  opacity: [0, 1, 1],
                    y: [5, -5, 5],
                    // boxShadow: [
                    //   "0px 0px 30px #00f7ffad",
                    //   "0px 0px 10px #00f7ff3d",
                    //   "0px 0px 30px #00f7ffad",
                    // ],
                  }
                : {
                    opacity: [0, 1, 1, 1],
                    y: [10, -10, 10],
                  }
            }
            transition={
              isSmallScreen
                ? {
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    type: "spring",
                    bounce: 0.5,
                  }
                : {
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    type: "spring",
                    bounce: 0.5,
                    delay: index === 0 ? index / 3 : index / 5,
                    y: {
                      duration: 1.5,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      repeat: index === 0 ? Infinity : 0
                    }
                  }
            }
            style={
              isSmallScreen
                ? featureVisible === index
                  ? { display: "flex" }
                  : { display: "none" }
                : null
            }
          >
          <div className="FeatureTitletopBar">
            <h3 className="servicesTitle">{item.title} </h3>
            </div>
            <div className="FeatureContent">
            <div className="subtitle"> 
            <div className="introSubtitleIcon">{item.icon}</div> <p className="subtitleText">{item.content[0]}</p>
            </div>
            <p> {item.content[2]} </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default FeaturesWithIcons;
