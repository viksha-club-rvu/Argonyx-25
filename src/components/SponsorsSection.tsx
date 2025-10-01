const sponsors = [
  {
    tier: "Platinum",
    companies: [
      { name: "TechCorp", logo: "🏢" },
      { name: "InnovateLabs", logo: "🧪" },
    ]
  },
  {
    tier: "Gold", 
    companies: [
      { name: "CodeWorks", logo: "💻" },
      { name: "DataSphere", logo: "🌐" },
      { name: "AIForward", logo: "🤖" },
    ]
  },
  {
    tier: "Silver",
    companies: [
      { name: "WebFlow", logo: "🌊" },
      { name: "CloudTech", logo: "☁️" },
      { name: "StartupHub", logo: "🚀" },
      { name: "DevTools", logo: "🔧" },
    ]
  }
];

const collaborators = [
  { name: "RV University", type: "Host Institution", logo: "🎓" },
  { name: "SoCSE", type: "Department", logo: "💡" },
  { name: "GitHub Campus", type: "Platform", logo: "📦" },
  { name: "Google Developers", type: "Community", logo: "🔍" },
  { name: "Microsoft Learn", type: "Education", logo: "📚" },
  { name: "AWS Educate", type: "Cloud", logo: "☁️" },
];

const SponsorsSection = () => {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'from-primary to-primary-glow';
      case 'Gold':
        return 'from-secondary to-secondary-glow';
      case 'Silver':
        return 'from-accent to-accent-glow';
      default:
        return 'from-muted to-muted-foreground';
    }
  };

  return (
    <section id="sponsors" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
       {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by industry leaders who believe in student innovation
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {sponsors.map((tier, tierIndex) => (
            <div key={tier.tier} className="text-center">
              <h3 className={`text-2xl font-orbitron font-bold mb-8 bg-gradient-to-r ${getTierColor(tier.tier)} bg-clip-text text-transparent`}>
                {tier.tier} Sponsors
              </h3>
              <div className={`grid gap-6 ${
                tier.tier === 'Platinum' 
                  ? 'grid-cols-1 md:grid-cols-2' 
                  : tier.tier === 'Gold' 
                  ? 'grid-cols-1 md:grid-cols-3' 
                  : 'grid-cols-2 md:grid-cols-4'
              }`}>
                {tier.companies.map((company, index) => (
                  <div
                    key={index}
                    className="glass-card p-8 hover-glow group transition-all duration-500 cursor-pointer"
                    style={{ animationDelay: `${tierIndex * 0.1 + index * 0.05}s` }}
                  >
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {company.logo}
                    </div>
                    <h4 className="font-orbitron font-bold text-lg text-gradient">
                      {company.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
            Collaborators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Amazing partners supporting our hackathon community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {collaborators.map((collaborator, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover-glow group transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {collaborator.logo}
              </div>
              <h4 className="font-bold text-sm mb-1">{collaborator.name}</h4>
              <p className="text-xs text-muted-foreground">{collaborator.type}</p>
            </div>
          ))}
        </div>
        */}

        {/* Become a Sponsor CTA */}
        <div className="text-center glass-card p-12">
          <h3 className="text-3xl font-orbitron font-bold text-gradient mb-4">
            Become a Sponsor
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in empowering the next generation of innovators at RV University and showcase your brand to brilliant minds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/1WgIR1GItXloyn-Z489EFoU8v9agy2m2U/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-cyber text-foreground font-orbitron font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-glow-primary"
            >
              Partnership Deck
            </a>
            <a
              href="mailto:club_viksha@rvu.edu.in"
              className="px-8 py-4 border border-primary/50 text-primary font-orbitron font-bold rounded-xl hover:bg-primary/10 transition-all duration-300 text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;