import React from "react";

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  children,
  className = "",
  title,
}) => {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <div className='container mx-auto px-6'>
        {title && (
          <h2 className='text-3xl md:text-4xl font-bold text-center text-honey-dark mb-8 md:mb-12'>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
