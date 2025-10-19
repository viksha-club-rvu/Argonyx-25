import { useState } from "react";
import volunteer1 from "@/assets/volunteer1.jpg";
import volunteer2 from "@/assets/volunteer2.jpg";
import volunteer3 from "@/assets/volunteer3.jpg";
import volunteer4 from "@/assets/volunteer4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const volunteers = [volunteer1, volunteer2, volunteer3, volunteer4];

export default function Volunteers25() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? volunteers.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === volunteers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-orbitron font-bold text-gradient mb-4">
          Meet Our Volunteers
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The amazing team making ARGONYX'25 possible.
        </p>
      </div>

      <div className="relative flex justify-center items-center">
        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute left-0 z-10 p-3 bg-background/70 hover:bg-background/90 rounded-full shadow-md transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        {/* Image Container */}
        <div className="relative w-full max-w-3xl h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] flex items-center justify-center overflow-hidden shadow-lg">
          <img
            src={volunteers[currentIndex]}
            alt={`Volunteer ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute right-0 z-10 p-3 bg-background/70 hover:bg-background/90 rounded-full shadow-md transition-all"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
}
