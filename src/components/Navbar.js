import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: 'Home', id: 'hero', icon: FaHome },
    { label: 'About', id: 'about', icon: FaUser },
    { label: 'Skills', id: 'skills', icon: FaCode },
    { label: 'Projects', id: 'projects', icon: FaFolderOpen },
    { label: 'Contact', id: 'contact', icon: FaEnvelope },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span onClick={() => scrollToSection('hero')}>DOH LAH</span>
          <span className="logo-dot">.</span>
        </motion.div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.a
                key={item.label}
                onClick={() => scrollToSection(item.label === 'Home' ? 'hero' : item.id)}
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                title={item.label}
              >
                <IconComponent className="nav-icon" />
                <span className="nav-text">{item.label}</span>
              </motion.a>
            );
          })}
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
