import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface VerticalCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: 'primary' | 'secondary';
}

const VerticalCard = ({ title, description, features, icon: Icon, gradient }: VerticalCardProps) => {
  const gradientClass = gradient === 'primary' ? 'from-primary/20 to-secondary/20' : 'from-secondary/20 to-accent/20';
  const glowClass = gradient === 'primary' ? 'glow-primary' : 'glow-secondary';

  return (
    <div className={`glass-card p-8 h-full relative overflow-hidden group hover:${glowClass} transition-all duration-500`}>
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-cyber flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-foreground" />
          </div>
          <h3 className="text-2xl font-orbitron font-bold text-gradient mb-3">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-cyber" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <Button variant="ghost" className="w-full group-hover:bg-primary/20">
          Explore {title}
        </Button> */}
      </div>
    </div>
  );
};

export default VerticalCard;