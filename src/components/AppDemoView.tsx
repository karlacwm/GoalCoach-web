import React, { useState } from 'react';
import { 
  Leaf, 
  BookOpen, 
  TrendingUp, 
  Check, 
  Play, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Github, 
  ExternalLink,
  Target,
  Calendar,
  Briefcase
} from 'lucide-react';
import { GoalCoachPanda } from './Logo';

export const AppDemoView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'roadmap' | 'progress'>('today');
  const [activeLessonModal, setActiveLessonModal] = useState<boolean>(false);
  const [selectedResponse, setSelectedResponse] = useState<number | null>(null);
  const [lessonFinished, setLessonFinished] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(25);
  const [goalCompletion, setGoalCompletion] = useState<number>(35);

  const GITHUB_REPO_URL = 'https://github.com/Psyche0920/GoalCoach.git';

  const handleCompleteLesson = (isCorrect: boolean) => {
    setLessonFinished(true);
    if (isCorrect && progressPercent === 25) {
      setProgressPercent(50);
      setGoalCompletion(38);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* 1. Building & Coming Soon GitHub Banner */}
      <div className="bg-gradient-to-r from-[#0d3b1e] to-[#164e29] text-white rounded-3xl p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
            <Github className="w-6 h-6 text-[#7be238]" />
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-xs font-bold text-[#7be238] uppercase tracking-wider">
                Building &middot; Coming Soon
              </span>
              <span className="w-2 h-2 rounded-full bg-[#7be238] animate-pulse" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white mt-0.5">
              GoalCoach is actively in development on GitHub
            </h2>
            <p className="text-xs text-[#c0e3ca] mt-0.5">
              Check out our codebase, follow releases, and track progress on our official repository.
            </p>
          </div>
        </div>

        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#0d3b1e] bg-[#7be238] hover:bg-[#8bf046] rounded-xl transition-all shadow-xs cursor-pointer hover:shadow-md shrink-0 whitespace-nowrap"
        >
          <Github className="w-4 h-4" />
          <span>View on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 2. Clear Persona Profile Section: Ann Weber */}
      <div className="bg-white/95 backdrop-blur-sm border border-[#cde2c8] rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#edf4ea] pb-4">
          <div>
            <span className="text-xs font-bold text-[#4ea612] uppercase tracking-wider">
              Active Learner Persona
            </span>
            <h3 className="text-xl font-bold text-[#0d3b1e] mt-0.5">
              Ann Weber &mdash; Robotics Procurement Buyer
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 bg-[#eef7ea] text-[#0d3b1e] font-semibold rounded-full border border-[#d2ebd0] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#4ea612]" />
              China Trip in 10 Weeks
            </span>
            <span className="px-3 py-1 bg-[#eef7ea] text-[#0d3b1e] font-semibold rounded-full border border-[#d2ebd0] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#4ea612]" />
              15&ndash;20 min / day
            </span>
          </div>
        </div>

        {/* Persona Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-3.5 bg-[#f8faf7] rounded-2xl border border-[#e2efe0] space-y-1">
            <div className="font-bold text-[#0d3b1e] flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#4ea612]" />
              Concrete Learning Goal
            </div>
            <p className="text-[#496554] leading-relaxed">
              Audit automated robotics assembly lines and negotiate component delivery contracts with suppliers in Shenzhen.
            </p>
          </div>

          <div className="p-3.5 bg-[#f8faf7] rounded-2xl border border-[#e2efe0] space-y-1">
            <div className="font-bold text-[#0d3b1e] flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#4ea612]" />
              Curriculum Scope
            </div>
            <p className="text-[#496554] leading-relaxed">
              Business introductions, factory floor scheduling, unit pricing discussions, and supplier dinner etiquette.
            </p>
          </div>

          <div className="p-3.5 bg-[#f8faf7] rounded-2xl border border-[#e2efe0] space-y-1">
            <div className="font-bold text-[#0d3b1e] flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#4ea612]" />
              Why This Screen Matters
            </div>
            <p className="text-[#496554] leading-relaxed">
              The cockpit below displays Ann&apos;s active learning journey. Click the active lesson card to test the adaptive flow!
            </p>
          </div>
        </div>
      </div>

      {/* Rubber Stamp: Directly before the user interface and strictly horizontal in row center */}
      <div className="flex items-center justify-center w-full pt-1">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#fff7ed] border-2 border-dashed border-[#ea580c] text-[#c2410c] text-xs font-black tracking-wider uppercase shadow-2xs">
          <span>Disclaimer: for reference only. This is an early preview to show our concept.</span>
        </div>
      </div>

      {/* 3. Main App Container (Faithful to uploaded image.png screenshot) */}
      <div className="bg-[#f7faf7] border border-[#d6ebd2] rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[660px]">
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="lg:col-span-3 bg-white border-r border-[#e8f1e6] p-6 flex flex-col justify-between">
          <div className="space-y-8">
            {/* Top Brand Block */}
            <div className="flex items-center gap-3">
              <GoalCoachPanda size={44} />
              <div>
                <div className="flex items-baseline font-black text-xl leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span className="text-[#0d3b1e]">Goal</span>
                  <span className="text-[#4ea612]">Coach</span>
                </div>
                <div className="text-[11px] text-[#557260] font-medium mt-1">
                  Your adaptive Mandarin coach
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
              {/* TODAY (Active) */}
              <button
                onClick={() => setActiveTab('today')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'today'
                    ? 'border-2 border-[#10b981] bg-[#f0fbf6] text-[#0a4d2e] shadow-xs'
                    : 'text-[#4e6858] hover:bg-[#f3f9f1] hover:text-[#0d3b1e]'
                }`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  activeTab === 'today' ? 'bg-[#10b981]/20 text-[#10b981]' : 'text-[#62806e]'
                }`}>
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="tracking-wide">TODAY</span>
              </button>

              {/* ROADMAP */}
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'roadmap'
                    ? 'border-2 border-[#10b981] bg-[#f0fbf6] text-[#0a4d2e] shadow-xs'
                    : 'text-[#4e6858] hover:bg-[#f3f9f1] hover:text-[#0d3b1e]'
                }`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  activeTab === 'roadmap' ? 'bg-[#10b981]/20 text-[#10b981]' : 'text-[#62806e]'
                }`}>
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="tracking-wide">ROADMAP</span>
              </button>

              {/* PROGRESS */}
              <button
                onClick={() => setActiveTab('progress')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'progress'
                    ? 'border-2 border-[#10b981] bg-[#f0fbf6] text-[#0a4d2e] shadow-xs'
                    : 'text-[#4e6858] hover:bg-[#f3f9f1] hover:text-[#0d3b1e]'
                }`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  activeTab === 'progress' ? 'bg-[#10b981]/20 text-[#10b981]' : 'text-[#62806e]'
                }`}>
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="tracking-wide">PROGRESS</span>
              </button>
            </nav>
          </div>

          {/* Bottom Card: Dark Goal Completion Widget from image.png */}
          <div className="mt-8 bg-[#0f172a] text-white rounded-2xl p-4 space-y-3 shadow-md">
            <div className="flex items-center gap-3">
              <GoalCoachPanda size={34} />
              <div>
                <div className="text-[10px] text-[#38bdf8] font-bold tracking-wider uppercase">
                  GOAL COMPLETION
                </div>
                <div className="text-base font-black text-white tabular-nums">
                  {goalCompletion}%
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-[#94a3b8] font-medium">
                <span>Current progress</span>
                <span className="text-[#38bdf8] font-bold">Shenzhen Trip</span>
              </div>
              <div className="w-full h-1.5 bg-[#1e293b] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#0284c7] to-[#38bdf8] rounded-full transition-all duration-500"
                  style={{ width: `${goalCompletion}%` }}
                />
              </div>
            </div>

            <div className="pt-1 text-[10px] text-[#94a3b8] border-t border-[#1e293b]">
              <span>Next goal: Factory floor introductions</span>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT AREA ================= */}
        <main className="lg:col-span-9 p-6 sm:p-8 flex flex-col justify-between">
          {/* TAB 1: TODAY VIEW (Faithful to screenshot) */}
          {activeTab === 'today' && (
            <div className="space-y-6">
              {/* Header section with status pill and date */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e2ece0] pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-[#e2f7ed] text-[#0d6e3c] uppercase tracking-wider">
                      ACTIVE PATH
                    </span>
                    <span className="text-xs text-[#52705e] font-medium">
                      HSK 1 Foundation &middot; Day 14
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0f172a] mt-1.5 tracking-tight">
                    Today&apos;s Learning Plan
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                    Target: Ann Weber &mdash; Supplier meetings &amp; factory floor coordination.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#0f172a]">Estimated Time</div>
                    <div className="text-xs text-[#10b981] font-bold">15 mins daily</div>
                  </div>
                </div>
              </div>

              {/* Progress Summary Card */}
              <div className="bg-white border border-[#e2ece0] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-[#64748b] uppercase tracking-wider">
                    Today&apos;s Target
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#0f172a]">
                    2 of 4 lessons completed
                  </div>
                </div>

                <div className="w-full sm:w-48 space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-[#0f172a]">
                    <span>Progress</span>
                    <span className="font-mono text-[#0284c7]">{progressPercent}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#e2e8f0] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#00a6ff] rounded-full transition-all duration-500 shadow-xs"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Lesson Module Stack */}
              <div className="space-y-3.5">
                {/* 1. Completed Lesson */}
                <div className="bg-white border border-[#e2ece0] rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all hover:border-[#b8d9b4] shadow-xs">
                  <div className="flex items-center gap-4">
                    {/* Green checkmark circle */}
                    <div className="w-10 h-10 rounded-xl bg-[#10b981] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#e0f2fe] text-[#0369a1] uppercase tracking-wider">
                          LEARN
                        </span>
                        <span className="text-xs text-[#64748b]">
                          Practice again &middot; no progress
                        </span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#0f172a]">
                        Greetings &amp; Goodbye
                      </div>
                      <div className="text-xs text-[#64748b] font-chinese">
                        问候与告别 &middot; Greet someone and say goodbye.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#64748b]">
                    <div className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>5 min</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#10b981]" />
                  </div>
                </div>

                {/* 2. Active Lesson (Glowing cyan/mint border from screenshot) */}
                <div 
                  onClick={() => setActiveLessonModal(true)}
                  className="bg-white border-2 border-[#10b981] ring-3 ring-[#10b981]/15 rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all hover:shadow-md cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    {/* Blue play square */}
                    <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Play className="w-5 h-5 fill-[#0284c7]" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#e0f2fe] text-[#0369a1] uppercase tracking-wider">
                          LEARN
                        </span>
                        <span className="text-xs font-semibold text-[#10b981]">
                          Active &middot; Click to launch lesson
                        </span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#0f172a] group-hover:text-[#0a522f] transition-colors font-chinese">
                        Self-introduction: 我叫... / 我是...
                      </div>
                      <div className="text-xs text-[#64748b] font-chinese">
                        自我介绍 : 我叫... / 我是... &middot; Say your name and basic identity.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#64748b]">
                    <div className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>5 min</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* 3. Lesson 3 */}
                <div className="bg-white border border-[#e2ece0] rounded-2xl p-4 sm:p-5 flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 fill-[#0284c7]" />
                    </div>

                    <div className="space-y-1">
                      <div>
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#e0f2fe] text-[#0369a1] uppercase tracking-wider">
                          LEARN
                        </span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#0f172a] font-chinese">
                        Pronouns + 是
                      </div>
                      <div className="text-xs text-[#64748b] font-chinese">
                        代词 + 是 &middot; Link subject with noun identity.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#64748b]">
                    <div className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>5 min</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#94a3b8]" />
                  </div>
                </div>

                {/* 4. Lesson 4 */}
                <div className="bg-white border border-[#e2ece0] rounded-2xl p-4 sm:p-5 flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 fill-[#0284c7]" />
                    </div>

                    <div className="space-y-1">
                      <div>
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#e0f2fe] text-[#0369a1] uppercase tracking-wider">
                          LEARN
                        </span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#0f172a] font-chinese">
                        Factory Role Vocab: 采购经理 / 工程师
                      </div>
                      <div className="text-xs text-[#64748b] font-chinese">
                        职业词汇 &middot; Identify your role in robotics procurement.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#64748b]">
                    <div className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>5 min</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#94a3b8]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ROADMAP VIEW */}
          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              <div className="border-b border-[#e2ece0] pb-4">
                <h4 className="text-xl font-bold text-[#0d3b1e]">Ann Weber&apos;s 10-Week Shenzhen Roadmap</h4>
                <p className="text-xs text-[#52705e] mt-1">
                  Dynamically adjusted by GoalCoach based on her performance in daily practice.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-white rounded-2xl border-2 border-[#10b981] flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    W1-2
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-[#0d3b1e]">Identity &amp; Courtesy Protocol</h5>
                    <p className="text-xs text-[#52705e] mt-0.5">
                      Greetings, handing name cards (名片), explaining your company and buyer role.
                    </p>
                    <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 bg-[#e2f7ed] text-[#0d6e3c] rounded">
                      Completed &middot; 95% Mastery
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border-2 border-[#38bdf8] flex items-start gap-4 shadow-xs">
                  <span className="w-8 h-8 rounded-full bg-[#38bdf8] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    W3-5
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-[#0d3b1e] font-chinese">Factory Floor Visit &amp; Scheduling (工厂参观)</h5>
                    <p className="text-xs text-[#52705e] mt-0.5 font-chinese">
                      Confirming dates (星期五), scheduling factory tours (参观工厂), machine specs.
                    </p>
                    <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 bg-[#dbeafe] text-[#0369a1] rounded">
                      Current Focus (35% Mastery)
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-[#d6ebd2] flex items-start gap-4 opacity-75">
                  <span className="w-8 h-8 rounded-full bg-[#e2ede0] text-[#4d6b56] flex items-center justify-center font-bold text-xs shrink-0">
                    W6-8
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-[#0d3b1e]">Commercial Negotiations</h5>
                    <p className="text-xs text-[#52705e] mt-0.5 font-chinese">
                      Pricing, delivery terms, lead times, quantity discounts (报价与交货).
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-[#d6ebd2] flex items-start gap-4 opacity-75">
                  <span className="w-8 h-8 rounded-full bg-[#e2ede0] text-[#4d6b56] flex items-center justify-center font-bold text-xs shrink-0">
                    W9-10
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-[#0d3b1e]">Supplier Dinner &amp; Taxi Travel</h5>
                    <p className="text-xs text-[#52705e] mt-0.5">
                      Banquet dining etiquette, airport transfers, hotel check-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROGRESS VIEW */}
          {activeTab === 'progress' && (
            <div className="space-y-6">
              <div className="border-b border-[#e2ece0] pb-4">
                <h4 className="text-xl font-bold text-[#0d3b1e]">Cognitive State &amp; Concept Mastery</h4>
                <p className="text-xs text-[#52705e] mt-1">
                  Persistent concept mastery scores tracked across each practice session.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-[#d6ebd2] space-y-2">
                  <div className="text-xs font-bold text-[#0d3b1e] font-chinese">Basic Greetings (问候)</div>
                  <div className="w-full h-2 rounded-full bg-[#edf6eb] overflow-hidden">
                    <div className="h-full bg-[#10b981] w-[95%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-[#52705e]">
                    <span>Mastered</span>
                    <span className="font-mono font-bold">95%</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-[#d6ebd2] space-y-2">
                  <div className="text-xs font-bold text-[#0d3b1e] font-chinese">Self-Introduction (自我介绍)</div>
                  <div className="w-full h-2 rounded-full bg-[#edf6eb] overflow-hidden">
                    <div className="h-full bg-[#38bdf8] w-[75%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-[#52705e]">
                    <span>In Progress</span>
                    <span className="font-mono font-bold">75%</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-[#d6ebd2] space-y-2">
                  <div className="text-xs font-bold text-[#0d3b1e] font-chinese">Time &amp; Calendar Word Order (时间状语)</div>
                  <div className="w-full h-2 rounded-full bg-[#edf6eb] overflow-hidden">
                    <div className="h-full bg-[#f59e0b] w-[45%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-[#52705e]">
                    <span>Needs Remediation</span>
                    <span className="font-mono font-bold">45%</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-[#d6ebd2] space-y-2">
                  <div className="text-xs font-bold text-[#0d3b1e] font-chinese">Factory Terminology (工厂词汇)</div>
                  <div className="w-full h-2 rounded-full bg-[#edf6eb] overflow-hidden">
                    <div className="h-full bg-[#94a3b8] w-[20%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-[#52705e]">
                    <span>Upcoming</span>
                    <span className="font-mono font-bold">20%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ================= INTERACTIVE LESSON MODAL ================= */}
      {activeLessonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-3xl border-2 border-[#10b981] shadow-2xl overflow-hidden p-6 space-y-5 animate-in fade-in duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#edf4ea] pb-3">
              <div className="flex items-center gap-2">
                <GoalCoachPanda size={30} />
                <div>
                  <h4 className="text-sm font-bold text-[#0d3b1e]">Lesson: Self-Introduction</h4>
                  <p className="text-[11px] text-[#55705e]">Ann meeting supplier Mr. Zhang</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveLessonModal(false);
                  setLessonFinished(false);
                  setSelectedResponse(null);
                }}
                className="p-1.5 text-[#55705e] hover:bg-[#eef7ea] rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Prompt */}
            <div className="bg-[#f0fbf6] border border-[#cbeedd] rounded-2xl p-4 space-y-2">
              <div className="text-xs font-bold text-[#0d3b1e]">
                Scenario Objective
              </div>
              <p className="text-xs sm:text-sm text-[#183d27] font-medium leading-relaxed">
                Introduce yourself politely to Mr. Zhang: &ldquo;Hello, my name is Ann Weber, I am the procurement manager.&rdquo;
              </p>
            </div>

            {/* Response Options */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#0d3b1e]">Choose the best sentence:</div>

              {/* Option 1 (Correct with Ann Weber) */}
              <button
                onClick={() => setSelectedResponse(1)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all cursor-pointer ${
                  selectedResponse === 1
                    ? 'border-[#10b981] bg-[#ecfdf5] font-semibold text-[#065f46]'
                    : 'border-[#e2ece0] hover:bg-[#f9fcf8] text-[#1f2937]'
                }`}
              >
                <div className="font-bold text-sm tracking-wide font-chinese">
                  你好，我叫安·韦伯，我是采购经理。
                </div>
                <div className="text-[11px] text-[#6b7280] mt-0.5">
                  Nǐ hǎo, wǒ jiào Ān Wéibó, wǒ shì cǎigòu jīnglǐ.
                </div>
              </button>

              {/* Option 2 (Mistake: using both 是 and 叫) */}
              <button
                onClick={() => setSelectedResponse(2)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all cursor-pointer ${
                  selectedResponse === 2
                    ? 'border-[#f59e0b] bg-[#fffbeb] font-semibold text-[#92400e]'
                    : 'border-[#e2ece0] hover:bg-[#f9fcf8] text-[#1f2937]'
                }`}
              >
                <div className="font-bold text-sm tracking-wide font-chinese">
                  你好，我是叫安·韦伯。
                </div>
                <div className="text-[11px] text-[#6b7280] mt-0.5">
                  Nǐ hǎo, wǒ shì jiào Ān Wéibó. (Incorrect: combining 是 and 叫)
                </div>
              </button>
            </div>

            {/* Evaluation Feedback */}
            {selectedResponse !== null && !lessonFinished && (
              <div className="pt-2">
                <button
                  onClick={() => handleCompleteLesson(selectedResponse === 1)}
                  className="w-full py-2.5 bg-[#0d3b1e] hover:bg-[#144927] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Submit to Grader
                </button>
              </div>
            )}

            {lessonFinished && (
              <div className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                selectedResponse === 1
                  ? 'bg-[#ecfdf5] border-[#a7f3d0] text-[#065f46]'
                  : 'bg-[#fffbeb] border-[#fde68a] text-[#92400e]'
              }`}>
                <div className="font-bold flex items-center gap-1.5">
                  {selectedResponse === 1 ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                      <span>Excellent! 100% Accurate</span>
                    </>
                  ) : (
                    <>
                      <span>Teacher Feedback:</span>
                    </>
                  )}
                </div>
                <p>
                  {selectedResponse === 1
                    ? 'Natural business Mandarin. Using "我叫" for your name and "我是" for your professional role ("采购经理"). Today’s progress updated to 50%!'
                    : 'In Chinese, do not stack "是" and "叫" together. Say either "我是 Ann Weber" or "我叫 Ann Weber". The Teaching Agent scheduled quick review for tomorrow.'}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveLessonModal(false)}
                    className="px-4 py-1.5 text-xs font-bold bg-white border border-current rounded-lg hover:bg-white/80 transition-colors cursor-pointer"
                  >
                    Done &middot; Back to Cockpit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
