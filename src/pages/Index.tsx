import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rules from "@/components/Rules";
import Training from "@/components/Training";
import Event from "@/components/Event";
import Fighters from "@/components/Fighters";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Rules />
      <Training />
      <Event />
      <Fighters />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
