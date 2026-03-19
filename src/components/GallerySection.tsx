import { motion } from 'framer-motion';

const GallerySection = () => {
  // 24 placeholder cards
  const cards = Array.from({ length: 24 }, (_, i) => i);

  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-background/50 to-muted/80">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight fest-gradient-text mb-6">
            Gallery
          </h2>
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            Relive the moments from previous Vencer editions. 
            <br className="hidden sm:block" />
            <span className="text-primary font-semibold"></span>
          </p>
        </motion.div>

        {/* Card Grid - Responsive: 6 cols lg+, 4 md, 2 sm, 1 xs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {cards.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl glass-border hover:glass-border-strong shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-background/30 backdrop-blur-xl hover:bg-background/50 border border-border/50 hover:border-primary/50"
            >
              {/* Placeholder Image */}
              <div className="w-full h-48 md:h-56 lg:h-52 xl:h-40 2xl:h-44 aspect-video overflow-hidden bg-gradient-to-br from-muted to-muted-foreground/20 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500">
                <img
                  src={`/moments/123.png`}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-100"
                  loading="lazy"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Card Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <h3 className="font-display text-lg font-semibold text-white mb-1 truncate">
                    Vencer Moment {i + 1}
                  </h3>
                  <p className="text-muted-foreground/90 text-sm">
                    Event highlight · 2025
                  </p>
                </div>
              </div>
              
              {/* Hover Ring Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 blur-xl animate-pulse" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-md mx-auto">
            Want to contribute your photos? 
            <br className="sm:hidden" />
            <span className="block sm:inline">Contact us!</span>
          </p>
          <a
            href="https://www.instagram.com/aitm_belagavi_/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary/90 hover:bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glass-effect"
          >
            Share Your Moments
            <span className="w-5 h-5">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;

