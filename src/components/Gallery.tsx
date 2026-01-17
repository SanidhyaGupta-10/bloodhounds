import { useState } from "react";

const Gallery = () => {
  const categories = ["Training", "Sparring", "Workout", "Discipline"];
  const [activeCategory, setActiveCategory] = useState("Training");

  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-blood">Gallery</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Moments from the journey
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full font-display text-sm tracking-widest transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-primary text-primary-foreground glow-blood' 
                  : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="group relative aspect-square rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 bg-gradient-to-br from-steel to-card flex items-center justify-center">
                <span className="text-6xl font-display font-bold text-primary/10">
                  {activeCategory[0]}
                </span>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                <span className="font-display text-lg tracking-widest text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {activeCategory}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body mt-8 text-sm">
          Follow us on Instagram for more content
        </p>
      </div>
    </section>
  );
};

export default Gallery;
