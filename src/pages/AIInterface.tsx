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

  // 🚀 GTM Report Jokes Dataset (Extended)
  // ⚡️ 20+ Jokes per Section — Loaded with dark, Gen Z, industry-roast humor
  const reportData = {
    persona: [
      "Growth marketers who unironically say 'vibes'.",
      "Product managers addicted to frameworks but allergic to decisions.",
      "Gen Z founders building AI for people who hate AI.",
      "LinkedIn influencers looking for another SaaS affiliate code.",
      "CFOs who still think AI is short for 'Annual Income'.",
      "VCs who tweet 'betting on founders' while ghosting you.",
      "Solopreneurs building GPT wrappers like it's 2023.",
      "Corporate rebels who open Jira just to feel something.",
      "Ex-McKinsey operators now obsessed with TikTok attribution.",
      "Startups with 4 cofounders and zero alignment.",
      "Growth hackers whose entire funnel is AI-generated.",
      "SaaS founders who believe ICP = 'Influencer Content Persona'.",
      "Product leaders who only ship updates on Sundays.",
      "CTOs who use Midjourney for product design.",
      "B2B marketers who still use PDFs in 2025.",
      "Enterprise buyers who ghost harder than your last situationship.",
      "Founders who call Notion their 'source of truth'.",
      "The one guy on LinkedIn who replies with 'DM me'.",
      "AI bros pitching 'decentralized CRMs for Gen Alpha'.",
      "Product folks who think roadmap = vibe map."
    ],
    channel: [
      "Posting carousels on LinkedIn and calling it distribution.",
      "DMing YC alumni hoping for traction.",
      "Tweeting inspirational nonsense and calling it GTM.",
      "Buying email lists from Telegram.",
      "Reddit posts that get shadowbanned instantly.",
      "Trying to go viral on Threads. Still.",
      "Running an X ad campaign with $12 and a Canva banner.",
      "Asking your Discord server to 'share this with 5 friends'.",
      "Making a founder podcast with 3 plays (all your mom).",
      "Publishing a Substack series no one subscribed to.",
      "Cold emailing investors pretending they're users.",
      "Webinar with 1 speaker, 0 audience.",
      "Hiring a ghostwriter to post Naval-core thoughts.",
      "Sponsoring a newsletter that has more typos than readers.",
      "Influencer collab that ended with you getting ghosted.",
      "Running paid ads with zero tracking setup.",
      "Thinking memes = growth engine.",
      "Promoting tweets on a shadowbanned account.",
      "Referral program that pays in exposure.",
      "SEO strategy based on ChatGPT prompts."
    ],
    bottleneck: [
      "You talk about 'community' but haven't replied to a single comment.",
      "Your ICP changed 3 times during this sentence.",
      "Your funnel is a Rube Goldberg machine built in Zapier.",
      "You're confusing traction with clout.",
      "You think CAC is a vibe.",
      "You're optimizing for likes instead of pipeline.",
      "You call it 'word of mouth' but it's actually 'cofounder yelling into X'.",
      "Your landing page headline is literally just '✨AI for [industry]✨'.",
      "You ran paid ads before product onboarding.",
      "You built an entire GTM stack before shipping anything.",
      "Your demo form has 19 fields and one emoji.",
      "You use 9 tools for email and forgot to actually send any.",
      "You're AB testing before A is even working.",
      "You spent 3 weeks naming the company. No one remembers it.",
      "You have no churn because you have no users.",
      "Your brand voice is literally GPT-4.",
      "You thought 'launch on X' was a GTM motion.",
      "Your website is a vibe but your signup is broken.",
      "Your GTM advisor is just your cousin with Canva.",
      "You ran a Product Hunt launch before finishing your Stripe integration."
    ],
    threat: [
      "Your biggest competitor just got acquired by Adobe, somehow.",
      "A meme page is copying your features—better.",
      "Someone in Estonia shipped your product yesterday.",
      "An indie hacker built your MVP in public and got paying users.",
      "Your competitor raised $10M and still has worse UX than you.",
      "Someone on Hacker News just flamed your landing page.",
      "A ghost fork of your repo has more stars.",
      "That startup you laughed at in 2023 just IPO'd.",
      "An AI wrapper with your idea just went viral.",
      "Google launched it. Accidentally. In a blog post.",
      "Your old CTO cloned the repo and launched on IndieHackers.",
      "A no-code founder built your v2 already.",
      "Someone made your product into a Chrome extension.",
      "VCs are backing the cheaper version of you.",
      "The community edition of your tool has more users than your SaaS.",
      "You got featured on Product Hunt. They got acquired.",
      "A YouTuber roasted your UX and went viral.",
      "Your competitor has worse branding, better revenue.",
      "Someone launched your idea as an AI bot on Discord.",
      "The intern you fired now runs your competitor."
    ],
    conclusion: [
      "**You've been roasted. Now let's get serious.** [Book Varnan Labs →]",
      "**Enough hallucinations. Get a real GTM plan with Varnan.**",
      "**Your startup deserves better than jokes. Let's fix it.** [Varnan Labs →]",
      "**We don't just roast. We build.** [Varnan GTM strategy. Let's go →]",
      "**Seen enough fake insights? Let's get to work.** [Varnan Labs →]",
      "**Your CAC is crying. Let's help.** [Book Varnan Labs →]",
      "**Memes end here. Growth begins at Varnan.**",
      "**This parody brought to you by people who actually know GTM.** [Varnan Labs →]",
      "**Tired of vibes-based marketing? Same. Let's fix your GTM with Varnan.**",
      "**This is your sign. Stop hallucinating, start scaling.** [Varnan →]"
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