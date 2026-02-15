import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";
import productGeneric from "@/assets/product-generic.jpg";
import productCustom from "@/assets/product-custom.jpg";

const products = [
  {
    image: productGeneric,
    title: "Modelo Genérico",
    price: "$3,500 MXN",
    description: "Cobertor cosmético de alta calidad en tallas estándar",
    features: [
      "Fabricación artesanal",
      "Materiales premium",
      "Guía de uso y cuidados incluida",
    ],
    cta: "Ordenar por WhatsApp",
    message: "Hola, me interesa el Modelo Genérico de cobertor para prótesis de EXOFORM",
  },
  {
    image: productCustom,
    title: "Personalizado a tu Forma",
    price: "$4,300 MXN",
    description: "Diseñado específicamente para ti y tu estilo",
    features: [
      "100% personalizado a tus medidas",
      "Elección de materiales y acabados",
      "Ajuste perfecto garantizado",
      "Guía de uso y cuidados incluida",
    ],
    cta: "Consultar Personalización",
    message: "Hola, me interesa el Modelo Personalizado de cobertor para prótesis de EXOFORM",
    featured: true,
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Productos
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Calidad artesanal al alcance de tu mano
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl overflow-hidden border ${
                product.featured
                  ? "border-foreground/20 bg-primary text-primary-foreground"
                  : "border-border bg-background"
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={`Cobertor cosmético EXOFORM - ${product.title}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="text-3xl font-display font-bold mb-4">{product.price}</p>
                <p className={`mb-6 ${product.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {product.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink(product.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center rounded-full py-3.5 text-sm font-semibold transition-colors ${
                    product.featured
                      ? "bg-whatsapp text-whatsapp-foreground hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {product.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
