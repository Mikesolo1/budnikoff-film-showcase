import { useEffect, useState } from "react";

interface ShatterEffectProps {
  isActive: boolean;
}

const ShatterEffect = ({ isActive }: ShatterEffectProps) => {
  const [cracks, setCracks] = useState<Array<{ x1: number; y1: number; x2: number; y2: number; delay: number }>>([]);

  useEffect(() => {
    if (isActive) {
      // Generate random cracks
      const newCracks = [];
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      for (let i = 0; i < 20; i++) {
        const angle = (Math.PI * 2 * i) / 20 + (Math.random() - 0.5) * 0.5;
        const length = Math.random() * 400 + 200;
        newCracks.push({
          x1: centerX,
          y1: centerY,
          x2: centerX + Math.cos(angle) * length,
          y2: centerY + Math.sin(angle) * length,
          delay: Math.random() * 0.3,
        });
      }
      setCracks(newCracks);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <svg className="w-full h-full">
        {cracks.map((crack, index) => (
          <line
            key={index}
            x1={crack.x1}
            y1={crack.y1}
            x2={crack.x2}
            y2={crack.y2}
            stroke="rgba(0, 0, 0, 0.3)"
            strokeWidth="2"
            className="animate-crack-grow"
            style={{ 
              animationDelay: `${crack.delay}s`,
              strokeDasharray: "1000",
              strokeDashoffset: "1000"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default ShatterEffect;
