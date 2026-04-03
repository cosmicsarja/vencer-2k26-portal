import { useState, useEffect, useCallback, useRef, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Download, X, Share } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tribes", href: "/branches" },
  { label: "Events", href: "/events" },
  { label: "Schedule", href: "/timeline" },
  { label: "Rulebook", href: "/rulebook" },
  { label: "Gallery", href: "/gallery" },
  { label: "Developers", href: "/developers" },
  { label: "Contact", href: "/contact" },
];

// PWA install prompt event type
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Navbar = memo(() => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const isIos = /iPhone|iPad|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
  const location = useLocation();

  const overlayRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const busyRef = useRef(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Capture the beforeinstallprompt event for PWA install
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallApp = useCallback(async () => {
    if (isIos) {
      // iOS Safari doesn't support beforeinstallprompt — show manual guide
      setShowIosGuide(true);
      return;
    }
    if (!installPrompt) return;
    await installPrompt.prompt();
    const result = await installPrompt.userChoice;
    if (result.outcome === "accepted") {
      setIsInstalled(true);
      setInstallPrompt(null);
    }
  }, [installPrompt, isIos]);

  useEffect(() => {
    if (open) {
      setOpen(false);
      closeMenu();
    }
  }, [location.pathname]);

  const openMenu = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    document.body.style.overflow = "hidden";

    const overlay = overlayRef.current;
    const layers = layersRef.current
      ? Array.from(layersRef.current.querySelectorAll(".menu-layer"))
      : [];
    const items = itemsRef.current.filter(Boolean);
    const numbers = numbersRef.current.filter(Boolean);

    if (!overlay) { busyRef.current = false; return; }

    gsap.set(overlay, { display: "flex", xPercent: 100 });
    gsap.set(layers, { xPercent: 100 });
    gsap.set(items, { yPercent: 120, rotate: 8, opacity: 0 });
    gsap.set(numbers, { opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => { busyRef.current = false; },
    });

    layers.forEach((layer, i) => {
      tl.to(layer, { xPercent: 0, duration: 0.5, ease: "power4.out" }, i * 0.06);
    });

    tl.to(overlay, { xPercent: 0, duration: 0.6, ease: "power4.out" }, 0.12);
    tl.to(
      items,
      { yPercent: 0, rotate: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.08 },
      0.3
    );
    tl.to(
      numbers,
      { opacity: 0.4, duration: 0.5, ease: "power2.out", stagger: 0.06 },
      0.4
    );
  }, []);

  const closeMenu = useCallback(() => {
    const overlay = overlayRef.current;
    const layers = layersRef.current
      ? Array.from(layersRef.current.querySelectorAll(".menu-layer"))
      : [];

    if (!overlay) return;
    document.body.style.overflow = "";

    gsap.to([overlay, ...layers], {
      xPercent: 100,
      duration: 0.35,
      ease: "power3.in",
      stagger: 0.02,
      onComplete: () => {
        gsap.set(overlay, { display: "none" });
        busyRef.current = false;
      },
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const next = !open;
    setOpen(next);
    if (next) openMenu();
    else closeMenu();
  }, [open, openMenu, closeMenu]);

  // Show install button when: not yet installed AND (has browser prompt OR is iOS)
  const showInstallButton = !isInstalled && (installPrompt !== null || isIos);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-pandora shadow-[0_4px_30px_hsl(var(--fest-teal)_/_0.08)]"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex items-center gap-2 z-[60]" aria-label="VENCER Home">
            <img
              src={vencerLogo}
              alt="VENCER"
              className="h-12 sm:h-14 w-auto bioluminescent-glow"
              width={112}
              height={56}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`font-heading text-xs xl:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  location.pathname === l.href
                    ? "text-primary text-glow-teal"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}

            {/* Download App — desktop */}
            {showInstallButton && (
              <button
                onClick={handleInstallApp}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border"
                style={{
                  background: "linear-gradient(135deg, hsl(175 80% 35%), hsl(185 90% 45%))",
                  borderColor: "hsl(175 80% 55% / 0.4)",
                  color: "white",
                  boxShadow: "0 0 14px hsl(175 80% 40% / 0.3)",
                }}
                aria-label="Install app"
              >
                <Download className="w-3.5 h-3.5" />
                Install App
              </button>
            )}
          </div>

          {/* Mobile: Download + Menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {showInstallButton && (
              <button
                onClick={handleInstallApp}
                className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider z-[60]"
                style={{
                  background: "linear-gradient(135deg, hsl(175 80% 35%), hsl(185 90% 45%))",
                  color: "white",
                  boxShadow: "0 0 10px hsl(175 80% 40% / 0.3)",
                }}
                aria-label="Install app"
              >
                <Download className="w-3 h-3" />
                App
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="z-[60] flex items-center gap-3 text-foreground p-2"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="font-heading text-sm font-bold uppercase tracking-widest">
                {open ? "Close" : "Menu"}
              </span>
              <span className="relative w-8 h-8 flex items-center justify-center">
                <span
                  className={`absolute w-7 h-[2px] sm:h-[3px] bg-current transition-all duration-300 ${
                    open ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute w-7 h-[2px] sm:h-[3px] bg-current transition-all duration-300 ${
                    open ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Staggered color layers */}
      <div ref={layersRef} className="fixed inset-0 z-[51] pointer-events-none lg:hidden">
        <div
          className="menu-layer absolute inset-0"
          style={{ background: "hsl(var(--fest-teal) / 0.15)", transform: "translateX(100%)" }}
        />
        <div
          className="menu-layer absolute inset-0"
          style={{ background: "hsl(var(--fest-cyan) / 0.12)", transform: "translateX(100%)" }}
        />
      </div>

      {/* Fullscreen menu overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[52] hidden flex-col justify-center lg:hidden"
        style={{
          background:
            "linear-gradient(160deg, hsl(var(--background)) 0%, hsl(220 30% 8%) 50%, hsl(var(--background)) 100%)",
        }}
      >
        <div className="absolute bottom-0 left-0 w-[60%] h-[40%] bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--fest-teal)_/_0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[40%] h-[30%] bg-[radial-gradient(ellipse_at_top_right,hsl(var(--fest-purple)_/_0.1)_0%,transparent_70%)] pointer-events-none" />

        <div className="container px-6 sm:px-10">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((l, i) => (
              <li key={l.href} className="overflow-hidden">
                <Link
                  ref={(el) => { itemsRef.current[i] = el; }}
                  to={l.href}
                  onClick={() => { if (open) { setOpen(false); closeMenu(); } }}
                  className={`group flex items-baseline gap-4 py-3 transition-colors duration-300 ${
                    location.pathname === l.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <span
                    ref={(el) => { numbersRef.current[i] = el; }}
                    className="font-body text-xs text-muted-foreground/40 w-6 tabular-nums"
                  >
                    0{i + 1}
                  </span>
                  <span className="font-display text-3xl sm:text-4xl tracking-wider uppercase group-hover:text-glow-teal transition-all duration-300">
                    {l.label}
                  </span>
                </Link>
              </li>
            ))}

            {/* Install App inside mobile menu */}
            {showInstallButton && (
              <li className="overflow-hidden mt-4">
                <button
                  onClick={() => { handleInstallApp(); closeMenu(); }}
                  className="flex items-center gap-3 py-3 font-display text-2xl sm:text-3xl tracking-wider uppercase text-primary hover:text-glow-teal transition-all duration-300"
                >
                  <Download className="w-6 h-6" />
                  Install App
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* iOS "Add to Home Screen" guide modal */}
      <AnimatePresence>
        {showIosGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-end justify-center p-4"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
            onClick={() => setShowIosGuide(false)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-sm rounded-2xl p-6 text-center"
              style={{
                background: "hsl(220 28% 10%)",
                border: "1px solid hsl(175 80% 40% / 0.3)",
                boxShadow: "0 0 40px hsl(175 80% 40% / 0.2)",
              }}
            >
              <button
                onClick={() => setShowIosGuide(false)}
                className="absolute top-3 right-3 p-1 text-muted-foreground"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Share className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg tracking-wider pandora-gradient-text mb-2 font-bold">
                Install VENCER App
              </h3>
              <p className="text-muted-foreground text-sm mb-4">To install on your iPhone:</p>

              <ol className="text-left space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>Tap the <strong className="text-primary">Share</strong> button <Share className="inline w-4 h-4 text-primary" /> at the bottom of Safari</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span>Scroll down and tap <strong className="text-primary">"Add to Home Screen"</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span>Tap <strong className="text-primary">"Add"</strong> to install the app!</span>
                </li>
              </ol>

              <button
                onClick={() => setShowIosGuide(false)}
                className="mt-6 w-full py-3 rounded-xl font-bold text-sm uppercase tracking-widest"
                style={{
                  background: "linear-gradient(135deg, hsl(175 80% 38%), hsl(185 90% 48%))",
                  color: "white",
                }}
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});


Navbar.displayName = "Navbar";
export default Navbar;
