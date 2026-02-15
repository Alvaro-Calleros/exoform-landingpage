const WHATSAPP_NUMBER = "526691547689";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me interesa un cobertor para prótesis de EXOFORM");

export const getWhatsAppLink = (customMessage?: string) => {
  const msg = customMessage ? encodeURIComponent(customMessage) : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};

export const WHATSAPP_DISPLAY = "669 154 7689";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61587638488516";
