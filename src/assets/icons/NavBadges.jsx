import React from 'react';

export default function NavBadges({ size = 22, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Trophy cup */}
      <path d="M7,4 L17,4 L16,12 Q15,16 12,17 Q9,16 8,12 Z" fill="currentColor" opacity="0.85" />
      {/* Trophy handles */}
      <path d="M7,5 Q3,5 3,8 Q3,11 7,11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17,5 Q21,5 21,8 Q21,11 17,11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Base stem */}
      <rect x="10.5" y="17" width="3" height="2" rx="0.5" fill="currentColor" opacity="0.7" />
      {/* Base */}
      <rect x="8" y="19" width="8" height="2" rx="1" fill="currentColor" opacity="0.7" />
      {/* Star emblem */}
      <path d="M12,7 L13,9.5 L15.5,9.5 L13.5,11 L14.2,13.5 L12,12 L9.8,13.5 L10.5,11 L8.5,9.5 L11,9.5 Z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
