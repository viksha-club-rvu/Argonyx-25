import { Trophy, Medal, Award } from 'lucide-react';

const winners2024 = [
  {
    position: 1,
    team: "CyberMinds",
    project: "Neural Traffic Optimizer",
    category: "AI/ML",
    prize: "$10,000",
    description: "AI-powered traffic management system reducing congestion by 45%",
    icon: Trophy,
    color: "text-yellow-400"
  },
  {
    position: 2,
    team: "WebWizards",
    project: "EcoCommerce Platform",
    category: "Web Dev",
    prize: "$7,000",
    description: "Sustainable e-commerce platform with carbon footprint tracking",
    icon: Medal,
    color: "text-gray-300"
  },
  {
    position: 3,
    team: "DataDragons",
    project: "ClimatePredict AI",
    category: "AI/ML",
    prize: "$5,000",
    description: "Machine learning model for local climate change predictions",
    icon: Award,
    color: "text-orange-400"
  }
];

const achievements = [
  { label: "Total Participants", value: "1,200+" },
  { label: "Projects Submitted", value: "250+" },
  { label: "Prize Money", value: "$50,000" },
  { label: "Sponsors", value: "25+" }
];

const WinnersSection = () => {
  return (
    <section id="winners" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
            Argonyx '24 Champions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating the brilliant minds who shaped the future last year
          </p>
        </div>

        {/* Winners Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {winners2024.map((winner, index) => (
            <div
              key={winner.position}
              className={`glass-card p-8 text-center relative overflow-hidden group hover-glow transition-all duration-500 ${
                winner.position === 1 ? 'md:scale-110 md:-mt-8' : ''
              }`}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Trophy Icon */}
                <div className="mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-cyber flex items-center justify-center mb-4 ${winner.color}`}>
                    <winner.icon className="w-10 h-10" />
                  </div>
                  <div className="text-3xl font-orbitron font-bold text-gradient mb-2">
                    #{winner.position}
                  </div>
                </div>

                {/* Team Info */}
                <h3 className="text-xl font-orbitron font-bold mb-2">{winner.team}</h3>
                <h4 className="text-lg text-gradient mb-3">{winner.project}</h4>
                
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm mb-4">
                  {winner.category}
                </span>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {winner.description}
                </p>

                <div className="text-2xl font-orbitron font-bold text-accent">
                  {winner.prize}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-orbitron font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-muted-foreground mb-6">
            Will you be the next champion?
          </p>
          <div className="text-4xl font-orbitron font-bold text-gradient">
            ARGONYX '25 AWAITS
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;