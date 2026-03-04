import { motion } from "framer-motion";
import { Trophy, IndianRupee, ExternalLink, ImageIcon } from "lucide-react";
import type { Event } from "@/data/events";

const categoryColors: Record<string, string> = {
  Technical: "from-fest-teal/20 to-fest-teal/5 border-fest-teal/30 text-fest-teal",
  "Non-Technical": "from-fest-purple/20 to-fest-purple/5 border-fest-purple/30 text-fest-purple",
  Cultural: "from-fest-yellow/20 to-fest-yellow/5 border-fest-yellow/30 text-fest-yellow",
  Gaming: "from-fest-blue/20 to-fest-blue/5 border-fest-blue/30 text-fest-blue",
};

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const colorClass = categoryColors[event.category] || categoryColors.Technical;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="glass glass-hover rounded-xl overflow-hidden transition-all duration-500 group flex flex-col"
    >
      {/* Poster placeholder */}
      <div className="aspect-[4/3] bg-muted/30 flex items-center justify-center border-b border-border/30">
        {event.posterUrl ? (
          <img src={event.posterUrl} alt={event.title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
            <ImageIcon size={32} />
            <span className="font-heading text-xs tracking-wider">Poster Coming Soon</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-display tracking-wider bg-gradient-to-r ${colorClass} border mb-3`}>
          {event.category}
        </div>
        {event.branch && (
          <p className="text-xs text-muted-foreground font-heading mb-1">{event.branch}</p>
        )}
        <h4 className="font-heading text-xl font-bold text-foreground mb-2">{event.title}</h4>
        <p className="text-sm text-muted-foreground mb-4 flex-1">{event.description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1"><Trophy size={14} className="text-fest-yellow" />{event.prizePool}</span>
          <span className="flex items-center gap-1"><IndianRupee size={14} className="text-fest-teal" />{event.entryFee}</span>
        </div>
        <a
          href={event.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-display text-xs tracking-wider px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_0_20px_hsl(25_95%_55%_/_0.3)] transition-all duration-300 hover:scale-105"
        >
          Register Now <ExternalLink size={12} />
        </a>
      </div>
    </motion.div>
  );
};

export default EventCard;
