export default function CateringVan({ size = 24, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cv-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
        <linearGradient id="cv-cabin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C62828" />
          <stop offset="100%" stopColor="#8E0000" />
        </linearGradient>
        <linearGradient id="cv-window" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#81D4FA" />
          <stop offset="100%" stopColor="#4FC3F7" />
        </linearGradient>
        <linearGradient id="cv-steam" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Motion lines */}
      <line x1="2" y1="20" x2="7" y2="20" stroke="#FFB74D" strokeWidth="0.8" opacity="0.7" />
      <line x1="1" y1="24" x2="8" y2="24" stroke="#FFB74D" strokeWidth="1" opacity="0.5" />
      <line x1="3" y1="28" x2="7" y2="28" stroke="#FFB74D" strokeWidth="0.7" opacity="0.6" />

      {/* Van body */}
      <rect x="8" y="14" width="30" height="18" rx="2" fill="url(#cv-body)" />

      {/* White stripe */}
      <rect x="8" y="22" width="30" height="4" fill="#FFFFFF" opacity="0.9" />

      {/* PIZZA text on stripe */}
      <text x="20" y="25.5" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="3.5" fill="#C62828" letterSpacing="0.5">PIZZA</text>

      {/* Cabin section */}
      <rect x="34" y="16" width="8" height="16" rx="1" fill="url(#cv-cabin)" />

      {/* Cabin windshield */}
      <rect x="35.5" y="17.5" width="5.5" height="6" rx="1" fill="url(#cv-window)" />
      {/* Windshield shine */}
      <line x1="36" y1="18" x2="38" y2="23" stroke="white" strokeWidth="0.5" opacity="0.6" />

      {/* Rear window showing pizza boxes */}
      <rect x="9.5" y="15.5" width="7" height="5" rx="0.5" fill="url(#cv-window)" />
      {/* Pizza boxes inside window */}
      <rect x="10" y="17" width="3" height="1.2" rx="0.2" fill="#D4A044" />
      <rect x="10.2" y="15.8" width="2.8" height="1.2" rx="0.2" fill="#E8B84E" />
      <rect x="13.5" y="17.5" width="2.5" height="1" rx="0.2" fill="#D4A044" />

      {/* Steam from boxes */}
      <path d="M11 15.5 Q11.5 13 12 14 Q12.5 12.5 13 14.5" fill="none" stroke="url(#cv-steam)" strokeWidth="0.7" />
      <path d="M14 15 Q14.3 13.5 14.8 14.2 Q15.2 13 15.5 14.8" fill="none" stroke="url(#cv-steam)" strokeWidth="0.6" />

      {/* Roof rack / sign */}
      <rect x="12" y="11.5" width="16" height="3" rx="1" fill="#FFFFFF" />
      <text x="14.5" y="13.8" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="2.2" fill="#E53935">PIZZA</text>
      {/* Sign glow */}
      <ellipse cx="20" cy="11" rx="6" ry="1.5" fill="#FFE082" opacity="0.3" />

      {/* Bumper */}
      <rect x="38" y="30" width="4" height="2" rx="0.5" fill="#757575" />

      {/* Headlight */}
      <ellipse cx="41" cy="19" rx="1" ry="1.2" fill="#FFF9C4" />
      <ellipse cx="41" cy="19" rx="0.5" ry="0.6" fill="#FFFFFF" />
      {/* Headlight beam */}
      <polygon points="42,18 46,15 46,23 42,20" fill="#FFF9C4" opacity="0.2" />

      {/* Rear light */}
      <rect x="8" y="28" width="1.5" height="2" rx="0.3" fill="#FF5252" />

      {/* Ground line */}
      <rect x="6" y="36" width="40" height="1" rx="0.5" fill="#5D4037" opacity="0.3" />

      {/* Wheels */}
      <circle cx="15" cy="34" r="3.5" fill="#37474F" />
      <circle cx="15" cy="34" r="2" fill="#546E7A" />
      <circle cx="15" cy="34" r="0.8" fill="#78909C" />
      <circle cx="36" cy="34" r="3.5" fill="#37474F" />
      <circle cx="36" cy="34" r="2" fill="#546E7A" />
      <circle cx="36" cy="34" r="0.8" fill="#78909C" />

      {/* Body highlight */}
      <ellipse cx="22" cy="16" rx="10" ry="1.5" fill="white" opacity="0.15" />
    </svg>
  );
}
