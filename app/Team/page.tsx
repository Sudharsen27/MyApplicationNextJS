'use client';

import React from 'react';
import Image from 'next/image'; // Now we will use it
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Lindsay Smith',
      title: 'Founder & CEO',
      image: '/Teammember/cabrera-lindsay.jpg',
    },
    {
      id: 2,
      name: 'Rene Thomas',
      title: 'Partner & Executive Creative Director',
      image: '/Teammember/Rene van Zeijl(1).jpg',
    },
    {
      id: 3,
      name: 'James Voth',
      title: 'CTO',
      image: '/Teammember/Voth_Gregory_600x600.jpg',
    },
    {
      id: 4,
      name: 'Prem Sri Ramani',
      title: 'VP, Strategy',
      image: '/Teammember/f5ec2313-6f7c-4679-8dcc-deb1b4c19f6b.png',
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation */}
      <Navbar />
      <br />
      <br />

      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-8 pb-16">
        <section className="mb-16">
          <h1 className="text-6xl md:text-6xl font-bold mb-6 text-yellow-400">Who we are</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            We are a curated team of international experts united by a single goal: to create category-
            defining brands and digital experiences that make an impact, shape culture, and connect people.
          </p>
        </section>

        {/* Team Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-neutral-500 overflow-hidden relative">
              <div className="aspect-square w-full overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-medium text-white">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.title}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default TeamPage;
