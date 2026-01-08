import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../components/projects";
import ProjectImages from "../components/ProjectImages";
import ProjectsInfoBar from "../components/ProjectsInfoBar";
import Portfolio from "../components/Portfolio";
import ProjectEmbeds from "../components/ProjectEmbeds";

export function Project() {

  const { name } = useParams();

  const project = projects.find(item => item.url === name);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className="projectContainer">

        <ProjectImages name={name} />
        <ProjectEmbeds name={name} />

        <h1 className="projectInfoBarTitle">
          {project.title}
        </h1>

        <ProjectsInfoBar name={name} />

        <p className="projectInfoBarDescription">
          {project.description}
        </p>

      </div>

      <Portfolio />
      
    </>
  );
}
