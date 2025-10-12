import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import vikshaLogo from "@/assets/argonyx24/viksha.jpg";
import ieeeLogo from "@/assets/argonyx24/ieee.png";
import neuralNexusLogo from "@/assets/argonyx24/neural_nexus.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-25" />

      <div className="relative z-10 container px-4 py-16 text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-orbitron font-black mb-4 sm:mb-6 tracking-wide sm:tracking-wider">
          <span className="text-gradient">ARGONYX</span>
          <span className="ml-2 text-secondary">'24</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-semibold mb-6 sm:mb-8">
          24 HRS OF INNOVATION
        </p>

        {/* Organizer Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          <a
            href="https://www.instagram.com/viksha_rvu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img src={vikshaLogo} alt="Viksha" className="h-12 sm:h-16 w-auto rounded-lg glass-card" />
          </a>

          <span className="text-primary text-xl sm:text-2xl mx-2 sm:mx-4">×</span>

          <a
            href="https://www.instagram.com/ieee.rvu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img src={ieeeLogo} alt="IEEE RVU SB" className="h-12 sm:h-16 w-auto rounded-lg glass-card" />
          </a>

          <span className="text-primary text-xl sm:text-2xl mx-2 sm:mx-4">×</span>

          <a
            href="https://www.instagram.com/neuralnexus_rvu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img src={neuralNexusLogo} alt="Neural Nexus" className="h-12 sm:h-16 w-auto rounded-lg glass-card" />
          </a>
        </div>

        {/* Winners Banner */}
        <div className="glass-card border border-primary/40 rounded-2xl p-4 sm:p-6 md:p-8 hover-glow">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-black mb-4 sm:mb-6">
            <span className="text-gradient">THE WINNERS ARE ANNOUNCED!</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              variant="cyber"
              size="lg"
              className="text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3"
              onClick={() => (window.location.href = "/winners24")}
            >
              <Trophy className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" /> View Winners
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
