import { Shield, Users, Target, Flame } from "lucide-react";

const About = () => {
  const values = [
    { icon: Shield, label: "Discipline" },
    { icon: Users, label: "Loyalty" },
    { icon: Target, label: "Respect" },
    { icon: Flame, label: "Warrior Mindset" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative bg-noise">
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(180deg, hsl(0, 0%, 5%) 0%, hsl(0, 0%, 8%) 100%)' }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-blood mb-6">
            About BLOODHOUNDS
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            BLOODHOUNDS is a rising martial arts community built on discipline, loyalty, 
            respect and warrior mindset. We hunt greatness together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div 
              key={value.label}
              className="group text-center p-6 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:glow-blood"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {value.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
