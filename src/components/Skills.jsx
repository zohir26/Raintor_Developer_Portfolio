'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Atom,
  Palette,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

/**
 * Skills section displaying technical proficiencies with animated grid and nav controls.
 * Responsive: single-column on small screens, three-column on md+.
 */
export default function Skills() {
  // Index of currently highlighted skill (for future carousel enhancements)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Skill details: icon, title, description
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-lime-400" />,
      title: 'HTML & CSS',
      description: 'Semantic markup and modern styling for accessible, responsive layouts.'
    },
    {
      icon: <Atom className="w-8 h-8 text-lime-400" />,
      title: 'JavaScript',
      description: 'ES6+ syntax, asynchronous programming, and DOM manipulation expertise.'
    },
    {
      icon: <Palette className="w-8 h-8 text-lime-400" />,
      title: 'Webflow',
      description: 'Visual development for rapid prototyping and production-ready sites.'
    }
  ];

  // Navigate to previous skill
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  // Navigate to next skill
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length);
  };

  return (
    <section className="py-20 px-4 bg-black text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header & controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6"
        >
          <div >
            <span className="text-sm font-bold bg-gray-800 px-4 py-2 rounded-full m-auto">
              Why Choose Me
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              <span className="border-2 border-lime-400 px-4  rounded-lg mb-2">
                My Extensive
              </span>
              <br />
              Skill Set
            </h2>
            <p className="mt-2 text-lime-400 font-medium">
              Md. Zohir Hossain
            </p>
          </div>

          <div className="text-right flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Skill"
              className="p-2 border border-gray-600 rounded-full hover:border-lime-400 hover:text-lime-400 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Skill"
              className="p-2 border border-gray-600 rounded-full hover:border-lime-400 hover:text-lime-400 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={
                `p-8 rounded-lg transition-colors duration-300 cursor-pointer ` +
                (index === currentIndex
                  ? 'bg-gray-800'
                  : 'bg-gray-900 hover:bg-gray-800')
              }
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
