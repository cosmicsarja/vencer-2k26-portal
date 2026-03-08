import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Cpu, Gamepad2, Music, Camera } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";
import pandoraBg from "@/assets/pandora-bg.png";

const floatingIcons = [
  { Icon: Code, x: -220, y: -120, delay: 0, color: "text-fest-teal" },
  { Icon: Cpu, x: 240, y: -90, delay: 0.3, color: "text-fest-cyan" },
  { Icon: Camera, x: -270, y: 70, delay: 0.6, color: "text-fest-purple" },
  { Icon: Music, x: 280, y: 90, delay: 0.9, color: "text-fest-blue" },
  { Icon: Gamepad2, x: -160, y: 170, delay: 1.2, color: "text-fest-orange" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Pandora landscape backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(220_30%_10%)_0%,hsl(220_30%_3%)_80%)]" />
      
      {/* Bioluminescent forest glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-[radial-gradient(ellipse_at_bottom,hsl(175_80%_30%_/_0.08)_0%,transparent_60%)]" />
      
      {/* Water reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-[radial-gradient(ellipse_at_bottom_center,hsl(210_85%_50%_/_0.06)_0%,transparent_50%)]" />
      
      {/* Volcanic ember glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(30_90%_55%_/_0.05)_0%,transparent_70%)]" />
      
      {/* Purple nebula */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(270_55%_50%_/_0.06)_0%,transparent_70%)]" />

      {/* Holographic floating icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {floatingIcons.map(({ Icon, x, y, delay, color }, i) => (
          <motion.div
            key={i}
            className={`absolute ${color} opacity-25`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ delay: delay + 0.5, duration: 0.8 }}
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <Icon size={30} />
                <div
                  className="absolute inset-0 blur-md opacity-50"
                  style={{ color: "inherit" }}
                >
                  <Icon size={30} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={vencerLogo}
            alt="VENCER 2K26 Logo"
            className="mx-auto w-[260px] sm:w-[380px] md:w-[480px] lg:w-[560px] bioluminescent-glow"
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
            className="inline-block font-display text-sm tracking-wider px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-fest-cyan to-fest-blue text-primary-foreground hover:shadow-[0_0_35px_hsl(var(--fest-teal)_/_0.4)] transition-all duration-300 hover:scale-105"
          >
            Explore Events
          </Link>
          <Link
            to="/branches"
            className="inline-block font-display text-sm tracking-wider px-8 py-4 rounded-xl glass-pandora text-foreground hover:glow-border-teal transition-all duration-300 hover:scale-105"
          >
            Enter the Tribes
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
