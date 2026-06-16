import React from 'react';

export default function NavSettings({ size = 22, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Gear outer shape */}
      <path
        d="M12,1 L14,4 L17.5,3.5 L17.5,7 L21,8.5 L19,11.5 L21,14.5 L17.5,16 L17.5,19.5 L14,19 L12,22 L10,19 L6.5,19.5 L6.5,16 L3,14.5 L5,11.5 L3,8.5 L6.5,7 L6.5,3.5 L10,4 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Center circle (cutout look) */}
      <circle cx="12" cy="11.5" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="11.5" r="2.5" fill="currentColor" opacity="0.15" />
    </svg>
  );
}
