import React from 'react';

export const BambooForestBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft gradient base: gentle mist in a bamboo grove */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f9f1] via-[#fafdf8] to-[#edf6e9]" />

      {/* Far bamboo stalks (soft, light sage mist) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full opacity-35"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left background stalks */}
        <path d="M 60 900 L 60 0" stroke="#bedec0" strokeWidth="18" strokeDasharray="90 8" />
        <path d="M 120 900 L 120 0" stroke="#c8e4ca" strokeWidth="28" strokeDasharray="110 9" />
        <path d="M 180 900 L 180 0" stroke="#d5ebd7" strokeWidth="32" strokeDasharray="130 10" />

        {/* Right background stalks */}
        <path d="M 1280 900 L 1280 0" stroke="#d5ebd7" strokeWidth="24" strokeDasharray="120 9" />
        <path d="M 1340 900 L 1340 0" stroke="#c8e4ca" strokeWidth="20" strokeDasharray="100 8" />
        <path d="M 1390 900 L 1390 0" stroke="#bedec0" strokeWidth="28" strokeDasharray="140 11" />
      </svg>

      {/* Decorative Bamboo Leaves on top corners */}
      <svg
        className="absolute top-0 left-0 w-72 h-72 opacity-65 -translate-x-6 -translate-y-6"
        viewBox="0 0 200 200"
        fill="none"
      >
        {/* Main stem branch */}
        <path d="M 0 0 Q 60 30 110 90" stroke="#4a8f27" strokeWidth="3" strokeLinecap="round" />
        {/* Hanging bamboo leaves */}
        <path d="M 40 20 Q 90 25 120 15 Q 85 45 40 20 Z" fill="#60b828" />
        <path d="M 60 35 Q 110 50 145 45 Q 105 75 60 35 Z" fill="#4d9b1c" />
        <path d="M 85 65 Q 140 85 160 115 Q 115 110 85 65 Z" fill="#78ce3e" />
        <path d="M 105 85 Q 145 130 150 165 Q 120 135 105 85 Z" fill="#3f8216" />
      </svg>

      <svg
        className="absolute top-0 right-0 w-80 h-80 opacity-60 translate-x-8 -translate-y-8 scale-x-[-1]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M 0 0 Q 70 35 120 100" stroke="#4a8f27" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 45 22 Q 95 30 130 18 Q 95 50 45 22 Z" fill="#64c02b" />
        <path d="M 70 40 Q 125 55 160 50 Q 115 80 70 40 Z" fill="#4e9f1e" />
        <path d="M 95 75 Q 150 95 170 130 Q 125 120 95 75 Z" fill="#75cb39" />
        <path d="M 115 95 Q 155 140 160 180 Q 130 150 115 95 Z" fill="#397914" />
      </svg>

      {/* Floating Bamboo Leaves in the breeze */}
      <div className="absolute top-1/4 left-1/12 animate-pulse duration-1000 opacity-40">
        <svg width="32" height="16" viewBox="0 0 40 20" fill="none">
          <path d="M 0 10 Q 20 0 40 5 Q 20 20 0 10 Z" fill="#69be33" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-1/12 animate-bounce duration-3000 opacity-35">
        <svg width="28" height="14" viewBox="0 0 40 20" fill="none">
          <path d="M 0 10 Q 20 0 40 5 Q 20 20 0 10 Z" fill="#58a728" />
        </svg>
      </div>
    </div>
  );
};
