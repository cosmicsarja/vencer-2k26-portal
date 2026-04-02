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
import PageBackground from "@/components/PageBackground";


const avatars = [
  spiritTechAvatar, digitalForestAvatar, ironMountainAvatar,
  earthBuildersAvatar, signalSkyAvatar, energyStormAvatar, steelSentinelAvatar, codeBloomAvatar,
];

const tribes = [
  { clanName: "Spirit Tech Clan", icon: Brain, biome: "Neural Forest", accent: "fest-teal", glowVar: "--fest-teal", gradient: "from-fest-teal/20 via-fest-cyan/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-teal)_/_0.35)]", desc: "Masters of the spirit network — weaving artificial minds into the fabric of Pandora's consciousness.", filterColor: "175 80% 40%" },
  { clanName: "Digital Forest Clan", icon: Monitor, biome: "Code Jungle", accent: "fest-green", glowVar: "--fest-green", gradient: "from-fest-green/20 via-fest-teal/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-green)_/_0.35)]", desc: "Architects of the digital canopy — building the infinite forest of logic and software.", filterColor: "140 70% 45%" },
  { clanName: "Iron Mountain Clan", icon: Cog, biome: "Volcanic Forge", accent: "fest-orange", glowVar: "--fest-orange", gradient: "from-fest-orange/20 via-fest-ember/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-orange)_/_0.35)]", desc: "Forged in volcanic fire — shaping metal and machine with the strength of mountains.", filterColor: "30 90% 55%" },
  { clanName: "Earth Builders Clan", icon: Building2, biome: "Stone Valley", accent: "fest-yellow", glowVar: "--fest-yellow", gradient: "from-fest-yellow/20 via-fest-orange/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-yellow)_/_0.35)]", desc: "Guardians of the land — raising structures that stand as monuments to Pandora's strength.", filterColor: "45 85% 55%" },
  { clanName: "Signal Sky Clan", icon: Cpu, biome: "Aurora Heights", accent: "fest-purple", glowVar: "--fest-purple", gradient: "from-fest-purple/20 via-fest-blue/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-purple)_/_0.35)]", desc: "Riders of the aurora — channeling electromagnetic waves across Pandora's skies.", filterColor: "270 55% 50%" },
  { clanName: "Energy Storm Clan", icon: Zap, biome: "Lightning Plains", accent: "fest-blue", glowVar: "--fest-blue", gradient: "from-fest-blue/20 via-fest-teal/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-blue)_/_0.35)]", desc: "Harvesters of the storm — commanding the raw power that flows through all living things.", filterColor: "210 85% 50%" },
  { clanName: "Robo Guardian Clan", icon: Bot, biome: "Robo Frontier", accent: "fest-grey", glowVar: "--fest-grey", gradient: "from-fest-grey/20 via-fest-yellow/10 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-grey)_/_0.35)]", desc: "Builders of sentient machines — commanding steel and code to create autonomous warriors.", filterColor: "0 0% 45%" },
  { clanName: "Code Bloom Clan", icon: Monitor, biome: "Digital Meadow", accent: "fest-pink", glowVar: "--fest-pink", gradient: "from-fest-pink/30 via-fest-pink/15 to-transparent", borderGlow: "hover:shadow-[0_0_30px_hsl(var(--fest-pink)_/_0.25)]", desc: "Where code blooms into powerful applications — cultivating the digital wilderness with creativity.", filterColor: "350 85% 75%" },
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
        className={`relative rounded-3xl overflow-hidden transition-all duration-500 group border-2 border-${tribe.accent}/30 ${tribe.borderGlow} bg-card/80 cursor-pointer min-h-[220px] sm:min-h-[240px] md:min-h-[280px] flex flex-col justify-center`}
        style={tribe.clanName === "Code Bloom Clan" ? { backgroundColor: "rgba(245, 180, 210, 0.1)" } : undefined}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${tribe.gradient}`} />

        <motion.img
          src={avatar}
          alt={`${tribe.clanName} Avatar`}
          className="absolute right-[-10px] sm:right-[-15px] bottom-0 w-[140px] sm:w-[160px] md:w-[200px] opacity-70 sm:opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[1]"
          loading="lazy"
          decoding="async"
          style={{
            filter: tribe.clanName === "Code Bloom Clan" 
              ? `hue-rotate(320deg) saturate(1.2) brightness(1.1) drop-shadow(0 0 15px hsl(${tribe.filterColor} / 0.5)) drop-shadow(0 0 40px hsl(${tribe.filterColor} / 0.3))`
              : `drop-shadow(0 0 15px hsl(${tribe.filterColor} / 0.5)) drop-shadow(0 0 40px hsl(${tribe.filterColor} / 0.3))`,
          }}
          animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative p-5 sm:p-6 md:p-8 pr-[120px] sm:pr-[140px] md:pr-[190px]">
          <span className={`font-display text-[10px] sm:text-xs md:text-sm tracking-widest text-${tribe.accent} opacity-80 uppercase font-bold`}>
            {tribe.biome}
          </span>

          <div className={`w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-xl bg-${tribe.accent}/15 flex items-center justify-center my-3 sm:my-4 transition-all group-hover:bg-${tribe.accent}/25 group-hover:shadow-[0_0_20px_hsl(var(${tribe.glowVar})_/_0.3)]`}>
            <Icon size={20} className={`text-${tribe.accent} sm:w-6 sm:h-6 md:w-8 md:h-8`} />
          </div>

          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">{tribe.clanName}</h3>
          <p className={`font-heading text-xs sm:text-sm md:text-base font-bold text-${tribe.accent} mb-2 sm:mb-3`}>{branch.name}</p>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground/80 mb-4 sm:mb-5 md:mb-6 leading-relaxed line-clamp-3">{tribe.desc}</p>

          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] sm:text-xs md:text-sm text-foreground/90 font-heading font-bold">
              {totalEvents} Events
            </span>
            <span className={`text-[10px] sm:text-xs md:text-sm font-display tracking-wider text-${tribe.accent} font-bold`}>
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
    <section className="relative py-16 sm:py-20 md:py-24 pt-20 sm:pt-24 md:pt-28 min-h-screen">
      <PageBackground />
      <div className="container px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wider pandora-gradient-text mb-2 sm:mb-3 md:mb-4">
            The Tribes of VENCER
          </h1>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-1">
            Eight clans, one world. Each tribe commands a unique biome of knowledge and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
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
