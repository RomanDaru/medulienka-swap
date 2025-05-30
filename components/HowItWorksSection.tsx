import React from "react";
import SectionContainer from "./SectionContainer";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  icon,
}) => (
  <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center'>
    <div className='bg-honey text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-4'>
      {icon}
    </div>
    <h3 className='text-xl font-semibold text-honey-dark mb-2'>
      Krok {stepNumber}: {title}
    </h3>
    <p className='text-gray-600'>{description}</p>
  </div>
);

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Prineste veci",
      description:
        "Prineste čisté a zachovalé oblečenie, hračky, knihy alebo iné potreby, ktoré už vaša rodina nevyužíva.",
      icon: <GiftIcon />,
    },
    {
      title: "Vymeňte za iné",
      description:
        "Prezrite si ponuku od ostatných účastníkov a vyberte si to, čo sa vám páči, hodí a poteší.",
      icon: <SwapIcon />,
    },
    {
      title: "Ušetrite a pomôžte",
      description:
        "Ušetríte peniaze za nákup nových vecí, znížite množstvo odpadu a podporíte skvelú komunitnú myšlienku.",
      icon: <HeartIcon />,
    },
  ];

  return (
    <SectionContainer
      id='ako-to-funguje'
      title='Ako to funguje?'
      className='bg-honey-light'>
      <div className='grid md:grid-cols-3 gap-8'>
        {steps.map((step, index) => (
          <StepCard
            key={index}
            stepNumber={index + 1}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

// Placeholder icons, consider using a library like react-icons if more are needed
const GiftIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-8 w-8'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
    />
  </svg>
);

const SwapIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-8 w-8'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    />
  </svg>
);

const HeartIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-8 w-8'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    />
  </svg>
);

export default HowItWorksSection;
