'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  ArrowDownCircle,
  Phone
} from 'lucide-react';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './Shared/Card';

/**
 * Contact section with animated intro and form for project inquiries.
 * Responsive layout: stacked on small screens, two-column on md+.
 */
export  function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });

  /**
   * Update form data state on input change
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Handle form submission logic
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: integrate with API or email service
  };

  return (
    <section
      id="contact"
      className="p-20 px-4 bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 dark:from-lime-600 dark:via-lime-700 dark:to-lime-800"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-12 px-6">
        {/* Intro Column */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-black dark:text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-2">
            <div className="p-2 border border-gray-700 rounded-full bg-white/30 dark:bg-black/30">
              <ArrowDownCircle size={20} />
            </div>
            <Button variant="outline" className="rounded-full border-gray-700 dark:border-gray-300">
              Contact
            </Button>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Interested in{' '}
            <span className="bg-black text-white px-2 rounded">work</span>{' '}
            together?
          </h2>

          {/* Description */}
          <p className="text-lg max-w-xl">
            We start every new client interaction with an in-depth discovery call
            where we get to know each other.
          </p>

          {/* Call-to-action */}
          <Button size="lg" className="inline-flex items-center gap-2 bg-black text-white hover:bg-gray-800">
            <Phone size={18} />
            Schedule a Call
          </Button>
        </motion.div>

        {/* Form Column */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="w-full max-w-md bg-gray-950 text-white rounded-2xl overflow-hidden py-4">
            <CardContent className="p-8 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name input */}
                <Input
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent placeholder-gray-500 text-white border-0 border-b-2 border-b-gray-600 focus:border-b-green-400 focus:ring-0"
                  required
                />

                {/* Email input */}
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent placeholder-gray-500 text-white border-0 border-b-2 border-b-gray-600 focus:border-b-green-400 focus:ring-0"
                  required
                />

                {/* Project textarea */}
                <Textarea
                  name="project"
                  placeholder="Describe your project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-transparent placeholder-gray-500 text-white border-0 border-b-2 border-b-gray-600 focus:border-b-green-400 focus:ring-0 min-h-[80px]"
                  required
                />

                {/* Submit buttons */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    type="submit"
                    className="px-6 py-2 border border-white rounded-full flex items-center gap-2 text-white hover:bg-white/10"
                  >
                    <Send className="h-4 w-4" />
                    Send
                  </Button>

                  <span className="text-white">or</span>

                  <Button
                    type="button"
                    className="px-6 py-2 border border-white rounded-full flex items-center gap-2 text-white hover:bg-white/10"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Contact me
                  </Button>
                </div>
              </form>

              {/* Social footer */}
              <div className="mt-6 border-t border-gray-700 pt-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 text-sm">@williamrey</span>
                  <span className="text-gray-400 text-sm">—</span>
                  {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={Icon.displayName}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
