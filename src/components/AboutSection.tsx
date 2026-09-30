import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Target, 
  Users, 
  Compass,
  ArrowRight
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: 'Human-Centered Guidance',
      desc: 'Algorithms cannot replace empathy. Real master teachers who watch your movement, understand bad days, and celebrate small daily wins.',
      icon: Heart
    },
    {
      title: 'Science Over Fads',
      desc: 'Zero crash diets, extreme dehydration protocols, or joint-destroying volume. Every movement prescription is grounded in sports medicine and recovery science.',
      icon: ShieldCheck
    },
    {
      title: 'Built Around Modern Schedules',
      desc: 'High-yield 30-to-45 minute sessions structured for working professionals who juggle deadlines, family, and travel.',
      icon: Compass
    },
    {
      title: 'Inclusive & Non-Judgmental',
      desc: 'Whether taking your first downward dog at 45 or rebuilding core strength postpartum, Xanso is your safe, inspiring haven.',
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F4F8F5] dark:bg-[#0A0D14] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            About Xanso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display mt-4 mb-4">
            One Platform. Complete Wellness Journey.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Inspired by the timeless belief that lasting physical and mental transformation does not happen in isolated extremes, but in the small choices practiced every single day.
          </p>
        </div>

        {/* 7-Step Journey Loop */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl mb-16">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-8">
            The Xanso Lifelong Wellness Engine
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            {[
              { step: '01', name: 'Discover', desc: 'Explore programs' },
              { step: '02', name: 'Assess', desc: '8-min evaluation' },
              { step: '03', name: 'Choose', desc: 'Group, 1:1, or B2B' },
              { step: '04', name: 'Join', desc: '7-day free trial' },
              { step: '05', name: 'Train', desc: 'Live expert studio' },
              { step: '06', name: 'Track', desc: 'Streaks & biometric' },
              { step: '07', name: 'Improve', desc: 'Lifelong habits' },
            ].map((st, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 block mb-1">{st.step}</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{st.name}</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-[#0F1420] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
