import { useState } from "react";

interface Fighter {
  name: string;
  stageName: string;
  initial: string;
}

const Fighters = () => {
  const fighters: Fighter[] = [
    { name: "Vinny", stageName: "Grim Reaper", initial: "V" },
    { name: "Rhyan", stageName: "Sharpshooter", initial: "R" },
    { name: "Mohit", stageName: "Martial Mohit", initial: "M" },
    { name: "Amit", stageName: "Forgotten Prince", initial: "A" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="fighters" className="py-24 px-4 relative bg-noise">
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(180deg, hsl(0, 0%, 5%) 0%, hsl(0, 0%, 8%) 50%, hsl(0, 0%, 5%) 100%)' }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Fighter <span className="text-gradient-gold">Profiles</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Meet the pack
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {fighters.map((fighter, index) => (
            <div 
              key={fighter.name}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                relative aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all duration-500
                ${hoveredIndex === index ? 'border-accent glow-blood-intense scale-105' : 'border-border hover:border-primary/50'}
              `}>
                {/* Placeholder with initial */}
                <div className="absolute inset-0 bg-gradient-to-b from-card to-steel flex items-center justify-center">
                  <span className="text-8xl md:text-9xl font-display font-bold text-primary/20">
                    {fighter.initial}
                  </span>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {fighter.name}
                  </h3>
                  <p className={`font-display text-sm tracking-widest transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-accent' : 'text-primary'
                  }`}>
                    "{fighter.stageName}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fighters;
