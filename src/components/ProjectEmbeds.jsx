import React from "react";
import { projects } from "../components/projects";
import "./ProjectEmbeds.css";

function ProjectEmbeds({ name }) {
  const project = projects.find((item) => item.url === name);

  const embeds = (project?.embeds || [])
    .map((embed, index) => {
      if (typeof embed === "string") {
        return {
          url: embed,
          title: project?.title || `Embedded link ${index + 1}`,
          subtitle: "Apri il contenuto",
          thumbnail: null,
        };
      }
      return embed && embed.url ? embed : null;
    })
    .filter(Boolean);

  if (embeds.length === 0) {
    return null;
  }

  return (
    <div className="projectEmbedsContainer">
      {embeds.map((embed, index) => (
        <div className="projectEmbedCard" key={index}>
          <a
            className="projectEmbedThumb"
            href={embed.url}
            target="_blank"
            rel="noopener noreferrer"
            style={embed.thumbnail ? { backgroundImage: `url(${embed.thumbnail})` } : undefined}
          >
            <div className="projectEmbedPlay" aria-hidden="true" />
            <div className="projectEmbedOverlay">
              {embed.title && <h3 className="projectEmbedTitle">{embed.title}</h3>}
              {embed.subtitle && <p className="projectEmbedSubtitle">{embed.subtitle}</p>}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectEmbeds;
