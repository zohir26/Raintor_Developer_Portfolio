'use client';

import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';


// Import the ThemeContext object, not the ThemeProvider component

import { Button } from './ui/button';
import { ThemeContext } from './ThemeProvider';

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Blog', href: '#blog' }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // CORRECT: Use useContext with the ThemeContext object
  const { theme, toggleTheme } = useContext(ThemeContext);
  if (!theme || !toggleTheme) {
    console.warn("ThemeContext is not available to the Header component. Ensure ThemeProvider wraps this component.");

    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black dark:text-white">
              DEVLOP.ME
            </div>
            {/* Mobile Menu Button */}
            <Button
              className="md:hidden p-2 text-black dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700"
            >
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 flex items-center space-x-4">
                <Button size="sm">Start Project</Button>
              </div>
            </motion.div>
          )}
        </nav>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-black dark:text-white"
          >
            DEVLOP.ME
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <Button
              // CORRECT: Call toggleTheme function from context
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </Button>

            <Button>Start Project</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden p-2 text-black dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            // NOTE: 'exit' animation requires AnimatePresence from framer-motion
            // If you are not using AnimatePresence, this 'exit' prop won't do anything.
            exit={{ opacity: 0, height: 0 }} 
            className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 flex items-center space-x-4">
              <Button
                onClick={toggleTheme} // CORRECT: Call toggleTheme from context
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </Button>
              <Button size="sm">Start Project</Button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};