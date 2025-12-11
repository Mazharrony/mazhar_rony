'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { stories } from '@/lib/data/stories';
import StoryCard from '@/src/components/stories/StoryCard';

/**
 * Stories List Page
 * 
 * Features:
 * - Vertical stack of story cards
 * - Scroll animations: cards scale down and fade as they scroll up
 * - Hidden scrollbar for clean app-like look
 * - Mobile-first design
 */
export default function StoriesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardStyles, setCardStyles] = useState<Array<{ scale: number; opacity: number; y: number }>>(
    stories.map(() => ({ scale: 1, opacity: 1, y: 0 }))
  );

  /**
   * Calculate card styles based on scroll position
   * Cards at the top fade out and scale down
   * Cards in the center are fully visible and larger
   */
  const updateCardStyles = useCallback(() => {
    if (!containerRef.current) return;

    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;
    const fadeStartDistance = viewportHeight * 0.3; // Start fading at 30% from center
    const maxFadeDistance = viewportHeight * 0.8; // Fully faded at 80% from center

    const newStyles = cardRefs.current.map((cardRef, index) => {
      if (!cardRef) {
        return { scale: 1, opacity: 1, y: 0 };
      }

      const cardRect = cardRef.getBoundingClientRect();
      const cardCenter = cardRect.top + cardRect.height / 2;
      const distanceFromCenter = Math.abs(cardCenter - viewportCenter);

      // Card is near viewport center - fully visible and normal size
      if (distanceFromCenter < fadeStartDistance) {
        return { scale: 1, opacity: 1, y: 0 };
      }

      // Card is moving away from center - fade and scale down
      const fadeProgress = Math.min(
        1,
        (distanceFromCenter - fadeStartDistance) / (maxFadeDistance - fadeStartDistance)
      );

      // Scale from 1.0 to 0.7 as it moves away
      const scale = 1 - fadeProgress * 0.3;
      
      // Opacity from 1.0 to 0 as it moves away
      const opacity = 1 - fadeProgress;

      // Slight vertical offset for cards going up (negative y)
      const y = cardCenter < viewportCenter ? -fadeProgress * 20 : fadeProgress * 20;

      return { scale, opacity, y };
    });

    setCardStyles(newStyles);
  }, []);

  // Set up scroll listener
  useEffect(() => {
    // Initial calculation
    const timer = setTimeout(() => {
      updateCardStyles();
    }, 100);

    // Update on scroll
    const handleScroll = () => {
      requestAnimationFrame(updateCardStyles);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [updateCardStyles]);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hide scrollbar but allow scrolling */}
      <style jsx global>{`
        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        ref={containerRef}
        className="min-h-screen py-12 px-4"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Stories</h1>
          <p className="text-gray-400">Scroll to explore</p>
        </div>

        {/* Stacked Cards */}
        <div className="flex flex-col items-center">
          {stories.map((story, index) => (
            <div
              key={story.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <StoryCard
                story={story}
                index={index}
                scale={cardStyles[index]?.scale || 1}
                opacity={cardStyles[index]?.opacity || 1}
                y={cardStyles[index]?.y || 0}
              />
            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-32" />
      </div>
    </div>
  );
}

