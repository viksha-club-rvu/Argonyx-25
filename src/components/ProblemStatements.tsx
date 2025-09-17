import { buttonVariants } from '@/components/ui/button';

const ProblemStatements = () => {
  return (
    <section id="problems" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
            Open Innovation Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This is an open theme hackathon - bring your own innovative ideas and build solutions that matter to you
          </p>
        </div>

        <div className="text-center glass-card p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-orbitron font-bold text-gradient mb-6">
            Your Ideas, Your Innovation
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Argonyx '25 is an open format hackathon where you have complete freedom to innovate. 
            Whether it's AI/ML, web development, mobile apps, or any cutting-edge technology - 
            the choice is yours. Build something you're passionate about and make it count!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
              <h4 className="font-orbitron font-bold text-lg text-gradient mb-3">
                Technology Freedom
              </h4>
              <p className="text-sm text-muted-foreground">
                Use any programming language, framework, or technology stack that fits your vision
              </p>
            </div>
            <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
              <h4 className="font-orbitron font-bold text-lg text-gradient mb-3">
                Creative Expression
              </h4>
              <p className="text-sm text-muted-foreground">
                Build solutions for real-world problems or explore innovative concepts you're passionate about
              </p>
            </div>
            <div className="p-6 rounded-xl bg-accent/10 border border-accent/20">
              <h4 className="font-orbitron font-bold text-lg text-gradient mb-3">
                Impact Focus
              </h4>
              <p className="text-sm text-muted-foreground">
                Create applications that can make a difference - from social impact to business innovation
              </p>
            </div>
          </div>

          <div
            aria-disabled="true"
            className={buttonVariants({ variant: 'cyber', size: 'lg', className: 'text-lg px-8 py-4 select-none' })}
          >
            Start Building Your Idea
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;