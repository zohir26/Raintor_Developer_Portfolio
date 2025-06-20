'use client';

import React, { createContext, useState, useEffect } from 'react';

/**
 * ThemeContext provides:
 *  - theme: current theme, either 'light' or 'dark'
 *  - toggleTheme: function to switch between themes
 */
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

/**
 * ThemeProvider manages theme state, persists user choice, 
 * and applies a 'dark' class to <html> when appropriate.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // On component mount, load saved preference and apply it
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  /**
   * Toggle between 'light' and 'dark' themes:
   * 1. Compute next theme
   * 2. Persist to localStorage
   * 3. Update <html> class
   * 4. Update state
   */
  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      document.documentElement.classList.toggle('dark', next === 'dark');
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
