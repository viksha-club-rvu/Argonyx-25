import { Button } from '@/components/ui/button';
import { Lightbulb, Code, Zap, Globe } from 'lucide-react';

const inspirationAreas = [
  {
    id: 1,
    title: "Social Impact Solutions",
    category: "Impact",
    icon: Lightbulb,
    description: "Build applications that address real-world social challenges and make a positive difference in communities.",
    points: ["Healthcare accessibility", "Education technology", "Environmental sustainability", "Community development"],
    difficulty: "Open",
    focus: "Society"
  },
  {
    id: 2,
    title: "Emerging Tech Innovation",
    category: "Technology",
    icon: Zap,
    description: "Leverage cutting-edge technologies like AI, blockchain, IoT, or AR/VR to create next-generation solutions.",
    points: ["Artificial Intelligence", "Blockchain applications", "IoT ecosystems", "Immersive experiences"],
    difficulty: "Open",
    focus: "Innovation"
  },
  {
    id: 3,
    title: "Business & Entrepreneurship",
    category: "Business",
    icon: Globe,
    description: "Develop scalable business solutions, productivity tools, or platforms that solve market problems.",
    points: ["SaaS platforms", "E-commerce innovation", "Productivity enhancement", "Market solutions"],
    difficulty: "Open",
    focus: "Market"
  },
  {
    id: 4,
    title: "Creative & Technical Challenge",
    category: "Creative",
    icon: Code,
    description: "Push the boundaries of what's possible with creative coding, interactive art, or experimental applications.",
    points: ["Interactive experiences", "Creative coding", "Experimental interfaces", "Digital art platforms"],
    difficulty: "Open",
    focus: "Creativity"
  }
];

const ProblemStatements = () => {
  return (
    <section id="problems" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
            Your Innovation, Your Choice
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            This is an open-format hackathon - bring your own ideas and build what matters to you
          </p>
          <div className="glass-card p-6 max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-orbitron font-bold text-gradient mb-4">Open Innovation Format</h3>
            <p className="text-lg text-muted-foreground">
              No pre-defined problem statements! You have complete freedom to choose your own challenge, 
              build your passion project, or solve problems that matter to you. Here are some inspiration areas:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {inspirationAreas.map((area, index) => (
            <div
              key={area.id}
              className="glass-card p-8 hover-glow group transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-cyber flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-gradient mb-1">
                      {area.title}
                    </h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                      {area.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-orbitron font-bold text-accent">
                    {area.focus}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {area.difficulty}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* Key Points */}
              <div className="space-y-3 mb-8">
                {area.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-cyber" />
                    <span className="text-sm text-foreground">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:bg-primary/10">
                Get Inspired
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-orbitron font-bold text-gradient mb-4">
              Ready to Build Your Vision?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Remember: You can work on ANY idea you want! These are just inspiration areas. 
              The best innovations come from your unique perspective and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="lg">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg">
                View Guidelines
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;