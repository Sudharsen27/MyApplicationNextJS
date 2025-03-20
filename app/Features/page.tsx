'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FeatureComponent() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
    
    // Refresh AOS on window resize
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
    
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="container mx-auto py-12 overflow-hidden">
      <h1 
        className="text-4xl font-bold text-center mb-12 text-amber-300"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        PRODUCT BLOCKS
      </h1>
      
      {/* Feature One */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div 
          className="md:w-1/2 p-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img 
            src="/Images/20jan4.jpg" 
            alt="Feature One Illustration" 
            className="max-w-xs mx-auto hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div 
          className="md:w-1/2 p-4"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="text-xl font-semibold mb-4 text-white">Feature One</h2>
          <br />
          <p className="text-gray-600 mb-4">
            Far far away, behind the word mountains, far from the countries Vivalda and Consolidates, 
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the 
            Semantics, a large language ocean.
          </p>
          <a href="#" className="text-blue-500 text-sm inline-block hover:translate-x-2 transition-transform duration-300">Learn More »</a>
        </div>
      </div>
      
      {/* Feature Two */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-16">
        <div 
          className="md:w-1/2 p-4"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img 
            src="/Images/bottle.jpg" 
            alt="Feature Two Illustration" 
            className="max-w-xs mx-auto hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div 
          className="md:w-1/2 p-4"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2 className="text-xl font-semibold mb-2 text-white">Feature Two</h2>
          <br />
          <p className="text-gray-600 mb-4">
            Even the all-powerful Pointing has no control about the blind texts it is an almost 
            unorthographic life One day however a small line of blind text by the name of Lorem 
            Ipsum decided to leave for the far World of Grammar.
          </p>
          <a href="#" className="text-blue-500 text-sm inline-block hover:translate-x-2 transition-transform duration-300">Learn More »</a>
        </div>
      </div>
      
      {/* Feature Three */}
      <div className="flex flex-col md:flex-row items-center">
        <div 
          className="md:w-1/2 p-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img 
            src="/Images/chair.jpg" 
            alt="Feature Three Illustration" 
            className="max-w-xs mx-auto hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div 
          className="md:w-1/2 p-4"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="text-xl font-semibold mb-2 text-white">Feature Three</h2>
          <br />
          <p className="text-gray-600 mb-4">
            On her way she met a copy. The copy warned the Little Blind Text, that where it 
            came from it would have been rewritten a thousand times and everything that was left 
            from its origin would be the word "and" and the Little Blind Text should turn around.
          </p>
          <a href="#" className="text-blue-500 text-sm inline-block hover:translate-x-2 transition-transform duration-300">Learn More »</a>
        </div>
      </div>
    </div>
  );
}