import React from 'react';

export default function PizzaSliceParticle({ size = 20, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Crust arc */}
      <path d="M2,3 Q8,0 14,3 L8,15 Z" fill="#D4A044" />
      {/* Sauce */}
      <path d="M3.5,4.5 Q8,2 12.5,4.5 L8,13 Z" fill="#C23B22" />
      {/* Cheese */}
      <path d="M4.5,5 Q8,3.5 11.5,5 L8,11 Z" fill="#FFECB3" opacity="0.8" />
      {/* Mini pepperoni */}
      <circle cx="7" cy="6.5" r="1.2" fill="#922B21" />
      <circle cx="9.5" cy="7.5" r="1" fill="#922B21" />
      {/* Highlight */}
      <path d="M5,5 Q8,3.5 11,5" fill="none" stroke="white" strokeWidth="0.3" opacity="0.2" />
    </svg>
  );
}
