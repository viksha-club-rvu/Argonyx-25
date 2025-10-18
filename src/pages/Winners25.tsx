import WinnerCard from "@/components/WinnerCard";
import Navigation from "@/components/Navigation";
import winner1 from "@/assets/winner1.jpg";
import winner2 from "@/assets/winner2.jpg";
import winner3 from "@/assets/winner3.jpg";
import runanywhere1 from "@/assets/run-anywhere1.jpg";
import runanywhere2 from "@/assets/run-anywhere2.jpg";

const winners = [
  {
    position: 1 as const,
    teamName: "Html Hokage",
    members: ["Vinit Kumar", "Korou Waikhom", "Aayush Rana", "Pushpak Chakrabory"],
    college: "SJC Institute Of Technology",
    photo: winner1,
  },
  {
    position: 2 as const,
    teamName: "matrix minds 07",
    members: ["Sankara Narayana SV", "Anjana S", "Jothi Prakasam R"],
    college: "Sri Sairam Institute of Technology",
    photo: winner2,
  },
  {
    position: 3 as const,
    teamName: "IOTRONICS",
    members: ["Rounak Vyas", "Sankalp Vyas", "Lakshmy S", "Tanushri Vijayganesh"],
    college: "Nitte Meenakshi Institute of Technology",
    photo: winner3,
  },
];

const sponsorWinners = [
  {
    position: "sponsor" as const,
    teamName: "Hackistanis",
    members: ["Shreyas Naik", "Anshul Vaibhav", "Gaurav Durge"],
    college: "Ramaiah Institute of Technology",
    photo: runanywhere1,
    track: "RunAnywhere.ai",
  },
  {
    position: "sponsor" as const,
    teamName: "Meta Minds",
    members: ["Varsha Lokesh", "Thanvi Kiran Bhat", "Yamini K Shetty"],
    college: "RV University",
    photo: runanywhere2,
    track: "RunAnywhere.ai",
  },
];

export default function Winners25() {
  return (
    <>
      <Navigation />
      <section id="winners" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-25" />

        {/* Floating dots background */}
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
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-orbitron font-bold text-gradient mb-4">
              ARGONYX'25 WINNERS
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Celebrating the top innovators and problem-solvers of{" "}
              <strong>ARGONYX'25</strong> — champions who turned ideas into impact.
            </p>
          </div>

          {/* 🥇 1st Winner */}
          <div className="flex justify-center mb-16">
            <WinnerCard {...winners[0]} />
          </div>

          {/* 🥈 🥉 2nd and 3rd Winners */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-20">
            {winners.slice(1).map((winner) => (
              <WinnerCard key={winner.position} {...winner} />
            ))}
          </div>

          {/* 🧠 RunAnywhere.ai Section */}
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-gradient mb-4">
              RunAnywhere.ai Track Winners
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Honoring the brightest solutions from the <b>Sponsor Innovation Track</b> powered by RunAnywhere.ai.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8">
            {sponsorWinners.map((winner, i) => (
              <WinnerCard key={i} {...winner} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
