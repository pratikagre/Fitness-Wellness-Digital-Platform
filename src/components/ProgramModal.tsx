import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Users,
  Video
} from 'lucide-react';
import type { Program } from '../types';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onEnrollTrial: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onEnrollTrial
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0D121F] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Banner */}
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <img 
            src={program.image} 
            alt={program.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D121F] via-[#0D121F]/60 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/80 border border-white/10 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Meta Info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-xs">
                {program.badge || program.level}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs border border-white/10">
                {program.durationWeeks} Weeks Cohort
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 text-xs border border-white/10 font-bold">
                ₹{program.priceMonthly} / month
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
              {program.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[calc(85vh-280px)] overflow-y-auto">
          
          {/* Key Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-slate-400 text-xs block mb-1">Live Schedule</span>
              <p className="text-xs sm:text-sm font-bold text-white">{program.schedule}</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-slate-400 text-xs block mb-1">Session Length</span>
              <p className="text-xs sm:text-sm font-bold text-white">{program.sessionDurationMin} mins / class</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-slate-400 text-xs block mb-1">Commitment</span>
              <p className="text-xs sm:text-sm font-bold text-white">{program.sessionsPerWeek} days / week</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-slate-400 text-xs block mb-1">Enrolled</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-400">{program.enrolledMembers} Active Members</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Program Overview</h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {program.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Key Highlights & Inclusions</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trainer Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-[#121724] border border-emerald-500/20 flex flex-col sm:flex-row items-center gap-4">
            <img 
              src={program.trainerPhoto} 
              alt={program.trainerName} 
              className="w-16 h-16 rounded-2xl object-cover border border-emerald-500/40"
            />
            <div className="text-center sm:text-left flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Led By Master Trainer</span>
              <h5 className="text-base font-bold text-white">{program.trainerName}</h5>
              <p className="text-xs text-slate-300 mt-0.5">
                Live interactive feedback, form correction cues & continuous habit guidance throughout the program.
              </p>
            </div>
          </div>

          {/* Week-by-Week Curriculum */}
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Structured Week-by-Week Curriculum</h4>
            <div className="space-y-3">
              {program.curriculum.map((c) => (
                <div key={c.week} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 font-extrabold text-sm flex items-center justify-center shrink-0 border border-emerald-500/20">
                    W{c.week}
                  </div>
                  <div>
                    <h6 className="text-sm font-bold text-white mb-1">{c.focus}</h6>
                    <p className="text-xs text-slate-300 leading-relaxed">{c.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#121724] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400">Monthly Tuition (Live Classes + On-Demand Vault)</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-white">₹{program.priceMonthly}</span>
              <span className="text-xs text-slate-400">/ month · Cancel anytime</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnrollTrial(program.title);
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Enroll with 7-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
