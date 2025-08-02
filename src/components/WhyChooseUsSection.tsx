import { useEffect, useState } from 'react';
import { Zap, Award, HeartHandshake, Star } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality. Your project timeline is our priority."
  },
  {
    icon: Award,
    title: "Custom Design",
    description: "Unique solutions tailored to your brand. No templates, no shortcuts, just pure creativity."
  },
  {
    icon: HeartHandshake,
    title: "Reliable Support",
    description: "24/7 dedicated support team. We're here whenever you need assistance or have questions."
  }
];

const testimonials = [
  {
    name: "Ridham patel",
    role: "Student",
    content: "As a final year student, I needed a portfolio website for internships. CodeZential gave me exactly what I wanted — clean, responsive, and professional. Totally satisfied with the result!",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "Student Developer",
    content: "Amazing support for my academic project. The team guided me through every step and delivered beyond my expectations.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    content: "Professional, fast, and affordable. My e-commerce site has increased sales by 300% since launch!",
    rating: 5
  }
];

const WhyChooseUsSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const features = document.querySelectorAll('.feature-card-trigger');
    features.forEach(feature => observer.observe(feature));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Why Choose CodeZential?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with genuine care for your success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleFeatures.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`feature-card-trigger group transition-all duration-700 ${
                  isVisible 
                    ? 'animate-slide-in-left opacity-100' 
                    : 'opacity-0 transform -translate-x-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h3>
          
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-[var(--shadow-card)]">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-primary text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            {/* Testimonial Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;