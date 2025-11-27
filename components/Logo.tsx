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
  
  // Icon variant - Triangle with circuit pattern + upward arrow + D curve
  if (variant === 'icon') {
    return (
      <svg 
        width={height} 
        height={height} 
        viewBox="0 0 400 400" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="iconGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        
        {/* Outer gradient circle */}
        <circle 
          cx="200" 
          cy="200" 
          r="180" 
          fill="none" 
          stroke="url(#iconGrad)" 
          strokeWidth="12"
        />
        
        {/* Triangle pointing upward with circuit pattern inside */}
        <path
          d="M 120 280 L 200 120 L 280 280 Z"
          fill="none"
          stroke="url(#iconGrad)"
          strokeWidth="8"
          strokeLinejoin="miter"
        />
        
        {/* Circuit board pattern inside triangle */}
        <g opacity="0.9">
          {/* Vertical circuit lines */}
          <line x1="160" y1="220" x2="160" y2="180" stroke="#06b6d4" strokeWidth="3" />
          <line x1="175" y1="230" x2="175" y2="190" stroke="#3b82f6" strokeWidth="3" />
          <line x1="190" y1="240" x2="190" y2="170" stroke="#06b6d4" strokeWidth="3" />
          <line x1="205" y1="230" x2="205" y2="190" stroke="#14b8a6" strokeWidth="3" />
          <line x1="220" y1="220" x2="220" y2="200" stroke="#3b82f6" strokeWidth="3" />
          
          {/* Horizontal connecting lines */}
          <line x1="160" y1="200" x2="190" y2="200" stroke="#06b6d4" strokeWidth="2" />
          <line x1="175" y1="210" x2="205" y2="210" stroke="#3b82f6" strokeWidth="2" />
          <line x1="190" y1="220" x2="220" y2="220" stroke="#14b8a6" strokeWidth="2" />
          
          {/* Circuit nodes */}
          <circle cx="160" cy="200" r="2.5" fill="#06b6d4" />
          <circle cx="175" cy="210" r="2.5" fill="#3b82f6" />
          <circle cx="190" cy="200" r="2.5" fill="#06b6d4" />
          <circle cx="190" cy="220" r="2.5" fill="#14b8a6" />
          <circle cx="205" cy="210" r="2.5" fill="#3b82f6" />
          <circle cx="220" cy="220" r="2.5" fill="#14b8a6" />
        </g>
        
        {/* Large upward arrow on the right side */}
        <path
          d="M 260 280 L 260 180 L 240 180 L 280 140 L 320 180 L 300 180 L 300 280 Z"
          fill="url(#iconGrad)"
        />
        
        {/* D curve connecting elements */}
        <path
          d="M 120 140 C 200 140, 240 160, 240 200 C 240 240, 200 260, 120 260"
          stroke="url(#iconGrad)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
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
          <linearGradient id="txtGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#14b8a6" />
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
          fill="url(#txtGrad)"
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
      viewBox="0 0 1000 400" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fullGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      
      {/* Icon part */}
      <g>
        {/* Outer gradient circle */}
        <circle 
          cx="200" 
          cy="200" 
          r="180" 
          fill="none" 
          stroke="url(#fullGrad)" 
          strokeWidth="12"
        />
        
        {/* Triangle with circuit pattern */}
        <path
          d="M 120 280 L 200 120 L 280 280 Z"
          fill="none"
          stroke="url(#fullGrad)"
          strokeWidth="8"
          strokeLinejoin="miter"
        />
        
        {/* Circuit board pattern */}
        <g opacity="0.9">
          <line x1="160" y1="220" x2="160" y2="180" stroke="#06b6d4" strokeWidth="3" />
          <line x1="175" y1="230" x2="175" y2="190" stroke="#3b82f6" strokeWidth="3" />
          <line x1="190" y1="240" x2="190" y2="170" stroke="#06b6d4" strokeWidth="3" />
          <line x1="205" y1="230" x2="205" y2="190" stroke="#14b8a6" strokeWidth="3" />
          <line x1="220" y1="220" x2="220" y2="200" stroke="#3b82f6" strokeWidth="3" />
          <line x1="160" y1="200" x2="190" y2="200" stroke="#06b6d4" strokeWidth="2" />
          <line x1="175" y1="210" x2="205" y2="210" stroke="#3b82f6" strokeWidth="2" />
          <line x1="190" y1="220" x2="220" y2="220" stroke="#14b8a6" strokeWidth="2" />
          <circle cx="160" cy="200" r="2.5" fill="#06b6d4" />
          <circle cx="175" cy="210" r="2.5" fill="#3b82f6" />
          <circle cx="190" cy="200" r="2.5" fill="#06b6d4" />
          <circle cx="190" cy="220" r="2.5" fill="#14b8a6" />
          <circle cx="205" cy="210" r="2.5" fill="#3b82f6" />
          <circle cx="220" cy="220" r="2.5" fill="#14b8a6" />
        </g>
        
        {/* Large upward arrow */}
        <path
          d="M 260 280 L 260 180 L 240 180 L 280 140 L 320 180 L 300 180 L 300 280 Z"
          fill="url(#fullGrad)"
        />
        
        {/* D curve */}
        <path
          d="M 120 140 C 200 140, 240 160, 240 200 C 240 240, 200 260, 120 260"
          stroke="url(#fullGrad)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      
      {/* Text part */}
      <g transform="translate(450, 0)">
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
          fill="url(#fullGrad)"
        >
          Duoo
        </text>
      </g>
    </svg>
  );
}