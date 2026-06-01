import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! ✓');

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setStatus('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'christiandoh29@gmail.com',
      link: 'mailto:christiandoh29@gmail.com',
      accent: '#64c8ff',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Phone',
      value: '+225 07 11 11 85 82',
      link: 'tel:+2250711118582',
      accent: '#a855f7',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: "Abidjan, Côte d'Ivoire",
      link: null,
      accent: '#f59e0b',
    },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/christiandoh', accent: '#fff' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/lah-nundo-christian-doh-79870938b', accent: '#0a66c2' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/2250711118582?text=Hi%20I%20would%20like%20to%20discuss%20a%20project', accent: '#25d366' },
  ];

  const inputVariants = {
    focused: { scale: 1.01 },
    blurred: { scale: 1 },
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <div className="contact-header">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="label-bracket">{'<'}</span>
            <span className="label-text">contact</span>
            <span className="label-bracket">{'/>'}</span>
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="contact-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project idea? Let's build something great together.
          </motion.p>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="contact-info-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 6 }}
                style={{ '--card-accent': info.accent }}
              >
                {info.link ? (
                  <a href={info.link} className="info-card-link">
                    <span className="info-card-icon" style={{ color: info.accent }}>
                      {info.icon}
                    </span>
                    <div className="info-card-text">
                      <span className="info-card-label">{info.title}</span>
                      <span className="info-card-value">{info.value}</span>
                    </div>
                  </a>
                ) : (
                  <>
                    <span className="info-card-icon" style={{ color: info.accent }}>
                      {info.icon}
                    </span>
                    <div className="info-card-text">
                      <span className="info-card-label">{info.title}</span>
                      <span className="info-card-value">{info.value}</span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}

            <motion.div
              className="social-section"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="social-label">Connect with me</p>
              <div className="social-row">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.08 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    title={social.name}
                  >
                    <span className="social-pill-icon">{social.icon}</span>
                    <span className="social-pill-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                  <span className="input-focus-line" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                  <span className="input-focus-line" />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
                <span className="input-focus-line" />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                />
                <span className="input-focus-line" />
              </div>

              {status && (
                <motion.div
                  className="form-status"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <FaArrowRight className="submit-arrow" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="footer-line" />
          <p>© 2026 Doh Lah Nundo Christian. Building digital experiences that matter.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
