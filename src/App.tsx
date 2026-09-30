import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyXanso } from './components/WhyXanso';
import { GoalSelector } from './components/GoalSelector';
import { ChooseJourney } from './components/ChooseJourney';
import { FeaturedPrograms } from './components/FeaturedPrograms';
import { ProgramModal } from './components/ProgramModal';
import { TrainerSection } from './components/TrainerSection';
import { TrainerModal } from './components/TrainerModal';
import { WellnessAssessmentModal } from './components/WellnessAssessmentModal';
import { LiveClassesSection } from './components/LiveClassesSection';
import { LiveClassRoomModal } from './components/LiveClassRoomModal';
import { OnDemandSection } from './components/OnDemandSection';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { CorporateSection } from './components/CorporateSection';
import { PricingSection } from './components/PricingSection';
import { FreeTrialModal } from './components/FreeTrialModal';
import { SuccessStories } from './components/SuccessStories';
import { BlogSection } from './components/BlogSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';
import type { ToastMessage } from './components/Toast';
import { MemberDashboardModal } from './components/MemberDashboardModal';
import { AdminPanelModal } from './components/AdminPanelModal';

import type { Program, Trainer, LiveClass, OnDemandVideo, AssessmentResult } from './types';
import { LIVE_CLASSES_DATA } from './data/liveClassesData';
import { PROGRAMS_DATA } from './data/programsData';

export function App() {
  // Modals & Active State
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [activeLiveClassRoom, setActiveLiveClassRoom] = useState<LiveClass | null>(null);
  const [activeVideo, setActiveVideo] = useState<OnDemandVideo | null>(null);

  // Dynamic user state
  const [userStreakDays, setUserStreakDays] = useState(12);

  // Toast Notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'info' | 'error', title: string, message?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Handlers
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartJourneyFromAssessment = (result: AssessmentResult) => {
    addToast(
      'success',
      'Assessment Complete!',
      `Recommended: ${result.recommendedJourney} pathway with Coach ${result.matchedTrainer.name}.`
    );
    setIsFreeTrialOpen(true);
  };

  const handleFreeTrialSuccess = (data: { name: string; email: string; trialType: string }) => {
    addToast(
      'success',
      'Trial Activated!',
      `Welcome ${data.name}! ${data.trialType} is active. Enjoy your live classes.`
    );
  };

  const handleBookTrainerSession = (trainerName: string, slot: string) => {
    addToast(
      'success',
      '1:1 Session Reserved',
      `Your consultation with ${trainerName} for ${slot} has been confirmed.`
    );
  };

  const handleReserveClassSpot = (classTitle: string) => {
    addToast(
      'success',
      'Spot Reserved!',
      `You are registered for "${classTitle}". Link will be sent 15 mins prior.`
    );
  };

  const handleCorporateDemoRequest = (details: { companyName: string; teamSize: string; email: string }) => {
    addToast(
      'info',
      'Corporate Demo Requested',
      `Our enterprise partner team will contact ${details.companyName} at ${details.email}.`
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Sticky Navigation */}
      <Navbar
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 4. Hero Section */}
        <HeroSection
          onStartFreeTrial={() => setIsFreeTrialOpen(true)}
          onExplorePrograms={() => handleScrollToSection('programs')}
          onJoinLiveDemo={() => setActiveLiveClassRoom(LIVE_CLASSES_DATA[0])}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* 4. Why Xanso (8 Pillars) */}
        <WhyXanso
          onExplorePrograms={() => handleScrollToSection('programs')}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* 5. Wellness Goal Selection (Interactive Filter & Recommendation) */}
        <GoalSelector
          onSelectProgram={(prog) => setSelectedProgram(prog)}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* 6. Choose Your Journey (GROUP, 1:1, CORPORATE) */}
        <ChooseJourney
          onStartFreeTrial={() => setIsFreeTrialOpen(true)}
          onExplorePrograms={() => handleScrollToSection('programs')}
          onRequestCorporateDemo={() => handleScrollToSection('corporate')}
          onOpenTrainerSelect={() => handleScrollToSection('trainers')}
        />

        {/* 2 & 10. Live Wellness Classes Today */}
        <LiveClassesSection
          onJoinLiveClass={(liveClass) => setActiveLiveClassRoom(liveClass)}
          onReserveSpot={(title) => handleReserveClassSpot(title)}
        />

        {/* 7. Featured Programs Catalog */}
        <FeaturedPrograms
          onSelectProgram={(prog) => setSelectedProgram(prog)}
        />

        {/* 8. Trainer Section (Meet Your Wellness Experts) */}
        <TrainerSection
          onSelectTrainer={(trainer) => setSelectedTrainer(trainer)}
        />

        {/* 2 & On-Demand Content Library */}
        <OnDemandSection
          onSelectVideo={(video) => setActiveVideo(video)}
        />

        {/* 15. Corporate Wellness Solutions */}
        <CorporateSection
          onRequestDemo={handleCorporateDemoRequest}
        />

        {/* 12. Transparent Pricing & Free Trial Pass */}
        <PricingSection
          onStartFreeTrial={() => setIsFreeTrialOpen(true)}
          onRequestCorporateDemo={() => handleScrollToSection('corporate')}
        />

        {/* 14. Success Stories (Verifiable Transformations) */}
        <SuccessStories />

        {/* 16. Blog / Content Hub */}
        <BlogSection />

        {/* About Xanso & The 7-Step Wellness Engine */}
        <AboutSection />

        {/* FAQ Accordion & Direct Contact / WhatsApp */}
        <ContactSection />
      </main>

      {/* Footer with Legal & Medical Disclaimers */}
      <Footer
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
      />

      {/* Interactive Modals */}
      {/* 9. Free Wellness Assessment Modal (8 Questions) */}
      <WellnessAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onStartJourney={handleStartJourneyFromAssessment}
      />

      {/* 13. Free Trial Modal */}
      <FreeTrialModal
        isOpen={isFreeTrialOpen}
        onClose={() => setIsFreeTrialOpen(false)}
        onSuccess={handleFreeTrialSuccess}
      />

      {/* Program Details & Curriculum Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnrollTrial={(title) => {
          setSelectedProgram(null);
          setIsFreeTrialOpen(true);
        }}
      />

      {/* Trainer Profile & 1:1 Consultation Slot Modal */}
      <TrainerModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
        onBookSession={handleBookTrainerSession}
      />

      {/* Simulated Live Class Studio Room */}
      <LiveClassRoomModal
        liveClass={activeLiveClassRoom}
        onClose={() => setActiveLiveClassRoom(null)}
      />

      {/* On-Demand Video Player Modal */}
      <VideoPlayerModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      {/* 10 & 11. Member Dashboard Modal */}
      <MemberDashboardModal
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        onJoinLiveClass={(liveClass: LiveClass) => {
          setIsDashboardOpen(false);
          setActiveLiveClassRoom(liveClass);
        }}
        userStreakDays={userStreakDays}
      />

      {/* 18. Admin Panel Modal */}
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

    </div>
  );
}

export default App;
