import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  Zap,
  Users,
  UserCheck,
  Building2
} from 'lucide-react';
import { GROUP_PLANS, PERSONAL_PLANS, CORPORATE_PACKAGES } from '../data/plansData';

interface PricingSectionProps {
  onStartFreeTrial: () => void;
  onRequestCorporateDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onStartFreeTrial,
  onRequestCorporateDemo
}) => {
  const [activeTier, setActiveTier] = useState<'group' | 'personal' | 'corporate'>('group');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'annual'>('quarterly');

  return (
    <section id="pricing" className="py-24 bg-[#080B12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            12. Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mt-4 mb-4">
            Invest in Your Long-Term Vitality
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Simple, honest pricing with zero hidden charges. All plans begin with a 7-day free trial or single class trial pass.
          </p>
        </div>

        {/* Tier Switcher (GROUP | PERSONAL | CORPORATE) */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#121826] p-1.5 rounded-2xl border border-white/10 flex items-center gap-1">
            <button
              onClick={() => setActiveTier('group')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTier === 'group'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>GROUP CLASSES</span>
            </button>

            <button
              onClick={() => setActiveTier('personal')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTier === 'personal'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>1:1 PERSONAL</span>
            </button>

            <button
              onClick={() => setActiveTier('corporate')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTier === 'corporate'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>CORPORATE</span>
            </button>
          </div>
        </div>

        {/* If GROUP is active, show billing cycle selector (Monthly / 3 Months / Annual) */}
        {activeTier === 'group' && (
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  billingCycle === 'monthly' ? 'bg-white/15 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('quarterly')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  billingCycle === 'quarterly' ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>3 Months</span>
                <span className="text-[10px] px-1 rounded bg-emerald-500 text-slate-950 font-extrabold">Save 15%</span>
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  billingCycle === 'annual' ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual</span>
                <span className="text-[10px] px-1 rounded bg-emerald-500 text-slate-950 font-extrabold">Save 35%</span>
              </button>
            </div>
          </div>
        )}

        {/* Content depending on Active Tier */}

        {/* 1. GROUP PLANS */}
        {activeTier === 'group' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {GROUP_PLANS.map((plan) => {
              const displayPrice = billingCycle === 'annual' 
                ? plan.priceAnnual 
                : billingCycle === 'quarterly' 
                  ? plan.priceQuarterly 
                  : plan.priceMonthly;

              const perMonthEquivalent = billingCycle === 'annual'
                ? Math.round(plan.priceAnnual! / 12)
                : billingCycle === 'quarterly'
                  ? Math.round(plan.priceQuarterly! / 3)
                  : plan.priceMonthly;

              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative shadow-xl ${
                    plan.isPopular
                      ? 'bg-gradient-to-b from-[#141E2D] via-[#0F1624] to-[#0D121F] border-emerald-500/50 shadow-emerald-500/10'
                      : 'bg-[#0E131E] border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md">
                      {plan.badge}
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-xs text-slate-400 min-h-[36px] mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                          ₹{displayPrice?.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-400">
                          {billingCycle === 'annual' ? '/ year' : billingCycle === 'quarterly' ? '/ 3 mos' : '/ month'}
                        </span>
                      </div>
                      {billingCycle !== 'monthly' && (
                        <p className="text-[11px] text-emerald-400 font-semibold mt-1">
                          Equals approx. ₹{perMonthEquivalent}/month
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Inclusions:</p>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={onStartFreeTrial}
                      className={`w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                        plan.isPopular
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25'
                          : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-slate-500 text-center mt-2.5">
                      Includes 7 days free. Cancel anytime in 1 click.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. PERSONAL 1:1 PLANS */}
        {activeTier === 'personal' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PERSONAL_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative shadow-xl ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-[#161B26] via-[#101520] to-[#0D121F] border-amber-500/40 shadow-amber-500/10'
                    : 'bg-[#0E131E] border-white/10 hover:border-white/20'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[36px] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                        ₹{plan.priceMonthly.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400">/ month</span>
                    </div>
                    {plan.sessionsIncluded && (
                      <p className="text-xs text-amber-400 font-semibold mt-1">
                        {plan.sessionsIncluded}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">What You Get:</p>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={onStartFreeTrial}
                    className="w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-2.5">
                    Includes initial 20-minute movement screening call.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. CORPORATE PACKAGES */}
        {activeTier === 'corporate' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CORPORATE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-3xl p-8 bg-[#0E131E] border border-cyan-500/20 hover:border-cyan-500/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl relative"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    {pkg.teamSize}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mb-6">
                    {pkg.idealFor}
                  </p>

                  <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-xs text-slate-400 block mb-0.5">Indicative Investment</span>
                    <span className="text-lg sm:text-xl font-bold text-white font-mono">
                      {pkg.startingPrice}
                    </span>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Deliverables:</p>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={onRequestCorporateDemo}
                    className="w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-2.5">
                    Customized invoicing & GST compliance included.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Free Trial Callout Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Hesitant about committing? Experience Xanso risk-free.
              </h4>
              <p className="text-xs text-slate-400">
                Choose between a Single Free Live Class Pass or a 7-Day Unlimited Free Access Pass.
              </p>
            </div>
          </div>
          <button
            onClick={onStartFreeTrial}
            className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shrink-0 transition-colors shadow-md"
          >
            Claim Free Trial Now →
          </button>
        </div>

      </div>
    </section>
  );
};
