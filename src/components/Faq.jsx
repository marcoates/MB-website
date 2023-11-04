import React, { useState } from "react";
import "./Faq.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

function Faq() {
  const [isShown, setIsShown] = useState();

  const faqs = [
    {
      id: 0,
      title: "Tell me something about yourself...",
      content:
        "I am a reserved individual with a deep love for fitness and nature. Beyond my professional pursuits, my passions include sports and music, with a special affinity for football, particularly as a devoted Juventus fan. During my leisure hours, I cherish meaningful conversations and tranquil moments, preferring quiet gatherings to noisy parties, although I do enjoy dancing. While I appreciate good food and the opportunity to travel, I maintain a balanced approach, finding joy in these experiences without becoming overly fixated on them.",
    },
    {
      id: 1,
      title: "Which are you goals?",
      content:
        "I am driven by a deep-rooted ambition to achieve success in all facets of life that matter to me. Settling for a fraction is not in my nature; I aim for the entirety, striving for comprehensive excellence in my endeavors.",
    },
    {
      id: 2,
      title: "How do you see yourself within 5 years?",
      content:
        "In the next 5 years, I envision myself firmly established in the field of Development. My focus lies in becoming a proficient Front End Developer, with aspirations to expand my skills into Full-Stack Development, marking significant growth in my career trajectory.",
    },
    {
      id: 3,
      title: "Which kind of work environment suits best with you?",
      content:
        "I champion flexibility, sustainability, and respect within my professional ethos, striving for a harmonious work-life balance that embraces remote work — allowing me the freedom to live and work from any location. Personal growth is paramount; I seek to collaborate with individuals who inspire excellence and offer opportunities for learning and advancement.",
    },
  ];

  return (
    <>
      <div className="FaqContainer">
        <div className="title">
          <h1 className="FaqTitleIcon">?</h1>
          FAQ
        </div>
        <motion.ul className="FaqList">
          <AnimatePresence>
            <LayoutGroup>
              {faqs.map((item, index) => (
                <motion.li
                  className={isShown === index ? "FaqItemClicked" : "FaqItem"}
                  key={index}
                  onClick={() => setIsShown(index === isShown ? null : index)}
                  transition={{ duration: 0.3 }}
                >
                  <div className="FaqTitle">
                    {item.title}{" "}
                    <ArrowBackIosIcon
                      fontSize="1rem"
                      className={
                        isShown === index ? "IconOpenOpen" : "IconOpenClose"
                      }
                    />
                  </div>
                  <motion.div
                    className={
                      isShown === item.id ? "FaqContentShow" : "FaqContentHide"
                    }
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    key={index}
                  >
                    {item.content}
                  </motion.div>
                </motion.li>
              ))}
            </LayoutGroup>
          </AnimatePresence>
        </motion.ul>
      </div>
    </>
  );
}

export default Faq;
