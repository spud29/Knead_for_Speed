import React from 'react';

export default function AchievementLocked({ size = 28, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Shield shape - muted */}
      <path d="M16,2 L28,7 L28,18 Q28,26 16,30 Q4,26 4,18 L4,7 Z" fill="var(--muted, #9C8A78)" opacity="0.4" />
      {/* Shield inner border */}
      <path d="M16,4 L26,8.5 L26,18 Q26,24.5 16,28 Q6,24.5 6,18 L6,8.5 Z" fill="none" stroke="var(--muted, #9C8A78)" strokeWidth="0.8" opacity="0.3" />
      {/* Padlock body */}
      <rect x="11" y="15" width="10" height="8" rx="1.5" fill="var(--muted, #9C8A78)" opacity="0.5" />
      {/* Padlock shackle */}
      <path d="M13,15 L13,12 Q13,9 16,9 Q19,9 19,12 L19,15" fill="none" stroke="var(--muted, #9C8A78)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Keyhole */}
      <circle cx="16" cy="18.5" r="1.5" fill="var(--surface-2, #2C2118)" opacity="0.6" />
      <rect x="15.2" y="18.5" width="1.6" height="3" fill="var(--surface-2, #2C2118)" opacity="0.6" />
    </svg>
  );
}
