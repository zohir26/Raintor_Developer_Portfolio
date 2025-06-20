'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * WorkProcess component displays a four-step workflow with animated entrance,
 * hover effects, and responsive grid layout.
 */
export default function WorkProcess() {
  // Define each step of the workflow
  const steps = [
    {
      title: 'Discovery',
      description:
        'An in-depth discovery call to learn your objectives and recommend a tailored plan.',
      bgColor: 'bg-pink-500',
      textColor: 'text-white'
    },
    {
      title: 'Strategy',
      description:
        'Crafting a bespoke pre-build strategy, from brand consultation to code reviews.',
      bgColor: 'bg-lime-400',
      textColor: 'text-black'
    },
    {
      title: 'Design',
      description:
        'Design each page with iterative feedback to ensure brand consistency and approval.',
      bgColor: 'bg-gray-800',
      textColor: 'text-white'
    },
    {
      title: 'Build',
      description:
        'Develop in your preferred platform, ensuring performance, accessibility, and scalability.',
      bgColor: 'bg-gray-700',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-20 px-4 bg-black text-white dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-2xl font-bold hover:bg-gray-200 hover:text-black bg-gray-900 px-4 py-2 rounded-full mb-4 ">
            Work Process
          </span>
          <h2 className="text-5xl md:text-5xl font-bold">
            My Work Process
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className={`${step.bgColor} ${step.textColor} p-8 rounded-lg shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">
                  {step.title}
                </h3>
                <ArrowRight className="w-6 h-6" />
              </div>
              <p className="text-lg leading-relaxed">
                {step.description}
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
