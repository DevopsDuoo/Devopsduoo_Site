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
  
  // Icon variant - Two interlocking arrows forming D
  if (variant === 'icon') {
    return (
      <svg 
        width={height} 
        height={height} 
        viewBox="0 0 100 100" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="iconGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Left upward arrow forming left side of D */}
        <path
          d="M 25 70 L 25 30 L 35 40 M 25 30 L 15 40"
          stroke="url(#iconGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 25 70 L 25 35"
          stroke="url(#iconGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Right upward arrow forming right curve of D */}
        <path
          d="M 40 70 L 40 30 L 50 40 M 40 30 L 30 40"
          stroke="url(#iconGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 40 70 C 65 70, 75 60, 75 50 C 75 40, 65 30, 40 30"
          stroke="url(#iconGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Tech accent lines */}
        <line x1="28" y1="55" x2="37" y2="55" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
        <line x1="30" y1="60" x2="35" y2="60" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
        <circle cx="32" cy="55" r="1.5" fill="#06b6d4" />
        <circle cx="32" cy="60" r="1.5" fill="#3b82f6" />
      </svg>
    );
  }

  // Text only version
  if (variant === 'text') {
    return (
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 300 80" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <text 
          x="5" 
          y="35" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="36" 
          fontWeight="700" 
          fill="currentColor"
          className="dark:fill-white"
          letterSpacing="0"
        >
          DevOps
        </text>
        <text 
          x="5" 
          y="68" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="36" 
          fontWeight="700" 
          fill="url(#textGrad)"
          letterSpacing="2"
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
      viewBox="0 0 400 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fullGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      
      {/* Icon part - Two interlocking arrows forming D */}
      <g transform="translate(10, 10)">
        {/* Left arrow */}
        <path
          d="M 20 56 L 20 24 L 28 32 M 20 24 L 12 32"
          stroke="url(#fullGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 20 56 L 20 28"
          stroke="url(#fullGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Right arrow with curve */}
        <path
          d="M 32 56 L 32 24 L 40 32 M 32 24 L 24 32"
          stroke="url(#fullGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 32 56 C 52 56, 60 48, 60 40 C 60 32, 52 24, 32 24"
          stroke="url(#fullGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Tech accent lines */}
        <line x1="22" y1="44" x2="30" y2="44" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" />
        <line x1="24" y1="48" x2="28" y2="48" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
        <circle cx="26" cy="44" r="1" fill="#06b6d4" />
        <circle cx="26" cy="48" r="1" fill="#3b82f6" />
      </g>
      
      {/* Text part */}
      <g transform="translate(95, 0)">
        <text 
          x="0" 
          y="42" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="32" 
          fontWeight="700" 
          fill="currentColor"
          className="dark:fill-white"
          letterSpacing="0.5"
        >
          DevOps
        </text>
        <text 
          x="0" 
          y="73" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="32" 
          fontWeight="700" 
          fill="url(#fullGrad)"
          letterSpacing="2"
        >
          Duoo
        </text>
        
        {/* Subtle underline accent */}
        <line 
          x1="0" 
          y1="78" 
          x2="120" 
          y2="78" 
          stroke="url(#fullGrad)" 
          strokeWidth="2" 
          strokeLinecap="round"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}