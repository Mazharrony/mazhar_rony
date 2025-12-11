import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer, motionConfig, calculate3DTilt, reset3DTilt } from '../utils/motion';
import './Team.css';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

const Team: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  const team: TeamMember[] = [
    { name: 'Alex Johnson', role: 'Creative Director', initials: 'AJ' },
    { name: 'Sarah Chen', role: 'UI Designer', initials: 'SC' },
    { name: 'Mike Davis', role: 'Developer', initials: 'MD' },
    { name: 'Emma Wilson', role: 'Strategist', initials: 'EW' }
  ];

  const [tiltStyles, setTiltStyles] = useState<{ [key: number]: React.CSSProperties }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    setTiltStyles(prev => ({
      ...prev,
      [index]: calculate3DTilt(e, 5)
    }));
  };

  const handleMouseLeave = (index: number) => {
    setTiltStyles(prev => ({
      ...prev,
      [index]: reset3DTilt
    }));
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.88, filter: 'blur(8px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: motionConfig.easing.smooth,
      },
    }),
  };

  return (
    <section className="fold team" ref={ref}>
      <div className="container">
        <motion.div 
          className="team-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>Our amazing team</motion.h2>
          <motion.button 
            className="btn btn-primary"
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
              transition: { duration: motionConfig.duration.fast }
            }}
            whileTap={{ scale: 0.97 }}
          >
            Join our team
          </motion.button>
        </motion.div>

        <div className="grid grid-4">
          {team.map((member: TeamMember, index: number) => (
            <motion.div 
              key={index} 
              className="team-card card"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariant}
              style={tiltStyles[index]}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: '0 16px 50px rgba(0,0,0,0.15)',
                transition: { duration: 0.35 }
              }}
            >
              <motion.div 
                className="team-avatar"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ 
                  delay: index * 0.12 + 0.2,
                  duration: 0.5,
                  ease: motionConfig.easing.smooth 
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.2)',
                  transition: { duration: 0.3 }
                }}
              >
                {member.initials}
              </motion.div>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: index * 0.12 + 0.3 }}
              >
                {member.name}
              </motion.h4>
              <motion.p 
                className="team-role"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.12 + 0.4 }}
              >
                {member.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
