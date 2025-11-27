'use client';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: 'full' | 'icon' | 'text';
  animated?: boolean;
}

export default function Logo({ 
  width = 200, 
  height = 60, 
  className = '',
  variant = 'full',
  animated = false
}: LogoProps) {
  
  // Icon variant - Circular badge with D and upward arrow
  if (variant === 'icon') {
    return (
      <svg 
        width={height} 
        height={height} 
        viewBox="0 0 440 440" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a8cff" />
            <stop offset="100%" stopColor="#15e5c6" />
          </linearGradient>
        </defs>
        
        {/* Outer gradient ring */}
        <circle 
          cx="220" 
          cy="220" 
          r="200" 
          fill="none" 
          stroke="url(#iconGradient)" 
          strokeWidth="16"
        />
        
        {/* D shape block on the right */}
        <path
          d="M 250 115
             H 310
             Q 380 115, 380 220
             Q 380 325, 310 325
             H 250
             Z"
          fill="url(#iconGradient)"
        />
        
        {/* Large upward arrow outline */}
        <path
          d="M 150 330
             V 190
             H 120
             L 190 110
             L 260 190
             H 230
             V 330
             Z"
          fill="none"
          stroke="url(#iconGradient)"
          strokeWidth="12"
          strokeLinejoin="round"
        />
        
        {/* Circuit-style lines inside arrow */}
        <path
          d="M 170 320
             V 210
             L 190 185
             L 210 210
             V 235
             L 195 250
             L 205 265
             V 290"
          fill="none"
          stroke="url(#iconGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Small solid inner arrow */}
        <path
          d="M 210 320
             V 240
             H 190
             L 220 205
             L 250 240
             H 230
             V 320
             Z"
          fill="url(#iconGradient)"
        />
      </svg>
    );
  }

  // Text only version
  if (variant === 'text') {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 400 140" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a8cff" />
            <stop offset="100%" stopColor="#15e5c6" />
          </linearGradient>
        </defs>
        
        <text 
          x="0" 
          y="60" 
          fontFamily="'Segoe UI', Roboto, system-ui, -apple-system, sans-serif" 
          fontSize="64" 
          fontWeight="700" 
          fill="currentColor"
          className="dark:fill-white"
        >
          DevOps
        </text>
        <text 
          x="0" 
          y="125" 
          fontFamily="'Segoe UI', Roboto, system-ui, -apple-system, sans-serif" 
          fontSize="74" 
          fontWeight="700" 
          fill="url(#textGradient)"
        >
          Duoo
        </text>
      </svg>
    );
  }

  // Full logo with icon and text
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 1200 440" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fullGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a8cff" />
          <stop offset="100%" stopColor="#15e5c6" />
        </linearGradient>
        <linearGradient id="fullTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a8cff" />
          <stop offset="100%" stopColor="#15e5c6" />
        </linearGradient>
      </defs>
      
      {/* Icon part */}
      <g>
        {/* Outer gradient ring */}
        <circle 
          cx="220" 
          cy="220" 
          r="200" 
          fill="none" 
          stroke="url(#fullGradient)" 
          strokeWidth="16"
        />
        
        {/* D shape block */}
        <path
          d="M 250 115
             H 310
             Q 380 115, 380 220
             Q 380 325, 310 325
             H 250
             Z"
          fill="url(#fullGradient)"
        />
        
        {/* Large upward arrow outline */}
        <path
          d="M 150 330
             V 190
             H 120
             L 190 110
             L 260 190
             H 230
             V 330
             Z"
          fill="none"
          stroke="url(#fullGradient)"
          strokeWidth="12"
          strokeLinejoin="round"
        />
        
        {/* Circuit-style lines inside arrow */}
        <path
          d="M 170 320
             V 210
             L 190 185
             L 210 210
             V 235
             L 195 250
             L 205 265
             V 290"
          fill="none"
          stroke="url(#fullGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Small solid inner arrow */}
        <path
          d="M 210 320
             V 240
             H 190
             L 220 205
             L 250 240
             H 230
             V 320
             Z"
          fill="url(#fullGradient)"
        />
      </g>
      
      {/* Text part */}
      <g transform="translate(480, 0)">
        <text 
          x="0" 
          y="180" 
          fontFamily="'Segoe UI', Roboto, system-ui, -apple-system, sans-serif" 
          fontSize="90" 
          fontWeight="700" 
          fill="currentColor"
          className="dark:fill-white"
        >
          DevOps
        </text>
        <text 
          x="0" 
          y="290" 
          fontFamily="'Segoe UI', Roboto, system-ui, -apple-system, sans-serif" 
          fontSize="110" 
          fontWeight="700" 
          fill="url(#fullTextGradient)"
        >
          Duoo
        </text>
      </g>
    </svg>
  );
}