import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaMobileAlt, FaSquare, FaPalette, FaWind, FaNode, FaPython, FaDatabase, FaFire, FaGitAlt, FaDocker, FaCode, FaCloud, FaTools, FaServer, FaPenFancy } from 'react-icons/fa';
import { SiFlutter, SiTypescript, SiPostman, SiFigma, SiExpress } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      key: 'frontend',
      label: 'Frontend',
      icon: <FaPalette />,
      accent: '#64c8ff',
      items: [
        { name: 'React', level: 95, icon: <FaReact /> },
        { name: 'React Native', level: 90, icon: <FaMobileAlt /> },
        { name: 'Flutter', level: 88, icon: <SiFlutter /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript /> },
        { name: 'JavaScript', level: 95, icon: <FaSquare /> },
        { name: 'HTML/CSS', level: 98, icon: <FaPalette /> },
        { name: 'Tailwind', level: 92, icon: <FaWind /> },
      ],
    },
    {
      key: 'backend',
      label: 'Backend',
      icon: <FaServer />,
      accent: '#a855f7',
      items: [
        { name: 'Node.js', level: 90, icon: <FaNode /> },
        { name: 'Express', level: 88, icon: <SiExpress /> },
        { name: 'Python', level: 85, icon: <FaPython /> },
        { name: 'MongoDB', level: 87, icon: <DiMongodb /> },
        { name: 'PostgreSQL', level: 82, icon: <FaDatabase /> },
        { name: 'Firebase', level: 90, icon: <FaFire /> },
      ],
    },
    {
      key: 'tools',
      label: 'Tools',
      icon: <FaTools />,
      accent: '#f59e0b',
      items: [
        { name: 'Git', level: 93, icon: <FaGitAlt /> },
        { name: 'Docker', level: 80, icon: <FaDocker /> },
        { name: 'VS Code', level: 98, icon: <FaCode /> },
        { name: 'Figma', level: 85, icon: <SiFigma /> },
        { name: 'Postman', level: 90, icon: <SiPostman /> },
        { name: 'AWS', level: 75, icon: <FaCloud /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <div className="skills-header">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="label-bracket">{'<'}</span>
            <span className="label-text">skills</span>
            <span className="label-bracket">{'/>'}</span>
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Skills
          </motion.h2>

          <motion.p
            className="skills-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technologies and tools I use to build exceptional applications
          </motion.p>
        </div>

        <div className="skills-categories">
          {categories.map((cat) => (
            <motion.div
              key={cat.key}
              className="skill-category"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="category-header">
                <span className="category-icon" style={{ color: cat.accent }}>
                  {cat.icon}
                </span>
                <h3 className="category-title">{cat.label}</h3>
                <div className="category-line" style={{ background: cat.accent }} />
              </div>

              <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {cat.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    style={{ '--card-accent': cat.accent }}
                  >
                    <div className="skill-card-left">
                      <span className="skill-icon" style={{ color: cat.accent }}>
                        {skill.icon}
                      </span>
                    </div>
                    <div className="skill-card-body">
                      <div className="skill-card-top">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-track">
                        <motion.div
                          className="skill-fill"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                          style={{ background: cat.accent }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
