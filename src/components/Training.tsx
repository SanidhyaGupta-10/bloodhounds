import { Target, Dumbbell, Heart, Footprints, Flame, Swords } from "lucide-react";

const Training = () => {
  const methods = [
    { icon: Target, name: "Pad Work", description: "Precision striking with focus mitts" },
    { icon: Dumbbell, name: "Heavy Bag Work", description: "Power and conditioning drills" },
    { icon: Footprints, name: "Roadwork", description: "Building endurance and stamina" },
    { icon: Heart, name: "Conditioning", description: "Mental and physical toughness" },
    { icon: Flame, name: "Strength Training", description: "Building fighter's physique" },
    { icon: Swords, name: "Martial Arts Specific", description: "Technique refinement" },
  ];

  return (
    <section id="training" className="py-24 px-4 relative bg-noise">
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blood/10 rounded-full blur-[120px] z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Training <span className="text-gradient-blood">Methods</span>
          </h2>
          <p className="text-muted-foreground font-body">
            How we forge warriors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <div 
              key={method.name}
              className="group relative p-6 rounded-xl bg-gradient-to-b from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-gradient-blood transition-all duration-300">
                  {method.name}
                </h3>
                
                <p className="text-muted-foreground font-body text-sm">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
