import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HowItWorksSection from "./components/HowItWorksSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import UpcomingSwapModal from "./components/UpcomingSwapModal";
import BackToTop from "./components/BackToTop";
import { Photo } from "./types";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Example: Set a poster URL. Leave empty string to test text fallback.
  const posterImageUrlForModal =
    "https://picsum.photos/seed/swapposter/400/550"; // Example poster URL
  // const posterImageUrlForModal = ""; // Test text fallback

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update document title
    document.title = "Medulienka Swap - Výmenný bazar pre deti";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Medulienka Swap - Výmenný bazar pre deti. Prineste vecičky, ktoré už nepotrebujete, a nájdite nové poklady pre vaše deti."
      );
    }
  }, []);

  const photos: Photo[] = [
    {
      id: "1",
      src: "https://picsum.photos/seed/swap1/600/400",
      alt: "Atmosféra na Medulienka Swap 1",
    },
    {
      id: "2",
      src: "https://picsum.photos/seed/swap2/600/400",
      alt: "Deti sa hrajú s vymenenými hračkami",
    },
    {
      id: "3",
      src: "https://picsum.photos/seed/swap3/600/400",
      alt: "Oblečenie pripravené na výmenu",
    },
    {
      id: "4",
      src: "https://picsum.photos/seed/swap4/600/400",
      alt: "Rodičia vyberajú vecičky",
    },
    {
      id: "5",
      src: "https://picsum.photos/seed/swap5/600/400",
      alt: "Úsmevy na tvárach účastníkov",
    },
    {
      id: "6",
      src: "https://picsum.photos/seed/swap6/600/400",
      alt: "Komunitné stretnutie",
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col min-h-screen bg-honey-light text-gray-800'>
      <Navbar />
      <main className='flex-grow'>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <GallerySection photos={photos} />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <UpcomingSwapModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        posterImageUrl={posterImageUrlForModal}
      />
    </div>
  );
};

export default App;
