import { Brain, Code, Zap, Trophy, Clock } from 'lucide-react';
import { useTheme } from 'next-themes';
import kalpavikasBlack from '@/assets/kalpavikas_black.png';
import kalpavikasWhite from '@/assets/kalpavikas_white.png';

const Kalpavikas = () => {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? kalpavikasWhite : kalpavikasBlack;

  return (
    <section id="kalpavikas" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-8">
            Kalpavikas 1.0
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* About Kalpavikas - Left Side */}
          <div className="flex-1">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-bold text-gradient mb-6 text-center">
                About Kalpavikas
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                    <b>Kalpavikas 1.0</b> is <b>RV University’s</b> premier fest, merging tech, gaming, and culture. Organized by <b>SOCSE</b>, it features high-energy esports (Valorant, BGMI), coding contests, and creative challenges like AI-driven art and meme-making. With a ₹1,00,000 prize pool, it’s a hub for innovators and creators.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    As part of Kalpavikas, <b>Argonyx ’25</b> is the flagship hackathon, pushing participants to build innovative solutions under real-world constraints. The fest unites coders, designers, and dreamers, fostering collaboration and creativity. Step into a space where ideas thrive and the future is reimagined!
                </p>
              </div>
            </div>
          </div>

          {/* Logo - Right Side */}
          <div className="flex-shrink-0">
            <div className="glass-card p-8 rounded-2xl w-80 h-80 flex items-center justify-center">
              <div className="text-center">
                {/* <h4 className="text-xl font-orbitron font-bold text-gradient mb-4">
                  Logo of Kalpavikas
                </h4> */}
                <div className="w-40 h-48 mx-auto flex items-center justify-center overflow-hidden">
                  <img src={logoSrc} alt="Kalpavikas logo" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kalpavikas;
