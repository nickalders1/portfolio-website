
import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('work');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js featuring real-time inventory management and seamless payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with real-time charts and customizable widgets using D3.js and React.",
      tech: ["React", "D3.js", "TypeScript", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Mobile Design System",
      description: "Comprehensive design system and component library for mobile applications with extensive documentation.",
      tech: ["React Native", "Figma", "Storybook", "Jest"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning application for predictive analytics with interactive data exploration and automated reporting.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="work" className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-fluid-4xl font-display font-light mb-4">Selected Work</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8" />
          <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating 
            meaningful digital experiences through code and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Project List */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedProject === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                }`}
                onClick={() => setSelectedProject(index)}
                data-cursor-hover
              >
                <div className="border-l-4 border-transparent hover:border-black transition-colors duration-300 pl-6">
                  <h3 className="text-fluid-xl font-display font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Preview */}
          <div className={`sticky top-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Project Links */}
              <div className="absolute top-4 right-4 flex gap-3">
                <a
                  href={projects[selectedProject].link}
                  className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                  data-cursor-hover
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={projects[selectedProject].github}
                  className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                  data-cursor-hover
                >
                  <Github size={20} />
                </a>
              </div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-xl font-semibold mb-2">{projects[selectedProject].title}</h4>
                <p className="text-sm text-gray-200">{projects[selectedProject].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
