'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1, ease: 'easeOut' }}
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
    >
      <motion.h1 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 text-center"
      >
        About Us
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-lg text-gray-700 leading-relaxed text-center"
      >
        Welcome to our about page. Learn more about us and our mission.
      </motion.p>
      
      <section className="mt-12">
        <motion.h2 
          initial={{ x: -30, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-2xl font-semibold text-gray-900 mb-4"
        >
          Our Story
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-700 leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
          Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.
        </motion.p>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        >
          {[...Array(3)].map((_, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                src="/Images/member.jpg"
                alt="Team Member"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-lg font-medium text-gray-900 text-center">Team Member</h3>
              <p className="text-gray-600 text-center mt-2">Position</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Feel free to reach out to us with any questions or inquiries.
        </p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-gray-50 rounded-lg p-6 shadow-lg"
        >
          <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.1 }}>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600">✉️</span>
            </div>
            <span className="text-gray-700">example@email.com</span>
          </motion.div>
          
          <motion.div className="flex items-center" whileHover={{ scale: 1.1 }}>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600">📞</span>
            </div>
            <span className="text-gray-700">(123) 456-7890</span>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}