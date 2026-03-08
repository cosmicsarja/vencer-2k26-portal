import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Monitor, Cog, Building2, Cpu, Zap, Bot } from "lucide-react";
import { branches } from "@/data/events";

const tribes = [
  {
    clanName: "Spirit Tech Clan",
    icon: Brain,
    biome: "Neural Forest",
    accent: "fest-teal",
    glowVar: "--fest-teal",
    gradient: "from-fest-teal/20 via-fest-cyan/10 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-teal)_/_0.35)]",
    desc: "Masters of the spirit network — weaving artificial minds into the fabric of Pandora's consciousness.",
  },
  {
    clanName: "Digital Forest Clan",
    icon: Monitor,
    biome: "Code Jungle",
    accent: "fest-cyan",
    glowVar: "--fest-cyan",
    gradient: "from-fest-cyan/20 via-fest-blue/10 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-cyan)_/_0.35)]",
    desc: "Architects of the digital canopy — building the infinite forest of logic and software.",
  },
  {
    clanName: "Iron Mountain Clan",
    icon: Cog,
    biome: "Volcanic Forge",
    accent: "fest-orange",
    glowVar: "--fest-orange",
    gradient: "from-fest-orange/20 via-fest-ember/10 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-orange)_/_0.35)]",
    desc: "Forged in volcanic fire — shaping metal and machine with the strength of mountains.",
  },
  {
    clanName: "Earth Builders Clan",
    icon: Building2,
    biome: "Stone Valley",
    accent: "fest-yellow",
    glowVar: "--fest-yellow",
    gradient: "from-fest-yellow/20 via-fest-orange/10 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-yellow)_/_0.35)]",
    desc: "Guardians of the land — raising structures that stand as monuments to Pandora's strength.",
  },
  {
    clanName: "Signal Sky Clan",
    icon: Cpu,
    biome: "Aurora Heights",
    accent: "fest-purple",
    glowVar: "--fest-purple",
    gradient: "from-fest-purple/20 via-fest-blue/10 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-purple)_/_0.35)]",
    desc: "Riders of the aurora — channeling electromagnetic waves across Pandora's skies.",
  },
  {
    clanName: "Energy Storm Clan",
    icon: Zap,
    biome: "Lightning Plains",
    accent: "fest-blue",
    glowVar: "--fest-blue",
    gradient: "from-fest-blue/20 via-fest-teal/10 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-blue)_/_0.35)]",
    desc: "Harvesters of the storm — commanding the raw power that flows through all living things.",
  },
  {
    clanName: "Steel Sentinel Clan",
    icon: Bot,
    biome: "Mech Frontier",
    accent: "fest-cyan",
    glowVar: "--fest-cyan",
    gradient: "from-fest-cyan/20 via-fest-teal/10 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-cyan)_/_0.35)]",
    desc: "Builders of sentient machines — commanding steel and code to create autonomous warriors.",
  },
];

const Branches = () => {
  return (
    <section className="relative py-20 pt-24 sm:py-24 sm:pt-28 min-h-screen">
      <div className="container px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-wider pandora-gradient-text mb-3 sm:mb-4">
            The Tribes of VENCER
          </h1>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Seven clans, one world. Each tribe commands a unique biome of knowledge and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {branches.map((branch, i) => {
            const tribe = tribes[i] || tribes[0];
            const Icon = tribe.icon;
            const totalEvents = branch.events.length + branch.culturalEvents.length + branch.gamingEvents.length;
            return (
              <motion.div
                key={branch.shortName}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 group border-2 border-${tribe.accent}/30 ${tribe.borderGlow} bg-card/80`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tribe.gradient}`} />

                <div className="relative p-4 sm:p-6">
                  <span className={`font-display text-[10px] tracking-widest text-${tribe.accent} opacity-80 uppercase font-bold`}>
                    {tribe.biome}
                  </span>

                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-${tribe.accent}/15 flex items-center justify-center my-3 sm:my-4 transition-all group-hover:bg-${tribe.accent}/25 group-hover:shadow-[0_0_20px_hsl(var(${tribe.glowVar})_/_0.3)]`}>
                    <Icon size={24} className={`text-${tribe.accent}`} />
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-1">{tribe.clanName}</h3>
                  <p className="font-heading text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">{branch.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 mb-4 sm:mb-5 leading-relaxed">{tribe.desc}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-heading font-bold">
                      {totalEvents} Events
                    </span>
                    <Link
                      to="/events"
                      className={`text-xs font-display tracking-wider text-${tribe.accent} hover:text-foreground transition-colors font-bold`}
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