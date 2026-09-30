import type { PricingPlan } from '../types';

export const GROUP_PLANS: PricingPlan[] = [
  {
    id: 'plan-group-monthly',
    tier: 'group',
    name: 'Monthly Freedom',
    description: 'Perfect for building initial momentum and exploring all live classes with zero long-term commitment.',
    priceMonthly: 1999,
    priceQuarterly: 5499,
    priceAnnual: 17990,
    features: [
      'Unlimited access to all Live Group Classes (Yoga, Strength, Dance, Mobility, Meditation)',
      'Full On-Demand Video Library (HD recordings & micro-routines)',
      'Community discussion forum & daily accountability streaks',
      'Posture form cues & real-time live instructor interaction',
      'Cancel or pause anytime with 1 click'
    ],
    ctaText: 'Start 7-Day Free Trial'
  },
  {
    id: 'plan-group-quarterly',
    tier: 'group',
    name: '3-Month Habit Builder',
    badge: 'Most Popular',
    description: 'The science-backed sweet spot to rewire metabolic habits, build joint resilience, and track lasting change.',
    priceMonthly: 1699,
    priceQuarterly: 5097,
    priceAnnual: 15990,
    isPopular: true,
    features: [
      'Everything in Monthly Freedom',
      'Comprehensive 8-week structured program enrollment',
      '1 Free 30-min 1:1 Wellness Coaching Consultation',
      'Monthly progress body composition & habit review',
      'Priority live class slot booking reservation',
      'Save 15% compared to month-to-month'
    ],
    ctaText: 'Claim 3-Month Pass'
  },
  {
    id: 'plan-group-annual',
    tier: 'group',
    name: 'Annual Wellness Mastery',
    badge: 'Best Value',
    description: 'For individuals committed to lifelong vitality, energy, and complete lifestyle transformation.',
    priceMonthly: 1299,
    priceQuarterly: 3897,
    priceAnnual: 15588,
    features: [
      'Unlimited 365-day access to all Live & On-Demand classes',
      '4 Free 1:1 personalized coaching & check-in sessions per year',
      'Exclusive invite to seasonal Masterclasses & sound baths',
      'Family sharing add-on (20% off for second family member)',
      'Free Xanso welcome digital kit & habit workbook',
      'Save 35% with full year commitment'
    ],
    ctaText: 'Start Annual Transformation'
  }
];

export const PERSONAL_PLANS: PricingPlan[] = [
  {
    id: 'plan-personal-starter',
    tier: 'personal',
    name: '1:1 Guided Kickstart',
    description: 'Ideal for beginners seeking personalized movement screening and bespoke exercise form coaching.',
    priceMonthly: 5999,
    sessionsIncluded: '8 Dedicated 1:1 Live Sessions / Month (2x weekly)',
    features: [
      '8 Private 1:1 live video sessions with your assigned certified master trainer',
      'Personalized weekly workout calendar tailored to your equipment & schedule',
      'Direct WhatsApp / in-app trainer chat access for daily guidance',
      'Weekly form reviews via video analysis',
      'Complimentary unlimited group live classes included'
    ],
    ctaText: 'Book 1:1 Trainer'
  },
  {
    id: 'plan-personal-transform',
    tier: 'personal',
    name: '1:1 Intensive Transformation',
    badge: 'Coach Favorite',
    description: 'For rapid, measurable progress in weight loss, strength, posture, or hormonal management.',
    priceMonthly: 8999,
    isPopular: true,
    sessionsIncluded: '12 Dedicated 1:1 Live Sessions / Month (3x weekly)',
    features: [
      '12 Private 1:1 live video sessions with your master coach',
      'Custom nutrition lifestyle guidance & macro targets (non-restrictive)',
      'Fortnightly body composition and mobility reassessments',
      'Priority scheduling: your choice of trainer and exact morning/evening hours',
      'Full access to all group classes and on-demand vault'
    ],
    ctaText: 'Apply for Transformation'
  },
  {
    id: 'plan-personal-vip',
    tier: 'personal',
    name: '1:1 Executive Concierge',
    description: 'High-touch concierge wellness tailored for busy executives, frequent travellers, and specialized health needs.',
    priceMonthly: 14999,
    sessionsIncluded: '16 Dedicated 1:1 Sessions + Unlimited Concierge Support',
    features: [
      '16 Private 1:1 live video sessions per month (4x weekly)',
      'Direct priority hotline with Senior Head Trainer & Physiotherapist',
      'Travel-ready hotel gym & bodyweight workout adaptation',
      'Weekly sleep & wearable biometric data review (Apple Watch, Oura, Garmin)',
      'Exclusive 1:1 meditation and breathwork recovery sessions'
    ],
    ctaText: 'Reserve VIP Concierge'
  }
];

export const CORPORATE_PACKAGES = [
  {
    id: 'corp-startup',
    name: 'Startup Vitality',
    teamSize: '10 – 50 Employees',
    idealFor: 'Fast-moving tech startups & boutique agencies',
    inclusions: [
      '2 Live weekly group sessions (Desk Mobility + Energizing Yoga)',
      'Monthly Stress & Burnout Management interactive workshop',
      'Employee on-demand mobile portal access',
      'Quarterly team step & wellness challenge with leaderboard'
    ],
    startingPrice: 'Customized from ₹14,999/month',
    ctaText: 'Request Startup Proposal'
  },
  {
    id: 'corp-growth',
    name: 'Corporate Growth & Resilience',
    teamSize: '50 – 250 Employees',
    idealFor: 'Growing enterprises wanting reduced absenteeism & high morale',
    isPopular: true,
    inclusions: [
      '4 Live weekly sessions (Yoga, Functional Strength, Zumba, Sound Bath)',
      'Bi-weekly webinars with physiotherapists and certified nutritionists',
      'Dedicated corporate success manager and monthly attendance analytics',
      'Customized Slack/Teams integration for session reminders',
      'Subsidized 1:1 personal training vouchers for senior leadership'
    ],
    startingPrice: 'Customized from ₹34,999/month',
    ctaText: 'Request Enterprise Demo'
  },
  {
    id: 'corp-enterprise',
    name: 'Global Enterprise Transformation',
    teamSize: '250+ Employees',
    idealFor: 'Multinational organizations, universities & healthcare networks',
    inclusions: [
      'Unlimited company-wide live classes across global time zones (IST, GMT, EST)',
      'Executive 1:1 wellness mentoring for leadership teams',
      'Comprehensive ergonomic audit and postural screening webinars',
      'Custom branded wellness portal & SSO security integration',
      'Quarterly employee health impact reports & ROI assessments'
    ],
    startingPrice: 'Tailored Enterprise Contract',
    ctaText: 'Schedule Executive Consultation'
  }
];
