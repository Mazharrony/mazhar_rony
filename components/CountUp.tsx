"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type Props = {
  value: string;
  className?: string;
  duration?: number;
};

export function CountUp({ value, className, duration = 1.6 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 70, damping: 18, mass: 0.6 });
  const [display, setDisplay] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || !match) return;
    if (reduce) {
      setDisplay(target);
      return;
    }
    mv.set(target);
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    const fallback = setTimeout(() => setDisplay(target), duration * 1000 + 200);
    return () => {
      unsub();
      clearTimeout(fallback);
    };
  }, [inView, target, match, reduce, mv, spring, duration]);

  if (!match) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
