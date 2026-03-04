import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";

const PrizeSection = () => {
  return (
    <section id="prizes" className="relative py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider fest-gradient-text mb-4">Prize Pool</h2>
          <p className="font-display text-5xl sm:text-7xl text-foreground text-glow-orange mt-6">₹5,00,000+</p>
          <p className="font-heading text-lg text-muted-foreground mt-4">in prizes across all events</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Trophy, label: "1st Place", value: "Cash + Trophy + Certificate", color: "text-fest-yellow" },
            { icon: Medal, label: "2nd Place", value: "Cash + Medal + Certificate", color: "text-fest-teal" },
            { icon: Award, label: "3rd Place", value: "Cash + Certificate", color: "text-fest-purple" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass glass-hover rounded-xl p-6 text-center transition-all duration-500"
            >
              <item.icon className={`mx-auto mb-3 ${item.color}`} size={40} />
              <div className="font-display text-lg text-foreground mb-1">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
