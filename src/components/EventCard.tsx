import { motion } from "framer-motion";
import { Trophy, IndianRupee, ExternalLink } from "lucide-react";
import type { Event } from "@/data/events";

const categoryColors: Record<string, string> = {
  Technical: "from-neon-cyan/20 to-neon-cyan/5 border-neon-cyan/30 text-neon-cyan",
  "Non-Technical": "from-neon-magenta/20 to-neon-magenta/5 border-neon-magenta/30 text-neon-magenta",
  Cultural: "from-neon-yellow/20 to-neon-yellow/5 border-neon-yellow/30 text-neon-yellow",
  Gaming: "from-neon-green/20 to-neon-green/5 border-neon-green/30 text-neon-green",
};

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const colorClass = categoryColors[event.category] || categoryColors.Technical;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass glass-hover rounded-xl p-5 sm:p-6 transition-all duration-500 group flex flex-col"
    >
      <div className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-display tracking-wider bg-gradient-to-r ${colorClass} border mb-4`}>
        {event.category}
      </div>
      <h4 className="font-heading text-xl font-bold text-foreground mb-2">{event.title}</h4>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{event.description}</p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1"><Trophy size={14} className="text-neon-yellow" />{event.prizePool}</span>
        <span className="flex items-center gap-1"><IndianRupee size={14} className="text-neon-green" />{event.entryFee}</span>
      </div>
      <a
        href={event.formLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 font-display text-xs tracking-wider px-5 py-2.5 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-magenta text-primary-foreground hover:shadow-[0_0_20px_hsl(190_100%_50%_/_0.3)] transition-all duration-300 hover:scale-105"
      >
        Register Now <ExternalLink size={12} />
      </a>
    </motion.div>
  );
};

export default EventCard;
