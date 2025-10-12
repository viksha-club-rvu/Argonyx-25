import { Instagram, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 py-12 mt-20">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="relative z-10 container px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-orbitron font-black mb-4">
              <span className="text-gradient">ARGONYX</span>
              <span className="text-foreground">'25</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              The ultimate hackathon experience at RV University
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {["About", "Tracks", "Guidelines", "Sponsors"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-foreground">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>RV University, Bengaluru</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="mailto:contact@argonyx.in"
                  className="hover:text-secondary transition-colors"
                >
                  contact@argonyx.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="https://instagram.com/argonyx_rvu"
                  className="hover:text-accent transition-colors"
                >
                  @argonyx_rvu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ARGONYX. Organized by{" "}
            <span className="text-primary font-semibold">Kalpavikas 1.0</span> – RV University
          </p>
        </div>
      </div>
    </footer>
  );
};

