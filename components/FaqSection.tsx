import React from "react";
import SectionContainer from "./SectionContainer";
import FlipCard from "./FlipCard";

interface FaqSectionProps {}

const faqItems = [
  {
    question: "Čo môžeš priniesť?",
    answer: [
      "Detské oblečenie, dámske oblečenie, pánske oblečenie hračky, knihy a ďalšie potreby vo výbornom stave – čisté, nepoškodené, bez dier či fľakov.",
      "Na každý swap určená konkrétna téma (napr. podľa sezóny – jarné, letné oblečenie).",
      "Môžeš priniesť maximálne 2 tašky. Ale pozor – priniesť veci nie je podmienkou! Prísť môžeš aj len tak a odniesť si niečo potrebné.",
    ],
  },
  {
    question: "Čo neberieme?",
    answer: [
      "Poškodené veci, staré a zničené oblečenie",
      "Spodné prádlo",
      "Plyšové hračky",
      "Hryzátka",
    ],
  },
  {
    question: "Pomáhame aj zvieratkám!",
    answer:
      "Zbierame uteráky, plachty a deky pre miestny útulok. Ak sa chceš zapojiť, prines ich vypraté a tašku označ nápisom „ÚTULOK“. Pomôžeme tak aj tým najchlpatším členom našej komunity. ",
  },
  {
    question: "Čo sa stane s vecami, ktoré zostanú?",
    answer:
      "Veci, ktoré si na swape nenájdu svojho majiteľa, starostlivo zabalíme do vriec a posúvame ich ďalej do Centra KP FEMINA, kde môžu ešte pomôcť ženám a rodinám v núdzi.",
  },
];

const FaqSection: React.FC<FaqSectionProps> = () => {
  return (
    <SectionContainer id='faq' title='Časté otázky' className='bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {faqItems.map((item, index) => (
          <FlipCard key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FaqSection;
