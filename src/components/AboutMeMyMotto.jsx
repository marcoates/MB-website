import React from "react";
import "./AboutMeMyMotto.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";


function AboutMeMyMotto() {

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <div className="AboutMeMyMottoContainer">

      <div className="AboutMeMyMottoContent">
        <motion.img
          alt="motto-img"
          className="MyMottoImg"
          src={require("../assets/Meditation.gif")}
            initial={{ opacity: 0, x: -200, rotate: -20 }}
            whileInView={{
              rotate: 0,
              opacity: 1,
              x: 0,
              transition: {
                duration: 3,
                type: "spring",
                bounce: 0.5,
              },
            }}
        />
      </div>

      <div className="AboutMeMyMottoContent">
      <div className="QuoteContainer">
        <motion.h1 className="AboutMeMyMottoQuote"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}>
          " Keep your eyes on the stars,</motion.h1>
          <motion.h1 className="AboutMeMyMottoQuote"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1,
              },
            }}>and you feet on the ground."</motion.h1>
          </div>

        <motion.div className="AboutMeMyMottoAuthorContainer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: 2,
              },
            }}>
        <p className="AboutMeMyMottoAuthorPic">👨‍🏫</p>
        <p className="AboutMeMyMottoAuthor">Theodore Roosevelt</p>
        </motion.div>
      </div>

      <div className="AboutMeMyMottoContent">
        <div className="AboutMeMyMottoTitle">
          <h1 className="AboutMeMyMottoTitleText">MY MOTTO</h1>
          <FormatQuoteIcon
          style={{
            fontSize: isSmallScreen ? "2rem" : "4rem",
            color: "var(--red)",
          }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMeMyMotto;
