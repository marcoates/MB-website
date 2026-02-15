import React from "react";
import { projects } from "../components/projects";
import "./ProjectImages.css";
import YoutubeEmbed from "./YoutubeEmbed";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

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
              <div
                className={
                  "projectImagesItemSafari projectImagesItemSafari" + item.id
                }
                key={index}
              >
                <YoutubeEmbed embedId="IH4V_e08UhA" key={item.id} />
              </div>
            );
          } else if (
            props.name === "paola-and-filippo-animated-wedding-invitation"
          ) {
            return (
              item.images.map((img, i) => (
                
               i === 6 ?  
               <Link to="https://www.youtube.com/watch?v=6792wYmTENc&ab_channel=AmessageforYoubyPaola%26Filippo" target="_blank"
                    className={"projectImagesItem projectImagesItem" + item.id}>
               <div
                    key={i}
                    id="imageMod"
                  >
                    <img
                      alt="proj-img"
                      src={img}
                      className={"projectImages projectImages" + item.id}
                    ></img>
                  </div>
                  </Link>
                  :
                  <div
                    key={i}
                    className={"projectImagesItem projectImagesItem" + item.id}
                    id="imageMod"
                  >
                    <img
                      alt="proj-img"
                      src={img}
                      className={"projectImages projectImages" + item.id}
                    ></img>
                  </div>
                ))
            );
          } else if (props.name === "todolist-app-web-application") {
            return item.images.map((img, i) => (
              <div
                key={i}
                className={
                  isSmallScreen
                    ? "projectImagesItemSafari projectImagesItemSafari" +
                      item.id
                    : "projectImagesItem projectImagesItem" + item.id
                }
                id="imageMod"
              >
                <img
                  alt="proj-img"
                  src={img}
                  className={
                    isSmallScreen
                      ? "projectImagesSafari projectImagesSafari" + item.id
                      : "projectImages projectImages" + item.id
                  }
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
                    id="imageMod"
                  >
                    <img
                      alt="proj-img"
                      src={img}
                      className={"projectImages projectImages" + item.id}
                    ></img>
                  </div>
                ))}
                {/* Render videos if any */}
                {item.videos?.map((vid, i) => (
                    <div
                      key={i}
                      className={"projectVideoItem projectVideoItem" + item.id}
                    >
                      <video
                        className={"projectVideos projectVideos" + item.id}
                        autoPlay
                        loop
                        muted
                        playsInline
                        key={i}
                      >
                        <source src={vid} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )
                )}
              </>
            );
          }
        }
        return null;
      })}
    </div>
  );
}

export default ProjectImages;
