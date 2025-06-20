'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * About section showcasing experience and notable collaborations.
 * Responsive and animated using Framer Motion.
 */
export function About() {
  // List of companies for the showcase
  const companies = [
    'Awwwards',
    'CSS Winner',
    'ThoughtWorks',
    'Facebook',
    'Autodesk',
    'CSS Design Awards'
  ];

  return (
    <section
      id="about"
      className="py-15 px-6 sm:px-8 lg:px-16 bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 dark:from-lime-600 dark:via-lime-700 dark:to-lime-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-lg font-bold bg-white/20 dark:bg-black/30 px-10 py-2 rounded-full mb-10 hover:bg-gray-200"
        >
          About
        </motion.span>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-8 text-black dark:text-white leading-tight"
        >
          I&apos;ve been{' '}
          <span className="bg-black text-white px-4 py-2 rounded-lg inline-block mb-6">
            Developing
          </span>
          <br />
          Websites since{' '}
          <span className="bg-black text-white px-4 py-2 rounded-lg inline-block">
            2013
          </span>
        </motion.h2>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-black dark:text-gray-200 mb-12 max-w-2xl mx-auto"
        >
          We start every new client interaction with an in-depth discovery call,
          learning your goals and crafting a clear roadmap for success.
        </motion.p>

        {/* Companies Showcase */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
            Previously Worked On
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/30 dark:bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full text-black dark:text-white font-medium cursor-pointer hover:bg-white/50 transition-all duration-300"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
