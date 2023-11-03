import React from "react";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import "./AboutMeSkillsAndTools.css";
import Skills from "./Skills";
import Tools from "./Tools";

function AboutMeSkillsAndTools() {

  return (
    <>
      <div className="AboutMeSkillsAndTools-MainContainer">
        <h1 className="title">
          <AutoFixHighIcon fontSize="1.5rem" style={{ color: "var(--red)" }} />{" "}
          SKILLS & TOOLS
        </h1>

        <Skills />

        <Tools />

      </div>
    </>
  );
}

export default AboutMeSkillsAndTools;