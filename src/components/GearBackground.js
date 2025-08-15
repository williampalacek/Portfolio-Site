import React from 'react';

const Gear = ({ className, size }) => (
  <span
    role="img"
    aria-label="gear"
    className={`inline-block animate-spin-slow ${className}`}
    style={{ fontSize: size }}
  >
    ⚙️
  </span>
);

const GearBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
    <Gear className="text-blue-300 absolute top-10 left-10" size="4rem" />
    <Gear className="text-sea_blue absolute bottom-10 right-10" size="6rem" />
  </div>
);

export default GearBackground;
