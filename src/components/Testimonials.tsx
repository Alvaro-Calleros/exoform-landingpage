import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    quote: "EXOFORM cambió mi perspectiva. Ahora siento que mi prótesis es parte de mí, no algo que debo esconder.",
  },
  {
    name: "Carlos R.",
    quote: "La calidad es impresionante. El acabado y la atención al detalle superaron todas mis expectativas.",
  },
  {
    name: "Ana L.",
    quote: "El proceso fue muy sencillo y el resultado final es hermoso. Lo recomiendo al 100%.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-8 rounded-2xl bg-background border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-sm text-foreground">
                  {t.name[0]}
                </div>
                <span className="font-medium text-sm text-foreground">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
