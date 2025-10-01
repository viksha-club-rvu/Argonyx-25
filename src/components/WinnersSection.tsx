import { Trophy, Medal, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const prizeStructure = [
  {
    position: 1,
    title: "First Prize",
    prize: "₹15,000",
    description: "For the most innovative and well-executed solution",
    icon: Trophy,
    color: "text-yellow-400"
  },
  {
    position: 2,
    title: "Second Prize", 
    prize: "₹10,000",
    description: "For exceptional technical implementation and creativity",
    icon: Medal,
    color: "text-gray-300"
  },
  {
    position: 3,
    title: "Third Prize",
    prize: "₹5,000", 
    description: "For outstanding innovation and presentation",
    icon: Award,
    color: "text-orange-400"
  }
];

const judgingCriteria = [
  { label: "Innovation", value: "25%" },
  { label: "Technical Implementation", value: "25%" },
  { label: "Presentation & Storytelling", value: "25%" },
  { label: "Market Potential", value: "25%" }
];

const WinnersSection = () => {
  return (
    <section id="winners" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
            Prize Structure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete for ₹30,000 in total prizes and recognition for your innovation
          </p>
        </div>

        {/* Prize Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizeStructure.map((prize, index) => (
            <div
              key={prize.position}
              className={`glass-card p-8 text-center relative overflow-hidden group hover-glow transition-all duration-500 
              ${prize.position === 1 ? 'md:scale-110 md:-mt-8' : ''}`}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Trophy Icon */}
                <div className="mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-cyber flex items-center justify-center mb-4 ${prize.color}`}>
                    <prize.icon className="w-10 h-10" />
                  </div>
                  <div className="text-3xl font-orbitron font-bold text-gradient mb-2">
                    #{prize.position}
                  </div>
                </div>

                {/* Prize Info */}
                <h3 className="text-xl font-orbitron font-bold mb-2">{prize.title}</h3>
                <div className="text-3xl font-orbitron font-bold text-accent mb-4">
                  {prize.prize}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prize.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Judging Criteria */}
        {/* <div className="glass-card p-8 mb-16">
          <h3 className="text-3xl font-orbitron font-bold text-gradient text-center mb-8">
            Judging Criteria
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {judgingCriteria.map((criteria, index) => (
              <div
                key={index}
                className="text-center p-4 border border-card-border/20 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-orbitron font-bold text-gradient mb-2">
                  {criteria.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {criteria.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Registration Info */}
        <div className="text-center glass-card p-8">
          <h3 className="text-3xl font-orbitron font-bold text-gradient mb-6">
            Registration Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h4 className="text-xl font-orbitron font-bold text-primary mb-3">Round 1: Online Screening</h4>
              <div className="text-3xl font-orbitron font-bold text-accent mb-2">₹100</div>
              <p className="text-muted-foreground text-sm">
                Submit your idea presentation • Via Unstop • Non-refundable
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-orbitron font-bold text-secondary mb-3">Round 2: Final Hackathon</h4>
              <div className="text-3xl font-orbitron font-bold text-accent mb-2">₹600</div>
              <p className="text-muted-foreground text-sm">
                Overnight hackathon • 35 selected teams • Non-refundable
              </p>
            </div>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            Will you be the next champion of innovation?
          </p>
          <div className="text-4xl font-orbitron font-bold text-gradient">
            ARGONYX '25 AWAITS
          </div>
          <br />
          <a href="https://unstop.com/hackathons/argonyx25-kalpavikas-10-rv-university-1563627" target="_blank" rel="noopener noreferrer">
          <Button variant="cyber" size="lg" className="text-lg px-8 py-6">
            Register Now
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;