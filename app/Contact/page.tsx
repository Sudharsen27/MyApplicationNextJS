'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';

// Define form data interface
interface FormData {
  name: string;
  email: string;
  message: string;
  file?: FileList;
}

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  
  // Parallax effect for background
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, 150]);

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append("access_key", "a2e738e2-9fcd-4e02-900e-a5534457416e");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    
    if (data.file && data.file.length > 0) {
      formData.append("file", data.file[0]);
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting the form.");
    }
    
  };

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  const rightSideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated Background Layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"
        style={{ y: yBackground }}
      />
      
      {/* Particle Effect Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={{ y: [0, -1000], opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <Navbar />

      <motion.section
        className="container mx-auto px-4 py-20 relative z-10"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          variants={headingVariants}
        >
          {"Contact Us".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <motion.div
            className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form Section */}
          <motion.div variants={formVariants}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-white/5 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  {...register("message", { required: true })}
                  className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-500/20 transition-all duration-300 h-32"
                  placeholder="Your message..."
                  required
                />
              </div>

              <motion.input
                whileHover={{ scale: 1.02 }}
                type="file"
                {...register("file")}
                accept=".pdf"
                className="w-full p-2 bg-gray-900/50 text-white rounded-lg border border-gray-700 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-purple-500/20 file:text-white hover:file:bg-purple-500/40 transition-all"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side Technology Content */}
          <motion.div variants={rightSideVariants} className="space-y-8">
            {/* Live Chat Bubble */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Live Chat</h3>
              <p className="text-gray-300 mb-4">Connect with our AI-powered assistant instantly</p>
              <motion.button
                className="px-4 py-2  text-yellow-600 rounded-full hover:bg-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Chat
              </motion.button>
            </motion.div>

            {/* Social Media Integration */}
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Discord'].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    className="p-3 bg-purple-500/10 rounded-full text-yellow-600 hover:bg-purple-500/20 transition-all duration-300"
                    whileHover={{ y: -3, rotate: 5 }}
                  >
                    {platform[0]}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Tech Stats Widget */}
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Tech Stats</h3>
              <div className="space-y-3 text-gray-300">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                  className="flex justify-between"
                >
                  <span>Response Time</span>
                  <span className="text-yellow-600">&lt; 2 mins</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.2 }}
                  className="flex justify-between"
                >
                  <span>Uptime</span>
                  <span className="text-yellow-600">99.9%</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.4 }}
                  className="flex justify-between"
                >
                  <span>AI Assistance</span>
                  <span className="text-yellow-600">24/7</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
