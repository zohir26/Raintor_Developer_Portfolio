'use client';

import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeContext } from './ThemeProvider';

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Blog', href: '#blog' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container mx-auto max-w-[1440px] flex items-center justify-between px-4 py-4">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-black dark:text-white"
        >
          DEVLOP.ME
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium"
            >
              {item.name}
            </motion.a>
          ))}

          <Button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>

          <Button className="ml-4">Start Project</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-gray-500 bg-gray-300 hover:bg-gray-400 dark:text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700"
        >
          <nav className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between">
              <Button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </Button>

              <Button size="sm">Start Project</Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
