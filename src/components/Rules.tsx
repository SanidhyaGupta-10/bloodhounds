import { Check } from "lucide-react";

const Rules = () => {
  const rules = [
    "Respect every fighter",
    "No ego, only discipline",
    "Stay loyal to the pack",
    "Support each other's growth",
    "Train hard, stay consistent",
  ];

  return (
    <section id="rules" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Community <span className="text-gradient-blood">Rules</span>
          </h2>
          <p className="text-muted-foreground font-body">
            The code we live by
          </p>
        </div>

        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:translate-x-2"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Check className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <span className="font-display text-lg md:text-xl tracking-wide text-foreground">
                {rule}
              </span>
              <span className="ml-auto text-muted-foreground/30 font-display text-4xl font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
