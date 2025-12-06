import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

interface ServiceModalProps {
  data: {
    title: string;
    description: string;
    skills: { icon: string; title: string; detail: string; accent: string }[];
  };
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return createPortal(
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-box"
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="modal-header-block">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>

        <div className="modal-divider" aria-hidden="true" />

        <div className="skills-grid">
          {data.skills.map((skill) => (
            <div key={skill.title} className="skill-card">
              <div className="skill-icon" style={{ backgroundColor: `${skill.accent}1a`, color: skill.accent }}>
                {skill.icon}
              </div>
              <div className="skill-body">
                <div className="skill-title">{skill.title}</div>
                <div className="skill-detail">{skill.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default ServiceModal;
