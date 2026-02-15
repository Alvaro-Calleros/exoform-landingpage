import { motion } from "framer-motion";
import { MessageCircle, Facebook } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_DISPLAY, FACEBOOK_URL } from "@/lib/constants";

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-whatsapp text-whatsapp-foreground px-10 py-5 text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={24} />
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#1877F2] text-white px-10 py-5 text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Facebook size={24} />
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
