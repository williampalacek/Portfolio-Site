import { useState } from 'react';
import { motion } from 'framer-motion';

const facts = [
  'The Eiffel Tower can be 15 cm taller on a hot day due to thermal expansion.',
  'NASA\'s Saturn V remains the most powerful rocket ever built.',
  'The first mechanical computer, the Analytical Engine, was designed in the 1830s.',
  'Wind turbines can reach the height of a 20-story building.',
  'The International Space Station travels at roughly 7.66 km per second.'
];

function EngineeringTrivia({ className = '' }) {
  const [index, setIndex] = useState(0);

  function nextFact() {
    setIndex((index + 1) % facts.length);
  }

  return (
    <div className={`text-center ${className}`}>
      <motion.div
        className="mx-auto mb-4 h-12 w-12"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      >
        <span role="img" aria-label="gear" className="text-3xl">⚙️</span>
      </motion.div>
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg font-medium"
      >
        {facts[index]}
      </motion.p>
      <button
        onClick={nextFact}
        className="mt-4 rounded bg-blue-600 px-4 py-2 font-DMMono text-white"
      >
        Tell me more
      </button>
    </div>
  );
}

export default EngineeringTrivia;
