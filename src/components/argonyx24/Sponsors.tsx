import astraeLogo from "@/assets/argonyx24/astrae.jpg";
import engagexLogo from "@/assets/argonyx24/EngageX.jpg";

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-16 sm:py-20 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-orbitron font-black text-gradient mb-8 sm:mb-12">
            Our <span className="text-secondary">Sponsors</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="glass-card p-4 sm:p-6 hover-glow flex flex-col items-center">
              <div className="w-36 h-24 sm:w-48 sm:h-32 mb-2 sm:mb-4 rounded-xl bg-white/5 flex items-center justify-center p-2 sm:p-4">
                <img src={astraeLogo} alt="Astrae Research" className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-foreground">Astrae Research</h3>
            </div>

            <a href="https://engagex.app/" target="_blank" rel="noopener noreferrer" className="glass-card p-4 sm:p-6 hover-glow flex flex-col items-center">
              <div className="w-36 h-24 sm:w-48 sm:h-32 mb-2 sm:mb-4 rounded-xl bg-white/5 flex items-center justify-center p-2 sm:p-4">
                <img src={engagexLogo} alt="EngageX" className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-foreground">EngageX</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
