'use client';

import React, { JSX, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function TermsOfServicePage() {
  const [emailSent, setEmailSent] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const [showAgreementPopup, setShowAgreementPopup] = useState(false);
  
  const handleSendEmail = () => {
    // In a real application, you would handle the email sending logic here
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  const handleAgree = () => {
    setShowAgreementPopup(true);
  };

  const closePopup = () => {
    setShowAgreementPopup(false);
  };

  // Content for each section
  const sectionContent: Record<number, { title: string; content: JSX.Element }> = {
    1: {
      title: "General Terms and Conditions",
      content: (
        <>
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Summary:</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
              erat, sed diam voluptua.
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p>
              But I must explain to you how all this mistaken idea of denouncing 
              pleasure and praising pain was born and I will give you a complete 
              account of the system, and expound the actual teachings of the great 
              explorer of the truth, the master-builder of.
            </p>
            
            <p>
              human happiness. No one rejects, dislikes, or avoids pleasure itself, 
              because it is pleasure, but because those who do not know how to 
              pursue pleasure rationally encounter consequences that are extremely 
              painful. Nor again is there anyone who loves or pursues or desires to 
              obtain pain of itself, because it is pain.
            </p>
            
            <p>
              but because occasionally circumstances occur in which toil and pain 
              can procure him some great pleasure. To take a trivial example, which 
              of us ever undertakes laborious physical exercise, except to obtain 
              some advantage from it? But who has any right to find fault with a man.
            </p>
          </div>
        </>
      )
    },
    2: {
      title: "Acceptable Use Policy",
      content: (
        <>
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Acceptable Use Policy:</h2>
            <p className="text-gray-600 mb-4">
              This Acceptable Use Policy outlines the guidelines for proper use of our services and platform.
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Users are prohibited from using our platform to distribute, share, or store content that:
              (a) is illegal under applicable laws; (b) infringes on intellectual property rights;
              (c) contains malicious software or code; (d) is harmful, threatening, or harassing to others.
            </p>
            
            <p>
              The platform may not be used to: (a) impersonate other individuals; (b) attempt to gain 
              unauthorized access to other accounts or systems; (c) conduct automated scanning or scraping 
              without prior written permission; (d) interfere with the proper functioning of the service.
            </p>
            
            <p>
              We reserve the right to suspend or terminate access for users who violate these policies. 
              Our team reviews reported violations and will take appropriate action, which may include 
              content removal, suspension, or account termination.
            </p>
          </div>
        </>
      )
    },
    3: {
      title: "Cancellation Policy",
      content: (
        <>
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Cancellation Policy:</h2>
            <p className="text-gray-600 mb-4">
              Our cancellation policy is designed to be fair and transparent for all users.
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p>
              For subscription-based services, users may cancel their subscription at any time. 
              Cancellations will take effect at the end of the current billing cycle. No partial 
              refunds will be issued for the remaining days in the billing period.
            </p>
            
            <p>
              For one-time purchases, users may request a refund within 14 days of purchase if the 
              service has not been substantially used or downloaded. After this period, or if the 
              service has been substantially accessed, refunds will be considered on a case-by-case basis.
            </p>
            
            <p>
              To cancel a subscription or request a refund, users must contact our support team through 
              the designated channels provided in the account dashboard. Processing of cancellations and 
              refunds may take up to 5-7 business days to complete.
            </p>
          </div>
        </>
      )
    },
    4: {
      title: "Privacy Policy",
      content: (
        <>
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Privacy Policy:</h2>
            <p className="text-gray-600 mb-4">
              Our Privacy Policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p>
              We collect information you provide directly, such as during account creation or when using 
              our services. We also collect certain information automatically, including usage data and 
              device information. This data helps us improve our services and provide a better user experience.
            </p>
            
            <p>
              Your personal information is used to provide and improve our services, communicate important 
              updates, and ensure platform security. We implement industry-standard security measures to 
              protect your data from unauthorized access or disclosure.
            </p>
            
            <p>
              We do not sell your personal information to third parties. We may share limited information 
              with service providers who assist in operating our platform, but only as necessary to provide 
              our services to you. You have the right to access, modify, or delete your personal information 
              at any time through your account settings.
            </p>
          </div>
        </>
      )
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 pt-16">
          <h1 className="text-2xl font-medium text-white">Terms of Service</h1>
          <span className="text-sm text-white">Last Updated Mar 29, 2025</span>
        </div>
        
        {/* Main content area */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm">
          {/* Sidebar - Table of Contents */}
          <div className="w-full md:w-1/4 border-r border-gray-200">
            <ul className="py-4">
              {[1, 2, 3, 4].map((section) => (
                <li 
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`cursor-pointer border-l-4 ${
                    activeSection === section 
                      ? 'border-yellow-500 font-medium text-yellow-600' 
                      : 'border-transparent hover:border-blue-200 text-gray-600 hover:text-gray-800'
                  } pl-4 py-3 transition-colors`}
                >
                  {section}. {sectionContent[section].title}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Main content */}
          <div className="w-full md:w-3/4 p-6">
            {sectionContent[activeSection].content}
          </div>
        </div>
        
        {/* Bottom action bar */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
          <button 
            onClick={handleSendEmail}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send a copy on my email
            {emailSent && <span className="ml-2 text-green-500 text-sm">Sent!</span>}
          </button>
          
          <div className="flex space-x-3">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
              Decline
            </button>
            <button 
              onClick={handleAgree}
              className="px-4 py-2 bg-yellow-400 text-white  rounded transition-colors"
            >
              Agree and Continue
            </button>
          </div>
        </div>
      </div>
      
      {/* Agreement confirmation popup */}
      {showAgreementPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Terms Accepted</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Thank you for accepting our Terms of Service. You can now continue using our platform with full access to all features.
            </p>
            <div className="flex justify-end">
              <button 
                onClick={closePopup}
                className="px-4 py-2 bg-yellow-400 text-white  rounded transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default TermsOfServicePage;