
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-honey-dark text-white text-center p-6">
      <p>&copy; {currentYear} Medulienka Swap. Všetky práva vyhradené.</p>
      <p className="text-sm mt-2">
        Nájdete nás aj na sociálnych sieťach! Sledujte novinky v sekcii <a href="#kontakt" className="underline hover:text-honey-light">Kontakt</a>.
      </p>
      <p className="text-sm mt-1">S láskou vytvorené pre komunitu.</p>
    </footer>
  );
};

export default Footer;
