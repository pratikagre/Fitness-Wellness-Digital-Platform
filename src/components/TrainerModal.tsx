import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Award, 
  Globe, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import type { Trainer } from '../types';

interface TrainerModalProps {
  trainer: Trainer | null;
  onClose: () => void;
  onBookSession: (trainerName: string, slot: string) => void;
}

export const TrainerModal: React.FC<TrainerModalProps> = ({
  trainer,
  onClose,
  onBookSession
}) => {
  const [selectedSlot, setSelectedSlot] = useState<string>('Tomorrow · 08:00 AM');
  const [sessionType, setSessionType] = useState<'screening' | 'full'>('screening');

  if (!trainer) return null;

  const sampleSlots = [
    'Tomorrow · 08:00 AM',
    'Tomorrow · 05:30 PM',
    'Thursday · 07:00 AM',
    'Thursday · 06:30 PM',
    'Friday · 08:30 AM',
    'Saturday · 10:00 AM'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0D121F] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/80 border border-white/10 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Profile Top */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-950/40 via-[#121724] to-[#0D121F] border-b border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img 
            src={trainer.photo} 
            alt={trainer.name} 
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-2 border-emerald-500/40 shadow-xl" 
          />
          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs border border-emerald-500/20">
                Master Wellness Coach
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {trainer.rating} ({trainer.reviewCount} reviews)
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {trainer.name}
            </h2>
            <p className="text-sm font-semibold text-emerald-400 mt-0.5">
              {trainer.title}
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {trainer.experienceYears}+ Years Clinical Coaching
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                {trainer.languages.join(', ')}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-300px)] overflow-y-auto">
          
          {/* Bio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">About The Coach</h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {trainer.bio}
            </p>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Certifications</span>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {trainer.qualifications.map((q, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Specializations</span>
              <div className="flex flex-wrap gap-1.5">
                {trainer.specializations.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs font-medium border border-emerald-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Review */}
          <div className="p-4 rounded-2xl bg-[#121826] border border-white/5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Verified Member Review</span>
            <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
              "{trainer.featuredTestimonial}"
            </p>
          </div>

          {/* Slot Selection for 1:1 Session */}
          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Select 1:1 Live Video Consultation Slot
              </h4>
              <span className="text-xs text-emerald-400 font-medium">Free 20-min intro screening</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {sampleSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    selectedSlot === slot
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-white/5 text-slate-300 border-white/5 hover:border-white/20'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#121724] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs text-slate-400">Selected Slot:</p>
            <p className="text-sm font-bold text-white">{selectedSlot}</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onClose();
                onBookSession(trainer.name, selectedSlot);
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Confirm 1:1 Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
