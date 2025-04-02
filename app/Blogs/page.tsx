'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Search, Clock, BookOpen } from 'lucide-react';
import Footer from '../components/Footer';
import Image from "next/image";

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Simulate content loading with modern loading strategy
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const filters = ['all', 'development', 'design', 'technology'];

  const blogPosts = [
    {
      id: 1,
      title: "Modern Web Development Practices",
      description: "Explore the latest trends and best practices in modern web development.",
      image: "Images/Modern-Application-Development-Best-Practices.png",
      category: "development",
      readTime: 5,
      date: "Apr 1, 2025"
    },
    {
      id: 2,
      title: "Responsive Design Strategies",
      description: "Learn how to create truly responsive designs that work on any device.",
      image: "Images/Responsive-Web-Design.png",
      category: "design",
      readTime: 7,
      date: "Mar 28, 2025"
    },
    {
      id: 3,
      title: "Performance Optimization Techniques",
      description: "Tips and tricks to make your web applications lightning fast.",
      image: "Images/Iap-hero-Image-1.png",
      category: "technology",
      readTime: 4,
      date: "Mar 25, 2025"
    },
    {
      id: 4,
      title: "AI in Modern Web Applications",
      description: "How artificial intelligence is transforming the web development landscape.",
      image: "Images/ai.jpg",
      category: "technology",
      readTime: 6,
      date: "Mar 22, 2025"
    },
    {
      id: 5,
      title: "Design Systems for Scale",
      description: "Building maintainable design systems for enterprise applications.",
      image: "Images/figma-design-systems.png",
      category: "design",
      readTime: 8,
      date: "Mar 20, 2025"
    },
    {
      id: 6,
      title: "Next.js 14 Key Features",
      description: "Exploring the latest innovations in the Next.js framework.",
      image: "Images/next-1024x576.webp",
      category: "development",
      readTime: 5,
      date: "Mar 18, 2025"
    }
  ];

  // Filter blog posts based on active filter and search term
  const filteredPosts = blogPosts
    .filter(post => activeFilter === 'all' || post.category === activeFilter)
    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   post.description.toLowerCase().includes(searchTerm.toLowerCase()));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Parallax Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-2xl mb-16 h-64 md:h-80 lg:h-96"
          style={{
            backgroundImage: 'url("/Images/blog.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 flex flex-col justify-center p-8 md:p-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              <span className="text-amber-500">Insights</span> & Ideas
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-lg">
              Discover the latest trends, strategies and innovations in web development 
              and digital design.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center w-fit transition-all"
            >
              Explore Articles
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Search and Filter Interface */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-auto md:min-w-[320px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
            </div>
            
            {/* Filter Tabs */}
            <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full capitalize whitespace-nowrap transition-all ${
                    activeFilter === filter
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post with Card Tilt Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
          whileHover={{ scale: 1.02 }}
          style={{ perspective: 1000 }}
        >
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2">
                <div className="h-64 md:h-full relative">
                <Image 
  src="/Images/thumbnail-future-web-dev-ti.png" 
  alt="Featured post" 
  width={500}   // Adjust width as needed
  height={300}  // Adjust height as needed
  className="w-full h-full object-cover"
/>

                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-amber-400 text-sm font-semibold">LATEST POST</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Apr 2, 2025
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  The Future of Web Development in 2025
                </h2>
                <p className="text-gray-300 mb-6">
                  Dive into our comprehensive analysis of where web development is headed, 
                  including AI integration, serverless architectures, and more immersive user experiences.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center text-amber-500 font-semibold group hover:underline">
                    Read the full article 
                    <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <div className="flex items-center text-gray-400 text-sm">
                    <BookOpen className="w-4 h-4 mr-1" />
                    8 min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid with Masonry Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="mb-16"
          >
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {/* <div className="relative">
                    <Image 
  src={post.image} 
  alt={post.title} 
  width={500}  // Adjust based on your requirement
  height={192} // Adjust based on your requirement
  className="w-full h-48 object-cover"
  loading="lazy"
/>

                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                      <div className="absolute top-4 right-4 bg-gray-900/80 text-white px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </div>
                    </div> */}
                    <div className="relative">
  {post.image ? (
    <Image
      src={post.image.startsWith("http") ? post.image : `/${post.image}`} // Ensure proper URL format
      alt={post.title}
      width={500}  // Adjust width as needed
      height={192} // Adjust height as needed
      className="w-full h-48 object-cover rounded-lg"
      loading="lazy"
    />
  ) : (
    <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-white">
      No Image Available
    </div>
  )}

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

  {/* Category Badge */}
  {post.category && (
    <div className="absolute top-4 right-4 bg-gray-900/80 text-white px-2 py-1 rounded text-xs font-medium">
      {post.category}
    </div>
  )}
</div>

                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                      <p className="text-gray-400 mb-4">{post.description}</p>
                      <div className="flex justify-between items-center">
                        <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 text-sm font-medium">
                          Read More
                        </button>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime} min read
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl text-gray-400">No articles found matching your criteria</h3>
                <button 
                  onClick={() => {setActiveFilter('all'); setSearchTerm('');}} 
                  className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Reset filters
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter Section with Modern Design */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 md:p-10 border border-gray-700 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl opacity-10 -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500 rounded-full filter blur-3xl opacity-10 -ml-20 -mb-20" />
          
          <div className="md:flex items-center justify-between relative z-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Updated</h2>
              <p className="text-gray-300">Subscribe to our newsletter to get the latest articles and updates.</p>
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg flex-grow bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="px-6 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.section>
       
      </main>
      <br></br>
      <Footer />

      {/* Loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50"
          >
            <div className="text-amber-500 flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-t-amber-500 border-gray-700 rounded-full animate-spin mb-4"></div>
              <p>Loading amazing content...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}