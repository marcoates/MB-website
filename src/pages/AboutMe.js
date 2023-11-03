import React, { useEffect } from "react";
import AboutMeIntro from "../components/AboutMeIntro"
import AboutMeEducation from "../components/AboutMeEducation"
import AboutMeSkillsAndTools from "../components/AboutMeSkillsAndTools"
import AboutMeLanguages from "../components/AboutMeLanguages"
import AboutMeWork from "../components/AboutMeWork";
import AboutMeMyMotto from "../components/AboutMeMyMotto"
import Portfolio from '../components/Portfolio'
import Faq from "../components/Faq";

export function AboutMe() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <AboutMeIntro />
    <AboutMeEducation />
    {/* <div className="HomePatternDivision"></div> */}
    <AboutMeLanguages />
    {/* <div className="HomePatternDivision"></div> */}
    <AboutMeSkillsAndTools />
    <AboutMeWork />
    {/* <div className="HomePatternDivision"></div> */}
    <AboutMeMyMotto />
    {/* <div className="HomePatternDivision"></div> */}

    <Portfolio />

    <Faq />

    </>
  );
}
