import { useMemo, memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const JellyfishSVG = memo(({ size, opacity }: { size: number; opacity: number }) => {
  const tentacles = useMemo(() => {
    const count = 5;
    return Array.from({ length: count }).map((_, i) => {
      const x = 12 + (i * 36) / (count - 1);
      const cp1x = x + (Math.random() - 0.5) * 10;
      const cp2x = x + (Math.random() - 0.5) * 14;
      return { x, cp1x, cp2x };
    });
  }, []);

  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 60 96" fill="none" style={{ opacity }} aria-hidden="true">
      <ellipse cx="30" cy="24" rx="22" ry="20" fill="hsl(var(--fest-cyan) / 0.25)" stroke="hsl(var(--fest-cyan) / 0.5)" strokeWidth="1" />
      <ellipse cx="30" cy="24" rx="16" ry="14" fill="hsl(var(--fest-teal) / 0.15)" />
      <ellipse cx="30" cy="20" rx="10" ry="7" fill="hsl(var(--fest-cyan) / 0.2)" />
      <circle cx="30" cy="22" r="6" fill="hsl(var(--fest-cyan) / 0.3)" />
      {tentacles.map((t, i) => (
        <path
          key={i}
          d={`M ${t.x} 40 C ${t.cp1x} 58, ${t.cp2x} 72, ${t.x + 4} 90`}
          stroke="hsl(var(--fest-cyan) / 0.35)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
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
        opacity: 0.3 + Math.random() * 0.4,
        animDuration: `${10 + Math.random() * 8}s`,
        animDelay: `${Math.random() * 6}s`,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <style>{`
        @keyframes jf-float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-30px) translateX(20px); }
          50% { transform: translateY(-15px) translateX(-10px); }
          75% { transform: translateY(-40px) translateX(15px); }
        }
      `}</style>
      {jellyfishData.map((jf, i) => (
        <div
          key={`jf-${i}`}
          className="absolute will-change-transform"
          style={{
            left: jf.left,
            top: jf.top,
            filter: `drop-shadow(0 0 10px hsl(var(--fest-cyan) / 0.4))`,
            animation: `jf-float ${jf.animDuration} ease-in-out ${jf.animDelay} infinite`,
          }}
        >
          <JellyfishSVG size={jf.size} opacity={jf.opacity} />
        </div>
      ))}
    </div>
  );
});

JellyfishBackground.displayName = "JellyfishBackground";

export default JellyfishBackground;
