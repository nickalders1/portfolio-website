
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', hideCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>
      <div
        className={`fixed pointer-events-none z-40 border border-white/30 rounded-full transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-75 opacity-50' : 'scale-100'}`}
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: '40px',
          height: '40px',
        }}
      />
    </>
  );
};

export default CustomCursor;
