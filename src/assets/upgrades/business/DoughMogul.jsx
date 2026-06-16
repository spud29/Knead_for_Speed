export default function DoughMogul({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="dm-throne" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A044" />
          <stop offset="40%" stopColor="#C49030" />
          <stop offset="100%" stopColor="#8B6529" />
        </linearGradient>
        <linearGradient id="dm-throneArm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C84A" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="dm-figure" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2C2C3E" />
          <stop offset="100%" stopColor="#14141E" />
        </linearGradient>
        <linearGradient id="dm-coin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        <radialGradient id="dm-glow" cx="0.5" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Golden glow behind */}
      <ellipse cx="24" cy="28" rx="22" ry="18" fill="url(#dm-glow)" />

      {/* Shadow */}
      <ellipse cx="24" cy="44" rx="16" ry="3" fill="#00000020" />

      {/* Throne back (rolled dough look) */}
      <path d="M10 12 Q10 8 14 8 L34 8 Q38 8 38 12 L38 38 L10 38 Z" fill="url(#dm-throne)" />

      {/* Throne dough texture - horizontal rolls */}
      <ellipse cx="12" cy="14" rx="2" ry="3" fill="#C49030" opacity="0.4" />
      <ellipse cx="36" cy="14" rx="2" ry="3" fill="#C49030" opacity="0.4" />
      <path d="M10 16 Q24 14 38 16" fill="none" stroke="#A07828" strokeWidth="0.5" opacity="0.4" />
      <path d="M10 20 Q24 18 38 20" fill="none" stroke="#A07828" strokeWidth="0.5" opacity="0.3" />

      {/* Throne top ornamental dough swirls */}
      <circle cx="14" cy="10" r="2.5" fill="url(#dm-throneArm)" />
      <circle cx="14" cy="10" r="1.5" fill="#C49030" opacity="0.4" />
      <circle cx="34" cy="10" r="2.5" fill="url(#dm-throneArm)" />
      <circle cx="34" cy="10" r="1.5" fill="#C49030" opacity="0.4" />

      {/* Throne armrests */}
      <rect x="7" y="26" width="5" height="12" rx="2.5" fill="url(#dm-throneArm)" />
      <rect x="36" y="26" width="5" height="12" rx="2.5" fill="url(#dm-throneArm)" />

      {/* Throne seat */}
      <rect x="12" y="34" width="24" height="4" rx="1" fill="#B8860B" />

      {/* Throne seat dough texture */}
      <ellipse cx="24" cy="35" rx="10" ry="1.5" fill="#C49030" opacity="0.3" />

      {/* Seated figure silhouette */}
      {/* Body */}
      <path d="M18 26 L16 38 L32 38 L30 26 Q28 22 24 22 Q20 22 18 26 Z" fill="url(#dm-figure)" />

      {/* Head */}
      <circle cx="24" cy="18" r="4" fill="url(#dm-figure)" />

      {/* Top hat */}
      <rect x="20" y="11" width="8" height="6" rx="0.5" fill="#1A1A2A" />
      <rect x="18" y="16" width="12" height="2" rx="1" fill="#2A2A3A" />
      <rect x="21" y="12" width="6" height="1" rx="0.5" fill="#3A3A4A" opacity="0.4" />

      {/* Monocle */}
      <circle cx="27" cy="18" r="1.8" fill="none" stroke="#FFD700" strokeWidth="0.5" />
      <line x1="28.5" y1="19" x2="30" y2="24" stroke="#FFD700" strokeWidth="0.3" />

      {/* Raining coins */}
      <ellipse cx="8" cy="6" rx="2" ry="1.5" fill="url(#dm-coin)" />
      <ellipse cx="8" cy="6" rx="1.2" ry="0.8" fill="#FFF0A0" opacity="0.3" />

      <ellipse cx="16" cy="3" rx="2" ry="1.5" fill="url(#dm-coin)" />
      <ellipse cx="16" cy="3" rx="1.2" ry="0.8" fill="#FFF0A0" opacity="0.3" />

      <ellipse cx="32" cy="4" rx="2" ry="1.5" fill="url(#dm-coin)" />
      <ellipse cx="32" cy="4" rx="1.2" ry="0.8" fill="#FFF0A0" opacity="0.3" />

      <ellipse cx="40" cy="7" rx="2" ry="1.5" fill="url(#dm-coin)" />
      <ellipse cx="40" cy="7" rx="1.2" ry="0.8" fill="#FFF0A0" opacity="0.3" />

      <ellipse cx="5" cy="14" rx="1.5" ry="1.2" fill="url(#dm-coin)" opacity="0.7" />
      <ellipse cx="42" cy="16" rx="1.5" ry="1.2" fill="url(#dm-coin)" opacity="0.7" />
      <ellipse cx="12" cy="8" rx="1.5" ry="1.2" fill="url(#dm-coin)" opacity="0.6" />
      <ellipse cx="36" cy="2" rx="1.5" ry="1.2" fill="url(#dm-coin)" opacity="0.6" />

      {/* Coin dollar signs */}
      <text x="8" y="7.2" textAnchor="middle" fontSize="2" fontWeight="bold" fill="#8B6529" fontFamily="Arial, sans-serif">$</text>
      <text x="16" y="4.2" textAnchor="middle" fontSize="2" fontWeight="bold" fill="#8B6529" fontFamily="Arial, sans-serif">$</text>
      <text x="32" y="5.2" textAnchor="middle" fontSize="2" fontWeight="bold" fill="#8B6529" fontFamily="Arial, sans-serif">$</text>
      <text x="40" y="8.2" textAnchor="middle" fontSize="2" fontWeight="bold" fill="#8B6529" fontFamily="Arial, sans-serif">$</text>

      {/* Highlight on throne back */}
      <rect x="12" y="10" width="3" height="16" rx="1.5" fill="white" opacity="0.08" />
    </svg>
  );
}
