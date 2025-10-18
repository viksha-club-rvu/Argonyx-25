import Navigation from "@/components/Navigation";
import JudgeCard from "@/components/JudgeCard";
import judge1 from "@/assets/judge1.jpg";
import judge2 from "@/assets/judge2.jpg";
import judge3 from "@/assets/judge3.jpg";
import judge4 from "@/assets/judge4.jpg";
import judge5 from "@/assets/judge5.jpg";
import judge6 from "@/assets/judge6.jpg";
import judge7 from "@/assets/judge7.jpg";
import judge8 from "@/assets/judge8.jpg";
import judge9 from "@/assets/judge9.jpg";

const judges = [
  { photo: judge1, name: "NLS Murthy", designation: "General Manager @ Greenway Health India", linkedin: "https://www.linkedin.com/in/nlsmurthy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { photo: judge2, name: "Harpreet Sohal", designation: "Product Architect @ Decodes Ex-CTO @ KOALA", linkedin: "https://www.linkedin.com/in/harpsquatch?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { photo: judge3, name: "Mustafa Shariff", designation: "Founder @ Bengaluru Health Community and Director CEO @ Orbfocus Healthcare Services", linkedin: "https://www.linkedin.com/in/mustafa-shariff-0a0577162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { photo: judge4, name: "Swarup Ghosh", designation: "COO R&D Critical Information Protection Leader @ Nokia", linkedin: "https://www.linkedin.com/in/swarup-ghosh-isc2-ccsp%C2%AEus-dod-cism%C2%AE-cisa%C2%AE-crisc%C2%AE-cdpse%C2%AE-5153aa56?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { photo: judge5, name: "Arshdeep Singh", designation: "Founder and CEO @ Edock CEO @ Decodes", linkedin: "https://www.linkedin.com/in/065rsh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { photo: judge6, name: "Gopinathan Nandagopal", designation: "Associate Professor @ SoB, RV University", linkedin: "https://www.linkedin.com/in/gopinathan-nandagopal-8b163a113/" },
  { photo: judge7, name: "Ambika J", designation: "IEEE Senior Member and Solution Architect @ Finastra", linkedin: "https://www.linkedin.com/in/ambikaj" },
  { photo: judge8, name: "Biplab Guha", designation: "Entrepreneur @ Stealth Mode", linkedin: "https://www.linkedin.com/in/biplab-guha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { photo: judge9, name: "Suresh N", designation: "Assistant Professor @ SoCSE, RV University", linkedin: "https://www.linkedin.com/in/sureshrohitn/" },
];

export default function Judges25() {
  return (
    <>
      <Navigation />
      <section id="judges" className="py-20 px-4 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 cyber-grid opacity-25" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-orbitron font-bold text-gradient mb-4">
              ARGONYX'25 Judges
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet our panel of experts who bring experience, insight, and innovation to ARGONYX’25.
            </p>
          </div>

          {/* Judges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {judges.map((judge, i) => (
              <JudgeCard key={i} {...judge} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
