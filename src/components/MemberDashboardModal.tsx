import React, { useState } from 'react';
import { 
  X, 
  Flame, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Award, 
  User, 
  CreditCard, 
  Bell, 
  MessageSquare, 
  Send, 
  ArrowRight, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck,
  Play,
  Download,
  AlertCircle
} from 'lucide-react';
import type { LiveClass, MemberBadge } from '../types';

interface MemberDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoinLiveClass: (liveClass: LiveClass) => void;
  userStreakDays?: number;
}

export const MemberDashboardModal: React.FC<MemberDashboardModalProps> = ({
  isOpen,
  onClose,
  onJoinLiveClass,
  userStreakDays = 12
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'schedule' | 'badges' | 'trainer' | 'subscription' | 'notifications'>('overview');
  const [trainerChatInput, setTrainerChatInput] = useState('');
  const [trainerMessages, setTrainerMessages] = useState([
    { sender: 'Ananya Sharma', text: 'Hi! Great form on the hip mobility transitions this morning. Remember to maintain deep diaphragmatic breathing on the twists.', time: '08:15 AM', isTrainer: true },
    { sender: 'You', text: 'Thanks Ananya! My upper back feels so much looser already.', time: '08:30 AM', isTrainer: false }
  ]);

  if (!isOpen) return null;

  const mockLiveClass: LiveClass = {
    id: 'live-now-dash',
    title: 'Morning Prana Flow & Spine Activation',
    category: 'yoga',
    trainerName: 'Ananya Sharma',
    trainerPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    timeString: 'Today · 07:00 AM IST',
    startTime: '07:00 AM',
    durationMin: 45,
    level: 'All Levels',
    spotsLeft: 4,
    intensity: 'Moderate',
    equipment: 'Yoga Mat, Water Bottle',
    isLiveNow: true
  };

  const badges: MemberBadge[] = [
    { id: 'b1', title: '7-Day Streak', description: 'Completed 7 consecutive days of movement', icon: '🔥', unlocked: true, unlockedDate: '18 Sept', progressPercent: 100 },
    { id: 'b2', title: '14-Day Streak', description: 'Two weeks of unshakeable habit consistency', icon: '⚡', unlocked: false, progressPercent: 85 },
    { id: 'b3', title: '30-Day Champion', description: 'One full month of dedication to health', icon: '🏆', unlocked: false, progressPercent: 40 },
    { id: 'b4', title: '50 Sessions', description: 'Attended 50 live or on-demand classes', icon: '🌟', unlocked: true, unlockedDate: '10 Sept', progressPercent: 100 },
    { id: 'b5', title: '100 Sessions Club', description: 'Elite milestone of 100 classes logged', icon: '👑', unlocked: false, progressPercent: 54 },
  ];

  const handleSendTrainerMsg = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trainerChatInput.trim()) return;
    setTrainerMessages([
      ...trainerMessages,
      {
        sender: 'You',
        text: trainerChatInput.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isTrainer: false
      }
    ]);
    setTrainerChatInput('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dashboard Top Header Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-[#121724] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/30">
              P
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Priya Sharma</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-extrabold uppercase border border-emerald-500/30">
                  Premium Member
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Primary Goal: Daily Energy & Posture Reset</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold">
              <Flame className="w-4 h-4 fill-amber-500" />
              <span>{userStreakDays} Day Streak!</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Navigation Bar */}
        <div className="px-4 sm:px-6 bg-slate-100 dark:bg-[#0E1422] border-b border-slate-200 dark:border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none py-2">
          {[
            { id: 'overview', label: 'Overview', icon: TrendingUp },
            { id: 'schedule', label: 'My Schedule', icon: Calendar },
            { id: 'badges', label: 'Streaks & Badges', icon: Award },
            { id: 'trainer', label: '1:1 Trainer Hub', icon: MessageSquare },
            { id: 'subscription', label: 'Subscription & Billing', icon: CreditCard },
            { id: 'notifications', label: 'Notifications', icon: Bell },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dashboard Scrollable Body */}
        <div className="flex-1 p-5 sm:p-8 overflow-y-auto space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Live Class Prompt Alert */}
              <div className="p-5 rounded-2xl bg-red-50 dark:bg-gradient-to-r dark:from-red-950/40 dark:via-[#161D2C] dark:to-slate-900 border border-red-200 dark:border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 text-center sm:text-left">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-ping shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">Class Happening Now</span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{mockLiveClass.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Led by {mockLiveClass.trainerName} · 328 members active</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onJoinLiveClass(mockLiveClass);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-xs shadow-lg shadow-red-500/25 transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Join Live Class Room</span>
                </button>
              </div>

              {/* Progress Summary 4-Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1">Active Streak</span>
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span className="text-xl font-extrabold text-slate-900 dark:text-white font-mono">{userStreakDays} Days</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1">Classes Completed</span>
                  <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">54 Classes</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1">Minutes Moved</span>
                  <span className="text-xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">2,160 Mins</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1">Milestone Badges</span>
                  <span className="text-xl font-extrabold text-amber-600 dark:text-amber-300 font-mono">2 / 5 Unlocked</span>
                </div>
              </div>

              {/* Today's Schedule & Assigned Routine */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Active Program Progress */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#111726] border border-slate-200 dark:border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Current Program</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Week 3 of 6</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Sunrise Vinyasa & Core Alignment</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    This week's focus: Dynamic core activation, boat pose progressions, and lumbar stability.
                  </p>
                  
                  {/* Progress bar */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>Curriculum Completion</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono">50%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-emerald-500 rounded-full" />
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Next session: Tomorrow at 07:00 AM IST
                  </div>
                </div>

                {/* Trainer Weekly Review Note */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#111726] border border-slate-200 dark:border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Assigned Coach</span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">Weekly Review Ready</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" 
                        alt="Ananya Sharma" 
                        className="w-11 h-11 rounded-full object-cover border border-emerald-500" 
                      />
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">Ananya Sharma</h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Lead Yoga & Breathwork Master</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 p-3 rounded-xl italic border border-slate-200 dark:border-transparent">
                      "Priya, you've shown fantastic hip mobility progress this week. Let's focus on maintaining ribcage down during standing flows."
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 flex justify-end">
                    <button
                      onClick={() => setActiveTab('trainer')}
                      className="text-xs text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                    >
                      Chat with Ananya →
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: SCHEDULE */}
          {activeTab === 'schedule' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Your Weekly Movement Schedule</h4>
              <div className="space-y-2.5">
                {[
                  { day: 'Monday', time: '07:00 AM', title: 'Morning Prana Flow', coach: 'Ananya Sharma', status: 'Completed' },
                  { day: 'Tuesday', time: '07:00 AM', title: 'Core Alignment & Boat Flows', coach: 'Ananya Sharma', status: 'Completed' },
                  { day: 'Wednesday', time: '07:00 AM', title: 'Spinal Mobility & Decompression', coach: 'Ananya Sharma', status: 'Today · Ready' },
                  { day: 'Thursday', time: '07:00 AM', title: 'Balance & Warrior Transitions', coach: 'Ananya Sharma', status: 'Upcoming' },
                  { day: 'Friday', time: '07:00 AM', title: 'Pranayama & Full Vinyasa Integration', coach: 'Ananya Sharma', status: 'Upcoming' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 text-center">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{item.day.slice(0, 3)}</span>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.time} · Coach {item.coach}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                      item.status === 'Completed'
                        ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                        : item.status.includes('Today')
                          ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 animate-pulse'
                          : 'bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: STREAKS & BADGES */}
          {activeTab === 'badges' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Wellness Streaks & Achievement Badges</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Unlock official milestone credentials as you build lifelong movement consistency.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {badges.map((b) => (
                  <div
                    key={b.id}
                    className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
                      b.unlocked 
                        ? 'bg-gradient-to-br from-emerald-50 to-slate-100 dark:from-emerald-950/40 dark:to-[#121826] border-emerald-300 dark:border-emerald-500/40 shadow-sm dark:shadow-lg dark:shadow-emerald-500/10' 
                        : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 opacity-70'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl">{b.icon}</span>
                        {b.unlocked ? (
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase">
                            Unlocked {b.unlockedDate}
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                            {b.progressPercent}% Completed
                          </span>
                        )}
                      </div>
                      <h5 className="text-base font-bold text-slate-900 dark:text-white mb-1">{b.title}</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">{b.description}</p>
                    </div>

                    {!b.unlocked && (
                      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full" 
                          style={{ width: `${b.progressPercent}%` }} 
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: 1:1 TRAINER HUB */}
          {activeTab === 'trainer' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" 
                    alt="Ananya Sharma" 
                    className="w-10 h-10 rounded-full object-cover border border-emerald-500" 
                  />
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">Ananya Sharma</h5>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400">Direct Chat · Typically replies within 2 hours</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white text-xs font-semibold transition-colors">
                  Schedule 1:1 Call
                </button>
              </div>

              {/* Chat Thread */}
              <div className="h-64 p-4 rounded-2xl bg-slate-100 dark:bg-[#0A0E17] border border-slate-200 dark:border-white/10 overflow-y-auto space-y-3">
                {trainerMessages.map((m, i) => (
                  <div 
                    key={i} 
                    className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                      m.isTrainer 
                        ? 'bg-emerald-100 border border-emerald-300 text-emerald-950 dark:bg-emerald-500/15 dark:border-emerald-500/30 dark:text-emerald-100 mr-auto' 
                        : 'bg-white border border-slate-200 text-slate-900 dark:bg-white/10 dark:border-transparent dark:text-white ml-auto shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="font-semibold">{m.sender}</span>
                      <span>{m.time}</span>
                    </div>
                    <p>{m.text}</p>
                  </div>
                ))}
              </div>

              {/* Send Box */}
              <form onSubmit={handleSendTrainerMsg} className="flex gap-2">
                <input
                  type="text"
                  value={trainerChatInput}
                  onChange={(e) => setTrainerChatInput(e.target.value)}
                  placeholder="Ask Ananya about your workout or mobility form..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 5: SUBSCRIPTION & BILLING */}
          {activeTab === 'subscription' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-slate-50 to-white dark:from-emerald-950/40 dark:via-[#111726] dark:to-[#0E131E] border border-emerald-200 dark:border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Current Plan</span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">3-Month Habit Builder Plan</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Renews automatically on November 24, 2026 · ₹5,097 / quarter</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white text-xs font-semibold">
                    Change Plan
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-xs shadow-sm">
                    Renew Early
                  </button>
                </div>
              </div>

              {/* Invoices Table */}
              <div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Payment History & Tax Invoices</h5>
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-white/10">
                      <tr>
                        <th className="p-3">Invoice ID</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Plan</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-right">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                      <tr>
                        <td className="p-3 font-mono">INV-2026-089</td>
                        <td className="p-3">24 Aug 2026</td>
                        <td className="p-3">3-Month Habit Builder</td>
                        <td className="p-3 font-mono">₹5,097</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">Paid</span></td>
                        <td className="p-3 text-right"><Download className="w-4 h-4 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white inline cursor-pointer" /></td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono">INV-2026-042</td>
                        <td className="p-3">24 May 2026</td>
                        <td className="p-3">Monthly Freedom Pass</td>
                        <td className="p-3 font-mono">₹1,999</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">Paid</span></td>
                        <td className="p-3 text-right"><Download className="w-4 h-4 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white inline cursor-pointer" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: NOTIFICATIONS */}
          {activeTab === 'notifications' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Recent Notifications</h4>
              {[
                { title: 'Class Starting in 15 Minutes', text: 'Morning Prana Flow with Ananya is about to go live.', time: '15 mins ago', read: false },
                { title: 'Achievement Unlocked: 7-Day Streak!', text: 'Congratulations! You completed 7 consecutive movement days.', time: '2 days ago', read: true },
                { title: 'New On-Demand Workout Added', text: 'Dr. Neha Sen published "PCOS & Hormone Low-Impact Conditioning".', time: '3 days ago', read: true },
              ].map((n, idx) => (
                <div key={idx} className={`p-4 rounded-2xl border flex items-start justify-between gap-4 ${
                  !n.read 
                    ? 'bg-emerald-50 border-emerald-300 dark:bg-emerald-500/10 dark:border-emerald-500/30' 
                    : 'bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/5'
                }`}>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{n.title}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{n.text}</p>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono shrink-0">{n.time}</span>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-[#121724] border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Xanso Member ID: #XN-94281</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white font-semibold transition-colors"
          >
            Close Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};
