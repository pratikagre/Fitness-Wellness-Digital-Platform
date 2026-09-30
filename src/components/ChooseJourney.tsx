import React from 'react';
import { 
  Users, 
  UserCheck, 
  Building2, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  Flame 
} from 'lucide-react';

interface ChooseJourneyProps {
  onStartFreeTrial: () => void;
  onExplorePrograms: () => void;
  onRequestCorporateDemo: () => void;
  onOpenTrainerSelect: () => void;
}

export const ChooseJourney: React.FC<ChooseJourneyProps> = ({
  onStartFreeTrial,
  onExplorePrograms,
  onRequestCorporateDemo,
  onOpenTrainerSelect
}) => {
  const journeys = [
    {
      id: 'group',
      tag: 'COMMUNITY & ENERGY',
      title: 'GROUP',
      subtitle: 'Live instructor-led classes',
      description: 'Join energizing, interactive live classes streamed daily with certified master instructors and a vibrant peer circle.',
      icon: Users,
      badge: 'Most Popular',
      priceNotice: 'Starting at ₹1,299/mo',
      highlights: [
        'Daily live morning, evening & bedtime sessions',
        'Real-time posture feedback & form cues from instructors',
        'Interactive community streaks and milestone badges',
        '24/7 unlimited access to 500+ on-demand library workouts',
        'Multi-disciplinary: Yoga, Strength, Dance, Mobility & Nidra'
      ],
      ctaText: 'Start 7-Day Group Trial',
      ctaAction: onStartFreeTrial,
      accentColor: 'border-emerald-500/40 bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/40 dark:from-emerald-950/20 dark:via-[#101624] dark:to-[#0E131E]',
      btnClass: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 font-extrabold shadow-lg shadow-emerald-500/25'
    },
    {
      id: 'one-on-one',
      tag: 'MAXIMUM PERSONALIZATION',
      title: '1 : 1',
      subtitle: 'Personalized trainer-led programs',
      description: 'Dedicated 1:1 private video coaching tailored exclusively to your unique physiology, schedule, injury history, and goals.',
      icon: UserCheck,
      badge: 'High Impact',
      priceNotice: 'Starting at ₹5,999/mo',
      highlights: [
        'Dedicated master coach assigned based on your movement screening',
        'Weekly custom workout & progressive overload programming',
        'Daily direct WhatsApp / app chat for questions & form check',
        'Fortnightly body composition and mobility reassessments',
        'All group classes and on-demand vault included free'
      ],
      ctaText: 'Meet 1:1 Trainers',
      ctaAction: onOpenTrainerSelect,
      accentColor: 'border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1420] hover:border-amber-500/40',
      btnClass: 'bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-white/10'
    },
    {
      id: 'corporate',
      tag: 'ORGANIZATIONAL WELLNESS',
      title: 'CORPORATE',
      subtitle: 'Wellness programs for organizations',
      description: 'Turn employee health into a strategic advantage. Boost focus, reduce desk fatigue, and prevent burnout across your workforce.',
      icon: Building2,
      badge: 'For Teams',
      priceNotice: 'Customized Team Tiers',
      highlights: [
        'Desk-friendly express mobility and posture sessions',
        'Workplace stress management & mental resilience webinars',
        'Inter-team wellness step challenges & engagement metrics',
        'Enterprise attendance reporting & HR analytics dashboard',
        'Flexible time-zone scheduling for hybrid and remote teams'
      ],
      ctaText: 'Request Corporate Demo',
      ctaAction: onRequestCorporateDemo,
      accentColor: 'border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1420] hover:border-cyan-500/40',
      btnClass: 'bg-cyan-500/10 hover:bg-cyan-500/20 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/30 text-cyan-800 dark:text-cyan-300 font-bold border border-cyan-500/30'
    }
  ];

  return (
    <section id="journey" className="py-24 bg-[#F7FAF8] dark:bg-[#0A0D14] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            6. Flexible Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display mt-4 mb-4">
            Choose Your Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Whether you thrive in an energetic live group, require the surgical precision of 1:1 coaching, or want to energize your company workforce.
          </p>
        </div>

        {/* 3 Journey Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journeys.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`rounded-3xl p-8 border ${item.accentColor} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md dark:shadow-xl relative overflow-hidden group`}
              >
                <div>
                  {/* Top Bar with Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                      {item.tag}
                    </span>
                    {item.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="py-2.5 px-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 mb-6 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Pricing</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">{item.priceNotice}</span>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">What's Included:</p>
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                  <button
                    onClick={item.ctaAction}
                    className={`w-full py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 ${item.btnClass}`}
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
