import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Gamepad2, Camera, Music, BookOpen, Lightbulb } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";

const floatingIcons = [
  { Icon: Code, x: -200, y: -100, delay: 0, color: "text-fest-teal" },
  { Icon: Gamepad2, x: 220, y: -80, delay: 0.3, color: "text-fest-purple" },
  { Icon: Camera, x: -250, y: 60, delay: 0.6, color: "text-fest-yellow" },
  { Icon: Music, x: 260, y: 80, delay: 0.9, color: "text-fest-blue" },
  { Icon: BookOpen, x: -150, y: 150, delay: 1.2, color: "text-fest-orange" },
  { Icon: Lightbulb, x: 180, y: 160, delay: 1.5, color: "text-fest-teal" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(225_20%_12%)_0%,hsl(225_20%_5%)_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(25_95%_55%_/_0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(270_60%_55%_/_0.06)_0%,transparent_70%)]" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {floatingIcons.map(({ Icon, x, y, delay, color }, i) => (
          <motion.div
            key={i}
            className={`absolute ${color} opacity-30`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: delay + 0.5, duration: 0.8 }}
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
          className="font-display text-lg sm:text-2xl md:text-3xl tracking-wider fest-gradient-text mb-3"
        >
          National Level Techno-Cultural Fest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-heading text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Angadi Institute of Technology and Management, Belagavi
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/events"
            className="inline-block font-display text-sm tracking-wider px-8 py-4 rounded-lg bg-gradient-to-r from-primary via-accent to-fest-teal text-primary-foreground hover:shadow-[0_0_30px_hsl(25_95%_55%_/_0.4)] transition-all duration-300 hover:scale-105"
          >
            Explore Events
          </Link>
          <Link
            to="/timeline"
            className="inline-block font-display text-sm tracking-wider px-8 py-4 rounded-lg glass border border-primary/30 text-foreground hover:glow-border-orange transition-all duration-300 hover:scale-105"
          >
            View Timeline
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
