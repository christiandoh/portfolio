import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaMobileAlt, FaSquare, FaPalette, FaWind, FaNode, FaLightbulb, FaPython, FaLeaf, FaDatabase, FaFire, FaGitAlt, FaDocker, FaCode, FaEnvelope, FaCloud, FaCog, FaTools } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = {
    frontend: [
      { name: 'React', level: 95, icon: <FaReact /> },
      { name: 'React Native', level: 90, icon: <FaMobileAlt /> },
      { name: 'Flutter', level: 88, icon: <SiFlutter /> },
      { name: 'JavaScript', level: 95, icon: <FaSquare /> },
      { name: 'TypeScript', level: 85, icon: <FaSquare /> },
      { name: 'HTML/CSS', level: 98, icon: <FaPalette /> },
      { name: 'Tailwind CSS', level: 92, icon: <FaWind /> },
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: <FaNode /> },
      { name: 'Express', level: 88, icon: <FaLightbulb /> },
      { name: 'Python', level: 85, icon: <FaPython /> },
      { name: 'MongoDB', level: 87, icon: <FaLeaf /> },
      { name: 'PostgreSQL', level: 82, icon: <FaDatabase /> },
      { name: 'Firebase', level: 90, icon: <FaFire /> },
    ],
    tools: [
      { name: 'Git', level: 93, icon: <FaGitAlt /> },
      { name: 'Docker', level: 80, icon: <FaDocker /> },
      { name: 'VS Code', level: 98, icon: <FaCode /> },
      { name: 'Figma', level: 85, icon: <FaPalette /> },
      { name: 'Postman', level: 90, icon: <FaEnvelope /> },
      { name: 'AWS', level: 75, icon: <FaCloud /> },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="skills-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies and tools I master to create exceptional applications
        </motion.p>

        <div className="skills-categories">
          {/* Frontend Skills */}
          <motion.div
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="category-title">
              <span className="category-icon"><FaPalette /></span>
              Frontend Development
            </h3>
            <div className="skills-grid">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card glass"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <span className="skill-percentage">{skill.level}%</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="category-title">
              <span className="category-icon"><FaCog /></span>
              Backend Development
            </h3>
            <div className="skills-grid">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card glass"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    >
                      <span className="skill-percentage">{skill.level}%</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="category-title">
              <span className="category-icon"><FaTools /></span>
              Tools & Technologies
            </h3>
            <div className="skills-grid">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card glass"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.6 }}
                    >
                      <span className="skill-percentage">{skill.level}%</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
