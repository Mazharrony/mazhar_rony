'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd'> {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  ripple?: boolean;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 0.3,
  className = '',
  variant = 'primary',
  ripple = true,
  onClick,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const moveX = (e.clientX - centerX) * strength;
    const moveY = (e.clientY - centerY) * strength;
    
    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple && ref.current) {
      const button = ref.current;
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
        z-index: 1;
      `;

      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
    
    onClick?.(e);
  };

  return (
    <motion.button
      ref={ref}
      className={`magnetic-button magnetic-button-${variant} ${className}`}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
      }}
      {...(props as any)}
    >
      <span className="magnetic-button-content">{children}</span>
    </motion.button>
  );
};

export default MagneticButton;

