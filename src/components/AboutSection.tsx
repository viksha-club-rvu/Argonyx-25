import { Brain, Code, Zap, Trophy, Clock } from 'lucide-react';
import VerticalCard from './VerticalCard';
import Kalpavikas from '@/components/Kalpavikas';
import MeetWinnersJudges from '@/components/MeetWinnersJudges';
import Volunteers25 from "@/components/Volunteers25";

const features = [
  {
    icon: Clock,
    title: "15 Hours",
    description: "Intensive coding marathon"
  },
  {
    icon: Trophy,
    title: "₹30K+ Prizes",
    description: "Rewarding innovation"
  },
  {
    icon: Zap,
    title: "Open Innovation",
    description: "Choose your own problem statement"
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
              Argonyx '25 is the ultimate hackathon experience, presented by Kalpavikas 1.0 — where innovation meets real-world impact.
              Join brilliant minds for 15 hours of intense coding, learning, and building the future at RV University.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the intensity of a real startup launch with rapid prototyping, cross-functional teamwork,
              and compete for over ₹30,000 in prizes while networking with industry leaders and fellow innovators.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
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
          <Kalpavikas />
          <MeetWinnersJudges/>
        {/* Innovation Section */}
        {/* <div id="verticals" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
              Open Theme Challenge
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bring your own ideas and tackle any problem you're passionate about in this open format hackathon
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-2xl">
              <VerticalCard
                title="Open Innovation"
                description="Complete freedom to innovate! Bring your groundbreaking ideas to life using any technology stack. Build solutions that matter to you and showcase your creativity without constraints."
                features={[
                  "Complete Creative Freedom",
                  "Any Technology Stack",
                  "AI/ML or Web Development",
                  "Mobile or Cloud Solutions",
                  "Social Impact Projects",
                  "Any Problem Statement on your mind"
                ]}
                icon={Brain}
                gradient="primary"
              />
            </div>
          </div>
        </div> */}
        <Volunteers25/>
      </div>
    </section>
  );
};

export default AboutSection;