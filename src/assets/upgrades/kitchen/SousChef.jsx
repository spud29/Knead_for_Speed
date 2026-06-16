export default function SousChef({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="sc-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C9A0" />
          <stop offset="100%" stopColor="#D4A070" />
        </linearGradient>
        <linearGradient id="sc-hat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E0D4" />
        </linearGradient>
        <linearGradient id="sc-uniform" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F0E8" />
          <stop offset="100%" stopColor="#D8D0C4" />
        </linearGradient>
        <linearGradient id="sc-spoon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C49450" />
          <stop offset="100%" stopColor="#8B6529" />
        </linearGradient>
      </defs>

      {/* Wooden spoon behind body */}
      <line x1="36" y1="16" x2="40" y2="42" stroke="url(#sc-spoon)" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="36" cy="14" rx="3.5" ry="5" fill="url(#sc-spoon)" />
      <ellipse cx="36" cy="14" rx="2" ry="3" fill="#A07838" opacity="0.5" />
      <ellipse cx="35" cy="12" rx="1" ry="1.5" fill="white" opacity="0.15" />

      {/* Body / uniform */}
      <path
        d="M12 38 Q12 32 16 30 L24 28 L32 30 Q36 32 36 38 L36 46 L12 46 Z"
        fill="url(#sc-uniform)"
      />
      {/* Uniform buttons */}
      <circle cx="24" cy="34" r="1" fill="#B8B0A4" />
      <circle cx="24" cy="38" r="1" fill="#B8B0A4" />
      <circle cx="24" cy="42" r="1" fill="#B8B0A4" />
      {/* Uniform collar */}
      <path
        d="M19 29 L24 32 L29 29"
        fill="none"
        stroke="#C8C0B4"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Neck */}
      <rect x="21" y="26" width="6" height="4" rx="1" fill="url(#sc-skin)" />

      {/* Head */}
      <ellipse cx="24" cy="21" rx="9" ry="8" fill="url(#sc-skin)" />

      {/* Ears */}
      <ellipse cx="14.5" cy="22" rx="2" ry="2.5" fill="url(#sc-skin)" />
      <ellipse cx="14.5" cy="22" rx="1" ry="1.5" fill="#D4A070" opacity="0.5" />
      <ellipse cx="33.5" cy="22" rx="2" ry="2.5" fill="url(#sc-skin)" />
      <ellipse cx="33.5" cy="22" rx="1" ry="1.5" fill="#D4A070" opacity="0.5" />

      {/* Toque (chef hat) base band */}
      <rect x="15" y="13" width="18" height="3" rx="1" fill="url(#sc-hat)" />

      {/* Toque poofy top */}
      <path
        d="M15 13 Q14 4 20 2 Q24 0 28 2 Q34 4 33 13 Z"
        fill="url(#sc-hat)"
      />
      {/* Toque folds */}
      <path d="M19 4 Q20 8 19 12" fill="none" stroke="#D8D0C4" strokeWidth="0.6" />
      <path d="M24 3 Q25 7 24 12" fill="none" stroke="#D8D0C4" strokeWidth="0.6" />
      <path d="M29 4 Q30 8 29 12" fill="none" stroke="#D8D0C4" strokeWidth="0.6" />
      {/* Hat highlight */}
      <ellipse cx="22" cy="6" rx="4" ry="2" fill="white" opacity="0.2" />

      {/* Eyes - friendly dots */}
      <ellipse cx="20" cy="20" rx="1.5" ry="1.8" fill="#4A3520" />
      <ellipse cx="28" cy="20" rx="1.5" ry="1.8" fill="#4A3520" />
      {/* Eye highlights */}
      <circle cx="20.5" cy="19.3" r="0.6" fill="white" opacity="0.7" />
      <circle cx="28.5" cy="19.3" r="0.6" fill="white" opacity="0.7" />

      {/* Friendly smile */}
      <path
        d="M20 24 Q24 28 28 24"
        fill="none"
        stroke="#8B5E3C"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Rosy cheeks */}
      <ellipse cx="17" cy="23" rx="2" ry="1.2" fill="#E88080" opacity="0.3" />
      <ellipse cx="31" cy="23" rx="2" ry="1.2" fill="#E88080" opacity="0.3" />

      {/* Face highlight */}
      <ellipse cx="21" cy="17" rx="4" ry="2" fill="white" opacity="0.1" />
    </svg>
  );
}
