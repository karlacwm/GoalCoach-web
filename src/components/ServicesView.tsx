import React from 'react';
import { Briefcase, GraduationCap, Cpu, Check, ArrowRight } from 'lucide-react';
import { PageId } from './BambooNavbar';

export const ServicesView: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {/* Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eef7ea] text-xs font-bold text-[#145729] border border-[#cfe6cb]">
          <span>🎋 Tailored Learning Solutions</span>
        </div>
        <h2 
          className="text-3xl sm:text-4xl font-black text-[#0d3b1e] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Two audiences. One adaptive engine.
        </h2>
        <p className="text-sm sm:text-base text-[#385b44] max-w-xl mx-auto leading-relaxed">
          Generic apps drill vocabulary you will never use. GoalCoach engineers closed-loop learning paths that turn high-stakes business deadlines and institutional curricula into confident conversational fluency.
        </p>
      </div>

      {/* Two Minimalist Clean Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: For Professionals */}
        <div className="bg-white/90 backdrop-blur-sm border border-[#cbe1c7] rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#eef7ea] text-[#0d3b1e] flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#4ea612]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#4ea612] uppercase tracking-wider">
                For Individuals &amp; Executives
              </span>
              <h3 className="text-xl font-bold text-[#0d3b1e] mt-0.5">
                Goal-Driven Professional Track
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#486653] leading-relaxed">
              Designed for procurement buyers, engineers, and executives with upcoming China trips. Focus on factory audits, supplier meetings, and practical travel Chinese.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#2a4533]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4ea612]" />
                <span>15 minutes daily &middot; fits your work schedule</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4ea612]" />
                <span>Targeted 8&ndash;12 week roadmaps</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4ea612]" />
                <span>Adaptive mistake diagnosis</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#edf4ea]">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#0d3b1e] hover:bg-[#144927] rounded-xl transition-colors cursor-pointer text-center"
            >
              Join Learner Waitlist
            </button>
          </div>
        </div>

        {/* Card 2: For Language Schools */}
        <div className="bg-white/90 backdrop-blur-sm border border-[#cbe1c7] rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#eef7ea] text-[#0d3b1e] flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#4ea612]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#4ea612] uppercase tracking-wider">
                For Language Institutions (B2B)
              </span>
              <h3 className="text-xl font-bold text-[#0d3b1e] mt-0.5">
                The Between-Class Practice Partner
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#486653] leading-relaxed">
              Students meet twice weekly, but forget material in between. GoalCoach keeps learners engaged with 15-minute daily practice and gives teachers a live error diagnostic dashboard.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#2a4533]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4ea612]" />
                <span>88% homework completion rate vs 41% static sheets</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4ea612]" />
                <span>Teacher diagnostic dashboard for classes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4ea612]" />
                <span>Syncs with HSK or school syllabus</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#edf4ea]">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-2.5 px-4 text-xs font-bold text-[#0d3b1e] bg-[#eef7ea] hover:bg-[#e0f1db] border border-[#d2e8cb] rounded-xl transition-colors cursor-pointer text-center"
            >
              Request Institutional Pilot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
