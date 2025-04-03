"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules correctly
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

// Import required Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// REMOVE: SwiperCore.use([Navigation, Pagination, Autoplay]); - This is causing the error

export default function Home() {
  // Fixed empty useState calls
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check system preference for dark mode on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      
      // Simulate loading state
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen dark:bg-gray-900 transition-all duration-300">
        <Navbar />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 pt-20"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white dark:text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Elevate Your <span className="text-yellow-400 dark:text-blue-400">Digital Experience</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We create amazing experiences through innovative solutions and thoughtful design,
              helping businesses transform and thrive in the digital age.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white font-medium py-3 px-8 rounded-lg border border-gray-300 dark:border-gray-700 transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white dark:text-white text-center mb-12">
              Powerful <span className="text-yellow-400 dark:text-blue-400">Features</span> That Set Us Apart
            </h2>
            
            <Swiper
              modules={[Navigation, Pagination, Autoplay]} // ADD modules prop here
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              <SwiperSlide>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                    <span className="text-blue-600 dark:text-blue-300 text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    AI-Powered Insights
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our advanced analytics engine uses machine learning to deliver actionable insights, 
                    helping you make data-driven decisions faster.
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                    <span className="text-green-600 dark:text-green-300 text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    Lightning Fast Performance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built with the latest technologies, our platform delivers exceptional speed 
                    and responsiveness across all devices.
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                    <span className="text-purple-600 dark:text-purple-300 text-2xl">🛠️</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    Seamless Integration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Connect with your favorite tools and services through our extensive API 
                    and pre-built integrations.
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full">
                  <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mb-6">
                    <span className="text-amber-600 dark:text-amber-300 text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Rest easy knowing your data is protected with advanced encryption and 
                    compliance with global security standards.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>

          {/* Statistics Section */}
          <motion.div 
            className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-blue-600 dark:text-blue-400 text-4xl font-bold mb-2">98%</h3>
              <p className="text-gray-600 dark:text-gray-300">Customer Satisfaction</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-green-600 dark:text-green-400 text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-gray-600 dark:text-gray-300">Active Users</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-purple-600 dark:text-purple-400 text-4xl font-bold mb-2">24/7</h3>
              <p className="text-gray-600 dark:text-gray-300">Customer Support</p>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white dark:text-white text-center mb-12">
              What Our <span className="text-yellow-400 dark:text-blue-400">Clients</span> Say
            </h2>
            
            <Swiper
              modules={[Pagination, Autoplay]} // ADD modules prop here
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              className="pb-12"
            >
              <SwiperSlide>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">JD</div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Jane Doe</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Marketing Director</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    &quot;This platform has transformed how we approach digital marketing. The analytics tools 
                    provided insights we never knew we needed, and the customer support team has been exceptional.&quot;
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">JS</div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">John Smith</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">CTO</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    &ldquo;The integration capabilities are seamless. We were able to connect all our existing tools 
                    in minutes, and the performance improvements were immediate.&rdquo;
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-2xl text-center mb-24"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              Ready to transform your digital experience?
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have revolutionized their businesses with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="bg-transparent hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg border border-white transition duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
          
          {/* Newsletter Section */}
          <Newsletter />
        </main>

        <Footer />

        {/* whatsapp*/}
        <button
          onClick={() => window.open("https://wa.me/916382519651", "_blank")}
          className="fixed bottom-6 right-6 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M16.02 2.999c-7.166 0-12.985 5.818-12.985 12.985 0 2.527.74 4.986 2.145 7.125L2 30l7.262-3.152a12.9 12.9 0 0 0 6.758 1.878h.002c7.166 0 12.985-5.818 12.985-12.985 0-7.167-5.819-12.985-12.985-12.985zm0 23.472a10.463 10.463 0 0 1-5.312-1.442l-.38-.227-4.314 1.868 1.1-4.556-.247-.374a10.47 10.47 0 0 1-1.666-5.682c0-5.792 4.713-10.505 10.505-10.505 5.792 0 10.505 4.713 10.505 10.505 0 5.792-4.713 10.505-10.505 10.505zm5.688-7.864c-.309-.155-1.831-.903-2.116-1.005-.283-.103-.488-.155-.693.154-.204.309-.793 1.005-.971 1.21-.178.206-.357.231-.666.077-.309-.154-1.305-.48-2.485-1.532-.917-.814-1.537-1.823-1.716-2.132-.179-.308-.019-.474.135-.624.138-.134.309-.357.464-.535.155-.178.206-.309.309-.514.103-.205.051-.386-.026-.535-.077-.154-.693-1.666-.95-2.286-.251-.61-.504-.525-.693-.535-.179-.01-.385-.01-.59-.01s-.54.077-.823.385c-.283.308-1.08 1.056-1.08 2.574s1.106 2.984 1.261 3.191c.154.206 2.174 3.327 5.27 4.663.737.32 1.312.512 1.76.657.74.235 1.41.202 1.94.122.592-.088 1.831-.748 2.091-1.471.257-.723.257-1.343.18-1.471-.078-.129-.283-.204-.592-.358z" />
          </svg>
        </button>       
      </div>
    </div>
  );
}