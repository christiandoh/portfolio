import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Built a full online store that handles real customer orders. Features a smooth checkout, inventory tracking, and payment processing. Started small, scaled it up to handle peak traffic.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: `${process.env.PUBLIC_URL}/projet1.jpeg`,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      title: 'Music App',
      category: 'mobile',
      description: 'Created a music streaming app where users can browse, play, and create playlists. Built with performance in mind to handle large music libraries without lag.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: `${process.env.PUBLIC_URL}/musicapp.jpeg`,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 3,
      title: 'Management Dashboard',
      category: 'web',
      description: 'Designed and built a tool for teams to track their work in real-time. Shows what is done, what is pending, and who is doing what. Helps managers see the big picture without micromanaging.',
      technologies: ['flutter', 'D3.js', 'WebSocket', 'Express'],
      image: `${process.env.PUBLIC_URL}/managment.jpeg`,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      id: 4,
      title: 'Download Manager',
      category: 'mobile',
      description: 'Built an app that lets users download, organize, and manage files on the go. Handles large files, pause/resume, and organizes everything into folders.',
      technologies: ['flutter', 'Google Maps API', 'Node.js'],
      image: `${process.env.PUBLIC_URL}/téléchargement.jpeg`,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      id: 5,
      title: 'Social Network',
      category: 'fullstack',
      description: 'Developed a platform where professionals connect and share ideas. Built messaging, notifications, and a news feed. Focused on privacy and meaningful interactions over clutter.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      image: `${process.env.PUBLIC_URL}/socialeapp.jpeg`,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      id: 6,
      title: 'Fintech Platform',
      category: 'fullstack',
      description: 'Built a financial app for managing transactions and investments. Secure, fast, and designed to make money management feel effortless. Real-time updates and clear insights into spending.',
      technologies: ['flutter', 'Express', 'MongoDB', 'AWS S3'],
      image: `${process.env.PUBLIC_URL}/fintechapp.jpeg`,
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'fullstack', label: 'Fullstack' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="projects-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Check out a selection of my recent work
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card glass"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="project-image"
                  style={{ background: project.gradient }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                  />
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <motion.button
                      className="project-btn"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Owner Photo */}
        <div className="portfolio-owner">
          <img 
            src={`${process.env.PUBLIC_URL}/doh-lah.jpeg`}
            alt="Portfolio Owner" 
            className="owner-photo"
          />
        </div>

        {/* Project Image Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal-content"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="project-modal-image"
                />
                <div className="project-modal-info">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
