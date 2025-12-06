// Motion Configuration System
// Consistent timing, easing, and animation variants across the site

export const motionConfig = {
  // Timing presets
  duration: {
    fast: 0.22,
    normal: 0.35,
    slow: 0.6,
    slower: 0.7,
  },
  
  // Easing curves - as tuples for Framer Motion
  easing: {
    smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    spring: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
  
  // Stagger delays
  stagger: {
    fast: 0.08,
    normal: 0.12,
    slow: 0.15,
  },
};

// Fade in from below
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 24,
    filter: 'blur(4px)',
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.easing.smooth,
    },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -24,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.easing.smooth,
    },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 24,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.easing.smooth,
    },
  },
};

// Scale in
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.easing.smooth,
    },
  },
};

// Container for staggered children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionConfig.stagger.normal,
      delayChildren: 0.1,
    },
  },
};

// Card hover effect
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -6,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.easing.ease,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Button hover effect
export const buttonHover = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: motionConfig.duration.fast,
      ease: motionConfig.easing.ease,
    },
  },
  tap: {
    scale: 0.97,
  },
};

// 3D tilt effect (returns dynamic style based on mouse position)
export const calculate3DTilt = (e: React.MouseEvent<HTMLElement>, intensity: number = 10) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -intensity;
  const rotateY = ((x - centerX) / centerX) * intensity;
  
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 0.1s ease-out',
  };
};

// Reset 3D tilt
export const reset3DTilt = {
  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  transition: 'transform 0.4s ease-out',
};
