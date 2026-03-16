import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'IntelOwl (The Honeynet Project)',
      type: 'Open-Source Work',
      description: 'Built a multi-tab visualizer for Sample_Static_Analysis (PR #3426). Rewrote robust Phishing Analysis visualizer (PR #3380). Fixed React state refresh bugs (PR #3336). Updated Yeti analyzer integration for v2 API (PR #3330).',
      tech: ['React', 'Zustand', 'Django'],
      github: 'https://github.com/intelowlproject/IntelOwl',
      featured: true
    },
    {
      title: 'openml-python (ESoC)',
      type: 'Open-Source Work',
      description: 'Investigated CI bottlenecks taking 1-2+ hours and wrote deterministic profiling scripts (PR #1692). Refactored 7 core function docstrings with rich code examples and handled edge-cases (PR #1689).',
      tech: ['Python', 'Bash', 'CI/CD'],
      github: 'https://github.com/openml/openml-python',
      featured: true
    },
    {
      title: 'Hyperactive',
      type: 'Open-Source Work',
      description: 'Implemented the Hyperband optimization algorithm completely from scratch (PR #240). Wrote extensive PyTorch integration docs and built a working usage example merging TorchExperiment with the HillClimbing optimizer (PR #239).',
      tech: ['Python', 'PyTorch', 'Optimization'],
      github: 'https://github.com/SimonBlanke/Hyperactive',
      featured: false
    },
    {
      title: 'Automated IOC Extraction Framework',
      type: 'Personal Project',
      description: 'Built a framework to pull IOCs (IPs, hashes, domains) directly out of unstructured threat reports and automatically look them up against public threat intel APIs, saving massive amount of analyst time.',
      tech: ['Python', 'APIs'],
      github: '',
      featured: false
    },
    {
      title: 'Web Font Optimizer',
      type: 'Personal Project',
      description: 'Developed a web tool using JavaScript, HTML, and CSS for subsetting and converting web fonts, which speeds up page loads and improves frontend performance overall.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: '',
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Key Contributions</h2>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="card project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <span className="project-type">{project.type}</span>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub Repository">
                        <FiGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
