import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Persona caminando con prótesis de pierna con cobertor cosmético EXOFORM" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 text-center md:text-left md:max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4"
        >
          Diseña tu forma
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground mb-6"
        >
          Cobertores Cosméticos para Prótesis de Pierna
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed"
        >
          Diseñamos y fabricamos cobertores cosméticos para prótesis de pierna, transformándolo en una extensión de identidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-sm font-semibold text-whatsapp-foreground hover:opacity-90 transition-opacity"
          >
            Consulta por WhatsApp
          </a>
          <a
            href="#productos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            Ver Productos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
