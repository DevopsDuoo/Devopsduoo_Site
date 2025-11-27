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
  
  // Icon variant - DevOps gears with infinity loop
  if (variant === 'icon') {
    return (
      <svg 
        width={height} 
        height={height} 
        viewBox="0 0 120 120" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="iconGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="iconGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        
        {/* Outer circle border */}
        <circle cx="60" cy="60" r="55" stroke="url(#iconGradient1)" strokeWidth="2.5" fill="none" opacity="0.3" />
        
        {/* Infinity loop connecting Dev and Ops */}
        <path
          d="M 30 60 C 30 45, 40 42, 45 53 C 50 64, 50 53, 60 60 C 70 67, 70 56, 75 53 C 80 42, 90 45, 90 60 C 90 75, 80 78, 75 67 C 70 56, 70 67, 60 60 C 50 53, 50 64, 45 67 C 40 78, 30 75, 30 60 Z"
          fill="url(#iconGradient1)"
          opacity="0.9"
          className={animated ? 'animate-pulse' : ''}
          style={{ animationDuration: '3s' }}
        />
        
        {/* Left gear (Dev) */}
        <g className={animated ? 'animate-spin-slow' : ''} style={{ transformOrigin: '35px 60px', animationDuration: '8s', animationDirection: 'reverse' }}>
          <circle cx="35" cy="60" r="12" fill="#1E293B" className="dark:fill-gray-800" stroke="url(#iconGradient1)" strokeWidth="2" />
          {/* Gear teeth */}
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 35 + Math.cos(rad) * 15;
            const y = 60 + Math.sin(rad) * 15;
            return (
              <rect
                key={angle}
                x={x - 2}
                y={y - 4}
                width="4"
                height="8"
                fill="#06B6D4"
                transform={`rotate(${angle}, ${x}, ${y})`}
                rx="1"
              />
            );
          })}
          <circle cx="35" cy="60" r="5" fill="#3B82F6" />
        </g>
        
        {/* Right gear (Ops) */}
        <g className={animated ? 'animate-spin-slow' : ''} style={{ transformOrigin: '85px 60px', animationDuration: '8s' }}>
          <circle cx="85" cy="60" r="12" fill="#1E293B" className="dark:fill-gray-800" stroke="url(#iconGradient2)" strokeWidth="2" />
          {/* Gear teeth */}
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 85 + Math.cos(rad) * 15;
            const y = 60 + Math.sin(rad) * 15;
            return (
              <rect
                key={`r${angle}`}
                x={x - 2}
                y={y - 4}
                width="4"
                height="8"
                fill="#10B981"
                transform={`rotate(${angle}, ${x}, ${y})`}
                rx="1"
              />
            );
          })}
          <circle cx="85" cy="60" r="5" fill="#06B6D4" />
        </g>
        
        {/* Center connecting element - pipeline flow */}
        <circle cx="60" cy="60" r="8" fill="url(#iconGradient1)" opacity="0.9" />
        <circle cx="60" cy="60" r="3" fill="#ffffff" className="dark:fill-gray-900" />
        
        {/* Flow arrows */}
        <path d="M 48 55 L 53 60 L 48 65" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="dark:stroke-gray-900" />
        <path d="M 72 55 L 67 60 L 72 65" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="dark:stroke-gray-900" />
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
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
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
          fill="url(#textGrad)"
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
      viewBox="0 0 480 120" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fullGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="fullGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="textGradFull" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      
      {/* Icon part - Compact design */}
      <g transform="translate(10, 10)">
        {/* Outer circle */}
        <circle cx="50" cy="50" r="48" stroke="url(#fullGrad1)" strokeWidth="2" fill="none" opacity="0.25" />
        
        {/* Infinity loop */}
        <path
          d="M 25 50 C 25 38, 33 36, 37 46 C 41 56, 41 46, 50 50 C 59 54, 59 44, 63 46 C 67 36, 75 38, 75 50 C 75 62, 67 64, 63 54 C 59 44, 59 54, 50 50 C 41 46, 41 56, 37 54 C 33 64, 25 62, 25 50 Z"
          fill="url(#fullGrad1)"
          opacity="0.85"
        />
        
        {/* Left gear (Dev) */}
        <g>
          <circle cx="30" cy="50" r="10" fill="#1E293B" className="dark:fill-gray-800" stroke="url(#fullGrad1)" strokeWidth="1.5" />
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 30 + Math.cos(rad) * 12.5;
            const y = 50 + Math.sin(rad) * 12.5;
            return (
              <rect
                key={angle}
                x={x - 1.5}
                y={y - 3}
                width="3"
                height="6"
                fill="#06B6D4"
                transform={`rotate(${angle}, ${x}, ${y})`}
                rx="0.5"
              />
            );
          })}
          <circle cx="30" cy="50" r="4" fill="#3B82F6" />
        </g>
        
        {/* Right gear (Ops) */}
        <g>
          <circle cx="70" cy="50" r="10" fill="#1E293B" className="dark:fill-gray-800" stroke="url(#fullGrad2)" strokeWidth="1.5" />
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 70 + Math.cos(rad) * 12.5;
            const y = 50 + Math.sin(rad) * 12.5;
            return (
              <rect
                key={`r${angle}`}
                x={x - 1.5}
                y={y - 3}
                width="3"
                height="6"
                fill="#10B981"
                transform={`rotate(${angle}, ${x}, ${y})`}
                rx="0.5"
              />
            );
          })}
          <circle cx="70" cy="50" r="4" fill="#06B6D4" />
        </g>
        
        {/* Center pipeline connector */}
        <circle cx="50" cy="50" r="6.5" fill="url(#fullGrad1)" opacity="0.9" />
        <circle cx="50" cy="50" r="2.5" fill="#ffffff" className="dark:fill-gray-900" />
        
        {/* Flow indicators */}
        <path d="M 40 47 L 44 50 L 40 53" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="dark:stroke-gray-900" />
        <path d="M 60 47 L 56 50 L 60 53" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="dark:stroke-gray-900" />
      </g>
      
      {/* Text part */}
      <g transform="translate(135, 0)">
        <text 
          x="0" 
          y="54" 
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" 
          fontSize="44" 
          fontWeight="700" 
          fill="currentColor"
          className="dark:fill-white"
          letterSpacing="1"
        >
          DevOps
        </text>
        <text 
          x="0" 
          y="102" 
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" 
          fontSize="44" 
          fontWeight="700" 
          fill="url(#textGradFull)"
          letterSpacing="3.5"
        >
          Duoo
        </text>
        
        {/* Accent underline */}
        <line 
          x1="0" 
          y1="110" 
          x2="170" 
          y2="110" 
          stroke="url(#textGradFull)" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}