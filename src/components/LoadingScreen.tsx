import { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vencerLogo from "@/assets/vencer-logo.png";

const LoadingScreen = memo(({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    const duration = 2400;

    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const t = Math.min(elapsed / duration, 1);

      // Smooth easeInOutCubic
      const eased = t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const pct = Math.round(eased * 100);

      // Update bar via DOM directly for smooth 60fps
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${eased})`;
      }
      setProgress(pct);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setShow(false);
          setTimeout(onComplete, 500);
        }, 400);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(180deg, hsl(220 30% 3%) 0%, hsl(220 30% 8%) 50%, hsl(210 40% 6%) 100%)" }}
          aria-label="Loading VENCER 2K26"
          role="status"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(175_80%_40%_/_0.06)_0%,transparent_70%)]" />
          </div>

          {/* Expanding ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 300,
              height: 300,
              background: "radial-gradient(circle, hsl(175 80% 45% / 0.15), transparent 70%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2.5, 3], opacity: [0, 0.5, 0] }}
            transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
            aria-hidden="true"
          />

          {/* Logo - no fixed width/height attrs to avoid square box */}
          <motion.img
            src={vencerLogo}
            alt="VENCER 2K26"
            className="w-[180px] sm:w-[280px] h-auto relative z-10 object-contain"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: [0.5, 1.08, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              filter: "drop-shadow(0 0 30px hsl(175 80% 45% / 0.5)) drop-shadow(0 0 60px hsl(185 90% 50% / 0.3))",
            }}
          />

          {/* Loading bar + percentage */}
          <motion.div
            className="relative z-10 mt-8 sm:mt-10 flex flex-col items-center gap-3 w-[220px] sm:w-[300px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* Progress bar track */}
            <div className="w-full h-[5px] rounded-full overflow-hidden" style={{ background: "hsl(220 20% 12% / 0.8)" }}>
              <div
                ref={barRef}
                className="h-full rounded-full will-change-transform"
                style={{
                  transformOrigin: "left center",
                  transform: "scaleX(0)",
                  background: "linear-gradient(90deg, hsl(175 80% 40%), hsl(185 90% 50%), hsl(210 85% 55%))",
                  boxShadow: "0 0 10px hsl(175 80% 45% / 0.5), 0 0 25px hsl(185 90% 50% / 0.25)",
                }}
              />
            </div>

            {/* Percentage text */}
            <span
              className="font-display text-xs sm:text-sm tracking-[0.3em]"
              style={{
                color: progress > 80
                  ? "hsl(175 60% 65%)"
                  : "hsl(200 15% 55%)",
                textShadow: progress > 90 ? "0 0 12px hsl(175 80% 45% / 0.5)" : "none",
                transition: "color 0.3s, text-shadow 0.3s",
              }}
            >
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

LoadingScreen.displayName = "LoadingScreen";

export default LoadingScreen;
