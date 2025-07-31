import { useEffect, useState } from 'react';
import { 
  Globe, 
  Palette, 
  Smartphone, 
  Package, 
  Bot, 
  GraduationCap, 
  Settings,
  Code
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Portfolio, Business, E-commerce",
    details: "Responsive, fast-loading websites tailored to your brand"
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Brand Identity & Visual Design",
    details: "Professional logos that capture your brand essence"
  },
  {
    icon: Smartphone,
    title: "UI/UX & Prototyping",
    description: "User Experience Design",
    details: "Intuitive interfaces that convert and engage users"
  },
  {
    icon: Package,
    title: "Brand Building",
    description: "Complete Brand Solutions",
    details: "Comprehensive branding packages for market impact"
  },
  {
    icon: Bot,
    title: "AI Chatbot Integration",
    description: "Intelligent Automation",
    details: "Smart chatbots to enhance customer experience"
  },
  {
    icon: GraduationCap,
    title: "Student Project Support",
    description: "Academic & Learning Projects",
    details: "Mentoring and development for student initiatives"
  },
  {
    icon: Settings,
    title: "Bug Fix & Maintenance",
    description: "Website Optimization",
    details: "Ongoing support to keep your site running smoothly"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored Solutions",
    details: "Bespoke applications built for your specific needs"
  }
];

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.service-card-trigger');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your business and bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card-trigger service-card group cursor-pointer transition-all duration-500 ${
                  isVisible 
                    ? 'animate-scale-in opacity-100' 
                    : 'opacity-0 transform scale-95'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-primary/80 font-medium mb-2">
                  {service.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.details}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see what you're looking for? We love custom challenges!
          </p>
          <button 
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-card border border-border px-8 py-3 rounded-xl hover:bg-secondary transition-colors duration-300"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;