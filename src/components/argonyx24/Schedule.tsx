import { Calendar, FileText, Award, Users, Rocket } from "lucide-react";

export const Schedule = () => {
  const scheduleItems = [
    {
      icon: Calendar,
      date: "8th November at 11:59 PM",
      title: "Registrations Close",
      description: "This is the final deadline for participants to register. Anyone interested in participating must complete their registration by this date. No further entries will be accepted after midnight on the 8th.",
      color: "cyan",
    },
    {
      icon: FileText,
      date: "9th November at 10:00 AM",
      title: "Problem Statement Release",
      description: "The 1st round begins with the release of the problem statement. Participants can start working on their solutions from this time.",
      color: "magenta",
    },
    {
      icon: FileText,
      date: "10th November at 12:00 PM",
      title: "Submission Deadline (PPT)",
      description: "Participants need to submit their solution in the form of a PowerPoint presentation (PPT) by noon. This is the cutoff for all submissions for the first round. Submissions after this time won't be accepted for evaluation.",
      color: "purple",
    },
    {
      icon: Award,
      date: "13th November",
      title: "Selected Teams Announced",
      description: "The top 15 teams from each track, advancing to the next round will be announced. Only shortlisted teams will be eligible to participate in the subsequent phases of the competition.",
      color: "cyan",
    },
    {
      icon: Users,
      date: "13th to 15th November",
      title: "Selected Teams Registration",
      description: "Shortlisted teams confirm their participation in the final round by registering within this period.",
      color: "magenta",
    },
    {
      icon: Rocket,
      date: "16th November and 17th November",
      title: "Offline Hackathon",
      description: "The final hackathon round is conducted in person and spans over 24 hours. During this time, teams will work intensively on their projects and present their solutions by the end of the session.",
      color: "purple",
    },
  ];

  return (
    <section id="schedule" className="py-20 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Event <span className="bg-gradient-primary bg-clip-text text-transparent">Schedule</span>
          </h2>

          <div className="space-y-6">
            {scheduleItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`backdrop-blur-xl bg-card/50 border border-${item.color}/20 rounded-2xl p-6 hover:border-${item.color}/50 transition-all duration-300 hover:shadow-glow-${item.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${item.color}/10 border border-${item.color}/30 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 text-${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-muted-foreground">{index + 1}.</span>
                        <span className={`text-sm font-semibold text-${item.color}`}>{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
