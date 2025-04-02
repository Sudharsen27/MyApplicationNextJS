'use client'

import { motion } from 'framer-motion'
import React from 'react'

function Newsletter() {
  return (
    <div className="bg-black/20 dark:bg-white/5 backdrop-blur-sm text-white">
    <div className="container mx-auto px-6 py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left max-w-md">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-2"
          >
            Subscribe to our newsletter
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-300 dark:text-gray-400"
          >
            Stay updated with our latest news and features
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-auto"
        >
          <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white w-full"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 rounded-lg font-medium transition-all"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  </div>
  )
}

export default Newsletter