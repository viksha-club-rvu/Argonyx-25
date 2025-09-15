import { Button } from '@/components/ui/button';
import { Brain, Globe, Zap, Shield } from 'lucide-react';

const problems = [
  {
    id: 1,
    title: "Smart City Infrastructure",
    category: "AI/ML",
    icon: Brain,
    description: "Develop AI-powered solutions for optimizing urban infrastructure, traffic management, and resource allocation.",
    points: ["Real-time traffic optimization", "Energy grid management", "Waste management systems", "Public safety analytics"],
    difficulty: "Advanced",
    prize: "$5,000"
  },
  {
    id: 2,
    title: "Next-Gen E-Commerce",
    category: "Web Dev",
    icon: Globe,
    description: "Create innovative web applications that revolutionize online shopping experiences using modern technologies.",
    points: ["AR/VR product visualization", "Personalized recommendations", "Voice commerce", "Blockchain payments"],
    difficulty: "Intermediate",
    prize: "$4,000"
  },
  {
    id: 3,
    title: "Climate Change Predictor",
    category: "AI/ML",
    icon: Zap,
    description: "Build machine learning models to predict and visualize climate change impacts on local communities.",
    points: ["Weather pattern analysis", "Sea level predictions", "Agricultural impact assessment", "Interactive visualizations"],
    difficulty: "Advanced",
    prize: "$4,500"
  },
  {
    id: 4,
    title: "Cybersecurity Dashboard",
    category: "Web Dev",
    icon: Shield,
    description: "Develop a comprehensive security monitoring platform with real-time threat detection and response.",
    points: ["Real-time threat monitoring", "Vulnerability assessment", "Incident response automation", "Security analytics"],
    difficulty: "Intermediate",
    prize: "$3,500"
  }
];

const ProblemStatements = () => {
  return (
    <section id="problems" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
            Problem Statements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your challenge and build innovative solutions that matter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.id}
              className="glass-card p-8 hover-glow group transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-cyber flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <problem.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-gradient mb-1">
                      {problem.title}
                    </h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                      {problem.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-orbitron font-bold text-accent">
                    {problem.prize}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {problem.difficulty}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {problem.description}
              </p>

              {/* Key Points */}
              <div className="space-y-3 mb-8">
                {problem.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-cyber" />
                    <span className="text-sm text-foreground">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:bg-primary/10">
                Choose This Challenge
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Have your own innovative idea? 
          </p>
          <Button variant="cyber" size="lg">
            Submit Custom Problem
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;