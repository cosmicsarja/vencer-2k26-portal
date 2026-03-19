import { useMemo, memo, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const JellyfishSVG = memo(({ size, opacity, tentacleCount, colorVar }: { size: number; opacity: number; tentacleCount: number; colorVar: string }) => {
  const tentacles = useMemo(() => {
    return Array.from({ length: tentacleCount }).map((_, i) => {
      const angle = (i / tentacleCount) * Math.PI * 2;
      const length = 50 + Math.random() * 40;
      const cp1Dist = 20 + Math.random() * 15;
      const cp2Dist = 35 + Math.random() * 20;
      const cp1Offset = Math.random() * 0.3 + 0.7;
      const cp2Offset = Math.random() * 0.3 + 0.7;
      
      const cp1x = 30 + Math.cos(angle) * cp1Dist * cp1Offset;
      const cp1y = 40 + Math.sin(angle) * cp1Dist * cp1Offset;
      const cp2x = 30 + Math.cos(angle) * cp2Dist * cp2Offset;
      const cp2y = 40 + Math.sin(angle) * cp2Dist * cp2Offset;
      const endx = 30 + Math.cos(angle) * length;
      const endy = 90 + Math.sin(angle) * 10;
      
      return { cp1x, cp1y, cp2x, cp2y, endx, endy };
    });
  }, [tentacleCount]);

  return (
    <svg width={size} height={size * 1.8} viewBox="0 0 60 108" fill="none" style={{ opacity }} aria-hidden="true">
      {/* Glow effect */}
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor={`hsl(var(${colorVar}) / 0.6)`} />
          <stop offset="50%" stopColor={`hsl(var(${colorVar}) / 0.3)`} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      
      {/* Main body */}
      <ellipse cx="30" cy="24" rx="24" ry="22" fill={`hsl(var(${colorVar}) / 0.3)`} stroke={`hsl(var(${colorVar}) / 0.6)`} strokeWidth="1.5" filter="url(#glow)" />
      <ellipse cx="30" cy="24" rx="18" ry="16" fill={`hsl(var(${colorVar}) / 0.2)`} />
      <ellipse cx="30" cy="20" rx="12" ry="9" fill={`hsl(var(${colorVar}) / 0.25)`} />
      <circle cx="30" cy="22" r="7" fill={`hsl(var(${colorVar}) / 0.35)`} />
      
      {/* Tentacles */}
      {tentacles.map((t, i) => (
        <path
          key={i}
          d={`M 30 40 C ${t.cp1x} ${t.cp1y}, ${t.cp2x} ${t.cp2y}, ${t.endx} ${t.endy}`}
          stroke={`hsl(var(${colorVar}) / ${0.4 - i * 0.03})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
        />
      ))}
    </svg>
  );
});

JellyfishSVG.displayName = "JellyfishSVG";

const JellyfishBackground = memo(() => {
  const isMobile = useIsMobile();
  const count = isMobile ? 5 : 12;

  const jellyfishData = useMemo(() => 
    Array.from({ length: count }).map(() => ({
      size: 25 + Math.random() * 95,
      left: `${Math.random() * 95}%`,
      top: `${Math.random() * 80}%`,
      opacity: 0.25 + Math.random() * 0.45,
      animDuration: `${12 + Math.random() * 10}s`,
      animDelay: `${Math.random() * 8}s`,
      rotationSpeed: 0.2 + Math.random() * 0.4,
      swaySpeed: 0.3 + Math.random() * 0.5,
      tentacleCount: 6 + Math.floor(Math.random() * 5), // 6-10
      colorVar: Math.random() > 0.5 ? "--fest-cyan" : "--fest-teal",
    })), 
  [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <style>{`
        @keyframes jelly-float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-35px) translateX(25px) rotate(-2deg) scale(1.05); 
          }
          50% { 
            transform: translateY(-20px) translateX(-15px) rotate(1deg) scale(0.98); 
          }
          75% { 
            transform: translateY(-45px) translateX(20px) rotate(-1deg) scale(1.03); 
          }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
      {jellyfishData.map((jf, i) => (
        <div
          key={`jf-${i}`}
          className="absolute will-change-transform animate-[pulse-glow_3s_ease-in-out_infinite]"
          style={{
            left: jf.left,
            top: jf.top,
            filter: `drop-shadow(0 0 15px hsl(var(${jf.colorVar}) / 0.5)) drop-shadow(0 0 25px hsl(var(${jf.colorVar}) / 0.2))`,
            animation: `
              jelly-float ${jf.animDuration} ease-in-out ${jf.animDelay} infinite,
              rotate(var(--rotate, 0deg) ${jf.rotationSpeed * 2}s linear infinite),
              sway(${jf.swaySpeed}s)
            `,
          }}
        >
          <JellyfishSVG 
            size={jf.size} 
            opacity={jf.opacity} 
            tentacleCount={jf.tentacleCount}
            colorVar={jf.colorVar}
          />
        </div>
      ))}
    </div>
  );
});

JellyfishBackground.displayName = "JellyfishBackground";

export default JellyfishBackground;

