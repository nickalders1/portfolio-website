
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
    'JavaScript', 'TypeScript', 'Next.js', 'Node.js', 'Python',
    'UI/UX Design'
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
                I'm a passionate creative developer with a bit of self taught knowledge.
              </p>
              
              <p>
                I specialize in creating interactive web applications, Dicord bots in any way shape or form. My approach combines technical 
                expertise with creative vision to deliver solutions that not only work 
                flawlessly but also inspire and engage users.
              </p>
              
              <p>
                When I'm not coding, you'll find me working on the roofs installing solar panels for a living.
              </p>
            </div>
          </div>

          {/* Skills & Image */}
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://instagram.frtm1-1.fna.fbcdn.net/v/t39.30808-6/368263023_18380741962057586_7732790649221390465_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEyNTl4MTU3NC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.frtm1-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QFH2aHPeApkaX8M87UC3-AuRMaPghykIv29uAObxvnjb0mGyxl-_10HEFEabJ-f7xU&_nc_ohc=GcOm8lmGcdEQ7kNvwFRC5fm&_nc_gid=qoX4xJRIVqUhb9PkhcHiBA&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzE3MjE2NzUwOTc3NDU1MzE4Mg%3D%3D.3-ccb7-5&oh=00_AfJM92J3CGrGD1TGuHNcJcS2qgnTc_5Prp-Z7RlsDolJ3w&oe=6844FD2F&_nc_sid=7a9f4"
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
