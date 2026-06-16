import React from 'react';

export default function PepperParticle({ size = 20, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M5,14 Q3,10 4,6 Q5,2 8,1 Q9,2 9,4 Q9,6 8,10 Q7,13 5,14Z" fill="#E74C3C" />
      <path d="M5,14 Q3,10 4,6 Q5,2 8,1" fill="none" stroke="#C0392B" strokeWidth="0.5" />
      <path d="M7.5,2 Q8,1 7.5,0 Q7,0.5 7,1.5Z" fill="#4CAF50" />
      <path d="M5.5,5 Q6,3 7.5,2.5" fill="none" stroke="white" strokeWidth="0.4" opacity="0.2" />
    </svg>
  );
}
