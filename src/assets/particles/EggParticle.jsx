import React from 'react';

export default function EggParticle({ size = 20, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* White */}
      <path d="M3,9 Q2,4 5,3 Q8,2 11,3 Q14,5 13,9 Q12,13 8,14 Q4,13 3,9Z" fill="#FEFEFE" />
      <path d="M3,9 Q2,4 5,3 Q8,2 11,3 Q14,5 13,9 Q12,13 8,14 Q4,13 3,9Z" fill="none" stroke="#E0D8CC" strokeWidth="0.5" />
      {/* Yolk */}
      <circle cx="8" cy="8" r="3" fill="#F5A623" />
      <circle cx="8" cy="8" r="3" fill="none" stroke="#E09010" strokeWidth="0.3" />
      {/* Yolk highlight */}
      <circle cx="7" cy="7" r="1" fill="white" opacity="0.3" />
    </svg>
  );
}
