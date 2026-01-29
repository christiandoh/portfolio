import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaMobileAlt, FaRocket, FaTimes, FaEnvelope, FaFolderOpen } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [imageEnlarged, setImageEnlarged] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="grid-background"></div>
      
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm
          </motion.h1>
          
          <motion.h2
            className="name"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Doh Lah Nundo Christian
          </motion.h2>
          
          <motion.div
            className="role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="role-text">Developer</span>
            <motion.span
              className="role-highlight"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {' '}Fullstack
            </motion.span>
          </motion.div>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            I turn ideas into exceptional digital experiences.
            With me, every line of code tells a story to bring your dreams to life.
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button className="btn btn-primary" onClick={scrollToContact} title="Contact Me">
              <span className="btn-icon"><FaEnvelope /></span>
              <span className="btn-text">Contact Me</span>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              title="View Projects"
            >
              <span className="btn-icon"><FaFolderOpen /></span>
              <span className="btn-text">View Projects</span>
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="profile-photo-container">
            <motion.img
              src="/doh-lah.jpeg"
              alt="Doh Lah Nundo Christian"
              className="profile-photo"
              onClick={() => setImageEnlarged(true)}
              whileHover={{ scale: 1.05 }}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <div className="visual-container">
            <motion.div
              className="floating-card card-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="card-content">
                <span className="card-icon"><FaReact /></span>
                <span className="card-text">React</span>
              </div>
            </motion.div>
            
            <motion.div
              className="floating-card card-2"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="card-content">
                <span className="card-icon"><FaMobileAlt /></span>
                <span className="card-text">Mobile</span>
              </div>
            </motion.div>
            
            <motion.div
              className="floating-card card-3"
              animate={{
                y: [0, -25, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="card-content">
                <span className="card-icon"><FaRocket /></span>
                <span className="card-text">Performance</span>
              </div>
            </motion.div>
            
            <div className="center-circle"></div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>

      {/* Image Modal */}
      {imageEnlarged && (
        <motion.div
          className="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setImageEnlarged(false)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setImageEnlarged(false)}
            >
              <FaTimes />
            </button>
            <img
              src="/doh-lah.jpeg"
              alt="Doh Lah Nundo Christian - Enlarged"
              className="modal-image"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
