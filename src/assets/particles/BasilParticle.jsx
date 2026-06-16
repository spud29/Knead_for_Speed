import React from 'react';

export default function BasilParticle({ size = 20, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M8,14 Q4,10 4,6 Q4,2 8,1 Q12,2 12,6 Q12,10 8,14Z" fill="#2D8B3A" />
      <line x1="8" y1="13" x2="8" y2="2" stroke="#1D6B2A" strokeWidth="0.6" opacity="0.6" />
      <line x1="8" y1="5" x2="5.5" y2="4" stroke="#1D6B2A" strokeWidth="0.4" opacity="0.4" />
      <line x1="8" y1="7" x2="10.5" y2="5.5" stroke="#1D6B2A" strokeWidth="0.4" opacity="0.4" />
      <line x1="8" y1="9" x2="5.5" y2="8" stroke="#1D6B2A" strokeWidth="0.4" opacity="0.4" />
      <ellipse cx="6.5" cy="4" rx="2" ry="1.5" fill="#35A043" opacity="0.3" />
    </svg>
  );
}
