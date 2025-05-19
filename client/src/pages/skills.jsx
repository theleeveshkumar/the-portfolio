import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./css/skills.css";

// Icons for various skills (you can import these from a library like react-icons)
import { FaCode, FaDatabase, FaDesktop, FaServer, FaMobile, FaTools } from 'react-icons/fa';

// Import local JSON file
import localSkills from "../assets/portfolio.skills.json";

const Skills = () => {
  const [skillsData, setSkillsData] = useState({ programming_languages: [] });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Use local JSON data
    setSkillsData({ programming_languages: localSkills });
    
    // Set in view after a small delay for animations
    const timer = setTimeout(() => setIsInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Extract unique categories from skills
  const categories = ['All', ...new Set(skillsData.programming_languages.map(skill => skill.category))];
  
  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'All' 
    ? skillsData.programming_languages 
    : skillsData.programming_languages.filter(skill => skill.category === selectedCategory);

  // Get icon for category
  const getCategoryIcon = (category) => {
    const iconMap = {
      'Frontend': <FaDesktop />,
      'Backend': <FaServer />,
      'Database': <FaDatabase />,
      'Mobile': <FaMobile />,
      'DevOps': <FaTools />,
      // Add more mappings as needed
      'default': <FaCode />
    };
    
    return iconMap[category] || iconMap.default;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='skills-section'>
      <div className="skills-container">
        <motion.div
          className="section-heading"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="skills-title">Technical Expertise</h2>
          <div className="title-underline"></div>
          <p className="skills-subtitle">A showcase of my technical skills and proficiency levels</p>
        </motion.div>

        {/* Category Filter Buttons */}
        {/* <motion.div 
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`filter-btn ${category === selectedCategory ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.03, backgroundColor: category === selectedCategory ? '' : '#f3f4f6' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div> */}

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className={`skill-card priority-${skill.priority.toLowerCase()}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.08)",
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
                layout
              >
                <div className="skill-icon">
                  {getCategoryIcon(skill.category)}
                </div>
                <div className="skill-content">
                  <h3>{skill.name}</h3>
                  <div className="skill-meta">
                    <span className="skill-category">{skill.category}</span>
                    <span className={`skill-badge priority-${skill.priority.toLowerCase()}`}>
                      {skill.priority}
                    </span>
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="skill-level">
                    <div className="level-bar">
                      <motion.div 
                        className={`level-fill priority-${skill.priority.toLowerCase()}`}
                        initial={{ width: 0 }}
                        animate={{ 
                          width: skill.priority === 'HIGH' ? '90%' : 
                                 skill.priority === 'MEDIUM' ? '70%' : '50%' 
                        }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;