import type { AssessmentQuestion, AssessmentResult } from '../types';
import { TRAINERS_DATA } from './trainersData';

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    question: "What is your primary wellness aspiration right now?",
    subtitle: "Select the main focus that would make the greatest impact in your daily life.",
    options: [
      { label: "Lose weight & tone up sustainably", description: "Healthy fat loss without extreme diets", icon: "Flame", goalTag: "manage-weight", scoreWeight: 10 },
      { label: "Build functional strength & muscle", description: "Increase bone density, stamina and power", icon: "Dumbbell", goalTag: "build-strength", scoreWeight: 10 },
      { label: "Relieve workplace stress & anxiety", description: "Calm an overactive mind and feel centered", icon: "Smile", goalTag: "reduce-stress", scoreWeight: 10 },
      { label: "Fix desk posture & back/neck stiffness", description: "Decompress joints and regain mobility", icon: "Activity", goalTag: "improve-flexibility", scoreWeight: 10 },
      { label: "Improve deep sleep quality & energy", description: "Wake up refreshed without brain fog", icon: "Moon", goalTag: "improve-sleep", scoreWeight: 10 },
      { label: "Women's hormonal health & core balance", description: "Support PCOS, postpartum, or hormonal rhythm", icon: "Sparkles", goalTag: "overall-wellness", scoreWeight: 10 }
    ]
  },
  {
    id: 2,
    question: "How would you describe your current physical activity level?",
    subtitle: "Be honest—this helps us safely set your workout volume and progression.",
    options: [
      { label: "Mostly sedentary (Desk bound 7+ hours)", description: "Very little intentional exercise currently", icon: "Armchair", goalTag: "improve-flexibility", scoreWeight: 5 },
      { label: "Lightly active (Occasional walking/weekend walks)", description: "1–2 days of casual movement per week", icon: "Footprints", goalTag: "get-fit", scoreWeight: 8 },
      { label: "Moderately active (Consistent 2–3 days/week)", description: "Regular gym, yoga, or sports background", icon: "Zap", goalTag: "build-strength", scoreWeight: 10 },
      { label: "Highly active but needing structured direction", description: "4+ days/week looking for elite consistency", icon: "Trophy", goalTag: "build-strength", scoreWeight: 12 }
    ]
  },
  {
    id: 3,
    question: "Which movement style brings you the most joy or interest?",
    subtitle: "Consistency thrives when you actually look forward to your sessions.",
    options: [
      { label: "Mindful Yoga & Breathwork", description: "Fluid asanas, mindful posture, and centering", icon: "Heart", goalTag: "improve-flexibility", scoreWeight: 10 },
      { label: "Functional Strength & Resistance", description: "Dumbbells, bodyweight circuits, and muscle tone", icon: "Dumbbell", goalTag: "build-strength", scoreWeight: 10 },
      { label: "High-Energy Dance & Zumba Cardio", description: "Fast-paced music, upbeat rhythm, pure fun", icon: "Music", goalTag: "manage-weight", scoreWeight: 10 },
      { label: "Gentle Mobility & Joint Restoration", description: "Low-impact stretches, spine flow, zero sweat", icon: "Shield", goalTag: "overall-wellness", scoreWeight: 10 },
      { label: "Deep Meditation & Restorative Nidra", description: "Somatic body scans, breathing, nervous reset", icon: "Compass", goalTag: "improve-sleep", scoreWeight: 10 }
    ]
  },
  {
    id: 4,
    question: "How much time can you realistically invest per day?",
    subtitle: "Sustainable habits beat unsustainable intensity every time.",
    options: [
      { label: "15 – 25 minutes daily", description: "Quick, high-yield express micro-sessions", icon: "Clock", goalTag: "get-fit", scoreWeight: 6 },
      { label: "30 – 45 minutes daily", description: "The optimal balanced standard session length", icon: "Timer", goalTag: "overall-wellness", scoreWeight: 10 },
      { label: "45 – 60 minutes, 3 to 4 times a week", description: "Deep immersive workouts with warm-up & cool-down", icon: "Calendar", goalTag: "build-strength", scoreWeight: 10 }
    ]
  },
  {
    id: 5,
    question: "What time of day suits your mental energy best?",
    subtitle: "We will prioritize class schedules around your circadian peak.",
    options: [
      { label: "Early Morning (06:30 AM – 08:30 AM)", description: "Start the day energized before work starts", icon: "Sun", goalTag: "get-fit", scoreWeight: 8 },
      { label: "Midday Lunch Break (01:00 PM – 02:30 PM)", description: "Break up the desk slump with express mobility", icon: "Coffee", goalTag: "improve-flexibility", scoreWeight: 8 },
      { label: "Post-Work Evening (06:00 PM – 08:00 PM)", description: "Decompress work stress and burn calories", icon: "Sunset", goalTag: "reduce-stress", scoreWeight: 8 },
      { label: "Night Wind-Down (09:00 PM – 10:30 PM)", description: "Gentle sleep yoga and meditation before bed", icon: "Moon", goalTag: "improve-sleep", scoreWeight: 8 }
    ]
  },
  {
    id: 6,
    question: "What has been your biggest obstacle to consistency in the past?",
    subtitle: "Identifying your barrier allows us to build your support system.",
    options: [
      { label: "Busy work schedule & lack of time", description: "Work meetings and deadlines derail routines", icon: "Briefcase", goalTag: "reduce-stress", scoreWeight: 8 },
      { label: "Lack of accountability & losing motivation alone", description: "Starting strong for 2 weeks then dropping off", icon: "Users", goalTag: "get-fit", scoreWeight: 10 },
      { label: "Fear of injury or not knowing correct form", description: "Uncertain if exercises are safe for joints", icon: "AlertCircle", goalTag: "build-strength", scoreWeight: 10 },
      { label: "Low energy & chronic fatigue", description: "Too exhausted by evening to exercise", icon: "BatteryLow", goalTag: "improve-sleep", scoreWeight: 8 }
    ]
  },
  {
    id: 7,
    question: "What coaching format appeals to you the most?",
    subtitle: "Choose the level of guidance and interaction that fits your style.",
    options: [
      { label: "Live Interactive Group Classes", description: "Live trainer with real-time cues + motivating peer community", icon: "Users", goalTag: "get-fit", scoreWeight: 10 },
      { label: "1:1 Dedicated Master Coach", description: "Bespoke plan, private sessions, weekly direct reviews", icon: "UserCheck", goalTag: "build-strength", scoreWeight: 12 },
      { label: "Flexible On-Demand with Guided Track", description: "Work out on your own exact terms anytime 24/7", icon: "PlayCircle", goalTag: "overall-wellness", scoreWeight: 8 },
      { label: "Looking for my company/workplace team", description: "Corporate wellness packages and challenges", icon: "Building2", goalTag: "reduce-stress", scoreWeight: 10 }
    ]
  },
  {
    id: 8,
    question: "Do you have any specific physical sensitivities or considerations?",
    subtitle: "We ensure all recommendations strictly safeguard your joints.",
    options: [
      { label: "No issues, fully healthy & ready", description: "Clear to explore any workout intensity", icon: "CheckCircle2", goalTag: "get-fit", scoreWeight: 10 },
      { label: "Lower back or neck stiffness from desk sitting", description: "Need posture-safe alignments and core bracing", icon: "ShieldAlert", goalTag: "improve-flexibility", scoreWeight: 10 },
      { label: "Knee, ankle, or joint sensitivities", description: "Require low-impact alternatives with zero jumping", icon: "Activity", goalTag: "improve-flexibility", scoreWeight: 10 },
      { label: "Hormonal condition (PCOS / Thyroid / Postpartum)", description: "Need low-cortisol, cycle-conscious guidance", icon: "Sparkles", goalTag: "overall-wellness", scoreWeight: 10 }
    ]
  }
];

