import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Moon } from 'lucide-react'; // Ensure lucide-react is installed: npm install lucide-react

// Theme Context Definition (copied from Skills component for consistency)
// This context will provide the current theme and a function to toggle it
const ThemeContext = React.createContext({
  theme: 'light', // Default theme value
  toggleTheme: () => {} // Placeholder function
});

// Theme Provider Component (copied from Skills component for consistency)
// This component manages the theme state and provides it to its children via ThemeContext
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // State to hold the current theme ('light' or 'dark')

  // useEffect to load the saved theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Get theme from localStorage or default to 'light'
    setTheme(savedTheme); // Set the theme state
    // Apply the 'dark' class to the document's root element if the theme is dark
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Determine the new theme
    setTheme(newTheme); // Update theme state
    localStorage.setItem('theme', newTheme); // Save the new theme to localStorage
    // Toggle the 'dark' class on the document's root element
    document.documentElement.classList.toggle('dark', newNewtheme === 'dark');
  };

  return (
    // Provide the theme state and toggle function to children components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const WorkProcess = () => {
  // Define an array of process steps, each with a title, description, and styling classes.
  const processes = [
    {
      title: 'Discovery',
      description: 'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
      color: 'bg-pink-500',
      textColor: 'text-white'
    },
    {
      title: 'Strategy',
      description: 'Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews, we\'re here to set the stage for success.',
      color: 'bg-lime-400',
      textColor: 'text-black'
    },
    {
      title: 'Design',
      description: 'After we have a comprehensive understanding of your brand, we\'ll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.',
      color: 'bg-gray-800',
      textColor: 'text-white'
    },
    {
      title: 'Build',
      description: 'Whether we\'ve just finished designing your new site or you\'re handing off finished designs for us to develop in Webflow, we\'re here to apply our trusted development process to your project.',
      color: 'bg-gray-700',
      textColor: 'text-white'
    }
  ];

  return (
    // Main section for the work process component.
    // The background and text colors will adapt based on the 'dark' class applied by ThemeProvider.
    <section className="py-20 bg-black text-white rounded-lg dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4">
        {/* Framer Motion div for overall section animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} // Initial animation state (hidden, slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible, original position when in view
          transition={{ duration: 0.8 }} // Animation duration
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm bg-gray-800 px-4 py-2 rounded-full mb-4 inline-block dark:bg-gray-700">
              Work Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">My Work Process</h2>
          </div>

          {/* Grid for displaying individual process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index} // Using index as key, consider a unique ID if processes can be reordered
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
                whileHover={{ y: -10 }} // Animation on hover (move up slightly)
                className={`${process.color} ${process.textColor} p-8 rounded-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{process.title}</h3>
                  <ArrowRight className="w-6 h-6" /> {/* Arrow icon */}
                </div>
                <p className="text-lg leading-relaxed">{process.description}</p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-sm font-medium hover:underline">
                    Read More <ArrowRight className="ml-2 w-4 h-4" /> {/* Read More link with arrow icon */}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default WorkProcess;