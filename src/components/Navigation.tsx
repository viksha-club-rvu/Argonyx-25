import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import clubLogo1Light from '@/assets/viksha.png';
import clubLogo1Dark from '@/assets/viksha_d.png';
import clubLogo2Light from '@/assets/ecell.png';
import clubLogo2Dark from '@/assets/ecell_d.png';
import clubLogo3 from '@/assets/club-logo-3.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '/#about' },
    { label: `Gallery '25`, href: '/#gallery' },
    { label: 'Prize', href: '/#winners' },
    { label: 'Sponsors', href: '/#sponsors' },
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
            {/* Title */}
            <a
              href="/"
              className="text-lg md:text-xl font-orbitron font-bold text-gradient"
            >
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

              {/* Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => {
                  setTimeout(() => setIsDropdownOpen(false), 1000);
                }}
              >
                <button
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Past Events <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-40 bg-background border border-border rounded-lg shadow-lg"
                    onMouseEnter={() => setIsDropdownOpen(true)}  
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <a
                      href="/argonyx24"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary rounded-md transition"
                    >
                      Argonyx '24
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center mr-3">
                {clubLogos.map((logo, index) => (
                  <div key={index} className="flex items-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="w-14 h-10 flex items-center justify-center rounded-md transition-all duration-300 hover:scale-110 cursor-pointer">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="w-full h-full object-contain rounded-md"
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

              {/* Dropdown in Mobile */}
              <div className="border-t border-border pt-3">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  Past Events
                </p>
                <a
                  href="/argonyx24"
                  className="block text-sm text-muted-foreground hover:text-primary transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Argonyx '24
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </TooltipProvider>
  );
};

export default Navigation;
