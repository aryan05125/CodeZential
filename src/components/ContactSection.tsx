import { Mail, Instagram, Linkedin, Facebook, ArrowRight } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "info.codezential@gmail.com",
    href: "mailto:info.codezential@gmail.com",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@codezential",
    href: "https://instagram.com/codezential.tech",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "CodeZential",
    href: "https://www.linkedin.com/in/code-zential-92ab4a377/",
    color: "from-blue-600 to-blue-500"
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "/codezential",
    href: "https://facebook.com/codezential",
    color: "from-blue-500 to-indigo-500"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Ready to transform your digital presence? We're excited to hear about your project and explore how we can bring your vision to life.
          </p>
          
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            Whether you're a startup with a game-changing idea, a student working on an innovative project, 
            or a business looking to enhance your digital footprint, CodeZential is here to turn your 
            concepts into compelling digital experiences.
          </p>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              
              return (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {method.value}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-4 h-4 text-primary mx-auto" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Drop us a message and let's discuss your project. We typically respond within 24 hours 
              and offer free consultations for all potential projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:info.codezential@gmail.com"
                className="btn-hero group inline-flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Send us an Email
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <span className="text-muted-foreground">or</span>
              
              <a
                href="https://www.instagram.com/codezential.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border px-6 py-3 rounded-xl hover:bg-secondary transition-colors duration-300 inline-flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                DM us on Instagram
              </a>
            </div>
          </div>

          {/* Response Time */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                Typically responds within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;