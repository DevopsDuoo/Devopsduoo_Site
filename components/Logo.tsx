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
  
  // Icon only version (circular with infinity symbol)
  if (variant === 'icon') {
    return (
      <svg 
        width={height} 
        height={height} 
        viewBox="0 0 100 100" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="url(#logoGradient)" 
          opacity="0.1"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="url(#logoGradient)" 
          strokeWidth="3"
          className={animated ? 'animate-spin-slow' : ''}
          style={{ transformOrigin: 'center', animationDuration: '20s' }}
        />
        
        {/* DevOps Infinity Symbol */}
        <path
          d="M 30 50 Q 35 35, 50 45 Q 65 55, 70 50 Q 65 45, 50 55 Q 35 65, 30 50 Z"
          fill="url(#infinityGradient)"
          className={animated ? 'animate-pulse' : ''}
        />
        
        {/* Center dots representing "Duoo" (2) */}
        <circle cx="42" cy="50" r="3" fill="white" />
        <circle cx="58" cy="50" r="3" fill="white" />
      </svg>
    );
  }

  // Text only version
  if (variant === 'text') {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 300 60" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <text 
          x="0" 
          y="40" 
          fontFamily="Arial, sans-serif" 
          fontSize="36" 
          fontWeight="bold" 
          fill="url(#textGradient)"
        >
          DevOps Duoo
        </text>
      </svg>
    );
  }

  // Full logo with icon and text
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 300 80" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fullLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="textGradientFull" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E293B" className="dark:stop-color-white" />
          <stop offset="100%" stopColor="#334155" className="dark:stop-color-gray-200" />
        </linearGradient>
      </defs>
      
      {/* Icon part */}
      <g>
        {/* Background circle */}
        <circle 
          cx="40" 
          cy="40" 
          r="35" 
          fill="url(#fullLogoGradient)" 
          opacity="0.1"
        />
        <circle 
          cx="40" 
          cy="40" 
          r="35" 
          fill="none" 
          stroke="url(#fullLogoGradient)" 
          strokeWidth="2.5"
          className={animated ? 'animate-spin-slow' : ''}
          style={{ transformOrigin: '40px 40px', animationDuration: '20s' }}
        />
        
        {/* DevOps Infinity Symbol */}
        <path
          d="M 22 40 Q 27 28, 40 36 Q 53 44, 58 40 Q 53 36, 40 44 Q 27 52, 22 40 Z"
          fill="url(#fullLogoGradient)"
          className={animated ? 'animate-pulse' : ''}
        />
        
        {/* Center dots */}
        <circle cx="35" cy="40" r="2.5" fill="white" />
        <circle cx="45" cy="40" r="2.5" fill="white" />
      </g>
      
      {/* Text part */}
      <g>
        <text 
          x="90" 
          y="35" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="24" 
          fontWeight="700" 
          className="fill-gray-900 dark:fill-white"
        >
          DevOps
        </text>
        <text 
          x="90" 
          y="58" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="28" 
          fontWeight="800" 
          fill="url(#fullLogoGradient)"
        >
          Duoo
        </text>
        
        {/* Underline accent */}
        <line 
          x1="90" 
          y1="62" 
          x2="160" 
          y2="62" 
          stroke="url(#fullLogoGradient)" 
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
