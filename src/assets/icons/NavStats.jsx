import React from 'react';

export default function NavStats({ size = 22, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Bar chart bars */}
      <rect x="3" y="14" width="4" height="7" rx="1" fill="currentColor" opacity="0.5" />
      <rect x="10" y="9" width="4" height="12" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="17" y="4" width="4" height="17" rx="1" fill="currentColor" opacity="0.9" />
      {/* Trend arrow */}
      <path d="M5,13 L12,8 L19,3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <path d="M16,3 L19,3 L19,6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
  );
}
