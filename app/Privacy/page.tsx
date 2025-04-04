

'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function PrivacyPolicyPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen relative ">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      
      {/* Enhanced background patterns with more effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-20 left-10 w-8 h-8 border-2 border-pink-400 rounded-full opacity-40"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border-2 border-pink-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-40 w-16 h-16 border-2 border-pink-400 rounded-full opacity-30"></div>
        <div className="absolute top-60 right-40 w-20 h-20 border-2 border-pink-400 rounded-full opacity-20"></div>
        
        {/* Concentric circles */}
        <div className="absolute top-80 left-20">
          <div className="w-16 h-16 border-2 border-pink-400 rounded-full opacity-20"></div>
          <div className="w-12 h-12 border-2 border-pink-400 rounded-full opacity-30 absolute top-2 left-2"></div>
          <div className="w-8 h-8 border-2 border-pink-400 rounded-full opacity-40 absolute top-4 left-4"></div>
        </div>
        
        {/* Triangles */}
        <div className="absolute bottom-20 left-20 w-10 h-10 border-pink-400 transform rotate-45 opacity-40"></div>
        <div className="absolute top-60 left-40 w-8 h-8 border-pink-400 transform rotate-45 opacity-40"></div>
        <div className="absolute top-20 right-60 w-12 h-12 border-pink-400 transform rotate-45 opacity-30"></div>
        
        {/* Lines */}
        <div className="absolute bottom-40 right-40 w-16 h-4 bg-pink-400 opacity-30"></div>
        <div className="absolute top-10 right-60 w-4 h-4 bg-pink-400 opacity-30"></div>
        <div className="absolute bottom-60 left-60 w-20 h-1 bg-pink-400 opacity-30"></div>
        <div className="absolute top-40 left-80 w-1 h-20 bg-pink-400 opacity-30"></div>
        
        {/* Zigzag pattern */}
        <div className="absolute right-10 bottom-20">
          <svg width="100" height="20" viewBox="0 0 100 20" className="opacity-30">
            <path d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10" 
                  stroke="#F472B6" fill="none" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Dots pattern */}
        <div className="absolute left-10 top-10 grid grid-cols-4 gap-4 opacity-30">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-pink-400"></div>
          ))}
        </div>
        
        {/* Plus symbols */}
        <div className="absolute right-20 top-20 opacity-30">
          <svg width="12" height="12" viewBox="0 0 12 12" className="text-pink-400">
            <path d="M5 0 V12 M0 6 H12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute left-80 bottom-40 opacity-30">
          <svg width="12" height="12" viewBox="0 0 12 12" className="text-pink-400">
            <path d="M5 0 V12 M0 6 H12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4 bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
              {/* Modal header */}
              <div className="flex items-center p-6 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium">Privacy Policy</h2>
                    <p className="text-sm text-gray-400">Updated 25 May 2025</p>
                  </div>
                </div>
                <button 
                  onClick={handleClose}
                  className="ml-auto text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Modal content with scroll indicator */}
              <div className="relative">
                <div className="absolute right-0 top-0 bottom-0 w-1">
                  <div className="w-1 h-24 bg-pink-500 rounded-full opacity-80"></div>
                </div>
                <div className="p-6 max-h-96 overflow-y-auto pr-4">
                  <div className="mb-6">
                    <h3 className="flex items-center text-lg font-medium mb-3">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      Overview
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
  Dribbble Holdings Ltd. (&quot;Dribbble&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) is 
  committed to protecting the privacy of personal information 
  (i.e. any information relating to an identified or identifiable 
  natural person) when that information is collected through our website and 
  mobile software application (collectively, the &quot;Site&quot;) 
  and the services available thereon (the &quot;Services&quot;).
  Amendments to this Privacy Policy will be posted to the Site 
  and/or Services and will be effective when posted. Your 
  continued use of the Site and/or Services following the posting 
  of any amendment to this Privacy Policy shall constitute your 
  acceptance of such amendment.
</p>

                  </div>
                  
                  <div className="mb-6">
                    <h3 className="flex items-center text-lg font-medium mb-3">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      Consent and Information Collection and Use
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      When you register as a user of our Site and Services, we ask for 
                      personal information that will be used to activate your account, 
                      provide the Services to you, communicate with you, and for other 
                      purposes set out in this Privacy Policy. During the registration 
                      process, we may request additional information that will help us 
                      learn more about your use of the platform.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="flex items-center text-lg font-medium mb-3">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      How We Use Your Information
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We use the information we collect from you to provide our Services, 
                      to maintain and improve our Site, to develop new services, and to 
                      communicate with you. We may use your information to send you 
                      notifications about your account, updates to our Site, or other 
                      promotional content, subject to your communication preferences.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Modal footer */}
              <div className="p-6 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={handleClose}
                  className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors shadow-md"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Page content when modal is closed */}
        {!isModalOpen && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Welcome to Our Platform</h1>
            <p>Your privacy is important to us. You&apos;ve accepted our privacy policy.</p>

            <div className="mt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-pink-600 transition-colors text-sm"
              >
                View Privacy Policy Again
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer component properly positioned at bottom */}
      
      <div className="mt-auto">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <Footer />
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;