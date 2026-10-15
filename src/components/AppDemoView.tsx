import React from 'react';
import { 
  Play, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Target, 
  Repeat, 
  Layers, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { PageId } from './BambooNavbar';

interface AppDemoViewProps {
  onNavigate?: (page: PageId) => void;
}

export const AppDemoView: React.FC<AppDemoViewProps> = ({ onNavigate }) => {
  const YOUTUBE_URL = 'https://youtu.be/Vg15X5R_-MA';
  const YOUTUBE_EMBED_URL = 'https://www.youtube-nocookie.com/embed/Vg15X5R_-MA?rel=0';
  const GITHUB_REPO_URL = 'https://github.com/Psyche0920/GoalCoach.git';

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 select-none">
      {/* 1. Header Section */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef7ea] border border-[#d2ebd0] text-[#0d3b1e] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#4ea612]" />
          <span>Product Walkthrough</span>
        </div>

        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d3b1e] tracking-tight leading-tight"
          style={{ fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif" }}
        >
          See GoalCoach in Action
        </h1>

        <p className="text-sm sm:text-base text-[#34583f] font-medium leading-relaxed">
          Watch our product demo to discover how GoalCoach transforms your specific goals into an adaptive, retention-first Mandarin learning journey.
        </p>
      </div>

      {/* 2. Embedded Video Container */}
      <div className="relative bg-white/95 backdrop-blur-sm border-2 border-[#cfe6cb] rounded-3xl p-3 sm:p-5 shadow-xl space-y-4">
        <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-inner aspect-video">
          <iframe
            src={YOUTUBE_EMBED_URL}
            title="GoalCoach App Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>

        {/* Video Actions & Direct Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 px-1">
          <div className="flex items-center gap-2 text-xs text-[#52705e]">
            <span className="w-2 h-2 rounded-full bg-[#4ea612] animate-pulse" />
            <span className="font-semibold text-[#0d3b1e]">Latest Demo Video</span>
            <span>&middot;</span>
            <span>Recorded Walkthrough</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#0d3b1e] bg-[#eef7ea] hover:bg-[#e0f1dc] border border-[#cfe6cb] rounded-xl transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Key Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-white/90 border border-[#d6ebd2] rounded-2xl shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#eef7ea] text-[#4ea612] flex items-center justify-center">
            <Target className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-[#0d3b1e]">Goal-Driven Syllabus</h3>
          <p className="text-xs text-[#52705e] leading-relaxed">
            No generic textbook filler. The learning path zeroes in directly on what you need for business negotiations, engineering visits, or travel.
          </p>
        </div>

        <div className="p-5 bg-white/90 border border-[#d6ebd2] rounded-2xl shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#eef7ea] text-[#4ea612] flex items-center justify-center">
            <Repeat className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-[#0d3b1e]">Closed-Loop Adaptation</h3>
          <p className="text-xs text-[#52705e] leading-relaxed">
            Every mistake and hesitation feeds directly back into tomorrow’s customized review sets, ensuring durable cognitive mastery.
          </p>
        </div>

        <div className="p-5 bg-white/90 border border-[#d6ebd2] rounded-2xl shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#eef7ea] text-[#4ea612] flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-[#0d3b1e]">Real-World Context</h3>
          <p className="text-xs text-[#52705e] leading-relaxed">
            Practice actual conversational phrasing, professional etiquette, and vocabulary designed for your industry.
          </p>
        </div>
      </div>

      {/* 4. Bottom Call-to-Action */}
      <div className="bg-gradient-to-r from-[#0d3b1e] to-[#164e29] text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Interested in partnering or trying GoalCoach?
          </h3>
          <p className="text-xs sm:text-sm text-[#c0e3ca]">
            We are working with early pilot learners, institutions, and investors.
          </p>
        </div>

        {onNavigate && (
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-[#0d3b1e] bg-[#7be238] hover:bg-[#8bf046] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0 whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
