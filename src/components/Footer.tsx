import { Link } from "react-router-dom";
import { Instagram, Github, Linkedin } from "lucide-react";
import vencerLogo from "@/assets/vencer-logo.png";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Developers", href: "/developers" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={vencerLogo} alt="VENCER 2K26" className="h-12 w-auto mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Angadi Institute of Technology and Management<br />
              Belagavi, Karnataka
            </p>
          </div>
          <div>
            <p className="font-heading text-sm uppercase tracking-widest text-foreground mb-3">Quick Links</p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((l) => (
                <Link key={l.href} to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-heading text-sm uppercase tracking-widest text-foreground mb-3">Follow Us</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border-orange transition-all duration-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border/30 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 VENCER. All rights reserved. | Angadi Institute of Technology and Management, Belagavi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
