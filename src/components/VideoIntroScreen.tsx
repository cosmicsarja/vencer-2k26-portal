import { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vencerLogo from "@/assets/vencer-logo.png";

interface VideoIntroScreenProps {
  videoSource?: string; // URL to intro video
  onComplete: () => void;
  duration?: number; // in milliseconds
}

const VideoIntroScreen = memo(({
  videoSource,
  onComplete,
  duration = 5000
}: VideoIntroScreenProps) => {
  const [show, setShow] = useState(true);
  const [videoEnded, setVideoEnded] = useState(!videoSource);
  const [showButton, setShowButton] = useState(!videoSource); // Show button immediately if no video
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  // Animated particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
    }

    const particles: Particle[] = [];

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity -= 0.003;

        if (particle.opacity <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.opacity = Math.random() * 0.5 + 0.3;
        }

        ctx.fillStyle = `hsla(175, 80%, 50%, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animateParticles);
    };

    animationRef.current = requestAnimationFrame(animateParticles);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle video end and show button
  useEffect(() => {
    if (!videoEnded) return;

    const timer = setTimeout(() => {
      setShowButton(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [videoEnded]);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  // Always ensure button shows after duration timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoEnded(true);
      setShowButton(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleVideoError = () => {
    console.warn("Video failed to load, showing button immediately");
    setVideoEnded(true);
  };

  const handleEnterExperience = () => {
    // Fade out animation
    setShow(false);
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(180deg, hsl(220 30% 3%) 0%, hsl(220 30% 8%) 50%, hsl(210 40% 6%) 100%)"
          }}
        >
          {/* Particle background */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 opacity-40"
            style={{ pointerEvents: "none" }}
          />

          {/* Video background or fallback animation */}
          {videoSource ? (
            <motion.video
              ref={videoRef}
              src={videoSource}
              autoPlay
              onEnded={handleVideoEnded}
              onError={handleVideoError}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ pointerEvents: "none" }}
            />
          ) : (
            <>
              {/* Ambient glow */}
              <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(175_80%_40%_/_0.06)_0%,transparent_70%)]" />
              </div>

              {/* Expanding rings */}
              <motion.div
                className="absolute rounded-full border-2"
                style={{
                  width: 200,
                  height: 200,
                  borderColor: "hsl(175 80% 45% / 0.3)"
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 2, 3], opacity: [0.5, 0.3, 0] }}
                transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute rounded-full border"
                style={{
                  width: 300,
                  height: 300,
                  borderColor: "hsl(175 80% 45% / 0.2)"
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 2.5, 3.5], opacity: [0.3, 0.15, 0] }}
                transition={{ duration: 2.5, ease: "easeOut", repeat: Infinity, delay: 0.3 }}
                aria-hidden="true"
              />
            </>
          )}

          {/* Overlay scrim when showing button */}
          {showButton && (
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: "none" }}
            />
          )}

          {/* Logo */}
          <motion.img
            src={vencerLogo}
            alt="VENCER 2K26"
            className="w-[180px] sm:w-[280px] h-auto relative z-10 object-contain"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: [0.5, 1.08, 1] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              filter: "drop-shadow(0 0 30px hsl(175 80% 45% / 0.5)) drop-shadow(0 0 60px hsl(185 90% 50% / 0.3))"
            }}
          />

          {/* Text and button */}
          <motion.div
            className="relative z-20 mt-8 sm:mt-12 text-center flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {videoSource && !videoEnded && (
              <p className="text-sm sm:text-base text-gray-300 uppercase tracking-widest">
                Loading Experience...
              </p>
            )}
          </motion.div>

          {/* Skip Button - Always visible as fallback */}
          <motion.button
            onClick={handleEnterExperience}
            className="absolute top-6 right-6 z-30 px-4 py-2 text-xs sm:text-sm uppercase tracking-widest rounded border"
            style={{
              background: "rgba(175, 80%, 50%, 0.2)",
              borderColor: "hsl(175 80% 60% / 0.4)",
              color: "hsl(220 30% 85%)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{
              background: "rgba(175, 80%, 50%, 0.3)",
              borderColor: "hsl(175 80% 60% / 0.6)"
            }}
          >
            Skip
          </motion.button>

          {/* Enter Experience Button */}
          <AnimatePresence>
            {showButton && (
              <motion.button
                onClick={handleEnterExperience}
                className="relative z-20 mt-auto mb-20 px-8 py-3 font-display text-sm sm:text-base uppercase tracking-widest"
                style={{
                  background: "linear-gradient(135deg, hsl(175 80% 40%), hsl(185 90% 50%))",
                  boxShadow: "0 0 30px hsl(175 80% 45% / 0.5), inset 0 0 30px hsl(175 80% 50% / 0.2)",
                  color: "hsl(220 30% 95%)",
                  border: "1px solid hsl(175 80% 60% / 0.4)"
                }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px hsl(175 80% 45% / 0.8), inset 0 0 40px hsl(175 80% 50% / 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                ENTER EXPERIENCE
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

VideoIntroScreen.displayName = "VideoIntroScreen";

export default VideoIntroScreen;
