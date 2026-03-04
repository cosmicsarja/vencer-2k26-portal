import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const schedule = [
  {
    day: "Day 1 — March 20",
    events: [
      { time: "9:00 AM", title: "Inauguration Ceremony", type: "Ceremony" },
      { time: "10:30 AM", title: "Technical Events Begin", type: "Technical" },
      { time: "2:00 PM", title: "Workshop: AI & ML", type: "Workshop" },
      { time: "5:00 PM", title: "Gaming Tournaments", type: "Gaming" },
      { time: "7:00 PM", title: "Cultural Night — DJ", type: "Cultural" },
    ],
  },
  {
    day: "Day 2 — March 21",
    events: [
      { time: "9:00 AM", title: "Hackathon Kickoff", type: "Technical" },
      { time: "11:00 AM", title: "Robo Wars Arena", type: "Technical" },
      { time: "2:00 PM", title: "Dance & Music Competitions", type: "Cultural" },
      { time: "4:00 PM", title: "E-Sports Finals", type: "Gaming" },
      { time: "7:00 PM", title: "Battle of Bands", type: "Cultural" },
    ],
  },
  {
    day: "Day 3 — March 22",
    events: [
      { time: "9:00 AM", title: "Hackathon Judging", type: "Technical" },
      { time: "11:00 AM", title: "Fashion Walk", type: "Cultural" },
      { time: "2:00 PM", title: "Short Film Screening", type: "Cultural" },
      { time: "4:00 PM", title: "Valedictory & Prize Distribution", type: "Ceremony" },
      { time: "7:00 PM", title: "Closing Ceremony & Star Night", type: "Cultural" },
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="relative py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider fest-gradient-text mb-4">Event Schedule</h2>
          <p className="font-body text-muted-foreground">Three days of non-stop action</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {schedule.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: di * 0.2, duration: 0.6 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Calendar size={20} className="text-primary" />
                <h3 className="font-display text-sm tracking-wider text-primary">{day.day}</h3>
              </div>
              <div className="space-y-4">
                {day.events.map((e) => (
                  <div key={e.title} className="flex gap-3 items-start">
                    <div className="flex items-center gap-1 text-muted-foreground min-w-[80px]">
                      <Clock size={12} />
                      <span className="text-xs font-body">{e.time}</span>
                    </div>
                    <div>
                      <div className="text-sm font-heading text-foreground">{e.title}</div>
                      <div className="text-xs text-muted-foreground">{e.type}</div>
                    </div>
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

export default ScheduleSection;
