import React, { useState } from 'react';
import type { Program } from '../types';
import { PROGRAMS_DATA } from '../data/programsData';
import { 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Filter,
  CheckCircle2,
  Users
} from 'lucide-react';

interface FeaturedProgramsProps {
  onSelectProgram: (program: Program) => void;
}

export const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({ onSelectProgram }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'yoga', label: 'Yoga & Flow' },
    { id: 'strength', label: 'Fitness & Strength' },
    { id: 'meditation', label: 'Meditation & Sleep' },
    { id: 'womens-wellness', label: "Women's Wellness" },
    { id: 'mobility', label: 'Mobility & Posture' },
    { id: 'zumba', label: 'Dance & Zumba' },
  ];

  const filtered = activeCategory === 'all' 
    ? PROGRAMS_DATA 
    : PROGRAMS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 bg-[#080B12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              7. Featured Programs
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mt-4 mb-3">
              Master-Planned Wellness Journeys
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Every program card provides complete transparency: Level, Duration, Master Trainer, Live Schedule, and Pricing.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Updated with new upcoming batch cohorts</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((prog) => (
            <div 
              key={prog.id}
              className="rounded-3xl bg-[#0F1420] border border-white/10 hover:border-emerald-500/40 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                {/* Image & Overlays */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1420] via-black/30 to-black/20" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white border border-white/15">
                      {prog.level}
                    </span>
                    {prog.badge && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500 text-[11px] font-extrabold text-slate-950 shadow-md">
                        {prog.badge}
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      {prog.durationWeeks} Weeks · {prog.sessionDurationMin}m
                    </span>
                    <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 font-bold text-emerald-400 font-mono">
                      ₹{prog.priceMonthly}/mo
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {prog.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mb-5 leading-relaxed">
                    {prog.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {prog.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trainer & Schedule Footer */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img 
                          src={prog.trainerPhoto} 
                          alt={prog.trainerName} 
                          className="w-9 h-9 rounded-full object-cover border border-emerald-500/40" 
                        />
                        <div>
                          <p className="text-xs font-bold text-white">{prog.trainerName}</p>
                          <p className="text-[10px] text-emerald-400 font-medium">{prog.sessionsPerWeek} Live Sessions / Wk</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {prog.enrolledMembers}
                      </span>
                    </div>

                    <div className="py-2 px-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs text-slate-300">
                      <span className="text-slate-400">Schedule</span>
                      <span className="font-mono text-[11px] text-emerald-300">{prog.schedule}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectProgram(prog)}
                  className="w-full py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-bold text-xs sm:text-sm border border-emerald-500/25 hover:border-emerald-500 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>View Full Curriculum & Enroll</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
