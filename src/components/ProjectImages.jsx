import React from "react";
import { projects } from "../components/projects";
import "./ProjectImages.css";
import YoutubeEmbed from "./YoutubeEmbed";
import { useMediaQuery } from "@mui/material";

function ProjectImages(props) {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  return (
    <div className="projectImagesContainer">
      {projects.map((item, index) => {
        // Check if the current project matches the specified name
        if (item.url === props.name) {
          // Conditional rendering based on the project name
          if (props.name === "urmet-iuvs-plus-app") {
            return (
              <div className={"projectImagesItemSafari projectImagesItemSafari" + item.id} key={index}>
                <YoutubeEmbed key={item.id}/>
              </div>
            );
          } else if (props.name === "todolist-app-web-application") {
            return item.images.map((img, i) => (
              <div
                key={i} 
                className={isSmallScreen ? "projectImagesItemSafari projectImagesItemSafari" + item.id : "projectImagesItem projectImagesItem" + item.id}
                id="imageMod">
                <img
                  alt="proj-logo-img"
                  src={img}
                  className={isSmallScreen ? "projectImagesSafari projectImagesSafari" + item.id : "projectImages projectImages" + item.id}
                ></img>
              </div>
            ));
          } else {
            return (
              <>
                {item.images.map((img, i) => (
                  <div
                    key={i} 
                    className={"projectImagesItem projectImagesItem" + item.id}
                    id="imageMod">
                    <img
                      alt="proj-logo-img"
                      src={img}
                      className={"projectImages projectImages" + item.id}
                    ></img>
                  </div>
                ))}
                {/* Render videos if any */}
                {item.videos && item.videos.map((videoSrc, vi) => (
                  <div key={vi} className={"projectVideoItem projectVideoItem" + item.id}>
                    <video 
                    className={"projectVideos projectVideos" + item.id}
                    autoPlay loop muted playsInline key={vi}>
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </>
            );
          }
        }
        // If no conditions are met, return null
        return null;
      })}
    </div>
  );
  
}

export default ProjectImages;
