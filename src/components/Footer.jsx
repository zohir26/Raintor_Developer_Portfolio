'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Dribbble
} from 'lucide-react';

/**
 * Footer component displays logo, contact info, navigation links, and social icons.
 */
export function Footer() {
  // Contact email addresses
  const CONTACT_EMAILS = [
    { href: 'mailto:HELLO@DEVLOP.ME.COM', label: 'HELLO@DEVLOP.ME.COM' },
    { href: 'mailto:MAHBUB@ME.COM',       label: 'MAHBUB@ME.COM' }
  ];

  // Contact phone numbers
  const CONTACT_PHONES = [
    { href: 'tel:+784549498100', label: '+7 845 494 98100' },
    { href: 'tel:+88450100211',   label: '+88 450 100 211' }
  ];

  // Main menu navigation items
  const MENU_ITEMS = [
    { href: '#home',      label: 'HOME' },
    { href: '#about',     label: 'ABOUT' },
    { href: '#portfolio', label: 'PORTFOLIO' },
    { href: '#blog',      label: 'BLOG' }
  ];

  // Social media platforms
  const SOCIAL_LINKS = [
    { icon: Twitter,   href: '#', label: 'Twitter'   },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook,  href: '#', label: 'Facebook'  },
    { icon: Dribbble,  href: '#', label: 'Dribbble'  }
  ];

  return (
    <footer className="bg-black dark:bg-gray-900 text-white pt-16 rounded-t-lg">
      <div className="container mx-auto px-4">
        {/* Top grid: Logo, Contact, Menu, Social */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h3 className="text-2xl font-bold text-green-400">DEVLOP.ME</h3>
            <p className="text-xl">Your partner in building beautiful web experiences.</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-300">Say hello</h4>
            {CONTACT_EMAILS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {label}
              </a>
            ))}

            <h4 className="text-lg font-semibold text-gray-300 pt-4">Call</h4>
            {CONTACT_PHONES.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {label}
              </a>
            ))}
          </motion.div>

          {/* Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-300">Menu</h4>
            <nav className="flex flex-col space-y-2">
              {MENU_ITEMS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-300">Social</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar: Branding & Legal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <span className="text-xl font-bold">BESNIK</span>
            <span>© devlop.me 2022</span>
          </div>
          <div className="flex items-center space-x-2 mb-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <span>-</span>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
