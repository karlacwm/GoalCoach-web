import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { PageId } from './BambooNavbar';

interface InteractivePandaHeroProps {
  onNavigate: (page: PageId) => void;
}

type PandaEmotion = 'happy' | 'excited' | 'curious' | 'loving' | 'proud' | 'determined';

export const InteractivePandaHero: React.FC<InteractivePandaHeroProps> = ({ onNavigate }) => {
  const [thoughtIndex, setThoughtIndex] = useState<number>(0);
  const [emotionIndex, setEmotionIndex] = useState<number>(0);
  const [isBouncing, setIsBouncing] = useState<boolean>(false);

  const emotions: PandaEmotion[] = ['happy', 'excited', 'curious', 'loving', 'proud', 'determined'];

  const thoughts = [
    '你好！(Nǐ hǎo!) Ready to conquer Chinese for your real-world goals?',
    'Every time you make a mistake, I adapt tomorrow’s lesson to fix it.',
    '15 focused minutes a day beats 2 hours of boring textbook grammar.',
    'In Mandarin, time always comes before the verb: 我星期五离开 (I leave on Friday)!',
    'Heading to Shenzhen or Shanghai? Let’s get your business introductions dialed in.',
    'Finished a lesson ≠ learned it. True adaptive retention is what counts!',
    'We don’t teach you random animal names when you need to negotiate factory contracts.',
    'Pro tip: “我叫” (wǒ jiào) is for your name, and “我是” (wǒ shì) is for your role!',
    'Practice makes progress! Tap me anytime for a fresh tip.',
    'Your learning roadmap isn’t fixed in stone — it updates every time you practice.',
    'Tones can be tricky, but context makes you understood. Keep speaking!',
    'From airport taxi to factory floor, we build phrases you actually use.',
    'Consistency is key. Even 10 minutes today keeps your fluency streak alive!',
    'Need to audit assembly lines or negotiate pricing? We have custom tracks for that.',
    'Ready to see the engine in action? Try our App Demo!',
  ];

  const handlePandaClick = () => {
    setIsBouncing(true);
    setThoughtIndex((prev) => (prev + 1) % thoughts.length);
    setEmotionIndex((prev) => (prev + 1) % emotions.length);
    setTimeout(() => setIsBouncing(false), 400);
  };

  const currentEmotion = emotions[emotionIndex];

  return (
    <div className="relative min-h-[calc(100vh-90px)] flex flex-col items-center justify-center px-4 py-6 select-none">
      {/* Crisp Main Title with 'Your way to learn' on a NEW LINE */}
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-4">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d3b1e] tracking-tight leading-tight"
          style={{ fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif" }}
        >
          Your goal.<br />
          <span className="text-[#4ea612]">Your way to learn.</span>
        </h1>
        {/* Copywriting-enhanced Subheading */}
        <p className="text-sm sm:text-base text-[#34583f] font-medium max-w-xl mx-auto leading-relaxed">
          The adaptive AI language coach that turns your language needs into personalised learning path.
        </p>
      </div>

      {/* Main Centerpiece: Interactive Panda Mascot */}
      <div className="relative flex flex-col items-center my-1 max-w-md w-full">
        {/* Speech Bubble: ONLY the sentence, NO header, NO 'Goalcoach panda', NO audio, NO next */}
        <div 
          onClick={handlePandaClick}
          className="relative bg-white border-2 border-[#4ea612] rounded-2xl shadow-lg px-6 py-4 mb-4 w-full max-w-md transition-all duration-300 cursor-pointer hover:border-[#3d8c0d] hover:shadow-xl"
          title="Click to hear what the panda says next!"
        >
          <p className="text-sm sm:text-base font-bold text-[#0d3b1e] text-center min-h-[46px] flex items-center justify-center leading-snug">
            {thoughts[thoughtIndex]}
          </p>

          {/* Bubble beak pointing down to the panda */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-[#4ea612] transform rotate-45" />
        </div>

        {/* Panda Mascot with Full Natural Body, Non-Distorted Cute Eyes & Variable Emotion Faces */}
        <div 
          onClick={handlePandaClick}
          className={`relative cursor-pointer transition-transform duration-300 ${
            isBouncing ? 'scale-105 -translate-y-1' : 'hover:scale-[1.02]'
          }`}
          title="Click the panda to change its expression and tips!"
          aria-label="Interactive GoalCoach Panda Mascot"
        >
          <svg
            width="320"
            height="340"
            viewBox="0 0 240 250"
            fill="none"
            className="drop-shadow-xl"
          >
            <defs>
              <linearGradient id="pandaDarkGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#144626" />
                <stop offset="100%" stopColor="#082514" />
              </linearGradient>
              <linearGradient id="pandaBellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCFCF9" />
                <stop offset="100%" stopColor="#F0F7EE" />
              </linearGradient>
              <linearGradient id="bambooStemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#55b81a" />
                <stop offset="100%" stopColor="#0d3b1e" />
              </linearGradient>
              <linearGradient id="bambooLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6fd628" />
                <stop offset="100%" stopColor="#3d890f" />
              </linearGradient>
            </defs>

            {/* --- SEATED LOWER BODY --- */}
            {/* Seamless body silhouette connecting cleanly under the head */}
            <path
              d="M 52 118 C 30 148 26 194 44 218 C 62 238 178 238 196 218 C 214 194 210 148 188 118 Z"
              fill="url(#pandaDarkGrad2)"
            />

            {/* Left foot paw with cute paw pads */}
            <g>
              <ellipse cx="64" cy="218" rx="20" ry="14" fill="url(#pandaDarkGrad2)" />
              <circle cx="64" cy="218" r="5" fill="#1b5c33" />
              <circle cx="57" cy="210" r="2.2" fill="#1b5c33" />
              <circle cx="64" cy="208" r="2.2" fill="#1b5c33" />
              <circle cx="71" cy="210" r="2.2" fill="#1b5c33" />
            </g>

            {/* Right foot paw with cute paw pads */}
            <g>
              <ellipse cx="176" cy="218" rx="20" ry="14" fill="url(#pandaDarkGrad2)" />
              <circle cx="176" cy="218" r="5" fill="#1b5c33" />
              <circle cx="169" cy="210" r="2.2" fill="#1b5c33" />
              <circle cx="176" cy="208" r="2.2" fill="#1b5c33" />
              <circle cx="183" cy="210" r="2.2" fill="#1b5c33" />
            </g>

            {/* Chubby Cream White Belly */}
            <ellipse
              cx="120"
              cy="174"
              rx="46"
              ry="42"
              fill="url(#pandaBellyGrad)"
              stroke="#DCEBD9"
              strokeWidth="2"
            />
            {/* Belly Button */}
            <circle cx="120" cy="188" r="2" fill="#c3dec0" />

            {/* Left Arm hugging belly */}
            <path
              d="M 54 126 C 42 144 50 172 78 166 C 88 164 88 152 74 142 Z"
              fill="url(#pandaDarkGrad2)"
            />
            <circle cx="80" cy="166" r="10" fill="url(#pandaDarkGrad2)" />

            {/* Right Arm holding bamboo */}
            <path
              d="M 186 126 C 196 144 188 172 160 166 C 150 164 150 152 166 142 Z"
              fill="url(#pandaDarkGrad2)"
            />
            <circle cx="158" cy="166" r="10" fill="url(#pandaDarkGrad2)" />

            {/* --- PANDA HEAD --- */}
            {/* Left Ear */}
            <ellipse
              cx="58"
              cy="44"
              rx="22"
              ry="24"
              transform="rotate(-24 58 44)"
              fill="url(#pandaDarkGrad2)"
            />

            {/* Right Ear */}
            <ellipse
              cx="162"
              cy="38"
              rx="18"
              ry="21"
              transform="rotate(22 162 38)"
              fill="url(#pandaDarkGrad2)"
            />

            {/* Head Contour (Clean, rounded, adorable) */}
            <path
              d="M 60 128 C 38 106 36 70 62 52 C 82 36 148 34 172 58 C 190 76 190 106 172 128 C 152 146 82 146 60 128 Z"
              fill="#FCFCF9"
              stroke="#E2EFE0"
              strokeWidth="2"
            />

            {/* --- SYMMETRICAL, NON-DISTORTED EYE PATCHES --- */}
            {/* Left Eye Patch (Beautiful smooth tear-oval) */}
            <path
              d="M 68 86 C 65 72 77 64 88 70 C 97 75 98 88 92 97 C 84 106 72 99 68 86 Z"
              fill="url(#pandaDarkGrad2)"
            />

            {/* Right Eye Patch (Symmetrical matching tear-oval) */}
            <path
              d="M 152 86 C 155 72 143 64 132 70 C 123 75 122 88 128 97 C 136 106 148 99 152 86 Z"
              fill="url(#pandaDarkGrad2)"
            />

            {/* --- EMOTION-SPECIFIC EYES --- */}
            {/* 1. HAPPY: Round twinkling eyes with white gleams */}
            {currentEmotion === 'happy' && (
              <g>
                <circle cx="82" cy="84" r="5.5" fill="#FFFFFF" />
                <circle cx="82" cy="84" r="3.5" fill="#082514" />
                <circle cx="84" cy="82" r="1.8" fill="#FFFFFF" />

                <circle cx="138" cy="84" r="5.5" fill="#FFFFFF" />
                <circle cx="138" cy="84" r="3.5" fill="#082514" />
                <circle cx="140" cy="82" r="1.8" fill="#FFFFFF" />
              </g>
            )}

            {/* 2. EXCITED: Sparkling starry eyes with big gleams */}
            {currentEmotion === 'excited' && (
              <g>
                <circle cx="82" cy="83" r="6" fill="#FFFFFF" />
                <circle cx="82" cy="83" r="4" fill="#082514" />
                <circle cx="84" cy="81" r="2.2" fill="#FFFFFF" />
                <circle cx="80" cy="85" r="1.2" fill="#FFFFFF" />

                <circle cx="138" cy="83" r="6" fill="#FFFFFF" />
                <circle cx="138" cy="83" r="4" fill="#082514" />
                <circle cx="140" cy="81" r="2.2" fill="#FFFFFF" />
                <circle cx="136" cy="85" r="1.2" fill="#FFFFFF" />
              </g>
            )}

            {/* 3. CURIOUS: Inquisitive glance looking slightly upwards */}
            {currentEmotion === 'curious' && (
              <g>
                <circle cx="82" cy="82" r="5.5" fill="#FFFFFF" />
                <circle cx="82" cy="81" r="3.5" fill="#082514" />
                <circle cx="84" cy="79" r="1.6" fill="#FFFFFF" />

                <circle cx="138" cy="82" r="5.5" fill="#FFFFFF" />
                <circle cx="138" cy="81" r="3.5" fill="#082514" />
                <circle cx="140" cy="79" r="1.6" fill="#FFFFFF" />

                {/* Curious raised eyebrow on right */}
                <path d="M 130 68 Q 140 63 148 67" stroke="url(#pandaDarkGrad2)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </g>
            )}

            {/* 4. LOVING: Adorable closed crescent happy eyes ^_^ */}
            {currentEmotion === 'loving' && (
              <g>
                <path d="M 74 85 Q 82 77 90 85" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" fill="none" />
                <path d="M 130 85 Q 138 77 146 85" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" fill="none" />
              </g>
            )}

            {/* 5. PROUD: Confident wink on left, wide bright eye on right */}
            {currentEmotion === 'proud' && (
              <g>
                {/* Winking left eye */}
                <path d="M 74 85 Q 82 78 90 85" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" fill="none" />
                {/* Bright right eye */}
                <circle cx="138" cy="83" r="6" fill="#FFFFFF" />
                <circle cx="138" cy="83" r="3.8" fill="#082514" />
                <circle cx="140" cy="81" r="2" fill="#FFFFFF" />
              </g>
            )}

            {/* 6. DETERMINED: Focused, motivated eyes with cute determined brow */}
            {currentEmotion === 'determined' && (
              <g>
                <circle cx="82" cy="84" r="5.5" fill="#FFFFFF" />
                <circle cx="83" cy="84" r="3.5" fill="#082514" />
                <circle cx="85" cy="82" r="1.6" fill="#FFFFFF" />

                <circle cx="138" cy="84" r="5.5" fill="#FFFFFF" />
                <circle cx="137" cy="84" r="3.5" fill="#082514" />
                <circle cx="139" cy="82" r="1.6" fill="#FFFFFF" />

                {/* Motivated brows */}
                <path d="M 74 72 L 88 74" stroke="url(#pandaDarkGrad2)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 146 72 L 132 74" stroke="url(#pandaDarkGrad2)" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            )}

            {/* Cheeks Rosy Blush */}
            <ellipse
              cx="68"
              cy="106"
              rx="9"
              ry="5.5"
              fill="#ff8da3"
              opacity={currentEmotion === 'loving' || currentEmotion === 'excited' ? "0.85" : "0.4"}
            />
            <ellipse
              cx="152"
              cy="106"
              rx="9"
              ry="5.5"
              fill="#ff8da3"
              opacity={currentEmotion === 'loving' || currentEmotion === 'excited' ? "0.85" : "0.4"}
            />

            {/* Nose */}
            <ellipse cx="110" cy="96" rx="8.5" ry="6" fill="url(#pandaDarkGrad2)" />

            {/* --- EMOTION-SPECIFIC MOUTH --- */}
            {currentEmotion === 'excited' ? (
              /* Big happy open mouth */
              <path
                d="M 102 104 Q 110 117 118 104 Z"
                fill="#d82b53"
                stroke="url(#pandaDarkGrad2)"
                strokeWidth="2"
              />
            ) : currentEmotion === 'curious' ? (
              /* Inquisitive cute 'o' mouth */
              <ellipse cx="110" cy="107" rx="3.5" ry="4.5" fill="#d82b53" stroke="url(#pandaDarkGrad2)" strokeWidth="2" />
            ) : (
              /* Sweet cheerful smile */
              <path
                d="M 102 104 C 106 112 114 112 118 104"
                stroke="url(#pandaDarkGrad2)"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
            )}

            {/* --- BAMBOO ON TOP OF PANDA'S FACE (FAITHFUL TO LOGO) --- */}
            <g>
              {/* Bamboo Stalk curving from paw along cheek and rising above head */}
              <path
                d="M 154 168 C 164 140 184 122 188 86 C 192 58 182 34 174 22"
                stroke="url(#bambooStemGrad)"
                strokeWidth="9"
                strokeLinecap="round"
              />

              {/* Upper Bamboo Leaf 1 (Curving on top of face) */}
              <path
                d="M 176 28 C 184 12 202 2 214 8 C 216 24 200 40 184 36 Z"
                fill="url(#bambooLeafGrad)"
              />

              {/* Bamboo Leaf 2 (Right leaning upper sprig) */}
              <path
                d="M 186 42 C 200 34 218 38 224 50 C 220 66 202 70 188 56 Z"
                fill="url(#bambooLeafGrad)"
              />

              {/* Lower Bamboo Leaf 3 (Beside cheek) */}
              <path
                d="M 184 98 C 200 106 214 122 210 138 C 194 140 178 126 176 110 Z"
                fill="url(#bambooLeafGrad)"
              />
            </g>
          </svg>
        </div>

        {/* Small subtle click hint below mascot */}
        <div className="text-[11px] text-[#52725e] font-medium mt-2">
          Click panda to change emotion &amp; tips
        </div>
      </div>

      {/* Main Call to Action Buttons */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('demo')}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#0d3b1e] hover:bg-[#154e28] rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Launch App Demo</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate('about')}
          className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#0d3b1e] bg-white hover:bg-[#f2f8ef] border border-[#cce3c6] rounded-xl transition-colors cursor-pointer"
        >
          <span>About Us</span>
        </button>
      </div>
    </div>
  );
};
