'use client';

import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLaptopCode } from 'react-icons/fa';
import Footer from '../components/Footer';
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12 sm:px-10 lg:px-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <br></br>
          <br></br>
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-500 mb-4">About Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our mission, vision, and values that drive us to create innovative solutions in today&#39;s tech landscape.
          </p>
        </motion.div>
        
        {/* Our Mission Section */}
        <section className="mt-12">
          <motion.h2 className="text-3xl font-semibold text-white mb-4">Our Mission</motion.h2>
          <motion.p className="text-gray-300 leading-relaxed">
            We strive to deliver cutting-edge technology solutions that empower businesses and individuals to achieve their full potential.
          </motion.p>
        </section>

        {/* Why Choose Us */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Innovation & Expertise</h3>
            <p className="text-gray-300">We stay ahead of industry trends to provide top-notch solutions.</p>
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Customer-Centric Approach</h3>
            <p className="text-gray-300">We prioritize user experience to create intuitive, high-quality products.</p>
          </motion.div>
        </section>

        {/* Tech Stack Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Tech Stack</h2>
          <motion.div className="flex gap-6 flex-wrap">
            {["React", "Next.js", "Tailwind CSS", "Node.js", "Firebase", "AWS"].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 px-4 py-2 rounded-lg text-white shadow-md"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Our Team */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-white mb-6">Meet Our Team</h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <Image 
                  src="/Images/member.jpg" 
                  alt="Team Member" 
                  width={80} 
                  height={80} 
                  className="rounded-full mb-4"
                />
                <h3 className="text-lg font-medium text-white">Team Member {index + 1}</h3>
                <p className="text-gray-400">Software Engineer</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Us */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">Reach out to us with any questions or business inquiries.</p>

          <motion.div className="bg-gray-800 p-6 rounded-lg flex flex-col space-y-4">
            <motion.div className="flex items-center text-white" whileHover={{ scale: 1.1 }}>
              <FaEnvelope className="text-blue-500 text-xl mr-3" /> example@email.com
            </motion.div>
            <motion.div className="flex items-center text-white" whileHover={{ scale: 1.1 }}>
              <FaPhone className="text-green-500 text-xl mr-3" /> (123) 456-7890
            </motion.div>
            <motion.div className="flex items-center text-white" whileHover={{ scale: 1.1 }}>
              <FaLaptopCode className="text-yellow-500 text-xl mr-3" /> https://webapplicationss.netlify.app/
            </motion.div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}