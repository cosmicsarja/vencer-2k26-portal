import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, forwardRef } from "react";
import { Briefcase, X, Sparkles, Music, Clock } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";
import pandoraBg from "@/assets/pandora-bg.png";
import mysteryBoxImg from "@/assets/mystery-box.png";
import vishwanathImg from "@/assets/vishwanath.jpg";



const HeroSection = forwardRef<HTMLElement>((_, ref) => {
  const [isMysteryOpen, setIsMysteryOpen] = useState(false);
  
  const sporeData = useMemo(
    () =>
      Array.from({ length: 15 }).map(() => ({
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
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Pandora background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src={pandoraBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
          decoding="async"
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

      {/* Floating spore particles - reduced count */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sporeData.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full will-change-transform"
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

      <div className="relative z-10 container text-center px-4 pt-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <img
            src={vencerLogo}
            alt="VENCER 2K26 Logo"
            className="mx-auto w-[220px] sm:w-[320px] md:w-[420px] lg:w-[520px] bioluminescent-glow"
            loading="eager"
            width={520}
            height={260}
            decoding="async"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-wider pandora-gradient-text mb-2 sm:mb-4 px-2"
        >
          National Level Techno-Cultural Fest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-heading text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-2"
        >
          Angadi Institute of Technology and Management
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-heading text-xs sm:text-sm text-muted-foreground/70 mb-8 sm:mb-10"
        >
          Belagavi, Karnataka
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center gap-10 sm:gap-14"
        >
          <Link
            to="/branches"
            className="inline-block font-display text-sm sm:text-base md:text-lg tracking-wider px-8 sm:px-12 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-primary via-fest-cyan to-fest-blue text-primary-foreground font-bold hover:shadow-[0_0_35px_hsl(var(--fest-teal)_/_0.4)] transition-all duration-300 hover:scale-105"
          >
            Dive into the Tribes
          </Link>

          {/* Mystery Box (360 Rotating) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="z-20 mt-2 sm:mt-6"
          >
            <button
              onClick={() => setIsMysteryOpen(true)}
              className="group relative flex flex-col items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-2xl p-2"
            >
              <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center">
                {/* Ambient glow behind box */}
                <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full group-hover:bg-yellow-400/30 transition-colors duration-500" />
                
                <motion.img 
                  src={mysteryBoxImg} 
                  alt="Mystery Box" 
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                />
                <Sparkles size={16} className="absolute -top-1 -right-1 text-amber-300 animate-ping z-20" />
              </div>
              <span className="text-[10px] sm:text-xs font-display tracking-widest text-yellow-400/80 group-hover:text-yellow-400 transition-colors uppercase whitespace-nowrap mt-1">
                Mystery Guest
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mystery Guest Modal */}
      <AnimatePresence>
        {isMysteryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMysteryOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-[90vw] md:max-w-4xl rounded-[2rem] border border-yellow-500/30 bg-black/90 p-6 sm:p-10 shadow-[0_0_80px_rgba(250,204,21,0.2)] backdrop-blur-3xl overflow-hidden cursor-default flex flex-col md:flex-row gap-8 items-center max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              {/* Background glows */}
              <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-yellow-500/10 to-transparent pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-orange-600/20 blur-[80px] pointer-events-none" />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMysteryOpen(false);
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[100] rounded-full p-2 text-white/50 hover:bg-yellow-400/20 hover:text-yellow-400 transition-all cursor-pointer shadow-lg bg-black/40 border border-white/5"
                aria-label="Close modal"
              >
                <X size={24} className="pointer-events-none" />
              </button>

              {/* Left Column: Image */}
              <div className="w-full md:w-[45%] shrink-0 relative group mt-4 md:mt-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-yellow-500/40 shadow-[0_10px_40px_rgba(250,204,21,0.3)] bg-black">
                  <img 
                    src={vishwanathImg}
                    alt="Vishwanath Haveri"
                    className="h-full w-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700 object-top"
                  />
                  
                  {/* Dark gradient fade from bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />
                  
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-yellow-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                      <Music className="text-yellow-400 animate-pulse" size={16} />
                      <span className="text-xs uppercase tracking-widest font-bold text-yellow-100 drop-shadow-[0_0_8px_rgba(250,204,21,1)]">Live Artist</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="w-full md:w-[55%] text-center md:text-left z-10">
                <h3 className="mb-4 font-batsy text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-[0_4px_15px_rgba(250,204,21,0.4)] leading-tight">
                  VISHWANATH HAVERI
                </h3>
                
                <p className="mb-4 font-body text-sm sm:text-base text-yellow-100/95 leading-relaxed font-medium">
                  For the first time ever, a sensational Kannada singer is coming to electrify the stage at <span className="text-yellow-400 font-bold tracking-wide">VENCER 2K26!</span> 🔥
                </p>

                <p className="mb-8 font-body text-sm sm:text-base text-white/70 leading-relaxed font-light">
                  Get ready for an unforgettable night as Vishwanath Haveri brings powerful vocals, high-energy vibes, and a performance that will leave you mesmerized. This isn’t just a concert — it’s the biggest highlight of VENCER 2K26.
                </p>

                <div className="flex flex-col gap-2 font-display text-[10px] sm:text-xs md:text-sm font-bold text-yellow-400/90 mb-6 drop-shadow-[0_0_8px_rgba(250,204,21,0.2)] uppercase">
                  <p>💥 Participate. Compete. Grab your seat.</p>
                  <p>💥 Feel the music. Experience the energy.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <p className="font-heading italic text-white/50 text-sm md:text-base">
                    The stage is set, the crowd is ready — <strong className="text-white text-base">are you?</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
