'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Careers() {
  return (
    <div className="">
      <Navbar />
      <br></br>

      {/* Header Section */}
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-yellow-400">Join Our Team</h1>
        <p className="text-lg text-gray-300 mt-3">
          We are looking for passionate individuals to grow with us.
        </p>
      </motion.div>

      {/* Job Listings Section */}
      <div className="container mx-auto px-6 lg:px-16 py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-semibold text-black">{job.title}</h3>
              <p className="text-gray-300 mt-2">{job.skills}</p>
              <button className="mt-4 flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600">
                Apply Now <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="text-center mt-16 pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-300">{"Don't see a role that fits? Reach out to us!"}</p>

        <button className="mt-4 bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-amber-600">
          Contact Us
        </button>
      </motion.div>

      <Footer />
    </div>
  );
}

// Job Listings Data
const jobListings = [
  { title: 'Frontend Developer', skills: 'React, Tailwind CSS, TypeScript, Next.js' },
  { title: 'Backend Developer', skills: 'Node.js, Express, MongoDB, GraphQL' },
  { title: 'UI/UX Designer', skills: 'Figma, Adobe XD, CSS, User Research' },
  { title: 'Mobile App Developer', skills: 'React Native, Flutter, Swift, Kotlin' },
  { title: 'DevOps Engineer', skills: 'AWS, Docker, Kubernetes, CI/CD' },
  { title: 'AI/ML Engineer', skills: 'Python, TensorFlow, OpenAI, NLP' },
];

export default Careers;
