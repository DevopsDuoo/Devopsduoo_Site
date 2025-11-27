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
  
  // Icon variant - Hexagon with infinity pipeline
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
          <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="iconGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        
        {/* Hexagon container (like Docker/Kubernetes) */}
        <path
          d="M 100 20 L 170 60 L 170 140 L 100 180 L 30 140 L 30 60 Z"
          fill="none"
          stroke="url(#iconGrad)"
          strokeWidth="6"
        />
        
        {/* Infinity symbol (CI/CD continuous loop) */}
        <path
          d="M 60 100 C 60 85, 70 80, 80 90 C 90 100, 90 90, 100 100 C 110 110, 110 100, 120 90 C 130 80, 140 85, 140 100 C 140 115, 130 120, 120 110 C 110 100, 110 110, 100 100 C 90 90, 90 100, 80 110 C 70 120, 60 115, 60 100 Z"
          fill="url(#iconGrad)"
          opacity="0.9"
        />
        
        {/* Pipeline flow arrows */}
        <g opacity="0.8">
          {/* Left to right arrow */}
          <path d="M 45 70 L 75 70 L 70 65 M 75 70 L 70 75" 
                stroke="url(#iconGrad2)" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                fill="none" />
          
          {/* Right to left arrow */}
          <path d="M 155 130 L 125 130 L 130 125 M 125 130 L 130 135" 
                stroke="url(#iconGrad)" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                fill="none" />
        </g>
        
        {/* Container/node indicators (3 dots representing microservices) */}
        <circle cx="70" cy="100" r="5" fill="#0EA5E9" />
        <circle cx="100" cy="100" r="5" fill="#06B6D4" />
        <circle cx="130" cy="100" r="5" fill="#10B981" />
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
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
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
          letterSpacing="0"
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
      viewBox="0 0 480 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="fullGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <linearGradient id="fullTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      
      {/* Icon part */}
      <g transform="translate(20, 20)">
        {/* Hexagon */}
        <path
          d="M 80 16 L 136 48 L 136 112 L 80 144 L 24 112 L 24 48 Z"
          fill="none"
          stroke="url(#fullGrad)"
          strokeWidth="5"
        />
        
        {/* Infinity symbol */}
        <path
          d="M 48 80 C 48 68, 56 64, 64 72 C 72 80, 72 72, 80 80 C 88 88, 88 80, 96 72 C 104 64, 112 68, 112 80 C 112 92, 104 96, 96 88 C 88 80, 88 88, 80 80 C 72 72, 72 80, 64 88 C 56 96, 48 92, 48 80 Z"
          fill="url(#fullGrad)"
          opacity="0.9"
        />
        
        {/* Pipeline arrows */}
        <g opacity="0.75">
          <path d="M 36 56 L 60 56 L 56 52 M 60 56 L 56 60" 
                stroke="url(#fullGrad2)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                fill="none" />
          <path d="M 124 104 L 100 104 L 104 100 M 100 104 L 104 108" 
                stroke="url(#fullGrad)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                fill="none" />
        </g>
        
        {/* Microservices nodes */}
        <circle cx="56" cy="80" r="4" fill="#0EA5E9" />
        <circle cx="80" cy="80" r="4" fill="#06B6D4" />
        <circle cx="104" cy="80" r="4" fill="#10B981" />
      </g>
      
      {/* Text part */}
      <g transform="translate(190, 0)">
        <text 
          x="0" 
          y="90" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="52" 
          fontWeight="700" 
          fill="currentColor"
          className="dark:fill-white"
          letterSpacing="0"
        >
          DevOps
        </text>
        <text 
          x="0" 
          y="150" 
          fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
          fontSize="52" 
          fontWeight="700" 
          fill="url(#fullTextGrad)"
          letterSpacing="2"
        >
          Duoo
        </text>
        
        {/* Subtle tech accent line */}
        <line 
          x1="0" 
          y1="158" 
          x2="160" 
          y2="158" 
          stroke="url(#fullTextGrad)" 
          strokeWidth="2" 
          strokeLinecap="round"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}