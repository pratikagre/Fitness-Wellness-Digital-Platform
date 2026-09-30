import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mic, 
  MicOff, 
  Video as VideoIcon, 
  VideoOff, 
  MessageSquare, 
  Heart, 
  Flame, 
  Users, 
  Send, 
  Volume2, 
  Maximize2,
  Sparkles,
  Smile,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import type { LiveClass } from '../types';

interface LiveClassRoomModalProps {
  liveClass: LiveClass | null;
  onClose: () => void;
}

export const LiveClassRoomModal: React.FC<LiveClassRoomModalProps> = ({
  liveClass,
  onClose
}) => {
  const [isMicOn, setIsMicOn] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: string; text: string; time: string; isCoach?: boolean }>>([
    { sender: 'Ananya (Coach)', text: 'Welcome everyone! Grab your mat and a water bottle. We start in 1 minute.', time: '07:00 AM', isCoach: true },
    { sender: 'Rahul M.', text: 'Good morning from Mumbai! Ready for the flow 🔥', time: '07:01 AM' },
    { sender: 'Deepa V.', text: 'Present! Day 12 streak today 🧘‍♀️', time: '07:01 AM' },
    { sender: 'Siddharth', text: 'Stiff shoulders today, looking forward to the upper spine work.', time: '07:02 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [activeCalories, setActiveCalories] = useState(145);
  const [activeHeartRate, setActiveHeartRate] = useState(128);
  const [attendeeCount, setAttendeeCount] = useState(342);

  useEffect(() => {
    if (!liveClass) return;
    const interval = setInterval(() => {
      setActiveCalories((prev) => prev + 1);
      setActiveHeartRate(125 + Math.floor(Math.random() * 12));
    }, 4000);
    return () => clearInterval(interval);
  }, [liveClass]);

  if (!liveClass) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setChatMessages([
      ...chatMessages,
      {
        sender: 'You',
        text: newMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setNewMessage('');
  };

  const handleSendReaction = (emoji: string) => {
    setChatMessages([
      ...chatMessages,
      {
        sender: 'You',
        text: emoji,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/95 flex flex-col animate-in fade-in duration-200">
      
      {/* Top Header Bar */}
      <div className="px-6 py-3.5 bg-[#0B0F17] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>LIVE INTERACTIVE STUDIO</span>
          </div>
          <span className="text-white font-bold text-sm hidden sm:inline">
            {liveClass.title}
          </span>
          <span className="text-xs text-slate-400 hidden md:inline">
            • Led by {liveClass.trainerName}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>{attendeeCount} Members in Room</span>
          </div>

          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <span>Leave Class</span>
          </button>
        </div>
      </div>

      {/* Main Studio Split */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        
        {/* Main Video Stream Container (9 Cols) */}
        <div className="lg:col-span-9 bg-black relative flex flex-col justify-between overflow-hidden">
          
          {/* Simulated HD Live Stream */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80" 
              alt={liveClass.trainerName} 
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </div>

          {/* Top Overlays: Heart Rate, Calories, Trainer Badge */}
          <div className="relative z-10 p-6 flex items-start justify-between">
            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md p-2 rounded-2xl border border-white/10">
              <img 
                src={liveClass.trainerPhoto} 
                alt={liveClass.trainerName} 
                className="w-10 h-10 rounded-xl object-cover border border-emerald-400"
              />
              <div>
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  {liveClass.trainerName}
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">Coach</span>
                </p>
                <p className="text-[10px] text-slate-300">Real-time Form Cues Active</p>
              </div>
            </div>

            {/* Live Biometrics telemetry */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
                <span className="text-xs font-bold text-white font-mono">{activeHeartRate} bpm</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-white font-mono">{activeCalories} kcal</span>
              </div>
            </div>
          </div>

          {/* Self-Camera Small Picture-in-Picture Preview */}
          <div className="absolute bottom-24 right-6 w-36 h-28 sm:w-44 sm:h-32 rounded-2xl bg-[#121722]/90 border-2 border-emerald-500/40 shadow-2xl overflow-hidden z-10 flex flex-col justify-between p-2">
            <div className="flex items-center justify-between text-[10px] text-slate-300 bg-black/60 px-1.5 py-0.5 rounded">
              <span>You (Camera)</span>
              <span className={`w-1.5 h-1.5 rounded-full ${isVideoOn ? 'bg-emerald-400' : 'bg-red-400'}`} />
            </div>
            {!isVideoOn ? (
              <div className="flex-1 flex items-center justify-center text-xs text-slate-400 flex-col gap-1">
                <VideoOff className="w-5 h-5 text-slate-500" />
                <span className="text-[10px]">Camera Off</span>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-slate-800 text-xs text-emerald-400 font-semibold">
                Camera Live
              </div>
            )}
            <div className="text-[9px] text-slate-400 text-center">
              Visible only to Coach
            </div>
          </div>

          {/* Coach Prompt Form Cue Banner */}
          <div className="relative z-10 mx-6 mb-20 p-3.5 rounded-2xl bg-black/75 backdrop-blur-md border border-emerald-500/30 max-w-xl">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-200">
                <span className="font-bold text-emerald-400">Coach Guidance:</span> "Ground all four corners of your feet, inhale into the belly, and exhale as you transition forward."
              </p>
            </div>
          </div>

          {/* Studio Control Dock at bottom of video */}
          <div className="relative z-10 p-4 bg-[#0B0F17]/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMicOn(!isMicOn)}
                className={`p-3 rounded-xl border transition-all ${
                  isMicOn ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                }`}
                title={isMicOn ? 'Mute Microphone' : 'Unmute Microphone'}
              >
                {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-3 rounded-xl border transition-all ${
                  isVideoOn ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                }`}
                title={isVideoOn ? 'Turn Camera Off' : 'Turn Camera On for Coach Form Feedback'}
              >
                {isVideoOn ? <VideoIcon className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </button>
            </div>

            {/* Quick reaction emojis */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {['🔥', '❤️', '🧘', '👏', '💪'].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => handleSendReaction(emoji)}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-lg hover:scale-110 active:scale-95 transition-transform"
                >
                  {emoji}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full HD 1080p Ultra-Low Latency</span>
            </div>
          </div>

        </div>

        {/* Studio Live Chat & Member Feed (3 Cols) */}
        <div className="lg:col-span-3 bg-[#0E131E] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between h-[350px] lg:h-auto">
          
          {/* Chat Header */}
          <div className="p-4 bg-[#121724] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Live Class Chat</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">Live</span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {chatMessages.map((msg, i) => (
              <div 
                key={i} 
                className={`p-2.5 rounded-xl text-xs leading-relaxed ${
                  msg.isCoach 
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-200' 
                    : msg.sender === 'You' 
                      ? 'bg-white/10 border border-white/10 text-white ml-4' 
                      : 'bg-white/5 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1 text-[10px] text-slate-400">
                  <span className={msg.isCoach ? 'font-bold text-emerald-400' : 'font-semibold text-slate-300'}>
                    {msg.sender}
                  </span>
                  <span>{msg.time}</span>
                </div>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>

          {/* Message Input Box */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#121724] border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Cheer on class or ask coach..."
              className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
};
