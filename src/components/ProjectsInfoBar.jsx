import React, { useEffect } from "react";
import { projects } from "./projects";
import "./ProjectsInfoBar.css";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

// Fix item tags displaying without spaces

function ProjectsInfoBar(props) {

  useEffect(() => {
    // Scroll to the top of the page when the component updates
    window.scrollTo(0, 0);
  }, [props.name]);

  return (
    <>
      <div className="projectsInfoBarContainer">

<div className="ProjectBasicInfos">
        {projects.map((item, index) =>
          item.url === props.name ? (
            item.client !== null ? (
              <div className="projectInfoBarElement" key={`client-${index}`}>
              <AccountCircleIcon
                    fontSize="small"
                    style={{ color: "#ff0000" }}
                  />
                <h3>
                  Client:
                </h3>
                <ul className="projectInfoBarList">
                  <li key={index} className="projectInfoBarListElement">
                  <span>{item.client}</span>
                  </li>
                </ul>
              </div>
            ) : null
          ) : null
        )}

        {projects.map((item, index) =>
          item.url === props.name ? (
            item.location !== null ? (
              <div className="projectInfoBarElement" key={`location-${index}`}>
              <LocationOnIcon
                    fontSize="small"
                    style={{ color: "#ff0000" }}
                  />
                <h3>
                  Location:
                </h3>
                <ul className="projectInfoBarList">
                  <li key={index} className="projectInfoBarListElement">
                  <span>{item.location}</span>
                  </li>
                </ul>
              </div>
            ) : null
          ) : null
        )}

        {projects.map((item1, index) =>
          item1.url === props.name ? (
            item1.tag !== null ? (
              <div className="projectInfoBarElement" key={`tag-${index}`}>

              <LocalOfferIcon
                    fontSize="small"
                    style={{ color: "#ff0000" }}
                  />
                <h3>
                  Tag:
                </h3>

                <ul className="projectInfoBarList">
                  
                    {item1.tag.map((item2, i) =>
                    <li key={i} className="projectInfoBarListElement">
                    <span>{item2}{item1.tag.length-1 !== 0 && i !== item1.tag.length-1 && ", "}</span>
                    </li>
                    )}
                  
                </ul>
              </div>
            ) : null
          ) : null
        )}

        {projects.map((item, index) =>
          item.url === props.name ? (
            item.toolsUsed !== null ? (
              <div className="projectInfoBarTools" key={`tools-${index}`}>
              <div className="projectInfoBarToolsTitle">
              <AutoFixHighIcon
                    fontSize="small"
                    style={{ color: "#ff0000" }}
                  />
                <h3>
                  Tools Used:
                </h3>
                </div>
                <ul className="projectInfoBarList">
                  {item.graphicToolsUsed.map((tool, i) => (
                    <li key={i} className="projectInfoBarGraphicListElement">
                    {tool}
                      {/* <img
                        alt="tool-img"
                        src={tool.icon}
                        className="toolImg"
                      ></img> */}
                      {/* <span>{tool.name}</span> */}
                    </li>
                  ))}
                  {item.codingToolsUsed.map((tool, i) => (
                    <li key={i} className="projectInfoBarCodingListElement">
                    {tool}
                      {/* <img
                        alt="tool-img"
                        src={tool.icon}
                        className="toolImg"
                      ></img> */}
                      {/* <span>{tool.name}</span> */}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null
          ) : null
        )}
        </div>
      </div>
    </>
  );
}

export default ProjectsInfoBar;
