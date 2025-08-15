import React, { useState, useEffect } from 'react';
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: 'Engineers like to solve problems. If there are no problems handily available, they will create their own problems.',
    author: 'Scott Adams',
  },
  {
    text: 'The fewer moving parts, the better. Exactly. No truer words were ever spoken in the context of engineering.',
    author: 'Christian Cantrell',
  },
  { text: 'Innovation is the calling card of the future.', author: 'Anna Eshoo' },
  { text: 'Scientists dream about doing great things. Engineers do them.', author: 'James A. Michener' },
  {
    text: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
    author: 'Antoine de Saint-Exup\u00e9ry',
  },
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (process.env.NODE_ENV === 'test') return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="flex-1 z-10">
        <Header />
      </div>
      <div className="flex-1 z-10 font-DMMono md:text-lg text-sm">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p>“{quotes[index].text}”</p>
            <cite className="block mt-2 text-right">— {quotes[index].author}</cite>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute -top-10 -left-10 w-72 h-72 md:w-[32rem] md:h-[32rem] text-sea_blue opacity-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      >
        <path
          fill="currentColor"
          d="M94 56.5v-13l-8-4a36 36 0 00-2-4l4-8-9-9-8 4a36 36 0 00-4-2l-4-8h-13l-4 8a36 36 0 00-4 2l-8-4-9 9 4 8a36 36 0 00-2 4l-8 4v13l8 4a36 36 0 002 4l-4 8 9 9 8-4a36 36 0 004 2l4 8h13l4-8a36 36 0 004-2l8 4 9-9-4-8a36 36 0 002-4l8-4zM50 63a13 13 0 1113-13 13 13 0 01-13 13z"
        />
      </motion.svg>
    </section>
  );
}

export default HeroSection;
