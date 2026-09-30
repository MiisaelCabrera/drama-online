import type { Lang } from "@/site.config";

export const ui: Record<Lang, {
  nav: { home: string; privacy: string; terms: string; deletion: string };
  otherLang: string;
  lastUpdated: string;
  contactPending: string;
  contactLabel: string;
  aiBadge: string;
}> = {
  es: {
    nav: { home: "Inicio", privacy: "Privacidad", terms: "Términos", deletion: "Borrado de datos" },
    otherLang: "English",
    lastUpdated: "Última actualización",
    contactPending: "Correo de contacto próximamente.",
    contactLabel: "Contacto",
    aiBadge: "Ficción · Hecho con IA",
  },
  en: {
    nav: { home: "Home", privacy: "Privacy", terms: "Terms", deletion: "Data deletion" },
    otherLang: "Español",
    lastUpdated: "Last updated",
    contactPending: "Contact email coming soon.",
    contactLabel: "Contact",
    aiBadge: "Fiction · Made with AI",
  },
};
