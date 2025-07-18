import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Terminal, Sparkles } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  website: string;
  description: string;
  sector: string;
  teamSize: string;
}

const AIInterface = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [report, setReport] = useState({
    persona: "",
    channel: "",
    bottleneck: "",
    threat: "",
    conclusion: ""
  });

  // Load form data and generate random report
  useEffect(() => {
    const data = sessionStorage.getItem('gtmFormData');
    if (data) {
      const parsed = JSON.parse(data);
      setFormData(parsed);
      generateRandomReport();
    } else {
      navigate('/form');
    }
  }, [navigate]);

  const typingSequence = [
    "🧠 Thinking deeply about {company_name}...",
    "📡 Fetching trends in {sector} GTM space...",
    "🤖 Training model on 72 VC pitches and 5 TechCrunch headlines...",
    "⏳ Simulating 11,304 GTM possibilities...",
    "✅ Report ready! Here's what we think 👇"
  ];

  const reportData = {
    persona: [
      "Startup CFOs who think Excel macros = AI.",
      "Growth leads secretly using ChatGPT for everything.",
      "VCs who still reply on WhatsApp."
    ],
    channel: [
      "LinkedIn memes and cold DMs written by ChatGPT.",
      "Reddit AMAs and cofounder therapy sessions.",
      "Twitter/X and caffeine-fueled interns with ambition."
    ],
    bottleneck: [
      "Your ICP is more mysterious than OpenAI's board decisions.",
      "Positioning is solid… if 'AI-powered' is still a differentiator.",
      "You're solving a problem people haven't admitted they have."
    ],
    threat: [
      "A stealth mode team in Estonia is already doing this… better.",
      "Open source is eating your market. Again.",
      "A startup that raised $5M yesterday just pivoted into your space."
    ],
    conclusion: [
      "**Just kidding. I'm not real. But our team is.** [Book your real GTM session with Varnan →]",
      "**AI can hallucinate a GTM. But you still need humans to sell.** [Book your real GTM plan →]",
      "**That was fun. Now let's get serious.** [Work with Varnan Labs]"
    ]
  };

  const generateRandomReport = () => {
    setReport({
      persona: reportData.persona[Math.floor(Math.random() * reportData.persona.length)],
      channel: reportData.channel[Math.floor(Math.random() * reportData.channel.length)],
      bottleneck: reportData.bottleneck[Math.floor(Math.random() * reportData.bottleneck.length)],
      threat: reportData.threat[Math.floor(Math.random() * reportData.threat.length)],
      conclusion: reportData.conclusion[Math.floor(Math.random() * reportData.conclusion.length)]
    });
  };

  useEffect(() => {
    if (!formData) return;

    const runTypingSequence = async () => {
      for (let i = 0; i < typingSequence.length; i++) {
        setCurrentStep(i);
        setIsTyping(true);
        
        // Simulate typing delay
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1500));
        setIsTyping(false);
        
        // Pause between lines
        await new Promise(resolve => setTimeout(resolve, 800));
      }
      
      // Show the final report
      setTimeout(() => {
        setShowReport(true);
      }, 1000);
    };

    runTypingSequence();
  }, [formData]);

  const formatText = (text: string) => {
    if (!formData) return text;
    return text
      .replace('{company_name}', formData.companyName)
      .replace('{sector}', formData.sector);
  };

  const handleContinue = () => {
    navigate('/final-cta');
  };

  if (!formData) return null;

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Terminal Header */}
      <div className="border-b border-border/50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            <span className="text-sm">Varnan GTM AI Terminal</span>
          </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-8 max-w-4xl mx-auto">
        <div className="space-y-4 mb-8">
          {typingSequence.slice(0, currentStep + 1).map((line, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-primary">$</span>
              <span className="text-foreground">
                {formatText(line)}
                {index === currentStep && isTyping && (
                  <span className="animate-pulse ml-1">|</span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Report Output */}
        {showReport && (
          <div className="glass-card p-8 space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">⚙️ GTM Report for {formData.companyName}</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">🎯 Target Persona</h3>
                <p className="text-foreground">{report.persona}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">📣 Primary Acquisition Channel</h3>
                <p className="text-foreground">{report.channel}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">🧱 Bottleneck</h3>
                <p className="text-foreground">{report.bottleneck}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">🧠 Competitor Threat</h3>
                <p className="text-foreground">{report.threat}</p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="text-lg font-semibold text-primary mb-2">🧠 AI Conclusion</h3>
                <p className="text-foreground mb-6" dangerouslySetInnerHTML={{
                  __html: report.conclusion.replace(/\[([^\]]+)\]/g, '<span class="text-primary font-semibold">$1</span>')
                }}></p>
                
                <Button 
                  onClick={handleContinue}
                  variant="glass" 
                  size="lg" 
                  className="group"
                >
                  Continue
                  <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIInterface;