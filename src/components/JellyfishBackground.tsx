import { motion } from "framer-motion";
import { useMemo } from "react";

const JELLYFISH_COUNT = 6;

const JellyfishSVG = ({ size, opacity }: { size: number; opacity: number }) => {
  const tentacleCount = 6;
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 60 96" fill="none" style={{ opacity }}>
      <ellipse cx="30" cy="24" rx="22" ry="20" fill="hsl(var(--fest-cyan) / 0.25)" stroke="hsl(var(--fest-cyan) / 0.5)" strokeWidth="1" />
      <ellipse cx="30" cy="24" rx="16" ry="14" fill="hsl(var(--fest-teal) / 0.15)" />
      <ellipse cx="30" cy="20" rx="10" ry="7" fill="hsl(var(--fest-cyan) / 0.2)" />
      <circle cx="30" cy="22" r="6" fill="hsl(var(--fest-cyan) / 0.3)" />
      {Array.from({ length: tentacleCount }).map((_, i) => {
        const x = 12 + (i * 36) / (tentacleCount - 1);
        const cp1x = x + (Math.random() - 0.5) * 10;
        const cp2x = x + (Math.random() - 0.5) * 14;
        return (
          <motion.path
            key={i}
            d={`M ${x} 40 C ${cp1x} 58, ${cp2x} 72, ${x + 4} 90`}
            stroke="hsl(var(--fest-cyan) / 0.35)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                `M ${x} 40 C ${cp1x} 58, ${cp2x} 72, ${x + 4} 90`,
                `M ${x} 40 C ${cp1x + 6} 55, ${cp2x - 5} 75, ${x - 3} 92`,
                `M ${x} 40 C ${cp1x - 4} 60, ${cp2x + 6} 70, ${x + 2} 88`,
                `M ${x} 40 C ${cp1x} 58, ${cp2x} 72, ${x + 4} 90`,
              ],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
};

const JellyfishBackground = () => {
  const jellyfishData = useMemo(
    () =>
      Array.from({ length: JELLYFISH_COUNT }).map(() => ({
        size: 30 + Math.random() * 50,
        left: `${5 + Math.random() * 85}%`,
        top: `${10 + Math.random() * 65}%`,
        delay: Math.random() * 6,
        durationY: 10 + Math.random() * 8,
        driftX: 30 + Math.random() * 60,
        driftY: 25 + Math.random() * 50,
        opacity: 0.3 + Math.random() * 0.4,
        rotate: -10 + Math.random() * 20,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {jellyfishData.map((jf, i) => (
        <motion.div
          key={`jf-${i}`}
          className="absolute"
          style={{
            left: jf.left,
            top: jf.top,
            filter: `drop-shadow(0 0 10px hsl(var(--fest-cyan) / 0.4)) drop-shadow(0 0 25px hsl(var(--fest-teal) / 0.2))`,
          }}
          animate={{
            y: [0, -jf.driftY, 0, jf.driftY * 0.5, 0],
            x: [0, jf.driftX * 0.6, -jf.driftX * 0.4, jf.driftX * 0.2, 0],
            rotate: [0, jf.rotate, -jf.rotate * 0.5, jf.rotate * 0.8, 0],
          }}
          transition={{
            duration: jf.durationY,
            repeat: Infinity,
            delay: jf.delay,
            ease: "easeInOut",
          }}
        >
          <JellyfishSVG size={jf.size} opacity={jf.opacity} />
        </motion.div>
      ))}
    </div>
  );
};

export default JellyfishBackground;