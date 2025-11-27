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
  
  // Icon variant - Simple "DD" with modern styling
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
          <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Simple rounded square background */}
        <rect 
          x="10" 
          y="10" 
          width="80" 
          height="80" 
          rx="16" 
          fill="url(#iconGrad)"
        />
        
        {/* "DD" letters in white */}
        <text 
          x="50" 
          y="68" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="48" 
          fontWeight="900" 
          fill="white"
          textAnchor="middle"
        >
          DD
        </text>
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
          <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        <text 
          x="5" 
          y="38" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="38" 
          fontWeight="700" 
          fill="currentColor"
          className="dark:fill-white"
        >
          DevOps
        </text>
        <text 
          x="5" 
          y="78" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="38" 
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
        <linearGradient id="fullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      
      {/* Icon part - Simple DD badge */}
      <g>
        <rect 
          x="10" 
          y="10" 
          width="80" 
          height="80" 
          rx="16" 
          fill="url(#fullGrad)"
        />
        <text 
          x="50" 
          y="68" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="48" 
          fontWeight="900" 
          fill="white"
          textAnchor="middle"
        >
          DD
        </text>
      </g>
      
      {/* Text part */}
      <g transform="translate(110, 0)">
        <text 
          x="0" 
          y="48" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="32" 
          fontWeight="700" 
          fill="currentColor"
          className="dark:fill-white"
        >
          DevOps
        </text>
        <text 
          x="0" 
          y="78" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="32" 
          fontWeight="700" 
          fill="url(#fullGrad)"
          letterSpacing="2"
        >
          Duoo
        </text>
      </g>
    </svg>
  );
}