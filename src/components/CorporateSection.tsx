import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  Calendar,
  Send,
  Zap,
  Clock
} from 'lucide-react';
import { CORPORATE_PACKAGES } from '../data/plansData';

interface CorporateSectionProps {
  onRequestDemo: (details: { companyName: string; teamSize: string; email: string }) => void;
}

export const CorporateSection: React.FC<CorporateSectionProps> = ({ onRequestDemo }) => {
  const [teamSize, setTeamSize] = useState<number>(75);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([
    'Desk Mobility & Posture',
    'Stress & Burnout Recovery',
    'Team Step Challenges'
  ]);
  const [companyName, setCompanyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const orgTypes = [
    { title: 'Tech Startups', size: '10–50 members', benefit: 'Prevent founder & engineer burnout with midday mental breaks' },
    { title: 'SMEs & Agencies', size: '50–200 members', benefit: 'Elevate team camaraderie and reduce sick leave absenteeism' },
    { title: 'Large Enterprises', size: '200–5,000+ members', benefit: 'Custom branded portals, SSO integration and multi-tz classes' },
    { title: 'Educational Institutions', size: 'Faculty & staff', benefit: 'Dedicated educator stress relief and postural restoration' },
  ];

  const corporateTracks = [
    'Desk Mobility & Posture',
    'Morning Energizing Yoga',
    'Functional Cardio & Zumba',
    'Stress & Burnout Recovery',
    'Sound Bath & Deep Nidra',
    'Team Step Challenges'
  ];

  const toggleTrack = (track: string) => {
    if (selectedPrograms.includes(track)) {
      if (selectedPrograms.length > 1) {
        setSelectedPrograms(selectedPrograms.filter(t => t !== track));
      }
    } else {
      setSelectedPrograms([...selectedPrograms, track]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !workEmail) return;
    onRequestDemo({
      companyName,
      teamSize: `${teamSize} Employees`,
      email: workEmail
    });
    setSubmitted(true);
  };

  return (
    <section id="corporate" className="py-24 bg-[#0A0D14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            15. Organizational Health
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mt-4 mb-4">
            Corporate Wellness Built for High Performance
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Protect your most valuable asset: your people. We bring certified live classes, desk ergonomics, and mental decompression directly to your teams.
          </p>
        </div>

        {/* Organizations We Serve Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {orgTypes.map((org, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0F1420] border border-white/5 hover:border-cyan-500/30 transition-all group">
              <span className="text-[11px] font-mono text-cyan-400 font-semibold block mb-2">{org.size}</span>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {org.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {org.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Corporate Package Configurator & Demo Form */}
        <div className="rounded-3xl bg-[#0E131E] border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Interactive Team Configurator (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Interactive Team Estimator
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  Configure Your Corporate Wellness Program
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Adjust team size and choose required disciplines to simulate your organization's weekly footprint.
                </p>
              </div>

              {/* Slider for Team Size */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300 font-medium">Estimated Workforce Size</span>
                  <span className="font-extrabold text-cyan-400 text-base font-mono">
                    {teamSize} Employees
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>10 (Startup)</span>
                  <span>100 (Mid-size)</span>
                  <span>250</span>
                  <span>500+ (Enterprise)</span>
                </div>
              </div>

              {/* Programs Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                  Select Corporate Tracks Required:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {corporateTracks.map((track) => {
                    const isChecked = selectedPrograms.includes(track);
                    return (
                      <button
                        key={track}
                        type="button"
                        onClick={() => toggleTrack(track)}
                        className={`p-3 rounded-xl text-xs font-semibold border text-left flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-200'
                            : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <span>{track}</span>
                        {isChecked && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Impact Metrics Summary */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 text-center">
                  <span className="text-[10px] text-slate-400 uppercase block">Weekly Sessions</span>
                  <span className="text-base font-bold text-white">
                    {selectedPrograms.length >= 4 ? '4 Live / Wk' : '2 Live / Wk'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 text-center">
                  <span className="text-[10px] text-slate-400 uppercase block">HR Dashboard</span>
                  <span className="text-base font-bold text-emerald-400">Included</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 text-center">
                  <span className="text-[10px] text-slate-400 uppercase block">Custom Challenges</span>
                  <span className="text-base font-bold text-cyan-400">Monthly</span>
                </div>
              </div>

            </div>

            {/* Right: Request Corporate Demo Form (5 Cols) */}
            <div className="lg:col-span-5 bg-[#121826] p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                      Direct Partner Inquiry
                    </span>
                    <h4 className="text-lg font-bold text-white font-display mt-0.5">
                      Request Corporate Demo
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Our corporate team will prepare a custom proposal and trial session for your HR leadership.
                    </p>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">Company / Institution Name</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Technologies"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">Your Full Name & Designation</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Priya Sharma, HR Director"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">Official Work Email</label>
                    <input
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="priya@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Request Free Corporate Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-slate-500 text-center mt-2">
                      Includes 1 complimentary live group class for your full team to experience.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Proposal Request Received</h4>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto">
                    Thank you, {contactName}! Our enterprise partnership team will email the tailored proposal for <span className="text-cyan-400 font-semibold">{companyName}</span> ({teamSize} employees) within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-cyan-400 hover:underline pt-2 inline-block"
                  >
                    Submit another organization request
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
