import React from 'react';

export default function AchievementUnlocked({ size = 28, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="au-shield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      {/* Shield shape */}
      <path d="M16,2 L28,7 L28,18 Q28,26 16,30 Q4,26 4,18 L4,7 Z" fill="url(#au-shield)" />
      {/* Shield inner border */}
      <path d="M16,4 L26,8.5 L26,18 Q26,24.5 16,28 Q6,24.5 6,18 L6,8.5 Z" fill="none" stroke="#FFE44D" strokeWidth="0.8" opacity="0.5" />
      {/* Trophy silhouette */}
      <path d="M11,11 L21,11 L20,17 Q19,20 16,21 Q13,20 12,17 Z" fill="#FFF8DC" opacity="0.6" />
      <rect x="14" y="21" width="4" height="2" rx="0.5" fill="#FFF8DC" opacity="0.5" />
      <rect x="12" y="23" width="8" height="1.5" rx="0.5" fill="#FFF8DC" opacity="0.5" />
      {/* Sparkle at top */}
      <path d="M16,1 L16.8,3 L18.5,3 L17,4.2 L17.5,6 L16,5 L14.5,6 L15,4.2 L13.5,3 L15.2,3 Z" fill="#FFF8DC" opacity="0.8" />
      {/* Highlight */}
      <ellipse cx="12" cy="10" rx="4" ry="3" fill="white" opacity="0.12" transform="rotate(-15, 12, 10)" />
    </svg>
  );
}
