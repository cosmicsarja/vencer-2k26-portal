import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, IndianRupee, Clock, Users, MapPin, BookOpen } from "lucide-react";
import type { Event } from "@/data/events";

interface EventDetailModalProps {
  event: Event | null;
  onClose: () => void;
  onRegister?: (formLink: string) => void;
}

const categoryColors: Record<string, { accent: string; bg: string }> = {
  Technical: { accent: "text-fest-teal", bg: "bg-fest-teal/15 border-fest-teal/30" },
  "Non-Technical": { accent: "text-fest-purple", bg: "bg-fest-purple/15 border-fest-purple/30" },
  Cultural: { accent: "text-fest-yellow", bg: "bg-fest-yellow/15 border-fest-yellow/30" },
  Gaming: { accent: "text-fest-blue", bg: "bg-fest-blue/15 border-fest-blue/30" },
};

const EventDetailModal = ({ event, onClose, onRegister }: EventDetailModalProps) => {
  if (!event) return null;

  const colors = categoryColors[event.category] || categoryColors.Technical;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border-2 border-primary/25 bg-card shadow-[0_0_60px_hsl(var(--fest-teal)_/_0.15)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-destructive hover:bg-destructive/30 transition-colors"
          >
            <X size={16} />
          </button>

          <div className="aspect-[16/9] bg-muted/10 flex items-center justify-center relative overflow-hidden rounded-t-2xl">
            {event.posterUrl ? (
              <img src={event.posterUrl} alt={event.title} className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-2 text-muted-foreground/20">
                <BookOpen size={40} />
                <span className="font-heading text-sm tracking-wider font-bold">Event Poster</span>
              </div>
            )}
            <div className="absolute bottom-3 left-3">
              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-display tracking-wider border font-bold ${colors.bg} ${colors.accent}`}>
                {event.category}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-5">
            {event.branch && (
              <p className="text-xs text-muted-foreground font-heading tracking-wider uppercase font-bold">{event.branch}</p>
            )}
            <h2 className="font-heading text-2xl font-bold text-foreground">{event.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-bold">
                <Trophy size={14} className="text-fest-yellow shrink-0" />
                <span>{event.prizePool}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-bold">
                <IndianRupee size={14} className="text-fest-teal shrink-0" />
                <span>{event.entryFee}</span>
              </div>
              {event.teamSize && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-bold">
                  <Users size={14} className="text-fest-purple shrink-0" />
                  <span>{event.teamSize}</span>
                </div>
              )}
              {event.duration && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-bold">
                  <Clock size={14} className="text-fest-orange shrink-0" />
                  <span>{event.duration}</span>
                </div>
              )}
              {event.venue && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground col-span-2 font-bold">
                  <MapPin size={14} className="text-fest-blue shrink-0" />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>

            {event.rules && event.rules.length > 0 && (
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen size={16} className={colors.accent} />
                  Rules & Guidelines
                </h3>
                <ul className="space-y-2">
                  {event.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={() => onRegister?.(event.formLink)}
              className="flex items-center justify-center gap-2 w-full font-display text-sm tracking-wider px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-fest-cyan to-fest-blue text-primary-foreground font-bold hover:shadow-[0_0_30px_hsl(var(--fest-teal)_/_0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              Register Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EventDetailModal;
