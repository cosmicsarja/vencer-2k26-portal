import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vencerLogo from "@/assets/vencer-logo.png";

const spores = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 1.5,
  duration: 2 + Math.random() * 2,
}));

const tribalSymbols = [
  { angle: 0, size: 200 },
  { angle: 60, size: 260 },
  { angle: 120, size: 320 },
  { angle: 180, size: 200 },
  { angle: 240, size: 280 },
  { angle: 300, size: 240 },
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 700);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(180deg, hsl(220 30% 3%) 0%, hsl(220 30% 8%) 50%, hsl(210 40% 6%) 100%)" }}
        >
          {/* Ambient glow layers */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,hsl(175_80%_40%_/_0.06)_0%,transparent_70%)]" />
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,hsl(270_55%_50%_/_0.04)_0%,transparent_70%)]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,hsl(210_85%_50%_/_0.04)_0%,transparent_70%)]" />
          </div>

          {/* Floating spores */}
          {spores.map((s) => (
            <motion.div
              key={s.id}
              className="absolute rounded-full"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: s.size,
                height: s.size,
                backgroundColor: `hsl(175 80% 55% / 0.4)`,
                boxShadow: `0 0 ${s.size * 3}px hsl(175 80% 55% / 0.3)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0.3, 0.7, 0],
                scale: [0, 1, 0.8, 1.1, 0],
                y: [0, -30, -60],
                x: [0, Math.random() * 40 - 20],
              }}
              transition={{
                delay: s.delay + 0.5,
                duration: s.duration,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Tribal ring patterns */}
          <div className="absolute inset-0 flex items-center justify-center">
            {tribalSymbols.map((t, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border"
                style={{
                  width: t.size,
                  height: t.size,
                  borderColor: `hsl(175 80% 40% / 0.08)`,
                }}
                initial={{ opacity: 0, scale: 0.5, rotate: t.angle }}
                animate={{
                  opacity: [0, 0.3, 0.1],
                  scale: [0.5, 1, 1.1],
                  rotate: t.angle + 30,
                }}
                transition={{
                  delay: 1.2 + i * 0.15,
                  duration: 2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Energy spread */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 300,
              height: 300,
              background: "radial-gradient(circle, hsl(175 80% 45% / 0.15), transparent 70%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2.5, 3], opacity: [0, 0.5, 0] }}
            transition={{ delay: 0.8, duration: 2, ease: "easeOut" }}
          />

          {/* Logo */}
          <motion.img
            src={vencerLogo}
            alt="VENCER 2K26"
            className="w-[200px] sm:w-[300px] relative z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: [0.5, 1.08, 1] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              filter: "drop-shadow(0 0 30px hsl(175 80% 45% / 0.5)) drop-shadow(0 0 60px hsl(185 90% 50% / 0.3))",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
