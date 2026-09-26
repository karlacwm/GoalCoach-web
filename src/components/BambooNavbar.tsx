import React from 'react';
import { Logo } from './Logo';
import { ExternalLink, Github } from 'lucide-react';

export type PageId = 'home' | 'demo' | 'services' | 'about' | 'contact';

interface BambooNavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const BambooNavbar: React.FC<BambooNavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const navTabs: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'demo', label: 'App Demo' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const GITHUB_REPO_URL = 'https://github.com/Psyche0920/GoalCoach.git';

  return (
    <header className="relative z-40 pt-4 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Bamboo themed bar */}
      <div className="relative bg-white/90 backdrop-blur-md border border-[#cde2c8] rounded-2xl shadow-sm px-4 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Subtle bamboo joint notches at edges */}
        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-7 bg-[#78be47] rounded-full opacity-60 pointer-events-none" />
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-7 bg-[#78be47] rounded-full opacity-60 pointer-events-none" />

        {/* Brand */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          aria-label="GoalCoach Home"
        >
          <Logo size="md" />
        </button>

        {/* Bamboo Navigation Bar (Page Switcher) */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-[#edf6eb] rounded-xl border border-[#d6ebd2]">
          {navTabs.map((tab) => {
            const isActive = currentPage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.id)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0d3b1e] text-white shadow-xs'
                    : 'text-[#415a49] hover:text-[#0d3b1e] hover:bg-[#e2f1de]'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7be048] animate-pulse" />
                )}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-[#4ea612] text-white' : 'bg-[#d8edd3] text-[#1c552b]'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action: App button leads to GitHub */}
        <div className="flex items-center gap-2">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#0d3b1e] hover:bg-[#154e28] rounded-xl shadow-xs transition-all cursor-pointer hover:shadow-md"
            title="View GoalCoach on GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span>App (GitHub)</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* Mobile Page Navigation Pill Bar */}
      <div className="md:hidden mt-2 flex items-center justify-between gap-1 overflow-x-auto py-1 px-1 bg-[#edf6eb] rounded-xl border border-[#d6ebd2]">
        {navTabs.map((tab) => {
          const isActive = currentPage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[#0d3b1e] text-white font-bold'
                  : 'text-[#415a49] hover:text-[#0d3b1e]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
