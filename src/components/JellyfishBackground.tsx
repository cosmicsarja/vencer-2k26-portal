import { motion } from "framer-motion";
import { useMemo, memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const JellyfishSVG = memo(({ size, opacity }: { size: number; opacity: number }) => {
  const tentacles = useMemo(() => {
    const count = 5;
    return Array.from({ length: count }).map((_, i) => {
      const x = 12 + (i * 36) / (count - 1);
      const cp1x = x + (Math.random() - 0.5) * 10;
      const cp2x = x + (Math.random() - 0.5) * 14;
      return { x, cp1x, cp2x, dur: 3 + Math.random() * 2 };
    });
  }, []);

  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 60 96" fill="none" style={{ opacity }} aria-hidden="true">
      <ellipse cx="30" cy="24" rx="22" ry="20" fill="hsl(var(--fest-cyan) / 0.25)" stroke="hsl(var(--fest-cyan) / 0.5)" strokeWidth="1" />
      <ellipse cx="30" cy="24" rx="16" ry="14" fill="hsl(var(--fest-teal) / 0.15)" />
      <ellipse cx="30" cy="20" rx="10" ry="7" fill="hsl(var(--fest-cyan) / 0.2)" />
      <circle cx="30" cy="22" r="6" fill="hsl(var(--fest-cyan) / 0.3)" />
      {tentacles.map((t, i) => (
        <motion.path
          key={i}
          d={`M ${t.x} 40 C ${t.cp1x} 58, ${t.cp2x} 72, ${t.x + 4} 90`}
          stroke="hsl(var(--fest-cyan) / 0.35)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              `M ${t.x} 40 C ${t.cp1x} 58, ${t.cp2x} 72, ${t.x + 4} 90`,
              `M ${t.x} 40 C ${t.cp1x + 6} 55, ${t.cp2x - 5} 75, ${t.x - 3} 92`,
              `M ${t.x} 40 C ${t.cp1x} 58, ${t.cp2x} 72, ${t.x + 4} 90`,
            ],
          }}
          transition={{
            duration: t.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
});

JellyfishSVG.displayName = "JellyfishSVG";

const JellyfishBackground = memo(() => {
  const isMobile = useIsMobile();
  const count = isMobile ? 2 : 4;

  const jellyfishData = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
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
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {jellyfishData.map((jf, i) => (
        <motion.div
          key={`jf-${i}`}
          className="absolute will-change-transform"
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
});

JellyfishBackground.displayName = "JellyfishBackground";

export default JellyfishBackground;
