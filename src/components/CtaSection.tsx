import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/constants";

const CtaSection = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            ¿Listo para Diseñar tu Forma?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-md mx-auto">
            Contáctanos hoy para una consulta personalizada
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-whatsapp text-whatsapp-foreground px-10 py-5 text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={24} />
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
