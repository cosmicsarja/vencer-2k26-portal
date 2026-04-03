import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { GALLERY_PHOTOS } from '../config/gallery';

// ─── Lazy image component ─────────────────────────────────────────────────────
// Uses a single IntersectionObserver per image; only sets src when in view.
const LazyImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    // Use native lazy loading hint + IntersectionObserver for older browsers
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' } // start loading 200px before entering viewport
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton placeholder while not loaded */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 animate-pulse rounded" />
      )}
      <img
        ref={imgRef}
        src={inView ? src : undefined}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-90' : 'opacity-0'}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

// ─── Gallery card ─────────────────────────────────────────────────────────────
const GalleryCard = ({
  card,
  index,
  onClick,
}: {
  card: (typeof GALLERY_PHOTOS)[0];
  index: number;
  onClick: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger by index capped at 300ms so first batch pops in quickly
          setTimeout(() => setVisible(true), Math.min(index % 8, 6) * 50);
          observer.disconnect();
        }
      },
      { rootMargin: '100px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer border border-border/50 hover:border-primary/50 bg-background/30 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      {/* Image container */}
      <div className="w-full h-48 md:h-56 lg:h-52 xl:h-40 2xl:h-44 overflow-hidden bg-muted/20">
        <LazyImage
          src={`/moments/${card.filename}`}
          alt={card.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Hover overlay info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        <h3 className="font-display text-sm font-semibold text-white truncate">{card.title}</h3>
        <p className="text-muted-foreground/80 text-xs mt-0.5">{card.date} · Event highlight</p>
      </div>
    </div>
  );
};

// ─── Main GallerySection ──────────────────────────────────────────────────────
const GallerySection = () => {
  const cards = GALLERY_PHOTOS;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedImage(index);
  const closeImage = useCallback(() => setSelectedImage(null), []);

  const nextImage = useCallback(() => {
    setSelectedImage((prev) =>
      prev !== null && prev < cards.length - 1 ? prev + 1 : prev
    );
  }, [cards.length]);

  const prevImage = useCallback(() => {
    setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImage === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedImage, nextImage, prevImage, closeImage]);

  return (
    <section id="gallery" className="relative py-20 pt-24">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight fest-gradient-text mb-4">
            Gallery
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Relive the moments from previous Vencer editions.{' '}
            <span className="text-primary font-semibold">Click any photo</span> to view full size.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 md:gap-5 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <GalleryCard
              key={card.id}
              card={card}
              index={index}
              onClick={() => openImage(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="font-body text-base text-muted-foreground mb-5 max-w-md mx-auto">
            Want to contribute your photos?{' '}
            <span className="block sm:inline">Contact us!</span>
          </p>
          <a
            href="https://www.instagram.com/aitm_belagavi_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary/90 hover:bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Share Your Moments <span>→</span>
          </a>
        </motion.div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-4xl max-h-[90vh] flex flex-col"
            >
              {/* Close */}
              <button
                onClick={closeImage}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-all z-50 backdrop-blur-sm"
                aria-label="Close"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Image */}
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
                <img
                  src={`/moments/${cards[selectedImage].filename}`}
                  alt={cards[selectedImage].title}
                  className="max-w-full max-h-full object-contain"
                  decoding="async"
                  loading="eager"
                />
              </div>

              {/* Info */}
              <div className="mt-3 text-center text-white">
                <h3 className="font-display text-lg sm:text-2xl font-semibold mb-1">
                  {cards[selectedImage].title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {selectedImage + 1} of {cards.length} · {cards[selectedImage].date}
                </p>
              </div>

              {/* Nav */}
              <div className="flex justify-center items-center mt-5 gap-16">
                <button
                  onClick={prevImage}
                  disabled={selectedImage === 0}
                  className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                <button
                  onClick={nextImage}
                  disabled={selectedImage === cards.length - 1}
                  className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-all"
                  aria-label="Next"
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
