import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Users, 
  Calendar, 
  Video, 
  CreditCard, 
  Building2, 
  TrendingUp, 
  Plus, 
  Search, 
  Check, 
  Trash2, 
  Edit,
  DollarSign,
  FileText
} from 'lucide-react';
import { LIVE_CLASSES_DATA } from '../data/liveClassesData';
import { PROGRAMS_DATA } from '../data/programsData';
import { TRAINERS_DATA } from '../data/trainersData';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeSection, setActiveSection] = useState<'metrics' | 'users' | 'classes' | 'corporate' | 'programs'>('metrics');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const mockUsers = [
    { id: 'usr-1', name: 'Priya Sharma', email: 'priya.s@example.com', plan: '3-Month Habit Builder', streak: 12, status: 'Active', joined: '24 Aug 2026' },
    { id: 'usr-2', name: 'Aditya Verma', email: 'aditya.v@techcorp.in', plan: '1:1 Guided Kickstart', streak: 28, status: 'Active', joined: '10 July 2026' },
    { id: 'usr-3', name: 'Meera Rao', email: 'meera.rao@gmail.com', plan: 'Monthly Freedom', streak: 5, status: 'Trial', joined: '26 Sept 2026' },
    { id: 'usr-4', name: 'Kunal Kapoor', email: 'kunal.k@startup.io', plan: 'Corporate Enterprise', streak: 42, status: 'Active', joined: '15 Jan 2026' },
    { id: 'usr-5', name: 'Sunita Nair', email: 'sunita.n@outlook.com', plan: 'Annual Mastery', streak: 91, status: 'Active', joined: '04 Oct 2025' },
  ];

  const mockCorporateLeads = [
    { id: 'lead-1', company: 'Zest Financial Technologies', size: '120 Employees', contact: 'Ramesh K. (VP HR)', email: 'ramesh@zestfin.com', status: 'Demo Scheduled', date: 'Yesterday' },
    { id: 'lead-2', company: 'CloudScale Software', size: '45 Employees', contact: 'Aisha Malik (Founder)', email: 'aisha@cloudscale.co', status: 'Proposal Sent', date: '28 Sept' },
    { id: 'lead-3', company: 'Apex Global Logistics', size: '350 Employees', contact: 'Sanjay Jain (HR Head)', email: 'sanjay.j@apexlogistics.com', status: 'New Lead', date: 'Today' },
  ];

  const filteredUsers = mockUsers.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-6xl bg-[#0B0F17] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-[#101624] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Xanso Platform Master Admin</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  System Live · v2.4
                </span>
              </div>
              <p className="text-xs text-slate-400">Platform Management, Cohorts & Corporate Pipeline</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Admin Navigation Pills */}
        <div className="px-6 bg-[#0D121F] border-b border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none py-2.5">
          {[
            { id: 'metrics', label: 'Platform KPIs & Revenue', icon: TrendingUp },
            { id: 'users', label: 'Registered Members', icon: Users },
            { id: 'classes', label: 'Live Classes & Schedules', icon: Video },
            { id: 'corporate', label: 'Corporate Leads & B2B', icon: Building2 },
            { id: 'programs', label: 'Programs Catalog', icon: FileText },
          ].map((nav) => {
            const Icon = nav.icon;
            const isActive = activeSection === nav.id;
            return (
              <button
                key={nav.id}
                onClick={() => setActiveSection(nav.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{nav.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* SECTION 1: METRICS */}
          {activeSection === 'metrics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-xs text-slate-400 block mb-1">Total Registered Members</span>
                  <p className="text-2xl font-extrabold text-white font-mono">14,820</p>
                  <span className="text-[10px] text-emerald-400 font-semibold">+18% this month</span>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-xs text-slate-400 block mb-1">Active Paid Subscriptions</span>
                  <p className="text-2xl font-extrabold text-emerald-400 font-mono">11,430</p>
                  <span className="text-[10px] text-emerald-400 font-semibold">92% retention rate</span>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-xs text-slate-400 block mb-1">Monthly Gross Revenue</span>
                  <p className="text-2xl font-extrabold text-amber-400 font-mono">₹28,45,000</p>
                  <span className="text-[10px] text-emerald-400 font-semibold">B2C + B2B contracts</span>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-xs text-slate-400 block mb-1">Live Classes Broadcast</span>
                  <p className="text-2xl font-extrabold text-teal-400 font-mono">124 This Wk</p>
                  <span className="text-[10px] text-slate-400 font-semibold">6 Master Instructors</span>
                </div>
              </div>

              {/* System Health */}
              <div className="p-5 rounded-2xl bg-[#111726] border border-white/5">
                <h4 className="text-sm font-bold text-white mb-3">Live Streaming Infrastructure Status</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between">
                    <span className="text-slate-400">WebRTC Video Latency</span>
                    <span className="text-emerald-400 font-mono font-bold">140 ms (Ultra-low)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between">
                    <span className="text-slate-400">Stream Availability</span>
                    <span className="text-emerald-400 font-mono font-bold">99.98%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between">
                    <span className="text-slate-400">Server CDN Bandwidth</span>
                    <span className="text-teal-400 font-mono font-bold">4.2 Gbps peak</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: USERS */}
          {activeSection === 'users' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name or email..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-purple-400"
                  />
                </div>
                <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 self-start sm:self-auto">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Member</span>
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-slate-400 border-b border-white/10">
                    <tr>
                      <th className="p-3.5">Name</th>
                      <th className="p-3.5">Email</th>
                      <th className="p-3.5">Active Plan</th>
                      <th className="p-3.5">Streak</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {filteredUsers.map((u) => (
                      <tr key={u.id} className="hover:bg-white/5">
                        <td className="p-3.5 font-bold text-white">{u.name}</td>
                        <td className="p-3.5 font-mono text-slate-400">{u.email}</td>
                        <td className="p-3.5">{u.plan}</td>
                        <td className="p-3.5 font-mono text-amber-400 font-bold">{u.streak} days</td>
                        <td className="p-3.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            u.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                          }`}>
                            {u.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-400">{u.joined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SECTION 3: CLASSES */}
          {activeSection === 'classes' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">Daily Live Class Timetable</h4>
                <button className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center gap-1.5">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Schedule New Live Class</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LIVE_CLASSES_DATA.map((cls) => (
                  <div key={cls.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                        {cls.category} · {cls.timeString}
                      </span>
                      <h5 className="text-sm font-bold text-white mb-1">{cls.title}</h5>
                      <p className="text-xs text-slate-400">Instructor: {cls.trainerName} · {cls.durationMin} mins</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 4: CORPORATE LEADS */}
          {activeSection === 'corporate' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">Inbound Corporate Wellness Pipeline</h4>
              <div className="rounded-2xl border border-white/10 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-slate-400 border-b border-white/10">
                    <tr>
                      <th className="p-3.5">Company</th>
                      <th className="p-3.5">Size</th>
                      <th className="p-3.5">Contact Person</th>
                      <th className="p-3.5">Email</th>
                      <th className="p-3.5">Pipeline Stage</th>
                      <th className="p-3.5">Received</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {mockCorporateLeads.map((c) => (
                      <tr key={c.id} className="hover:bg-white/5">
                        <td className="p-3.5 font-bold text-white">{c.company}</td>
                        <td className="p-3.5 font-mono text-cyan-400">{c.size}</td>
                        <td className="p-3.5">{c.contact}</td>
                        <td className="p-3.5 font-mono text-slate-400">{c.email}</td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold text-[10px]">
                            {c.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-400">{c.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SECTION 5: PROGRAMS */}
          {activeSection === 'programs' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">Active Cohort Programs</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROGRAMS_DATA.map((prog) => (
                  <div key={prog.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                        {prog.durationWeeks} Weeks · ₹{prog.priceMonthly}/mo
                      </span>
                      <h5 className="text-sm font-bold text-white mb-1">{prog.title}</h5>
                      <p className="text-xs text-slate-400">Lead: {prog.trainerName} · {prog.enrolledMembers} Enrolled</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#101624] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Administrator Access (Superuser)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors"
          >
            Exit Admin Panel
          </button>
        </div>

      </div>
    </div>
  );
};
