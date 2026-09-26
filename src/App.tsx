import React, { useState } from 'react';
import { BambooNavbar, PageId } from './components/BambooNavbar';
import { BambooForestBackground } from './components/BambooForestBackground';
import { InteractivePandaHero } from './components/InteractivePandaHero';
import { AppDemoView } from './components/AppDemoView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { ContactView } from './components/ContactView';
import { GoalCoachPanda } from './components/Logo';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans text-[#122017] antialiased overflow-x-hidden">
      {/* 1. Atmospheric Bamboo Forest Background */}
      <BambooForestBackground />

      {/* 2. Bamboo Themed Navbar (Page-Switching Navigation) */}
      <BambooNavbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* 3. Main Page Content (Switching without infinite scroll) */}
      <main className="relative z-10 flex-1">
        {currentPage === 'home' && (
          <InteractivePandaHero onNavigate={handleNavigate} />
        )}

        {currentPage === 'demo' && (
          <AppDemoView />
        )}

        {currentPage === 'services' && (
          <ServicesView onNavigate={handleNavigate} />
        )}

        {currentPage === 'about' && (
          <AboutView />
        )}

        {currentPage === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* 4. Quiet Minimalist Bamboo Footer */}
      <footer className="relative z-10 py-6 border-t border-[#cde2c8]/60 bg-white/40 backdrop-blur-xs text-xs text-[#52705e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GoalCoachPanda size={20} />
            <span className="font-bold text-[#0d3b1e]">GoalCoach</span>
            <span>&middot; Adaptive Mandarin Coach</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button 
              onClick={() => handleNavigate('home')} 
              className="hover:text-[#0d3b1e] cursor-pointer"
            >
              Home
            </button>
            <span>&middot;</span>
            <button 
              onClick={() => handleNavigate('demo')} 
              className="hover:text-[#0d3b1e] cursor-pointer"
            >
              App Demo
            </button>
            <span>&middot;</span>
            <button 
              onClick={() => handleNavigate('services')} 
              className="hover:text-[#0d3b1e] cursor-pointer"
            >
              Services
            </button>
            <span>&middot;</span>
            <button 
              onClick={() => handleNavigate('about')} 
              className="hover:text-[#0d3b1e] cursor-pointer"
            >
              About Us
            </button>
            <span>&middot;</span>
            <button 
              onClick={() => handleNavigate('contact')} 
              className="hover:text-[#0d3b1e] cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="text-[11px] text-[#6b8574]">
            &copy; 2026 GoalCoach Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
