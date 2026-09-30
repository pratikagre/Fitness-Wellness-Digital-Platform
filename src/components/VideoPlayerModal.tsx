import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Maximize, 
  Clock, 
  Flame, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import type { OnDemandVideo } from '../types';

interface VideoPlayerModalProps {
  video: OnDemandVideo | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  onClose
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(35); // percentage

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0E131E] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/80 border border-white/10 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-black overflow-hidden group">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Center Play/Pause button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 pointer-events-auto hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-slate-950" /> : <Play className="w-8 h-8 fill-slate-950 ml-1" />}
            </button>
          </div>

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent space-y-2">
            
            {/* Scrubber timeline */}
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
              <div 
                className="h-full bg-emerald-500 rounded-full" 
                style={{ width: `${progress}%` }} 
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-3">
                <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-emerald-400">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px]">
                  08:14 / {video.durationMin}:00
                </span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <span className="hidden sm:inline text-[11px] text-emerald-400 font-semibold">
                  1080p Crystal Audio
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" />
                <Maximize className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>
            </div>

          </div>
        </div>

        {/* Video Information & Workout Notes */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase">
                  {video.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-xs font-medium">
                  {video.level}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                {video.title}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Guided by {video.trainerName} · {video.views.toLocaleString()} views
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/5 text-center">
                <span className="text-[10px] text-slate-400 block uppercase">Duration</span>
                <span className="text-sm font-bold text-white">{video.durationMin} mins</span>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/5 text-center">
                <span className="text-[10px] text-slate-400 block uppercase">Estimated Burn</span>
                <span className="text-sm font-bold text-amber-400">~{video.caloriesBurnedEstimate} kcal</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Session Overview & Focus</h4>
            {video.description}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400">
            <span>Part of the Xanso On-Demand Master Vault</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors"
            >
              Back to Catalog
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
