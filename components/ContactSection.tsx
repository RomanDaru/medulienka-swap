import React from 'react';
import SectionContainer from './SectionContainer';

// Facebook Icon SVG Component
const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

// Instagram Icon SVG Component
const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.791.218 2.175.385a4.902 4.902 0 011.732 1.732c.167.385.333.903.385 1.791.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.172-.218 1.791-.385 2.175a4.902 4.902 0 01-1.732 1.732c-.385.167-.903.333-1.791.385-1.265.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.052-1.791-.218-2.175-.385a4.902 4.902 0 01-1.732-1.732c-.167-.385-.333-.903-.385-1.791-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.172.218-1.791.385-2.175a4.902 4.902 0 011.732-1.732c.385-.167.903.333 1.791.385C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.096 0-3.458.011-4.661.066-1.078.049-1.647.208-1.947.338a3.096 3.096 0 00-1.158 1.158c-.13.3-.29.87-.338 1.947C3.973 8.542 3.962 8.904 3.962 12s.011 3.458.066 4.661c.049 1.078.208 1.647.338 1.947a3.096 3.096 0 001.158 1.158c.3.13.87.29 1.947.338 1.203.055 1.565.066 4.661.066s3.458-.011 4.661-.066c1.078-.049 1.647-.208 1.947-.338a3.096 3.096 0 001.158-1.158c.13-.3.29-.87.338-1.947.055-1.203.066-1.565.066-4.661s-.011-3.458-.066-4.661c-.049-1.078-.208-1.647-.338-1.947a3.096 3.096 0 00-1.158-1.158c-.3-.13-.87-.29-1.947-.338C15.458 3.973 15.096 3.962 12 3.962zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 8.529a3.366 3.366 0 110-6.732 3.366 3.366 0 010 6.732zm5.705-6.712a1.232 1.232 0 100-2.464 1.232 1.232 0 000 2.464z" clipRule="evenodd" />
  </svg>
);


const ContactSection: React.FC = () => {
  return (
    <SectionContainer id="kontakt" title="Kontaktujte nás" className="bg-honey-light">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-8">
          Máte otázky? Chcete sa zapojiť alebo sa dozvedieť viac o najbližšom termíne Medulienka Swap? Neváhajte nás kontaktovať!
        </p>
        <div className="space-y-4 text-gray-700 mb-10">
          <p>
            <strong>Email:</strong> <a href="mailto:info@medulienkaswap.sk" className="text-forest-dark hover:text-forest-DEFAULT underline">info@medulienkaswap.sk</a> (placeholder)
          </p>
          <p>
            <strong>Miesto konania:</strong> Komunitné centrum Srdiečko, Hlavná ulica 123, Naše Mesto (placeholder)
          </p>
          <p>
            <strong>Najbližší termín:</strong> Sledujte naše sociálne siete pre aktuálne informácie!
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-honey-dark mb-4">Sledujte nás na:</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://facebook.com/medulienkaswap" // Placeholder URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-honey-dark transition-colors"
              aria-label="Medulienka Swap na Facebooku"
            >
              <FacebookIcon className="w-10 h-10" />
            </a>
            <a 
              href="https://instagram.com/medulienkaswap" // Placeholder URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-honey-dark transition-colors"
              aria-label="Medulienka Swap na Instagrame"
            >
              <InstagramIcon className="w-10 h-10" />
            </a>
            {/* Pridajte ďalšie ikonky a odkazy podľa potreby */}
          </div>
        </div>

        <div>
          <a 
            href="mailto:info@medulienkaswap.sk"
            className="bg-honey hover:bg-honey-dark text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg"
          >
            Napíšte nám
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;