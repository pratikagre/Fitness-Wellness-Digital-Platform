import { 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  ArrowUp,
  Globe,
  Share2
} from 'lucide-react';

interface FooterProps {
  onOpenAssessment: () => void;
  onOpenFreeTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAssessment, onOpenFreeTrial }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EEF4F0] dark:bg-[#06090E] border-t border-slate-200 dark:border-white/10 pt-16 pb-12 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1px]">
                <div className="w-full h-full bg-white dark:bg-[#0D121F] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                </div>
              </div>
              <span className="font-extrabold text-2xl text-slate-900 dark:text-white font-display tracking-tight">
                XANSO
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Better Every Day. A premium digital fitness and wellness platform connecting individuals, certified trainers, and organizations through live classes, personal guidance, and sustainable health habits.
            </p>

            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 dark:bg-white/5 dark:text-slate-400 dark:hover:text-emerald-400 dark:hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 dark:bg-white/5 dark:text-slate-400 dark:hover:text-emerald-400 dark:hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 dark:bg-white/5 dark:text-slate-400 dark:hover:text-emerald-400 dark:hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="#" aria-label="X / Twitter" className="p-2 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 dark:bg-white/5 dark:text-slate-400 dark:hover:text-emerald-400 dark:hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Core Services</h4>
            <ul className="space-y-2">
              <li><a href="#live-classes" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Live Yoga & Breathwork</a></li>
              <li><a href="#live-classes" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Functional Strength & Conditioning</a></li>
              <li><a href="#live-classes" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Desk Posture & Mobility</a></li>
              <li><a href="#live-classes" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Zumba & Dance Fitness</a></li>
              <li><a href="#live-classes" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Deep Sleep & Yoga Nidra</a></li>
              <li><a href="#live-classes" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Women's Hormonal Health</a></li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#programs" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Featured Programs</a></li>
              <li><a href="#journey" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Personal 1:1 Training</a></li>
              <li><a href="#corporate" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Corporate Wellness</a></li>
              <li><a href="#trainers" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Meet Master Trainers</a></li>
              <li><a href="#ondemand" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">On-Demand Library</a></li>
              <li><a href="#pricing" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Plans & Pricing</a></li>
              <li><a href="#stories" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Member Transformations</a></li>
              <li><a href="#blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Wellness Journal</a></li>
            </ul>
          </div>

          {/* Quick Actions & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Get Started</h4>
            <div className="space-y-2.5">
              <button
                onClick={onOpenFreeTrial}
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-xs shadow-md transition-colors text-center"
              >
                Claim 7-Day Free Trial
              </button>
              <button
                onClick={onOpenAssessment}
                className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white font-semibold text-xs border border-slate-300 dark:border-white/10 transition-colors text-center shadow-sm"
              >
                Take Free Assessment
              </button>
            </div>
            <div className="pt-2 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
              <p>Email: support@xanso.in</p>
              <p>WhatsApp Concierge: +91 98765 43210</p>
              <p>Bengaluru · Mumbai · Delhi NCR</p>
            </div>
          </div>

        </div>

        {/* Responsible Medical Disclaimer (Compliant with Requirements) */}
        <div className="py-6 border-b border-slate-200 dark:border-white/5 text-[11px] text-slate-600 dark:text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-700 dark:text-slate-400">Medical & Health Disclaimer:</strong> The content, workouts, live classes, and suggestions provided by Xanso are for educational and fitness purposes only and should not be construed as medical diagnosis, prescription, or clinical treatment. Individual physical outcomes depend on personal physiological baselines, nutrition, sleep quality, and adherence. Always consult your personal physician before beginning any new exercise regimen, especially if you have pre-existing cardiovascular, musculoskeletal, or metabolic conditions.
          </p>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} Xanso Technologies Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300">Cookie Settings</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
