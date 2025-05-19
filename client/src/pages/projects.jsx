import React, { useEffect, useState } from "react";
import { Globe, Github } from "lucide-react";
import "./css/projects.css";
import "../components/css/projectCard.css";

// ✅ Local JSON data (fallback)
import localProjects from "../assets/portfolio.projects.json";

// Reusable CardProject component
const CardProject = ({
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
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          <Globe size={20} /> Website
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          <Github size={20} /> Source
        </a>
      </div>
    </div>
  );
};

// Main Projects component
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // ✅ Using local JSON for now
    setProjects(localProjects);

    // ❌ Commented out MongoDB fetch for future use
    /*
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Failed to fetch from MongoDB:", err));
    */
  }, []);

  return (
    <div className="project-main">
      <h2 className="project-heading">My Projects</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
