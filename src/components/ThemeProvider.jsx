// components/ThemeProvider.js
'use client'; 
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';


// This context provides the current theme ('light' or 'dark') and a function to toggle it.
export const ThemeContext = React.createContext({
  theme: 'light', // Default theme value for consumers if rendered outside the Provider.
  toggleTheme: () => {} // Placeholder function for the default context value.
});


// This component manages the theme state and provides it to all its children components

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // State to hold the current theme.

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'; 
    setTheme(savedTheme); 

    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []); 

  // Function to toggle between 'light' and 'dark' themes.
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Determine the next theme.
    setTheme(newTheme); // Update the theme state.
    localStorage.setItem('theme', newTheme); // Save the new theme preference to localStorage.
    // Toggle the 'dark' class on the document's root element to apply/remove dark mode styles.
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Render all child components passed to ThemeProvider */}
    </ThemeContext.Provider>
  );
};

