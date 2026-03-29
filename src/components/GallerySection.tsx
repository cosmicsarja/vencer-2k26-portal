import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_PHOTOS } from '../config/gallery';

const GallerySection = () => {
  const cards = GALLERY_PHOTOS;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedImage(index);
  const closeImage = () => setSelectedImage(null);
  const nextImage = () => {
    if (selectedImage !== null && selectedImage < cards.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };
  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

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
            Relive the moments from previous Vencer editions. click to see
            <br className="hidden sm:block" />
            <span className="text-primary font-semibold"></span>
          </p>
        </motion.div>

        {/* Card Grid - Responsive: 6 cols lg+, 4 md, 2 sm, 1 xs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              onClick={() => openImage(index)}
              className="group relative overflow-hidden rounded-2xl glass-border hover:glass-border-strong shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-background/30 backdrop-blur-xl hover:bg-background/50 border border-border/50 hover:border-primary/50"
            >
              {/* Placeholder Image */}
              <div className="w-full h-48 md:h-56 lg:h-52 xl:h-40 2xl:h-44 aspect-video overflow-hidden bg-gradient-to-br from-muted to-muted-foreground/20 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500">
                <img
                  src={`/moments/${card.filename}`}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 15vw"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Card Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <h3 className="font-display text-lg font-semibold text-white mb-1 truncate">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground/90 text-sm">
                    {card.date} · Event highlight
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-4xl max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={closeImage}
                className="absolute -top-12 right-0 sm:-top-10 sm:right-0 p-2 text-white hover:text-primary transition-colors z-10"
              >
                <X className="w-8 h-8 sm:w-10 sm:h-10" />
              </button>

              {/* Main Image Container */}
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
                <img
                  src={`/moments/${cards[selectedImage].filename}`}
                  alt={cards[selectedImage].title}
                  className="max-w-full max-h-full object-contain"
                  decoding="async"
                  loading="eager"
                />
              </div>

              {/* Image Info */}
              <div className="mt-4 text-center text-white">
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2">
                  {cards[selectedImage].title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {selectedImage + 1} of {cards.length} · {cards[selectedImage].date} · Event highlight
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-6 gap-4">
                <button
                  onClick={prevImage}
                  disabled={selectedImage === 0}
                  className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all duration-300 flex-shrink-0"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* Thumbnail Strip */}
                <div className="flex gap-2 overflow-x-auto flex-1 px-4 py-2">
                  {cards.map((card, index) => (
                    <button
                      key={card.id}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? 'border-primary scale-105'
                          : 'border-white/20 hover:border-white/40 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={`/moments/${card.filename}`}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextImage}
                  disabled={selectedImage === cards.length - 1}
                  className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all duration-300 flex-shrink-0"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
