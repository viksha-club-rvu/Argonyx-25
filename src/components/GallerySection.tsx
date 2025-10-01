import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.png';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.png';

const GallerySection = () => {
  const galleryImages = [
    {
      src: gallery1,
      alt: "ARGONYX '24 - Web Dev Track Winners",
      title: "Web Track Winners - Team O(win)"
    },
    {
      src: gallery2,
      alt: "ARGONYX '24 - Volunteers",
      title: "Organizing Committee"
    },
    {
      src: gallery3,
      alt: "ARGONYX '24 - Winners Celebration",
      title: "AI/ML Track Winners - Team_MFSS"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            ARGONYX '24 Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Relive the incredible moments from last year's hackathon. From intense coding sessions 
            to triumphant victories, here's a glimpse into the ARGONYX experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden group hover-glow transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-orbitron font-semibold text-black dark:text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Website Button */}
        <div className="text-center">
          <Button 
            variant="cyber" 
            size="lg"
            onClick={() => window.open('https://www.argonyx.in/', '_blank')}
            className="group"
          >
            <ExternalLink className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
            Visit ARGONYX '24 Website
          </Button>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default GallerySection;