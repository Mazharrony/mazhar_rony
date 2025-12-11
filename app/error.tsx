'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error for debugging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by error.tsx:', error);
    }
    // In production, you might want to send this to an error tracking service
    // e.g., Sentry.captureException(error);
  }, [error]);

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '600px' }}
      >
        <motion.div
          style={{
            fontSize: '4rem',
            marginBottom: '1rem'
          }}
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          ⚠️
        </motion.div>
        
        <h2 style={{ 
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: 'var(--color-text, #111)'
        }}>
          Something went wrong
        </h2>
        
        <p style={{ 
          marginBottom: '2rem',
          color: 'var(--color-text-secondary, #666)',
          fontSize: '1.1rem'
        }}>
          We encountered an unexpected error while loading this page. 
          Don't worry, it's not your fault!
        </p>

        {process.env.NODE_ENV === 'development' && error.message && (
          <details style={{
            marginBottom: '2rem',
            padding: '1rem',
            backgroundColor: '#f3f4f6',
            borderRadius: '0.5rem',
            textAlign: 'left',
            fontSize: '0.875rem',
            color: '#374151'
          }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Error Details (Development Only)
            </summary>
            <code style={{ 
              display: 'block',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}>
              {error.message}
            </code>
            {error.digest && (
              <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b7280' }}>
                Error ID: {error.digest}
              </p>
            )}
          </details>
        )}

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.button
            onClick={reset}
            style={{
              padding: '0.875rem 1.75rem',
              backgroundColor: '#6366f1',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#4f46e5'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>

          <motion.button
            onClick={() => window.location.href = '/'}
            style={{
              padding: '0.875rem 1.75rem',
              backgroundColor: 'transparent',
              color: '#6366f1',
              border: '2px solid #6366f1',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#eef2ff'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Go Home
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
