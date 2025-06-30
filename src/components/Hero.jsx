'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Twitter, Instagram, Facebook, Phone } from 'lucide-react';

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
      <div className="absolute inset-0 bg-[url(/banner.png)]" />

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
            Development.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-xl text-black dark:text-gray-200 md:text-2xl"
        >
          Building the world's best marketing websites for over a{' '}
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
          <motion.div 
            className="flex flex-col items-start space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="flex space-x-4 absolute top-88 left-16 rotate-270">
              {[
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.Icon.displayName}
                  className="text-black hover:text-gray-600"
                >
                  <item.Icon size={24} />
                </a>
              ))}
            </motion.div>
            <motion.div 
              className="text-sm font-medium text-black absolute left-12 top-88 rotate-270"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              @williamrey
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-4 sm:mt-0 "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="px-6 py-3 bg-transparent border border-black rounded-full text-black hover:bg-black hover:text-white transition-colors flex items-center gap-2">
              <Phone size={20} />
              Schedule a Call
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}