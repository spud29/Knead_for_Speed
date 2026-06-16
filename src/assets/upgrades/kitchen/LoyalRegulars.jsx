export default function LoyalRegulars({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="lr-face1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5D0A8" />
          <stop offset="100%" stopColor="#D4A878" />
        </linearGradient>
        <linearGradient id="lr-face2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C48850" />
          <stop offset="100%" stopColor="#9A6838" />
        </linearGradient>
        <linearGradient id="lr-face3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C098" />
          <stop offset="100%" stopColor="#C49868" />
        </linearGradient>
        <radialGradient id="lr-heart" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#E0483E" />
        </radialGradient>
        <linearGradient id="lr-hair1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5A3820" />
          <stop offset="100%" stopColor="#3E2810" />
        </linearGradient>
        <linearGradient id="lr-hair2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2020" />
          <stop offset="100%" stopColor="#1A1010" />
        </linearGradient>
        <linearGradient id="lr-hair3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C47830" />
          <stop offset="100%" stopColor="#8B5520" />
        </linearGradient>
      </defs>

      {/* Heart above center */}
      <path
        d="M24 8 C24 8 21 4 18 5 C15 6 15 10 18 12 L24 17 L30 12 C33 10 33 6 30 5 C27 4 24 8 24 8 Z"
        fill="url(#lr-heart)"
      />
      <ellipse cx="21" cy="8" rx="2" ry="1.2" fill="white" opacity="0.25" />

      {/* Person 1 - left (behind) */}
      {/* Body */}
      <path
        d="M4 44 L4 38 Q4 32 10 30 L14 30 Q20 32 20 38 L20 44 Z"
        fill="#D4A044"
        opacity="0.85"
      />
      {/* Neck */}
      <rect x="10" y="26" width="4" height="3" rx="1" fill="url(#lr-face1)" />
      {/* Head */}
      <circle cx="12" cy="23" r="6" fill="url(#lr-face1)" />
      {/* Hair */}
      <path
        d="M6 22 Q6 16 12 15 Q18 16 18 22 Q17 18 12 17 Q7 18 6 22 Z"
        fill="url(#lr-hair1)"
      />
      {/* Eyes */}
      <ellipse cx="10" cy="23" rx="1" ry="1.3" fill="#4A3520" />
      <ellipse cx="14" cy="23" rx="1" ry="1.3" fill="#4A3520" />
      <circle cx="10.3" cy="22.5" r="0.4" fill="white" opacity="0.6" />
      <circle cx="14.3" cy="22.5" r="0.4" fill="white" opacity="0.6" />
      {/* Smile */}
      <path d="M9 25.5 Q12 28 15 25.5" fill="none" stroke="#8B5E3C" strokeWidth="0.8" strokeLinecap="round" />
      {/* Cheek */}
      <ellipse cx="8.5" cy="24.5" rx="1.5" ry="0.8" fill="#E88080" opacity="0.25" />

      {/* Person 2 - center (front) */}
      {/* Body */}
      <path
        d="M16 46 L16 38 Q16 32 22 30 L26 30 Q32 32 32 38 L32 46 Z"
        fill="#E0483E"
        opacity="0.85"
      />
      {/* Neck */}
      <rect x="22" y="26" width="4" height="3" rx="1" fill="url(#lr-face2)" />
      {/* Head */}
      <circle cx="24" cy="23" r="6.5" fill="url(#lr-face2)" />
      {/* Hair */}
      <path
        d="M17.5 21 Q18 15 24 14 Q30 15 30.5 21 Q29 16 24 15.5 Q19 16 17.5 21 Z"
        fill="url(#lr-hair2)"
      />
      {/* Eyes */}
      <ellipse cx="22" cy="23" rx="1" ry="1.3" fill="#2A1A10" />
      <ellipse cx="26" cy="23" rx="1" ry="1.3" fill="#2A1A10" />
      <circle cx="22.3" cy="22.5" r="0.4" fill="white" opacity="0.6" />
      <circle cx="26.3" cy="22.5" r="0.4" fill="white" opacity="0.6" />
      {/* Big smile */}
      <path d="M21 25.5 Q24 29 27 25.5" fill="none" stroke="#5A3018" strokeWidth="0.9" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="20" cy="24.5" rx="1.5" ry="0.8" fill="#E88080" opacity="0.2" />
      <ellipse cx="28" cy="24.5" rx="1.5" ry="0.8" fill="#E88080" opacity="0.2" />

      {/* Person 3 - right (behind) */}
      {/* Body */}
      <path
        d="M28 44 L28 38 Q28 32 34 30 L38 30 Q44 32 44 38 L44 44 Z"
        fill="#FFA85C"
        opacity="0.85"
      />
      {/* Neck */}
      <rect x="34" y="26" width="4" height="3" rx="1" fill="url(#lr-face3)" />
      {/* Head */}
      <circle cx="36" cy="23" r="6" fill="url(#lr-face3)" />
      {/* Hair - longer/wavy */}
      <path
        d="M30 24 Q29 16 36 14 Q43 16 42 24 Q41 18 36 16.5 Q31 18 30 24 Z"
        fill="url(#lr-hair3)"
      />
      <path d="M30 24 Q29 28 30 30" fill="none" stroke="url(#lr-hair3)" strokeWidth="2" />
      <path d="M42 24 Q43 28 42 30" fill="none" stroke="url(#lr-hair3)" strokeWidth="2" />
      {/* Eyes */}
      <ellipse cx="34" cy="23" rx="1" ry="1.3" fill="#4A3520" />
      <ellipse cx="38" cy="23" rx="1" ry="1.3" fill="#4A3520" />
      <circle cx="34.3" cy="22.5" r="0.4" fill="white" opacity="0.6" />
      <circle cx="38.3" cy="22.5" r="0.4" fill="white" opacity="0.6" />
      {/* Smile */}
      <path d="M33 25.5 Q36 28 39 25.5" fill="none" stroke="#8B5E3C" strokeWidth="0.8" strokeLinecap="round" />
      {/* Cheek */}
      <ellipse cx="40" cy="24.5" rx="1.5" ry="0.8" fill="#E88080" opacity="0.25" />

      {/* Face highlights */}
      <ellipse cx="10" cy="20" rx="2.5" ry="1" fill="white" opacity="0.1" />
      <ellipse cx="24" cy="20" rx="2.5" ry="1" fill="white" opacity="0.08" />
      <ellipse cx="36" cy="20" rx="2.5" ry="1" fill="white" opacity="0.1" />
    </svg>
  );
}
