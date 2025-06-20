import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Import necessary icons from lucide-react
import { Code, Atom, Palette, ChevronLeft, ChevronRight } from 'lucide-react'; // Ensure lucide-react is installed: npm install lucide-react

 const Skills = () => {
  // State to manage the currently displayed skill, though not directly used in the current grid layout.
  // It's set up for a potential future slider/carousel functionality.
  const [currentSkill, setCurrentSkill] = useState(0);

  // Array of skill objects, each with an icon, title, and description.
  const skills = [
    {
      icon: <Code className="w-8 h-8" />, // Lucide Code icon
      title: 'HTML & CSS',
      description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'
    },
    {
      icon: <Atom className="w-8 h-8" />, // Lucide Atom icon
      title: 'Javascript',
      description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'
    },
    {
      icon: <Palette className="w-8 h-8" />, // Lucide Palette icon
      title: 'Webflow',
      description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'
    }
  ];

  // Function to move to the next skill in the array (circular).
  const nextSkill = () => {
    setCurrentSkill((prev) => (prev + 1) % skills.length);
  };

  // Function to move to the previous skill in the array (circular).
  const prevSkill = () => {
    setCurrentSkill((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    // Main section for the skills component, with dark background and white text.
    <section className="py-20 bg-black text-white rounded-lg">
      <div className="container mx-auto px-4">
        {/* Framer Motion div for overall section animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} // Initial animation state (hidden, slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible, original position when in view
          transition={{ duration: 0.8 }} // Animation duration
          className="max-w-6xl mx-auto"
        >
          {/* Header and navigation controls section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="mb-8 lg:mb-0">
              {/* "Why Choose me" tag */}
              <span className="text-sm bg-gray-800 px-4 py-2 rounded-full mb-4 inline-block">
                Why Choose me
              </span>
              {/* Main heading for skills section */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="border-2 border-lime-400 px-4 py-2 rounded-lg">
                  My Extensive
                </span>
                <br />
                List of Skills
              </h2>
              {/* Subtitle/Name */}
              <p className="text-lime-400 font-medium">Md. Emont Mahmud</p>
            </div>

            {/* Description and navigation buttons */}
            <div className="text-right">
              <p className="text-gray-400 mb-4">
                Building the world's best marketing Your
                <br />
                trusted partner for strategy, design, and dev.
              </p>
              <div className="flex space-x-4 justify-end">
                {/* Previous skill button */}
                <button
                  onClick={prevSkill}
                  className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition-colors"
                  aria-label="Previous skill"
                >
                  <ChevronLeft size={20} /> {/* Left arrow icon */}
                </button>
                {/* Next skill button */}
                <button
                  onClick={nextSkill}
                  className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition-colors"
                  aria-label="Next skill"
                >
                  <ChevronRight size={20} /> {/* Right arrow icon */}
                </button>
              </div>
            </div>
          </div>

          {/* Skills Grid - displays each skill in a responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index} // Using index as key, consider a unique ID if skills can be reordered
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
                whileHover={{ y: -10 }} // Animation on hover (move up slightly)
                className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer"
              >
                {/* Skill icon */}
                <div className="text-lime-400 mb-4">{skill.icon}</div>
                {/* Skill title */}
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                {/* Skill description */}
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
