import React, { useState } from 'react';
import { 
  Flame, 
  Smile, 
  Scale, 
  Dumbbell, 
  Activity, 
  Moon, 
  Heart, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Calendar, 
  Star 
} from 'lucide-react';
import type { GoalCategory, Program } from '../types';
import { PROGRAMS_DATA } from '../data/programsData';

interface GoalSelectorProps {
  onSelectProgram: (program: Program) => void;
  onOpenAssessment: () => void;
}

export const GoalSelector: React.FC<GoalSelectorProps> = ({ 
  onSelectProgram,
  onOpenAssessment 
}) => {
  const [selectedGoal, setSelectedGoal] = useState<GoalCategory>('get-fit');

  const goals: { id: GoalCategory; label: string; icon: any; tagline: string }[] = [
    { id: 'get-fit', label: 'Get Fit', icon: Flame, tagline: 'Daily cardiovascular stamina & full-body energy' },
    { id: 'reduce-stress', label: 'Reduce Stress', icon: Smile, tagline: 'Cortisol deceleration & calm mental clarity' },
    { id: 'manage-weight', label: 'Manage Weight', icon: Scale, tagline: 'Metabolic boost & lean body recomposition' },
    { id: 'build-strength', label: 'Build Strength', icon: Dumbbell, tagline: 'Functional muscle, posture & bone density' },
    { id: 'improve-flexibility', label: 'Improve Flexibility', icon: Activity, tagline: 'Joint decompression & fluid mobility' },
    { id: 'improve-sleep', label: 'Improve Sleep', icon: Moon, tagline: 'Circadian alignment & restorative Yoga Nidra' },
    { id: 'overall-wellness', label: 'Overall Wellness', icon: Heart, tagline: 'Comprehensive balance for body, mind & habits' },
  ];

  const filteredPrograms = PROGRAMS_DATA.filter(p => p.targetGoals.includes(selectedGoal));
  const activeGoalData = goals.find(g => g.id === selectedGoal)!;

  return (
    <section id="goal-selector" className="py-20 bg-[#F1F6F3] dark:bg-[#0C101A] border-y border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            5. Personalized Matching
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mt-4 mb-3">
            What is your primary wellness goal?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your focus below to dynamically view the most effective expert-curated programs designed for your exact outcome.
          </p>
        </div>

        {/* Goal Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 max-w-5xl mx-auto">
          {goals.map((g) => {
            const Icon = g.icon;
            const isSelected = selectedGoal === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setSelectedGoal(g.id)}
                className={`px-4 sm:px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105 font-bold'
                    : 'bg-white dark:bg-[#141A28] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-[#1A2234] border border-slate-200 dark:border-white/5 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-slate-950' : 'text-emerald-600 dark:text-emerald-400'}`} />
                <span>{g.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3] text-slate-950" />}
              </button>
            );
          })}
        </div>

        {/* Active Goal Summary Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Recommended Focus</p>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {activeGoalData.label}: <span className="text-emerald-600 dark:text-emerald-400 font-normal">{activeGoalData.tagline}</span>
              </h4>
            </div>
          </div>
          <button
            onClick={onOpenAssessment}
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 transition-colors shrink-0"
          >
            Take 8-Question Assessment →
          </button>
        </div>

        {/* Filtered Recommended Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div 
              key={prog.id}
              className="rounded-2xl bg-white dark:bg-[#111624] border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-md dark:shadow-lg"
            >
              <div>
                {/* Program image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-white border border-white/10 uppercase tracking-wider">
                      {prog.level}
                    </span>
                    {prog.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-[10px] font-extrabold text-slate-950 uppercase tracking-wider">
                        {prog.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      {prog.sessionDurationMin}m · {prog.durationWeeks} Weeks
                    </span>
                    <span className="font-bold text-emerald-400 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      ₹{prog.priceMonthly}/mo
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {prog.shortDescription}
                  </p>

                  {/* Trainer info */}
                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={prog.trainerPhoto} 
                        alt={prog.trainerName} 
                        className="w-8 h-8 rounded-full object-cover border border-emerald-500/40" 
                      />
                      <div>
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{prog.trainerName}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">{prog.sessionsPerWeek} sessions / week</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {prog.schedule.split('·')[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectProgram(prog)}
                  className="w-full py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-slate-950 text-emerald-700 dark:text-emerald-400 font-bold text-xs border border-emerald-500/30 hover:border-emerald-500 transition-all flex items-center justify-center gap-1.5 group-hover:shadow-md group-hover:shadow-emerald-500/20"
                >
                  <span>View Full Curriculum & Enroll</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
