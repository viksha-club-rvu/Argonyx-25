import { Trophy, Medal, Award } from "lucide-react";

export const Prizes = () => {
  const prizes = [
    { icon: Trophy, position: "Winner", amount: "₹10,000", color: "primary" },
    { icon: Medal, position: "First Runner Up", amount: "₹6,000", color: "secondary" },
    { icon: Award, position: "Second Runner Up", amount: "₹4,000", color: "accent" },
  ];

  return (
    <section id="prizes" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="relative z-10 container px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-center mb-4">
          What's at Stake - <span className="text-gradient">Rewards & Prizes</span>
        </h2>
        <p className="text-muted-foreground text-center mb-8 sm:mb-12 text-sm sm:text-base">
          Each track will have rewards for the top three teams:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {prizes.map((prize, idx) => {
            const Icon = prize.icon;
            return (
              <div key={idx} className="glass-card p-4 sm:p-6 hover-glow text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-glow flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-10 sm:h-10 text-background" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-foreground">{prize.position}</h3>
                <p className={`text-2xl sm:text-3xl font-black text-${prize.color}`}>{prize.amount}</p>
              </div>
            );
          })}
        </div>

        <div className="glass-card p-4 sm:p-6 border border-primary/30 hover-glow">
          <p className="text-muted-foreground text-center text-sm sm:text-base">
            <span className="text-foreground font-semibold">Participation certificate</span> for all participants who make a submission.
          </p>
          <p className="text-primary text-center font-semibold mt-2 sm:mt-4 text-sm sm:text-base">
            Get in touch with amazing startups!
          </p>
        </div>
      </div>
    </section>
  );
};
