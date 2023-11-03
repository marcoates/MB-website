import React, { useState, useEffect } from "react";
import { projects } from "./projects";
import "./Portfolio.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// STILL TO DO
// - Making possible to projects objects to have multiple "Tags" (an array of tags go in conflict with mapping)
// - Making filter based on multiple factors like adding a "Tools Used" one

function Portfolio() {

  const [projectsShown, setProjectsShown] = useState(projects);
  const [filterActive, setFilterActive] = useState("all");

  useEffect(() => {
    filterActive === "all"
      ? setProjectsShown(projects)
      : setProjectsShown(projects.filter((item) => item.tag.includes(filterActive)));
  }, [filterActive]);

  function handleClick(event) {
    setFilterActive(event.target.getAttribute("value"));
  }

  const allTags = projects.map((item) => item.tag.map((item) => item)).flat();

  const uniqueTags = Array.from(new Set(allTags.map((item) => item)));

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="title">
      <img alt="logo-img" className="titleIcon" src={require("../assets/Stondato.png")}/>
      Portfolio
      </h1>

      <ul className="filtersList">
        <li tabIndex="0" className="filter" value="all" onClick={handleClick}>
          ALL
        </li>
        {uniqueTags.map((item, index) => (
          <li
            tabIndex="0"
            key={index}
            className="filter"
            value={item}
            onClick={handleClick}
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>

      <motion.ul className="imagesBox">
        <AnimatePresence>
          {projectsShown.map((item, index) => (
            <Link to={"/project/" + convertToSlug(item.title)}
              key={item.id}>
            <motion.li
              layout
              className="project"
              initial={{ x: 5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img alt="proj-img" src={item.avatar}></img>
              <p>{item.title}</p>
            </motion.li>
            </Link>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

export default Portfolio;
