import { Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contacts = [
    { 
      icon: Instagram, 
      label: "Instagram", 
      value: "Sourceofhounds@instagram.com",
      href: "https://instagram.com/sourceofhounds"
    },
    { 
      icon: Mail, 
      label: "Business Inquiries", 
      value: "workwithkb108@gmail.com",
      href: "mailto:workwithkb108@gmail.com"
    },
  ];

  return (
    <footer id="contact" className="py-24 px-4 relative bg-noise">
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(180deg, hsl(0, 0%, 8%) 0%, hsl(0, 0%, 3%) 100%)' }}
      />
      
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blood/10 blur-[100px] z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-blood mb-4">
            BLOODHOUNDS
          </h2>
          <p className="text-muted-foreground font-body">
            Hunt Greatness Together
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-blood"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-body mb-1">{contact.label}</p>
                <p className="font-display text-foreground group-hover:text-primary transition-colors duration-300">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Social CTA */}
        <div className="text-center mb-16">
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://instagram.com/sourceofhounds" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Instagram className="w-5 h-5" />
              Follow @sourceofhounds
            </a>
          </Button>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground font-body text-sm">
              © 2024 BLOODHOUNDS. All rights reserved.
            </p>
            <p className="font-display text-sm tracking-widest text-muted-foreground/60">
              DISCIPLINE • LOYALTY • RESPECT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
