import { useMemo, memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  type: "spore" | "ember";
}

const sporeColors = [
  "hsl(175 80% 50% / 0.3)",
  "hsl(185 90% 55% / 0.25)",
  "hsl(210 85% 60% / 0.2)",
  "hsl(270 55% 60% / 0.15)",
  "hsl(175 80% 60% / 0.35)",
];

const emberColors = [
  "hsl(30 90% 55% / 0.2)",
  "hsl(15 95% 50% / 0.15)",
  "hsl(45 85% 55% / 0.15)",
];

const ParticleBackground = memo(() => {
  const isMobile = useIsMobile();
  const sporeCount = isMobile ? 8 : 20;
  const emberCount = isMobile ? 3 : 8;

  const particles = useMemo<Particle[]>(() => {
    const spores = Array.from({ length: sporeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 15,
      color: sporeColors[Math.floor(Math.random() * sporeColors.length)],
      type: "spore" as const,
    }));
    const embers = Array.from({ length: emberCount }, (_, i) => ({
      id: i + sporeCount,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 10,
      color: emberColors[Math.floor(Math.random() * emberColors.length)],
      type: "ember" as const,
    }));
    return [...spores, ...embers];
  }, [sporeCount, emberCount]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animation: `${p.type === "spore" ? "spore-drift" : "ember-drift"} ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
});

ParticleBackground.displayName = "ParticleBackground";

export default ParticleBackground;