export function computeAssessmentResult(answers: Record<number, number>): AssessmentResult {
  // Aggregate goals
  const goalCounts: Record<string, number> = {};
  let preferenceFor1on1 = false;
  let preferenceForCorp = false;

  Object.entries(answers).forEach(([questionIdStr, optionIndex]) => {
    const qId = parseInt(questionIdStr);
    const q = ASSESSMENT_QUESTIONS.find(item => item.id === qId);
    if (!q) return;
    const selectedOption = q.options[optionIndex];
    if (!selectedOption) return;

    goalCounts[selectedOption.goalTag] = (goalCounts[selectedOption.goalTag] || 0) + selectedOption.scoreWeight;

    if (qId === 7) {
      if (optionIndex === 1) preferenceFor1on1 = true;
      if (optionIndex === 3) preferenceForCorp = true;
    }
  });

  // Find dominant goal
  let topGoal = 'overall-wellness';
  let maxScore = -1;
  Object.entries(goalCounts).forEach(([goal, score]) => {
    if (score > maxScore) {
      maxScore = score;
      topGoal = goal;
    }
  });

  // Decide journey
  let journey: 'GROUP' | '1:1' | 'CORPORATE' = 'GROUP';
  if (preferenceForCorp) journey = 'CORPORATE';
  else if (preferenceFor1on1) journey = '1:1';

  // Matched trainer and program
  let trainer = TRAINERS_DATA[0];
  let recommendedProgramId = 'prog-sunrise-vinyasa';
  let habitTip = 'Drink 500ml water and perform 5 minutes of cat-cow spinal mobilization before checking your email in the morning.';

  if (topGoal === 'build-strength' || topGoal === 'manage-weight') {
    trainer = TRAINERS_DATA[1]; // Vikram
    recommendedProgramId = 'prog-functional-strength-reset';
    habitTip = 'Prioritize 25-30g of quality protein in your breakfast to sustain satiety and muscle recovery throughout your workday.';
  } else if (topGoal === 'improve-sleep' || topGoal === 'reduce-stress') {
    trainer = TRAINERS_DATA[4]; // Kavita
    recommendedProgramId = 'prog-deep-sleep-nidra';
    habitTip = 'Switch all indoor lights to warm dimmers 45 minutes before sleep and follow our 5-minute physiological sigh breath routine.';
  } else if (topGoal === 'improve-flexibility') {
    trainer = TRAINERS_DATA[5]; // Arjun
    recommendedProgramId = 'prog-desk-worker-mobility';
    habitTip = 'Take a 2-minute posture micro-break every 50 minutes: stand up, interlock fingers behind your back, and extend your chest.';
  } else if (topGoal === 'overall-wellness' && answers[8] === 3) {
    trainer = TRAINERS_DATA[2]; // Dr. Neha
    recommendedProgramId = 'prog-womens-hormonal-vitality';
    habitTip = 'Replace high-exhaustion fast cardio with low-impact steady resistance and magnesium-rich evening teas.';
  }

  const roadmap = [
    'Week 1–2: Establish foundational baseline, master correct breathing & kinetic alignment.',
    'Week 3–4: Build daily streak momentum with 3–4 live guided interactive sessions.',
    'Week 5–6: Noticeable gains in functional stamina, reduced physical stiffness & deeper sleep.',
    'Week 7–8: Autonomy, habitual permanence & celebration of your first milestone badge!'
  ];

  return {
    primaryGoal: topGoal as any,
    recommendedProgramId,
    recommendedJourney: journey,
    suggestedWeeklyCommitment: '3 to 4 sessions (30-45 mins each)',
    dailyHabitTip: habitTip,
    matchedTrainer: trainer,
    personalizedRoadmap: roadmap
  };
}
