import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import bloodhoundsLogo from "@/assets/bloodhounds-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noise">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Red glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blood/20 rounded-full blur-[150px] z-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo Image */}
        <div className="mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <img 
            src={bloodhoundsLogo} 
            alt="BLOODHOUNDS Logo" 
            className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain drop-shadow-[0_0_30px_hsl(0,85%,30%/0.5)]"
          />
        </div>
        
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 text-gradient-blood animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          BLOODHOUNDS
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground font-body font-light tracking-wide mb-8 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          Martial Arts Community
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Button variant="hero" size="xl" asChild>
            <a 
              href="https://instagram.com/sourceofhounds" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Instagram className="w-5 h-5" />
              Join Instagram Community
            </a>
          </Button>
        </div>

        {/* Tagline */}
        <div 
          className="mt-16 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="text-muted-foreground font-display text-lg tracking-widest">
            DISCIPLINE • LOYALTY • RESPECT • WARRIOR MINDSET
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
