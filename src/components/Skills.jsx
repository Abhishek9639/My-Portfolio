import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages & Databases',
      items: ['Python', 'JavaScript', 'Bash', 'PostgreSQL', 'Redis', 'SQL']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['Django', 'Django REST Framework', 'Celery', 'React', 'Zustand', 'LangChain']
    },
    {
      category: 'Platforms & Tools',
      items: ['Docker', 'Docker Compose', 'Linux', 'Git', 'Nginx', 'GitHub']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              className="skill-category card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
