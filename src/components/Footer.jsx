import React from "react";
import "./Footer.css";
import { personalInfo } from "./personalInfo";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
// import Faq from "./Faq";

function Footer() {
  const socialElements = [
    {
      id: "socialElements0",
      icon: <LinkedInIcon fontSize="medium" />,
      link: "https://linkedin.com/in/marco-braggion",
    },
    {
      id: "socialElements1",
      icon: <InstagramIcon fontSize="medium" />,
      link: "https://www.instagram.com/ates_tales/",
    },
    {
      id: "socialElements2",
      icon: <GitHubIcon fontSize="medium" />,
      link: "https://github.com/marcoates",
    },
  ];

  return (
    <>
      <div className="footer">
      {/* <Faq /> */}
      <div className="footerContainer">
        <div className="infoListContainer">
          <ul className="infoList">
            {personalInfo.map((item, index) => (
              <li className="info" key={item.id}>
                {item.icon}
                <p className="itemText">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="socialListContainer">
          <ul className="socialList">
            {socialElements.map((item, index) => (
              <Link to={item.link} target="_blank" key={item.id}>
                <li className="social">
                  {item.icon}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
