
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
    'UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Three.js', 'WebGL', 'GSAP'
  ];

  return (
    <section id="about" className="min-h-screen bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h2 className="text-fluid-4xl font-display font-light">
                About Me
              </h2>
              <div className="w-24 h-1 bg-black" />
            </div>
            
            <div className="space-y-6 text-fluid-base text-gray-700 leading-relaxed">
              <p>
                I'm a passionate creative developer with over 5 years of experience 
                crafting digital experiences that seamlessly blend form and function. 
                My journey began with a fascination for how design and technology 
                could work together to solve real-world problems.
              </p>
              
              <p>
                I specialize in creating interactive web applications, immersive user 
                interfaces, and digital art installations. My approach combines technical 
                expertise with creative vision to deliver solutions that not only work 
                flawlessly but also inspire and engage users.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                experimenting with generative art, or hiking in the mountains 
                seeking inspiration for my next project.
              </p>
            </div>
          </div>

          {/* Skills & Image */}
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-black rounded-lg" />
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-fluid-xl font-display font-medium">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className={`p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 cursor-default ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    data-cursor-hover
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
