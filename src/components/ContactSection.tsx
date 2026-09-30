import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Question', message: '' });
  const [isSent, setIsSent] = useState(false);

  const faqs = [
    {
      q: 'Do I need expensive equipment to participate in live classes?',
      a: 'No. The majority of our classes (Sunrise Yoga, Desk Worker Mobility, Zumba Cardio, and Restorative Nidra) require only comfortable clothes and a simple mat or carpet. Functional strength sessions can be completed with a single pair of light dumbbells or common household water bottles.'
    },
    {
      q: 'Do I have to keep my camera on during live group classes?',
      a: 'Camera usage is completely optional. If you keep your camera on, our master trainers can give you real-time posture corrections and form feedback. If you prefer privacy, you can keep your camera turned off and still follow the two-way audio cues and live instructor demonstration.'
    },
    {
      q: 'What happens if I miss a scheduled live class?',
      a: 'All live classes are automatically recorded in high-definition and uploaded to the On-Demand Member Vault within 2 hours. You can play, pause, or repeat any session at any hour of the day or night.'
    },
    {
      q: 'How does the 7-day free trial work? Will I be charged?',
      a: 'Our 7-day trial provides 100% unrestricted access to all live classes and the on-demand video vault. You do not need to enter credit card details to activate your trial pass.'
    },
    {
      q: 'Can I switch between trainers or cancel anytime?',
      a: 'Yes. You have total autonomy. In our group plans, you can attend classes led by any trainer on the timetable. For 1:1 plans, you can request a coach rematch or pause your subscription with one click from your Member Dashboard.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAF9] dark:bg-[#080B12] relative border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            Frequently Asked Questions & Support
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display mt-4 mb-4">
            We’re Here to Guide You
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have questions about beginning your fitness journey or configuring corporate sessions? Our wellness advisors are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ Accordion (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Common Questions</span>
            </h3>

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-[#0F1420] border border-slate-200 dark:border-white/5 overflow-hidden transition-colors shadow-sm dark:shadow-none"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-white/5 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Concierge support pill */}
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Need an immediate answer?</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Our wellness concierge is available via WhatsApp & Live Chat.</p>
                </div>
              </div>
              <a
                href="https://wa.me/919876543210?text=Hello%20Xanso%20Team!%20I%20have%20a%20question%20about%20your%20programs."
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-xs transition-colors shrink-0 shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Message Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#0E131E] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-xl flex flex-col justify-between">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Get in Touch
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mt-0.5">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Typically answered within 1–2 hours during business hours (06:00 AM – 10:00 PM IST).
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Inquiry Topic</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#141A28] border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="General Question">General Platform Question</option>
                    <option value="Program Recommendation">Program & Schedule Matching</option>
                    <option value="1:1 Personal Training">1:1 Coach Consultation</option>
                    <option value="Corporate Wellness">Corporate Team Sessions</option>
                    <option value="Billing & Subscription">Subscription & Billing</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you're looking for or how we can help..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white dark:text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Dispatched!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xs mx-auto">
                  Thank you, {formData.name}. Our wellness advisory team will reply to <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            )}

            <div className="pt-6 mt-4 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                support@xanso.in
              </span>
              <span>Available 7 Days / Wk</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
