"use client";
import { motion } from "framer-motion";

type Props = {
  open: boolean;
  onClick: () => void;
  className?: string;
};

export function MenuToggle({ open, onClick, className }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className={
        "relative grid place-items-center h-10 w-10 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors " +
        (className ?? "")
      }
    >
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <motion.line
          x1="3"
          x2="17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          animate={open ? { y1: 10, y2: 10, rotate: 45 } : { y1: 7, y2: 7, rotate: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: "10px", originY: "10px" }}
        />
        <motion.line
          x1="3"
          x2="17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          animate={open ? { y1: 10, y2: 10, rotate: -45 } : { y1: 13, y2: 13, rotate: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: "10px", originY: "10px" }}
        />
      </svg>
    </button>
  );
}
