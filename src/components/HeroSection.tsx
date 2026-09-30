import React from 'react';
import { 
  Play, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Calendar, 
  Flame, 
  CheckCircle2,
  HeartPulse
} from 'lucide-react';

interface HeroSectionProps {
  onStartFreeTrial: () => void;
  onExplorePrograms: () => void;
  onJoinLiveDemo: () => void;
  onOpenAssessment: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartFreeTrial,
  onExplorePrograms,
  onJoinLiveDemo,
  onOpenAssessment
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#080B11] via-[#0A0D14] to-[#0D121F]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-emerald-600/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Subtle grid texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Live Class Status Ticker */}
        <div className="flex justify-center mb-6">
          <button 
            onClick={onJoinLiveDemo}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 hover:border-emerald-500/40 hover:bg-emerald-500/15 transition-all text-xs text-emerald-300 font-medium shadow-sm hover:shadow-emerald-500/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400">LIVE NOW:</span>
            <span>Morning Prana Flow with Ananya (328 members active)</span>
            <span className="font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
              Watch Class →
            </span>
          </button>
        </div>

        {/* Hero Title & Subtitles */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Premium Digital Wellness & Fitness Platform
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08] mb-6">
            Better Every Day.
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 font-medium mb-4 max-w-3xl mx-auto leading-relaxed">
            Fitness, movement and wellness designed around your lifestyle.
          </p>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-normal">
            Live classes, personal guidance and wellness programs — all in one place.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onStartFreeTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExplorePrograms}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-white/15 hover:border-emerald-500/40 shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>Explore Programs</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No credit card required for trial</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Certified Master Trainers</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-emerald-400" />
              <span>Physiotherapist & Doctor Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">★ 4.96/5</span>
              <span>from 14,000+ members</span>
            </div>
          </div>

        </div>

        {/* Hero Interactive Showcase Card */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl">
          <div className="rounded-[22px] bg-[#0E131E] border border-white/10 overflow-hidden relative">
            
            {/* Top Browser/App Bar */}
            <div className="px-5 py-3.5 bg-[#121722] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
                  xanso.app/live-studio
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold border border-red-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  LIVE STREAM
                </span>
                <button
                  onClick={onJoinLiveDemo}
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
                >
                  Enter Studio
                </button>
              </div>
            </div>

            {/* Grid Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              
              {/* Main Visual Stream preview */}
              <div className="md:col-span-8 relative aspect-video md:aspect-auto min-h-[320px] bg-slate-950 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80" 
                  alt="Live Trainer Ananya Sharma" 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating Trainer Badge */}
                <div className="absolute top-4 left-4 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <p className="text-xs font-bold text-white">Ananya Sharma</p>
                    <p className="text-[10px] text-emerald-400 font-medium">Lead Yoga & Breathwork Master</p>
                  </div>
                </div>

                {/* Live Form Tip Alert */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#121722]/90 backdrop-blur-md border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                    <p className="text-xs text-slate-200">
                      <span className="font-semibold text-emerald-400">Trainer Cue:</span> Keep your ribcage closed and soften your shoulders away from the ears.
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">Minute 24 of 45</span>
                </div>
              </div>

              {/* Sidebar Widget & Interactive stats */}
              <div className="md:col-span-4 bg-[#101520] p-5 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Live Studio Stats</span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> 328 Joined
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Class Burn Rate</span>
                      <span className="text-xs font-bold text-amber-400">~240 kcal burned</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Community Streak</span>
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 fill-emerald-400" /> Day 18 Active
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-slate-400">Pacing Intensity</span>
                        <span className="text-teal-400 font-semibold">Optimal Flow</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Free Assessment Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white">Not sure where to start?</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
                    Take our 2-minute clinical wellness assessment for your tailored roadmap.
                  </p>
                  <button
                    onClick={onOpenAssessment}
                    className="w-full py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-xs border border-emerald-500/30 transition-colors text-center"
                  >
                    Start 2-Min Assessment →
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
