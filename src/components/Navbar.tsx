import { useState, useEffect, useCallback, useRef, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import vencerLogo from "@/assets/vencer-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tribes", href: "/branches" },
  { label: "Events", href: "/events" },
  { label: "Schedule", href: "/timeline" },
  { label: "Gallery", href: "/gallery" },
  { label: "Developers", href: "/developers" },
  { label: "Contact", href: "/contact" },
];

const Navbar = memo(() => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

    // Set initial states
    gsap.set(overlay, { display: "flex", xPercent: 100 });
    gsap.set(layers, { xPercent: 100 });
    gsap.set(items, { yPercent: 120, rotate: 8, opacity: 0 });
    gsap.set(numbers, { opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => { busyRef.current = false; },
    });

    // Stagger the color layers in
    layers.forEach((layer, i) => {
      tl.to(layer, { xPercent: 0, duration: 0.5, ease: "power4.out" }, i * 0.06);
    });

    // Main panel slides in
    tl.to(overlay, { xPercent: 0, duration: 0.6, ease: "power4.out" }, 0.12);

    // Menu items stagger up
    tl.to(
      items,
      {
        yPercent: 0,
        rotate: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.08,
      },
      0.3
    );

    // Numbers fade in
    tl.to(
      numbers,
      {
        opacity: 0.4,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.06,
      },
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
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-[60] flex items-center gap-3 text-foreground p-2"
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
      </nav>

      {/* Staggered color layers */}
      <div ref={layersRef} className="fixed inset-0 z-[51] pointer-events-none lg:hidden">
        <div
          className="menu-layer absolute inset-0"
          style={{
            background: "hsl(var(--fest-teal) / 0.15)",
            transform: "translateX(100%)",
          }}
        />
        <div
          className="menu-layer absolute inset-0"
          style={{
            background: "hsl(var(--fest-cyan) / 0.12)",
            transform: "translateX(100%)",
          }}
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
        {/* Subtle glow accent */}
        <div className="absolute bottom-0 left-0 w-[60%] h-[40%] bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--fest-teal)_/_0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[40%] h-[30%] bg-[radial-gradient(ellipse_at_top_right,hsl(var(--fest-purple)_/_0.1)_0%,transparent_70%)] pointer-events-none" />

        <div className="container px-6 sm:px-10">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((l, i) => (
              <li key={l.href} className="overflow-hidden">
                <Link
                  ref={(el) => { itemsRef.current[i] = el; }}
                  to={l.href}
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
          </ul>
        </div>
      </div>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
