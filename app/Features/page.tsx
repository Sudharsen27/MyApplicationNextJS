'use client'
import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FeatureComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const parallaxRef = useRef(null);
  
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
    
    // Handle scroll for parallax and other custom effects
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      AOS.refresh();
    };
    
    // Handle resize
    const handleResize = () => {
      AOS.refresh();
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initialize GSAP-like stagger effect manually
    const staggerElements = document.querySelectorAll('.stagger-item');
staggerElements.forEach((el, index) => {
  // Cast the element to HTMLElement
  (el as HTMLElement).style.transitionDelay = `${index * 0.15}s`;
});
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto py-12 overflow-hidden">
      {/* Floating particles background effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-amber-300 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 5}px`,
              height: `${Math.random() * 30 + 5}px`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateY(${scrollPosition * 0.1 * (i % 3 - 1)}px)`,
            }}
          />
        ))}
      </div>
      
      <div 
        ref={parallaxRef}
        className="relative z-10"
        style={{
          transform: `translateY(${scrollPosition * 0.05}px)`,
        }}
      >
        <h1 
          className="text-4xl font-bold text-center mb-12 text-amber-300 relative"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <span className="inline-block animate-pulse">P</span>
          <span className="inline-block stagger-item hover:animate-bounce">R</span>
          <span className="inline-block stagger-item hover:animate-bounce">O</span>
          <span className="inline-block stagger-item hover:animate-bounce">D</span>
          <span className="inline-block stagger-item hover:animate-bounce">U</span>
          <span className="inline-block stagger-item hover:animate-bounce">C</span>
          <span className="inline-block stagger-item hover:animate-bounce">T</span>
          <span className="inline-block mx-2"></span>
          <span className="inline-block stagger-item hover:animate-bounce">B</span>
          <span className="inline-block stagger-item hover:animate-bounce">L</span>
          <span className="inline-block stagger-item hover:animate-bounce">O</span>
          <span className="inline-block stagger-item hover:animate-bounce">C</span>
          <span className="inline-block stagger-item hover:animate-bounce">K</span>
          <span className="inline-block stagger-item hover:animate-bounce">S</span>
        </h1>
      </div>
      
      {/* Feature One */}
      <div className="flex flex-col md:flex-row items-center mb-16 relative">
        {/* Animated background shape */}
        <div className="absolute -z-10 w-1/2 h-1/2 rounded-full bg-blue-500 opacity-5 blur-3xl"
          style={{
            transform: `translate(${Math.sin(scrollPosition * 0.002) * 20}px, ${Math.cos(scrollPosition * 0.002) * 20}px)`,
          }}
        ></div>
        
        <div 
          className="md:w-1/2 p-4 group"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="overflow-hidden rounded-lg">
            {/* <img 
              src="/Images/20jan4.jpg" 
              alt="Feature One Illustration" 
              className="max-w-xs mx-auto transform hover:scale-110 transition-transform duration-700 ease-in-out" 
            /> */}
          </div>
          <div className="w-24 h-1 bg-amber-300 mt-4 mx-auto transform origin-left transition-all duration-500 group-hover:w-full"></div>
        </div>
        <div 
          className="md:w-1/2 p-4"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="text-xl font-semibold mb-4 text-white relative overflow-hidden group">
            Feature One
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </h2>
          <br />
          <p className="text-gray-600 mb-4 transition-all duration-300 hover:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vivalda and Consolidates, 
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the 
            Semantics, a large language ocean.
          </p>
          <a href="#" className="text-blue-500 text-sm relative overflow-hidden group inline-flex items-center">
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">Learn More</span>
            <span className="ml-1 transform transition-transform duration-500 group-hover:translate-x-1">»</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
      
      {/* Feature Two */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-16 sticky top-20 z-10">
        {/* Animated background shape */}
        <div className="absolute -z-10 right-0 w-1/2 h-1/2 rounded-full bg-amber-500 opacity-5 blur-3xl"
          style={{
            transform: `translate(${Math.cos(scrollPosition * 0.002) * 20}px, ${Math.sin(scrollPosition * 0.002) * 20}px)`,
          }}
        ></div>
        
        <div 
          className="md:w-1/2 p-4 group"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="overflow-hidden rounded-lg perspective">
          <img 
  src="/Images/bottle.jpg" 
  alt="Feature Three Illustration" 
  className="max-w-xs mx-auto transition-all duration-700 ease-in-out" 
  style={{ 
    transition: 'all 700ms ease-in-out' 
  }}
  onMouseOver={(e) => e.currentTarget.style.filter = 'saturate(1.5) brightness(1.1)'}
  onMouseOut={(e) => e.currentTarget.style.filter = 'none'}
/>
          </div>
          <div className="w-24 h-1 bg-amber-300 mt-4 mx-auto transform origin-left transition-all duration-500 group-hover:w-full"></div>
        </div>
        <div 
          className="md:w-1/2 p-4 transform"
          data-aos="fade-right"
          data-aos-delay="300"
          style={{
            transform: `translateY(${scrollPosition * 0.03}px)`,
          }}
        >
          <h2 className="text-xl font-semibold mb-2 text-white relative overflow-hidden group">
            Feature Two
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </h2>
          <br />
          <p className="text-gray-600 mb-4 transition-all duration-300 hover:text-gray-400">
            Even the all-powerful Pointing has no control about the blind texts it is an almost 
            unorthographic life One day however a small line of blind text by the name of Lorem 
            Ipsum decided to leave for the far World of Grammar.
          </p>
          <a href="#" className="text-blue-500 text-sm relative overflow-hidden group inline-flex items-center">
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">Learn More</span>
            <span className="ml-1 transform transition-transform duration-500 group-hover:translate-x-1">»</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
      
      {/* Feature Three */}
      <div className="flex flex-col md:flex-row items-center relative">
        {/* Animated background shape */}
        <div className="absolute -z-10 left-1/4 w-1/2 h-1/2 rounded-full bg-green-500 opacity-5 blur-3xl"
          style={{
            transform: `translate(${Math.sin(scrollPosition * 0.003) * 20}px, ${Math.cos(scrollPosition * 0.003) * 20}px)`,
          }}
        ></div>
        
        <div 
          className="md:w-1/2 p-4 group"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="overflow-hidden rounded-lg">
          <img 
  src="/Images/chair.jpg" 
  alt="Feature Three Illustration" 
  className="max-w-xs mx-auto transition-all duration-700 ease-in-out" 
  style={{ 
    transition: 'all 700ms ease-in-out' 
  }}
  onMouseOver={(e) => e.currentTarget.style.filter = 'saturate(1.5) brightness(1.1)'}
  onMouseOut={(e) => e.currentTarget.style.filter = 'none'}
/>
          </div>
          <div className="w-24 h-1 bg-amber-300 mt-4 mx-auto transform origin-left transition-all duration-500 group-hover:w-full"></div>
        </div>
        {/* <div 
          className="md:w-1/2 p-4"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="text-xl font-semibold mb-2 text-white relative overflow-hidden group">
            Feature Three
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </h2>
          <br />
          <p className="text-gray-600 mb-4 transition-all duration-300 hover:text-gray-400">
            On her way she met a copy. The copy warned the Little Blind Text, that where it 
            came from it would have been rewritten a thousand times and everything that was left 
            from its origin would be the word "and" and the Little Blind Text should turn around.
          </p>
          <a href="#" className="text-blue-500 text-sm relative overflow-hidden group inline-flex items-center">
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">Learn More</span>
            <span className="ml-1 transform transition-transform duration-500 group-hover:translate-x-1">»</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div> */}
      </div>
    </div>
  );
}