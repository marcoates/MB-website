import React from "react";
import { projects } from "../components/projects";
import "./ProjectImages.css";
import YoutubeEmbed from "./YoutubeEmbed";

function ProjectImages(props) {
  return (
    <div className="projectImagesContainer">
      {projects.map((item, index) =>

        item.url === props.name

          ? 

          props.name === "urmet-iuvs-plus-app" ?

          <div className={"projectImagesItemSafari projectImagesItemSafari"+item.id} key={index}>
              <YoutubeEmbed key={item.id}/>
              </div> 

              :

              props.name === "todolist-app-web-application" ?
          
              item.images.map((img, i) => (
              <div
              key={i} 
              className={"projectImagesItemSafari projectImagesItemSafari"+item.id}
              id="imageMod">
                <img
                  alt="proj-logo-img"
                  src={img}
                  className={"projectImagesSafari projectImagesSafari"+item.id}
                ></img>
              </div>
            ))

              :

          item.images.map((img, i) => (
              <div
              key={i} 
              className={"projectImagesItem projectImagesItem"+item.id}
              id="imageMod">
                <img
                  alt="proj-logo-img"
                  src={img}
                  className={"projectImages projectImages"+item.id}
                ></img>
              </div>
            ))
          : null
          
      )}

    </div>
  );
}

export default ProjectImages;
