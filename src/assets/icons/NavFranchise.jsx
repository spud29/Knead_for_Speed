import React from 'react';

export default function NavFranchise({ size = 22, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* 5-pointed star */}
      <path
        d="M12,2 L14.5,8.5 L21.5,9 L16,14 L17.5,21 L12,17.5 L6.5,21 L8,14 L2.5,9 L9.5,8.5 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Inner highlight star */}
      <path
        d="M12,6 L13.3,9.8 L17.3,10.1 L14.2,12.8 L15,16.8 L12,14.8 L9,16.8 L9.8,12.8 L6.7,10.1 L10.7,9.8 Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}
