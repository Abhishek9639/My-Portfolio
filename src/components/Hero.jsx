import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">
            <span className="dot"></span> Available for Open Source
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-accent">Abhishek</span>
          </h1>
          
          <h2 className="hero-subtitle">
            GSoC Aspirant &middot; Open Source Developer &middot; Python & React
          </h2>
          
          <p className="hero-description">
            Passionate about building secure, scalable software and contributing to the open-source community. Currently gearing up for Google Summer of Code.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Connect</a>
          </div>
          
          <div className="hero-socials">
            <a href="https://github.com/Abhishek9639" target="_blank" rel="noreferrer" className="social-icon"><FiGithub size={22} /></a>
            <a href="https://www.linkedin.com/in/abhishek-abhishek-716729310/" target="_blank" rel="noreferrer" className="social-icon"><FiLinkedin size={22} /></a>
            <a href="#" target="_blank" rel="noreferrer" className="social-icon"><FiTwitter size={22} /></a>
            <a href="mailto:abhishekup082@gmail.com" className="social-icon"><FiMail size={22} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
