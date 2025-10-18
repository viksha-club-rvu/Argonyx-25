import { ExternalLink } from "lucide-react";

const sponsor = {
  name: "RunAnywhere.ai",
  logo: "https://www.runanywhere.ai/logo.svg", 
  website: "https://www.runanywhere.ai/"
};

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Tile: Main Sponsor */}
        <div
          onClick={() => window.open(sponsor.website, "_blank")}
          className="glass-card p-10 flex flex-col items-center justify-center hover-glow cursor-pointer transition-all duration-500 hover:scale-105"
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="w-32 h-32 object-contain mb-4"
          />
          <h3 className="font-orbitron text-2xl font-bold text-gradient text-center">
            {sponsor.name}
          </h3>
        </div>

        <div className="glass-card p-12 flex flex-col items-center justify-center hover-glow transition-all duration-500 text-center">
          <h3 className="text-3xl font-orbitron font-bold text-gradient mb-4">
            Become a Sponsor
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Join us in empowering the next generation of innovators at RV University 
            and showcase your brand to brilliant minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/1WgIR1GItXloyn-Z489EFoU8v9agy2m2U/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-cyber text-foreground font-orbitron font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-glow-primary flex items-center justify-center gap-2"
            >
              Partnership Deck <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="mailto:club_viksha@rvu.edu.in"
              className="px-8 py-4 border border-primary/50 text-primary font-orbitron font-bold rounded-xl hover:bg-primary/10 transition-all duration-300 text-center"
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>

      {/* Optional floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default SponsorsSection;
