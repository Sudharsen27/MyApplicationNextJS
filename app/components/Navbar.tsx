'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeItem, setActiveItem] = useState('Home');
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Check system preference for dark mode on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
      
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
      }
      
      // Check for stored preference
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setIsDarkMode(storedTheme === 'dark');
        if (storedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }
  }, []);

  // Improved scroll detection with better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only hide navbar after scrolling down a certain amount
          if (window.scrollY > 100) {
            setIsScrolled(window.scrollY > lastScrollY);
          } else {
            setIsScrolled(false);
          }
          
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Enhanced Dark Mode Toggle with localStorage persistence
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Features', path: '/Features' },
    { name: 'Blogs', path: '/Blogs' },
    { name: 'Contact', path: '/Contact' }
  ];

  // Handle nav item click
  const handleNavItemClick = (name: string) => {
    setActiveItem(name);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Determine if a menu item is active
  const isActive = (path: string) => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === path || activeItem === path.replace('/', '');
    }
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 
        'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md py-2 transform -translate-y-full' : 
        'bg-transparent dark:bg-gray-900/50 backdrop-blur-sm py-4 transform translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo with Floating Effect */}
          <Link href="/" className="font-bold text-2xl text-gray-900 dark:text-white font-sans">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <span className="text-3xl">🌟</span>
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-bold">
                Logo
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              >
                <Link 
                  href={item.path} 
                  onClick={() => handleNavItemClick(item.name)}
                  className={`relative px-3 py-2 rounded-md text-sm lg:text-base font-medium group transition-all
                    ${isActive(item.path) ? 
                      'text-pink-600 dark:text-pink-400' : 
                      'text-gray-700 hover:text-pink-600 dark:text-gray-200 dark:hover:text-pink-400'
                    }`}
                >
                  {item.name}
                  <motion.span
                    className={`absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full
                      ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'} transition-all duration-300`}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="ml-2"
            >
              <Link href="/signup" className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 px-4 py-2 rounded-lg text-white font-medium text-sm shadow-md hover:shadow-lg transition-all">
                Get Started
              </Link>
            </motion.div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-white dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-white dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden mt-4 bg-white dark:bg-gray-900 backdrop-blur-md shadow-xl rounded-xl overflow-hidden absolute left-4 right-4"
              style={{ transformOrigin: 'top' }}
            >
              <div className="py-3 px-4">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => handleNavItemClick(item.name)}
                      className={`flex items-center py-3 px-2 rounded-lg my-1
                        ${isActive(item.path) ? 
                          'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 font-medium' : 
                          'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                        } transition-colors`}
                    >
                      <span className="ml-2 text-base font-medium">{item.name}</span>
                      {isActive(item.path) && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link 
                    href="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 py-3 px-4 rounded-lg text-white font-medium text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}