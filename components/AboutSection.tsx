
import React from 'react';
import SectionContainer from './SectionContainer';

const AboutSection: React.FC = () => {
  return (
    <SectionContainer id="o-nas" title="O nás" className="bg-white">
      <div className="max-w-3xl mx-auto text-center text-lg text-gray-700 space-y-6">
        <p>
          Sme komunitná iniciatíva <strong className="text-honey-dark">Medulienka Swap</strong>, zameraná na podporu udržateľnosti a vzájomnej pomoci medzi rodinami. 
          Naším cieľom je vytvoriť priestor, kde si môžu ľudia jednoducho a príjemne vymieňať detské oblečenie, hračky, knihy a ďalšie potreby.
        </p>
        <p>
          Veríme, že zdieľanie a výmena vecí, ktoré už nepotrebujeme, môže priniesť radosť iným, ušetriť rodinné rozpočty a zároveň významne prispieť k ochrane našej planéty znížením odpadu.
        </p>
        <p>
          Pridajte sa k nám a staňte sa súčasťou komunity, ktorá si váži zdroje, podporuje sa navzájom a myslí na budúcnosť našich detí!
        </p>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
