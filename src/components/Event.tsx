import { Calendar, MapPin, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const Event = () => {
  const fights = [
    { type: "Main Fight", fighter1: "Farhan", fighter2: "Shivam", highlight: true },
    { type: "Co-Main Fight", fighter1: "Arsalan", fighter2: "Leon", highlight: false },
    { type: "Free Fight", fighter1: "Akash", fighter2: "Shoaib", highlight: false },
  ];

  return (
    <section id="event" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background z-0" />
      
      {/* Red glow effects */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blood/15 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blood/10 rounded-full blur-[120px] z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Event Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Flame className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-display text-sm tracking-widest">UPCOMING EVENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            BLOODHOUNDS <span className="text-gradient-gold">005</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Mumbai's fiercest pack presents the fifth explosive event. 
            Come along with great energy and let's hunt greatness together.
          </p>
        </div>

        {/* Fight Card */}
        <div className="space-y-4 mb-12">
          {fights.map((fight, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-xl border transition-all duration-300 ${
                fight.highlight 
                  ? 'bg-gradient-to-r from-card via-primary/10 to-card border-primary/50 glow-blood' 
                  : 'bg-card border-border hover:border-primary/30'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <span className={`font-display text-sm tracking-widest ${fight.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                  {fight.type}
                </span>
                
                <div className="flex items-center gap-4 md:gap-8">
                  <span className={`font-display text-2xl md:text-3xl font-bold ${fight.highlight ? 'text-foreground' : 'text-foreground/80'}`}>
                    {fight.fighter1}
                  </span>
                  
                  <span className="font-display text-xl text-primary">VS</span>
                  
                  <span className={`font-display text-2xl md:text-3xl font-bold ${fight.highlight ? 'text-foreground' : 'text-foreground/80'}`}>
                    {fight.fighter2}
                  </span>
                </div>
                
                <div className="w-20" /> {/* Spacer for alignment */}
              </div>
            </div>
          ))}
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-body">Date</p>
              <p className="font-display text-lg font-semibold">25 January 2026</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-body">Venue</p>
              <p className="font-display text-lg font-semibold">Panchsheel Garden</p>
              <p className="text-sm text-muted-foreground">Near Kandivali Metro Station, Mahavir Nagar</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="animate-pulse-blood">
            Mark Your Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Event;
