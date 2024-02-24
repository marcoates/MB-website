import React from "react";
import "./Intro.css";
import { motion } from "framer-motion";

function Intro() {
  return (
    <div className="introContainer">
      <div className="intro">
        <motion.h1
          animate={{
            opacity: [1, 1, 0.95, 0.95, 1, 1],
            scale: [1.02, 1.02, 0.98, 0.98, 1.02, 1.02],
            rotate: [0, -5, 5, -5, 5, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1],
            repeat: Infinity,
            repeatDelay: 5,
          }}
        >
          Hi!
        </motion.h1>
        <motion.img
          alt="animation"
          src={require("../assets/Laptop-Run.gif")}
          animate={{
            scale: [1, 0.9, 1.05, 1.05, 0.9, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1],
            repeat: Infinity,
            repeatDelay: 5,
          }}
        ></motion.img>
        <motion.h2
          animate={{
            opacity: [1, 1, 0.95, 0.95, 1, 1],
            scale: [1.02, 1.02, 0.98, 0.98, 1.02, 1.02],
            rotate: [0, 5, -5, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1],
            repeat: Infinity,
            repeatDelay: 5,
          }}
        >
          Let Me Run<br></br> Your Ideas!
        </motion.h2>
      </div>
    </div>
  );
}

export default Intro;
