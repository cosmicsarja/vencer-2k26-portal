import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Trophy, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Participants", accent: "fest-teal" },
  { icon: Trophy, value: "50+", label: "Events", accent: "fest-cyan" },
  { icon: Zap, value: "₹5L+", label: "Prize Pool", accent: "fest-orange" },
  { icon: Star, value: "6", label: "Tribes", accent: "fest-purple" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider pandora-gradient-text mb-4">About VENCER</h2>
          <p className="font-body text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            VENCER 2K26 is the flagship national-level techno-cultural fest of Angadi Institute of Technology and Management, Belagavi.
            A melting pot of innovation, creativity, and talent — bringing together the brightest minds across engineering disciplines
            for three days of electrifying competitions, workshops, cultural performances, and unforgettable experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-pandora rounded-2xl p-6 text-center transition-all duration-500 hover:glow-border-teal group"
            >
              <s.icon className={`mx-auto mb-3 text-${s.accent}`} size={32} />
              <div className="font-display text-2xl text-foreground mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground font-heading uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
