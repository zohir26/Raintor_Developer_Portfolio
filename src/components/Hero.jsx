'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Adjust this path to wherever your button actually lives
import { Button } from '@/components/ui/button'; 
import { Calendar, Linkedin, Twitter, Github } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 30]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 dark:from-lime-600 dark:via-lime-700 dark:to-lime-800" />

      {/* Floating Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-20 w-24 h-24 bg-black/10 rounded-full blur-lg"
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-black dark:text-white leading-tight"
          >
            Trusted{' '}
            <span className="bg-black text-white px-4 py-2 rounded-lg inline-block">
              Partner
            </span>{' '}
            for Your Website{' '}
            <span className="bg-black text-white px-4 py-2 rounded-lg inline-block">
              Develop.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-black dark:text-gray-200 max-w-2xl mx-auto"
          >
            Building the world's best marketing websites for over a{' '}
            <span className="font-bold">decade</span>.
            <br />
            Your trusted partner for strategy, design, and dev.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              <Calendar className="mr-2" size={20} />
              Schedule a Call
            </Button>

            {/* Example avatar stack */}
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-lime-400">
                M
              </div>
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-lime-400">
                M
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-lime-400">
                D
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-black dark:text-gray-200 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-black dark:text-gray-200 hover:text-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-black dark:text-gray-200 hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
            <div className="text-black dark:text-gray-200 text-sm font-medium">
              @williamrey
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
