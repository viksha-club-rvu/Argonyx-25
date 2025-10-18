import { Linkedin } from "lucide-react";

interface JudgeCardProps {
  photo: string;
  name: string;
  designation: string;
  linkedin: string;
}

export default function JudgeCard({ photo, name, designation, linkedin }: JudgeCardProps) {
  return (
    <div className="glass-card p-0 overflow-hidden group hover-glow transition-all duration-500 hover:scale-105 flex flex-col justify-between text-center shadow-md hover:shadow-xl">
      {/* Image Section */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-background/20 flex items-center justify-center">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 flex flex-col justify-center items-center">
        <h3 className="font-orbitron text-lg sm:text-xl font-bold text-gradient mb-1">
          {name}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-3">
          {designation}
        </p>

        {/* LinkedIn Button */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-cyber text-background dark:text-foreground px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-cyber"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
