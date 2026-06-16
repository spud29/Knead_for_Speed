import React from 'react';

export default function NavShop({ size = 22, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Pizza slice */}
      <path d="M3,4 Q12,1 21,4 L12,22 Z" fill="currentColor" opacity="0.85" />
      {/* Crust highlight */}
      <path d="M3,4 Q12,1 21,4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Sauce layer */}
      <path d="M5,5.5 Q12,3 19,5.5 L12,18 Z" fill="currentColor" opacity="0.5" />
      {/* Pepperoni dots */}
      <circle cx="10" cy="9" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="11" r="1.3" fill="currentColor" opacity="0.4" />
      <circle cx="11" cy="14" r="1.2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
