'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Story } from '@/lib/data/stories';

interface StoryCardProps {
  story: Story;
  index: number;
  scale: number;
  opacity: number;
  y: number;
}

/**
 * StoryCard Component
 * 
 * Displays a single story card with:
 * - Title and short description
 * - "Read more" link
 * - Rounded corners and shadow
 * - Animated scale, opacity, and position based on scroll
 */
export default function StoryCard({ story, index, scale, opacity, y }: StoryCardProps) {
  return (
    <motion.div
      className="w-full max-w-md mx-auto mb-6"
      style={{
        scale,
        opacity,
        y,
        transformOrigin: 'center center',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      <Link href={`/stories/${story.id}`}>
        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-700/50 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            {story.title}
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            {story.shortDescription}
          </p>
          <div className="flex items-center text-blue-400 font-medium text-sm">
            Read more
            <span className="ml-2">→</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

