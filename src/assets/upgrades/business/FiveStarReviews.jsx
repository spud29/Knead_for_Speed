export default function FiveStarReviews({ size = 24, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="fsr-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8F0FE" />
          <stop offset="100%" stopColor="#C5D8F0" />
        </linearGradient>
        <linearGradient id="fsr-phone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A4A5A" />
          <stop offset="100%" stopColor="#2A2A3A" />
        </linearGradient>
        <linearGradient id="fsr-star" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="60%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#E8950A" />
        </linearGradient>
        <radialGradient id="fsr-sparkle" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="24" cy="44" rx="12" ry="2" fill="#00000018" />

      {/* Phone body */}
      <rect x="11" y="3" width="26" height="42" rx="3.5" fill="url(#fsr-phone)" />

      {/* Screen bezel inner */}
      <rect x="13" y="7" width="22" height="33" rx="1.5" fill="url(#fsr-screen)" />

      {/* Top speaker notch */}
      <rect x="20" y="4.5" width="8" height="1.2" rx="0.6" fill="#1A1A2A" />

      {/* Home indicator */}
      <rect x="19" y="42" width="10" height="1.5" rx="0.75" fill="#555565" />

      {/* Review card on screen */}
      <rect x="15" y="9" width="18" height="12" rx="1.5" fill="white" opacity="0.9" />

      {/* Five stars row */}
      {[0, 1, 2, 3, 4].map((i) => (
        <polygon
          key={i}
          points={`${18 + i * 3.5},14 ${18.9 + i * 3.5},16.5 ${21.3 + i * 3.5},16.5 ${19.4 + i * 3.5},18 ${20 + i * 3.5},20.3 ${18 + i * 3.5},18.8 ${16 + i * 3.5},20.3 ${16.6 + i * 3.5},18 ${14.7 + i * 3.5},16.5 ${17.1 + i * 3.5},16.5`}
          fill="url(#fsr-star)"
        />
      ))}

      {/* Star shine accents */}
      <circle cx="18" cy="14" r="0.4" fill="white" opacity="0.7" />
      <circle cx="25" cy="14" r="0.4" fill="white" opacity="0.7" />
      <circle cx="32" cy="14" r="0.4" fill="white" opacity="0.7" />

      {/* Thumbs up icon below stars */}
      <path d="M20 25 L20 31 L22 31 L22 25 Z" fill="#4CAF50" rx="0.5" />
      <path d="M22 25 Q22 23 24 22 L26 22 Q28 22 28 24 L27.5 25 L29 25 Q30 25 30 26.5 Q30 27.5 29 28 L28 28 Q29 28.5 28.5 29.5 Q28 30 27 30 L26.5 30 Q27 30.5 26.5 31 L22 31" fill="#66BB6A" />

      {/* Review text lines */}
      <rect x="16" y="33" width="14" height="1" rx="0.5" fill="#90A4AE" opacity="0.5" />
      <rect x="16" y="35.5" width="10" height="1" rx="0.5" fill="#90A4AE" opacity="0.4" />
      <rect x="16" y="38" width="12" height="1" rx="0.5" fill="#90A4AE" opacity="0.3" />

      {/* Sparkle effects around phone */}
      <polygon points="7,10 8,12 9,10 8,8" fill="url(#fsr-sparkle)" opacity="0.8" />
      <polygon points="40,8 41,10 42,8 41,6" fill="url(#fsr-sparkle)" opacity="0.7" />
      <polygon points="6,28 7,30 8,28 7,26" fill="url(#fsr-sparkle)" opacity="0.6" />
      <polygon points="42,22 43,24 44,22 43,20" fill="url(#fsr-sparkle)" opacity="0.65" />

      {/* Small sparkle lines */}
      <line x1="5" y1="18" x2="8" y2="18" stroke="#FFD700" strokeWidth="0.5" opacity="0.5" />
      <line x1="6.5" y1="16.5" x2="6.5" y2="19.5" stroke="#FFD700" strokeWidth="0.5" opacity="0.5" />
      <line x1="41" y1="15" x2="44" y2="15" stroke="#FFD700" strokeWidth="0.5" opacity="0.5" />
      <line x1="42.5" y1="13.5" x2="42.5" y2="16.5" stroke="#FFD700" strokeWidth="0.5" opacity="0.5" />

      {/* Screen glare */}
      <rect x="14" y="8" width="6" height="10" rx="1" fill="white" opacity="0.06" />
    </svg>
  );
}
