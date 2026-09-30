import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Play, 
  Quote, 
  Sparkles, 
  TrendingUp, 
  Award,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import type { Testimonial } from '../types';

export const SuccessStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Testimonial | null>(null);

  return (
    <section id="stories" className="py-24 bg-[#F4F8F5] dark:bg-[#0A0D14] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            14. Verified Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display mt-4 mb-4">
            Real People. Real Journeys.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            No overnight fake claims or crash diet promises. These are verifiable stories from busy professionals who built sustainable health habits with Xanso.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((story) => (
            <div
              key={story.id}
              className="rounded-3xl bg-white dark:bg-[#0F1420] border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-sm dark:shadow-xl relative group"
            >
              <div>
                {/* Member Profile Header */}
                <div className="flex items-center gap-4 mb-5">
                  <img 
                    src={story.photo} 
                    alt={story.name} 
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-500/40 shadow-sm" 
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{story.name}</h4>
                      <span title="Verified Member">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {story.profession} · {story.city}
                    </p>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      Member since {story.verifiedMemberSince}
                    </span>
                  </div>
                </div>

                {/* Rating & Goal Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 text-[10px] font-bold border border-emerald-500/20">
                    {story.programTaken}
                  </span>
                </div>

                {/* Achievement Headline */}
                <h5 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  "{story.goalAchieved}"
                </h5>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed relative">
                  "{story.quote}"
                </p>

                {/* Quantifiable Impact Metrics */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-white/5 border border-emerald-100 dark:border-white/5 space-y-2 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    Verifiable Progress Markers:
                  </span>
                  {story.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-400">{m.label}</span>
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Full Case Study Button */}
              <button
                onClick={() => setSelectedStory(story)}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Read Full Member Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

        {/* Story Modal Detail if open */}
        {selectedStory && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <img 
                    src={selectedStory.photo} 
                    alt={selectedStory.name} 
                    className="w-12 h-12 rounded-xl object-cover border border-emerald-500/40" 
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{selectedStory.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{selectedStory.profession} · {selectedStory.city}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                  Verified Case Study
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {selectedStory.goalAchieved}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  {selectedStory.fullStory}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">Tracked Outcomes</span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {selectedStory.metrics.map((m, i) => (
                    <div key={i} className="p-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-transparent">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{m.label}</span>
                      <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-xs shadow-md transition-colors"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
