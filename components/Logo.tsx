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
  
  // Icon variant - Circular badge with D arrow and circuit pattern
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
          <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
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
        
        {/* Circuit board pattern on left side forming part of D */}
        <g opacity="0.9">
          {/* Vertical circuit lines */}
          <path d="M 60 50 L 60 80" stroke="#06B6D4" strokeWidth="2" fill="none" />
          <path d="M 70 55 L 70 75" stroke="#06B6D4" strokeWidth="2" fill="none" />
          <path d="M 55 60 L 55 85" stroke="#3B82F6" strokeWidth="2" fill="none" />
          
          {/* Horizontal connecting lines */}
          <path d="M 55 60 L 70 60" stroke="#06B6D4" strokeWidth="2" fill="none" />
          <path d="M 55 75 L 70 75" stroke="#3B82F6" strokeWidth="2" fill="none" />
          
          {/* Circuit nodes */}
          <circle cx="60" cy="60" r="2.5" fill="#06B6D4" />
          <circle cx="70" cy="60" r="2.5" fill="#06B6D4" />
          <circle cx="60" cy="75" r="2.5" fill="#3B82F6" />
          <circle cx="55" cy="75" r="2.5" fill="#3B82F6" />
          
          {/* Triangle/arrow circuit pattern */}
          <path d="M 65 90 L 75 95 L 65 100 Z" fill="#06B6D4" opacity="0.7" />
          <path d="M 58 95 L 63 90 L 63 100 Z" fill="#3B82F6" opacity="0.7" />
        </g>
        
        {/* Large D shape with curved right side */}
        <path
          d="M 70 40 L 70 160 M 70 40 C 120 40, 150 70, 150 100 C 150 130, 120 160, 70 160"
          stroke="url(#arrowGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Upward arrow integrated into the D */}
        <g>
          {/* Arrow shaft */}
          <path 
            d="M 100 150 L 100 80" 
            stroke="url(#arrowGrad)" 
            strokeWidth="12" 
            strokeLinecap="round"
          />
          {/* Arrow head */}
          <path 
            d="M 75 105 L 100 70 L 125 105" 
            stroke="url(#arrowGrad)" 
            strokeWidth="12" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          {/* Arrow head fill */}
          <path 
            d="M 100 70 L 115 95 L 100 90 L 85 95 Z" 
            fill="url(#arrowGrad)"
          />
        </g>
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
            <stop offset="0%" stopColor="#06B6D4" />
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
        <linearGradient id="fullArrowGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="fullTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
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
        
        {/* Circuit board pattern */}
        <g opacity="0.85">
          <path d="M 52 45 L 52 72" stroke="#06B6D4" strokeWidth="2" fill="none" />
          <path d="M 62 48 L 62 68" stroke="#06B6D4" strokeWidth="2" fill="none" />
          <path d="M 47 52 L 47 75" stroke="#3B82F6" strokeWidth="2" fill="none" />
          <path d="M 47 52 L 62 52" stroke="#06B6D4" strokeWidth="2" fill="none" />
          <path d="M 47 68 L 62 68" stroke="#3B82F6" strokeWidth="2" fill="none" />
          <circle cx="52" cy="52" r="2" fill="#06B6D4" />
          <circle cx="62" cy="52" r="2" fill="#06B6D4" />
          <circle cx="52" cy="68" r="2" fill="#3B82F6" />
          <circle cx="47" cy="68" r="2" fill="#3B82F6" />
          <path d="M 57 82 L 67 87 L 57 92 Z" fill="#06B6D4" opacity="0.7" />
          <path d="M 50 87 L 55 82 L 55 92 Z" fill="#3B82F6" opacity="0.7" />
        </g>
        
        {/* D shape */}
        <path
          d="M 60 35 L 60 145 M 60 35 C 105 35, 135 62, 135 90 C 135 118, 105 145, 60 145"
          stroke="url(#fullArrowGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Upward arrow */}
        <g>
          <path 
            d="M 90 137 L 90 73" 
            stroke="url(#fullArrowGrad)" 
            strokeWidth="11" 
            strokeLinecap="round"
          />
          <path 
            d="M 68 95 L 90 63 L 112 95" 
            stroke="url(#fullArrowGrad)" 
            strokeWidth="11" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          <path 
            d="M 90 63 L 103 86 L 90 82 L 77 86 Z" 
            fill="url(#fullArrowGrad)"
          />
        </g>
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