
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socials = {
 // Twitter: "https://twitter.com/jouwgebruikersnaam",
 // LinkedIn: "https://www.linkedin.com/in/jouwgebruikersnaam",
  GitHub: "https://github.com/nickalders1"
};


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "nickalders63@gmail.com",
      link: "mailto:nickalders63@gmail.com"
    },
   // {
   //   icon: Phone,
   //   title: "Phone",
   //   details: "--",
   //   link: "tel:--"
   // },
    {
      icon: MapPin,
      title: "Location",
      details: "Beverwijk, Noord-Holland",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-fluid-4xl font-display font-light mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-fluid-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start space-x-6 group cursor-pointer"
                  data-cursor-hover
                >
                  <div className="p-4 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{info.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {info.details}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            

<div className="space-y-6">
  <h3 className="text-2xl font-display font-light">Follow Me</h3>
  <div className="flex space-x-6">
    {Object.entries(socials).map(([name, url]) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300"
        data-cursor-hover
      >
        {name}
      </a>
    ))}
  </div>
</div>

          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none text-white placeholder-gray-500 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none text-white placeholder-gray-500 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none text-white placeholder-gray-500 resize-none transition-colors duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="flex items-center space-x-3 px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-300 group"
                data-cursor-hover
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
