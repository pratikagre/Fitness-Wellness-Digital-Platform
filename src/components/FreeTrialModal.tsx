import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  Flame, 
  ArrowRight,
  Gift
} from 'lucide-react';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: { name: string; email: string; trialType: string }) => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [trialType, setTrialType] = useState<'7-day' | 'single-class'>('7-day');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('get-fit');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.55 }
      });
    } catch (e) {}

    setIsSubmitted(true);
    onSuccess({
      name,
      email,
      trialType: trialType === '7-day' ? '7-Day Unlimited Pass' : 'Single Live Class Pass'
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-50 via-slate-50 to-white dark:from-emerald-950/40 dark:via-[#121724] dark:to-[#0D121F] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Zero Barrier Experience
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Start Your Free Xanso Trial
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Option Cards: 7-Day vs Single Class */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                  Select Your Preferred Trial Format:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTrialType('7-day')}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      trialType === '7-day'
                        ? 'bg-emerald-50 dark:bg-emerald-500/15 border-emerald-500 text-slate-900 dark:text-white shadow-md shadow-emerald-500/10'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-white/5 dark:border-white/5 dark:text-slate-400 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white">7-Day Free Pass</span>
                      {trialType === '7-day' && <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300">
                       Unlimited live classes & full on-demand library access for a full week.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTrialType('single-class')}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      trialType === 'single-class'
                        ? 'bg-emerald-50 dark:bg-emerald-500/15 border-emerald-500 text-slate-900 dark:text-white shadow-md shadow-emerald-500/10'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-white/5 dark:border-white/5 dark:text-slate-400 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white">1 Free Live Class</span>
                      {trialType === 'single-class' && <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300">
                      Pick any single morning or evening live interactive class to try.
                    </p>
                  </button>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="priya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">WhatsApp / Phone (For class link)</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Primary Goal</label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#141A28] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="get-fit">Daily Fitness & Energy</option>
                      <option value="reduce-stress">Stress & Anxiety Relief</option>
                      <option value="manage-weight">Weight Management</option>
                      <option value="build-strength">Strength & Posture</option>
                      <option value="improve-flexibility">Flexibility & Joint Mobility</option>
                      <option value="improve-sleep">Better Deep Sleep</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Trust Guarantees */}
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  No credit card required
                </span>
                <span className="text-slate-400 dark:text-slate-500">·</span>
                <span>Instant access link</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white dark:text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Activate Free Trial Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                Welcome to Xanso, {name}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                Your <span className="text-emerald-600 dark:text-emerald-400 font-bold">{trialType === '7-day' ? '7-Day Unlimited Free Access' : '1 Free Live Class'}</span> has been activated immediately for <span className="font-semibold text-slate-900 dark:text-white">{email}</span>.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 max-w-xs mx-auto text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <p className="font-semibold text-slate-900 dark:text-white">Next Step:</p>
                <p>Check out your upcoming classes in the Member Dashboard or join today's active live room.</p>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-xs shadow-lg transition-colors"
                >
                  Explore Member Dashboard →
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
