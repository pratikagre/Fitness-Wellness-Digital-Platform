export type GoalCategory = 
  | 'get-fit'
  | 'reduce-stress'
  | 'manage-weight'
  | 'build-strength'
  | 'improve-flexibility'
  | 'improve-sleep'
  | 'overall-wellness';

export interface Trainer {
  id: string;
  name: string;
  title: string;
  photo: string;
  qualifications: string[];
  experienceYears: number;
  specializations: string[];
  languages: string[];
  rating: number;
  reviewCount: number;
  bio: string;
  availableSessionsThisWeek: number;
  featuredTestimonial: string;
  instagram?: string;
  linkedin?: string;
}

export interface Program {
  id: string;
  title: string;
  category: 'yoga' | 'meditation' | 'strength' | 'mobility' | 'zumba' | 'womens-wellness' | 'stress-relief' | 'weight-loss';
  level: 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  durationWeeks: number;
  sessionsPerWeek: number;
  sessionDurationMin: number;
  trainerId: string;
  trainerName: string;
  trainerPhoto: string;
  schedule: string;
  priceMonthly: number;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  targetGoals: GoalCategory[];
  enrolledMembers: number;
  curriculum: { week: number; focus: string; details: string }[];
  image: string;
  badge?: string;
}

export interface LiveClass {
  id: string;
  title: string;
  category: 'yoga' | 'meditation' | 'strength' | 'zumba' | 'mobility' | 'womens-wellness' | 'stress-relief';
  trainerName: string;
  trainerPhoto: string;
  timeString: string;
  startTime: string; // e.g. "07:00 AM"
  durationMin: number;
  level: 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  spotsLeft: number;
  intensity: 'Gentle' | 'Moderate' | 'High Energy' | 'Vigorous';
  equipment: string;
  isLiveNow?: boolean;
}

export interface OnDemandVideo {
  id: string;
  title: string;
  category: 'yoga' | 'fitness' | 'meditation' | 'mobility' | 'relaxation';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  durationMin: number;
  trainerName: string;
  thumbnail: string;
  views: number;
  description: string;
  caloriesBurnedEstimate: number;
  videoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  profession: string;
  city: string;
  goalAchieved: string;
  quote: string;
  fullStory: string;
  photo: string;
  verifiedMemberSince: string;
  programTaken: string;
  rating: number;
  metrics: { label: string; value: string }[];
  videoThumbnail?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Fitness' | 'Yoga' | 'Nutrition' | 'Meditation' | 'Sleep' | 'Mental Wellness' | 'Workplace Wellness' | 'Healthy Lifestyle';
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  summary: string;
  content: string;
  image: string;
  tags: string[];
}

export interface PricingPlan {
  id: string;
  tier: 'group' | 'personal' | 'corporate';
  name: string;
  badge?: string;
  description: string;
  priceMonthly: number;
  priceQuarterly?: number;
  priceAnnual?: number;
  sessionsIncluded?: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description?: string;
    icon?: string;
    goalTag: GoalCategory;
    scoreWeight: number;
  }[];
}

export interface AssessmentResult {
  primaryGoal: GoalCategory;
  recommendedProgramId: string;
  recommendedJourney: 'GROUP' | '1:1' | 'CORPORATE';
  suggestedWeeklyCommitment: string;
  dailyHabitTip: string;
  matchedTrainer: Trainer;
  personalizedRoadmap: string[];
}

export interface MemberBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
  progressPercent: number;
}
