
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
import EmailPopup from './body/autresections/EmailPopup';
import NewsletterPopup from './footer/newsletter/NewsletterPopup';
import TarifsServices from './body/tarif/TarifsServices';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <EmailPopup />
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ProcessTimeline />
      <AboutSection />
      <TarifsServices />
      <TeamSection />
      <PortfolioSection />
      <TestimonialsEmbla />
      <FAQSection />
      <ContactForm />
      <PartnersMarquee />
      <Footer />
      <NewsletterPopup />
      <ScrollToTopButton />
    </>
  );
}

export default App
