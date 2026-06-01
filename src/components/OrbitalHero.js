import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './OrbitalHero.css';

const ROTATION_SPEED = 0.08;

function getOrbitRadius() {
  if (typeof window === 'undefined') return 280;
  const w = window.innerWidth;
  if (w <= 480) return 110;
  if (w <= 768) return 170;
  if (w <= 1024) return 230;
  return 280;
}

const ORBIT_IMAGES = [
  'https://placehold.co/120x120/667eea/ffffff?text=P1',
  'https://placehold.co/120x120/e94560/ffffff?text=P2',
  'https://placehold.co/120x120/0f3460/ffffff?text=P3',
  'https://placehold.co/120x120/a855f7/ffffff?text=P4',
  'https://placehold.co/120x120/ff6d5a/ffffff?text=P5',
  'https://placehold.co/120x120/04bfad/ffffff?text=P6',
  'https://placehold.co/120x120/ffd700/1a1a2e?text=P7',
  'https://placehold.co/120x120/764ba2/ffffff?text=P8',
];

export function OrbitalHero({ centerImage, onCenterClick }) {
  const [radius, setRadius] = useState(getOrbitRadius());
  const [angle, setAngle] = useState(0);
  const angleRef = useRef(0);
  const lastTimeRef = useRef(0);
  const [imageEnlarged, setImageEnlarged] = useState(false);

  useEffect(() => {
    const update = () => setRadius(getOrbitRadius());
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    lastTimeRef.current = performance.now();
    let rafId;
    const tick = (now) => {
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;
      angleRef.current = (angleRef.current + ROTATION_SPEED * delta) % (Math.PI * 2);
      setAngle(angleRef.current);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleCenterClick = () => {
    if (onCenterClick) onCenterClick();
    setImageEnlarged(true);
  };

  return (
    <div className="orbital-hero">
      <div className="orbital-stage">
        <img
          src={centerImage}
          alt="Doh Lah Nundo Christian"
          className="orbital-center"
          onClick={handleCenterClick}
          draggable={false}
        />
        <div className="orbital-ring" style={{ transform: 'rotateX(-24deg)' }}>
          {ORBIT_IMAGES.map((src, i) => {
            const theta = (i / ORBIT_IMAGES.length) * Math.PI * 2 + angle;
            const x = radius * Math.cos(theta);
            const z = radius * Math.sin(theta);
            const depthNorm = (z + radius) / (2 * radius);
            const scale = 0.45 + 0.55 * depthNorm;
            const opacity = 0.25 + 0.75 * depthNorm;
            const blur = (1 - depthNorm) * 5;

            return (
              <div
                key={i}
                className="orbital-item"
                style={{
                  transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
              >
                <img src={src} alt="" draggable={false} />
              </div>
            );
          })}
        </div>
      </div>

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
            <button className="modal-close" onClick={() => setImageEnlarged(false)}>
              <FaTimes />
            </button>
            <img
              src={centerImage}
              alt="Doh Lah Nundo Christian - Enlarged"
              className="modal-image"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
