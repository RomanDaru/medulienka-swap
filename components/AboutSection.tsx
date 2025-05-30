import React from "react";
import SectionContainer from "./SectionContainer";

const AboutSection: React.FC = () => {
  return (
    <SectionContainer id='o-nas' title='O nás' className='bg-white'>
      <div className='max-w-3xl mx-auto text-center text-lg text-gray-700 space-y-6'>
        <p>
          Sme tím dobrovoľníčok – mamičiek z{" "}
          <strong className='text-honey-dark'>
            Rodinného centra Medulienka
          </strong>
          , ktoré organizujú komunitný SWAP zameraný na udržateľnosť, opätovné
          využitie vecí a vzájomnú pomoc medzi rodinami. Našim cieľom je
          vytvoriť bezpečný a príjemný priestor, kde si môžu ľudia jednoducho
          vymieňať oblečenie, hračky, knihy a ďalšie potreby, ktoré už sami
          nevyužívajú, no môžu poslúžiť iným.
        </p>
        <p>
          Z dobrovoľného vstupného, ktoré pri swapoch vyzbierame, pomáhame
          pokrývať prevádzkové náklady{" "}
          <strong className='text-honey-dark'>
            Rodinného centra Medulienka
          </strong>{" "}
          – napríklad energie, materiál na tvorivé dielne či základné vybavenie,
          ktoré slúži celej komunite.
        </p>
        <p>
          Veríme, že aj malé kroky – ako je výmena vecí namiesto ich
          vyhadzovania – majú veľký význam. Šetríme tým nielen svoje peňaženky,
          ale aj našu planétu. Navyše spoločne budujeme komunitu, kde si rodiny
          navzájom pomáhajú a deti vyrastajú v prostredí solidarity a
          ohľaduplnosti.
        </p>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
