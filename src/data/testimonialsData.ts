import type { Testimonial } from '../types';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Pooja Iyer',
    age: 33,
    profession: 'Senior Product Manager',
    city: 'Bengaluru',
    goalAchieved: 'Overcame Postpartum Back Pain & Rebuilt Core',
    quote: 'Xanso gave me an intelligent, low-cortisol routine that respected my postpartum body rather than beating it into exhaustion.',
    fullStory: 'After returning to work postpartum, my lower back was constantly aching and I felt drained by 3 PM. Dr. Neha’s Hormonal Harmony program taught me how to brace correctly and breathe with my pelvic floor. In 4 months, my core stability returned completely, and I have zero pain lifting my toddler or sitting through sprint planning.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verifiedMemberSince: 'April 2025',
    programTaken: 'Hormonal Harmony & Core Restoration',
    rating: 5,
    metrics: [
      { label: 'Back Pain Frequency', value: 'Zero Days / Week' },
      { label: 'Core Strength Test', value: '100% Retained' },
      { label: 'Consistent Sessions', value: '72 Classes Attended' }
    ],
    videoThumbnail: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'test-2',
    name: 'Siddharth Roy',
    age: 41,
    profession: 'Engineering VP & Tech Founder',
    city: 'Pune',
    goalAchieved: 'Normalized Sleep & Reduced Work Stress',
    quote: 'I used to average 4 to 5 broken hours of sleep every night. Kavita’s 9:30 PM Yoga Nidra sessions became my daily non-negotiable anchor.',
    fullStory: 'Running a 60-person software team had me locked in a perpetual state of adrenaline. I joined Xanso initially skeptical of digital yoga. The live interactive format held me accountable. Within 3 weeks my smart ring tracked a 45% increase in restorative Deep Sleep, and my resting heart rate dropped from 76 to 64 bpm.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    verifiedMemberSince: 'January 2025',
    programTaken: 'Nervous System Reset & Deep Sleep Nidra',
    rating: 5,
    metrics: [
      { label: 'Deep Sleep Increase', value: '+45% (Oura Tracked)' },
      { label: 'Resting Heart Rate', value: '76 → 64 bpm' },
      { label: 'Current Active Streak', value: '84 Days' }
    ],
    videoThumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'test-3',
    name: 'Tanvi Deshmukh',
    age: 28,
    profession: 'Management Consultant',
    city: 'Mumbai',
    goalAchieved: 'Lost 11 kg Sustainably Without Fad Diets',
    quote: 'The difference with Xanso is the trainers don’t scream or shame you. They teach progressive strength and joyful movement.',
    fullStory: 'Between client travel and 12-hour desk marathons, my weight had steadily climbed and my joints were stiff. Combining Vikram’s functional strength sessions twice a week with Rohan’s Saturday Zumba kept my consistency alive for the first time in 5 years. I lost 11 kg over 7 months without crashing my metabolism.',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    verifiedMemberSince: 'August 2024',
    programTaken: 'Metabolic Strength Reset + Zumba Cardio',
    rating: 5,
    metrics: [
      { label: 'Sustainable Fat Loss', value: '-11 kg (Over 7 Mos)' },
      { label: 'Waist Reduction', value: '3.5 inches' },
      { label: 'Total Completed Workouts', value: '114 Sessions' }
    ],
    videoThumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80'
  }
];
