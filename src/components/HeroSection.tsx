import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, forwardRef } from "react";
import { Briefcase, X, Sparkles, Music, Clock } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";
import pandoraBg from "@/assets/pandora-bg.png";
import mysteryBoxImg from "@/assets/mystery-box.png";



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
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md rounded-[2rem] border border-yellow-500/20 bg-gradient-to-b from-black/90 to-yellow-950/40 p-6 sm:p-8 shadow-[0_0_80px_rgba(250,204,21,0.15)] backdrop-blur-2xl overflow-hidden cursor-default"
            >
              {/* Ambient glows inside modal */}
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-yellow-500/10 blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-orange-600/10 blur-[60px] pointer-events-none" />
              
              {/* Close button with extreme z-index and explicit positioning */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMysteryOpen(false);
                }}
                className="absolute top-4 right-4 z-[100] rounded-full p-2 text-white/50 hover:bg-yellow-400/20 hover:text-yellow-400 transition-all cursor-pointer shadow-lg bg-black/40 border border-white/5"
                aria-label="Close modal"
              >
                <X size={20} className="pointer-events-none" />
              </button>
              
              <div className="relative text-center z-10 pt-4">
                {/* Spotlight Image Container */}
                <div className="mx-auto mb-8 h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-2xl border border-yellow-500/30 shadow-[0_10px_40px_rgba(250,204,21,0.2)] bg-black/50 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                  
                  {/* Subtle pulsing ring */}
                  <div className="absolute inset-0 border-2 border-yellow-400/20 rounded-2xl scale-105 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />

                  {/* Placeholder image (Square) for mystery singer - Using a concert silhouette */}
                  <img 
                    src="https://images.unsplash.com/photo-1520690048123-5e913aeb18d8?q=80&w=600&h=600&auto=format&fit=crop" 
                    alt="Mystery Singer"
                    className="h-full w-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700 hover:opacity-100 object-center"
                  />
                  
                  {/* Dark gradient fade from bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />
                  
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-yellow-500/30 backdrop-blur-md">
                      <Music className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" size={14} />
                      <span className="text-[10px] uppercase tracking-widest font-bold text-yellow-100">Live Artist</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="mb-2 font-display text-3xl sm:text-4xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(250,204,21,0.3)]">
                  Revealing Soon
                </h3>
                
                <p className="mb-8 font-heading text-sm sm:text-base text-yellow-100/70 leading-relaxed max-w-[280px] sm:max-w-xs mx-auto">
                  A massive celebrity artist is coming to electrify the stage! Get your passes now and witness the biggest night of Vencer 2K26.
                </p>
                
                <div className="flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 px-6 py-3 text-xs sm:text-sm font-medium text-yellow-300 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                    <Clock size={16} className="text-yellow-400" />
                    <span className="tracking-wide">Grand Finale — Day 2 @ 6:00 PM</span>
                  </div>
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
