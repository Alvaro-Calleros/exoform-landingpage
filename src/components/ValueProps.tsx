import { motion } from "framer-motion";
import { Fingerprint, Gem, Heart } from "lucide-react";

const items = [
  {
    icon: Fingerprint,
    title: "Personalizado",
    description: "Cada cobertor se adapta a tu forma, estilo y personalidad. Hecho a la medida de tus necesidades.",
  },
  {
    icon: Gem,
    title: "Calidad Artesanal",
    description: "Fabricación artesanal con materiales premium. Cada pieza es cuidadosamente elaborada a mano.",
  },
  {
    icon: Heart,
    title: "Identidad Propia",
    description: "Tu prótesis se convierte en una expresión de quien eres. Diseña algo que te represente.",
  },
];

const ValueProps = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                <item.icon size={28} className="text-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
