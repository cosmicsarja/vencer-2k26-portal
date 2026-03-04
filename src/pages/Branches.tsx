import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Monitor, Cog, Building2, Cpu, Zap } from "lucide-react";
import { branches } from "@/data/events";

const branchIcons = [Brain, Monitor, Cog, Building2, Cpu, Zap];

const branchDescriptions = [
  "Exploring the frontiers of artificial intelligence, machine learning, and data-driven innovation.",
  "Building the digital future through software engineering, algorithms, and cutting-edge computing.",
  "Engineering excellence in design, manufacturing, and robotics.",
  "Shaping the built environment through structural innovation and sustainable design.",
  "Connecting the world through communication systems, VLSI, and embedded technologies.",
  "Powering progress through electrical systems, renewable energy, and smart grids.",
];

const Branches = () => {
  return (
    <section className="relative py-24 pt-28 min-h-screen">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl tracking-wider fest-gradient-text mb-4">Participating Branches</h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Six departments, one fest, endless possibilities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, i) => {
            const Icon = branchIcons[i];
            return (
              <motion.div
                key={branch.shortName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass glass-hover rounded-xl p-6 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{branch.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{branchDescriptions[i]}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-heading">{branch.events.length} Events</span>
                  <Link
                    to="/events"
                    className="text-xs font-display tracking-wider text-primary hover:text-accent transition-colors"
                  >
                    View Events →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Branches;
