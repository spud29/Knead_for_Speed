export default function SecondOven({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="so-brick" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C46840" />
          <stop offset="100%" stopColor="#8B4520" />
        </linearGradient>
        <linearGradient id="so-inner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A1008" />
          <stop offset="100%" stopColor="#1A0A04" />
        </linearGradient>
        <radialGradient id="so-glow" cx="0.5" cy="0.7" r="0.6">
          <stop offset="0%" stopColor="#FF8C00" opacity="0.8" />
          <stop offset="60%" stopColor="#FF4500" opacity="0.4" />
          <stop offset="100%" stopColor="#2A1008" opacity="0" />
        </radialGradient>
        <linearGradient id="so-flame1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FF4500" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="so-flame2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#E0483E" />
          <stop offset="100%" stopColor="#FFA85C" />
        </linearGradient>
        <linearGradient id="so-stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A08060" />
          <stop offset="100%" stopColor="#7A6040" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="24" cy="45" rx="18" ry="2.5" fill="#00000018" />

      {/* Oven base / hearth */}
      <rect x="4" y="38" width="40" height="6" rx="1" fill="url(#so-stone)" />
      <rect x="4" y="38" width="40" height="1.5" rx="0.5" fill="#B8946C" opacity="0.4" />

      {/* Brick surround - left */}
      <rect x="4" y="14" width="8" height="24" rx="1" fill="url(#so-brick)" />
      {/* Brick surround - right */}
      <rect x="36" y="14" width="8" height="24" rx="1" fill="url(#so-brick)" />

      {/* Brick mortar lines - left */}
      <line x1="4" y1="18" x2="12" y2="18" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="4" y1="22" x2="12" y2="22" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="4" y1="26" x2="12" y2="26" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="4" y1="30" x2="12" y2="30" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="4" y1="34" x2="12" y2="34" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="8" y1="14" x2="8" y2="18" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="6" y1="18" x2="6" y2="22" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="10" y1="22" x2="10" y2="26" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="8" y1="26" x2="8" y2="30" stroke="#6B3418" strokeWidth="0.5" />

      {/* Brick mortar lines - right */}
      <line x1="36" y1="18" x2="44" y2="18" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="36" y1="22" x2="44" y2="22" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="36" y1="26" x2="44" y2="26" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="36" y1="30" x2="44" y2="30" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="36" y1="34" x2="44" y2="34" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="40" y1="14" x2="40" y2="18" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="38" y1="22" x2="38" y2="26" stroke="#6B3418" strokeWidth="0.5" />
      <line x1="42" y1="18" x2="42" y2="22" stroke="#6B3418" strokeWidth="0.5" />

      {/* Stone arch */}
      <path
        d="M10 38 L10 22 Q10 12 24 10 Q38 12 38 22 L38 38"
        fill="url(#so-inner)"
      />
      {/* Arch border */}
      <path
        d="M10 38 L10 22 Q10 12 24 10 Q38 12 38 22 L38 38"
        fill="none"
        stroke="#A07040"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Inner glow */}
      <ellipse cx="24" cy="32" rx="12" ry="8" fill="url(#so-glow)" />

      {/* Flames */}
      <path
        d="M16 38 Q15 32 17 28 Q18 30 19 38"
        fill="url(#so-flame1)"
        opacity="0.9"
      />
      <path
        d="M21 38 Q20 30 23 25 Q24 28 26 38"
        fill="url(#so-flame1)"
        opacity="0.95"
      />
      <path
        d="M28 38 Q27 31 30 27 Q31 30 32 38"
        fill="url(#so-flame2)"
        opacity="0.9"
      />
      {/* Small inner flame */}
      <path
        d="M22 38 Q22 33 24 30 Q25 33 25 38"
        fill="#FFD700"
        opacity="0.7"
      />

      {/* Glow highlight at arch top */}
      <ellipse cx="24" cy="16" rx="6" ry="2" fill="#FFA85C" opacity="0.15" />

      {/* Brick highlight */}
      <rect x="5" y="15" width="6" height="2" rx="0.5" fill="white" opacity="0.08" />
      <rect x="37" y="15" width="6" height="2" rx="0.5" fill="white" opacity="0.08" />
    </svg>
  );
}
