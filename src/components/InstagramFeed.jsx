import React, { useState } from "react";
import "./InstagramFeed.css";
import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { illustrations } from "./illustrations";
import { Link } from "react-router-dom";

function InstagramFeed() {
  const [illuShown, setIlluShown] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  function nextShown(direction) {
    setIlluShown((prevVisible) => {
      const newValue =
        direction === "right" ? prevVisible + 1 : prevVisible - 1;

      return newValue > 7 ? 0 : newValue < 0 ? 7 : newValue;
    });
  }

  return (
    <div>
      <div className="redBox">
        <motion.div className="halfBox1">
          <div className="druidContainer">
            <motion.h1
              animate={{
                color: [
                  "#790000",
                  "#ff0000",
                  "#00f7ff",
                  "#ff0000",
                  "#00f7ff",
                  "#790000",
                ],
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1],
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              MY
            </motion.h1>
            <motion.img
              alt="img"
              className="atesTalesLogo"
              src={require("../assets/Ates-Tales_Logo.svg").default}
              animate={{
                x: [0, 0, -2, 2, -2, 2, 0, 0],
                y: [-5, 5, -5],
              }}
              transition={{
                y: {
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1],
                  repeat: Infinity,
                },
                x: {
                  duration: 0.5,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1],
                  repeat: Infinity,
                  repeatDelay: 4.5,
                },
              }}
            ></motion.img>

            <motion.h1
              animate={{
                color: [
                  "#790000",
                  "#ff0000",
                  "#00f7ff",
                  "#ff0000",
                  "#00f7ff",
                  "#790000",
                ],
              }}
              transition={{
                duration: 0.5,
                ease: easeOut,
                times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1],
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              ART
            </motion.h1>
          </div>
          <motion.p
            className="InstagramFeedDescription"
            animate={{
              backgroundColor: ["#00f7ff3d", "#00f7ff4f", "#00f7ff3d"],
            }}
            transition={{
              duration: 6,
              ease: easeInOut,
              times: [0, 0.15, 0.3, 0.45, 0.7, 0.85, 1],
              repeat: Infinity,
            }}
          >
            In the mystical realm of creativity, where enchantments dance and
            wizards wield their pens, there exists a curious soul known as
            <a href="https://www.instagram.com/ates_tales/">
              {" "}
              ates_tales
            </a>
            . Visit my peculiar abode on Instagram, where my whimsical
            illustrations come to life.
            <br /> <br />
            Beware, for my passion for illustration has a peculiar twist. When I
            grant my art space to manifest, dark enchantments often weave their
            mysterious spells. Yet fear not, for these enigmatic creations bring
            a touch of magic to your day.
            <br /> <br />
            Should you seek professional illustrations for your grand quests,
            fear not to summon me. With my mystical expertise and enchanted
            tools, I shall conjure illustrations that align perfectly with your
            visions. Let our magical collaboration begin, and watch your ideas
            transform into captivating illustrations.
          </motion.p>
          <motion.p
            initial={
              isSmallScreen
                ? { opacity: [0], y: [-10] }
                : { opacity: [0], x: [-10] }
            }
            whileInView={
              isSmallScreen
                ? { opacity: [0, 1, 0], y: [-5, 5] }
                : { opacity: [0, 1, 0], x: [-10, 10] }
            }
            transition={{ duration: 3, repeat: Infinity }}
            className="seeItonIG"
          >
            Click on the Image to see it on Instagram!{" "}
            <KeyboardDoubleArrowDownIcon className="seeItonIGIcon" />
          </motion.p>
        </motion.div>

        <div className="halfBox2">
          <motion.div
            onClick={() => nextShown("left")}
            className="SlideshowArrowLeft"
          >
            <ArrowForwardIosIcon className="SlideShowIcon" />
          </motion.div>
          <div
            onClick={() => nextShown("right")}
            className="SlideshowArrowRight"
          >
            <ArrowForwardIosIcon className="SlideShowIcon" />
          </div>
          <AnimatePresence>
            {illustrations.map((item, index) => (
              <div className="slideShowImgContainer" key={item.id}>
                <Link to={item.link} target="_blank">
                  <motion.img
                    initial={{ opacity: 0, y: -5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    alt="img"
                    src={item.img}
                    style={{
                      display:
                        item.id === "illustrations" + illuShown
                          ? "flex"
                          : "none",
                    }}
                  ></motion.img>
                </Link>
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default InstagramFeed;
