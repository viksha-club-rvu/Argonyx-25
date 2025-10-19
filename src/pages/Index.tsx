import Navigation from '@/components/Navigation';
import ClubLogos from '@/components/ClubLogos';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import ProblemStatements from '@/components/ProblemStatements';
import GallerySection from '@/components/GallerySection';
import WinnersSection from '@/components/WinnersSection';
import SponsorsSection from '@/components/SponsorsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      {/* <ClubLogos /> */}
      <HeroSection />
      <AboutSection />
      {/* <ScheduleSection /> */}
      {/* <ProblemStatements /> */}
      <GallerySection />
      <WinnersSection />
      <SponsorsSection />
    </div>
  );
};

export default Index;
