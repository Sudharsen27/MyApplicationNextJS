'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, BookOpen, BarChart2, User, Shield, Database, ExternalLink, Menu, X } from 'lucide-react';

function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block bg-yellow-400 md:w-80 fixed inset-y-0 z-50 md:z-auto overflow-y-auto`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="text-2xl font-bold">scale</div>
              <button onClick={toggleMobileMenu} className="md:hidden">
                <X size={24} />
              </button>
            </div>
            
            <nav className="space-y-6">
              <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600 cursor-pointer py-3">
                <Home className="mr-4 text-orange-400" size={24} />
                <span className="font-medium">Home</span>
              </Link>

              <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600 cursor-pointer py-3">
                <BookOpen className="mr-4 text-pink-400" size={24} />
                <span className="font-medium">Getting Started with Scale</span>
              </Link>

              <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600 cursor-pointer py-3">
                <BarChart2 className="mr-4 text-purple-400" size={24} />
                <span className="font-medium">Customer Dashboard</span>
              </Link>

              <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600 cursor-pointer py-3">
                <User className="mr-4 text-purple-400" size={24} />
                <span className="font-medium">Get Support</span>
              </Link>

              <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600 cursor-pointer py-3">
                <Shield className="mr-4 text-purple-400" size={24} />
                <span className="font-medium">Data Hosting</span>
              </Link>

              <Link href="/" className="flex items-center text-gray-700 hover:text-purple-600 cursor-pointer py-3">
                <Database className="mr-4 text-purple-400" size={24} />
                <span className="font-medium">API Reference</span>
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 md:ml-80">
          <div className="md:hidden bg-white border-b border-gray-200 p-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">scale</div>
              <button onClick={toggleMobileMenu}>
                <Menu size={24} />
              </button>
            </div>
          </div>

          <div className="p-6 md:p-12">
            {/* Search and account area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              {/*  */}
              
            
            </div>

            {/* Main documentation content */}
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold mb-6 text-white">Documentation</h1>
                <p className="text-white text-lg mb-12">
                  Guides and quickstarts for integrating Scale products.
                </p>

                <div className="text-white leading-relaxed space-y-6">
                <p>
  Scale AI&apos;s mission is to accelerate the development of AI applications. To enable teams to make faster
  progress, we began with data—the foundation of all AI applications. Scale AI turns raw data into high-
  quality training data by combining machine learning-powered pre-labeling and active tooling with
  varying levels and types of human review.
</p>


                  <p>
                    Our platform provides access to advanced annotation and data curation tools, enabling businesses to
                    streamline AI training workflows. Whether you are working with computer vision, natural language processing,
                    or speech recognition, Scale AI has a suite of services designed to support your needs.
                  </p>

                  <p>
                    Scale’s infrastructure is built for scalability, security, and accuracy. With enterprise-grade
                    compliance, seamless API integrations, and automated workflows, Scale AI helps developers and data
                    scientists focus on building better AI models rather than managing data annotation complexities.
                  </p>

                  <p>
                    Ready to get started? Follow our <Link href="/getting-started" className="text-purple-600 font-semibold">Getting Started guide</Link> to explore how Scale can power your AI applications today.
                  </p>
                </div>
              </div>

              {/* Decorative shapes */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="flex flex-wrap justify-center items-center w-64 h-64">
                    <div className="w-16 h-16 bg-purple-500 rounded-md transform rotate-45 opacity-80 absolute top-8 left-8"></div>
                    <div className="w-12 h-12 bg-pink-400 rounded-md transform rotate-12 opacity-80 absolute top-16 right-8"></div>
                    <div className="w-14 h-14 bg-orange-400 rounded-md transform -rotate-12 opacity-80 absolute bottom-16 right-12"></div>
                    <div className="w-16 h-16 bg-purple-600 rounded-md transform rotate-12 opacity-80 absolute bottom-8 left-16"></div>
                    <div className="w-10 h-10 bg-pink-300 rounded-md transform rotate-45 opacity-80 absolute top-32 left-24"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>    
  );
}

export default Page;
