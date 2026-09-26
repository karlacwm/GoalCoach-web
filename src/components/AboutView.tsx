import React from 'react';
import { GoalCoachPanda } from './Logo';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 
          className="text-3xl sm:text-4xl font-black text-[#0d3b1e] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          About GoalCoach
        </h2>
      </div>

      {/* One-Sentence Pitch Card */}
      <div className="bg-white/90 backdrop-blur-sm border-2 border-[#4ea612] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#eef7ea] text-[#0d3b1e] flex items-center justify-center shrink-0">
            <GoalCoachPanda size={34} />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#4ea612] uppercase tracking-wider">
              Our One Sentence Pitch
            </span>
            <p className="text-base sm:text-lg font-bold text-[#0d3b1e] leading-relaxed">
              &ldquo;We build a goal driven Chinese learning coach for adult beginners who have a concrete reason to learn but struggle to turn generic lessons into a path that adapts to their progress.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-xl font-bold text-[#0d3b1e]">Our Team</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Founder & CEO */}
          <div className="bg-white/90 backdrop-blur-sm border border-[#cbe1c7] rounded-3xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#0d3b1e] text-white flex items-center justify-center font-black text-xl shadow-xs shrink-0">
              WH
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-[#0d3b1e]">Weijia Han</h4>
              <div className="text-xs font-bold text-[#4ea612]">
                Founder &amp; CEO
              </div>
              <p className="text-xs text-[#52705e]">
                Leading product vision, learning architecture, and mission.
              </p>
            </div>
          </div>

          {/* Co-Founder & COO */}
          <div className="bg-white/90 backdrop-blur-sm border border-[#cbe1c7] rounded-3xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#144626] text-white flex items-center justify-center font-black text-xl shadow-xs shrink-0">
              WC
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-[#0d3b1e]">Weng Man Cheung</h4>
              <div className="text-xs font-bold text-[#4ea612]">
                Co-Founder &amp; COO
              </div>
              <p className="text-xs text-[#52705e]">
                Leading operations, strategy, and organizational growth.
              </p>
            </div>
          </div>

          {/* CTO: Muhammed Musab Felsen */}
          <div className="bg-white/90 backdrop-blur-sm border border-[#cbe1c7] rounded-3xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#1d5c31] text-white flex items-center justify-center font-black text-xl shadow-xs shrink-0">
              MF
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-[#0d3b1e]">Muhammed Musab Felsen</h4>
              <div className="text-xs font-bold text-[#4ea612]">
                Co-Founder &amp; CTO
              </div>
              <p className="text-xs text-[#52705e]">
                Leading core technology, engineering systems, and AI models.
              </p>
            </div>
          </div>

          {/* CMO: Jiyan Wang */}
          <div className="bg-white/90 backdrop-blur-sm border border-[#cbe1c7] rounded-3xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#2b7241] text-white flex items-center justify-center font-black text-xl shadow-xs shrink-0">
              JW
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-[#0d3b1e]">Jiyan Wang</h4>
              <div className="text-xs font-bold text-[#4ea612]">
                Co-Founder &amp; CMO
              </div>
              <p className="text-xs text-[#52705e]">
                Leading brand marketing, user community, and market expansion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
