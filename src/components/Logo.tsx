import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const GoalCoachPanda: React.FC<{ size?: number; className?: string }> = ({ 
  size = 40, 
  className = '' 
}) => {
  return (
    <img
      src="/logo.svg"
      alt="GoalCoach Panda"
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      loading="eager"
      referrerPolicy="no-referrer"
      onError={(e) => {
        // Fallback to alternate path if needed
        const target = e.currentTarget as HTMLImageElement;
        if (target.src.endsWith('/logo.svg')) {
          target.src = '/panda.svg';
        }
      }}
    />
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'light'
}) => {
  const pixelSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <GoalCoachPanda size={pixelSize} />
      {showText && (
        <div className="flex items-baseline tracking-tight font-extrabold leading-none">
          <span 
            className={`transition-colors ${
              isDark ? 'text-white' : 'text-[#0d3b1e]'
            } ${size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl'}`}
            style={{ fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Goal
          </span>
          <span 
            className={`text-[#4ea612] ${
              size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl'
            }`}
            style={{ fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Coach
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
