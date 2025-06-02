
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <div 
              className="text-white font-display font-bold text-xl cursor-pointer"
              onClick={() => scrollToSection('home')}
              data-cursor-hover
            >
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                  data-cursor-hover
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white z-50 relative"
              data-cursor-hover
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 z-30 md:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-8">
            {['Home', 'About', 'Work', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block text-white text-2xl font-light transition-all duration-500 hover:text-gray-300 ${
                  isOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                data-cursor-hover
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
