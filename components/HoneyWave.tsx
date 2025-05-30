import React from "react";

interface HoneyWaveProps {
  /** Direction of the wave */
  direction?: "top-to-bottom" | "bottom-to-top";
  /** Wave style */
  style?: "gentle" | "dynamic" | "flowing";
  /** Custom height */
  height?: string;
  /** From color (hex) */
  fromColor?: string;
  /** To color (hex) */
  toColor?: string;
}

const HoneyWave: React.FC<HoneyWaveProps> = ({
  direction = "top-to-bottom",
  style = "gentle",
  height = "h-20 md:h-32",
  fromColor = "#FFFBEB", // honey-light
  toColor = "#ffffff", // white
}) => {
  const waveStyles = {
    gentle: {
      path: "M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z",
      viewBox: "0 0 1440 96",
    },
    dynamic: {
      path: "M0,32L80,42.7C160,53,320,75,480,85.3C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z",
      viewBox: "0 0 1440 96",
    },
    flowing: {
      path: "M0,48L120,53.3C240,59,480,69,720,69.3C960,69,1200,59,1320,53.3L1440,48L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
      viewBox: "0 0 1440 96",
    },
  };

  const currentStyle = waveStyles[style];
  const isFlipped = direction === "bottom-to-top";

  return (
    <div className={`relative ${height} overflow-hidden`}>
      <svg
        className={`absolute inset-0 w-full h-full ${isFlipped ? "rotate-180" : ""}`}
        viewBox={currentStyle.viewBox}
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <linearGradient
            id={`honey-gradient-${style}-${direction}`}
            x1='0%'
            y1='0%'
            x2='0%'
            y2='100%'>
            <stop offset='0%' stopColor={fromColor} />
            <stop offset='100%' stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d={currentStyle.path}
          fill={`url(#honey-gradient-${style}-${direction})`}
        />
      </svg>
    </div>
  );
};

export default HoneyWave;
