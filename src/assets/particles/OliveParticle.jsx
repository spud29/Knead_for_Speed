import React from 'react';

export default function OliveParticle({ size = 20, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="8" cy="8" rx="5.5" ry="6" fill="#2C3E2C" />
      <ellipse cx="8" cy="8" rx="2.5" ry="3" fill="#1A2A1A" />
      <ellipse cx="8" cy="8" rx="1.8" ry="2.2" fill="#3D5C3D" opacity="0.6" />
      <ellipse cx="6.5" cy="5.5" rx="2" ry="1.2" fill="white" opacity="0.1" transform="rotate(-15, 6.5, 5.5)" />
    </svg>
  );
}
