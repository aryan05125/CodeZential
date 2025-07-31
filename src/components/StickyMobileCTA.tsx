import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const contactSection = document.getElementById('contact');
      
      if (heroSection && contactSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const contactTop = contactSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Show CTA after hero section and hide when contact section is visible
        setIsVisible(window.scrollY > heroBottom && scrollPosition < contactTop + 200);
        setIsContactVisible(scrollPosition >= contactTop + 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isContactVisible) return null;

  return (
    <div className={`fixed bottom-6 left-4 right-4 z-40 md:hidden transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <button
        onClick={scrollToContact}
        className="w-full btn-hero group justify-center animate-glow-pulse"
      >
        Start Your Project
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default StickyMobileCTA;