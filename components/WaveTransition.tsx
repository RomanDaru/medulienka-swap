import React from "react";

interface WaveTransitionProps {
  /** Wave style variant */
  variant?: "wave1" | "wave2" | "wave3" | "curve";
  /** Top section background color */
  topColor?: string;
  /** Bottom section background color */
  bottomColor?: string;
  /** Flip the wave vertically */
  flip?: boolean;
  /** Custom height */
  height?: string;
  /** Custom class name */
  className?: string;
}

const WaveTransition: React.FC<WaveTransitionProps> = ({
  variant = "wave1",
  topColor = "#FFFBEB", // honey-light
  bottomColor = "#ffffff", // white
  flip = false,
  height = "h-16 md:h-24",
  className = "",
}) => {
  const waveVariants = {
    wave1: (
      <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    ),
    wave2: (
      <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
    ),
    wave3: (
      <path d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,85.3C840,96,960,96,1080,85.3C1200,75,1320,53,1380,42.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
    ),
    curve: (
      <path d="M0,96L1440,32L1440,0L0,0Z" />
    ),
  };

  return (
    <div className={`relative ${height} ${className}`}>
      <svg
        className={`absolute inset-0 w-full h-full ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        </defs>
        <g fill={`url(#gradient-${variant})`}>
          {waveVariants[variant]}
        </g>
      </svg>
    </div>
  );
};

export default WaveTransition;
