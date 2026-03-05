import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Train, ExternalLink, ImageIcon, Zap } from "lucide-react";
import { branches } from "@/data/events";

const stationColors = [
  { border: "border-fest-orange", bg: "bg-fest-orange", text: "text-fest-orange", glow: "shadow-[0_0_20px_hsl(var(--fest-orange)_/_0.4)]", track: "from-fest-orange/60 to-fest-orange/10" },
  { border: "border-fest-teal", bg: "bg-fest-teal", text: "text-fest-teal", glow: "shadow-[0_0_20px_hsl(var(--fest-teal)_/_0.4)]", track: "from-fest-teal/60 to-fest-teal/10" },
  { border: "border-fest-yellow", bg: "bg-fest-yellow", text: "text-fest-yellow", glow: "shadow-[0_0_20px_hsl(var(--fest-yellow)_/_0.4)]", track: "from-fest-yellow/60 to-fest-yellow/10" },
  { border: "border-fest-blue", bg: "bg-fest-blue", text: "text-fest-blue", glow: "shadow-[0_0_20px_hsl(var(--fest-blue)_/_0.4)]", track: "from-fest-blue/60 to-fest-blue/10" },
  { border: "border-fest-purple", bg: "bg-fest-purple", text: "text-fest-purple", glow: "shadow-[0_0_20px_hsl(var(--fest-purple)_/_0.4)]", track: "from-fest-purple/60 to-fest-purple/10" },
  { border: "border-fest-orange", bg: "bg-fest-orange", text: "text-fest-orange", glow: "shadow-[0_0_20px_hsl(var(--fest-orange)_/_0.4)]", track: "from-fest-orange/60 to-fest-orange/10" },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const trainY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const trackFill = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

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
            Follow the VENCER Express through each department station 🚂
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Railway track base */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1.5 sm:-translate-x-1/2">
            <div className="absolute inset-0 bg-border/30 rounded-full" />
            {/* Animated track fill */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-fest-teal to-fest-purple rounded-full origin-top"
              style={{ height: trackFill }}
            />
            {/* Track sleepers */}
            <div className="absolute inset-0 flex flex-col gap-4">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="relative flex items-center justify-center">
                  <div className="w-4 h-1 bg-muted-foreground/15 rounded-full absolute -left-[5px]" />
                </div>
              ))}
            </div>
          </div>

          {/* Animated train */}
          <motion.div
            className="absolute left-6 sm:left-1/2 z-20 -translate-x-1/2"
            style={{ top: trainY }}
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_30px_hsl(var(--fest-orange)_/_0.7)]"
              animate={{
                boxShadow: [
                  "0 0 20px hsl(25 95% 55% / 0.5), 0 0 40px hsl(25 95% 55% / 0.2)",
                  "0 0 35px hsl(25 95% 55% / 0.8), 0 0 60px hsl(45 95% 55% / 0.3)",
                  "0 0 20px hsl(25 95% 55% / 0.5), 0 0 40px hsl(25 95% 55% / 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Train size={22} className="text-primary-foreground" />
            </motion.div>
            {/* Smoke particles */}
            <motion.div
              className="absolute -top-3 left-1/2 -translate-x-1/2"
              animate={{ opacity: [0.6, 0, 0.6], y: [-5, -15, -5], scale: [0.5, 1.2, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            </motion.div>
          </motion.div>

          {/* Stations */}
          <div className="relative space-y-16 sm:space-y-24">
            {branches.map((branch, i) => {
              const color = stationColors[i % stationColors.length];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={branch.shortName}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, type: "spring", damping: 20 }}
                  className={`relative flex items-start gap-4 sm:gap-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Station dot with pulse */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`w-6 h-6 rounded-full ${color.bg} ${color.glow} border-4 border-background relative`}>
                        <div className={`absolute inset-0 rounded-full ${color.bg} animate-ping opacity-30`} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="w-16 sm:hidden shrink-0" />

                  {/* Connector line */}
                  <div className={`hidden sm:block absolute top-3 ${isLeft ? "right-1/2 mr-3" : "left-1/2 ml-3"} w-8 h-0.5 bg-gradient-to-r ${color.track}`} />

                  {/* Station card */}
                  <div className={`flex-1 ${isLeft ? "sm:pr-14 sm:text-right" : "sm:pl-14"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`glass rounded-2xl overflow-hidden border-2 ${color.border} transition-all duration-500`}
                    >
                      <div className="p-5">
                        <div className={`font-display text-[10px] tracking-widest ${color.text} mb-1 flex items-center gap-1.5 ${isLeft ? "sm:justify-end" : ""}`}>
                          <Zap size={12} />
                          STATION {i + 1}
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                          {branch.shortName}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{branch.name}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {branch.events.map((event) => (
                            <motion.div
                              key={event.title}
                              whileHover={{ scale: 1.03 }}
                              className="bg-card/60 rounded-xl p-3 text-left border border-border/30 transition-colors hover:border-primary/30"
                            >
                              <div className="aspect-[16/9] bg-muted/20 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
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
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Opposite side spacer for desktop */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              );
            })}

            {/* Final station */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_25px_hsl(var(--fest-orange)_/_0.5)]">
                  <Zap size={16} className="text-primary-foreground" />
                </div>
              </div>
              <div className="ml-16 sm:ml-0 glass rounded-xl px-6 py-3 border border-primary/30">
                <span className="font-display text-xs tracking-widest text-primary">🏁 ALL ABOARD — VENCER 2K26</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
