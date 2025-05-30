import React, { useState } from "react";

interface FlipCardProps {
  question: string;
  answer: string | string[];
}

const FlipCard: React.FC<FlipCardProps> = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className='relative w-full h-64 cursor-pointer'
      onClick={handleCardClick}
      style={{ perspective: "1000px" }}>
      {/* Card Inner */}
      <div
        className='relative w-full h-full transition-transform duration-700'
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}>
        {/* Card Front */}
        <div
          className='absolute inset-0 flex items-center justify-center bg-white rounded-lg shadow-lg p-6 text-center'
          style={{ backfaceVisibility: "hidden" }}>
          <h3 className='text-xl font-semibold text-gray-800'>{question}</h3>
        </div>
        {/* Card Back */}
        <div
          className='absolute inset-0 flex flex-col items-center justify-center bg-honey-dark text-white rounded-lg shadow-lg p-6 text-center'
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}>
          {Array.isArray(answer) ? (
            <ul className='list-none text-left space-y-4'>
              {answer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className='text-lg'>{answer}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
