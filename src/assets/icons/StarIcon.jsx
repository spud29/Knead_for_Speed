import React from 'react';

export default function StarIcon({ size = 36, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="si-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="si-star" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      {/* Outer glow */}
      <circle cx="20" cy="20" r="19" fill="url(#si-glow)" />
      {/* Light rays */}
      <line x1="20" y1="1" x2="20" y2="5" stroke="#FFD700" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <line x1="20" y1="35" x2="20" y2="39" stroke="#FFD700" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <line x1="1" y1="20" x2="5" y2="20" stroke="#FFD700" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <line x1="35" y1="20" x2="39" y2="20" stroke="#FFD700" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <line x1="6" y1="6" x2="9" y2="9" stroke="#FFD700" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
      <line x1="34" y1="6" x2="31" y2="9" stroke="#FFD700" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
      <line x1="6" y1="34" x2="9" y2="31" stroke="#FFD700" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
      <line x1="34" y1="34" x2="31" y2="31" stroke="#FFD700" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
      {/* Star body */}
      <path
        d="M20,5 L23.5,14 L33,15 L26,21.5 L28,31 L20,26 L12,31 L14,21.5 L7,15 L16.5,14 Z"
        fill="url(#si-star)"
      />
      {/* Inner star highlight */}
      <path
        d="M20,10 L22,15.5 L27.5,16 L23.5,19.5 L24.5,25 L20,22 L15.5,25 L16.5,19.5 L12.5,16 L18,15.5 Z"
        fill="#FFE44D"
        opacity="0.4"
      />
      {/* Specular highlight */}
      <ellipse cx="17" cy="13" rx="3" ry="2" fill="white" opacity="0.2" transform="rotate(-20, 17, 13)" />
    </svg>
  );
}
