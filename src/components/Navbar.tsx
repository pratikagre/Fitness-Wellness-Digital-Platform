import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  User, 
  ShieldCheck, 
  Flame, 
  Play, 
  Calendar, 
  Award,
  ChevronRight,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  onOpenAssessment: () => void;
  onOpenFreeTrial: () => void;
  onOpenDashboard: () => void;
  onOpenAdmin: () => void;
  onSelectProgram?: (programId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAssessment,
  onOpenFreeTrial,
  onOpenDashboard,
  onOpenAdmin
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Personal Training', href: '#journey' },
    { name: 'Corporate Wellness', href: '#corporate' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Live Classes', href: '#live-classes' },
    { name: 'On-Demand', href: '#ondemand' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Success Stories', href: '#stories' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0D14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0D121F] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-white font-display">
                  XANSO
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wider">
                  WELLNESS
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase -mt-0.5">
                Digital Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-[13px] font-medium text-slate-300">
            {navLinks.slice(0, 7).map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="relative group">
              <button className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1">
                More
                <span className="text-slate-400 text-xs">▾</span>
              </button>
              <div className="absolute top-full left-0 mt-1 w-44 rounded-xl bg-[#121722] border border-white/10 shadow-2xl p-2 hidden group-hover:block backdrop-blur-xl">
                {navLinks.slice(7).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-white/5"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Assessment trigger */}
            <button
              onClick={onOpenAssessment}
              className="text-xs font-semibold px-3 py-2 rounded-lg text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-all flex items-center gap-1.5"
              title="8-Question Free Wellness Assessment"
            >
              <Flame className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free Assessment</span>
            </button>

            {/* Member Dashboard */}
            <button
              onClick={onOpenDashboard}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1.5"
            >
              <User className="w-4 h-4 text-slate-400" />
              <span>Dashboard</span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenFreeTrial}
              className="text-xs font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
            >
              <span>Start Free Trial</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>

            {/* Admin shortcut badge */}
            <button 
              onClick={onOpenAdmin}
              title="Open Admin Management Panel"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenFreeTrial}
              className="text-xs font-bold px-3 py-2 rounded-lg bg-emerald-500 text-slate-950"
            >
              Free Trial
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#0D121F]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="w-full text-left py-2.5 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-xs flex items-center gap-2"
            >
              <Flame className="w-4 h-4" />
              <span>Assessment</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDashboard();
              }}
              className="w-full text-left py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-xs flex items-center gap-2"
            >
              <User className="w-4 h-4 text-emerald-400" />
              <span>Dashboard</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenFreeTrial();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-lg text-center"
            >
              Start 7-Day Free Trial
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-2 text-xs text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Management Portal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
