// Motion Configuration System
// Consistent timing, easing, and animation variants across the site
import React from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

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
  },
  visible: { 
    opacity: 1, 
    y: 0,
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
  if (!card) return reset3DTilt;
  
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

// Modern Motion Enhancements

// Magnetic button effect hook (for use with framer-motion)
export const useMagneticEffect = (strength: number = 0.3) => {
  const ref = React.useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = React.useRef(0);
  const y = React.useRef(0);
  const nodeX = React.useRef(0);
  const nodeY = React.useRef(0);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (e: Event) => {
      const me = e as MouseEvent;
      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      x.current = (me.clientX - centerX) * strength;
      y.current = (me.clientY - centerY) * strength;

      nodeX.current += (x.current - nodeX.current) * 0.1;
      nodeY.current += (y.current - nodeY.current) * 0.1;

      node.style.transform = `translate(${nodeX.current}px, ${nodeY.current}px)`;
    };

    const handleMouseLeave = () => {
      nodeX.current = 0;
      nodeY.current = 0;
      node.style.transform = `translate(0px, 0px)`;
      node.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
      setTimeout(() => {
        if (node) node.style.transition = '';
      }, 500);
    };

    node.addEventListener('mousemove', handleMouseMove);
    node.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      node.removeEventListener('mousemove', handleMouseMove);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
};

// Text reveal animation (word by word)
export const textReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const textRevealWord = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: motionConfig.easing.smooth,
    },
  },
};

// Character reveal animation
export const characterReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

export const characterRevealChar = {
  hidden: { 
    opacity: 0, 
    y: 10,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: motionConfig.easing.smooth,
    },
  },
};

// Parallax scroll effect hook
export const useParallax = (speed: number = 0.5) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    (value: number) => {
      if (typeof window === 'undefined' || !ref.current) return 0;
      const elementTop = ref.current.offsetTop;
      const elementHeight = ref.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (value < elementTop - windowHeight) return 0;
      if (value > elementTop + elementHeight) return 0;
      
      return (value - elementTop) * speed;
    }
  );

  return { ref, y };
};

// Element scroll reveal hook (translate, fade, blur based on element scroll)
export const useScrollReveal = (opts?: { speed?: number; blur?: number }) => {
  const { speed = 30 } = opts || {};
  const ref = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  return { ref, style: { y, opacity } };
};

// Indexed parallax for staggered card movement based on index
export const useIndexedParallax = (
  index: number,
  opts?: {
    base?: number;
    increment?: number;
    firstUp?: boolean;
    max?: number;
    mobileScale?: number;
  }
) => {
  const { base = 32, increment = 8, firstUp = true, max = 120, mobileScale = 0.6 } = opts || {};
  const ref = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // scale down on narrow viewports for gentler motion
  const isClient = typeof window !== 'undefined';
  const multiplier = isClient && window.innerWidth < 640 ? mobileScale : 1;
  const direction = index === 0 && firstUp ? -1 : 1; // first card goes up, others go down
  const startY = Math.min(base + index * increment, max) * multiplier * direction;

  const y = useTransform(scrollYProgress, [0, 1], [startY, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  return { ref, style: { y, opacity } };
};

// Shimmer/glow effect
export const shimmerAnimation = {
  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 2s infinite',
};

// Ripple effect for buttons
export const createRipple = (e: React.MouseEvent<HTMLElement>) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    pointer-events: none;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
  `;

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
};

// Enhanced card hover with 3D
export const card3DHover = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
  },
  hover: {
    scale: 1.05,
    rotateX: -5,
    rotateY: 5,
    z: 50,
    transition: {
      duration: 0.3,
      ease: motionConfig.easing.smooth,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Floating animation
export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Gradient text animation
export const gradientTextAnimation = {
  background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'gradient 3s linear infinite',
};

// Scale on scroll
export const scaleOnScroll = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: motionConfig.easing.smooth,
    },
  },
};

// Slide in from sides with rotation
export const slideRotateIn = {
  hidden: {
    opacity: 0,
    x: -100,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: motionConfig.easing.smooth,
    },
  },
};

// Fade reveal (no blur)
export const blurReveal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: motionConfig.easing.smooth,
    },
  },
};

// Magnetic card (combines hover and magnetic effect)
export const magneticCardVariants = {
  rest: {
    scale: 1,
    x: 0,
    y: 0,
  },
  hover: {
    scale: 1.03,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};