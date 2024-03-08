import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  {
    id: 0,
    title: "Graphic Design",
    score: 85,
  },
  {
    id: 1,
    title: "Illustration",
    score: 80,
  },
  {
    id: 2,
    title: "Motion Design",
    score: 75,
  },
  {
    id: 3,
    title: "3D",
    score: 45,
  },
  {
    id: 4,
    title: "Front-End",
    score: 75,
  },
  {
    id: 5,
    title: "Back-End",
    score: 25,
  },
];

function Skills() {
  const skillsRef = useRef(null);
  const [progressIntervals, setProgressIntervals] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let circularSkills = document.querySelectorAll(".circularSkills");
      let progressValue = document.querySelectorAll(".progressValue");
      let ball = document.querySelectorAll(".ballWrapper");

      for (let i = 0; i < circularSkills.length; i++) {
        const [entry] = entries;
        if (entry.isIntersecting && !progressIntervals[i]) {
          const progressEndValue = skills[i].score;
          const progressValueElement = progressValue[i];
          const circularSkillsElement = circularSkills[i];
          const ballElement = ball[i];

          let progressStartValue = 0;
          let speed = 25;

          let progress = setInterval(() => {
            progressStartValue++;

            progressValueElement.textContent = progressStartValue + "%";

            i < 4 ? 
            circularSkillsElement.style.background = `conic-gradient( #fe5353, ${
              progressStartValue * 3.6
            }deg, transparent 0deg)`
            :
            circularSkillsElement.style.background = `conic-gradient(#7e7e7e, ${
              progressStartValue * 3.6
            }deg, transparent 0deg)`;


            ballElement.style.rotate = `${
              progressStartValue * 3.6
            }deg`

            if (progressStartValue === progressEndValue) {
              clearInterval(progress);
            }
          }, speed);

          setProgressIntervals((prevIntervals) => [
            ...prevIntervals.slice(0, i),
            progress,
            ...prevIntervals.slice(i + 1),
          ]);
        }
      }
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
      progressIntervals.forEach((interval) => {
        clearInterval(interval);
      });
    };
  }, [progressIntervals]); // Add progressIntervals to dependency array

  return (
    <div className="SkillsContainer" ref={skillsRef}>
      <ul className="SkillsList">
        {skills.map((item, index) => (
          <motion.li
            className="SkillsItem"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5,}}
            key={item.id}
          >
            <h1>{item.title}</h1>
            <div className={"skillsWrapper skillsWrapper" + index}>
            <div className={"circularSkills circularSkills" + index}>
              <span className="progressValue">{item.score}</span>
              <div className={"ballOne ballOne" + index}></div>
              <div className="ballWrapper">
              <div className={"ballTwo ballTwo" + index}></div>
              </div>
            </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

