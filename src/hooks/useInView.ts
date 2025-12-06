import { useEffect, useRef, useState } from 'react';

interface IntersectionOptions {
  threshold?: number | number[];
  margin?: string;
}

/**
 * Hook to detect when element comes into view
 */
export const useInView = (options: IntersectionOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: options.threshold || 0.15,
      rootMargin: options.margin || '0px',
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsInView(true);
        setHasAnimated(true);
      } else if (!entry.isIntersecting) {
        setIsInView(entry.isIntersecting);
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, options]);

  return { ref, isInView, hasAnimated };
};

/**
 * Hook for parallax effect on scroll
 */
export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const elementTop = rect.top + scrollY;
        const distance = scrollY - (elementTop - window.innerHeight);
        setOffset(distance * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};
