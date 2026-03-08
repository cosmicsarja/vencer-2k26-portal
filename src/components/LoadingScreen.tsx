import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vencerLogo from "@/assets/vencer-logo.png";

const LoadingScreen = memo(({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(180deg, hsl(220 30% 3%) 0%, hsl(220 30% 8%) 50%, hsl(210 40% 6%) 100%)" }}
          aria-label="Loading VENCER 2K26"
          role="status"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(175_80%_40%_/_0.06)_0%,transparent_70%)]" />
          </div>

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

          <motion.img
            src={vencerLogo}
            alt="VENCER 2K26"
            className="w-[180px] sm:w-[280px] relative z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: [0.5, 1.08, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              filter: "drop-shadow(0 0 30px hsl(175 80% 45% / 0.5)) drop-shadow(0 0 60px hsl(185 90% 50% / 0.3))",
            }}
            width={280}
            height={140}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
});

LoadingScreen.displayName = "LoadingScreen";

export default LoadingScreen;
