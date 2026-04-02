import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vencerLogo from "@/assets/vencer-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = memo(({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Animate progress from 0 → 100 over ~2s
    let current = 0;
    const totalDuration = 2000; // ms
    const interval = 18; // tick every 18ms (~55fps)
    const step = 100 / (totalDuration / interval);

    const timer = setInterval(() => {
      current += step * (0.8 + Math.random() * 0.4); // slight randomness
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(timer);
        // Small pause at 100% then exit
        setTimeout(() => setDone(true), 400);
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(180deg, hsl(220 30% 3%) 0%, hsl(220 30% 7%) 60%, hsl(210 40% 5%) 100%)",
          }}
        >
          {/* Subtle radial glow behind logo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 45%, hsl(175 80% 30% / 0.18) 0%, transparent 70%)",
            }}
          />

          {/* Logo */}
          <motion.img
            src={vencerLogo}
            alt="VENCER 2K26"
            className="w-40 sm:w-52 md:w-64 h-auto object-contain mb-10"
            initial={{ opacity: 0, scale: 0.75, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              filter:
                "drop-shadow(0 0 24px hsl(175 80% 50% / 0.6)) drop-shadow(0 0 60px hsl(185 90% 55% / 0.25))",
            }}
          />

          {/* Progress bar container */}
          <div className="w-56 sm:w-72 flex flex-col items-center gap-3">
            {/* Bar track */}
            <div
              className="w-full h-[3px] rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, hsl(175 80% 40%), hsl(185 90% 55%), hsl(175 80% 65%))",
                  boxShadow: "0 0 10px hsl(175 80% 55% / 0.8)",
                }}
                transition={{ ease: "linear", duration: 0 }}
              />
            </div>

            {/* Percentage + label */}
            <div className="flex items-center justify-between w-full">
              <span
                className="text-xs uppercase tracking-[0.25em] font-medium"
                style={{ color: "hsl(175 80% 70%)" }}
              >
                Loading
              </span>
              <motion.span
                className="text-xs font-mono font-semibold tabular-nums"
                style={{ color: "hsl(175 60% 85%)" }}
              >
                {progress}%
              </motion.span>
            </div>
          </div>

          {/* Small pulsing dots */}
          <div className="flex gap-1.5 mt-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "hsl(175 80% 50%)" }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

SplashScreen.displayName = "SplashScreen";
export default SplashScreen;
