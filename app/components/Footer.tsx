'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const [, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check dark mode on mount and from navbar changes
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    
    // Listen for scroll to show/hide scroll-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Footer links structure matching your navbar
  const footerLinks = {
    company: [
      { name: 'About', path: '/About' },
      { name: 'Careers', path: '/Careers' },
      { name: 'Team', path: '/Team' },
      { name: 'Contact', path: '/Contact' }
    ],
    resources: [
      { name: 'Blogs', path: '/Blogs' },
      { name: 'Features', path: '/Features' },
      { name: 'Documentation', path: '/Docs' },
      { name: 'Support', path: '/Support' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/Privacy' },
      { name: 'Terms of Service', path: '/Terms' },
      { name: 'Cookies', path: '/Cookies' }
    ],
    social: [
      { name: 'Twitter', icon: 'X', url: 'https://twitter.com' },
      { name: 'Instagram', icon: 'IG', url: 'https://instagram.com' },
      { name: 'LinkedIn', icon: 'IN', url: 'https://www.linkedin.com/in/sundar-lingam-8407a5221/' },
      { name: 'GitHub', icon: 'GH', url: 'https://github.com/Sudharsen27' }
    ]
  };

  // Social icon components for a cleaner look
  const SocialIcon = ({ name }: { name: string }) => {
    switch (name) {
      case 'X':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'IG':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case 'IN':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case 'GH':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gradient-to-r bg-black dark:from-gray-900 dark:to-black text-white">
      {/* Scroll To Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg z-50 transition-all"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Newsletter Section */}
      {/* <div className="bg-black/20 dark:bg-white/5 backdrop-blur-sm">
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
      </div> */}
   
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center mb-4">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-3xl font-bold"
                >
                  🌟 Logo
                </motion.span>
              </Link>
              {/* <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
                We're dedicated to creating exceptional digital experiences that make a difference. Our innovative solutions are designed to help businesses thrive in the digital world.
              </p> */}
              <div className="flex space-x-4">
                {footerLinks.social.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    aria-label={social.name}
                  >
                    <SocialIcon name={social.icon} />
                  </motion.a>
                  
                ))}
              </div>
              
              
            </motion.div>
          </div>

          {/* Links Columns */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-lg mb-4"
            >
              Company
            </motion.h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link 
                    href={link.path}
                    className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 h-[1px] bg-gradient-to-r from-pink-500 to-blue-500 w-0 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-lg mb-4"
            >
              Resources
            </motion.h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link 
                    href={link.path}
                    className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 h-[1px] bg-gradient-to-r from-pink-500 to-blue-500 w-0 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-lg mb-4"
            >
              Legal
            </motion.h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link 
                    href={link.path}
                    className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 h-[1px] bg-gradient-to-r from-pink-500 to-blue-500 w-0 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-gray-400"
            >
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-6 text-sm text-gray-400"
            >
              <Link href="/Privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/Terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/Sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}