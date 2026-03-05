import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Gamepad2, Camera, Music, BookOpen, Lightbulb } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";

const floatingIcons = [
  { Icon: Code, angle: 0, color: "text-fest-teal" },
  { Icon: Camera, angle: 60, color: "text-fest-yellow" },
  { Icon: Music, angle: 120, color: "text-fest-purple" },
  { Icon: Gamepad2, angle: 180, color: "text-fest-blue" },
  { Icon: BookOpen, angle: 240, color: "text-fest-orange" },
  { Icon: Lightbulb, angle: 300, color: "text-fest-teal" },
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--card))_0%,hsl(var(--background))_70%)]" />

          <div className="relative flex items-center justify-center">
            {/* Floating icons bursting outward */}
            {floatingIcons.map(({ Icon, angle, color }, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * 140;
              const y = Math.sin(rad) * 140;
              return (
                <motion.div
                  key={i}
                  className={`absolute ${color}`}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.6, 0.3], x, y, scale: [0, 1.2, 0.8] }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 1.2, ease: "easeOut" }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    <Icon size={22} />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Logo */}
            <motion.img
              src={vencerLogo}
              alt="VENCER 2K26"
              className="w-[220px] sm:w-[320px] relative z-10"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: [0.6, 1.05, 1] }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                filter: "drop-shadow(0 0 30px hsl(var(--fest-orange) / 0.5)) drop-shadow(0 0 60px hsl(var(--fest-yellow) / 0.3))",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
