'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeContext.tsx:17',message:'ThemeProvider useEffect started',data:{typeofWindow:typeof window},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    // Check for saved theme preference or use system preference
    try {
      const savedTheme = localStorage.getItem('theme') as Theme;
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeContext.tsx:20',message:'LocalStorage read for theme',data:{savedTheme},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeContext.tsx:22',message:'System preference check',data:{prefersDark},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeContext.tsx:24',message:'Theme state set',data:{initialTheme},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      setTheme(initialTheme);
      document.body.classList.toggle('dark', initialTheme === 'dark');
    } catch (error) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeContext.tsx:27',message:'ThemeProvider localStorage error',data:{error:error instanceof Error?error.message:String(error)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      // Fallback to light theme if localStorage fails
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Add transitioning class for smooth theme change
    document.documentElement.classList.add('theme-transitioning');
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Mark that user has manually interacted with theme
    localStorage.setItem('theme-interacted', 'true');
    
    // Apply theme class
    document.body.classList.toggle('dark', newTheme === 'dark');
    
    // Remove transitioning class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 2100);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeContext.tsx:55',message:'useTheme hook called',data:{hasContext:context!==undefined},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion
  if (context === undefined) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeContext.tsx:57',message:'useTheme error: context missing',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
