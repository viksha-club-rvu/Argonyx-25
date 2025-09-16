import { Brain, Code, Zap, Trophy, Users, Clock } from 'lucide-react';
import VerticalCard from './VerticalCard';

const features = [
  {
    icon: Clock,
    title: "21 Hours",
    description: "Non-stop coding marathon"
  },
  {
    icon: Users,
    title: "500+ Hackers",
    description: "Brilliant minds collaborating"
  },
  {
    icon: Trophy,
    title: "$50K+ Prizes",
    description: "Rewarding innovation"
  },
  {
    icon: Zap,
    title: "2 Verticals",
    description: "AI/ML & Web Development"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Event */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-8">
            About Argonyx '25
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Argonyx '25 is the ultimate futuristic hackathon experience where innovation meets technology. 
              Join 500+ brilliant minds for 21 hours of intense coding, learning, and building the future.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose your path between AI/ML and Web Development verticals, tackle real-world problems, 
              and compete for over $50,000 in prizes while networking with industry leaders and fellow innovators.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover-glow group transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-cyber flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-orbitron font-bold text-lg text-gradient mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verticals Section */}
        <div id="verticals" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
              Choose Your Vertical
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two paths to innovation - pick your specialty and dive deep into cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <VerticalCard
              title="AI/ML Vertical"
              description="Dive into the world of artificial intelligence and machine learning. Build intelligent systems that can learn, adapt, and solve complex problems."
              features={[
                "Deep Learning & Neural Networks",
                "Computer Vision & NLP",
                "Predictive Analytics",
                "Reinforcement Learning",
                "MLOps & Model Deployment",
                "Ethical AI Development"
              ]}
              icon={Brain}
              gradient="primary"
            />
            
            <VerticalCard
              title="Web Development"
              description="Create stunning, responsive, and performant web applications using the latest frameworks and technologies."
              features={[
                "Modern Frontend Frameworks",
                "Backend API Development",
                "Cloud-Native Applications",
                "Progressive Web Apps",
                "Microservices Architecture",
                "DevOps & Deployment"
              ]}
              icon={Code}
              gradient="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;