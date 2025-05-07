import React from "react";
import { Globe, Github } from "lucide-react";
import "./css/ProjectCard.css";
const ProjectCard = ({
  title,
  date,
  imageUrl,
  description,
  techStack,
  liveLink,
  repoLink,
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img alt={`${title} Preview`} src={imageUrl} />
      </div>

      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <p className="project-date">{date}</p>
      </div>

      <p className="project-description">{description}</p>

      <div className="project-tech">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-button">
          <Globe size={20} /> Website
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-button">
          <Github size={20} /> Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
