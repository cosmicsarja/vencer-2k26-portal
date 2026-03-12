import { useState, useEffect, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

const Navbar = memo(() => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => setOpen(prev => !prev), []);

  return (
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
        <Link to="/" className="flex items-center gap-2" aria-label="VENCER Home">
          <img src={vencerLogo} alt="VENCER" className="h-12 sm:h-14 w-auto bioluminescent-glow" width={112} height={56} />
        </Link>
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
        <button
          onClick={toggleMenu}
          className="lg:hidden text-foreground p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass-pandora border-t border-border/20 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`font-heading text-sm font-bold uppercase tracking-widest transition-colors py-1 ${
                    location.pathname === l.href
                      ? "text-primary text-glow-teal"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
