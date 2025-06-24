
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RulesSection from "@/components/RulesSection";
import EpisodesSection from "@/components/EpisodesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <RulesSection />
      <EpisodesSection />
      <Footer />
    </div>
  );
};

export default Index;
