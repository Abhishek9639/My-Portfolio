import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="about-paragraph">
              I am a B.Tech (Comp. Sc / IT) student at <strong>Medhavi Skills University</strong> (2025 &ndash; 2029) who loves diving deep into open-source projects. 
              My journey started with a fascination for cybersecurity and Python, which evolved 
              into building interactive web applications and contributing to impactful libraries.
            </p>
            <p className="about-paragraph">
              I'm actively involved in open-source programs like the <strong>European Summer of Code (ESoC 2025)</strong> with OpenML, and am currently an applicant for <strong>Google Summer of Code 2026</strong> with The Honeynet Project.
            </p>
            <p className="about-paragraph">
              Recently, I've been contributing to platforms like <strong>IntelOwl</strong>, <strong>openml-python</strong>, and 
              optimization libraries like <strong>Hyperactive</strong>. I thrive on collaborating 
              with global developer communities to solve complex problems and build scalable tools.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h3 className="stat-number">2+</h3>
                <p className="stat-label">Open Source Orgs</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">10+</h3>
                <p className="stat-label">Pull Requests</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">100%</h3>
                <p className="stat-label">Commitment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
