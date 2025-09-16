import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
// App.tsx or HomePage.tsx
import AboutSection from './AboutSection';

function HomePage() {
  return (
    <>
      {/* other sections */}
      <section id="about">
        <AboutSection />
      </section>
      {/* other sections */}
    </>
  );
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-20">
        {/* Main title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-gradient mb-4 tracking-wider">
            ARGONYX
          </h1>
          <div className="text-2xl md:text-4xl font-orbitron font-bold text-secondary mb-2">
            '25
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Ultimate Hackathon Experience at RV University. Build Your Vision with Complete Creative Freedom.
          </p>
        </div>

        {/* Event details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 hover-glow">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-orbitron font-bold text-lg mb-2">When</h3>
            <p className="text-muted-foreground">October 10-11, 2025</p>
            <p className="text-sm text-muted-foreground">21 Hours of Innovation</p>
          </div>
          <div className="glass-card p-6 hover-glow">
            <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h3 className="font-orbitron font-bold text-lg mb-2">Where</h3>
            <p className="text-muted-foreground">RV University</p>
            <p className="text-sm text-muted-foreground">Block A & Satyajit Ray Hall</p>
          </div>
          <div className="glass-card p-6 hover-glow">
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-orbitron font-bold text-lg mb-2">Who</h3>
            <p className="text-muted-foreground">140 Hackers</p>
            <p className="text-sm text-muted-foreground">Teams of up to 4</p>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-8">
            Event Starts In
          </h2>
          <CountdownTimer />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://unstop.com/p/argonyx-25-rv-university-bangalore-1558242" target="_blank" rel="noopener noreferrer">
          <Button variant="cyber" size="lg" className="text-lg px-8 py-6">
            Register Now
          </Button>
          </a>
          <a href="#about">
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;