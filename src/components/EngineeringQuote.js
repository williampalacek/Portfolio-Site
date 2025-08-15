import React, { useState, useEffect } from 'react';

const quotes = [
  'Engineers like to solve problems. If there are no problems handily available, they will create their own problems.',
  'The fewer moving parts, the better. Exactly. No truer words were ever spoken in the context of engineering.',
  'Innovation is the calling card of the future.',
];

function EngineeringQuote() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = quotes[quoteIndex];
    let timeout;
    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        if (displayed === '') {
          setIsDeleting(false);
          setQuoteIndex((quoteIndex + 1) % quotes.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed === current) {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, quoteIndex]);

  return (
    <p className="font-DMMono text-sm min-h-[24px]">
      {displayed}
      <span className="border-r-2 border-white animate-pulse ml-1" />
    </p>
  );
}

export default EngineeringQuote;
