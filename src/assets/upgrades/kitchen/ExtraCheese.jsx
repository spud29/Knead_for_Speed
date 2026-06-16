export default function ExtraCheese({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="ec-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5D76E" />
          <stop offset="55%" stopColor="#D4A044" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="ec-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A044" />
          <stop offset="100%" stopColor="#8B6529" />
        </linearGradient>
        <linearGradient id="ec-melt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5D76E" />
          <stop offset="100%" stopColor="#E8C84A" />
        </linearGradient>
        <radialGradient id="ec-hole" cx="0.4" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="#C4922E" />
          <stop offset="100%" stopColor="#8B6529" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="24" cy="42" rx="16" ry="3" fill="#00000020" />

      {/* Wedge side face (depth) */}
      <path
        d="M6 30 L6 34 Q8 38 14 36 L14 32 Z"
        fill="url(#ec-side)"
      />
      <path
        d="M14 32 L14 36 L40 34 L40 30 Z"
        fill="url(#ec-side)"
        opacity="0.85"
      />

      {/* Main wedge top face */}
      <path
        d="M6 30 L24 8 L40 30 L14 32 Z"
        fill="url(#ec-body)"
      />

      {/* Rind edge along bottom */}
      <path
        d="M6 30 L14 32 L40 30"
        fill="none"
        stroke="#C49030"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Cheese holes */}
      <ellipse cx="18" cy="22" rx="3.5" ry="3" fill="url(#ec-hole)" />
      <ellipse cx="18" cy="22" rx="3.5" ry="3" fill="none" stroke="#A07828" strokeWidth="0.5" />

      <ellipse cx="30" cy="24" rx="2.5" ry="2.2" fill="url(#ec-hole)" />
      <ellipse cx="30" cy="24" rx="2.5" ry="2.2" fill="none" stroke="#A07828" strokeWidth="0.5" />

      <ellipse cx="22" cy="29" rx="2" ry="1.6" fill="url(#ec-hole)" />
      <ellipse cx="22" cy="29" rx="2" ry="1.6" fill="none" stroke="#A07828" strokeWidth="0.5" />

      {/* Melting drip on left edge */}
      <path
        d="M8 31 Q6 34 7 37 Q8 39 9 37 Q10 34 9 32"
        fill="url(#ec-melt)"
      />
      <path
        d="M12 32 Q11 35 11.5 38 Q12.5 39 13 37 Q13 35 12.5 33"
        fill="url(#ec-melt)"
      />

      {/* Glossy highlight on top face */}
      <ellipse cx="20" cy="16" rx="7" ry="3" fill="white" opacity="0.18" />
      <ellipse cx="28" cy="14" rx="3" ry="1.5" fill="white" opacity="0.12" />

      {/* Highlight on side face */}
      <ellipse cx="28" cy="32" rx="6" ry="1" fill="white" opacity="0.1" />

      {/* Subtle edge highlight on wedge tip */}
      <line x1="24" y1="8" x2="22" y2="14" stroke="white" strokeWidth="0.7" opacity="0.2" strokeLinecap="round" />
    </svg>
  );
}
