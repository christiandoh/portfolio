import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaBolt, FaBullseye, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="apropos" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-intro">
              I'm <span className="highlight">Doh Lah Nundo Christian</span>, a fullstack developer passionate
              about creating performant and elegant web and mobile applications.
            </p>

            <p>
              With solid expertise in frontend and backend development, I design complete solutions
              that combine modern aesthetics with robust functionality. My goal is to
              create exceptional user experiences that meet real needs.
            </p>

            <p>
              I'm constantly exploring the latest technologies and best practices in
              web development. For me, each project is an opportunity to learn, innovate, and
              push the boundaries of what's possible.
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-card glass">
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="counter">4+</span>
              </motion.div>
              <div className="stat-label">Years of Experience</div>
            </div>

            <div className="stat-card glass">
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <span className="counter">10+</span>
              </motion.div>
              <div className="stat-label">Projects Completed</div>
            </div>

            <div className="stat-card glass">
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <span className="counter">des</span>
              </motion.div>
              <div className="stat-label">Satisfied Customers</div>
            </div>
          </motion.div>
        </div>

        <motion.div className="about-features" variants={itemVariants}>
          <div className="feature-card glass">
            <div className="feature-icon"><FaLightbulb /></div>
            <h3>Creativity</h3>
            <p>Innovative designs and creative solutions for every challenge</p>
          </div>

          <div className="feature-card glass">
            <div className="feature-icon"><FaBolt /></div>
            <h3>Performance</h3>
            <p>Optimized apps for maximum speed and efficiency</p>
          </div>

          <div className="feature-card glass">
            <div className="feature-icon"><FaBullseye /></div>
            <h3>Precision</h3>
            <p>Clean, maintainable code following best practices</p>
          </div>

          <div className="feature-card glass">
            <div className="feature-icon"><FaRocket /></div>
            <h3>Innovation</h3>
            <p>Using the latest and most powerful technologies</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
