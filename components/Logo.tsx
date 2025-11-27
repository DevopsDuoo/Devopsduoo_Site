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
        viewBox="0 0 200 200" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="dGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        
        {/* Outer circle with gradient border */}
        <circle 
          cx="100" 
          cy="100" 
          r="90" 
          fill="none" 
          stroke="url(#circleGrad)" 
          strokeWidth="4"
        />
        
        {/* D shape outline - left vertical bar and right curve */}
        <path
          d="M 65 50 L 65 150"
          stroke="url(#dGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 65 50 C 130 50, 145 80, 145 100 C 145 120, 130 150, 65 150"
          stroke="url(#dGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Circuit board pattern on LEFT side */}
        <g opacity="0.9">
          {/* Vertical lines */}
          <line x1="45" y1="70" x2="45" y2="90" stroke="#06B6D4" strokeWidth="2.5" />
          <line x1="52" y1="65" x2="52" y2="85" stroke="#3B82F6" strokeWidth="2.5" />
          <line x1="38" y1="75" x2="38" y2="95" stroke="#06B6D4" strokeWidth="2.5" />
          
          {/* Horizontal connecting lines */}
          <line x1="38" y1="75" x2="52" y2="75" stroke="#06B6D4" strokeWidth="2" />
          <line x1="38" y1="85" x2="52" y2="85" stroke="#3B82F6" strokeWidth="2" />
          
          {/* Circuit nodes/dots */}
          <circle cx="45" cy="75" r="2.5" fill="#06B6D4" />
          <circle cx="52" cy="75" r="2.5" fill="#06B6D4" />
          <circle cx="45" cy="85" r="2.5" fill="#3B82F6" />
          <circle cx="38" cy="85" r="2.5" fill="#3B82F6" />
          
          {/* Small triangular elements */}
          <path d="M 42 100 L 48 103 L 42 106 Z" fill="#06B6D4" />
          <path d="M 50 98 L 50 108 L 55 103 Z" fill="#3B82F6" />
        </g>
        
        {/* Upward chevron/caret arrow inside the D */}
        <path
          d="M 80 110 L 105 75 L 130 110"
          stroke="url(#dGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
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
        viewBox="0 0 320 90" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="txtGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <text 
          x="5" 
          y="38" 
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" 
          fontSize="38" 
          fontWeight="700" 
          fill="currentColor"
          className="dark:fill-white"
          letterSpacing="1"
        >
          DevOps
        </text>
        <text 
          x="5" 
          y="78" 
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" 
          fontSize="38" 
          fontWeight="700" 
          fill="url(#txtGrad)"
          letterSpacing="3"
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
      viewBox="0 0 520 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fullCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="fullDGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="fullTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      
      {/* Icon part */}
      <g transform="translate(10, 10)">
        {/* Outer circle */}
        <circle 
          cx="90" 
          cy="90" 
          r="82" 
          fill="none" 
          stroke="url(#fullCircleGrad)" 
          strokeWidth="3.5"
        />
        
        {/* D shape - vertical bar and curved side */}
        <path
          d="M 58 45 L 58 135"
          stroke="url(#fullDGrad)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 58 45 C 115 45, 130 70, 130 90 C 130 110, 115 135, 58 135"
          stroke="url(#fullDGrad)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Circuit board pattern on left side */}
        <g opacity="0.85">
          <line x1="40" y1="63" x2="40" y2="80" stroke="#06B6D4" strokeWidth="2.5" />
          <line x1="47" y1="58" x2="47" y2="76" stroke="#3B82F6" strokeWidth="2.5" />
          <line x1="33" y1="67" x2="33" y2="85" stroke="#06B6D4" strokeWidth="2.5" />
          <line x1="33" y1="67" x2="47" y2="67" stroke="#06B6D4" strokeWidth="2" />
          <line x1="33" y1="76" x2="47" y2="76" stroke="#3B82F6" strokeWidth="2" />
          <circle cx="40" cy="67" r="2.5" fill="#06B6D4" />
          <circle cx="47" cy="67" r="2.5" fill="#06B6D4" />
          <circle cx="40" cy="76" r="2.5" fill="#3B82F6" />
          <circle cx="33" cy="76" r="2.5" fill="#3B82F6" />
          <path d="M 38 90 L 43 93 L 38 96 Z" fill="#06B6D4" />
          <path d="M 45 88 L 45 98 L 50 93 Z" fill="#3B82F6" />
        </g>
        
        {/* Upward chevron arrow */}
        <path
          d="M 72 100 L 94 68 L 116 100"
          stroke="url(#fullDGrad)"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      
      {/* Text part */}
      <g transform="translate(220, 0)">
        <text 
          x="0" 
          y="95" 
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" 
          fontSize="58" 
          fontWeight="700" 
          fill="currentColor"
          className="dark:fill-white"
          letterSpacing="1"
        >
          DevOps
        </text>
        <text 
          x="0" 
          y="165" 
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" 
          fontSize="58" 
          fontWeight="700" 
          fill="url(#fullTextGrad)"
          letterSpacing="4"
        >
          Duoo
        </text>
      </g>
    </svg>
  );
}