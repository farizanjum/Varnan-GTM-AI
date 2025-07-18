import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, User, Mail, Building, Globe, MessageSquare, Briefcase, Users } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  website: string;
  description: string;
  sector: string;
  teamSize: string;
}

const Form = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    website: "",
    description: "",
    sector: "",
    teamSize: ""
  });

  const sectors = ["Tech", "Finance", "SaaS", "Healthcare", "Consumer", "DeepTech", "GovTech", "Climate", "Education", "Other"];
  const teamSizes = ["1-5", "6-10", "11-25", "26-50", "50+"];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFirstSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.companyName) {
      setShowPopup(true);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.description && formData.sector && formData.teamSize) {
      // Store form data in sessionStorage for use in AI interface
      sessionStorage.setItem('gtmFormData', JSON.stringify(formData));
      navigate('/ai-interface');
    }
  };

  const progress = step === 1 ? 50 : 100;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="absolute left-0 top-0 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tell us about your startup
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Help our AI understand your business for better insights
          </p>
          <Progress value={progress} className="w-full h-2" />
          <p className="text-sm text-muted-foreground mt-2">Step {step} of 2</p>
        </div>

        {/* Main Form */}
        <div className="glass-card p-8">
          <form onSubmit={handleFirstSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="glass-button"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="glass-button"
                  required
                />
              </div>

              <div>
                <Label htmlFor="companyName" className="flex items-center gap-2 mb-2">
                  <Building className="h-4 w-4" />
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="glass-button"
                  required
                />
              </div>

              <div>
                <Label htmlFor="website" className="flex items-center gap-2 mb-2">
                  <Globe className="h-4 w-4" />
                  Company Website (optional)
                </Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="glass-button"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <Button type="submit" variant="glass" size="lg" className="w-full group">
              Next
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>

        {/* Popup Dialog */}
        <Dialog open={showPopup} onOpenChange={setShowPopup}>
          <DialogContent className="glass-card border-border/50 max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-2">
                Almost there...
              </DialogTitle>
              <p className="text-muted-foreground text-center mb-6">
                These help us make your GTM insights better:
              </p>
            </DialogHeader>
            
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              <div>
                <Label htmlFor="description" className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-4 w-4" />
                  What does your company do?
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="glass-button min-h-20"
                  placeholder="Describe your product or service..."
                  required
                />
              </div>

              <div>
                <Label htmlFor="sector" className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-4 w-4" />
                  Which sector best describes your company?
                </Label>
                <Select value={formData.sector} onValueChange={(value) => handleInputChange('sector', value)} required>
                  <SelectTrigger className="glass-button">
                    <SelectValue placeholder="Select sector" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-border/50">
                    {sectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="teamSize" className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4" />
                  Team Size
                </Label>
                <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)} required>
                  <SelectTrigger className="glass-button">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-border/50">
                    {teamSizes.map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" variant="glass" size="lg" className="w-full group">
                Generate My GTM Report with AI ⚡
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Form;