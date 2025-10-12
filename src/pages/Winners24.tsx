import { Navbar } from "@/components/argonyx24/Navbar";
import { Trophy, Users } from "lucide-react";
import teamMFSS from "@/assets/argonyx24/Team_MFSS.webp";
import OriginDev from "@/assets/argonyx24/originDev.webp";
import OkComputer from "@/assets/argonyx24/OkComputer.webp";
import gitbashers from "@/assets/argonyx24/gitbashers.webp";
import Owin from "@/assets/argonyx24/0(win).webp";
import MIPA from "@/assets/argonyx24/mipa.webp";
import hackattack from "@/assets/argonyx24/hackattack.webp";
import scriptify from "@/assets/argonyx24/scriptify.webp";
import HAC from "@/assets/argonyx24/HAC.jpg";

export const Winners24 = () => {
  const aimlWinners = [
    { position: "Winner", team: "Team_MFSS", members: ["Francis Maria Sharan", "Shreyank SH", "Saatvik B Hampiholi"], university: "RV University", prize: "₹10,000", photo: teamMFSS },
    { position: "First Runner Up", team: "OriginDev", members: ["Bommireddy C Nishant Reddy", "Dhanush S Gowda", "Shayan Azmi"], university: "RV University", prize: "₹6,000", photo: OriginDev },
    { position: "Second Runner Up", team: "OkComputer", members: ["Ansul Kumar", "Alderin Shanty", "Akhil Ramchand", "Mohammed Amaan Thayyil"], university: "Christ University", prize: "₹4,000", photo: OkComputer },
  ];

  const webDevWinners = [
    { position: "Winner", team: "O(Win)", members: ["K Vijay", "Shashidhar BM", "K Mohamad Hussain", "GRVS Sai Suveer"], university: "BMSCE", prize: "₹10,000", photo: Owin },
    { position: "First Runner Up", team: "MIPA BYTES", members: ["Joseph Rejo Mathew", "Sreeharsha Tallapalli", "Sai Arun Kumar", "Ishan Shekhar Prasad"], university: "RVCE", prize: "₹6,000", photo: MIPA },
    { position: "Second Runner Up", team: "HackAttack", members: ["Rijo Simon TM", "Mohith N", "S Sandeep Kumar", "Pavan C Shekar"], university: "REVA", prize: "₹4,000", photo: hackattack },
  ];

  const consolationWinners = [
    { title: "Best Web Scraping", team: "Gitbashers", members: ["Harshit Saroha", "Akshat Arya", "Amol Vyas", "Akshat Gupta"], university: "RVCE", prize: "Consolation Prize", track: "AIML", photo: gitbashers },
    { title: "Excellent Frontend", team: "Scriptify", members: ["Saanvi R Prabhu", "Suhani Lalla", "Avishi Sarda"], university: "RV University", prize: "Consolation Prize", track: "Web Dev", photo: scriptify },
    { title: "Excellent Features", team: "HAC", members: ["Chitrita BS", "Chirudeep Kuralla", "Harshith Bezawada", "Adithya B"], university: "MSRIT", prize: "Consolation Prize", track: "Web Dev", photo: HAC },
  ];

  const renderWinnerCard = (winner: any, index: number, color: string, isMainWinner = false) => (
    <div key={index} className={`glass-card p-8 hover-glow group`}>
      <div className={`w-full ${isMainWinner ? "h-72" : "h-64"} mb-6 rounded-xl bg-gradient-glow border border-${color}/30 flex items-center justify-center overflow-hidden`}>
        {winner.photo ? (
          <img src={winner.photo} alt={winner.team} className="w-full h-full object-cover" />
        ) : (
          <Users className={`w-24 h-24 text-${color}/50`} />
        )}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Trophy className={`w-6 h-6 text-${color}`} />
        <h3 className="text-2xl font-orbitron font-bold text-foreground">{winner.position}</h3>
      </div>

      <h4 className="text-xl font-orbitron font-bold text-foreground mb-2">{winner.team}</h4>

      <div className="space-y-2 mb-4">
        <p className="text-muted-foreground"><span className="font-semibold">Members:</span> {winner.members.join(", ")}</p>
        <p className="text-muted-foreground"><span className="font-semibold">University:</span> {winner.university}</p>
      </div>

      <div className={`inline-block bg-${color}/10 border border-${color}/30 rounded-lg px-4 py-2`}>
        <span className={`text-${color} font-bold text-lg`}>{winner.prize}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 px-4 py-20 text-center">
          <h1 className="text-6xl md:text-7xl font-orbitron font-black text-gradient mb-4">
            ARGONYX '24
          </h1>
          <p className="text-2xl md:text-3xl text-cyan font-orbitron font-semibold">Winners</p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-orbitron font-black text-gradient text-center mb-4">
              AI/ML Track <span className="text-secondary">Winners</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Celebrating innovation in Artificial Intelligence and Machine Learning
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aimlWinners.map((winner, index) => renderWinnerCard(winner, index, "cyan", index === 0))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-orbitron font-black text-gradient text-center mb-4">
              Web Development Track <span className="text-secondary">Winners</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Celebrating excellence in modern web applications
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webDevWinners.map((winner, index) => renderWinnerCard(winner, index, "magenta", index === 0))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-orbitron font-black text-gradient mb-4">
              <span className="text-secondary">Consolation Prizes</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Recognizing exceptional contributions and outstanding innovation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consolationWinners.map((winner, index) => (
                <div key={index} className="glass-card p-8 hover-glow group">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-3xl font-orbitron font-bold text-white">{winner.title}</h3>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                      {winner.track}
                    </span>
                  </div>

                  <Trophy className="w-10 h-10 text-yellow-400 mx-auto my-4" />
                  <h4 className="text-2xl font-orbitron font-bold text-white">Team {winner.team}</h4>
                  <p className="text-muted-foreground mb-6">{winner.university}</p>

                  <div className="w-full h-72 rounded-xl overflow-hidden border border-purple-400/40 mb-6">
                    <img src={winner.photo} alt={winner.team} className="w-full h-full object-cover" />
                  </div>

                  <div className="space-y-1 text-foreground">
                    {winner.members.map((member: string, i: number) => (
                      <p key={i}>{member}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Winners24;
