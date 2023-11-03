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
        "I'm a very quiet guy who loves to workout and be in the nature. My passions outside the job sphere are sports and music. I also love Football, I'm a Juventus fan! In my free time, I enjoy deep conversations, I value quiet moments over loud parties even if I love dancing. Of course I love food and travel around, but I'm not ossesionate about it.",
    },
    {
      id: 1,
      title: "Which are you goals?",
      content:
        "My goals are to succeed, in every aspect of life I value. I am a very ambitious person I don't settle for pieces or slices... I want the whole thing!",
    },
    {
      id: 2,
      title: "How do you see yourself within 5 years?",
      content:
        "Right now I am very focused on starting my career path in the world of Development. This is why I can clearly say that in 5 years I see myself working as a Front End Developer or even Full-Stack.",
    },
    {
      id: 3,
      title: "Which kind of work environment suits best with you?",
      content:
        "I am always for flexibility, sustainability and respect. I will always look for a good balance between work and life, I want to work remotely to be able to live and work from where I want. Growth is also a very important aspect for me, I want to work with people which are better than me and from whom I can learn.",
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
                className={
                (isShown) === index ? "FaqItemClicked" : "FaqItem"
              }
                key={index}
                onClick={() => setIsShown(index === isShown ? null : index)}
                transition={{ duration: 0.3 }}
              >
                <div className="FaqTitle">
                  {item.title}{" "}
                  <ArrowBackIosIcon
                    fontSize="1rem"
                    className={
                      (isShown) === index ? "IconOpenOpen" : "IconOpenClose"
                    }
                  />
                </div>
                  <motion.div
                    className={
                      (isShown) === item.id ? "FaqContentShow" : "FaqContentHide"
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
