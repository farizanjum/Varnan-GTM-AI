import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/varnan-labs/gtm', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="glass-card p-12 space-y-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-glow">
              <Sparkles className="h-10 w-10 text-primary" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ready for a{" "}
            <span className="gradient-text">real GTM strategy?</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's move from fake insights to real growth.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={handleBookCall}
            variant="glass" 
            size="lg" 
            className="text-lg px-12 py-6 group"
          >
            <CalendarDays className="mr-3 h-6 w-6" />
            Talk to Varnan Labs
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Additional text */}
          <p className="text-sm text-muted-foreground mt-6">
            Book a free 30-minute GTM strategy session
          </p>
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Built with ❤️ by{" "}
            <span className="text-primary font-semibold">Varnan Labs</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;