
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-cursor-hover
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-cursor-hover
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-cursor-hover
            >
              Cookie Policy
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                data-cursor-hover
              >
                {social}
              </a>
            ))}
          </div>
          
          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
