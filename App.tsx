import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PosterCollectionSection from "./components/PosterCollectionSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import UpcomingSwapModal from "./components/UpcomingSwapModal";
import BackToTop from "./components/BackToTop";
import FaqSection from "./components/FaqSection";
import HoneyWave from "./components/HoneyWave";
import { useContentful } from "./hooks/useContentful";
import "./src/gallery-masonry.css";
import "./src/flip-card.css";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { content, loading, error } = useContentful();

  useEffect(() => {
    if (content?.upcomingEvent.isActive) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [content]);

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-honey-light'>
        <div className='text-2xl text-honey-dark'>Načítavam...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-honey-light'>
        <div className='text-2xl text-red-600'>
          Nastala chyba pri načítaní obsahu.
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col min-h-screen bg-honey-light text-gray-800'>
      <Navbar />
      <main className='flex-grow'>
        <HeroSection />
        <AboutSection />

        {/* About to How It Works transition */}
        <HoneyWave
          direction='top-to-bottom'
          style='flowing'
          fromColor='#ffffff'
          toColor='#FFFBEB'
          height='h-20 md:h-28'
        />

        <HowItWorksSection />

        {/* How It Works to FAQ transition */}
        <HoneyWave
          direction='bottom-to-top'
          style='flowing'
          fromColor='#ffffff'
          toColor='#FFFBEB'
          height='h-20 md:h-28'
        />

        <FaqSection />

        {/* FAQ to Poster Collection transition */}
        <HoneyWave
          direction='top-to-bottom'
          style='flowing'
          fromColor='#ffffff'
          toColor='#FFFBEB'
          height='h-20 md:h-28'
        />

        <PosterCollectionSection
          posters={content?.posterCollection.posters || []}
        />

        {/* Poster Collection to Gallery transition */}
        <HoneyWave
          direction='bottom-to-top'
          style='flowing'
          fromColor='#ffffff'
          toColor='#FFFBEB'
          height='h-20 md:h-28'
        />

        <GallerySection photos={content?.gallery.photos || []} />

        {/* Gallery to Contact transition */}
        <HoneyWave
          direction='top-to-bottom'
          style='flowing'
          fromColor='#ffffff'
          toColor='#FFFBEB'
          height='h-20 md:h-28'
        />

        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      {content?.upcomingEvent.isActive && (
        <UpcomingSwapModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          posterImageUrl={content.upcomingEvent.posterImageUrl}
          eventDetails={{
            date: content.upcomingEvent.date,
            time: content.upcomingEvent.time,
            location: content.upcomingEvent.location,
            description: content.upcomingEvent.description,
          }}
        />
      )}
    </div>
  );
};

export default App;
