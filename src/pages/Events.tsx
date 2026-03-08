import { useState } from "react";
import { motion } from "framer-motion";
import { branches, culturalEvents, gamingEvents } from "@/data/events";
import type { Event } from "@/data/events";
import EventCard from "@/components/EventCard";
import EventDetailModal from "@/components/EventDetailModal";
import RegistrationModal from "@/components/RegistrationModal";

const Events = () => {
  const [activeBranch, setActiveBranch] = useState(0);
  const [activeTab, setActiveTab] = useState<"branches" | "cultural" | "gaming">("branches");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [registrationLink, setRegistrationLink] = useState<string | null>(null);

  const tabs = [
    { key: "branches" as const, label: "Tribe Events" },
    { key: "cultural" as const, label: "Cultural" },
    { key: "gaming" as const, label: "Gaming" },
  ];

  const currentBranch = branches[activeBranch];

  const getEventsForTab = () => {
    if (activeTab === "branches") return currentBranch.events;
    if (activeTab === "cultural") return currentBranch.culturalEvents;
    return currentBranch.gamingEvents;
  };

  const getTabLabel = () => {
    if (activeTab === "branches") return "Technical";
    if (activeTab === "cultural") return "Cultural";
    return "Gaming";
  };

  // General cultural/gaming events (not branch-specific)
  const generalCulturalEvents = culturalEvents;
  const generalGamingEvents = gamingEvents;

  const branchEvents = getEventsForTab();

  const handleRegister = (formLink: string) => {
    setSelectedEvent(null);
    setRegistrationLink(formLink);
  };

  return (
    <section className="relative py-24 pt-28 min-h-screen">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-3xl sm:text-4xl tracking-wider pandora-gradient-text mb-4">Events</h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            50+ events across technical, cultural, and gaming categories. Click any event to view rules.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setActiveBranch(0); }}
              className={`font-display text-xs sm:text-sm tracking-wider px-4 sm:px-6 py-2.5 rounded-xl transition-all duration-300 font-bold ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-primary to-fest-cyan text-primary-foreground shadow-[0_0_20px_hsl(var(--fest-teal)_/_0.3)]"
                  : "bg-card/80 border-2 border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Branch selector - shown for all tabs */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {branches.map((b, i) => (
            <button
              key={b.shortName}
              onClick={() => setActiveBranch(i)}
              className={`font-heading text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 font-bold ${
                activeBranch === i
                  ? "bg-card border-2 border-primary text-primary shadow-[0_0_15px_hsl(var(--fest-teal)_/_0.2)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {b.shortName}
            </button>
          ))}
        </div>

        <motion.h3
          key={currentBranch.name + activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-heading text-xl sm:text-2xl text-center text-foreground mb-8 font-bold"
        >
          {currentBranch.name} — {getTabLabel()}
        </motion.h3>

        {branchEvents.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {branchEvents.map((event, i) => (
              <EventCard key={event.title} event={event} index={i} onClick={() => setSelectedEvent(event)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground font-heading">
            No {getTabLabel().toLowerCase()} events for this branch yet.
          </div>
        )}

        {/* Show general cultural/gaming events below branch events */}
        {activeTab === "cultural" && generalCulturalEvents.length > 0 && (
          <div className="mt-16">
            <h3 className="font-heading text-xl sm:text-2xl text-center text-foreground mb-8 font-bold">
              General Cultural Events
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {generalCulturalEvents.map((event, i) => (
                <EventCard key={event.title} event={event} index={i} onClick={() => setSelectedEvent(event)} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "gaming" && generalGamingEvents.length > 0 && (
          <div className="mt-16">
            <h3 className="font-heading text-xl sm:text-2xl text-center text-foreground mb-8 font-bold">
              General Gaming Events
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {generalGamingEvents.map((event, i) => (
                <EventCard key={event.title} event={event} index={i} onClick={() => setSelectedEvent(event)} />
              ))}
            </div>
          </div>
        )}
      </div>

      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onRegister={handleRegister}
      />
      <RegistrationModal
        formLink={registrationLink}
        onClose={() => setRegistrationLink(null)}
      />
    </section>
  );
};

export default Events;
