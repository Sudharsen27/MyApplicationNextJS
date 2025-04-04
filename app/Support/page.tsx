
'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BarChart3, PieChart, FileText, CheckSquare,  } from 'lucide-react';

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <br></br>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="text-white mb-2 ">Welcome to our site</p>
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">live support</h1>
              <h2 className="text-2xl md:text-3xl text-yellow-500 mb-6">Company website</h2>
              <p className="text-white mb-10">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
              </p>
              
              {/* Feature Icons */}
              <div className="grid grid-cols-4 gap-4 max-w-md">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 p-3 rounded-md mb-2">
                    <BarChart3 className="text-gray-500" size={24} />
                  </div>
                  <span className="text-gray-500 text-xs uppercase">Option</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 p-3 rounded-md mb-2">
                    <PieChart className="text-gray-500" size={24} />
                  </div>
                  <span className="text-gray-500 text-xs uppercase">Option</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 p-3 rounded-md mb-2">
                    <FileText className="text-gray-500" size={24} />
                  </div>
                  <span className="text-gray-500 text-xs uppercase">Option</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 p-3 rounded-md mb-2">
                    <CheckSquare className="text-gray-500" size={24} />
                  </div>
                  <span className="text-gray-500 text-xs uppercase">Option</span>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="bg-yellow-500 w-64 h-64 md:w-80 md:h-80 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-white font-bold">
                    <span className="text-6xl md:text-7xl">24</span>
                    <span className="text-6xl md:text-7xl">/</span>
                    <span className="text-5xl md:text-6xl">7</span>
                  </div>
                  
                  {/* Headset illustration */}
                  <div className="absolute -right-8 top-1/4">
                    <div className="w-32 h-32 border-8 border-gray-700 rounded-full"></div>
                    <div className="absolute top-0 right-6 w-6 h-16 bg-gray-700 rounded-t-full"></div>
                    <div className="absolute bottom-0 right-6 w-12 h-24 bg-gray-700 rounded-b-full"></div>
                    <div className="absolute bottom-4 right-16 w-12 h-4 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
                
                {/* Navigation Dots */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Scroll Down Indicator */}
        
      </main>
      <Footer />
    </div>
  );
}

export default Page;
