import React, { useEffect, useState } from "react";
import ProjectCard from "../components/projectCard";
import "./css/projects.css";

// ✅ Local JSON data (fallback)
import localProjects from "../assets/portfolio.projects.json";

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
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
