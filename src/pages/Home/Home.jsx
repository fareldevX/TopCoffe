import { useState } from "react";
import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";
import HeroSection from "../../features/hero/components/HeroSection.jsx";
import BrandIntroduction from "../../features/story/components/BrandIntroduction.jsx";
import MenuSection from "../../features/menu/components/MenuSection.jsx";
import MenuDrawer from "../../features/menu/components/MenuDrawer.jsx";
import CoffeeShowcase from "../../features/story/components/CoffeeShowcase.jsx";
import StorySection from "../../features/story/components/StorySection.jsx";
import ProcessSection from "../../features/story/components/ProcessSection.jsx";
import AtmosphereSection from "../../features/atmosphere/components/AtmosphereSection.jsx";
import VisitSection from "../../features/visit/components/VisitSection.jsx";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="coffee-site" id="top">
      <Navbar />
      <main>
        <HeroSection />
        <BrandIntroduction />
        <MenuSection onOpenMenu={() => setIsMenuOpen(true)} />
        <CoffeeShowcase />
        <StorySection />
        <ProcessSection />
        <AtmosphereSection />
        <VisitSection />
      </main>
      <Footer />
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}

export default Home;
