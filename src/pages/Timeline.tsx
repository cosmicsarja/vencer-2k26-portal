import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, ExternalLink, ImageIcon } from "lucide-react";
import { branches } from "@/data/events";

const nodeColors = [
  { accent: "fest-teal", glowVar: "--fest-teal", gradient: "from-fest-teal to-fest-cyan" },
  { accent: "fest-cyan", glowVar: "--fest-cyan", gradient: "from-fest-cyan to-fest-blue" },
  { accent: "fest-orange", glowVar: "--fest-orange", gradient: "from-fest-orange to-fest-yellow" },
  { accent: "fest-blue", glowVar: "--fest-blue", gradient: "from-fest-blue to-fest-purple" },
  { accent: "fest-purple", glowVar: "--fest-purple", gradient: "from-fest-purple to-fest-teal" },
  { accent: "fest-yellow", glowVar: "--fest-yellow", gradient: "from-fest-yellow to-fest-orange" },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  const pathFill = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const travelerY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 pt-28 min-h-screen">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl tracking-wider pandora-gradient-text mb-4">
            Journey Through Pandora
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Follow the glowing energy pathway through each tribal territory ✦
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Energy pathway base */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 sm:-translate-x-1/2">
            <div className="absolute inset-0 bg-border/20 rounded-full" />
            {/* Glowing fill */}
            <motion.div
              className="absolute top-0 left-0 right-0 rounded-full origin-top"
              style={{
                height: pathFill,
                background: "linear-gradient(to bottom, hsl(175 80% 45%), hsl(185 90% 50%), hsl(270 55% 55%))",
                boxShadow: "0 0 15px hsl(175 80% 45% / 0.4), 0 0 30px hsl(185 90% 50% / 0.2)",
              }}
            />
          </div>

          {/* Energy traveler */}
          <motion.div
            className="absolute left-6 sm:left-1/2 z-20 -translate-x-1/2"
            style={{ top: travelerY }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-fest-cyan flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 20px hsl(175 80% 45% / 0.5), 0 0 40px hsl(175 80% 45% / 0.2)",
                  "0 0 35px hsl(175 80% 45% / 0.8), 0 0 60px hsl(185 90% 50% / 0.3)",
                  "0 0 20px hsl(175 80% 45% / 0.5), 0 0 40px hsl(175 80% 45% / 0.2)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={18} className="text-primary-foreground" />
            </motion.div>
            {/* Trailing particles */}
            {[0, 1, 2].map((j) => (
              <motion.div
                key={j}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: 10 + j * 12 }}
                animate={{ opacity: [0.4, 0, 0.4], scale: [0.6, 0.2, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: j * 0.3 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary/40" />
              </motion.div>
            ))}
          </motion.div>

          {/* Tribal nodes / stations */}
          <div className="relative space-y-16 sm:space-y-24">
            {branches.map((branch, i) => {
              const color = nodeColors[i % nodeColors.length];
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
                  {/* Node dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-${color.accent} border-4 border-background relative`}
                        style={{
                          boxShadow: `0 0 15px hsl(var(${color.glowVar}) / 0.5), 0 0 30px hsl(var(${color.glowVar}) / 0.2)`,
                        }}
                      >
                        <div className={`absolute inset-0 rounded-full bg-${color.accent} animate-ping opacity-20`} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile spacer */}
                  <div className="w-16 sm:hidden shrink-0" />

                  {/* Connector */}
                  <div
                    className={`hidden sm:block absolute top-2.5 ${isLeft ? "right-1/2 mr-3" : "left-1/2 ml-3"} w-8 h-0.5`}
                    style={{
                      background: `linear-gradient(to right, hsl(var(${color.glowVar}) / 0.4), transparent)`,
                    }}
                  />

                  {/* Station card */}
                  <div className={`flex-1 ${isLeft ? "sm:pr-14 sm:text-right" : "sm:pl-14"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`glass-pandora rounded-2xl overflow-hidden border border-${color.accent}/20 transition-all duration-500 hover:border-${color.accent}/40 hover:shadow-[0_0_25px_hsl(var(${color.glowVar})_/_0.12)]`}
                    >
                      <div className="p-5">
                        <div className={`font-display text-[10px] tracking-widest text-${color.accent} mb-1 flex items-center gap-1.5 ${isLeft ? "sm:justify-end" : ""}`}>
                          <Sparkles size={10} />
                          TERRITORY {i + 1}
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
                              className="bg-card/40 rounded-xl p-3 text-left border border-border/20 transition-all hover:border-primary/20 hover:bg-card/60"
                            >
                              <div className="aspect-[16/9] bg-muted/10 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                                {event.posterUrl ? (
                                  <img src={event.posterUrl} alt={event.title} className="w-full h-full object-cover rounded-lg" />
                                ) : (
                                  <ImageIcon size={16} className="text-muted-foreground/20" />
                                )}
                              </div>
                              <p className="font-heading text-sm font-semibold text-foreground">{event.title}</p>
                              <p className="text-xs text-muted-foreground mb-2">{event.category}</p>
                              <a
                                href={event.formLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1 text-[10px] font-display tracking-wider text-${color.accent} hover:underline`}
                              >
                                Register <ExternalLink size={10} />
                              </a>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="hidden sm:block flex-1" />
                </motion.div>
              );
            })}

            {/* Final node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                <div
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-fest-cyan flex items-center justify-center"
                  style={{ boxShadow: "0 0 25px hsl(175 80% 45% / 0.5)" }}
                >
                  <Sparkles size={14} className="text-primary-foreground" />
                </div>
              </div>
              <div className="ml-16 sm:ml-0 glass-pandora rounded-xl px-6 py-3 border border-primary/20">
                <span className="font-display text-xs tracking-widest text-primary">✦ JOURNEY COMPLETE — VENCER 2K26 ✦</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
