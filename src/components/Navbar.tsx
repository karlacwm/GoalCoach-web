import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Download } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenDeck,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'simulator', label: 'Interactive Demo' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fafcf8]/95 backdrop-blur-md border-b border-[#0d3b1e]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ea612] rounded-lg transition-transform hover:opacity-95"
          aria-label="GoalCoach Home"
        >
          <Logo size="md" />
        </button>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#3b4e41]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 cursor-pointer relative ${
                  isActive
                    ? 'text-[#0d3b1e] font-semibold'
                    : 'text-[#415548] hover:text-[#0d3b1e]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4ea612] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDeck}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#0d3b1e] bg-[#eef7eb] hover:bg-[#e2f1db] border border-[#d2e8cb] rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Pitch Slides</span>
          </button>
          <button
            onClick={() => handleNavClick('simulator')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0d3b1e] hover:bg-[#144927] rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            <span>Try Adaptive Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0d3b1e] hover:bg-[#eef7eb] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Strict height cap & immediate access) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#0d3b1e]/10 bg-[#fafcf8] px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#eef7ea] text-[#0d3b1e] font-semibold'
                    : 'text-[#415548] hover:bg-[#f2f7ef]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#0d3b1e]/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeck();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0d3b1e] bg-[#eef7ea] border border-[#d2e8cb] rounded-lg"
            >
              <Download className="w-3.5 h-3.5" />
              <span>View Pitch Slides</span>
            </button>
            <button
              onClick={() => handleNavClick('simulator')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0d3b1e] rounded-lg"
            >
              <span>Try Adaptive Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
