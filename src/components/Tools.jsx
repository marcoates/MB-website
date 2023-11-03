import React from "react";
import { graphicTools } from "./graphicTools";
import { codingTools } from "./codingTools";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import "./Tools.css";

function Tools() {

  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  return (
    <div className="AboutMeSkillsAndTools-Container">
      <div className="AboutMeSkillsAndTools-Box">
      <div className="AboutMeSkillsAndTools-BoxTitle1-Wrapper">
      {isSmallScreen && <img alt="character" className="AboutMeSkillsAndTools-BoxTitle1-Img" src={require("../assets/Education-Icon_3.svg").default}></img>}
        <p className="AboutMeSkillsAndTools-BoxTitle1">GRAPHIC TOOLS</p>
        {isSmallScreen ? null : <img alt="character" className="AboutMeSkillsAndTools-BoxTitle1-Img" src={require("../assets/Education-Icon_3.svg").default}></img>}
        </div>
        <ul className="AboutMeSkillsAndTools-BoxList">
          {graphicTools.map((item, index) => (
            <li key={index} className="AboutMeSkillsAndTools-Item">
            {item.rate >= "75%" ? <p className="highScore">🔥</p> : null}
              <p
                className="GraphicTools-ItemIcon"
                style={{
                  color: item.rate >= "75%"
                        ? "white"
                        : null,
                  backgroundImage: item.rate >= "75%"
                        ? "linear-gradient(to bottom, #ff5656, #ff0000)"
                        : null,
                  boxShadow: item.rate >= "75%"
                        ? "0px 5px 5px var(--lightGray)"
                        : null,
                }}
              >
                {item.name}
              </p>
              <div className="loadBar1">
                <motion.div
                  style={{
                    borderRadius: "15px",
                    backgroundColor:
                      item.rate > "50%"
                        ? item.rate > "75%"
                          ? "#d00000"
                          : "var(--red)"
                        : "#fe5353",
                    width: item.rate,
                    height: "100%",
                    // position: "absolute",
                    zIndex: "1000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6rem",
                    color: "var(--lightRed)",
                    fontWeight: "500",
                  }}
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{
                    width: item.rate,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: 1,
                      },
                    }}
                    style={{fontSize: "0.6rem"}}
                  >
                    {item.rate}
                  </motion.p>
                </motion.div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="AboutMeSkillsAndTools-Box">
      <div className="AboutMeSkillsAndTools-BoxTitle2-Wrapper">
    {isSmallScreen && <img alt="character" className="AboutMeSkillsAndTools-BoxTitle1-Img" src={require("../assets/Education-Icon_5.svg").default}></img>}
        <p className="AboutMeSkillsAndTools-BoxTitle2">CODING TOOLS</p>
        {isSmallScreen ? null : <img alt="character" className="AboutMeSkillsAndTools-BoxTitle1-Img" src={require("../assets/Education-Icon_6.svg").default}></img>}
      </div>
        <ul className="AboutMeSkillsAndTools-BoxList">
          {codingTools.map((item, index) => (
            <li key={index} className="AboutMeSkillsAndTools-Item">
            {item.rate >= "65%" ? <p className="highScore">🔥</p> : null}
            <p
                className="CodingTools-ItemIcon"
                style={{
                  color: item.rate >= "65%"
                        ? "white"
                        : null,
                  backgroundImage: item.rate >= "65%"
                        ? "linear-gradient(to bottom, #3c3c3c, #252525)"
                        : null,
                  boxShadow: item.rate >= "65%"
                        ? "0px 5px 5px var(--lightGray)"
                        : null,
                }}
              >
                {item.name}
              </p>
              <div className="loadBar2">
                <motion.div
                  style={{
                    borderRadius: "15px",
                    backgroundColor:
                      item.rate > "50%"
                        ? item.rate > "75%"
                          ? "#2d2d2d"
                          : "#3c3c3c"
                        : "#8e8e8e",
                    width: item.rate,
                    height: "100%",
                    // position: "absolute",
                    zIndex: "1000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6rem",
                    color: "#ffffff",
                    fontWeight: "500",
                  }}
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{
                    width: item.rate,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: 1,
                      },
                    }}
                    style={{fontSize: "0.6rem"}}
                  >
                    {item.rate}
                  </motion.p>
                </motion.div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tools;
