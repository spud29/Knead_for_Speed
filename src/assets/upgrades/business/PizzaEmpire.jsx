export default function PizzaEmpire({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="pe-crown" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="pe-crownHi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF0A0" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="pe-pizza" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5D76E" />
          <stop offset="50%" stopColor="#D4A044" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="pe-sauce" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E84030" />
          <stop offset="100%" stopColor="#B02020" />
        </linearGradient>
        <radialGradient id="pe-jewel-r" cx="0.35" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#CC0000" />
        </radialGradient>
        <radialGradient id="pe-jewel-b" cx="0.35" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#6BA3FF" />
          <stop offset="100%" stopColor="#0044CC" />
        </radialGradient>
        <radialGradient id="pe-jewel-g" cx="0.35" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#6BFF6B" />
          <stop offset="100%" stopColor="#008800" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="24" cy="44" rx="16" ry="3" fill="#00000020" />

      {/* Pizza base */}
      <ellipse cx="24" cy="34" rx="18" ry="8" fill="url(#pe-pizza)" />

      {/* Crust edge */}
      <ellipse cx="24" cy="34" rx="18" ry="8" fill="none" stroke="#A07828" strokeWidth="1" />

      {/* Inner crust line */}
      <ellipse cx="24" cy="34" rx="15" ry="6.5" fill="none" stroke="#C49030" strokeWidth="0.6" opacity="0.5" />

      {/* Sauce */}
      <ellipse cx="24" cy="33.5" rx="14" ry="5.5" fill="url(#pe-sauce)" opacity="0.65" />

      {/* Cheese */}
      <ellipse cx="24" cy="33" rx="13" ry="5" fill="#F5D76E" opacity="0.5" />

      {/* Pepperoni on pizza */}
      <circle cx="18" cy="32" r="1.8" fill="#8B1A1A" />
      <circle cx="28" cy="31" r="1.5" fill="#8B1A1A" />
      <circle cx="22" cy="36" r="1.3" fill="#8B1A1A" />
      <circle cx="32" cy="34" r="1.4" fill="#8B1A1A" />

      {/* Jewels embedded in crust */}
      <circle cx="10" cy="34" r="1.5" fill="url(#pe-jewel-r)" />
      <circle cx="10" cy="34" r="1.5" fill="none" stroke="#FF9999" strokeWidth="0.3" />
      <circle cx="17" cy="28" r="1.5" fill="url(#pe-jewel-b)" />
      <circle cx="17" cy="28" r="1.5" fill="none" stroke="#99BBFF" strokeWidth="0.3" />
      <circle cx="31" cy="28" r="1.5" fill="url(#pe-jewel-g)" />
      <circle cx="31" cy="28" r="1.5" fill="none" stroke="#99FF99" strokeWidth="0.3" />
      <circle cx="38" cy="34" r="1.5" fill="url(#pe-jewel-r)" />
      <circle cx="38" cy="34" r="1.5" fill="none" stroke="#FF9999" strokeWidth="0.3" />
      <circle cx="24" cy="40" r="1.5" fill="url(#pe-jewel-b)" />
      <circle cx="24" cy="40" r="1.5" fill="none" stroke="#99BBFF" strokeWidth="0.3" />

      {/* Jewel sparkles */}
      <circle cx="9.5" cy="33.3" r="0.4" fill="white" opacity="0.7" />
      <circle cx="16.5" cy="27.3" r="0.4" fill="white" opacity="0.7" />
      <circle cx="30.5" cy="27.3" r="0.4" fill="white" opacity="0.7" />

      {/* Crown */}
      <path d="M10 22 L12 10 L18 17 L24 6 L30 17 L36 10 L38 22 Z" fill="url(#pe-crown)" />

      {/* Crown base band */}
      <rect x="10" y="20" width="28" height="4" rx="0.5" fill="url(#pe-crownHi)" />

      {/* Crown band jewels */}
      <circle cx="17" cy="22" r="1.2" fill="url(#pe-jewel-r)" />
      <circle cx="24" cy="22" r="1.4" fill="url(#pe-jewel-b)" />
      <circle cx="31" cy="22" r="1.2" fill="url(#pe-jewel-g)" />

      {/* Crown tips - gold balls */}
      <circle cx="12" cy="10" r="1.5" fill="#FFE44D" />
      <circle cx="18" cy="17" r="1.2" fill="#FFE44D" />
      <circle cx="24" cy="6" r="1.8" fill="#FFE44D" />
      <circle cx="30" cy="17" r="1.2" fill="#FFE44D" />
      <circle cx="36" cy="10" r="1.5" fill="#FFE44D" />

      {/* Crown highlight */}
      <path d="M14 15 L18 17 L24 8 L22 14 Z" fill="white" opacity="0.12" />

      {/* Crown edge detail */}
      <path d="M10 22 L12 10 L18 17 L24 6 L30 17 L36 10 L38 22" fill="none" stroke="#B8860B" strokeWidth="0.5" />
    </svg>
  );
}
