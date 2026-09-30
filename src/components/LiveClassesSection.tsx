import React, { useState } from 'react';
import type { LiveClass } from '../types';
import { LIVE_CLASSES_DATA } from '../data/liveClassesData';
import { 
  Video, 
  Clock, 
  Users, 
  Flame, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

interface LiveClassesSectionProps {
  onJoinLiveClass: (liveClass: LiveClass) => void;
  onReserveSpot: (classTitle: string) => void;
}

export const LiveClassesSection: React.FC<LiveClassesSectionProps> = ({
  onJoinLiveClass,
  onReserveSpot
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Live Classes' },
    { id: 'yoga', label: 'Yoga' },
    { id: 'meditation', label: 'Meditation & Sleep' },
    { id: 'strength', label: 'Strength & Conditioning' },
    { id: 'zumba', label: 'Zumba & Dance' },
    { id: 'mobility', label: 'Mobility & Posture' },
    { id: 'womens-wellness', label: "Women's Wellness" }
  ];

  const filtered = activeTab === 'all'
    ? LIVE_CLASSES_DATA
    : LIVE_CLASSES_DATA.filter(c => c.category === activeTab);

  return (
    <section id="live-classes" className="py-24 bg-[#F1F6F3] dark:bg-[#0A0D14] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              Interactive Streaming
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display mt-4 mb-3">
              Today's Live Wellness Schedule
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Stream live from anywhere. Two-way posture cues, motivating playlists, and a supportive community to keep you consistent every day.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 text-red-500 dark:text-red-400 text-xs font-bold border border-red-500/20">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              1 Studio Streaming Live
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/5 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Live Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md dark:shadow-xl relative overflow-hidden ${
                item.isLiveNow 
                  ? 'bg-gradient-to-b from-emerald-50/90 via-white to-teal-50/80 dark:from-[#141E28] dark:via-[#0E1520] dark:to-[#0D121F] border-emerald-500/50' 
                  : 'bg-white dark:bg-[#0F1420] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {item.isLiveNow ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 text-red-600 dark:text-red-400 text-xs font-extrabold border border-red-500/30">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        IN PROGRESS
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {item.timeString}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
                    {item.level}
                  </span>
                </div>

                {/* Class Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                {/* Details */}
                <div className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-500 dark:text-slate-400">Duration</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{item.durationMin} Minutes</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-500 dark:text-slate-400">Intensity</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{item.intensity}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-500 dark:text-slate-400">Equipment</span>
                    <span className="text-slate-700 dark:text-slate-300 line-clamp-1 max-w-[180px] text-right">{item.equipment}</span>
                  </div>
                </div>

                {/* Trainer Row */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 mb-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.trainerPhoto} 
                      alt={item.trainerName} 
                      className="w-10 h-10 rounded-full object-cover border border-emerald-500/40" 
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{item.trainerName}</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Master Instructor</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {item.spotsLeft} spots left
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                {item.isLiveNow ? (
                  <button
                    onClick={() => onJoinLiveClass(item)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Enter Live Class Room</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onJoinLiveClass(item)}
                      className="py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-white font-semibold text-xs border border-slate-200 dark:border-white/10 transition-colors text-center"
                    >
                      Preview Room
                    </button>
                    <button
                      onClick={() => onReserveSpot(item.title)}
                      className="py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold text-xs border border-emerald-500/30 transition-colors text-center"
                    >
                      Reserve Spot
                    </button>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
