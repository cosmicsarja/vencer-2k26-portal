import { useEffect, useCallback, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, IndianRupee, Clock, Users, MapPin, BookOpen, Download } from "lucide-react";
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

const EventDetailModal = forwardRef<HTMLDivElement, EventDetailModalProps>(({ event, onClose, onRegister }, ref) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (event) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [event, handleKeyDown]);

  if (!event) return null;

  const colors = categoryColors[event.category] || categoryColors.Technical;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-background/90 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${event.title} details`}
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
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-destructive hover:bg-destructive/30 transition-colors"
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>

          <div className="aspect-[16/9] bg-muted/10 flex items-center justify-center relative overflow-hidden rounded-t-2xl">
            {event.posterUrl ? (
              <img src={event.posterUrl} alt={`${event.title} poster`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
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

          <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
            {event.branch && (
              <p className="text-[10px] sm:text-xs text-muted-foreground font-heading tracking-wider uppercase font-bold">{event.branch}</p>
            )}
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">{event.title}</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{event.description}</p>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-bold">
                <Trophy size={14} className="text-fest-yellow shrink-0" />
                <span>{event.prizePool}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-bold">
                <IndianRupee size={14} className="text-fest-teal shrink-0" />
                <span>{event.entryFee}</span>
              </div>
              {event.teamSize && (
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-bold">
                  <Users size={14} className="text-fest-purple shrink-0" />
                  <span>{event.teamSize}</span>
                </div>
              )}
              {event.duration && (
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-bold">
                  <Clock size={14} className="text-fest-orange shrink-0" />
                  <span>{event.duration}</span>
                </div>
              )}
              {event.venue && (
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground col-span-2 font-bold">
                  <MapPin size={14} className="text-fest-blue shrink-0" />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>

            {event.rules && event.rules.length > 0 && (
              <div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                  <BookOpen size={16} className={colors.accent} />
                  Rules & Guidelines
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {event.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href="/VENCER_2K26_Rulebook.pdf"
              download
              className="flex items-center justify-center gap-2 w-full font-display text-xs sm:text-sm tracking-wider px-6 py-3 rounded-xl border-2 border-primary/40 bg-primary/10 text-primary font-bold hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(var(--fest-teal)_/_0.2)] transition-all duration-300 hover:scale-[1.02]"
            >
              <Download size={16} />
              Download Rulebook
            </a>
            <button
              onClick={() => onRegister?.(event.formLink)}
              className="flex items-center justify-center gap-2 w-full font-display text-xs sm:text-sm tracking-wider px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-fest-cyan to-fest-blue text-primary-foreground font-bold hover:shadow-[0_0_30px_hsl(var(--fest-teal)_/_0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              Register Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

EventDetailModal.displayName = "EventDetailModal";

export default EventDetailModal;
