import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Monitor, Cog, Building2, Cpu, Zap, Waves } from "lucide-react";
import { branches } from "@/data/events";

const tribes = [
  {
    clanName: "Spirit Tech Clan",
    icon: Brain,
    biome: "Neural Forest",
    accent: "fest-teal",
    glowVar: "--fest-teal",
    gradient: "from-fest-teal/15 via-fest-cyan/5 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-teal)_/_0.25)]",
    desc: "Masters of the spirit network — weaving artificial minds into the fabric of Pandora's consciousness.",
  },
  {
    clanName: "Digital Forest Clan",
    icon: Monitor,
    biome: "Code Jungle",
    accent: "fest-cyan",
    glowVar: "--fest-cyan",
    gradient: "from-fest-cyan/15 via-fest-blue/5 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-cyan)_/_0.25)]",
    desc: "Architects of the digital canopy — building the infinite forest of logic and software.",
  },
  {
    clanName: "Iron Mountain Clan",
    icon: Cog,
    biome: "Volcanic Forge",
    accent: "fest-orange",
    glowVar: "--fest-orange",
    gradient: "from-fest-orange/15 via-fest-ember/5 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-orange)_/_0.25)]",
    desc: "Forged in volcanic fire — shaping metal and machine with the strength of mountains.",
  },
  {
    clanName: "Earth Builders Clan",
    icon: Building2,
    biome: "Stone Valley",
    accent: "fest-yellow",
    glowVar: "--fest-yellow",
    gradient: "from-fest-yellow/15 via-fest-orange/5 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-yellow)_/_0.25)]",
    desc: "Guardians of the land — raising structures that stand as monuments to Pandora's strength.",
  },
  {
    clanName: "Signal Sky Clan",
    icon: Cpu,
    biome: "Aurora Heights",
    accent: "fest-purple",
    glowVar: "--fest-purple",
    gradient: "from-fest-purple/15 via-fest-blue/5 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-purple)_/_0.25)]",
    desc: "Riders of the aurora — channeling electromagnetic waves across Pandora's skies.",
  },
  {
    clanName: "Energy Storm Clan",
    icon: Zap,
    biome: "Lightning Plains",
    accent: "fest-blue",
    glowVar: "--fest-blue",
    gradient: "from-fest-blue/15 via-fest-teal/5 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-blue)_/_0.25)]",
    desc: "Harvesters of the storm — commanding the raw power that flows through all living things.",
  },
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
          <h1 className="font-display text-3xl sm:text-4xl tracking-wider pandora-gradient-text mb-4">
            The Tribes of VENCER
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Six clans, one world. Each tribe commands a unique biome of knowledge and innovation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, i) => {
            const tribe = tribes[i] || tribes[0];
            const Icon = tribe.icon;
            return (
              <motion.div
                key={branch.shortName}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 group border border-${tribe.accent}/20 ${tribe.borderGlow}`}
              >
                {/* Organic background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tribe.gradient}`} />
                <div className="absolute inset-0 glass-pandora" />

                <div className="relative p-6">
                  {/* Biome label */}
                  <span className={`font-display text-[10px] tracking-widest text-${tribe.accent} opacity-60 uppercase`}>
                    {tribe.biome}
                  </span>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-${tribe.accent}/10 flex items-center justify-center my-4 transition-all group-hover:bg-${tribe.accent}/20 group-hover:shadow-[0_0_20px_hsl(var(${tribe.glowVar})_/_0.2)]`}>
                    <Icon size={28} className={`text-${tribe.accent}`} />
                  </div>

                  {/* Clan name */}
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">{tribe.clanName}</h3>
                  <p className="font-heading text-sm text-muted-foreground mb-2">{branch.name}</p>
                  <p className="text-sm text-muted-foreground/80 mb-5 leading-relaxed">{tribe.desc}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-heading">
                      {branch.events.length} Events
                    </span>
                    <Link
                      to="/events"
                      className={`text-xs font-display tracking-wider text-${tribe.accent} hover:text-foreground transition-colors`}
                    >
                      View Events →
                    </Link>
                  </div>
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
