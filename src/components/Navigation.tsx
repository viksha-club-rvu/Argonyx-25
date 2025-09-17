import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';
// import clubLogo1 from '@/assets/club-logo-1.svg';
// import clubLogo2 from '@/assets/club-logo-2.svg';
// import clubLogo3 from '@/assets/club-logo-3.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Verticals', href: '#verticals' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Open Theme', href: '#problems' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Prize', href: '#winners' },
    { label: 'Sponsors', href: '#sponsors' },
  ];

  // const clubLogos = [
  //   { src: clubLogo1, alt: 'Viksha' },
  //   { src: clubLogo2, alt: 'ECell' },
  //   // { src: clubLogo3, alt: 'IEEE' }
  // ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-xl bg-background/80' : 'bg-transparent'
    }`}>
      {/* Club Logos Bar */}
      {/* <div className="bg-background/20 backdrop-blur-sm border-b border-card-border/10">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-8">
            {clubLogos.map((logo, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 glow-primary hover:glow-secondary"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* <div className="w-10 h-10 rounded-lg bg-gradient-cyber flex items-center justify-center">
              <span className="text-xl font-orbitron font-bold">A</span>
            </div> */}
            <a href="/" className="text-xl font-orbitron font-bold text-gradient">
              ARGONYX '25
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
              <a href="https://unstop.com/p/argonyx-25-rv-university-bangalore-1558242" target="_blank" rel="noopener noreferrer">
            <Button variant="cyber" size="sm">
              Register Now
            </Button>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-card/50 backdrop-blur-md flex items-center justify-center border border-card-border/20"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card p-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="https://unstop.com/p/argonyx-25-rv-university-bangalore-1558242" target="_blank" rel="noopener noreferrer">
            <Button variant="cyber" size="sm" className="w-full mt-4">
              Register Now
            </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;