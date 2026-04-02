import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import PageBackground from "@/components/PageBackground";

const schedule = [
  {
    day: "Day 1",
    date: "April 10, 2026",
    departments: [
      {
        department: "Artificial Intelligence & Data Science",
        events: [
          { time: "12:00 PM", title: "Pandora Logic War", type: "Technical", venue: "Seminar Hall 1 AI Dept" },
          { time: "12:00 PM", title: "AI Shark Tank", type: "Technical", venue: "Seminar Hall 2 AI Dept" },
          { time: "12:00 PM", title: "Dodge Ball", type: "Non-Technical", venue: "Sports Ground" },
          { time: "12:30 PM", title: "Brand Baazi", type: "Non-Technical", venue: "Classroom 1 AI Dept" },
        ]
      },
      {
        department: "Computer Science Engineering",
        events: [
          { time: "12:00 PM", title: "Bug Crush", type: "Technical", venue: "CCP Lab" },
          { time: "12:00 PM", title: "Box Cricket", type: "Non-Technical", venue: "Sports Ground" },
          { time: "12:00 PM", title: "Photography", type: "Non-Technical", venue: "College Campus" },
          { time: "02:00 PM", title: "Code Meme", type: "Technical", venue: "CSE Classroom 1" },
          { time: "02:00 PM", title: "Lagori", type: "Non-Technical", venue: "Garden Area" },
          { time: "02:00 PM", title: "Slow Bike Race", type: "Non-Technical", venue: "Cafe Ground Area" },
        ]
      },
      {
        department: "Mechanical Engineering",
        events: [
          { time: "12:00 PM", title: "The Auto Expert", type: "Technical", venue: "Mech Classroom" },
          { time: "12:00 PM", title: "Number Circle Cricket", type: "Non-Technical", venue: "College Ground" },
          { time: "12:00 PM", title: "Ping Pong", type: "Non-Technical", venue: "Sports Room" },
          { time: "02:30 PM", title: "Bridge Making Challenge", type: "Technical", venue: "Mech Classroom" },
        ]
      },
      {
        department: "Civil Engineering",
        events: [
          { time: "12:00 PM", title: "Design Doodle Studio", type: "Technical", venue: "Geotech Lab" },
          { time: "12:00 PM", title: "Estimation Game", type: "Gaming", venue: "Civil Lab" },
          { time: "01:00 PM", title: "The Messy Masterpiece", type: "Non-Technical", venue: "Geotech Lab" },
        ]
      },
      {
        department: "Electronics & Communication",
        events: [
          { time: "12:00 PM", title: "Tinker CAD", type: "Technical", venue: "EC Lab" },
          { time: "12:00 PM", title: "One Minute Games", type: "Non-Technical", venue: "Classroom 5" },
          { time: "12:00 PM", title: "Meme Making", type: "Non-Technical", venue: "Classroom" },
          { time: "12:00 PM", title: "Pani Puri", type: "Non-Technical", venue: "Xerox Shop" },
          { time: "12:00 PM", title: "Fun Junction", type: "Non-Technical", venue: "College Ground" },
          { time: "12:00 PM", title: "Treasure Hunt", type: "Non-Technical", venue: "Classroom 1" },
          { time: "12:00 PM", title: "Drone Racing", type: "Gaming", venue: "Main Ground" },
          { time: "02:00 PM", title: "Tug of War", type: "Non-Technical", venue: "Amphitheatre" },
        ]
      },
      {
        department: "Electrical & Electronics",
        events: [
          { time: "12:00 PM", title: "Technical Paper Presentation", type: "Technical", venue: "LH 302" },
          { time: "12:00 PM", title: "Rangoli", type: "Non-Technical", venue: "Machine Lab" },
        ]
      },
      {
        department: "Robotics Engineering",
        events: [
          { time: "12:00 PM", title: "Robo Race", type: "Technical", venue: "College Ground" },
          { time: "12:00 PM", title: "Do or Die Arena", type: "Non-Technical", venue: "Battle Arena" },
        ]
      },
      {
        department: "BCA",
        events: [
          { time: "12:00 PM", title: "Eva Intellect", type: "Technical", venue: "Classroom 1" },
          { time: "12:00 PM", title: "Navi Voice", type: "Technical", venue: "Classroom 3" },
          { time: "12:00 PM", title: "Avatar Reelverse", type: "Non-Technical", venue: "Campus" },
        ]
      },
      {
        department: "Gaming (Global)",
        events: [
          { time: "12:00 PM", title: "BGMI Tournament", type: "Gaming", venue: "CSE Classroom" },
          { time: "12:00 PM", title: "FIFA E-Football", type: "Gaming", venue: "CSE Classroom" },
          { time: "12:00 PM", title: "Pandora Warriors", type: "Gaming", venue: "Gaming Arena" },
        ]
      },
      {
        department: "General & Cultural",
        events: [
          { time: "10:00 AM", title: "Inauguration Ceremony", type: "Ceremony", venue: "Auditorium / Main Stage" },
          { time: "12:00 PM", title: "Singing", type: "Cultural", venue: "Main Stage" },
          { time: "12:00 PM", title: "Dance", type: "Cultural", venue: "Main Stage" },
          { time: "12:00 PM", title: "Mr & Miss Vencer", type: "Cultural", venue: "Main Stage" },
          { time: "12:00 PM", title: "Cosmos Crown (Fashion Show)", type: "Cultural", venue: "Auditorium" },
        ]
      }
    ]
  },
  {
    day: "Day 2",
    date: "April 11, 2026",
    departments: [
      {
        department: "Artificial Intelligence & Data Science",
        events: [
          { time: "10:00 AM", title: "TechXhibit", type: "Technical", venue: "Seminar Hall 1" },
          { time: "10:00 AM", title: "AI Prompt Battle", type: "Technical", venue: "Classroom 1" },
          { time: "10:00 AM", title: "Edible Art Arena", type: "Non-Technical", venue: "Seminar Hall 2" },
        ]
      },
      {
        department: "Computer Science Engineering",
        events: [
          { time: "10:00 AM", title: "Hack The Hunt", type: "Technical", venue: "CSE Classroom" },
          { time: "10:00 AM", title: "Idea Canvas", type: "Technical", venue: "CSE Classroom 2" },
          { time: "10:00 AM", title: "Videography", type: "Non-Technical", venue: "Campus" },
          { time: "10:00 AM", title: "Box Cricket (Day 2)", type: "Non-Technical", venue: "Sports Ground" },
          { time: "10:00 AM", title: "Lagori (Day 2)", type: "Non-Technical", venue: "Garden Area" },
          { time: "10:00 AM", title: "Slow Bike Race (Day 2)", type: "Non-Technical", venue: "Cafe Ground Area" },
        ]
      },
      {
        department: "Mechanical Engineering",
        events: [
          { time: "11:00 AM", title: "Stand-up Comedy", type: "Non-Technical", venue: "Design Lab" },
        ]
      },
      {
        department: "Civil Engineering",
        events: [
          { time: "10:00 AM", title: "Tower Stack", type: "Gaming", venue: "Civil Lab" },
          { time: "10:30 AM", title: "Pictogram X", type: "Technical", venue: "Geotech Lab" },
          { time: "11:45 AM", title: "Battle of Legends", type: "Non-Technical", venue: "Parking Area" },
        ]
      },
      {
        department: "Electronics & Communication",
        events: [
          { time: "10:00 AM", title: "Treasure Hunt (Day 2)", type: "Non-Technical", venue: "Classroom 1" },
          { time: "10:00 AM", title: "Arduino Obstacle Bot", type: "Gaming", venue: "Electronics Lab" },
          { time: "10:30 AM", title: "Pani Puri (Day 2)", type: "Non-Technical", venue: "Xerox Shop" },
          { time: "11:00 AM", title: "Fun Junction (Day 2)", type: "Non-Technical", venue: "College Ground" },
          { time: "02:00 PM", title: "Tug of War (Day 2)", type: "Non-Technical", venue: "Amphitheatre" },
        ]
      },
      {
        department: "Electrical & Electronics",
        events: [
          { time: "11:00 AM", title: "Carrom", type: "Non-Technical", venue: "LH 302" },
          { time: "12:00 PM", title: "Metal Wire Game", type: "Non-Technical", venue: "LH 301" },
        ]
      },
      {
        department: "Robotics Engineering",
        events: [
          { time: "10:00 AM", title: "Volley Ball", type: "Non-Technical", venue: "Sports Ground" },
        ]
      },
      {
        department: "BCA",
        events: [
          { time: "10:00 AM", title: "Eva Intellect (Day 2)", type: "Technical", venue: "Classroom 1" },
          { time: "10:00 AM", title: "Avatar Reelverse (Day 2)", type: "Non-Technical", venue: "Campus" },
          { time: "12:00 PM", title: "Jack's Tribal Art", type: "Non-Technical", venue: "Classroom 2" },
        ]
      },
      {
        department: "Gaming (Global)",
        events: [
          { time: "10:00 AM", title: "BGMI Tournament (Day 2)", type: "Gaming", venue: "CSE Classroom" },
          { time: "10:00 AM", title: "FIFA E-Football (Day 2)", type: "Gaming", venue: "CSE Classroom" },
          { time: "10:00 AM", title: "Pandora Warriors (Day 2)", type: "Gaming", venue: "Gaming Arena" },
        ]
      },
      {
        department: "General & Cultural",
        events: [
          { time: "06:00 PM", title: "Concert / Closing Night", type: "Ceremony", venue: "Main Stage" },
        ]
      }
    ]
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
      <PageBackground />
      <div className="container px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wider pandora-gradient-text mb-3 sm:mb-4">
            VENCER 2K26 — Schedule
          </h1>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
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
                {day.departments.map((dept, deptIndex) => (
                  <div key={dept.department + deptIndex}>
                    <div className="bg-primary/10 px-4 sm:px-5 py-1.5 border-y border-primary/20 backdrop-blur-sm">
                      <h3 className="font-display text-xs sm:text-sm tracking-wider font-bold text-primary/90 uppercase">{dept.department}</h3>
                    </div>
                    <div className="divide-y divide-border/30">
                      {dept.events.map((event, ei) => (
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