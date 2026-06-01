import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
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
      title: 'Portfolio (React)',
      category: 'web',
      description: 'Mon portfolio personnel construit avec React : présentations, compétences, projets et formulaire de contact. Design moderne avec Framer Motion et thème glassmorphism.',
      technologies: ['React', 'CSS', 'Framer Motion', 'GitHub Pages'],
      image: 'https://placehold.co/600x400/1a1a2e/64c8ff?text=Portfolio',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      repoUrl: 'https://github.com/christiandoh/portfolio',
    },
    {
      id: 2,
      title: 'Ahaouah Projet',
      category: 'web',
      description: 'Projet portfolio ou site vitrine. Interface soignée et mise en page responsive avec CSS moderne.',
      technologies: ['HTML', 'CSS'],
      image: 'https://placehold.co/600x400/0f3460/e94560?text=Ahaouah',
      gradient: 'linear-gradient(135deg, #0f3460 0%, #e94560 100%)',
      repoUrl: 'https://github.com/christiandoh/Ahaouah-projret',
    },
    {
      id: 3,
      title: 'R-sum- Portfolio',
      category: 'web',
      description: 'Portfolio personnel au format web. Présentation et mise en avant des réalisations avec HTML.',
      technologies: ['HTML'],
      image: 'https://placehold.co/600x400/16213e/0f3460?text=R-sum',
      gradient: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
      repoUrl: 'https://github.com/christiandoh/R-sum-',
    },
    {
      id: 4,
      title: 'Nuage Créatif',
      category: 'web',
      description: 'Projet créatif avec mise en forme et styles avancés. Design et expérience utilisateur au cœur du projet.',
      technologies: ['CSS'],
      image: 'https://placehold.co/600x400/533483/a855f7?text=Nuage+Cr%C3%A9atif',
      gradient: 'linear-gradient(135deg, #533483 0%, #a855f7 100%)',
      repoUrl: 'https://github.com/christiandoh/Nuage_Creatif',
    },
    {
      id: 5,
      title: 'n8n Documentation',
      category: 'web',
      description: "Contribution au projet n8n : documentation de l'outil d'automatisation open source. Fork et participation à la doc officielle.",
      technologies: ['HTML', 'Documentation', 'n8n'],
      image: 'https://placehold.co/600x400/2d3748/ff6d5a?text=n8n+Docs',
      gradient: 'linear-gradient(135deg, #2d3748 0%, #ff6d5a 100%)',
      repoUrl: 'https://github.com/christiandoh/n8n-docs',
    },
    {
      id: 6,
      title: 'Mix225',
      category: 'web',
      description: 'Projet Mix225 — application ou site web.',
      technologies: ['Web'],
      image: 'https://placehold.co/600x400/1a1a2e/64c8ff?text=Mix225',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #64c8ff 100%)',
      repoUrl: 'https://github.com/christiandoh/Mix225',
    },
    {
      id: 7,
      title: "Gala des Couples",
      category: 'fullstack',
      description: "Application d'inscription au gala (sections Couple, Cheminant, Fiancé) avec suivi des participations (20 000 XOF), statistiques et badges Soldé / Non soldé. Design rouge et or.",
      technologies: ['Next.js 16', 'React 19', 'Tailwind', 'shadcn', 'Recharts'],
      image: 'https://placehold.co/600x400/8b0000/ffd700?text=Gala',
      gradient: 'linear-gradient(135deg, #8b0000 0%, #ffd700 100%)',
      repoUrl: 'https://github.com/christiandoh/Gala_des_couple',
    },
    {
      id: 8,
      title: 'MailTest',
      category: 'fullstack',
      description: "Plateforme de vérification automatique d'emails et mots de passe (IMAP/SMTP), avec interface React, API Express, file de jobs BullMQ/Redis et PostgreSQL. Chiffrement des credentials.",
      technologies: ['React', 'Express', 'BullMQ', 'Redis', 'PostgreSQL', 'Docker'],
      image: 'https://placehold.co/600x400/0f3460/e94560?text=MailTest',
      gradient: 'linear-gradient(135deg, #0f3460 0%, #e94560 100%)',
      repoUrl: 'https://github.com/christiandoh/mail-test',
    },
    {
      id: 9,
      title: 'Nundo',
      category: 'web',
      description: 'Projet Nundo.',
      technologies: ['Web'],
      image: 'https://placehold.co/600x400/16213e/64c8ff?text=Nundo',
      gradient: 'linear-gradient(135deg, #16213e 0%, #64c8ff 100%)',
      repoUrl: 'https://github.com/christiandoh/Nundo',
    },
    {
      id: 10,
      title: 'Anniversaire Bloom ATC',
      category: 'fullstack',
      description: "Application React + Google Apps Script pour collecter les anniversaires des Bloomers ATC, stocker dans Google Sheets & Drive, et envoyer des notifications automatiques Telegram et WhatsApp la veille à 22h30.",
      technologies: ['React', 'Vite', 'Google Apps Script', 'Telegram', 'WhatsApp'],
      image: 'https://placehold.co/600x400/0B1C2D/FFD700?text=Bloom+ATC',
      gradient: 'linear-gradient(135deg, #0B1C2D 0%, #FFD700 100%)',
      repoUrl: 'https://github.com/christiandoh/anniversaire-bloom',
    },
    {
      id: 11,
      title: 'SDA — Suivi des accidents',
      category: 'mobile',
      description: "Application Flutter de gestion HSE (Hygiène, Sécurité, Environnement) pour SOTASERV - CI SARL : EPI, stock, incidents, export Excel. Mode hors ligne avec SQLite.",
      technologies: ['Flutter', 'Dart', 'SQLite'],
      image: 'https://placehold.co/600x400/025959/04bfad?text=SDA',
      gradient: 'linear-gradient(135deg, #025959 0%, #04bfad 100%)',
      repoUrl: 'https://github.com/christiandoh/SDA',
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
        <div className="projects-header">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="label-bracket">{'<'}</span>
            <span className="label-text">projects</span>
            <span className="label-bracket">{'/>'}</span>
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Projects
          </motion.h2>

          <motion.p
            className="projects-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check out a selection of my recent work
          </motion.p>
        </div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {filter === category.id && (
                <motion.span
                  className="filter-indicator"
                  layoutId="filter-indicator"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="filter-label">{category.label}</span>
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="project-image"
                  style={{ background: project.gradient }}
                >
                  <div className="project-image-overlay" />
                  <div className="project-image-content">
                    <span className="project-category-tag">{project.category}</span>
                  </div>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <code key={tech} className="tech-badge">{tech}</code>
                    ))}
                  </div>

                  <div className="project-actions">
                    <motion.button
                      className="project-btn"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaCode className="btn-icon" />
                      <span>Details</span>
                    </motion.button>
                    {project.repoUrl && (
                      <motion.a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn secondary"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FaGithub className="btn-icon" />
                        <span>Source</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal-content"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </button>

                <div
                  className="modal-image"
                  style={{ background: selectedProject.gradient }}
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>

                <div className="modal-info">
                  <div className="modal-info-header">
                    <span className="modal-category">{selectedProject.category}</span>
                    <h3>{selectedProject.title}</h3>
                  </div>
                  <p>{selectedProject.description}</p>
                  <div className="modal-tech">
                    {selectedProject.technologies.map((tech) => (
                      <code key={tech} className="tech-badge">{tech}</code>
                    ))}
                  </div>
                  {selectedProject.repoUrl && (
                    <motion.a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}
                    >
                      <FaGithub />
                      <span>View on GitHub</span>
                      <FaExternalLinkAlt style={{ fontSize: '0.7em', opacity: 0.7 }} />
                    </motion.a>
                  )}
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
