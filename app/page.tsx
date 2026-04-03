import HeroSection from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Portfolio />
      <Services />
      <ContactForm />
    </>
  );
}
