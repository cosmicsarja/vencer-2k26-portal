import { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SkipForward, Play } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";

interface VideoPlayerScreenProps {
  videoSource: string;
  onComplete: () => void;
}

const VideoPlayerScreen = memo(({
  videoSource,
  onComplete
}: VideoPlayerScreenProps) => {
  const [show, setShow] = useState(true);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [blockedByBrowser, setBlockedByBrowser] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Show skip button after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSkipButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-complete when video ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnd = () => handleExit();
    video.addEventListener("ended", handleEnd);
    return () => video.removeEventListener("ended", handleEnd);
  }, []);

  const handleCanPlay = () => {
    setVideoReady(true);
    const video = videoRef.current;
    if (!video) return;
    
    // Always keep sound ON as requested
    video.muted = false;
    video.play().catch(() => {
      // Browser policy blocked unmuted autoplay.
      // Instead of muting, we wait for user to click to play with sound.
      setBlockedByBrowser(true);
    });
  };

  const handlePlayBlocked = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
      setBlockedByBrowser(false);
    }
  };

  const handleExit = () => {
    setShow(false);
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Video — full bleed, object-cover for portrait phones */}
          <video
            ref={videoRef}
            src={videoSource}
            autoPlay
            playsInline
            onCanPlay={handleCanPlay}
            onError={() => handleExit()}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ pointerEvents: "none" }}
          />

          {/* Gradient overlays for readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 30%, transparent 65%, rgba(0,0,0,0.6) 100%)",
              pointerEvents: "none"
            }}
          />

          {/* Loading spinner */}
          <AnimatePresence>
            {!videoReady && (
              <motion.div
                key="loader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center z-20 bg-black"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">Loading…</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TOP BAR */}
          <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 pt-safe-top pt-6 pointer-events-none">
            {/* Logo */}
            <motion.img
              src={vencerLogo}
              alt="VENCER 2K26"
              className="h-10 w-auto object-contain"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                filter:
                  "drop-shadow(0 0 12px hsl(175 80% 50% / 0.7)) drop-shadow(0 0 30px hsl(185 90% 55% / 0.3))"
              }}
            />
          </div>

          {/* Tap-to-play overlay if browser blocked unmuted autoplay */}
          <AnimatePresence>
            {blockedByBrowser && (
              <motion.div
                key="blockedOverlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-40 flex items-center justify-center bg-black/40 cursor-pointer"
                onClick={handlePlayBlocked}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring" }}
                  className="px-8 py-4 rounded-full text-sm text-white font-bold tracking-widest uppercase flex items-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, hsl(175 80% 38%), hsl(185 90% 48%))",
                    border: "1px solid hsl(175 80% 60% / 0.5)",
                    boxShadow: "0 0 30px hsl(175 80% 45% / 0.5)"
                  }}
                >
                  <Play className="w-5 h-5 fill-white" />
                  Tap to Play Intro
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* BOTTOM BAR */}
          <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between px-5 pb-safe-bottom pb-8">
            {/* Skip button — appears after 5s */}
            <AnimatePresence>
              {showSkipButton && (
                <motion.button
                  key="skip"
                  onClick={handleExit}
                  className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold uppercase tracking-widest"
                  style={{
                    background: "rgba(0,0,0,0.55)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(8px)"
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35 }}
                  whileTap={{ scale: 0.93 }}
                >
                  <SkipForward className="w-4 h-4" />
                  Skip
                </motion.button>
              )}
            </AnimatePresence>

            {/* Enter site button */}
            <motion.button
              onClick={handleExit}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest"
              style={{
                background: "linear-gradient(135deg, hsl(175 80% 38%), hsl(185 90% 48%))",
                border: "1px solid hsl(175 80% 60% / 0.5)",
                color: "white",
                boxShadow: "0 0 20px hsl(175 80% 45% / 0.35)"
              }}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileTap={{ scale: 0.93 }}
            >
              Enter Site →
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

VideoPlayerScreen.displayName = "VideoPlayerScreen";

export default VideoPlayerScreen;
