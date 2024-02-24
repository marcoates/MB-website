import React, { useEffect } from "react";
import InstagramFeed from "../components/InstagramFeed";
import FeaturesWithIcons from "../components/FeaturesWithIcons";
import Portfolio from "../components/Portfolio";
import Intro from "../components/Intro"
import Faq from "../components/Faq"

export function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      <Intro />

      <FeaturesWithIcons />

      {/* <div className="HomePatternDivision"></div> */}

      <InstagramFeed />

      {/* <div className="HomePatternDivision"></div> */}

      <Portfolio />

      <Faq />

    </>
  );
}
