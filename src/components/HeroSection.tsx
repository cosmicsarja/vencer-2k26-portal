import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Gamepad2, Camera, Music, BookOpen, Lightbulb } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";

const floatingIcons = [
  { Icon: Code, x: -200, y: -100, delay: 0, color: "text-neon-cyan" },
  { Icon: Gamepad2, x: 220, y: -80, delay: 0.3, color: "text-neon-magenta" },
  { Icon: Camera, x: -250, y: 60, delay: 0.6, color: "text-neon-yellow" },
  { Icon: Music, x: 260, y: 80, delay: 0.9, color: "text-neon-green" },
  { Icon: BookOpen, x: -150, y: 150, delay: 1.2, color: "text-neon-orange" },
  { Icon: Lightbulb, x: 180, y: 160, delay: 1.5, color: "text-neon-cyan" },
];

const FEST_DATE = new Date("2026-03-20T09:00:00");

const CountdownTimer = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = FEST_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-6 justify-center">
      {Object.entries(time).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="glass glow-border-cyan rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <span className="font-display text-2xl sm:text-3xl text-primary text-glow-cyan">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="font-heading text-xs uppercase tracking-widest text-muted-foreground mt-2">{label}</span>
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Radial glow bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(230_25%_12%)_0%,hsl(230_25%_5%)_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(190_100%_50%_/_0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(310_100%_60%_/_0.06)_0%,transparent_70%)]" />

      {/* Floating icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {floatingIcons.map(({ Icon, x, y, delay, color }, i) => (
          <motion.div
            key={i}
            className={`absolute ${color} opacity-30`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: delay + 1, duration: 0.8 }}
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={28} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={vencerLogo}
            alt="VENCER 2K26 Logo"
            className="mx-auto w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] flame-glow"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-lg sm:text-2xl md:text-3xl tracking-wider neon-gradient-text mb-3"
        >
          National Level Techno-Cultural Fest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-heading text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Hosted at Angadi Institute of Technology and Management, Belagavi
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-10"
        >
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <a
            href="#events"
            className="inline-block font-display text-sm tracking-wider px-8 py-4 rounded-lg bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-yellow text-primary-foreground hover:shadow-[0_0_30px_hsl(190_100%_50%_/_0.4)] transition-all duration-300 hover:scale-105"
          >
            Explore Events
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
