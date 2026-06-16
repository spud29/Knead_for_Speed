export default function WoodFireOven({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="wf-stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A89078" />
          <stop offset="100%" stopColor="#7A6450" />
        </linearGradient>
        <linearGradient id="wf-stoneDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8A7460" />
          <stop offset="100%" stopColor="#5A4838" />
        </linearGradient>
        <linearGradient id="wf-inner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A0A04" />
          <stop offset="100%" stopColor="#0E0604" />
        </linearGradient>
        <radialGradient id="wf-glow" cx="0.5" cy="0.6" r="0.55">
          <stop offset="0%" stopColor="#FF8C00" opacity="0.9" />
          <stop offset="50%" stopColor="#FF4500" opacity="0.5" />
          <stop offset="100%" stopColor="#1A0A04" opacity="0" />
        </radialGradient>
        <linearGradient id="wf-flame1" x1="0" y1="1" x2="0.2" y2="0">
          <stop offset="0%" stopColor="#FF4500" />
          <stop offset="40%" stopColor="#FF8C00" />
          <stop offset="80%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFFACD" />
        </linearGradient>
        <linearGradient id="wf-flame2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#E0483E" />
          <stop offset="60%" stopColor="#FFA85C" />
          <stop offset="100%" stopColor="#FFE880" />
        </linearGradient>
        <linearGradient id="wf-flame3" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#CC3300" />
          <stop offset="100%" stopColor="#FF6600" />
        </linearGradient>
        <linearGradient id="wf-log" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B4226" />
          <stop offset="100%" stopColor="#3E2510" />
        </linearGradient>
        <linearGradient id="wf-chimney" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8A7460" />
          <stop offset="100%" stopColor="#6A5440" />
        </linearGradient>
      </defs>

      {/* Smoke wisps from chimney */}
      <path
        d="M36 6 Q38 4 37 2"
        fill="none"
        stroke="#B0A898"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M38 8 Q40 5 39 2"
        fill="none"
        stroke="#B0A898"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d="M34 4 Q35 2 34 0"
        fill="none"
        stroke="#B0A898"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.2"
      />

      {/* Chimney */}
      <rect x="34" y="6" width="6" height="10" rx="0.5" fill="url(#wf-chimney)" />
      <rect x="33" y="6" width="8" height="2" rx="0.5" fill="#9A8468" />
      {/* Chimney stone lines */}
      <line x1="34" y1="10" x2="40" y2="10" stroke="#5A4838" strokeWidth="0.4" />
      <line x1="34" y1="13" x2="40" y2="13" stroke="#5A4838" strokeWidth="0.4" />
      <line x1="37" y1="8" x2="37" y2="10" stroke="#5A4838" strokeWidth="0.4" />

      {/* Shadow */}
      <ellipse cx="22" cy="46" rx="20" ry="2" fill="#00000018" />

      {/* Oven dome body */}
      <path
        d="M2 42 L2 28 Q2 10 22 8 Q42 10 42 28 L42 42 Z"
        fill="url(#wf-stone)"
      />

      {/* Stone texture lines across dome */}
      <path d="M4 20 L16 18" stroke="#6A5440" strokeWidth="0.5" opacity="0.5" />
      <path d="M6 26 L14 25" stroke="#6A5440" strokeWidth="0.5" opacity="0.5" />
      <path d="M28 18 L40 20" stroke="#6A5440" strokeWidth="0.5" opacity="0.5" />
      <path d="M30 25 L38 26" stroke="#6A5440" strokeWidth="0.5" opacity="0.5" />
      <path d="M10 14 Q22 11 34 14" stroke="#6A5440" strokeWidth="0.4" opacity="0.4" />

      {/* Decorative stone arch keystone pieces */}
      <path d="M8 32 L8 28 Q8 22 14 20" stroke="#9A8468" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M36 32 L36 28 Q36 22 30 20" stroke="#9A8468" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M14 20 Q22 17 30 20" stroke="#9A8468" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Dark oven opening */}
      <path
        d="M10 42 L10 30 Q10 22 22 20 Q34 22 34 30 L34 42 Z"
        fill="url(#wf-inner)"
      />

      {/* Inner glow */}
      <ellipse cx="22" cy="36" rx="10" ry="7" fill="url(#wf-glow)" />

      {/* Detailed flames - tall center */}
      <path
        d="M18 42 Q16 36 18 30 Q19 32 20 28 Q21 34 22 42"
        fill="url(#wf-flame1)"
        opacity="0.95"
      />
      {/* Flame 2 */}
      <path
        d="M22 42 Q21 34 24 27 Q25 30 27 42"
        fill="url(#wf-flame2)"
      />
      {/* Flame 3 */}
      <path
        d="M26 42 Q25 35 28 30 Q29 33 30 42"
        fill="url(#wf-flame1)"
        opacity="0.9"
      />
      {/* Small side flames */}
      <path
        d="M14 42 Q13 38 15 34 Q16 37 17 42"
        fill="url(#wf-flame3)"
        opacity="0.8"
      />
      <path
        d="M29 42 Q29 37 31 33 Q32 36 32 42"
        fill="url(#wf-flame3)"
        opacity="0.8"
      />
      {/* Inner hot core flames */}
      <path
        d="M20 42 Q20 38 22 34 Q23 37 23 42"
        fill="#FFE880"
        opacity="0.6"
      />
      <path
        d="M25 42 Q25 37 26 34 Q27 36 27 42"
        fill="#FFD700"
        opacity="0.5"
      />

      {/* Ember sparks */}
      <circle cx="16" cy="32" r="0.6" fill="#FFD700" opacity="0.7" />
      <circle cx="28" cy="30" r="0.5" fill="#FFA500" opacity="0.6" />
      <circle cx="20" cy="28" r="0.4" fill="#FFE880" opacity="0.5" />

      {/* Wood logs at base */}
      {/* Log 1 */}
      <ellipse cx="16" cy="42" rx="4" ry="2" fill="url(#wf-log)" />
      <ellipse cx="16" cy="42" rx="4" ry="2" fill="none" stroke="#2A1508" strokeWidth="0.4" />
      <path d="M13 41 L14 42" stroke="#4A2A14" strokeWidth="0.4" />
      <path d="M17 41.5 L18 42.5" stroke="#4A2A14" strokeWidth="0.4" />
      {/* Log end grain */}
      <ellipse cx="12.5" cy="42" rx="1.2" ry="1.8" fill="#8B5E3C" />
      <circle cx="12.5" cy="42" r="0.5" fill="#6B4226" />

      {/* Log 2 */}
      <ellipse cx="28" cy="43" rx="4.5" ry="1.8" fill="url(#wf-log)" />
      <ellipse cx="28" cy="43" rx="4.5" ry="1.8" fill="none" stroke="#2A1508" strokeWidth="0.4" />
      <path d="M26 42.5 L27 43.5" stroke="#4A2A14" strokeWidth="0.4" />
      <path d="M30 42 L31 43" stroke="#4A2A14" strokeWidth="0.4" />
      {/* Log end grain */}
      <ellipse cx="32" cy="43" rx="1" ry="1.6" fill="#8B5E3C" />
      <circle cx="32" cy="43" r="0.4" fill="#6B4226" />

      {/* Hearth / base */}
      <rect x="1" y="44" width="42" height="3" rx="1" fill="url(#wf-stoneDark)" />
      <rect x="1" y="44" width="42" height="1" rx="0.5" fill="#9A8468" opacity="0.3" />

      {/* Dome highlights */}
      <ellipse cx="14" cy="14" rx="5" ry="3" fill="white" opacity="0.08" />
      <path d="M6 22 Q10 20 14 22" stroke="white" strokeWidth="0.5" opacity="0.1" />

      {/* Warm glow on arch stones */}
      <ellipse cx="22" cy="22" rx="4" ry="1.5" fill="#FFA85C" opacity="0.12" />
    </svg>
  );
}
