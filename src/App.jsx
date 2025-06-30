
import AboutSection from './body/autresections/AboutSection';
import ContactForm from './body/autresections/ContactForm';
import PortfolioSection from './body/autresections/PortfolioSection';
import ServicesSection from './body/autresections/ServicesSection';
import StatsSection from './body/autresections/StatsSection';
import TestimonialsEmbla from './body/autresections/TestimonialsSection';
import HeroSection from './body/Herosection';
import Footer from './footer/Footer';
import ScrollToTopButton from './footer/retour/ScrollToTopButton';
import NavBar from './head/NavBar'
import TeamSection from './body/autresections/TeamSection';
import ProcessTimeline from './body/autresections/ProcessTimeline';
import FAQSection from './body/autresections/FAQSection';
import PartnersMarquee from './body/autresections/PartnersMarquee';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ProcessTimeline />
      <AboutSection />
      <TeamSection />
      <PortfolioSection />
      <TestimonialsEmbla />
      <FAQSection />
      <ContactForm />
      <PartnersMarquee />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App
