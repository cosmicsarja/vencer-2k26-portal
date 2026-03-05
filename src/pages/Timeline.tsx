import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Train, ExternalLink, ImageIcon } from "lucide-react";
import { branches } from "@/data/events";

const stationColors = [
  { border: "border-fest-orange", bg: "bg-fest-orange", text: "text-fest-orange", glow: "shadow-[0_0_20px_hsl(var(--fest-orange)_/_0.4)]" },
  { border: "border-fest-teal", bg: "bg-fest-teal", text: "text-fest-teal", glow: "shadow-[0_0_20px_hsl(var(--fest-teal)_/_0.4)]" },
  { border: "border-fest-yellow", bg: "bg-fest-yellow", text: "text-fest-yellow", glow: "shadow-[0_0_20px_hsl(var(--fest-yellow)_/_0.4)]" },
  { border: "border-fest-blue", bg: "bg-fest-blue", text: "text-fest-blue", glow: "shadow-[0_0_20px_hsl(var(--fest-blue)_/_0.4)]" },
  { border: "border-fest-purple", bg: "bg-fest-purple", text: "text-fest-purple", glow: "shadow-[0_0_20px_hsl(var(--fest-purple)_/_0.4)]" },
  { border: "border-fest-orange", bg: "bg-fest-orange", text: "text-fest-orange", glow: "shadow-[0_0_20px_hsl(var(--fest-orange)_/_0.4)]" },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const trainY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 pt-28 min-h-screen">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl tracking-wider fest-gradient-text mb-4">
            Event Timeline
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Follow the train through each department station
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Railway track */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 sm:-translate-x-1/2">
            <div className="absolute inset-0 bg-border/50 rounded-full" />
            {/* Track dashes */}
            <div className="absolute inset-0 flex flex-col gap-3">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="w-full h-2 bg-muted-foreground/20 rounded-full" />
              ))}
            </div>
          </div>

          {/* Animated train */}
          <motion.div
            className="absolute left-6 sm:left-1/2 z-20 -translate-x-1/2"
            style={{ top: trainY }}
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_hsl(var(--fest-orange)_/_0.6)]">
              <Train size={20} className="text-primary-foreground" />
            </div>
          </motion.div>

          {/* Stations */}
          <div className="relative space-y-16 sm:space-y-24">
            {branches.map((branch, i) => {
              const color = stationColors[i % stationColors.length];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={branch.shortName}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-start gap-4 sm:gap-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Station dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-5 h-5 rounded-full ${color.bg} ${color.glow} border-4 border-background`} />
                  </div>

                  {/* Spacer for mobile */}
                  <div className="w-16 sm:hidden shrink-0" />

                  {/* Station card */}
                  <div className={`flex-1 ${isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div className={`glass rounded-2xl overflow-hidden border-2 ${color.border} transition-all duration-500 hover:${color.glow}`}>
                      <div className="p-5">
                        <div className={`font-display text-xs tracking-widest ${color.text} mb-1`}>
                          STATION {i + 1}
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                          {branch.shortName}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{branch.name}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {branch.events.map((event) => (
                            <div
                              key={event.title}
                              className="bg-card/60 rounded-xl p-3 text-left border border-border/30"
                            >
                              {/* Mini poster placeholder */}
                              <div className="aspect-[16/9] bg-muted/20 rounded-lg mb-2 flex items-center justify-center">
                                {event.posterUrl ? (
                                  <img src={event.posterUrl} alt={event.title} className="w-full h-full object-cover rounded-lg" />
                                ) : (
                                  <ImageIcon size={16} className="text-muted-foreground/30" />
                                )}
                              </div>
                              <p className="font-heading text-sm font-semibold text-foreground">{event.title}</p>
                              <p className="text-xs text-muted-foreground mb-2">{event.category}</p>
                              <a
                                href={event.formLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1 text-[10px] font-display tracking-wider ${color.text} hover:underline`}
                              >
                                Register <ExternalLink size={10} />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Opposite side spacer for desktop */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
