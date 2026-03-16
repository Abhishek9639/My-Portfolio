import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiDownload, FiPhone } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="contact-content card">
          <motion.div 
            className="contact-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="contact-heading">Let's build something excellent together.</h3>
            <p className="contact-description">
              Whether you want to discuss open-source contributions, a potential GSoC collaboration, or just say hi, my inbox is always open.
            </p>
            
            <div className="contact-actions">
              <a href="mailto:abhishekup082@gmail.com" className="btn btn-primary contact-email-btn">
                <FiMail size={18} /> abhishekup082@gmail.com
              </a>
              <a href="tel:+919639323576" className="btn btn-outline contact-phone-btn">
                <FiPhone size={18} /> +91 9639323576
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-resume"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="resume-heading">Looking for my Resume?</h4>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline resume-download-btn">
              <FiDownload size={18} /> Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
