export default function DoughCoinICO({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="dci-coin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="40%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="dci-coinEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#8B6529" />
        </linearGradient>
        <radialGradient id="dci-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#00AAFF" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#0066CC" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#003366" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dci-coinGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dci-slice" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#8B6529" />
        </linearGradient>
        <linearGradient id="dci-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00AAFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00CCFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#00AAFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background digital glow */}
      <circle cx="24" cy="24" r="22" fill="url(#dci-glow)" />

      {/* Blockchain connection lines */}
      <line x1="4" y1="8" x2="16" y2="16" stroke="url(#dci-line)" strokeWidth="0.8" />
      <line x1="32" y1="16" x2="44" y2="8" stroke="url(#dci-line)" strokeWidth="0.8" />
      <line x1="4" y1="40" x2="16" y2="32" stroke="url(#dci-line)" strokeWidth="0.8" />
      <line x1="32" y1="32" x2="44" y2="40" stroke="url(#dci-line)" strokeWidth="0.8" />
      <line x1="24" y1="4" x2="24" y2="12" stroke="url(#dci-line)" strokeWidth="0.8" />
      <line x1="24" y1="36" x2="24" y2="44" stroke="url(#dci-line)" strokeWidth="0.8" />
      <line x1="6" y1="24" x2="12" y2="24" stroke="url(#dci-line)" strokeWidth="0.8" />
      <line x1="36" y1="24" x2="42" y2="24" stroke="url(#dci-line)" strokeWidth="0.8" />

      {/* Blockchain nodes */}
      <circle cx="4" cy="8" r="2" fill="#0088CC" opacity="0.6" />
      <circle cx="4" cy="8" r="1" fill="#00CCFF" opacity="0.8" />
      <circle cx="44" cy="8" r="2" fill="#0088CC" opacity="0.6" />
      <circle cx="44" cy="8" r="1" fill="#00CCFF" opacity="0.8" />
      <circle cx="4" cy="40" r="2" fill="#0088CC" opacity="0.6" />
      <circle cx="4" cy="40" r="1" fill="#00CCFF" opacity="0.8" />
      <circle cx="44" cy="40" r="2" fill="#0088CC" opacity="0.6" />
      <circle cx="44" cy="40" r="1" fill="#00CCFF" opacity="0.8" />
      <circle cx="24" cy="4" r="2" fill="#0088CC" opacity="0.6" />
      <circle cx="24" cy="4" r="1" fill="#00CCFF" opacity="0.8" />
      <circle cx="24" cy="44" r="2" fill="#0088CC" opacity="0.6" />
      <circle cx="24" cy="44" r="1" fill="#00CCFF" opacity="0.8" />
      <circle cx="6" cy="24" r="1.5" fill="#0088CC" opacity="0.5" />
      <circle cx="42" cy="24" r="1.5" fill="#0088CC" opacity="0.5" />

      {/* Coin golden glow */}
      <circle cx="24" cy="24" r="14" fill="url(#dci-coinGlow)" />

      {/* Coin edge (3D depth) */}
      <ellipse cx="24" cy="25" rx="12" ry="12" fill="url(#dci-coinEdge)" />

      {/* Coin face */}
      <circle cx="24" cy="24" r="12" fill="url(#dci-coin)" />

      {/* Coin inner ring */}
      <circle cx="24" cy="24" r="10" fill="none" stroke="#B8860B" strokeWidth="0.8" />

      {/* Coin outer ring */}
      <circle cx="24" cy="24" r="11.5" fill="none" stroke="#DAA520" strokeWidth="0.4" />

      {/* Ridged edge marks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 24 + Math.cos(rad) * 11;
        const y1 = 24 + Math.sin(rad) * 11;
        const x2 = 24 + Math.cos(rad) * 12;
        const y2 = 24 + Math.sin(rad) * 12;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C49030" strokeWidth="0.5" />;
      })}

      {/* Pizza slice logo embossed */}
      <path d="M24 15 L30 30 L18 30 Z" fill="url(#dci-slice)" opacity="0.7" />
      <path d="M24 15 L30 30 L18 30 Z" fill="none" stroke="#A07828" strokeWidth="0.5" />

      {/* Crust arc on slice */}
      <path d="M19 29 Q24 32 29 29" fill="none" stroke="#B8860B" strokeWidth="1" strokeLinecap="round" />

      {/* Pepperoni dots on slice */}
      <circle cx="23" cy="24" r="1" fill="#8B6529" opacity="0.6" />
      <circle cx="25.5" cy="27" r="0.8" fill="#8B6529" opacity="0.6" />
      <circle cx="22" cy="27.5" r="0.7" fill="#8B6529" opacity="0.6" />

      {/* Coin highlight */}
      <ellipse cx="20" cy="18" rx="5" ry="3" fill="white" opacity="0.15" />
      <ellipse cx="18" cy="20" rx="2" ry="1.5" fill="white" opacity="0.08" />

      {/* Digital data sparkles */}
      <rect x="8" y="14" width="1" height="1" fill="#00CCFF" opacity="0.4" />
      <rect x="38" y="32" width="1" height="1" fill="#00CCFF" opacity="0.4" />
      <rect x="10" y="36" width="0.8" height="0.8" fill="#00CCFF" opacity="0.3" />
      <rect x="36" y="12" width="0.8" height="0.8" fill="#00CCFF" opacity="0.3" />
    </svg>
  );
}
