import React from "react";
import { Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function MeetWinnersJudges() {
  return (
    <section className="relative py-20 px-4 bg-background/50 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-orbitron font-bold text-gradient mb-6">
          Meet Our Judges & Winners
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10">
          The ARGONYX'25 winners have been announced and the judges have shared their insights. Explore the brilliant minds and celebrate their achievements.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            to="/winners25"
            className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-background font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/40"
          >
            <Trophy className="w-5 h-5" /> See Winners
          </Link>

          <Link
            to="/judges25"
            className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-accent to-secondary rounded-lg text-background font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-accent/40"
          >
            <Users className="w-5 h-5" /> Meet Judges
          </Link>
        </div>
      </div>
    </section>
  );
}
