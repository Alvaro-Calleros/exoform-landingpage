import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryItems = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  label: `Proyecto ${i + 1}`,
}));

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? galleryItems.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === galleryItems.length - 1 ? 0 : c + 1));

  const visibleCount = 3;

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Galería de Trabajos
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${current * (100 / visibleCount)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full md:w-1/3 cursor-pointer"
                  onClick={() => setExpanded(item.id)}
                >
                  <div className="aspect-[3/2] rounded-xl bg-secondary flex items-center justify-center border border-border hover:border-foreground/20 transition-colors">
                    <span className="text-muted-foreground font-display font-medium">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-foreground" : "bg-border"
              }`}
              aria-label={`Ir a proyecto ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {expanded !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setExpanded(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground"
              aria-label="Cerrar"
            >
              <X size={28} />
            </button>
            <div className="w-full max-w-3xl aspect-[3/2] rounded-xl bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground font-display text-xl">
                Proyecto {expanded}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
