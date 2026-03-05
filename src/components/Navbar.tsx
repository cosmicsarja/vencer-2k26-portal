import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import vencerLogo from "@/assets/vencer-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Rulebook", href: "/rulebook" },
  { label: "Timeline", href: "/timeline" },
  { label: "Branches", href: "/branches" },
  { label: "Developers", href: "/developers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") !== "light";
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={vencerLogo} alt="VENCER" className="h-10 w-auto" />
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`font-heading text-sm uppercase tracking-widest transition-colors duration-300 ${
                location.pathname === l.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-9 h-9 rounded-full flex items-center justify-center glass text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-9 h-9 rounded-full flex items-center justify-center glass text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass border-t border-border/30 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-heading text-sm uppercase tracking-widest transition-colors ${
                    location.pathname === l.href
                      ? "text-primary"
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
};

export default Navbar;
