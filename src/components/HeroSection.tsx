import { ArrowRight, Code, Zap, Target } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      {/* Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Icons */}
          <div className="flex justify-center mb-8 space-x-6">
            <div className="p-3 bg-card rounded-2xl animate-bounce-in delay-[200ms]">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <div className="p-3 bg-card rounded-2xl animate-bounce-in delay-[400ms]">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <div className="p-3 bg-card rounded-2xl animate-bounce-in delay-[600ms]">
              <Target className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Code. Create. Convert.
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in delay-[300ms]">
            Custom Websites, Branding, AI & UI/UX Solutions
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in delay-[500ms]">
            We help individuals, students, and startups transform their digital presence with cutting-edge technology and innovative design.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in delay-[700ms]">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-hero group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 text-center animate-fade-in delay-[1000ms]">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">2+</div>
              <div className="text-muted-foreground">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">99%</div>
              <div className="text-muted-foreground">Clients satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
