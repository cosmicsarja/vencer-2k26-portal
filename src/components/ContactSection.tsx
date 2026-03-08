import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="container px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-wider fest-gradient-text mb-4">Contact Us</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12">
          {[
            { icon: Mail, label: "Email", value: "vencer@aitm.ac.in", href: "mailto:vencer@aitm.ac.in" },
            { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
            { icon: MapPin, label: "Location", value: "AITM, Belagavi", href: "#" },
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
              className="glass glass-hover rounded-xl p-4 sm:p-6 text-center transition-all duration-500 block"
            >
              <item.icon className="mx-auto mb-2 sm:mb-3 text-primary" size={24} />
              <div className="font-heading text-[10px] sm:text-sm uppercase tracking-widest text-muted-foreground mb-1">{item.label}</div>
              <div className="text-xs sm:text-sm text-foreground break-all sm:break-normal">{item.value}</div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass rounded-xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.0!2d74.4977!3d15.8537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf658e8f6e5b1d%3A0x43d1e71e7a7e4b0a!2sAngadi%20Institute%20of%20Technology%20and%20Management%2C%20Savagaon%20Road%2C%20Belagavi%2C%20Savgaon%2C%20Karnataka%20590006%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AITM Belagavi Location"
            className="w-full sm:h-[350px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;