import React from 'react';

export default function GoldenPizzaGraphic({ size = 64, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="gp-base" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        <linearGradient id="gp-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Outer glow ring */}
      <circle cx="32" cy="32" r="30" fill="rgba(255,215,0,0.12)" />

      {/* Golden crust */}
      <circle cx="32" cy="32" r="26" fill="url(#gp-base)" />

      {/* Inner sauce area (golden) */}
      <circle cx="32" cy="32" r="21" fill="#DAA520" opacity="0.6" />

      {/* Golden cheese blobs */}
      <path d="M22,25 Q26,20 32,22 Q36,24 33,30 Q28,34 24,30 Q20,28 22,25Z" fill="#FFD700" opacity="0.7" />
      <path d="M35,22 Q40,19 44,24 Q46,28 42,31 Q38,33 35,29 Q32,25 35,22Z" fill="#FFD700" opacity="0.65" />
      <path d="M25,34 Q30,31 36,34 Q38,38 34,42 Q28,44 25,40 Q22,37 25,34Z" fill="#FFD700" opacity="0.7" />

      {/* Golden pepperoni silhouettes */}
      <circle cx="27" cy="26" r="3.5" fill="#C8960B" opacity="0.6" />
      <circle cx="40" cy="28" r="3" fill="#C8960B" opacity="0.6" />
      <circle cx="32" cy="36" r="3.5" fill="#C8960B" opacity="0.6" />
      <circle cx="24" cy="38" r="2.8" fill="#C8960B" opacity="0.5" />

      {/* Metallic sheen overlay */}
      <circle cx="32" cy="32" r="26" fill="url(#gp-sheen)" />

      {/* Sparkle stars */}
      <g className="golden-sparkle">
        <path d="M12,10 L13,13 L16,14 L13,15 L12,18 L11,15 L8,14 L11,13 Z" fill="#FFF8DC" />
      </g>
      <g className="golden-sparkle" style={{ animationDelay: '0.3s' }}>
        <path d="M50,8 L51,10.5 L53.5,11.5 L51,12.5 L50,15 L49,12.5 L46.5,11.5 L49,10.5 Z" fill="#FFF8DC" />
      </g>
      <g className="golden-sparkle" style={{ animationDelay: '0.6s' }}>
        <path d="M52,42 L53,44 L55,45 L53,46 L52,48 L51,46 L49,45 L51,44 Z" fill="#FFF8DC" />
      </g>
      <g className="golden-sparkle" style={{ animationDelay: '0.9s' }}>
        <path d="M10,44 L11,46 L13,47 L11,48 L10,50 L9,48 L7,47 L9,46 Z" fill="#FFF8DC" />
      </g>
      <g className="golden-sparkle" style={{ animationDelay: '0.15s' }}>
        <path d="M32,2 L33,4 L35,5 L33,6 L32,8 L31,6 L29,5 L31,4 Z" fill="#FFF8DC" />
      </g>
    </svg>
  );
}
