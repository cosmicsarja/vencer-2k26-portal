import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";
import "@/styles/sponsors-carousel.css";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Tribes", href: "/branches" },
  { label: "Developers", href: "/developers" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/aitm_belagavi_/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/angadi-institute-of-technology-and-management-belagavi-488231275/", label: "LinkedIn" },
];

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="border-t border-border/20 relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(175_80%_40%_/_0.03)_0%,transparent_50%)]" />
      <div className="container px-4 relative">
        
        {/* About AITM Section */}
        <div className="py-12 sm:py-16 border-b border-border/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Logo & Tagline */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <img src={vencerLogo} alt="VENCER 2K26" className="h-12 sm:h-14 w-auto mb-4 bioluminescent-glow mx-auto lg:mx-0" />
              <p className="text-sm font-heading tracking-widest text-fest-teal mb-4 font-bold italic">
                Where Innovation Begins, and Leaders Rise.
              </p>
              <div className="flex justify-center lg:justify-start gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 glass-pandora rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border-teal transition-all duration-300"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* About AITM */}
            <div className="lg:col-span-2">
              <h3 className="font-heading text-sm sm:text-base uppercase tracking-widest text-foreground mb-4 font-bold">About AITM</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                Angadi Institute of Technology and Management (AITM), Belagavi, is a dynamic hub of innovation, excellence, and future-ready education. Known for shaping skilled engineers and leaders, AITM blends cutting-edge technology, industry-driven learning, and vibrant campus life to create an inspiring academic ecosystem.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                With world-class infrastructure, expert faculty, and a strong focus on creativity and real-world problem solving, the institute empowers students to think beyond boundaries. Events like VENCER reflect AITM's spirit—where talent meets opportunity, ideas turn into impact, and innovation takes center stage.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 border-b border-border/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8">
            {/* Institute Info */}
            <div>
              <p className="font-heading text-xs sm:text-sm uppercase tracking-widest text-foreground mb-4 font-bold">Institute</p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-fest-teal mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Angadi Institute of Technology & Management<br />
                    <span className="text-muted-foreground/70">Belagavi, Karnataka</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-fest-teal flex-shrink-0" />
                  <a href="tel:+91831-2438100" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    0831-2438100/123
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={16} className="text-fest-teal mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@aitm.edu.in" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    cultural@aitmbgm.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-heading text-xs sm:text-sm uppercase tracking-widest text-foreground mb-4 font-bold">Quick Links</p>
              <div className="space-y-2">
                {footerLinks.map((l) => (
                  <Link 
                    key={l.href} 
                    to={l.href} 
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    → {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* VENCER Info */}
            <div>
              <p className="font-heading text-xs sm:text-sm uppercase tracking-widest text-fest-teal mb-4 font-bold">VENCER 2K26</p>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Annual Technical & Cultural Festival
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/70">
                  Celebrating innovation, talent, and creativity across all engineering disciplines and cultural pursuits.
                </p>
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="font-heading text-xs sm:text-sm uppercase tracking-widest text-foreground mb-4 font-bold">Connect With Us</p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Follow us on social media for updates, announcements, and highlights from VENCER.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-[10px] sm:text-xs rounded-md border border-primary/20 hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 sm:py-8">
          <div className="text-center space-y-3 mb-4">
            <p className="text-[10px] sm:text-xs text-muted-foreground font-semibold">
              © 2026 VENCER. All Rights Reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-muted-foreground/60">
              AITM, Belagavi | Crafted with 💜 by the VENCER Team
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
          <p className="text-[9px] sm:text-[10px] text-muted-foreground/50 text-center mt-4">
            Innovation is our spirit. Excellence is our goal. VENCER is our platform.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;