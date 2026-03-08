import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMemo } from "react";
import vencerLogo from "@/assets/vencer-logo.png";
import pandoraBg from "@/assets/pandora-bg.png";
import jellyfishImg from "@/assets/jellyfish.png";

const JELLYFISH_COUNT = 8;

const HeroSection = () => {
  const jellyfishData = useMemo(
    () =>
      Array.from({ length: JELLYFISH_COUNT }).map((_, i) => ({
        size: 40 + Math.random() * 60,
        left: `${5 + Math.random() * 85}%`,
        top: `${10 + Math.random() * 70}%`,
        delay: Math.random() * 6,
        durationY: 10 + Math.random() * 8,
        durationX: 12 + Math.random() * 10,
        driftX: 40 + Math.random() * 80,
        driftY: 30 + Math.random() * 60,
        opacity: 0.15 + Math.random() * 0.25,
        rotate: -15 + Math.random() * 30,
      })),
    []
  );

  const sporeData = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        size: 2 + Math.random() * 4,
        left: `${Math.random() * 100}%`,
        bottom: `-${Math.random() * 10}%`,
        colorIdx: Math.floor(Math.random() * 3),
        yDist: -(600 + Math.random() * 400),
        xDist: (Math.random() - 0.5) * 100,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 10,
      })),
    []
  );

  const colors = [
    { bg: "hsl(var(--fest-teal))", shadow: "hsl(var(--fest-teal) / 0.6)" },
    { bg: "hsl(var(--fest-cyan))", shadow: "hsl(var(--fest-cyan) / 0.6)" },
    { bg: "hsl(var(--fest-purple))", shadow: "hsl(var(--fest-purple) / 0.6)" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Pandora background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.img
          src={pandoraBg}
          alt=""
          className="w-full h-full object-cover"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </motion.div>

      {/* Color overlays */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--fest-teal)_/_0.3)_0%,transparent_70%)]" />
      </motion.div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_top_right,hsl(var(--fest-orange)_/_0.25)_0%,transparent_70%)]" />
      </motion.div>

      {/* Floating jellyfish */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {jellyfishData.map((jf, i) => (
          <motion.img
            key={`jf-${i}`}
            src={jellyfishImg}
            alt=""
            className="absolute"
            style={{
              width: jf.size,
              height: jf.size,
              left: jf.left,
              top: jf.top,
              opacity: jf.opacity,
              filter: `drop-shadow(0 0 12px hsl(var(--fest-cyan) / 0.5)) drop-shadow(0 0 30px hsl(var(--fest-teal) / 0.3))`,
            }}
            animate={{
              y: [0, -jf.driftY, 0, jf.driftY * 0.5, 0],
              x: [0, jf.driftX * 0.6, -jf.driftX * 0.4, jf.driftX * 0.2, 0],
              rotate: [0, jf.rotate, -jf.rotate * 0.5, jf.rotate * 0.8, 0],
              scale: [1, 1.05, 0.95, 1.02, 1],
            }}
            transition={{
              duration: jf.durationY,
              repeat: Infinity,
              delay: jf.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating spore particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sporeData.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: s.size,
              height: s.size,
              left: s.left,
              bottom: s.bottom,
              background: colors[s.colorIdx].bg,
              boxShadow: `0 0 8px ${colors[s.colorIdx].shadow}`,
            }}
            animate={{
              y: [0, s.yDist],
              x: [0, s.xDist],
              opacity: [0, 0.8, 0.6, 0],
              scale: [0.5, 1, 0.3],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.img
            src={vencerLogo}
            alt="VENCER 2K26 Logo"
            className="mx-auto w-[260px] sm:w-[380px] md:w-[480px] lg:w-[560px] bioluminescent-glow"
            animate={{
              filter: [
                "drop-shadow(0 0 20px hsl(175 80% 40% / 0.5)) drop-shadow(0 0 50px hsl(185 90% 45% / 0.3))",
                "drop-shadow(0 0 35px hsl(175 80% 40% / 0.7)) drop-shadow(0 0 80px hsl(185 90% 45% / 0.5))",
                "drop-shadow(0 0 20px hsl(175 80% 40% / 0.5)) drop-shadow(0 0 50px hsl(185 90% 45% / 0.3))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-lg sm:text-2xl md:text-3xl tracking-wider pandora-gradient-text mb-3"
        >
          National Level Techno-Cultural Fest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-heading text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-2"
        >
          Angadi Institute of Technology and Management
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-heading text-sm text-muted-foreground/70 mb-10"
        >
          Belagavi, Karnataka
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/events"
            className="inline-block font-display text-sm tracking-wider px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-fest-cyan to-fest-blue text-primary-foreground font-bold hover:shadow-[0_0_35px_hsl(var(--fest-teal)_/_0.4)] transition-all duration-300 hover:scale-105"
          >
            Explore Events
          </Link>
          <Link
            to="/branches"
            className="inline-block font-display text-sm tracking-wider px-8 py-4 rounded-xl border-2 border-primary/40 bg-card/60 text-foreground font-bold hover:border-primary/70 hover:shadow-[0_0_25px_hsl(var(--fest-teal)_/_0.3)] transition-all duration-300 hover:scale-105"
          >
            Enter the Tribes
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;