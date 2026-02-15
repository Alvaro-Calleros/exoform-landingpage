import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_DISPLAY, FACEBOOK_URL } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">EXOFORM</h3>
            <p className="text-primary-foreground/60 text-sm">Diseña tu forma</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-widest text-primary-foreground/50">
              Enlaces
            </h4>
            <nav className="flex flex-col gap-3">
              {["Inicio", "Productos", "Galería", "Contacto"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace("í", "i")}`}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-widest text-primary-foreground/50">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <span>contacto@exoform.com</span>
              <span>México</span>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-6 text-center text-xs text-primary-foreground/40">
          © 2026 EXOFORM. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
