'use client';

import React from 'react';
import { motion, PanInfo } from 'framer-motion';
import Link from 'next/link';
import { Story } from '@/lib/data/stories';

interface StoryDetailProps {
  story: Story;
  nextStoryId: string | null;
  previousStoryId: string | null;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

/**
 * StoryDetail Component
 * 
 * Full-page detail view showing:
 * - Large title and full text
 * - Back button
 * - Previous/Next navigation
 * - Swipe gestures for mobile
 */
export default function StoryDetail({
  story,
  nextStoryId,
  previousStoryId,
  onSwipeLeft,
  onSwipeRight,
}: StoryDetailProps) {
  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 80;
    const velocity = info.velocity.x;

    // Swipe right (positive) → Next story
    if ((info.offset.x > threshold || velocity > 600) && nextStoryId && onSwipeRight) {
      onSwipeRight();
    }
    // Swipe left (negative) → Previous story
    else if ((info.offset.x < -threshold || velocity < -600) && previousStoryId && onSwipeLeft) {
      onSwipeLeft();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gray-950 z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Hide scrollbar */}
      <style jsx>{`
        div {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/stories">
          <motion.button
            className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors"
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Stories
          </motion.button>
        </Link>

        {/* Story Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {story.title}
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {story.fullText}
            </p>
          </div>
        </motion.article>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between items-center pt-8 border-t border-gray-800">
          {/* Previous Button */}
          {previousStoryId ? (
            <Link href={`/stories/${previousStoryId}`}>
              <motion.button
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </motion.button>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Button */}
          {nextStoryId ? (
            <Link href={`/stories/${nextStoryId}`}>
              <motion.button
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </motion.div>
  );
}

