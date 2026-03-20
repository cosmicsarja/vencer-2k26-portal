import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Instagram, Github, Linkedin } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";

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
    <footer ref={ref} className="border-t border-border/20 py-8 sm:py-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(175_80%_40%_/_0.03)_0%,transparent_50%)]" />
      <div className="container px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center sm:text-left">
            <img src={vencerLogo} alt="VENCER 2K26" className="h-10 sm:h-12 w-auto mb-3 bioluminescent-glow mx-auto sm:mx-0" />
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Angadi Institute of Technology and Management<br />
              Belagavi, Karnataka
            </p>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-heading text-xs sm:text-sm uppercase tracking-widest text-foreground mb-2 sm:mb-3">Quick Links</p>
            <div className="flex flex-wrap justify-center sm:justify-start sm:flex-col gap-2 sm:gap-2">
              {footerLinks.map((l) => (
                <Link key={l.href} to={l.href} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-heading text-xs sm:text-sm uppercase tracking-widest text-foreground mb-2 sm:mb-3">Follow Us</p>
            <div className="flex gap-3 justify-center sm:justify-start">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 glass-pandora rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border-teal transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="border-t border-border/20 py-6 sm:py-8 mb-4 sm:mb-6">
          <p className="font-heading text-xs sm:text-sm uppercase tracking-widest text-foreground mb-4 sm:mb-5 text-center">Our Sponsors</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-fest-teal/10 to-fest-cyan/5 border-2 border-dashed border-border/40 rounded-lg flex items-center justify-center hover:border-fest-teal/50 hover:bg-fest-teal/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors text-[10px] sm:text-xs font-heading uppercase tracking-wider">
                    Sponsor Logo
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/20 pt-4 sm:pt-6 text-center">
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            © 2026 VENCER. All rights reserved. | AITM, Belagavi
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;