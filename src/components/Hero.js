import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFolderOpen } from 'react-icons/fa';
import { OrbitalHero } from './OrbitalHero';
import './Hero.css';

const Hero = () => {
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
          <OrbitalHero centerImage={`${process.env.PUBLIC_URL}/doh-lah.jpeg`} />
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
    </section>
  );
};

export default Hero;
