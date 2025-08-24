import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto container-padding text-center text-white">
        <h1 className="heading-hero mb-6">
          Independent Commercial Brokerage in Dubai
        </h1>
        <p className="body-large mb-8 max-w-3xl mx-auto text-white/90">
          B2B deal sourcing, partner matchmaking, documentation liaison, and project coordination
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            className="bg-white text-primary hover:bg-white/90 hover:text-primary-hover"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-6 text-white/80">
            <a 
              href="tel:+971545437718" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+971-54-543-7718</span>
            </a>
            <a 
              href="mailto:mshopcb@gmail.com" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">mshopcb@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};