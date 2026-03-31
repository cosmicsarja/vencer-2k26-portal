import { motion } from "framer-motion";
import { Calendar, Clock, Music2, Zap, Trophy, Users, Star, Mic2 } from "lucide-react";

type EventType = "Ceremony" | "Technical" | "NonTech" | "Sports" | "Cultural" | "Concert" | "Registration";

interface ScheduleEvent {
  time: string;
  title: string;
  subtitle?: string;
  type: EventType;
}

interface DaySchedule {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

const schedule: DaySchedule[] = [
  {
    day: "Day 1",
    date: "April 10, 2026",
    events: [
      { time: "9:30 AM", title: "Registration & Check-in", subtitle: "All participants report to venue", type: "Registration" },
      { time: "10:00 AM", title: "Inauguration Ceremony", subtitle: "Official opening of Vencer 2K26", type: "Ceremony" },
      { time: "10:30 AM", title: "Technical Events Begin", subtitle: "Tinker CAD · Pandora Logic War · Code Meme · Idea Canvas", type: "Technical" },
      { time: "11:00 AM", title: "Sports & Non-Tech Events", subtitle: "Lagori · Number Circle Cricket · Ping Pong · Pictogram X", type: "Sports" },
      { time: "12:00 PM", title: "AI & Innovation Events", subtitle: "AI Shark Tank · Pandora Logic War (Final Rounds)", type: "Technical" },
      { time: "12:30 PM", title: "Brand Baazi — Sell It If U Can", subtitle: "One Minute Ad Challenge · AI & DS Dept", type: "NonTech" },
      { time: "2:00 PM", title: "Afternoon Technical & Games", subtitle: "Bridge Making · Battle of Legends · Photography", type: "Technical" },
      { time: "2:00 PM", title: "Tug of War", subtitle: "ECE Dept · Behind Open Amphitheatre", type: "Sports" },
      { time: "4:00 PM", title: "Evening Events & Activities", subtitle: "Fun Junction · Pani Puri Eating · Cultural activities", type: "NonTech" },
    ],
  },
  {
    day: "Day 2",
    date: "April 11, 2026",
    events: [
      { time: "10:00 AM", title: "Day 2 Events Kickoff", subtitle: "TechXhibit · AI Prompt Battle · Bug Crush · Hack The Hunt", type: "Technical" },
      { time: "10:00 AM", title: "Sports Continue", subtitle: "Dodge Ball · Box Cricket · Treasure Hunt (Final)", type: "Sports" },
      { time: "11:00 AM", title: "Creative & Cultural Events", subtitle: "Stand-up Comedy · Messy Masterpiece · Design Doodle Studio", type: "Cultural" },
      { time: "11:00 AM", title: "Slow Bike Race", subtitle: "CSE Dept · Main Ground", type: "Sports" },
      { time: "2:00 PM", title: "Afternoon Finals & Competitions", subtitle: "Edible Art Arena · Videography · One Minute Games", type: "NonTech" },
      { time: "4:00 PM", title: "Event Wrap-ups & Results", subtitle: "All department events conclude", type: "Ceremony" },
      { time: "6:00 PM", title: "🎤 Live Concert", subtitle: "Special guest singer performing LIVE — Star Night!", type: "Concert" },
    ],
  },
];

const typeConfig: Record<EventType, { color: string; bg: string; border: string; icon: React.ReactNode }> = {
  Registration: { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", icon: <Users size={13} /> },
  Ceremony: { color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", icon: <Star size={13} /> },
  Technical: { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", icon: <Zap size={13} /> },
  NonTech: { color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", icon: <Trophy size={13} /> },
  Sports: { color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", icon: <Trophy size={13} /> },
  Cultural: { color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30", icon: <Music2 size={13} /> },
  Concert: { color: "text-yellow-300", bg: "bg-yellow-400/10", border: "border-yellow-400/40", icon: <Mic2 size={13} /> },
};

const ScheduleSection = () => {
  return (
    <section id="schedule" className="relative py-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider pandora-gradient-text mb-3">
            Event Schedule
          </h2>
          <p className="font-body text-muted-foreground text-sm">Two days of non-stop tribal energy — April 10 & 11, 2026</p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {(Object.entries(typeConfig) as [EventType, typeof typeConfig[EventType]][]).map(([type, cfg]) => (
            <span
              key={type}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border ${cfg.bg} ${cfg.border} ${cfg.color} font-medium`}
            >
              {cfg.icon}
              {type === "NonTech" ? "Non-Tech" : type}
            </span>
          ))}
        </motion.div>

        {/* Two-column day cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {schedule.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: di * 0.2, duration: 0.7 }}
            >
              {/* Day header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30">
                  <Calendar size={18} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-base font-display font-bold text-white tracking-wide">{day.day}</div>
                  <div className="text-xs text-muted-foreground font-body">{day.date}</div>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-4">
                {/* vertical line */}
                <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/20 to-transparent" />

                <div className="space-y-1">
                  {day.events.map((event, ei) => {
                    const cfg = typeConfig[event.type];
                    const isConcert = event.type === "Concert";
                    return (
                      <motion.div
                        key={`${event.time}-${event.title}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: di * 0.2 + ei * 0.07, duration: 0.5 }}
                        className={`relative flex gap-4 pl-6 py-3 rounded-xl transition-all duration-200 hover:bg-white/[0.03] group ${isConcert ? "mt-3" : ""
                          }`}
                      >
                        {/* dot */}
                        <div className={`absolute left-[9px] top-[18px] w-2.5 h-2.5 rounded-full border-2 ${cfg.border} ${cfg.bg} flex-shrink-0 group-hover:scale-125 transition-transform duration-200`} />

                        {/* time */}
                        <div className="flex items-center gap-1 text-muted-foreground min-w-[72px] flex-shrink-0 mt-0.5">
                          <Clock size={11} className="flex-shrink-0" />
                          <span className="text-[11px] font-body tabular-nums">{event.time}</span>
                        </div>

                        {/* content */}
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-heading font-semibold leading-tight ${isConcert ? "text-yellow-300" : "text-foreground"}`}>
                            {event.title}
                          </div>
                          {event.subtitle && (
                            <div className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{event.subtitle}</div>
                          )}
                          {/* type badge */}
                          <span className={`inline-flex items-center gap-1 mt-1.5 text-[10px] px-2 py-0.5 rounded-full border ${cfg.bg} ${cfg.border} ${cfg.color} font-medium`}>
                            {cfg.icon}
                            {event.type === "NonTech" ? "Non-Tech" : event.type}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Concert highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-yellow-400/30 bg-gradient-to-r from-yellow-500/10 via-amber-500/5 to-yellow-500/10 p-6 text-center">
            {/* shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-pulse" />
            <Mic2 size={28} className="text-yellow-300 mx-auto mb-2" />
            <div className="text-yellow-300 font-display text-xl font-bold tracking-wide">Live Concert — Day 2</div>
            <div className="text-yellow-200/70 text-sm mt-1 font-body">Special guest singer performing LIVE · April 11 at 6:00 PM</div>
            <div className="mt-3 text-xs text-yellow-300/50 font-body">★ The grand finale of Vencer 2K26 ★</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
