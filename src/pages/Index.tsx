
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import ChallengesSection from '@/components/home/ChallengesSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ChallengesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </MainLayout>
  );
};

export default HomePage;
