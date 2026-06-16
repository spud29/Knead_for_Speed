import React from 'react';

export default function MushroomParticle({ size = 20, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Cap */}
      <path d="M3,9 Q3,3 8,2 Q13,3 13,9 Z" fill="#C4A882" />
      <path d="M3,9 Q3,3 8,2 Q13,3 13,9 Z" fill="none" stroke="#A08060" strokeWidth="0.4" />
      {/* Cap shading */}
      <path d="M5,7 Q5,4 8,3.5 Q11,4 11,7" fill="#B09570" opacity="0.4" />
      {/* Stem */}
      <rect x="6" y="9" width="4" height="5" rx="1" fill="#F0E6D2" />
      <rect x="6" y="9" width="4" height="5" rx="1" fill="none" stroke="#D4C8B0" strokeWidth="0.3" />
      {/* Gills */}
      <line x1="6.5" y1="9" x2="6.5" y2="12" stroke="#D4C8B0" strokeWidth="0.3" />
      <line x1="8" y1="9" x2="8" y2="13" stroke="#D4C8B0" strokeWidth="0.3" />
      <line x1="9.5" y1="9" x2="9.5" y2="12" stroke="#D4C8B0" strokeWidth="0.3" />
    </svg>
  );
}
