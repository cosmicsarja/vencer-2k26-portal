import { useState } from "react";
import { motion } from "framer-motion";
import { branches, culturalEvents, gamingEvents } from "@/data/events";
import EventCard from "@/components/EventCard";

const Events = () => {
  const [activeBranch, setActiveBranch] = useState(0);
  const [activeTab, setActiveTab] = useState<"branches" | "cultural" | "gaming">("branches");

  const tabs = [
    { key: "branches" as const, label: "Branch Events" },
    { key: "cultural" as const, label: "Cultural" },
    { key: "gaming" as const, label: "Gaming" },
  ];

  return (
    <section className="relative py-24 pt-28 min-h-screen">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-3xl sm:text-4xl tracking-wider fest-gradient-text mb-4">Events</h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            50+ events across technical, cultural, and gaming categories.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`font-display text-xs sm:text-sm tracking-wider px-4 sm:px-6 py-2.5 rounded-lg transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_20px_hsl(25_95%_55%_/_0.3)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "branches" && (
          <>
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {branches.map((b, i) => (
                <button
                  key={b.shortName}
                  onClick={() => setActiveBranch(i)}
                  className={`font-heading text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeBranch === i
                      ? "glass glow-border-orange text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {b.shortName}
                </button>
              ))}
            </div>

            <motion.h3
              key={branches[activeBranch].name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-heading text-xl sm:text-2xl text-center text-foreground mb-8"
            >
              {branches[activeBranch].name}
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {branches[activeBranch].events.map((event, i) => (
                <EventCard key={event.title} event={event} index={i} />
              ))}
            </div>
          </>
        )}

        {activeTab === "cultural" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {culturalEvents.map((event, i) => (
              <EventCard key={event.title} event={event} index={i} />
            ))}
          </div>
        )}

        {activeTab === "gaming" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {gamingEvents.map((event, i) => (
              <EventCard key={event.title} event={event} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
