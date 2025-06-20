'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Card, CardContent } from './ui/card'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <Card className="w-full max-w-md bg-black dark:bg-gray-900 text-white border-0 shadow-2xl">
        <CardContent className="p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-white"
              required
            />
            
            <Input
              name="email"
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-white"
              required
            />
            
            <Textarea
              name="project"
              placeholder="Describe your project"
              value={formData.project}
              onChange={handleChange}
              className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-white min-h-[100px]"
              required
            />
            
            <div className="flex gap-3">
              <Button
                type="submit"
                className="flex-1 bg-white text-black hover:bg-gray-200 gap-2"
              >
                <Send className="h-4 w-4" />
                Send
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-gray-600 text-white hover:bg-gray-800 gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Contact me
              </Button>
            </div>
          </form>

          <div className="border-t border-gray-700 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">@williamrey</span>
              <div className="flex gap-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}