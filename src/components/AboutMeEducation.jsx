import React, { useState } from "react";
import "./AboutMeEducation.css";
import { educationDatas } from "./educationDatas";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const variants = {
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      ease: "easeIn",
      duration: 0.5,
    },
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },

  hide: {
    x: -50,
    opacity: 0,
  },
};

const variantsResponsive = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },

  exit: {
    opacity: 0,
    y: 10,
    transition: {
      ease: "easeIn",
      duration: 0.3,
    },
  },

  hide: {
    opacity: 0,
    y: 10,
    transition: {
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

function AboutMeEducation() {
  const [isVisible, setIsVisible] = useState();
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  const scroll = () => {
    const section = document.getElementById("isVisible");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div layout key={0 + "-container"} className="container">
      <div className="AboutMeEducationtitleContainer">
        <h1 className="title">
          <SchoolIcon fontSize="2rem" style={{ color: "var(--red)" }} />
          EDUCATION
        </h1>
      </div>

      <motion.div key={0 + "-listsContainer"} className="listsContainer">
        <ul className="list">
          <div className="bornContainer">
            <p className="bornIcon">🎈</p>
            <p className="bornText">In 1992 I was born, and then...</p>
          </div>
          <div key={0 + "-educationListings"} className="educationListings">
            {educationDatas.map((item, index) => (
              <motion.div layout key={index}>
                <AnimatePresence>
                  <motion.li
                    layout
                    variants={variantsResponsive}
                    whileHover={
                      isSmallScreen
                        ? null
                        : item.id > 6
                        ? null
                        : {
                            x: 5,
                            transition: { duration: 0.3 },
                          }
                    }
                    whileTap={isSmallScreen ? { y: 2 } : { x: -2 }}
                    initial={{ x: 0 }}
                    animate={"show"}
                    exit={"exit"}
                    key={index + "-item"}
                    className={"item item" + index}
                    onClick={
                      isVisible === undefined
                        ? () => {
                            setIsVisible(item.id);
                          }
                        : () => {
                            scroll();
                            setIsVisible(item.id);
                          }
                    }
                    style={
                      isSmallScreen
                        ? isVisible === undefined
                          ? null
                          : {
                              display:
                                educationDatas[isVisible].id === index
                                  ? "none"
                                  : "block",
                            }
                        : null
                    }
                  >
                    <div
                      className={
                        isVisible === index
                          ? "itemTitleClicked itemTitleClicked" + index
                          : "itemTitle itemTitle" + index
                      }
                    >
                      <p className="itemTitleIcon">{item.icon}</p>
                      <p className="itemTitleText">{item.title}</p>
                      {index > 4 && index < 7 ? (
                        <p className="EducationHighScore">🔥</p>
                      ) : null}
                      <div className="openCloseIconContainer">
                        {item.id > 6 ? (
                          <p className="lockedIcon">🔒</p>
                        ) : (
                          <>
                            {item.school === undefined ? null : (
                              <span className="school">{item.school}</span>
                            )}
                            <ArrowForwardIosIcon
                              fontSize="1rem"
                              className="EducationArrow"
                            />
                          </>
                        )}
                      </div>
                    </div>
                    {item.id > 6 ? <div className={"locked locked" + item.id}></div> : null}
                  </motion.li>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  {isVisible === undefined ? null : (
                    <motion.div
                      className="itemContentContainer-Responsive"
                      key={educationDatas[isVisible].id}
                      variants={isSmallScreen ? variantsResponsive : variants}
                      animate={"show"}
                      initial={"hide"}
                      exit={"exit"}
                      style={{
                        display:
                          educationDatas[isVisible].id === index
                            ? "block"
                            : "none",
                        borderRadius:
                          educationDatas[isVisible].id === 0
                            ? "15px 15px 0px 0px"
                            : educationDatas[isVisible].id === 7
                            ? "0px 0px 15px 15px"
                            : null,
                      }}
                    >
                      <AnimatePresence>
                        <motion.ul
                          layout
                          key={0 + "-itemContentList-Responsive"}
                          className="itemContentList-Responsive"
                        >
                          <motion.div
                            layout
                            key={0 + "-itemContentTitleList-Responsive"}
                            className={
                              "itemContentTitleList-Responsive itemContentTitleList-Responsive" +
                              educationDatas[isVisible].id
                            }
                          >
                            <h1
                              className="itemContentTitleItem-Responsive"
                              id={
                                educationDatas[isVisible].id === index
                                  ? "isVisible"
                                  : null
                              }
                            >
                              {educationDatas[isVisible].title}{" "}
                              {educationDatas[isVisible].id > 6 ? "🔒" : null}
                            </h1>
                            <p className="itemTitleIcon-Responsive">
                              {educationDatas[isVisible].avatar}
                            </p>
                          </motion.div>
                          <motion.ul
                            className="itemContentItem-Responsive"
                            layout
                            key={0 + "-itemContentItem-Responsive"}
                          >
                            <motion.ul
                              layout
                              key={0 + "-itemContentItemList-Responsive"}
                              className="itemContentItemList-Responsive"
                            >
                              {educationDatas[isVisible].date === "" ? null : (
                                <li className="itemContentItemListContent">
                                  <CalendarMonthIcon className="EducationDatasIcon" />
                                  <p>{educationDatas[isVisible].date}</p>
                                </li>
                              )}
                              {educationDatas[isVisible].location ===
                              "" ? null : (
                                <li className="itemContentItemListContent">
                                  <LocationOnIcon className="EducationDatasIcon" />
                                  <p>{educationDatas[isVisible].location}</p>
                                </li>
                              )}
                              {educationDatas[isVisible].institute ===
                              "" ? null : (
                                <li className="itemContentItemListContent">
                                  <LocationCityIcon className="EducationDatasIcon" />
                                  <p>{educationDatas[isVisible].institute}</p>
                                </li>
                              )}
                              <li className="itemContentItemListContentTools">
                                <AutoFixHighIcon
                                  fontSize="none"
                                  className="EducationDatasToolIcon"
                                />
                                <ul className="toolList">
                                  {educationDatas[isVisible].graphicTools.map(
                                    (item, index) => (
                                      <li key={index + "-GraphicTool"} className="GraphicTool">
                                        {item}
                                      </li>
                                    )
                                  )}
                                  {educationDatas[isVisible].codingTools.map(
                                    (item, index) => (
                                      <li key={index + "-CodingTool"} className="CodingTool">
                                        {item}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                              {educationDatas[isVisible].content ===
                              "" ? null : (
                                <li className="descriptionContainer">
                                  <p className="descriptionTitle">
                                    Description:
                                  </p>
                                  <p className="description">
                                    {educationDatas[isVisible].content}
                                  </p>
                                </li>
                              )}
                            </motion.ul>
                          </motion.ul>
                        </motion.ul>
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </ul>
        {isVisible === undefined ? (
          <motion.div
          key={0 + "messageContainer"}
            className="messageContainer"
            initial={{ opacity: 0, x: 500 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 2,
                type: "spring",
                bounce: 0.5,
              },
            }}
          >
            <h1>👈</h1>
            <p>
              Select one of the listed characters to discover a piece of my Education Path!
            </p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              className="itemContentWrapper"
              key={educationDatas[isVisible].id}
              variants={isSmallScreen ? variantsResponsive : variants}
              animate={"show"}
              initial={"hide"}
              exit={"exit"}
              style={isSmallScreen ? { display: "none" } : { display: "flex" }}
            >
              <div className="ItemAvatarWrapper">
                {educationDatas[isVisible].avatar}
              </div>
              <div className="ItemContentContainer">
                <ul className="itemContentList">
                  <ul
                    className={
                      "itemContentTitleList itemContentTitleList" +
                      educationDatas[isVisible].id
                    }
                  >
                    <h1 className="itemContentTitleItem">
                      {educationDatas[isVisible].title}{" "}
                      {educationDatas[isVisible].id > 6 ? (
                        <p className="EducationHighScore">🔒</p>
                      ) : null}
                      {educationDatas[isVisible].id > 4
                      && educationDatas[isVisible].id < 7 ? (
                        <p className="EducationHighScore">🔥</p>
                      ) : null}
                    </h1>
                  </ul>
                  <ul className="itemContentItem">
                    <ul className="itemContentItemList">
                      {educationDatas[isVisible].date === "" ? null : (
                        <li className="itemContentItemListContent">
                          <CalendarMonthIcon className="EducationDatasIcon" />
                          <p>{educationDatas[isVisible].date}</p>
                        </li>
                      )}
                      {educationDatas[isVisible].location === "" ? null : (
                        <li className="itemContentItemListContent">
                          <LocationOnIcon className="EducationDatasIcon" />
                          <p>{educationDatas[isVisible].location}</p>
                        </li>
                      )}
                      {educationDatas[isVisible].institute === "" ? null : (
                        <li className="itemContentItemListContent">
                          <LocationCityIcon className="EducationDatasIcon" />
                          <p>{educationDatas[isVisible].institute}</p>
                        </li>
                      )}
                      <li className="itemContentItemListContentTools">
                        <AutoFixHighIcon
                          fontSize="none"
                          className="EducationDatasToolIcon"
                        />
                        <ul className="toolList">
                          {educationDatas[isVisible].graphicTools.map(
                            (item, index) => (
                              <li key={index} className="GraphicTool">
                                {item}
                              </li>
                            )
                          )}
                          {educationDatas[isVisible].codingTools.map(
                            (item, index) => (
                              <li key={index} className="CodingTool">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </li>

                      {educationDatas[isVisible].content === "" ? null : (
                        <li className="descriptionContainer">
                          <p className="descriptionTitle">Description:</p>
                          <p className="description">
                            {educationDatas[isVisible].content}
                          </p>
                        </li>
                      )}
                    </ul>
                  </ul>
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </motion.div>
  );
}

export default AboutMeEducation;
