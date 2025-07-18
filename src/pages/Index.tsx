import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap, Globe, Building2, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import varnanLogo from "@/assets/varnan-logo.png";

const Index = () => {
  const navigate = useNavigate();
  const logos = [
    { name: "Product Hunt", icon: TrendingUp },
    { name: "Hacker News", icon: Zap },
    { name: "IndieHackers", icon: Users },
    { name: "BetaList", icon: Star },
    { name: "TechCrunch", icon: Globe }
  ];

  const testimonials = [
    {
      name: "Avi Saxena",
      title: "Founder, Stealth SaaS",
      quote: "Looply's GTM strategy was a mystery… until this tool made it a meme.",
      avatar: "AS"
    },
    {
      name: "Chitra Patel", 
      title: "CEO, Synclytics AI",
      quote: "Honestly thought it was a YC interview simulator. Still impressed.",
      avatar: "CP"
    },
    {
      name: "Luka N",
      title: "Product @ Vibecheck Inc.",
      quote: "The fake report was better than our real pitch deck.",
      avatar: "LN"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-8">
              <img src={varnanLogo} alt="Varnan" className="h-12 md:h-16" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let Our AI Decode Your{" "}
              <span className="gradient-text">GTM Strategy</span>{" "}
              in 60 Seconds
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Generate hyper-personalized GTM insights for your startup using our proprietary GenAI system.
            </p>
            <Button 
              variant="glass" 
              size="lg" 
              className="text-lg px-8 py-6 group"
              onClick={() => navigate('/form')}
            >
              Start Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-lg mb-8">As seen on</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {logos.map((logo, index) => (
                <div key={index} className="glass-card p-4 md:p-6 group hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3">
                    <logo.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">{logo.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What founders are saying
            </h2>
            <p className="text-xl text-muted-foreground">
              Real insights from real founders who tried our AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="font-bold text-primary">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={varnanLogo} alt="Varnan" className="h-6" />
            <span className="text-lg font-medium">Built with ❤️ by Varnan Labs</span>
          </div>
          <p className="text-muted-foreground">
            Real GTM strategies for AI-first startups
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
