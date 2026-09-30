import React, { useState } from 'react';
import type { Trainer } from '../types';
import { TRAINERS_DATA } from '../data/trainersData';
import { 
  Star, 
  Award, 
  Globe, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface TrainerSectionProps {
  onSelectTrainer: (trainer: Trainer) => void;
}

export const TrainerSection: React.FC<TrainerSectionProps> = ({ onSelectTrainer }) => {
  return (
    <section id="trainers" className="py-24 bg-[#F7FAF8] dark:bg-[#0A0D14] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            8. Certified Practitioners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display mt-4 mb-4">
            Meet Your Wellness Experts
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Every Xanso trainer is a rigorously certified practitioner with deep clinical and movement credentials. No social media influencers—just real teachers.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS_DATA.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-3xl bg-white dark:bg-[#0F1420] border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 shadow-md dark:shadow-xl"
            >
              <div>
                {/* Photo & Overlays */}
                <div className="relative h-72 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img 
                    src={trainer.photo} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                      {trainer.rating} ({trainer.reviewCount} reviews)
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-slate-200 border border-white/10">
                      {trainer.experienceYears}+ Yrs Exp
                    </span>
                  </div>

                  {/* Available sessions tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="bg-emerald-950/80 border border-emerald-500/30 backdrop-blur-md text-emerald-300 px-3 py-1 rounded-xl font-medium">
                      {trainer.availableSessionsThisWeek} 1:1 Slots Open This Week
                    </span>
                  </div>
                </div>

                {/* Trainer Information */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                    {trainer.title}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-2">
                    {trainer.bio}
                  </p>

                  {/* Qualifications Pill Tags */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Certifications</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.qualifications.map((q, idx) => (
                        <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300">
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="space-y-1.5 mb-5">
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Specializations:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {trainer.specializations.map((spec, i) => (
                        <span key={i} className="text-[11px] text-emerald-700 dark:text-emerald-300 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-md">
                          • {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Globe className="w-3.5 h-3.5 text-slate-400" />
                    <span>Languages: {trainer.languages.join(', ')}</span>
                  </div>

                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectTrainer(trainer)}
                  className="w-full py-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-emerald-500 hover:text-slate-950 text-slate-900 dark:text-white font-bold text-xs sm:text-sm border border-slate-200 dark:border-white/10 hover:border-emerald-500 transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>View Trainer & Book Session</span>
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
