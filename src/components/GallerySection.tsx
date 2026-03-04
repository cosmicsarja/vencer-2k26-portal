import { motion } from "framer-motion";

const GallerySection = () => {
  const placeholders = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section id="gallery" className="relative py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider fest-gradient-text mb-4">Gallery</h2>
          <p className="font-body text-muted-foreground">Moments from previous editions</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {placeholders.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-xl aspect-video flex items-center justify-center overflow-hidden group cursor-pointer transition-all duration-500 hover:glow-border-orange"
            >
              <div className="text-muted-foreground/30 font-display text-xs tracking-wider">
                Coming Soon
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
