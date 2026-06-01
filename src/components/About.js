import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaLightbulb, FaBolt, FaBullseye, FaRocket,
  FaCode, FaServer, FaMobileAlt,
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { value: '4+', label: 'Years Experience', accent: '#64c8ff' },
    { value: '10+', label: 'Projects Completed', accent: '#a855f7' },
    { value: '15+', label: 'Satisfied Customers', accent: '#f59e0b' },
  ];

  const features = [
    { icon: <FaLightbulb />, title: 'Creativity', desc: 'Innovative designs and creative solutions for every challenge', accent: '#64c8ff' },
    { icon: <FaBolt />, title: 'Performance', desc: 'Optimized apps for maximum speed and efficiency', accent: '#a855f7' },
    { icon: <FaBullseye />, title: 'Precision', desc: 'Clean, maintainable code following best practices', accent: '#f59e0b' },
    { icon: <FaRocket />, title: 'Innovation', desc: 'Using the latest and most powerful technologies', accent: '#64c8ff' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <div className="about-header">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="label-bracket">{'<'}</span>
            <span className="label-text">about</span>
            <span className="label-bracket">{'/>'}</span>
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About Me
          </motion.h2>
        </div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="about-intro">
              I'm <span className="highlight">Doh Lah Nundo Christian</span>,
              a fullstack developer passionate about creating performant
              and elegant web and mobile applications.
            </p>

            <p>
              With solid expertise in frontend and backend development,
              I design complete solutions that combine modern aesthetics
              with robust functionality. My goal is to create exceptional
              user experiences that meet real needs.
            </p>

            <p>
              I'm constantly exploring the latest technologies and best
              practices in web development. For me, each project is an
              opportunity to learn, innovate, and push the boundaries
              of what's possible.
            </p>

            <div className="tech-pills">
              <span className="tech-pill"><FaCode /> Frontend</span>
              <span className="tech-pill"><FaServer /> Backend</span>
              <span className="tech-pill"><FaMobileAlt /> Mobile</span>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 8 }}
                style={{ '--stat-accent': stat.accent }}
              >
                <motion.span
                  className="stat-value"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.span>
                <span className="stat-label">{stat.label}</span>
                <div className="stat-bar" style={{ background: stat.accent }} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-features"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {features.map((feat, index) => (
            <motion.div
              key={feat.title}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -6 }}
              style={{ '--feat-accent': feat.accent }}
            >
              <div className="feature-icon-wrap" style={{ color: feat.accent }}>
                {feat.icon}
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
