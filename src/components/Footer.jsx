import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react'; // Ensure lucide-react is installed: npm install lucide-react

// This 'use client' directive is relevant for frameworks like Next.js, indicating a client-side component.
// For a standard React setup, it doesn't change functionality but is kept as per original code.
'use client';

export function Footer() {
  // Define social media links with their respective Lucide icons and labels
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  // Define main menu items for navigation
  const menuItems = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#portfolio', label: 'PORTFOLIO' },
    { href: '#blog', label: 'BLOG' },
  ];

  return (
    // Main footer section with dark background and text
    <footer className="bg-black dark:bg-gray-900 text-white py-16 rounded-t-lg">
      <div className="container mx-auto px-4">
        {/* Grid layout for different sections of the footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline section with Framer Motion animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state (hidden, slightly below)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible, original position when in view
            transition={{ duration: 0.6 }} // Animation duration
            className="space-y-4" // Tailwind spacing
          >
            <h3 className="text-2xl font-bold text-green-400">DEVLOP.ME</h3> {/* Logo text */}
            <p className="text-4xl font-bold leading-tight">
              As you can {/* Tagline text */}
            </p>
          </motion.div>

          {/* Contact Info section with Framer Motion animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} // Delayed animation for sequential appearance
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-300">Say hello</h4> {/* Section title */}
            <div className="space-y-2">
              {/* Email links with Lucide Mail icon */}
              <a
                href="mailto:HELLO@DEVLOP.ME.COM"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors rounded-md p-1" // Styling for links
              >
                <Mail className="h-4 w-4" /> {/* Mail icon */}
                HELLO@DEVLOP.ME.COM
              </a>
              <a
                href="mailto:MAHBUB@ME.COM"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors rounded-md p-1"
              >
                <Mail className="h-4 w-4" />
                MAHBUB@ME.COM
              </a>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-300 mb-2">Call</h4> {/* Section title */}
              <div className="space-y-1">
                {/* Phone links with Lucide Phone icon */}
                <a
                  href="tel:+784549498100"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors rounded-md p-1"
                >
                  <Phone className="h-4 w-4" /> {/* Phone icon */}
                  +784549 4981 00
                </a>
                <a
                  href="tel:+88450100211"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors rounded-md p-1"
                >
                  <Phone className="h-4 w-4" />
                  +8845 0100 211
                </a>
              </div>
            </div>
          </motion.div>

          {/* Menu section with Framer Motion animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-300">Menu</h4> {/* Section title */}
            <nav className="flex flex-col space-y-2">
              {/* Map through menu items to create navigation links */}
              {menuItems.map((item) => (
                <a
                  key={item.href} // Unique key for list items
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors rounded-md p-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links section with Framer Motion animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-300">Social</h4> {/* Section title */}
            <div className="space-y-2">
              {/* Map through social links to create animated social icons */}
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ x: 5 }} // Animation on hover (move right)
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors rounded-md p-1"
                  aria-label={social.label} // Accessibility label
                >
                  <social.icon className="h-4 w-4" /> {/* Render the Lucide icon dynamically */}
                  {social.label.toUpperCase()}
                </motion.a>
              ))}
              {/* Additional social links */}
              <div className="pt-2 space-y-1">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors rounded-md p-1"
                >
                  BEHANCE
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors rounded-md p-1"
                >
                  DRIBBBLE
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar section with copyright and privacy/terms links */}
        <motion.div
          initial={{ opacity: 0 }} // Initial animation state (hidden)
          whileInView={{ opacity: 1 }} // Animate to visible when in view
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" // Styling for the bottom bar
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-2xl font-bold">BESNIK</span> {/* Brand name */}
            <span className="text-gray-400">© devlop.me 2022</span> {/* Copyright text */}
          </div>

          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors rounded-md p-1">PRIVACY</a>
            <span>-</span>
            <a href="#" className="hover:text-white transition-colors rounded-md p-1">TERMS</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;