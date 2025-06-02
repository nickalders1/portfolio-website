
import CustomCursor from '../components/CustomCursor';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-body overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
