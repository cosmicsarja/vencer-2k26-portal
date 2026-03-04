import { motion } from "framer-motion";

const SponsorsSection = () => {
  const sponsors = ["Title Sponsor", "Gold Sponsor", "Silver Sponsor", "Media Partner", "Tech Partner", "Food Partner"];

  return (
    <section className="relative py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider fest-gradient-text mb-4">Our Sponsors</h2>
          <p className="font-body text-muted-foreground">Proudly supported by</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {sponsors.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass glass-hover rounded-xl p-8 flex items-center justify-center transition-all duration-500"
            >
              <span className="font-heading text-sm uppercase tracking-widest text-muted-foreground">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
