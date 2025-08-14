import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'animate-float' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl text-white text-3xl font-bold shadow-[var(--shadow-glow)]">
              CZ
            </div>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About CodeZential
            </span>
          </h2>

          <p className={`text-xl md:text-2xl text-muted-foreground mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            We're CodeZential — a modern tech agency helping individuals, students, and startups build digital impact.
          </p>

          <div className={`max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed transition-all duration-700 delay-400 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <p className="mb-6">
              Founded on the principle that exceptional digital experiences shouldn't be exclusive to large corporations, 
              CodeZential bridges the gap between cutting-edge technology and accessible solutions.
            </p>
            
            <p className="mb-6">
              Our team of passionate developers, designers, and strategists specializes in transforming ideas into 
              powerful digital realities. Whether you're a student with a revolutionary concept, a startup ready to 
              disrupt your industry, or an individual seeking to establish your digital presence, we provide the 
              technical expertise and creative vision to bring your projects to life.
            </p>

            <p>
              At CodeZential, we don't just build websites and applications — we craft digital experiences that 
              convert visitors into customers, ideas into innovations, and visions into reality.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-700 delay-600 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
              <p className="text-muted-foreground">Leveraging the latest technologies to create future-ready solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Client-Centric</h3>
              <p className="text-muted-foreground">Your success is our mission, every project is a partnership</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality & Speed</h3>
              <p className="text-muted-foreground">Delivering exceptional results without compromising on timeline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;