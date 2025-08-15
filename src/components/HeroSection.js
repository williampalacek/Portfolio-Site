import React from 'react';
import Header from './Header';
import EngineeringQuote from './EngineeringQuote';

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <div className="mt-8">
        <EngineeringQuote />
      </div>
    </section>
  );
}

export default HeroSection;
