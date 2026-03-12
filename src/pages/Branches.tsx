import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Monitor, Cog, Building2, Cpu, Zap, Bot } from "lucide-react";
import { branches } from "@/data/events";
import spiritTechAvatar from "@/assets/spirit-tech-avatar.png";
import digitalForestAvatar from "@/assets/digital-forest-avatar.png";
import ironMountainAvatar from "@/assets/iron-mountain-avatar.png";
import earthBuildersAvatar from "@/assets/earth-builders-avatar.png";
import signalSkyAvatar from "@/assets/signal-sky-avatar.png";
import energyStormAvatar from "@/assets/energy-storm-avatar.png";
import steelSentinelAvatar from "@/assets/steel-sentinel-avatar.png";
import codeBloomAvatar from "@/assets/code-bloom-avatar.png";

const avatars = [
  spiritTechAvatar, digitalForestAvatar, ironMountainAvatar,
  earthBuildersAvatar, signalSkyAvatar, energyStormAvatar, steelSentinelAvatar, codeBloomAvatar,
];

const tribes = [
  { clanName: "Spirit Tech Clan", icon: Brain, biome: "Neural Forest", accent: "fest-teal", glowVar: "--fest-teal", gradient: "from-fest-teal/20 via-fest-cyan/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-teal)_/_0.35)]", desc: "Masters of the spirit network — weaving artificial minds into the fabric of Pandora's consciousness.", filterColor: "175 80% 40%" },
  { clanName: "Digital Forest Clan", icon: Monitor, biome: "Code Jungle", accent: "fest-cyan", glowVar: "--fest-cyan", gradient: "from-fest-cyan/20 via-fest-blue/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-cyan)_/_0.35)]", desc: "Architects of the digital canopy — building the infinite forest of logic and software.", filterColor: "185 90% 45%" },
  { clanName: "Iron Mountain Clan", icon: Cog, biome: "Volcanic Forge", accent: "fest-orange", glowVar: "--fest-orange", gradient: "from-fest-orange/20 via-fest-ember/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-orange)_/_0.35)]", desc: "Forged in volcanic fire — shaping metal and machine with the strength of mountains.", filterColor: "30 90% 55%" },
  { clanName: "Earth Builders Clan", icon: Building2, biome: "Stone Valley", accent: "fest-yellow", glowVar: "--fest-yellow", gradient: "from-fest-yellow/20 via-fest-orange/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-yellow)_/_0.35)]", desc: "Guardians of the land — raising structures that stand as monuments to Pandora's strength.", filterColor: "45 85% 55%" },
  { clanName: "Signal Sky Clan", icon: Cpu, biome: "Aurora Heights", accent: "fest-purple", glowVar: "--fest-purple", gradient: "from-fest-purple/20 via-fest-blue/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-purple)_/_0.35)]", desc: "Riders of the aurora — channeling electromagnetic waves across Pandora's skies.", filterColor: "270 55% 50%" },
  { clanName: "Energy Storm Clan", icon: Zap, biome: "Lightning Plains", accent: "fest-blue", glowVar: "--fest-blue", gradient: "from-fest-blue/20 via-fest-teal/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-blue)_/_0.35)]", desc: "Harvesters of the storm — commanding the raw power that flows through all living things.", filterColor: "210 85% 50%" },
  { clanName: "Mech Guardian Clan", icon: Bot, biome: "Mech Frontier", accent: "fest-cyan", glowVar: "--fest-cyan", gradient: "from-fest-cyan/20 via-fest-teal/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-cyan)_/_0.35)]", desc: "Builders of sentient machines — commanding steel and code to create autonomous warriors.", filterColor: "185 90% 45%" },
  { clanName: "Code Bloom Clan", icon: Monitor, biome: "Digital Meadow", accent: "fest-green", glowVar: "--fest-green", gradient: "from-fest-green/20 via-fest-teal/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-green)_/_0.35)]", desc: "Where code blooms into powerful applications — cultivating the digital wilderness with creativity.", filterColor: "140 70% 45%" },
];

const TribeCard = memo(({ branch, tribe, index, avatar }: { branch: typeof branches[0]; tribe: typeof tribes[0]; index: number; avatar: string }) => {
  const Icon = tribe.icon;
  const totalEvents = branch.events.length + branch.culturalEvents.length + branch.gamingEvents.length;

  return (
    <Link to={`/events?branch=${encodeURIComponent(branch.shortName)}`} aria-label={`View ${tribe.clanName} events`}>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: Math.min(index * 0.08, 0.4), duration: 0.6 }}
        className={`relative rounded-2xl overflow-hidden transition-all duration-500 group border-2 border-${tribe.accent}/30 ${tribe.borderGlow} bg-card/80 cursor-pointer`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${tribe.gradient}`} />

        <motion.img
          src={avatar}
          alt={`${tribe.clanName} Avatar`}
          className="absolute right-[-10px] bottom-0 w-[100px] sm:w-[140px] opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none z-[1]"
          loading="lazy"
          decoding="async"
          style={{
            filter: `drop-shadow(0 0 15px hsl(${tribe.filterColor} / 0.5)) drop-shadow(0 0 40px hsl(${tribe.filterColor} / 0.3))`,
          }}
          animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative p-4 sm:p-6 pr-[90px] sm:pr-[120px]">
          <span className={`font-display text-[10px] tracking-widest text-${tribe.accent} opacity-80 uppercase font-bold`}>
            {tribe.biome}
          </span>

          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-${tribe.accent}/15 flex items-center justify-center my-2 sm:my-3 transition-all group-hover:bg-${tribe.accent}/25 group-hover:shadow-[0_0_20px_hsl(var(${tribe.glowVar})_/_0.3)]`}>
            <Icon size={20} className={`text-${tribe.accent}`} />
          </div>

          <h3 className="font-heading text-sm sm:text-base font-bold text-foreground mb-1">{tribe.clanName}</h3>
          <p className={`font-heading text-xs font-bold text-${tribe.accent} mb-1`}>{branch.name}</p>
          <p className="text-[11px] sm:text-xs text-muted-foreground/80 mb-3 sm:mb-4 leading-relaxed line-clamp-2">{tribe.desc}</p>

          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-xs text-muted-foreground font-heading font-bold">
              {totalEvents} Events
            </span>
            <span className={`text-[10px] sm:text-xs font-display tracking-wider text-${tribe.accent} font-bold`}>
              View Events →
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
});

TribeCard.displayName = "TribeCard";

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
            Eight clans, one world. Each tribe commands a unique biome of knowledge and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {branches.map((branch, i) => {
            const tribe = tribes[i] || tribes[0];
            return (
              <TribeCard
                key={branch.shortName}
                branch={branch}
                tribe={tribe}
                index={i}
                avatar={avatars[i] || avatars[0]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Branches;
