
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Creative Developer', 'Problem Solver', 'Discord Bot Developer'];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        const nextChar = isDeleting 
          ? current.substring(0, currentText.length - 1)
          : current.substring(0, currentText.length + 1);
        setCurrentText(nextChar);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-fluid-6xl font-display font-light text-white leading-tight animate-fade-in-up">
            Hello, I'm <span className="font-semibold">Nick Alders</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-fluid-2xl text-gray-300 font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {currentText}
              <span className="animate-cursor-blink">|</span>
            </p>
          </div>
          
          <p className="text-fluid-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            I craft digital experiences that blend creativity with functionality. 
            Passionate about bringing ideas to life through clean code and thoughtful design.
            Making integrations to Discord using custom build bots. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black font-medium rounded-none hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              data-cursor-hover
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white text-white font-medium rounded-none hover:bg-white hover:text-black transition-all duration-300"
              data-cursor-hover
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-fade-in-up"
        style={{ animationDelay: '1.2s' }}
        data-cursor-hover
      >
        <ChevronDown size={32} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
