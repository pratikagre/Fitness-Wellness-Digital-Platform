import type { Program } from '../types';

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'prog-sunrise-vinyasa',
    title: 'Sunrise Vinyasa & Core Alignment',
    category: 'yoga',
    level: 'All Levels',
    durationWeeks: 6,
    sessionsPerWeek: 5,
    sessionDurationMin: 45,
    trainerId: 'trainer-1',
    trainerName: 'Ananya Sharma',
    trainerPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    schedule: 'Mon–Fri · 07:00 AM – 07:45 AM IST',
    priceMonthly: 1999,
    shortDescription: 'Awaken your body with mindful dynamic flows, spinal mobilization, and energizing pranayama breathwork.',
    fullDescription: 'A premier morning practice engineered to cultivate metabolic awakening, core stability, and mental clarity before your workday begins. Built on progressive asanas and diaphragmatic breath synchronization.',
    highlights: [
      'Gentle spinal warmups transitioning to dynamic standing flows',
      'Daily 10-minute targeted core and pelvic stabilization',
      'Closing 5-minute cooling breathwork to center mental focus',
      'Live posture corrections and beginner regression variations'
    ],
    targetGoals: ['get-fit', 'improve-flexibility', 'reduce-stress', 'overall-wellness'],
    enrolledMembers: 1420,
    curriculum: [
      { week: 1, focus: 'Breath & Spinal Decompression', details: 'Foundational alignment, cat-cow kinetic flows, and diaphragmatic breathing rhythms.' },
      { week: 2, focus: 'Hip & Hamstring Liberation', details: 'Low lunge flows, warrior transitions, and releasing sedentary pelvic tension.' },
      { week: 3, focus: 'Dynamic Core & Balance', details: 'Boat pose variations, plank holds, and single-leg balance stability.' },
      { week: 4, focus: 'Heart Openers & Thoracic Mobility', details: 'Cobra progressions, bridge flows, and freeing round-shoulder desk posture.' },
      { week: 5, focus: 'Flow Synchronization & Power', details: 'Full Sun Salutation variations with fluid breath cues and endurance building.' },
      { week: 6, focus: 'Integration & Sustainable Autonomy', details: 'Complete 45-minute independent flow confidence and evening restorative techniques.' }
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    badge: 'Most Popular'
  },
  {
    id: 'prog-functional-strength-reset',
    title: 'Metabolic Strength & Lean Muscle Reset',
    category: 'strength',
    level: 'Intermediate',
    durationWeeks: 8,
    sessionsPerWeek: 4,
    sessionDurationMin: 50,
    trainerId: 'trainer-2',
    trainerName: 'Vikram Rajput',
    trainerPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    schedule: 'Mon, Tue, Thu, Fri · 06:30 AM & 06:30 PM IST',
    priceMonthly: 2499,
    shortDescription: 'High-yield compound bodyweight and dumbbell conditioning designed to torch body fat and build functional strength.',
    fullDescription: 'Designed for working adults seeking real lean muscle and bone density without beating up their joints. Uses RPE (Rate of Perceived Exertion) and structured tempo training for maximum metabolic rate elevation.',
    highlights: [
      'Compound lower/upper split using dumbbells or resistance bands',
      'Metabolic conditioning intervals (HIIT + steady-state hybrid)',
      'Joint warm-up protocol and cool-down fascia recovery',
      'Personal progress log and weekly load progression reviews'
    ],
    targetGoals: ['get-fit', 'manage-weight', 'build-strength', 'overall-wellness'],
    enrolledMembers: 980,
    curriculum: [
      { week: 1, focus: 'Movement Baselines & Movement Screening', details: 'Hinges, squats, push, pull mechanics assessment and joint prep.' },
      { week: 2, focus: 'Eccentric Tempo & Core Bracing', details: 'Slow lowering phases to build tendon strength and core rigidity.' },
      { week: 3, focus: 'Lower Body Power & Glute Engagement', details: 'Deadlift variations, Bulgarian split squats, and posterior chain activation.' },
      { week: 4, focus: 'Upper Body Hypertrophy & Pull Mechanics', details: 'Rows, overhead presses, posture strengthening for desk workers.' },
      { week: 5, focus: 'Metabolic Density & Circuit Pacing', details: 'Decreasing rest intervals to elevate VO2 max and caloric expenditure.' },
      { week: 6, focus: 'Full Body Functional Complexes', details: 'Multi-joint combinations testing systemic endurance and balance.' },
      { week: 7, focus: 'Peak Capacity & Strength Tests', details: 'Measuring benchmark repetition gains and body composition markers.' },
      { week: 8, focus: 'Deload, Recovery & Long-Term Programming', details: 'Consolidating gains, joint longevity maintenance, and ongoing routine.' }
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    badge: 'High Impact'
  },
  {
    id: 'prog-deep-sleep-nidra',
    title: 'Nervous System Reset & Deep Sleep Nidra',
    category: 'meditation',
    level: 'All Levels',
    durationWeeks: 4,
    sessionsPerWeek: 5,
    sessionDurationMin: 35,
    trainerId: 'trainer-5',
    trainerName: 'Kavita Joshi',
    trainerPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    schedule: 'Mon–Fri · 09:30 PM – 10:05 PM IST',
    priceMonthly: 1499,
    shortDescription: 'Down-regulate high cortisol, silence busy evening thoughts, and prepare your brain for 7+ hours of restorative sleep.',
    fullDescription: 'Guided live bedtime sessions incorporating 4-7-8 parasympathetic respiration, progressive somatic relaxation, and classical Yoga Nidra. Designed to dissolve chronic workday stress and mental churn.',
    highlights: [
      'Clinically guided 35-minute evening live sessions right from your bed',
      'Immediate vagal tone stimulation for anxiety deceleration',
      'Zero screen staring required: audio-centric calming guidance',
      'Weekly sleep hygiene checklists and circadian rhythm tuning'
    ],
    targetGoals: ['reduce-stress', 'improve-sleep', 'overall-wellness'],
    enrolledMembers: 1850,
    curriculum: [
      { week: 1, focus: 'Cortisol Deceleration & Evening Transition', details: 'Disconnecting from work stimuli, 4-7-8 breathwork, and muscle release.' },
      { week: 2, focus: 'Somatic Body Scan & Physical Release', details: 'Systematic mental walkthrough of tension zones from crown to toes.' },
      { week: 3, focus: 'Yoga Nidra & Delta Wave Facilitation', details: 'Theta and Delta brainwave induction for deep subconscious rest.' },
      { week: 4, focus: 'Circadian Architecture & Lifelong Habits', details: 'Light exposure timing, sleep sanctuary design, and lasting calmness.' }
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    badge: 'Top Rated'
  },
  {
    id: 'prog-womens-hormonal-vitality',
    title: 'Hormonal Harmony & Core Restoration',
    category: 'womens-wellness',
    level: 'Beginner',
    durationWeeks: 6,
    sessionsPerWeek: 4,
    sessionDurationMin: 40,
    trainerId: 'trainer-3',
    trainerName: 'Dr. Neha Sen',
    trainerPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    schedule: 'Mon, Wed, Fri, Sat · 08:30 AM & 05:00 PM IST',
    priceMonthly: 2199,
    shortDescription: 'Physiotherapist-guided movement engineered for PCOS, thyroid health, pelvic floor recovery, and steady energy.',
    fullDescription: 'Traditional fitness often overlooks women’s hormonal cycles. This medically informed program uses low-cortisol resistance, pelvic floor rehabilitation, and insulin-sensitizing movement tailored for women.',
    highlights: [
      'Cortisol-sparing strength circuits that avoid exhaustion',
      'Specialized pelvic floor and diastasis recti safe protocols',
      'Cycle-synced workout advice and metabolic stability nutrition guides',
      'Private weekly Q&A support for symptom tracking'
    ],
    targetGoals: ['manage-weight', 'reduce-stress', 'overall-wellness', 'improve-flexibility'],
    enrolledMembers: 840,
    curriculum: [
      { week: 1, focus: 'Pelvic Floor & Transverse Abdominis Connection', details: 'Gentle core re-education, ribcage expansion, and posture reset.' },
      { week: 2, focus: 'Low-Cortisol Strength Foundations', details: 'Bodyweight squats, supported rows, and stabilizing glute bridges.' },
      { week: 3, focus: 'Insulin-Sensitizing Functional Circuits', details: 'Full-body resistance flows that aid glucose uptake without adrenal stress.' },
      { week: 4, focus: 'Spinal Alignment & Joint Decompression', details: 'Releasing lower back load and opening tight hip flexors.' },
      { week: 5, focus: 'Cycle-Conscious Training Adjustments', details: 'Adapting volume and rest between follicular and luteal phases.' },
      { week: 6, focus: 'Long-Term Hormonal Resilience Protocol', details: 'Lifelong movement schedule for energy, bone health, and mood stability.' }
    ],
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80',
    badge: 'Specialized'
  },
  {
    id: 'prog-desk-worker-mobility',
    title: 'Desk Worker Posture & Joint Freedom',
    category: 'mobility',
    level: 'All Levels',
    durationWeeks: 4,
    sessionsPerWeek: 5,
    sessionDurationMin: 30,
    trainerId: 'trainer-6',
    trainerName: 'Arjun Nambiar',
    trainerPhoto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    schedule: 'Mon–Fri · 01:15 PM & 06:00 PM IST',
    priceMonthly: 1699,
    shortDescription: 'Undo forward head posture, tight hip flexors, and lower back stiffness with 30-minute daily joint lubrication flows.',
    fullDescription: 'Created specifically for software engineers, finance analysts, and remote workers seated 8+ hours daily. Targets thoracic rotation, glute activation, cervical decompression, and hip capsule mobility.',
    highlights: [
      'Express 30-minute sessions that fit directly into lunch breaks or post-work',
      'No sweat workout option—can be done in comfortable work attire',
      'Targeted protocols for mouse wrist, "tech neck", and lumbar fatigue',
      'Take-home 3-minute micro-breaks for daily workday productivity'
    ],
    targetGoals: ['improve-flexibility', 'reduce-stress', 'overall-wellness'],
    enrolledMembers: 1120,
    curriculum: [
      { week: 1, focus: 'Cervical Spine & Shoulder Girdle Freedom', details: 'Neck retractions, chin tucks, scapular clocks, and thoracic extension.' },
      { week: 2, focus: 'Hip Flexor & Psoas Decompression', details: '90/90 hip switches, couch stretch regressions, and glute waking drills.' },
      { week: 3, focus: 'Lumbar Spine & Sacroiliac Alignment', details: 'Gentle spinal twists, QL releases, and pelvic tilts.' },
      { week: 4, focus: 'Whole-Body Kinetic Integration & Daily Micro-Habits', details: 'Standing posture mastery, ergonomic seating setup, and 3-minute office drills.' }
    ],
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80',
    badge: 'Office Essential'
  },
  {
    id: 'prog-zumba-rhythm-burn',
    title: 'Zumba Cardio Explosion & Serotonin Boost',
    category: 'zumba',
    level: 'All Levels',
    durationWeeks: 6,
    sessionsPerWeek: 4,
    sessionDurationMin: 45,
    trainerId: 'trainer-4',
    trainerName: 'Rohan Mehra',
    trainerPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    schedule: 'Tue, Thu, Sat, Sun · 06:00 PM – 06:45 PM IST',
    priceMonthly: 1799,
    shortDescription: 'Electrifying Latin, Bollywood, and Afrobeat dance cardio that torches 400+ calories while elevating your mood.',
    fullDescription: 'Forget the monotonous treadmill. This high-energy class pairs pulsating global beats with progressive dance routines that burn serious calories while making you forget you are even working out.',
    highlights: [
      'High calorie burn (approx. 400-500 kcal per session)',
      'Zero dance background required—easy step-by-step repetition',
      'High dopamine and serotonin booster for post-work stress release',
      'Live music playlist curation with high community enthusiasm'
    ],
    targetGoals: ['get-fit', 'manage-weight', 'reduce-stress', 'overall-wellness'],
    enrolledMembers: 1640,
    curriculum: [
      { week: 1, focus: 'Basic Rhythms & Footwork Foundations', details: 'Merengue marches, salsa steps, and cumbia sways.' },
      { week: 2, focus: 'Cardio Elevation & Arm Styling', details: 'Reggaeton stomps, shoulder shimmies, and coordination drills.' },
      { week: 3, focus: 'Bollywood Fusion & High-Intensity Intervals', details: 'Bhangra kicks, Bollywood hops, and sustained heart rate training.' },
      { week: 4, focus: 'Afrobeat Grooves & Hip Articulation', details: 'Kuduro steps, hip roll sequences, and dynamic lateral agility.' },
      { week: 5, focus: 'Non-Stop Cardio Stamina & Playlist Mashup', details: 'Full 40-minute continuous groove sets with rapid track transitions.' },
      { week: 6, focus: 'Celebration Masterclass & Free Movement', details: 'Theme party workout, community shoutouts, and personal rhythm confidence.' }
    ],
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=800&q=80',
    badge: 'Pure Joy'
  }
];
