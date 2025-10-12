import { Brain, Globe } from "lucide-react";

export const Tracks = () => {
  const tracks = [
    { icon: Brain, title: "AI/ML", description: "Artificial Intelligence and Machine Learning innovations", color: "cyan" },
    { icon: Globe, title: "Web Development", description: "Modern web applications and platforms", color: "magenta" },
  ];

  return (
    <section id="tracks" className="py-16 sm:py-20 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-orbitron font-black text-gradient mb-3 sm:mb-4">
            Tracks & <span className="text-secondary">Problem Statements</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto">
            Participants can choose from the following tracks, each offering unique problem statements tailored to specific domains:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {tracks.map((track, idx) => {
              const Icon = track.icon;
              return (
                <div key={idx} className="glass-card p-4 sm:p-6 hover-glow group flex flex-col items-center text-center">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 border rounded-xl flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300 bg-${track.color}/10 border-${track.color}/30`}>
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${track.color}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-1 sm:mb-2 text-foreground">{track.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{track.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
