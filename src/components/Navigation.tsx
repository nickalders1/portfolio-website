
import { useState, useEffect } from 'react';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

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

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="text-white font-display font-bold text-xl cursor-pointer"
              data-cursor-hover
            >
              Portfolio
            </Link>

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
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-white/80 text-sm">Hello, {user.name}</span>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white hover:text-black"
                    data-cursor-hover
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/10"
                      data-cursor-hover
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-200"
                      data-cursor-hover
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
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
            
            {user ? (
              <div className="space-y-4 pt-8 border-t border-gray-700">
                <p className="text-white/80">Hello, {user.name}</p>
                <button
                  onClick={handleLogout}
                  className="text-white text-xl font-light hover:text-gray-300 transition-colors duration-300"
                  data-cursor-hover
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-4 pt-8 border-t border-gray-700">
                <Link 
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-white text-xl font-light hover:text-gray-300 transition-colors duration-300"
                  data-cursor-hover
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="block text-white text-xl font-light hover:text-gray-300 transition-colors duration-300"
                  data-cursor-hover
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
