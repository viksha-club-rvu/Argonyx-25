import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import ProblemStatements from '@/components/ProblemStatements';
import WinnersSection from '@/components/WinnersSection';
import SponsorsSection from '@/components/SponsorsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <ProblemStatements />
      <WinnersSection />
      <SponsorsSection />
    </div>
  );
};

export default Index;
