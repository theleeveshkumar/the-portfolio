import React, { useEffect, useState } from 'react';
import "./css/skills.css";

const Skills = () => {
  const [skillsData, setSkillsData] = useState({ programming_languages: [] });

  useEffect(() => {
    fetch("http://localhost:5000/api/skills")
      .then(res => res.json())
      .then(data => setSkillsData(data));
  }, []);

  return (
    <div className='skills-main'>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-button">
        {skillsData.programming_languages.map((skill, index) => (
          <div key={index} className={`skill-card priority-${skill.priority.toLowerCase()}`}>
            <h3>{skill.name}</h3>
            <p>{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
