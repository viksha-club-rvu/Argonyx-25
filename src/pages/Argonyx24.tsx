import { Navbar } from "@/components/argonyx24/Navbar";
import { Hero } from "@/components/argonyx24/Hero";
import { About } from "@/components/argonyx24/About";
import { Tracks } from "@/components/argonyx24/Tracks";
import { Prizes } from "@/components/argonyx24/Prizes";
import { Sponsors } from "@/components/argonyx24/Sponsors";
import Volunteer from "@/components/argonyx24/Volunteers";

const Argonyx24 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Volunteer/>
      <Prizes />
      <Sponsors />
    </div>
  );
};

export default Argonyx24;
