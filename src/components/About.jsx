'use client'
import React from 'react';
import { motion } from 'framer-motion';
export const About = () => {
  const companies = [
    'awwwards', 'CSS Winner', 'thoughtworks', 'facebook', 'AUTODESK', 'CSS Design Awards'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 dark:from-lime-600 dark:via-lime-700 dark:to-lime-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={"max-w-4xl mx-auto text-center"}
        >
          <span className="text-sm bg-white/20 px-4 py-2 rounded-full mb-6 inline-block">
            About
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black leading-tight">
            I've been{' '}
            <span className="bg-black text-white px-4 py-2 rounded-lg inline-block">
              Developing
            </span>
            <br />
            Websites since{' '}
            <span className="bg-black text-white px-4 py-2 rounded-lg inline-block">
              2013
            </span>
          </h2>

          <p className="text-xl text-black mb-12 max-w-2xl mx-auto">
            We start every new client interaction with an in-depth discovery call where we get
            to know each other and recommend the best course of action.
          </p>

          {/* Companies Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-8">PREVIOUSLY WORKED ON</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full text-black font-medium hover:bg-white/50 transition-all duration-300 cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

