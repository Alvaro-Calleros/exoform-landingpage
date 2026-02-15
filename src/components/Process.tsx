import { motion } from "framer-motion";
import { MessageCircle, Ruler, Wrench, Package } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Contacto Inicial",
    description: "Envíanos un mensaje por WhatsApp",
  },
  {
    icon: Ruler,
    title: "Toma de Medidas",
    description: "Te guiamos en el proceso de medición",
  },
  {
    icon: Wrench,
    title: "Fabricación",
    description: "Creamos tu cobertor personalizado",
  },
  {
    icon: Package,
    title: "Entrega",
    description: "Recibes tu producto con guía de cuidados",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Proceso de Personalización
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4 relative z-10">
                <step.icon size={24} />
              </div>
              <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest">
                Paso {i + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
