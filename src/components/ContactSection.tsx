import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider neon-gradient-text mb-4">Contact Us</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: "vencer@aitm.ac.in", href: "mailto:vencer@aitm.ac.in" },
            { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
            { icon: MapPin, label: "Location", value: "AITM, Belagavi, Karnataka", href: "#" },
            { icon: Instagram, label: "Instagram", value: "@vencer2k26", href: "https://instagram.com" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass glass-hover rounded-xl p-6 text-center transition-all duration-500 block"
            >
              <item.icon className="mx-auto mb-3 text-primary" size={28} />
              <div className="font-heading text-sm uppercase tracking-widest text-muted-foreground mb-1">{item.label}</div>
              <div className="text-sm text-foreground">{item.value}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
