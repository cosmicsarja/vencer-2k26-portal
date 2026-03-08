import { motion } from "framer-motion";
import { Trophy, IndianRupee, ImageIcon } from "lucide-react";
import type { Event } from "@/data/events";

const categoryCardColors: Record<string, { bg: string; border: string; badge: string; glow: string }> = {
  Technical: {
    bg: "from-fest-teal/15 to-transparent",
    border: "border-fest-teal/40 hover:border-fest-teal/70",
    badge: "bg-fest-teal/20 text-fest-teal border-fest-teal/30 font-bold",
    glow: "hover:shadow-[0_0_30px_hsl(var(--fest-teal)_/_0.2)]",
  },
  "Non-Technical": {
    bg: "from-fest-purple/15 to-transparent",
    border: "border-fest-purple/40 hover:border-fest-purple/70",
    badge: "bg-fest-purple/20 text-fest-purple border-fest-purple/30 font-bold",
    glow: "hover:shadow-[0_0_30px_hsl(var(--fest-purple)_/_0.2)]",
  },
  Cultural: {
    bg: "from-fest-yellow/15 to-transparent",
    border: "border-fest-yellow/40 hover:border-fest-yellow/70",
    badge: "bg-fest-yellow/20 text-fest-yellow border-fest-yellow/30 font-bold",
    glow: "hover:shadow-[0_0_30px_hsl(var(--fest-yellow)_/_0.2)]",
  },
  Gaming: {
    bg: "from-fest-blue/15 to-transparent",
    border: "border-fest-blue/40 hover:border-fest-blue/70",
    badge: "bg-fest-blue/20 text-fest-blue border-fest-blue/30 font-bold",
    glow: "hover:shadow-[0_0_30px_hsl(var(--fest-blue)_/_0.2)]",
  },
};

const EventCard = ({ event, index, onClick }: { event: Event; index: number; onClick?: () => void }) => {
  const colors = categoryCardColors[event.category] || categoryCardColors.Technical;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={onClick}
      className={`rounded-2xl overflow-hidden transition-all duration-500 group flex flex-col border-2 cursor-pointer ${colors.border} ${colors.glow} bg-gradient-to-b ${colors.bg} bg-card/80`}
    >
      <div className="aspect-[4/3] bg-muted/10 flex items-center justify-center relative overflow-hidden">
        {event.posterUrl ? (
          <img src={event.posterUrl} alt={event.title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/20">
            <ImageIcon size={32} />
            <span className="font-heading text-xs tracking-wider font-bold">Poster Coming Soon</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-display tracking-wider border ${colors.badge}`}>
            {event.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="font-display text-xs tracking-widest text-foreground px-4 py-2 rounded-full border-2 border-primary/40 bg-primary/15 font-bold">
            VIEW DETAILS
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 border-t-2 border-border/20 bg-card/90">
        {event.branch && (
          <p className="text-xs text-muted-foreground font-heading mb-1 font-bold">{event.branch}</p>
        )}
        <h4 className="font-heading text-xl font-bold text-foreground mb-2">{event.title}</h4>
        <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{event.description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-bold">
          <span className="flex items-center gap-1">
            <Trophy size={14} className="text-fest-yellow" />
            {event.prizePool}
          </span>
          <span className="flex items-center gap-1">
            <IndianRupee size={14} className="text-fest-teal" />
            {event.entryFee}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
