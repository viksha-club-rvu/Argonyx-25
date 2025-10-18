import { Trophy } from "lucide-react";

interface WinnerCardProps {
  position: number | "sponsor";
  teamName: string;
  members: string[];
  college: string;
  photo: string;
  track?: string;
}

export default function WinnerCard({
  position,
  teamName,
  members,
  college,
  photo,
  track,
}: WinnerCardProps) {
  const getPositionClass = () => {
    switch (position) {
      case 1:
        return "w-full sm:w-[22rem] md:w-[26rem] lg:w-[30rem] h-[22rem] md:h-[26rem] lg:h-[30rem]";
      case 2:
        return "w-full sm:w-[20rem] md:w-[24rem] lg:w-[28rem] h-[20rem] md:h-[24rem] lg:h-[28rem]";
      case 3:
        return "w-full sm:w-[18rem] md:w-[22rem] lg:w-[26rem] h-[18rem] md:h-[22rem] lg:h-[26rem]";
      default:
        return "w-full sm:w-[20rem] md:w-[24rem] lg:w-[28rem] h-[20rem] md:h-[24rem] lg:h-[28rem]";
    }
  };

  const getBadgeText = () => {
    if (typeof position === "number") {
      if (position === 1) return "1st Place";
      if (position === 2) return "2nd Place";
      if (position === 3) return "3rd Place";
      return `${position}th Place`;
    }
    // Never show "Sponsor Track"
    return "";
  };

  const getTrophyColor = () => {
    switch (position) {
      case 1:
        return "text-yellow-400";
      case 2:
        return "text-gray-300";
      case 3:
        return "text-amber-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div
      className={`glass-card ${getPositionClass()} p-0 overflow-hidden group hover-glow transition-all duration-500 hover:scale-105 flex flex-col justify-between`}
    >
      {/* Image Section */}
      <div className="relative flex-grow overflow-hidden bg-background/20 flex items-center justify-center">
        <img
          src={photo}
          alt={teamName}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Trophy animation for Top 3 */}
        {typeof position === "number" && position <= 3 && (
          <div className="absolute top-3 left-3 animate-float-trophy">
            <Trophy
              className={`w-6 h-6 sm:w-8 sm:h-8 ${getTrophyColor()} drop-shadow-lg group-hover:animate-spin-slow`}
            />
          </div>
        )}

        {/* Position Badge (hide for sponsors) */}
        {getBadgeText() && (
          <div className="absolute top-3 right-3 bg-gradient-cyber text-background dark:text-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            {getBadgeText()}
          </div>
        )}

        {/* Track Badge (always show if defined) */}
        {track && (
          <div className="absolute bottom-3 left-3 bg-gradient-cyber text-background dark:text-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            {track}
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="p-4 flex flex-col justify-center text-center">
        <h3 className="font-orbitron text-lg sm:text-xl font-bold text-gradient mb-2">
          {teamName}
        </h3>
        <p className="text-sm text-muted-foreground mb-1">
          <strong>Members:</strong> {members.join(", ")}
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>College:</strong> {college}
        </p>
      </div>
    </div>
  );
}
