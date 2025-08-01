import { useEffect, useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Briefcase,
  Calendar,
  TrendingUp
} from 'lucide-react';

const activeProjects = [
  {
    title: "InsightPro",
    type: "InsightPro Dashboard",
    icon: ShoppingCart,
    description: "Your Smart Dashboard for a Greener Future",
    progress: 41 ,
    technologies: ["React.js", "Django", "AI Integration"],
    status: "Design Phase",
    estimatedCompletion: "1 week",
    image: "bg-gradient-to-br from-green-500 to-teal-600"
  },
  {
    title: "Ridham Portfolio",
    type: "Portfolio Website",
    icon: Briefcase,
    description: "Modern portfolio website for a Full Stack Developer",
    progress: 90,
    technologies: ["React", "Tailwind", "Framer Motion"],
    status: "In Development",
    estimatedCompletion: "3 days",
    image: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  
];

const ActiveProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projects = document.querySelectorAll('.project-card-trigger');
    projects.forEach(project => observer.observe(project));

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development': return 'bg-primary';
      case 'Design Phase': return 'bg-yellow-500';
      case 'Prototyping': return 'bg-orange-500';
      case 'Testing': return 'bg-green-500';
      default: return 'bg-muted';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Live Projects</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Active Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what we're currently working on and get a glimpse of our development process
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {activeProjects.map((project, index) => {
            const Icon = project.icon;
            const isVisible = visibleProjects.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`project-card-trigger group transition-all duration-700 ${
                  isVisible 
                    ? 'animate-scale-in opacity-100' 
                    : 'opacity-0 transform scale-95'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02]">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${project.image} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.type}</p>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-primary font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${project.progress}%` : '0%',
                          transitionDelay: `${index * 150 + 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-xs rounded-md text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>ETA: {project.estimatedCompletion}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-500 font-medium">Live</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">2</div>
            <div className="text-sm text-muted-foreground">Active Projects</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <div className="text-2xl font-bold mb-1 text-green-500">67%</div>
            <div className="text-sm text-muted-foreground">On Schedule</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <div className="text-2xl font-bold mb-1 text-primary">2</div>
            <div className="text-sm text-muted-foreground">This month</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <div className="text-2xl font-bold mb-1 text-accent">24/7</div>
            <div className="text-sm text-muted-foreground">Development</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see your project featured here?
          </p>
          <button 
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-card border border-border px-6 py-3 rounded-xl hover:bg-secondary transition-colors duration-300 inline-flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActiveProjectsSection;