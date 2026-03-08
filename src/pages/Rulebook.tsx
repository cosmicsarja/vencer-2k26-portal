import { useState } from "react";
import { motion } from "framer-motion";
import { Download, BookOpen, FileText, X } from "lucide-react";

const Rulebook = () => {
  const [showViewer, setShowViewer] = useState(false);

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
            Rulebook
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Download the official VENCER 2K26 rulebook for complete event guidelines and regulations.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-border/50 text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto">
              <BookOpen size={36} className="text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                VENCER 2K26 Official Rulebook
              </h2>
              <p className="text-muted-foreground text-sm">
                Contains all event rules, eligibility criteria, code of conduct, and general guidelines for participants.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/VENCER_2K26_Rulebook.pdf"
                download
                className="inline-flex items-center gap-3 font-display text-sm tracking-wider px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_0_25px_hsl(25_95%_55%_/_0.4)] transition-all duration-300 hover:scale-105"
              >
                <Download size={18} />
                Download Rulebook (PDF)
              </a>
              <button
                onClick={() => setShowViewer(true)}
                className="inline-flex items-center gap-3 font-display text-sm tracking-wider px-8 py-3.5 rounded-xl border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <BookOpen size={18} />
                View Rulebook
              </button>
            </div>

            {showViewer && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full mt-4"
              >
                <button
                  onClick={() => setShowViewer(false)}
                  className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-destructive/20 transition-colors"
                >
                  <X size={16} />
                </button>
                <iframe
                  src="/VENCER_2K26_Rulebook.pdf"
                  className="w-full h-[70vh] rounded-xl border border-border/50"
                  title="VENCER 2K26 Rulebook"
                />
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6 border border-border/50 space-y-4"
          >
            <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
              <FileText size={18} className="text-fest-teal" />
              General Guidelines
            </h3>
            <ul className="space-y-3">
              {[
                "All participants must carry a valid college ID card.",
                "Registration is mandatory for all events. Spot registrations subject to availability.",
                "Participants must report to the event venue 15 minutes before the scheduled time.",
                "Any form of malpractice will lead to immediate disqualification.",
                "The decision of the judges and organizing committee is final and binding.",
                "Participants are responsible for their own belongings and equipment.",
                "Code of conduct must be followed at all times within the campus.",
                "Event-specific rules will be briefed before each event begins.",
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-fest-teal" />
                  {rule}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Rulebook;
