import React, { useState } from 'react';
import type { OnDemandVideo } from '../types';
import { VIDEOS_DATA } from '../data/videosData';
import { 
  Play, 
  Clock, 
  Flame, 
  Eye, 
  Filter, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface OnDemandSectionProps {
  onSelectVideo: (video: OnDemandVideo) => void;
}

export const OnDemandSection: React.FC<OnDemandSectionProps> = ({ onSelectVideo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'yoga', label: 'Yoga' },
    { id: 'fitness', label: 'Fitness' },
    { id: 'meditation', label: 'Meditation' },
    { id: 'mobility', label: 'Mobility' },
    { id: 'relaxation', label: 'Relaxation' },
  ];

  const levels = [
    { id: 'all', label: 'All Levels' },
    { id: 'Beginner', label: 'Beginner' },
    { id: 'Intermediate', label: 'Intermediate' },
    { id: 'Advanced', label: 'Advanced' },
  ];

  const filtered = VIDEOS_DATA.filter((v) => {
    const matchCat = selectedCategory === 'all' || v.category === selectedCategory;
    const matchLvl = selectedLevel === 'all' || v.level === selectedLevel;
    return matchCat && matchLvl;
  });

  return (
    <section id="ondemand" className="py-24 bg-[#0C101A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              24/7 Library Vault
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mt-4 mb-3">
              On-Demand Content Library
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Work out on your schedule. Access short express micro-drills, deep breathwork sessions, and full-length classes whenever you need them.
            </p>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-white/5 font-mono text-emerald-400">
              500+ Sessions Available
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === c.id
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Difficulty Level Dropdown/Tabs */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto bg-white/5 p-1 rounded-xl border border-white/5">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedLevel === lvl.id
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((video) => (
            <div
              key={video.id}
              onClick={() => onSelectVideo(video)}
              className="rounded-2xl bg-[#111624] border border-white/5 hover:border-emerald-500/40 overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                  {/* Play Icon Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-sm text-[11px] font-mono font-medium text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {video.durationMin}m
                  </span>

                  {/* Category Pill */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    {video.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-4">
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mb-1.5">
                    {video.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mb-3">
                    Instructor: {video.trainerName}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <Flame className="w-3 h-3 text-amber-400" />
                      ~{video.caloriesBurnedEstimate} kcal
                    </span>
                    <span className="text-slate-500 font-medium">
                      {video.level}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="w-full py-2 rounded-lg bg-white/5 group-hover:bg-emerald-500 group-hover:text-slate-950 text-slate-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
                  <Play className="w-3 h-3 fill-current" />
                  <span>Watch Session</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
