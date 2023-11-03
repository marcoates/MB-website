import React, { useState } from "react";
import { workDatas } from "./workDatas";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AnimatePresence, motion } from "framer-motion";
import "./AboutMeWork.css";
import { useMediaQuery } from "@mui/material";

const variants = {
  exit: {
    opacity: 0,
    x: -50,
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
    x: 50,
    opacity: 0,
  },
};

const variantsResponsive = {
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      ease: "easeIn",
      duration: 0.5,
    },
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },

  hide: {
    y: 50,
    opacity: 0,
  },
};

function AboutMeWork() {
  const [isVisible, setIsVisible] = useState();
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  // const scroll = () => {
  //   const section = document.getElementById("isVisible");
  //   section.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  return (
    <div className="AboutMeWorkcontainer">
      <div className="AboutMeWorktitleContainer">
        <h1 className="title">
          <WorkIcon fontSize="2rem" style={{ color: "var(--red)" }} />
          WORK EXPERIENCE
        </h1>
      </div>

      <div className="AboutMeWorklistsContainer">
        {isSmallScreen ? null : isVisible === undefined ? (
          <motion.div
            className="AboutMeWorkmessageContainer"
            initial={{ opacity: 0, x: -500 }}
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
            <p>Select one Work Experience to discover more about it!</p>
            <h1>👉</h1>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              className="AboutMeWorkitemContentContainer"
              key={workDatas[isVisible].id}
              variants={variants}
              animate={"show"}
              initial={"hide"}
              exit={"exit"}
            >
              <ul className="AboutMeWorkitemContentList">
                <ul className="AboutMeWorkitemContentTitleList">
                  <h1 className="AboutMeWorkitemContentTitleItem">
                    {workDatas[isVisible].title}
                  </h1>
                  <img
                    alt="workplace-logo-img"
                    className="AboutMeWorkitemTitleInnerIcon"
                    src={workDatas[isVisible].icon}
                  ></img>
                </ul>
                <ul className="AboutMeWorkitemContentItem">
                  <ul className="AboutMeWorkitemContentItemList">
                    {workDatas[isVisible].date === "" ? null : (
                      <li className="itemContentItemListContent">
                        <CalendarMonthIcon
                          style={{
                            fontSize: "2rem",
                            color: "var(--red)",
                            border: "5px solid var(--lightRed)",
                            borderRadius: "50%",
                            backgroundColor: "var(--lightRed)",
                          }}
                        />
                        <p>{workDatas[isVisible].date}</p>
                      </li>
                    )}
                    {workDatas[isVisible].location === "" ? null : (
                      <li className="itemContentItemListContent">
                        <LocationOnIcon
                          style={{
                            fontSize: "2rem",
                            color: "var(--red)",
                            border: "5px solid var(--lightRed)",
                            borderRadius: "50%",
                            backgroundColor: "var(--lightRed)",
                          }}
                        />
                        <p>{workDatas[isVisible].location}</p>
                      </li>
                    )}
                    {workDatas[isVisible].tools === "" ? null : (
                      <li className="itemContentItemListContentTools">
                        <AutoFixHighIcon
                          fontSize="none"
                          className="EducationDatasToolIcon"
                        />
                        <ul className="AboutMeWorktoolList">
                          {workDatas[isVisible].graphicTools.map(
                            (item, index) => (
                              <li key={index} className="GraphicTool">
                                {item}
                              </li>
                            )
                          )}
                          {workDatas[isVisible].codingTools.map(
                            (item, index) => (
                              <li key={index} className="CodingTool">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    )}
                    {workDatas[isVisible].content === "" ? null : (
                      <li className="AboutMeWorkdescriptionContainer">
                        <p className="AboutMeWorkdescriptionTitle">
                          Description:
                        </p>
                        <p className="AboutMeWorkdescription">
                          {workDatas[isVisible].content}
                        </p>
                      </li>
                    )}
                  </ul>
                </ul>
              </ul>
            </motion.div>
          </AnimatePresence>
        )}

        <ul className="AboutMeWorklist">
          {isSmallScreen
            ? workDatas.map((item, index) => (
                <div key={item.id}>
                  <motion.li
                    key={item.id}
                    whileHover={
                      item.id > 5
                        ? null
                        : {
                            x: 5,
                            transition: { duration: 0.3 },
                          }
                    }
                    whileTap={{ x: -2 }}
                    className={"AboutMeWorkitem"}
                    onClick={() =>
                      setIsVisible(isVisible === item.id ? undefined : item.id)
                    }
                  >
                    <div
                      className={
                        isVisible === index
                          ? "AboutMeWorkitemTitleClicked AboutMeWorkitemTitleClicked" +
                            index
                          : "AboutMeWorkitemTitle AboutMeWorkitemTitle" + index
                      }
                    >
                    <div className="AboutMeLogoTitleWrapper">
                      <div className="CompanyLogosContainer">
                        <img
                          alt="work-logo-img"
                          className="AboutMeWorkitemTitleIcon"
                          src={item.icon}
                        />
                      </div>
                      <div className="AboutMeWorkitemTitleTextsContainer">
                        <p className="AboutMeWorkitemTitleText">{item.title}</p>
                      </div>
                    </div>
                      <div className="AboutMeWorkopenCloseIconContainer">
                        {item.position === "" ? null : (
                          <p className="position">{item.position}</p>
                        )}
                        <ArrowBackIosIcon
                          fontSize="1rem"
                          style={
                            isSmallScreen
                              ? item.id === isVisible
                                ? { rotate: "90deg", transition: 0.3 }
                                : { rotate: "-90deg", transition: 0.3 }
                              : null
                          }
                        />
                      </div>
                    </div>
                  </motion.li>

                  {isVisible === item.id ? (
                    <AnimatePresence>
                      <motion.div
                        layout
                        className="AboutMeWorkitemContentContainer"
                        key={workDatas[isVisible].id}
                        variants={isSmallScreen ? variantsResponsive : variants}
                        animate={"show"}
                        initial="hide"
                        exit={"exit"}
                      >
                        <ul className="AboutMeWorkitemContentList">
                          <ul className="AboutMeWorkitemContentTitleList">
                            <h1 className="AboutMeWorkitemContentTitleItem">
                              {workDatas[isVisible].title}
                            </h1>
                            <img
                              alt="workplace-logo-img"
                              className="AboutMeWorkitemTitleInnerIcon"
                              src={workDatas[isVisible].icon}
                            ></img>
                          </ul>
                          <ul className="AboutMeWorkitemContentItem">
                            <ul className="AboutMeWorkitemContentItemList">
                              {workDatas[isVisible].date === "" ? null : (
                                <li className="itemContentItemListContent">
                                  <CalendarMonthIcon
                                    style={{
                                      fontSize: "2rem",
                                      color: "var(--red)",
                                      border: "5px solid var(--lightRed)",
                                      borderRadius: "50%",
                                      backgroundColor: "var(--lightRed)",
                                    }}
                                  />
                                  <p>{workDatas[isVisible].date}</p>
                                </li>
                              )}
                              {workDatas[isVisible].location === "" ? null : (
                                <li className="itemContentItemListContent">
                                  <LocationOnIcon
                                    style={{
                                      fontSize: "2rem",
                                      color: "var(--red)",
                                      border: "5px solid var(--lightRed)",
                                      borderRadius: "50%",
                                      backgroundColor: "var(--lightRed)",
                                    }}
                                  />
                                  <p>{workDatas[isVisible].location}</p>
                                </li>
                              )}
                              <li className="itemContentItemListContentTools">
                                <AutoFixHighIcon
                                  fontSize="none"
                                  className="EducationDatasToolIcon"
                                />
                                <ul className="AboutMeWorktoolList">
                                  {workDatas[isVisible].graphicTools.map(
                                    (item, index) => (
                                      <li key={index} className="GraphicTool">
                                        {item}
                                      </li>
                                    )
                                  )}
                                  {workDatas[isVisible].codingTools.map(
                                    (item, index) => (
                                      <li key={index} className="CodingTool">
                                        {item}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                              {workDatas[isVisible].content === "" ? null : (
                                <li className="AboutMeWorkdescriptionContainer">
                                  <p className="AboutMeWorkdescriptionTitle">
                                    Description:
                                  </p>
                                  <p className="AboutMeWorkdescription">
                                    {workDatas[isVisible].content}
                                  </p>
                                </li>
                              )}
                            </ul>
                          </ul>
                        </ul>
                      </motion.div>
                    </AnimatePresence>
                  ) : null}
                </div>
              ))
            : workDatas.map((item, index) => (
                <motion.li
                  whileHover={
                    item.id > 5
                      ? null
                      : {
                          x: 5,
                          transition: { duration: 0.3 },
                        }
                  }
                  whileTap={{ x: -2 }}
                  key={item.id}
                  className={"AboutMeWorkitem AboutMeWorkitem" + index}
                  onClick={() => setIsVisible(item.id)}
                >
                  <div
                    className={
                      isVisible === index
                        ? "AboutMeWorkitemTitleClicked AboutMeWorkitemTitleClicked" +
                          index
                        : "AboutMeWorkitemTitle AboutMeWorkitemTitle" + index
                    }
                  >
                    <div className="AboutMeWorkopenCloseIconContainer">
                      <ArrowBackIosIcon fontSize="1rem" />
                      {item.position === "" ? null : (
                        <p className="position">{item.position}</p>
                      )}
                    </div>
                    <div className="AboutMeLogoTitleWrapper">
                    <p className="AboutMeWorkitemTitleText">{item.title}</p>
                    <div className="CompanyLogosContainer">
                      <img
                        alt="work-logo-img"
                        className="AboutMeWorkitemTitleIcon"
                        src={item.icon}
                      />
                    </div>
                    </div>
                  </div>
                </motion.li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutMeWork;
