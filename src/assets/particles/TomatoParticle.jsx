import React from 'react';

export default function TomatoParticle({ size = 20, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6.5" fill="#E74C3C" />
      <circle cx="8" cy="8" r="4.5" fill="#C0392B" opacity="0.5" />
      <ellipse cx="6" cy="7" rx="1.5" ry="2" fill="#F5B7B1" opacity="0.4" />
      <ellipse cx="10" cy="9" rx="1.2" ry="1.8" fill="#F5B7B1" opacity="0.3" />
      <circle cx="7" cy="8" r="0.6" fill="#FDEBD0" opacity="0.5" />
      <circle cx="9" cy="7" r="0.5" fill="#FDEBD0" opacity="0.4" />
      <ellipse cx="5.5" cy="5.5" rx="2" ry="1" fill="white" opacity="0.12" transform="rotate(-20, 5.5, 5.5)" />
    </svg>
  );
}
