import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vencerLogo from "@/assets/vencer-logo.png";
import pandoraBg from "@/assets/pandora-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Pandora background image */}
      <div className="absolute inset-0">
        <img src={pandoraBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
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
