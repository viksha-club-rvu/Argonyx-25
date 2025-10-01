import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import clubLogo1Light from '@/assets/viksha.png';
import clubLogo1Dark from '@/assets/viksha_d.png';
import clubLogo2Light from '@/assets/ecell.png';
import clubLogo2Dark from '@/assets/ecell_d.png';
import clubLogo3 from '@/assets/club-logo-3.svg'; 

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Open Theme', href: '#problems' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Prize', href: '#winners' },
    { label: 'Sponsors', href: '#sponsors' },
  ];

  const clubLogos = [
    { src: theme === 'dark' ? clubLogo1Dark : clubLogo1Light, alt: 'Viksha' },
    { src: theme === 'dark' ? clubLogo2Dark : clubLogo2Light, alt: 'ECell' },
    { src: clubLogo3, alt: 'IEEE RVU' }, 
  ];

  return (
    <TooltipProvider>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-xl bg-background/80' : 'bg-transparent'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Title only on left */}
          <a href="/" className="text-lg md:text-xl font-orbitron font-bold text-gradient">
            ARGONYX '25
          </a>

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
            {/* Club Logos */}
            <div className="flex items-center mr-3">
              {clubLogos.map((logo, index) => (
                <div key={index} className="flex items-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="w-14 h-10 flex items-center justify-center rounded-md transition-all duration-300 hover:scale-110 cursor-pointer"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="text-xs">
                      <p>{logo.alt}</p>
                    </TooltipContent>
                  </Tooltip>
                  {index < clubLogos.length - 1 && (
                    <span className="text-muted-foreground mx-1">×</span>
                  )}
                </div>
              ))}
            </div>

            <ThemeToggle />

            <a
              href="https://unstop.com/hackathons/argonyx25-kalpavikas-10-rv-university-1563627"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cyber" size="sm">
                Register Now
              </Button>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            {/* Club Logos for mobile */}
            <div className="flex items-center">
              {clubLogos.map((logo, index) => (
                <div key={index} className="flex items-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="w-10 h-8 flex items-center justify-center rounded-md transition-all duration-300 hover:scale-110 cursor-pointer"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="text-xs">
                      <p>{logo.alt}</p>
                    </TooltipContent>
                  </Tooltip>
                  {index < clubLogos.length - 1 && (
                    <span className="text-muted-foreground mx-0.5">×</span>
                  )}
                </div>
              ))}
            </div>

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
            <a
              href="https://unstop.com/hackathons/argonyx25-kalpavikas-10-rv-university-1563627"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cyber" size="sm" className="w-full mt-4">
                Register Now
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
    </TooltipProvider>
  );
};

export default Navigation;