import { motion } from "framer-motion";
import founderImg from "@/assets/custom2.jpeg";

const About = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Nuestra Historia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={founderImg}
                alt="Rafael - Fundador y Diseñador de EXOFORM"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Rafael — Fundador y Diseñador
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground leading-relaxed mb-6">
              EXOFORM nació de una experiencia personal. Como usuario de prótesis, Rafael entendió
              de primera mano la necesidad de cobertores cosméticos que fueran más que un accesorio
              funcional — que fueran una extensión de la identidad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cada pieza que creamos lleva esa misma filosofía: dignidad, empoderamiento y
              autenticidad. No fabricamos productos clínicos; creamos piezas que te permiten
              sentirte completo y expresar quien realmente eres.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desde Sinaloa, México, trabajamos con dedicación artesanal para ofrecer la más
              alta calidad a cada persona que confía en nosotros.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
