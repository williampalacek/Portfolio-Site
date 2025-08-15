import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "Engineers like to solve problems. If there are no problems handily available, they will create their own problems.",
  "The fewer moving parts, the better. Exactly. No truer words were ever spoken in the context of engineering.",
  "Innovation is the calling card of the future.",
];

function EngineeringQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="font-DMMono text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
        >
          {quotes[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default EngineeringQuote;
