'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { getStoryById, getNextStoryId, getPreviousStoryId } from '@/lib/data/stories';
import StoryDetail from '@/src/components/stories/StoryDetail';

interface StoryDetailPageProps {
  params: {
    id: string;
  };
}

/**
 * Story Detail Page
 * 
 * Features:
 * - Full-page detail view
 * - Swipe navigation between stories
 * - Previous/Next buttons
 * - Smooth page transitions with slide animations
 */
export default function StoryDetailPage({ params }: StoryDetailPageProps) {
  const router = useRouter();
  const [direction, setDirection] = React.useState<'left' | 'right'>('right');
  
  const storyId = params.id;

  const story = storyId ? getStoryById(storyId) : null;
  const nextStoryId = story ? getNextStoryId(story.id) : null;
  const previousStoryId = story ? getPreviousStoryId(story.id) : null;

  // Handle swipe navigation with direction tracking
  const handleSwipeRight = () => {
    if (nextStoryId) {
      setDirection('right');
      router.push(`/stories/${nextStoryId}`);
    }
  };

  const handleSwipeLeft = () => {
    if (previousStoryId) {
      setDirection('left');
      router.push(`/stories/${previousStoryId}`);
    }
  };

  if (!storyId || !story) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Story not found</h1>
          <a href="/stories" className="text-blue-400 hover:text-blue-300">
            Back to Stories
          </a>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={story.id}
        initial={{ opacity: 0, x: direction === 'right' ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction === 'right' ? -50 : 50 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <StoryDetail
          story={story}
          nextStoryId={nextStoryId}
          previousStoryId={previousStoryId}
          onSwipeRight={handleSwipeRight}
          onSwipeLeft={handleSwipeLeft}
        />
      </motion.div>
    </AnimatePresence>
  );
}

