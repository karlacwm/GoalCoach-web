import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { GoalCoachPanda } from './Logo';

export const ContactView: React.FC = () => {
  const [role, setRole] = useState<'learner' | 'institution' | 'investor' | 'general'>('learner');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 
          className="text-3xl sm:text-4xl font-black text-[#0d3b1e] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Get in Touch
        </h2>
        <div className="text-xs sm:text-sm text-[#41624c] flex flex-wrap items-center justify-center gap-2">
          <span>Direct Inquiries:</span>
          <a
            href="mailto:wehan@student.42heilbronn.de"
            className="text-[#0d3b1e] font-semibold underline hover:text-[#4ea612] transition-colors"
          >
            wehan@student.42heilbronn.de
          </a>
          <span aria-hidden="true">&middot;</span>
          <a
            href="mailto:wcheung@student.42heilbronn.de"
            className="text-[#0d3b1e] font-semibold underline hover:text-[#4ea612] transition-colors"
          >
            wcheung@student.42heilbronn.de
          </a>
        </div>
      </div>

      {/* Cute Bamboo Mailbox Card */}
      <div className="bg-white/95 backdrop-blur-sm border border-[#cbe1c7] rounded-3xl p-6 sm:p-8 shadow-sm">
        {isSent ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#eef7ea] text-[#4ea612] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0d3b1e]">
              Thank you, {name || 'friend'}!
            </h3>
            <p className="text-xs sm:text-sm text-[#466551] max-w-sm mx-auto">
              We received your message and will reply within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSent(false);
                setName('');
                setMessage('');
              }}
              className="px-4 py-2 text-xs font-bold text-[#0d3b1e] bg-[#eef7ea] rounded-xl hover:bg-[#e2f1de] transition-colors cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Segmented Role Selector */}
            <div>
              <label className="block text-xs font-bold text-[#0d3b1e] mb-2">
                I am reaching out as:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setRole('learner')}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    role === 'learner'
                      ? 'bg-[#0d3b1e] text-white border-[#0d3b1e]'
                      : 'bg-[#f7faf6] text-[#4e6c58] border-[#d6ebd2] hover:bg-white'
                  }`}
                >
                  🐼 Learner
                </button>
                <button
                  type="button"
                  onClick={() => setRole('institution')}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    role === 'institution'
                      ? 'bg-[#0d3b1e] text-white border-[#0d3b1e]'
                      : 'bg-[#f7faf6] text-[#4e6c58] border-[#d6ebd2] hover:bg-white'
                  }`}
                >
                  🏫 Institution
                </button>
                <button
                  type="button"
                  onClick={() => setRole('investor')}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    role === 'investor'
                      ? 'bg-[#0d3b1e] text-white border-[#0d3b1e]'
                      : 'bg-[#f7faf6] text-[#4e6c58] border-[#d6ebd2] hover:bg-white'
                  }`}
                >
                  📈 Investor
                </button>
                <button
                  type="button"
                  onClick={() => setRole('general')}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    role === 'general'
                      ? 'bg-[#0d3b1e] text-white border-[#0d3b1e]'
                      : 'bg-[#f7faf6] text-[#4e6c58] border-[#d6ebd2] hover:bg-white'
                  }`}
                >
                  ✉️ General
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0d3b1e] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ann Weber"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#cfe6cb] bg-[#fafcf9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4ea612]/30 text-[#0d3b1e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0d3b1e] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#cfe6cb] bg-[#fafcf9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4ea612]/30 text-[#0d3b1e]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0d3b1e] mb-1">
                Your message *
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#cfe6cb] bg-[#fafcf9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4ea612]/30 text-[#0d3b1e]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0d3b1e] hover:bg-[#154e28] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
