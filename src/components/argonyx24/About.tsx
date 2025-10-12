import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 container px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-center mb-8 sm:mb-10">
          About <span className="text-gradient">ARGONYX</span>
        </h2>

        <div className="glass-card p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 hover-glow">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Welcome to <span className="text-foreground font-semibold">Argonyx Hackathon 2024!</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Argonyx is a <span className="text-primary font-semibold">national-level hackathon</span>, structured as a two-round competition that pushes the boundaries of innovation and creativity.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Whether you're a coding enthusiast or a problem-solving visionary, Argonyx is the ultimate platform to showcase your skills, connect with like-minded individuals, and make an impact.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            In the first round, you'll present your ideas, and top teams will advance to an intensive <span className="text-secondary font-semibold">24-hour offline hackathon</span> to bring their solutions to life!
          </p>

          <div className="flex justify-center mt-6 sm:mt-8">
            <Link to="/">
              <Button
                variant="cyber"
                size="lg"
                className="text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-center group"
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 transition-transform group-hover:translate-x-1" />
                <span className="truncate">
                  Visit Latest ARGONYX '25 Website
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
