'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Linkedin, Twitter, Github } from 'lucide-react';

/**
 * Hero section with scroll-linked animations, headline, call-to-action, and social links.
 * Responsive and accessible design using Tailwind CSS and Framer Motion.
 */
export default function Hero() {
  // Track vertical scroll position
  const { scrollY } = useScroll();

  // Transform scroll value for floating elements
  const floatUp = useTransform(scrollY, [0, 300], [0, -50]);
  const floatDown = useTransform(scrollY, [0, 300], [0, 30]);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 dark:from-lime-600 dark:via-lime-700 dark:to-lime-800" />

      {/* Floating decorative circles */}
      <motion.div
        style={{ y: floatUp }}
        className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-xl"
      />
      <motion.div
        style={{ y: floatDown }}
        className="absolute bottom-20 right-20 w-24 h-24 bg-black/10 rounded-full blur-lg"
      />

      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-6xl lg:text-7xl"
        >
          Trusted{' '}
          <span className="inline-block px-4 py-2 text-white bg-black rounded-lg mb-4">
            Partner
          </span>{' '}
          for Your Website{' '}
          <span className="inline-block px-4 py-2 text-white bg-black rounded-lg">
            Develop.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-xl text-black dark:text-gray-200 md:text-2xl"
        >
          Building the world&apos;s best marketing websites for over a{' '}
          <span className="font-bold">decade</span>.
          <br /> Your trusted partner for strategy, design, and dev.
        </motion.p>

        {/* Call-to-action and avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="flex items-center gap-2 bg-black text-white hover:bg-gray-800">
            <Calendar size={20} />
            Schedule a Call
          </Button>

          {/* Avatar stack */}
          <div className="flex -space-x-2">
            <div className="flex items-center justify-center w-10 h-10 text-white bg-purple-500 rounded-full border-2 border-lime-400 font-bold">
              M
            </div>
            <div className="flex items-center justify-center w-10 h-10 text-white bg-pink-500 rounded-full border-2 border-lime-400 font-bold">
              M
            </div>
            <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded-full border-2 border-lime-400 font-bold">
              D
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="flex space-x-6">
            {[Linkedin, Twitter, Github].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label={Icon.displayName}
                className="transition-colors text-black dark:text-gray-200 hover:text-gray-600"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <div className="text-sm font-medium text-black dark:text-gray-200">
            @williamrey
          </div>
        </motion.div>
      </div>
    </section>
  );
}
