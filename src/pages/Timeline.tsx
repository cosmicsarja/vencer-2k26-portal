import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const schedule = [
  {
    day: "Day 1",
    date: "March 20, 2026",
    events: [
      { time: "8:30 AM", title: "Registration & Check-in", type: "General", venue: "Main Gate" },
      { time: "9:30 AM", title: "Inauguration Ceremony", type: "Ceremony", venue: "Auditorium" },
      { time: "10:30 AM", title: "Technical Events Begin", type: "Technical", venue: "All Labs" },
      { time: "11:00 AM", title: "AI Hackathon Kickoff", type: "Technical", venue: "CS Lab 1" },
      { time: "11:30 AM", title: "Robo Wars Qualifiers", type: "Technical", venue: "Main Ground" },
      { time: "12:30 PM", title: "Lunch Break", type: "General", venue: "Canteen" },
      { time: "1:30 PM", title: "Code Sprint", type: "Technical", venue: "CS Lab 1" },
      { time: "2:00 PM", title: "Circuit Craze", type: "Technical", venue: "Electronics Lab" },
      { time: "2:30 PM", title: "Line Follower Challenge", type: "Technical", venue: "Robotics Lab" },
      { time: "3:00 PM", title: "Cultural Events Begin", type: "Cultural", venue: "Main Stage" },
      { time: "3:30 PM", title: "Dance Fusion Prelims", type: "Cultural", venue: "Main Stage" },
      { time: "4:00 PM", title: "Gaming Tournaments Begin", type: "Gaming", venue: "Gaming Arena" },
      { time: "4:30 PM", title: "Valorant Group Stage", type: "Gaming", venue: "Gaming Arena" },
      { time: "5:00 PM", title: "BGMI Blitz Round 1", type: "Gaming", venue: "Online" },
      { time: "6:00 PM", title: "Short Film Screening", type: "Cultural", venue: "Auditorium" },
      { time: "7:00 PM", title: "Battle of Bands", type: "Cultural", venue: "Main Stage" },
      { time: "8:30 PM", title: "DJ Night", type: "Cultural", venue: "Main Stage" },
    ],
  },
  {
    day: "Day 2",
    date: "March 21, 2026",
    events: [
      { time: "9:00 AM", title: "AI Hackathon Judging", type: "Technical", venue: "CS Lab 1" },
      { time: "9:30 AM", title: "Robo Wars Finals", type: "Technical", venue: "Main Ground" },
      { time: "10:00 AM", title: "Robo Soccer Finals", type: "Technical", venue: "Main Ground" },
      { time: "10:30 AM", title: "Web Dev Challenge", type: "Technical", venue: "CS Lab 2" },
      { time: "11:00 AM", title: "Bridge Building", type: "Technical", venue: "Workshop" },
      { time: "11:30 AM", title: "Drone Racing", type: "Gaming", venue: "Main Ground" },
      { time: "12:00 PM", title: "Bot Battle Arena", type: "Gaming", venue: "Main Ground" },
      { time: "12:30 PM", title: "Lunch Break", type: "General", venue: "Canteen" },
      { time: "1:30 PM", title: "Dance Fusion Finals", type: "Cultural", venue: "Main Stage" },
      { time: "2:00 PM", title: "Fashion Walk", type: "Cultural", venue: "Main Stage" },
      { time: "2:30 PM", title: "Valorant Finals", type: "Gaming", venue: "Gaming Arena" },
      { time: "3:00 PM", title: "FIFA Frenzy Finals", type: "Gaming", venue: "Gaming Room" },
      { time: "3:30 PM", title: "Robot Dance Show", type: "Cultural", venue: "Main Stage" },
      { time: "4:00 PM", title: "Auto Expo & Exhibition", type: "Non-Technical", venue: "Exhibition Hall" },
      { time: "5:00 PM", title: "Valedictory & Prize Distribution", type: "Ceremony", venue: "Auditorium" },
      { time: "6:30 PM", title: "Closing Ceremony & Star Night", type: "Cultural", venue: "Main Stage" },
    ],
  },
];

const typeColors: Record<string, string> = {
  Technical: "bg-fest-teal text-background font-bold",
  Cultural: "bg-fest-yellow text-background font-bold",
  Gaming: "bg-fest-blue text-background font-bold",
  Ceremony: "bg-fest-purple text-background font-bold",
  General: "bg-muted-foreground/30 text-foreground font-bold",
  "Non-Technical": "bg-fest-orange text-background font-bold",
};

const Timeline = () => {
  return (
    <section className="relative py-20 pt-24 sm:py-24 sm:pt-28 min-h-screen">
      <div className="container px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-wider pandora-gradient-text mb-3 sm:mb-4">
            VENCER 2K26 — Schedule
          </h1>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Two days of non-stop action. Here's the complete timetable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {schedule.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: di * 0.2, duration: 0.6 }}
              className="rounded-2xl border-2 border-primary/30 bg-card/80 overflow-hidden shadow-[0_0_30px_hsl(var(--fest-teal)_/_0.1)]"
            >
              <div className="bg-gradient-to-r from-primary to-fest-cyan px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-primary-foreground shrink-0" />
                  <div>
                    <h2 className="font-display text-base sm:text-lg tracking-wider text-primary-foreground font-bold">{day.day}</h2>
                    <p className="font-heading text-xs sm:text-sm text-primary-foreground/80">{day.date}</p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-border/30">
                {day.events.map((event, ei) => (
                  <div
                    key={event.title + ei}
                    className="flex items-start gap-2 sm:gap-4 px-3 sm:px-5 py-2.5 sm:py-3 hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-1 sm:gap-1.5 text-muted-foreground min-w-[70px] sm:min-w-[90px] pt-0.5">
                      <Clock size={12} className="shrink-0" />
                      <span className="text-[10px] sm:text-xs font-display tracking-wide font-bold">{event.time}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading text-xs sm:text-sm font-bold text-foreground truncate">{event.title}</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{event.venue}</div>
                    </div>
                    <span className={`shrink-0 px-1.5 sm:px-2.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-display tracking-wider ${typeColors[event.type] || typeColors.General}`}>
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;