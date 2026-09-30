import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Target, 
  Clock, 
  Calendar, 
  Award,
  Zap
} from 'lucide-react';
import { 
  ASSESSMENT_QUESTIONS, 
  computeAssessmentResult 
} from '../data/assessmentQuestions';
import type { AssessmentResult } from '../types';
import { PROGRAMS_DATA } from '../data/programsData';

interface WellnessAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartJourney: (result: AssessmentResult) => void;
}

export const WellnessAssessmentModal: React.FC<WellnessAssessmentModalProps> = ({
  isOpen,
  onClose,
  onStartJourney
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  if (!isOpen) return null;

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const currentQuestion = ASSESSMENT_QUESTIONS[currentStep];

  const handleSelectOption = (optionIndex: number) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: optionIndex };
    setAnswers(updatedAnswers);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finished all questions! Compute result
      const computed = computeAssessmentResult(updatedAnswers);
      setResult(computed);
      setIsCalculated(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback if canvas-confetti is not loaded
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCalculated(false);
    setResult(null);
  };

  const matchedProgram = result 
    ? PROGRAMS_DATA.find(p => p.id === result.recommendedProgramId) || PROGRAMS_DATA[0]
    : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-[#121724] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {currentStep > 0 && !isCalculated && (
              <button
                onClick={handleBack}
                className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 transition-colors"
                title="Previous Question"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Free Wellness Assessment
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {isCalculated ? 'Your Personalized Wellness Roadmap' : `Step ${currentStep + 1} of ${totalQuestions}`}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isCalculated && (
          <div className="w-full h-1 bg-slate-200 dark:bg-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        )}

        {/* Main Content View */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {!isCalculated ? (
            /* Question Step */
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-display mb-2">
                  {currentQuestion.question}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                        isSelected
                          ? 'bg-emerald-50 dark:bg-emerald-500/15 border-emerald-500 text-slate-900 dark:text-white shadow-md shadow-emerald-500/10'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700 dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 dark:hover:border-white/20 dark:text-slate-200'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected 
                          ? 'bg-emerald-500 border-emerald-500 text-slate-950 font-bold' 
                          : 'border-slate-300 text-slate-500 dark:border-white/20 dark:text-slate-400'
                      }`}>
                        {isSelected ? <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white dark:fill-slate-950 dark:text-emerald-400" /> : <span className="text-xs">{idx + 1}</span>}
                      </div>

                      <div className="flex-1">
                        <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-0.5">
                          {option.label}
                        </p>
                        {option.description && (
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {option.description}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Computed Result View */
            result && (
              <div className="space-y-6">
                
                {/* Result Hero Header */}
                <div className="text-center p-6 rounded-3xl bg-gradient-to-b from-emerald-50 to-slate-100 dark:from-emerald-950/40 dark:to-slate-900 border border-emerald-200 dark:border-emerald-500/30">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-3 border border-emerald-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    ASSESSMENT ANALYSIS COMPLETE
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mb-2">
                    Recommended Journey: <span className="text-emerald-600 dark:text-emerald-400">{result.recommendedJourney} PATHWAY</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
                    Based on your schedule and physiological profile, our recommendation algorithm has matched you with your ideal start program.
                  </p>
                </div>

                {/* Recommended Program Spotlight */}
                {matchedProgram && (
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row gap-5 items-center">
                    <img 
                      src={matchedProgram.image} 
                      alt={matchedProgram.title} 
                      className="w-full sm:w-40 h-32 rounded-xl object-cover" 
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">
                          Recommended Program
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {matchedProgram.durationWeeks} Weeks Cohort
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {matchedProgram.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-3">
                        {matchedProgram.shortDescription}
                      </p>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                        Schedule: {matchedProgram.schedule}
                      </div>
                    </div>
                  </div>
                )}

                {/* Matched Trainer & Habit Tip Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Trainer */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center gap-3.5">
                    <img 
                      src={result.matchedTrainer.photo} 
                      alt={result.matchedTrainer.name} 
                      className="w-14 h-14 rounded-2xl object-cover border border-emerald-500/40" 
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">Your Matched Coach</span>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">{result.matchedTrainer.name}</h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{result.matchedTrainer.title}</p>
                    </div>
                  </div>

                  {/* Habit Tip */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                    <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider flex items-center gap-1 mb-1">
                      <Zap className="w-3.5 h-3.5" /> Recommended Daily Habit
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                      {result.dailyHabitTip}
                    </p>
                  </div>
                </div>

                {/* 8-Week Roadmap */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#111624] border border-slate-200 dark:border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Your Personalized 8-Week Progression Roadmap
                  </h4>
                  <div className="space-y-2">
                    {result.personalizedRoadmap.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )
          )}
        </div>

        {/* Footer Bar */}
        <div className="p-6 bg-slate-50 dark:bg-[#121724] border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
          {isCalculated ? (
            <div className="flex items-center justify-between w-full gap-4">
              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white underline"
              >
                Retake Assessment
              </button>
              <button
                onClick={() => {
                  if (result) onStartJourney(result);
                  onClose();
                }}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white dark:text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2"
              >
                <span>Start My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full text-xs text-slate-500 dark:text-slate-400">
              <span>{totalQuestions - currentStep} questions remaining</span>
              <span>100% Free · No Card Required</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
