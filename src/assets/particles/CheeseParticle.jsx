import React from 'react';

export default function CheeseParticle({ size = 20, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M2,14 L8,1 L14,14 Z" fill="#F5D64E" stroke="#D4A830" strokeWidth="0.5" />
      <circle cx="6" cy="10" r="1.5" fill="#E8C42A" />
      <circle cx="10" cy="11" r="1.2" fill="#E8C42A" />
      <circle cx="8" cy="7" r="1" fill="#E8C42A" />
      <path d="M2,14 L8,1 L14,14 Z" fill="white" opacity="0.15" />
    </svg>
  );
}
