import { motion } from "framer-motion";
import { BookOpen, Sparkles, Headphones, Video } from "lucide-react";

const benefits = [
  { icon: BookOpen, title: "Guía de uso detallada" },
  { icon: Sparkles, title: "Instrucciones de limpieza y mantenimiento" },
  { icon: Headphones, title: "Soporte post-venta por WhatsApp" },
  { icon: Video, title: "Videos tutoriales", badge: "Próximamente" },
];

const Benefits = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Qué Incluye tu Producto
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 p-6 rounded-xl border border-border bg-card text-center"
            >
              <b.icon size={28} className="text-foreground" />
              <p className="font-medium text-foreground text-sm leading-snug">
                {b.title}
              </p>
              {b.badge && (
                <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-medium">
                  {b.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
