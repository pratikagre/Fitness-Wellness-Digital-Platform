import React from 'react';
import { 
  Video, 
  Target, 
  Award, 
  Clock, 
  TrendingUp, 
  PlayCircle, 
  Building2, 
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface WhyXansoProps {
  onExplorePrograms: () => void;
  onOpenAssessment: () => void;
}

export const WhyXanso: React.FC<WhyXansoProps> = ({ onExplorePrograms, onOpenAssessment }) => {
  const pillars = [
    {
      icon: Video,
      title: 'Live Expert-Led Classes',
      description: 'Interactive two-way live coaching where master trainers see your posture, offer real-time form corrections, and keep your energy high.',
      color: 'from-emerald-500/20 to-teal-500/5',
      iconColor: 'text-emerald-500 dark:text-emerald-400'
    },
    {
      icon: Target,
      title: 'Personalised Programs',
      description: 'No generic one-size-fits-all routines. Every journey is matched to your physical baseline, weekly availability, and biometric targets.',
      color: 'from-teal-500/20 to-cyan-500/5',
      iconColor: 'text-teal-500 dark:text-teal-400'
    },
    {
      icon: Award,
      title: 'Certified Master Trainers',
      description: 'Screened practitioners with clinical certifications (Yoga Alliance, CSCS, Physiotherapy BPT) and an average of 8+ years coaching.',
      color: 'from-amber-500/20 to-orange-500/5',
      iconColor: 'text-amber-500 dark:text-amber-400'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Morning, afternoon, evening, and night slots. Fit a 30-min express session into your lunch break or an energizing 7 AM sunrise flow.',
      color: 'from-blue-500/20 to-indigo-500/5',
      iconColor: 'text-blue-500 dark:text-blue-400'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Track attendance streaks, minutes logged, active calories, and unlock milestone achievement badges for permanent habits.',
      color: 'from-emerald-500/20 to-green-500/5',
      iconColor: 'text-emerald-500 dark:text-emerald-400'
    },
    {
      icon: PlayCircle,
      title: 'On-Demand Content',
      description: 'Missed a live session or traveling? Access over 500+ curated HD guided routines, breathwork tracks, and mobility drills 24/7.',
      color: 'from-purple-500/20 to-pink-500/5',
      iconColor: 'text-purple-500 dark:text-purple-400'
    },
    {
      icon: Building2,
      title: 'Corporate Wellness',
      description: 'Customized wellness challenges, live desk-yoga workshops, and employee health dashboards tailored for high-output organizations.',
      color: 'from-cyan-500/20 to-blue-500/5',
      iconColor: 'text-cyan-500 dark:text-cyan-400'
    },
    {
      icon: Users,
      title: 'Community & Accountability',
      description: 'Train alongside an uplifting peer circle who celebrate your daily wins and keep you consistent when motivation dips.',
      color: 'from-rose-500/20 to-amber-500/5',
      iconColor: 'text-rose-500 dark:text-rose-400'
    },
  ];

  return (
    <section className="py-24 bg-[#F7FAF8] dark:bg-[#0A0D14] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            Why Choose Xanso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display mt-4 mb-4">
            Engineered for Real Human Consistency
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Most fitness apps fail because they replace guidance with automated videos. Xanso pairs real human expertise, live accountability, and deep personalization.
          </p>
        </div>

        {/* 8 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="group p-6 rounded-2xl bg-white dark:bg-[#101522] border border-slate-200 dark:border-white/5 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                {/* Glow accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity`} />
                
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Explore pillar</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Assessment Prompt Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-teal-50 dark:from-emerald-950/40 dark:via-[#121A28] dark:to-slate-900 border border-emerald-200 dark:border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md dark:shadow-none">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
              Ready to find the ideal routine for your body?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              Answer 8 brief questions about your daily schedule, posture and fitness aspirations for an instant tailored journey recommendation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAssessment}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
            >
              <span>Take Free Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExplorePrograms}
              className="px-6 py-3 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-semibold text-sm border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
            >
              View All Programs
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
